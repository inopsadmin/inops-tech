const css = `
.iph{--navy:#0b1f3a;--blue:#1d5fd1;--blue2:#2f7bf5;--ink:#14213a;--muted:#55627a;--line:#e3e8f0;--green:#16a34a;font-family:Inter,system-ui,sans-serif;color:var(--ink);background:#fff;overflow:hidden}
.iph *{box-sizing:border-box;margin:0;padding:0}
.iph .hero{display:grid;grid-template-columns:48% 52%;background:linear-gradient(120deg,#f7fafe 0%,#eef4fd 55%,#e3edfc 100%)}
.iph .hero.warm{background:linear-gradient(120deg,#f8fbf9 0%,#eef7f2 50%,#e6f0fb 100%)}
.iph .copy{padding:60px 28px 48px 56px;display:flex;flex-direction:column;justify-content:center}
.iph .eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--blue);background:#fff;border:1px solid #cddcfb;padding:6px 12px;border-radius:999px;width:max-content;max-width:100%}
.iph .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--blue);flex:none}
.iph h1{font-size:40px;line-height:1.15;font-weight:800;letter-spacing:-1px;margin:20px 0 18px;color:var(--navy)}
.iph h1 em{font-style:normal;color:var(--blue)}
.iph .warm h1 em{color:#0f8a4b}
.iph .sub{font-size:18px;line-height:1.6;color:var(--muted);max-width:500px;margin-bottom:28px}
.iph .sub b{color:var(--ink);font-weight:600}
.iph .btns{display:flex;gap:12px;flex-wrap:wrap}
.iph .b1{background:var(--blue);color:#fff;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer}
.iph .b2{border:1.5px solid #c9d3e3;color:var(--ink);background:#fff;padding:11px 22px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer}
.iph .stats{display:flex;gap:28px;margin-top:28px;padding-top:22px;border-top:1px solid #d9e3f3;max-width:480px}
.iph .stats b{display:block;font-size:23px;font-weight:800;color:var(--navy);letter-spacing:-.5px}
.iph .stats span{font-size:12.5px;color:var(--muted)}
.iph .video-side{display:flex;align-items:center;justify-content:center;padding:40px 48px 40px 16px}
.iph .video-side video{width:100%;height:100%;max-height:480px;object-fit:cover;border-radius:18px;box-shadow:0 20px 48px rgba(29,95,209,.18);display:block}
.iph .life{background:#fff;border-top:1px solid var(--line);padding:30px 56px 34px}
.iph .life .lbl{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:16px}
.iph .cov{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.iph .seg{border:1px solid #e3e8f0;background:#f7f9fc;border-radius:12px;padding:14px 14px 16px}
.iph .seg i{font-style:normal;font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#94a3b8;display:block;margin-bottom:8px}
.iph .seg b{display:block;font-size:16px;font-weight:800;color:#475569;letter-spacing:-.2px}
.iph .seg span{font-size:12.5px;color:#64748b;line-height:1.45;display:block;margin-top:4px}
.iph .seg.add{background:#eef4fd;border-color:#bcd2fb}
.iph .seg.add i{color:var(--blue)}.iph .seg.add b{color:var(--navy)}
.iph .proof{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 56px;border-top:1px solid var(--line);background:#fbfcfe;flex-wrap:wrap;font-size:13px;font-weight:600;color:var(--ink)}
.iph .proof .lbl{font-size:12px;font-weight:600;color:#8a96a8;text-transform:uppercase;letter-spacing:.08em}
.iph .proof a{color:var(--blue);text-decoration:none}
@media (max-width:860px){
 .iph .hero{grid-template-columns:1fr}
 .iph .copy{padding:40px 16px 20px}
 .iph h1{font-size:30px}
 .iph .sub{font-size:16px}
 .iph .stats{gap:18px}
 .iph .visual{padding:16px 16px 36px;grid-template-columns:42% 1fr}
 .iph .reader{width:86px;height:160px}
 .iph .phone{width:118px;height:226px}
 .iph .life{padding:26px 16px}
 .iph .cov{grid-template-columns:1fr 1fr}
 .iph .proof{padding:18px 16px}
 .iph .video-side{padding:16px 16px 36px}
}
`;

type Seg = { add?: boolean; tag: string; title: string; text: string };

function Strip({ label, items }: { label: string; items: Seg[] }) {
  return (
    <div className="life">
      <div className="lbl">{label}</div>
      <div className="cov">
        {items.map((s) => (
          <div key={s.title} className={s.add ? "seg add" : "seg"}>
            <i>{s.tag}</i>
            <b>{s.title}</b>
            <span>{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EwaHero() {
  return (
    <section>
      <div className="hero warm">
        <div className="copy">
          <span className="eyebrow"><i />Salary++ by InOps</span>
          <h1>
            Earned Wage Access That Runs on <em>Verified Attendance</em>
          </h1>
          <p className="sub">
            <b>Workers draw wages they have already earned, on any day of the month.</b> The limit comes
            from gate-verified attendance, and payroll settles it automatically.
          </p>
          <div className="btns">
            <span className="b1">Book a Demo</span>
            <span className="b2">How Salary++ Works</span>
          </div>
          <div className="stats">
            <div><b>₹0</b><span>employer capital</span></div>
            <div><b>Any day</b><span>of the month</span></div>
            <div><b>Auto</b><span>payroll settlement</span></div>
          </div>
        </div>

        <div className="video-side">
          <video
            src="/videos/ewa.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <Strip
        label="Most earned wage apps start at the withdrawal. Salary++ starts at the gate."
        items={[
          { add: true, tag: "InOps adds", title: "1. Work is verified", text: "Face readers record each shift" },
          { add: true, tag: "InOps adds", title: "2. Earnings are calculated", text: "From attendance in CLMS and payroll" },
          { tag: "Standard EWA", title: "3. The worker withdraws", text: "Within the limit you set" },
          { add: true, tag: "InOps adds", title: "4. Payroll settles it", text: "Deducted automatically on payday" },
        ]}
      />

      <div className="proof">
        <span className="lbl">How it is run</span>
        <span>Funded by a regulated NBFC partner</span>
        <span>Fees disclosed upfront</span>
        <span>ISO/IEC 27001 certified</span>
        <span>
          Are you a worker?{" "}
          <a href="https://sambal.work" target="_blank" rel="noopener noreferrer">Visit sambal.work →</a>
        </span>
      </div>
    </section>
  );
}

export default function InOpsPageHero({ variant = "ewa" }: { variant?: "ewa" | "identity" }) {
  return (
    <div className="iph">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {variant === "ewa" && <EwaHero />}
    </div>
  );
}
