import { describe, it, expect, vi, beforeEach, afterEach, beforeAll } from "vitest";

// A container to keep track of listeners registered by the target module
const registeredListeners: Record<string, Function[]> = {};

// Mock addEventListener on globalThis before importing error-capture
globalThis.addEventListener = vi.fn((event: string, callback: any) => {
  if (!registeredListeners[event]) {
    registeredListeners[event] = [];
  }
  registeredListeners[event].push(callback);
});

let consumeLastCapturedError: Function;

beforeAll(async () => {
  // Use dynamic import to ensure the mock addEventListener is in place first (avoid ESM hoisting issue)
  const mod = await import("../lib/error-capture");
  consumeLastCapturedError = mod.consumeLastCapturedError;
});

// Regexp extracted from useLocalSafeImage.ts to test its matching behavior (White Box branch coverage)
const isLocalNetworkRegex = /^(https?:\/\/)?(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+|.*\.local)(:\d+)?(\/|$)/i;

describe("White Box Testing - useLocalSafeImage regex & error-capture logic", () => {
  describe("isLocalNetwork regex matching", () => {
    it("should match localhost and loopback IP", () => {
      expect(isLocalNetworkRegex.test("http://localhost")).toBe(true);
      expect(isLocalNetworkRegex.test("https://127.0.0.1:3000/")).toBe(true);
      expect(isLocalNetworkRegex.test("localhost")).toBe(true);
    });

    it("should match private IP ranges", () => {
      expect(isLocalNetworkRegex.test("http://192.168.1.15")).toBe(true);
      expect(isLocalNetworkRegex.test("http://10.0.0.1")).toBe(true);
      expect(isLocalNetworkRegex.test("http://172.16.0.1")).toBe(true);
      expect(isLocalNetworkRegex.test("http://172.31.254.254")).toBe(true);
    });

    it("should match .local domains", () => {
      expect(isLocalNetworkRegex.test("http://my-pc.local/image.png")).toBe(true);
    });

    it("should NOT match public IP addresses or domains", () => {
      expect(isLocalNetworkRegex.test("https://google.com")).toBe(false);
      expect(isLocalNetworkRegex.test("https://8.8.8.8")).toBe(false);
      expect(isLocalNetworkRegex.test("https://172.32.0.1")).toBe(false); // Out of private range (172.16-172.31)
      expect(isLocalNetworkRegex.test("https://192.169.1.1")).toBe(false); // Out of private range (192.168)
    });
  });

  describe("error-capture consumeLastCapturedError logic", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
      // Ensure we consume any residual captured error
      consumeLastCapturedError();
    });

    it("should return undefined initially", () => {
      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("should capture and consume errors triggered by error event handler", () => {
      const errorObj = new Error("Test captured error");
      
      // Simulate error event invocation
      const errorCallbacks = registeredListeners["error"] || [];
      expect(errorCallbacks.length).toBeGreaterThan(0);
      
      for (const cb of errorCallbacks) {
        cb({ error: errorObj });
      }
      
      // consumeLastCapturedError should return the captured error
      expect(consumeLastCapturedError()).toBe(errorObj);
      
      // After consumption, it should be reset to undefined
      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("should capture and consume errors triggered by unhandled promise rejection", () => {
      const reasonObj = new Error("Unhandled promise rejection");
      
      const rejectionCallbacks = registeredListeners["unhandledrejection"] || [];
      expect(rejectionCallbacks.length).toBeGreaterThan(0);
      
      for (const cb of rejectionCallbacks) {
        cb({ reason: reasonObj });
      }
      
      // consumeLastCapturedError should return the captured rejection reason
      expect(consumeLastCapturedError()).toBe(reasonObj);
      
      // After consumption, it should be reset to undefined
      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("should expire the captured error after TTL of 5000ms", () => {
      const errorObj = new Error("Expired error");
      const errorCallbacks = registeredListeners["error"] || [];
      
      for (const cb of errorCallbacks) {
        cb({ error: errorObj });
      }

      // Fast-forward time by 6000ms (beyond the 5000ms TTL)
      vi.advanceTimersByTime(6000);

      // Should return undefined due to TTL expiry
      expect(consumeLastCapturedError()).toBeUndefined();
    });
  });
});
