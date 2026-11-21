const css = `
.fa{font-family:var(--font-inter),Inter,system-ui,sans-serif;position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;min-height:100vh}
.fa *{box-sizing:border-box;margin:0;padding:0}
.fa .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.fa .ov{position:absolute;inset:0;background:linear-gradient(105deg,rgba(6,13,30,.92) 0%,rgba(6,13,30,.72) 55%,rgba(6,13,30,.4) 100%)}
.fa .content{position:relative;z-index:2;padding:96px 64px 0}
.fa .eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;color:#fff;background:rgba(29,95,209,.18);border:1px solid rgba(56,189,248,.3);padding:6px 14px;border-radius:999px;letter-spacing:.05em;text-transform:uppercase;margin-bottom:16px}
.fa .eyebrow i{width:6px;height:6px;border-radius:50%;background:#38bdf8;flex:none;animation:fa-p 2s ease-in-out infinite}
@keyframes fa-p{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
.fa h1{font-size:38px;line-height:1.1;font-weight:800;letter-spacing:-1px;color:#fff;margin-bottom:14px;max-width:640px}
.fa h1 em{font-style:normal;background:linear-gradient(90deg,#38bdf8 0%,#2f7bf5 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.fa .sub{font-size:15px;line-height:1.6;color:#94a3b8;margin-bottom:20px;max-width:560px}
.fa .btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.fa .b1{background:#1d5fd1;color:#fff;padding:11px 20px;border-radius:999px;font-weight:700;font-size:13px;text-decoration:none;transition:background .2s,box-shadow .2s;box-shadow:0 8px 24px rgba(29,95,209,.4)}
.fa .b1:hover{background:#1a53bc;box-shadow:0 12px 32px rgba(29,95,209,.55)}
.fa .b2{border:1.5px solid rgba(255,255,255,.3);color:#e2e8f0;padding:10px 20px;border-radius:999px;font-weight:600;font-size:13px;text-decoration:none;background:rgba(255,255,255,.06);backdrop-filter:blur(8px);transition:background .2s}
.fa .b2:hover{background:rgba(255,255,255,.12)}
.fa .stats{display:flex;gap:24px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.1);padding-top:16px;margin-bottom:20px}
.fa .stat strong{display:block;font-size:20px;font-weight:800;letter-spacing:-.5px;color:#fff}
.fa .stat span{font-size:11px;color:#64748b;margin-top:1px;display:block}

.fa .strip{position:relative;z-index:2;padding:16px 56px;border-top:1px solid rgba(255,255,255,.08)}
.fa .strip-lead{font-size:14px;font-weight:700;color:#e2e8f0;margin-bottom:12px}
.fa .sg{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.fa .step{border-radius:12px;padding:14px 14px}
.fa .step.hi{background:rgba(29,95,209,.18);border:1.5px solid rgba(56,189,248,.2);text-decoration:none;transition:background .2s,border-color .2s}
.fa .step.hi:hover{background:rgba(29,95,209,.28);border-color:rgba(56,189,248,.5)}
.fa .step.mu{background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.08);text-decoration:none;transition:background .2s}
.fa .step .stag{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;display:block;margin-bottom:6px}
.fa .step.hi .stag{color:#38bdf8}
.fa .step.mu .stag{color:#475569}
.fa .step h3{font-size:13.5px;font-weight:700;margin-bottom:4px}
.fa .step.hi h3{color:#e2e8f0}
.fa .step.mu h3{color:#64748b}
.fa .step p{font-size:12px;line-height:1.5}
.fa .step.hi p{color:#64748b}
.fa .step.mu p{color:#475569}

.fa .trust{position:relative;z-index:2;padding:12px 56px 20px;display:flex;flex-wrap:wrap;align-items:center;gap:0}
.fa .trust .lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#334155;margin-right:16px}
.fa .trust .item{font-size:12.5px;font-weight:600;color:#94a3b8;padding:0 12px;border-left:1px solid rgba(255,255,255,.1)}
.fa .trust .item a{color:#38bdf8;text-decoration:none}
.fa .trust .item a:hover{text-decoration:underline}


@media(max-width:1024px){
 .fa .strip{padding:14px 24px}
 .fa .trust{padding:10px 24px 16px}
 .fa .sg{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
 .fa .content{padding:96px 24px 0}
 .fa h1{font-size:28px;letter-spacing:-.5px}
 .fa .sub{font-size:14px}
 .fa .stats{gap:16px}
 .fa .strip{padding:14px 16px}
 .fa .sg{grid-template-columns:1fr 1fr;gap:8px}
 .fa .trust{padding:10px 16px 16px}
 .fa .trust .item{font-size:11.5px;padding:0 8px}
}
`;

import Image from "next/image";
import Link from "next/link";

export default function FaceAttendancePage() {
  return (
    <div style={{ marginTop: "-72px" }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="fa">
        <Image
          className="bg"
          src="/images/inops_face_attendance_hero_optimized.webp"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="ov" aria-hidden />

        {/* Hero copy */}
        <div className="content">
          <span className="eyebrow">
            <i />
            Salary++ by InOps
          </span>
          <h1>
            Earned Wage Access That Runs on <em>Verified Attendance</em>
          </h1>
          <p className="sub">
            Workers draw wages they have already earned, on any day of the month. The limit comes from gate-verified attendance, and payroll settles it automatically.
          </p>
          <div className="btns">
            <Link href="/contact" className="b1">Book a Demo</Link>
            <Link href="#how-it-works" className="b2">How Salary++ Works</Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>₹0</strong>
              <span>employer capital</span>
            </div>
            <div className="stat">
              <strong>Any day</strong>
              <span>of the month</span>
            </div>
            <div className="stat">
              <strong>Auto</strong>
              <span>payroll settlement</span>
            </div>
          </div>
        </div>

        {/* Step strip */}
        <div className="strip" id="how-it-works">
          <p className="strip-lead">Most earned wage apps start at the withdrawal. Salary++ starts at the gate.</p>
          <div className="sg">
            <Link href="/face-recognition-attendance" className="step hi">
              <span className="stag">InOps adds</span>
              <h3>1. Work is verified</h3>
              <p>Face readers record each shift</p>
            </Link>
            <Link href="/contract-labour-management" className="step hi">
              <span className="stag">InOps adds</span>
              <h3>2. Earnings are calculated</h3>
              <p>From attendance in CLMS and payroll</p>
            </Link>
            <Link href="/earned-wage-access" className="step mu">
              <span className="stag">Standard EWA</span>
              <h3>3. The worker withdraws</h3>
              <p>Within the limit you set</p>
            </Link>
            <Link href="/hris" className="step hi">
              <span className="stag">InOps adds</span>
              <h3>4. Payroll settles it</h3>
              <p>Deducted automatically on payday</p>
            </Link>
          </div>
        </div>

        {/* Trust row */}
        <div className="trust">
          <span className="lbl">How it is run</span>
          <span className="item">Funded by a regulated NBFC partner</span>
          <span className="item">Fees disclosed upfront</span>
          <span className="item">ISO/IEC 27001 certified</span>
          <span className="item">
            Are you a worker?{" "}
            <a href="https://sambal.work" target="_blank" rel="noopener noreferrer">Visit sambal.work →</a>
          </span>
        </div>

      </div>
    </div>
  );
}
