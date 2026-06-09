import { a as ae } from "./lottiefiles__dotlottie-web.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "./react.mjs";
const o = ({ animationId: e, autoplay: t, backgroundColor: o2, className: s2, createDotLottie: c2, data: l, dotLottieRefCallback: u, layout: d, loop: f, mode: p, playOnHover: m, renderConfig: h, segment: g, speed: _, src: v, stateMachineConfig: y, stateMachineId: b, style: x, themeData: S, themeId: C, useFrameInterpolation: w, workerId: T, ...E }) => {
  let D = reactExports.useRef(null), O = reactExports.useRef(null), k = reactExports.useRef(u), A = { speed: _, mode: p, loop: f, useFrameInterpolation: w, segment: g, backgroundColor: o2, autoplay: t, themeId: C, workerId: T, src: v, data: l, layout: d, renderConfig: h, animationId: e, stateMachineConfig: y, stateMachineId: b }, j = reactExports.useRef(A);
  k.current = u, j.current = A;
  let M = reactExports.useCallback((e2) => {
    O.current = e2, e2 ? D.current = c2({ ...j.current, canvas: e2 }) : (D.current?.destroy(), D.current = null), k.current?.(D.current);
  }, []);
  return reactExports.useEffect(() => {
    let e2 = (e3) => {
      m && (e3.type === `mouseenter` && D.current?.play(), e3.type === `mouseleave` && D.current?.pause());
    };
    return O.current?.addEventListener(`mouseenter`, e2), O.current?.addEventListener(`mouseleave`, e2), () => {
      O.current?.removeEventListener(`mouseenter`, e2), O.current?.removeEventListener(`mouseleave`, e2);
    };
  }, [m]), reactExports.useEffect(() => {
    D.current?.setSpeed(_ ?? 1);
  }, [_]), reactExports.useEffect(() => {
    D.current?.setMode(p ?? `forward`);
  }, [p]), reactExports.useEffect(() => {
    D.current?.setLoop(f ?? false);
  }, [f]), reactExports.useEffect(() => {
    D.current?.setUseFrameInterpolation(w ?? true);
  }, [w]), reactExports.useEffect(() => {
    typeof g?.[0] == `number` && typeof g[1] == `number` ? D.current?.setSegment(g[0], g[1]) : D.current?.resetSegment();
  }, [g]), reactExports.useEffect(() => {
    D.current?.setBackgroundColor(o2 ?? ``);
  }, [o2]), reactExports.useEffect(() => {
    D.current?.setRenderConfig(h ?? {});
  }, [JSON.stringify(h)]), reactExports.useEffect(() => {
    typeof l != `string` && typeof l != `object` || D.current?.load({ data: l, ...j.current });
  }, [l]), reactExports.useEffect(() => {
    typeof v == `string` && D.current?.load({ src: v, ...j.current });
  }, [v]), reactExports.useEffect(() => {
    D.current?.setMarker(E.marker ?? ``);
  }, [E.marker]), reactExports.useEffect(() => {
    D.current?.isLoaded && D.current.activeAnimationId !== e && D.current.loadAnimation(e ?? ``);
  }, [e]), reactExports.useEffect(() => {
    typeof C == `string` && D.current?.setTheme(C);
  }, [C]), reactExports.useEffect(() => {
    D.current?.setThemeData(S ?? ``);
  }, [S]), reactExports.useEffect(() => {
    D.current?.setLayout(d ?? {});
  }, [d?.fit, d?.align?.[0], d?.align?.[1]]), reactExports.useEffect(() => {
    D.current?.isLoaded && (typeof b == `string` && b ? D.current.stateMachineLoad(b) && D.current.stateMachineStart() : D.current.stateMachineStop());
  }, [b]), reactExports.useEffect(() => {
    D.current?.stateMachineSetConfig(y ?? null);
  }, [y]), jsxRuntimeExports.jsx(`div`, { className: s2, ...!s2 && { style: { width: `100%`, height: `100%`, lineHeight: 0, ...x } }, children: jsxRuntimeExports.jsx(`canvas`, { ref: M, style: { width: `100%`, height: `100%` }, ...E }) });
}, s = (t) => new ae(t), c = (e) => jsxRuntimeExports.jsx(o, { ...e, createDotLottie: s });
export {
  c
};
