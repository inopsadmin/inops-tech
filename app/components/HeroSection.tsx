const css = `
.ih{font-family:var(--font-inter),Inter,system-ui,sans-serif;position:relative;min-height:100vh;width:100%;display:flex;align-items:center}
.ih *{box-sizing:border-box;margin:0;padding:0}
.ih .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.ih .content{position:relative;z-index:2;padding:0 64px;max-width:680px}
.ih .eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;color:#7dd3fc;background:rgba(29,95,209,.18);border:1px solid rgba(56,189,248,.3);padding:7px 16px;border-radius:999px;letter-spacing:.05em;text-transform:uppercase;margin-bottom:28px}
.ih .eyebrow i{width:6px;height:6px;border-radius:50%;background:#38bdf8;flex:none;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
.ih h1{font-size:38px;line-height:1.1;font-weight:800;letter-spacing:-1px;color:#fff;margin-bottom:22px}
.ih h1 em{font-style:normal;background:linear-gradient(90deg,#38bdf8 0%,#2f7bf5 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ih .sub{font-size:15px;line-height:1.65;color:#94a3b8;margin-bottom:36px}
.ih .sub b{color:#cbd5e1;font-weight:600}
.ih .btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px}
.ih .b1{background:#1d5fd1;color:#fff;padding:12px 22px;border-radius:999px;font-weight:700;font-size:13px;text-decoration:none;cursor:pointer;transition:background .2s,box-shadow .2s;box-shadow:0 8px 24px rgba(29,95,209,.4)}
.ih .b1:hover{background:#1a53bc;box-shadow:0 12px 32px rgba(29,95,209,.55)}
.ih .b2{border:1.5px solid rgba(255,255,255,.3);color:#e2e8f0;padding:11px 22px;border-radius:999px;font-weight:600;font-size:13px;text-decoration:none;cursor:pointer;background:rgba(255,255,255,.06);backdrop-filter:blur(8px);transition:background .2s}
.ih .b2:hover{background:rgba(255,255,255,.12)}
.ih .stats{display:flex;gap:40px;padding-top:32px;border-top:1px solid rgba(255,255,255,.1)}
.ih .stats b{display:block;font-size:22px;font-weight:800;color:#fff;letter-spacing:-.5px}
.ih .stats span{font-size:11px;color:#64748b;margin-top:3px;display:block;letter-spacing:.02em}

@media(max-width:768px){
 .ih .content{padding:0 24px;max-width:100%}
 .ih h1{font-size:34px;letter-spacing:-1px}
 .ih .sub{font-size:16px}
 .ih .stats{gap:24px}
 .ih .stats b{font-size:22px}
}
`;

export default function HeroSection() {
  return (
    <div style={{ marginTop: "-72px" }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="ih">
        <img className="bg" src="/images/image%20(3).webp" alt="" aria-hidden fetchPriority="high" />
        <div className="content">
          <span className="eyebrow">
            <i />
            Hardware + Software + Wages, from one company
          </span>
          <h1>
            Contract Labour Compliance That{" "}
            <em>Starts at the Gate</em>
          </h1>
          <p className="sub">
            <b>We build the face readers, the CLMS and the wage layer, and support all three on site.</b>{" "}
            Unverified workers stay out. Wages run on gate-verified attendance.
          </p>
          <div className="btns">
            <a href="/contact" className="b1">Book a Demo</a>
            <a href="/contract-labour-management" className="b2">See Iddion RegX CLMS →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
