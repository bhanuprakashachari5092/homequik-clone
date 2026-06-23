import { describe, it, expect } from "vitest";
import { renderErrorPage } from "../lib/error-page";

describe("Black Box Testing - renderErrorPage contract verification", () => {
  it("should return a complete valid HTML document with correct doctype", () => {
    const html = renderErrorPage();
    expect(html).toContain("<!doctype html>");
    expect(html).toContain("<html");
    expect(html).toContain("</html>");
  });

  it("should contain correct page title and heading text", () => {
    const html = renderErrorPage();
    expect(html).toContain("<title>This page didn't load</title>");
    expect(html).toContain("<h1>This page didn't load</h1>");
  });

  it("should provide the reload button and a link to return home", () => {
    const html = renderErrorPage();
    // Verify the visual controls are present for users
    expect(html).toContain("location.reload()");
    expect(html).toContain('href="/"');
    expect(html).toContain("Try again");
    expect(html).toContain("Go home");
  });

  it("should include necessary CSS style definitions for modern styling", () => {
    const html = renderErrorPage();
    expect(html).toContain("grid");
    expect(html).toContain("place-items: center");
    expect(html).toContain(".card");
    expect(html).toContain(".actions");
  });
});
