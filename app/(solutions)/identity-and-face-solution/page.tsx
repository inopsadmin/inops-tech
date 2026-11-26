const css = `
.fa{font-family:var(--font-inter),Inter,system-ui,sans-serif;position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;min-height:100vh}
.fa *{box-sizing:border-box;margin:0;padding:0}
.fa .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.fa .ov{display:none}
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

.fa .trust{position:relative;z-index:2;padding:16px 56px 28px;display:flex;flex-wrap:wrap;align-items:flex-start;gap:20px 40px}
.fa .trust .tblock{display:flex;flex-direction:column;gap:6px}
.fa .trust .lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#334155}
.fa .trust .regx{font-size:14px;font-weight:700;color:#38bdf8;text-decoration:none}
.fa .trust .regx span{display:block;font-size:11.5px;font-weight:400;color:#64748b;margin-top:1px}
.fa .trust .family{display:flex;flex-wrap:wrap;gap:6px 0;align-items:center}
.fa .trust .family a{font-size:12px;font-weight:600;color:#94a3b8;text-decoration:none;padding:0 10px;border-left:1px solid rgba(255,255,255,.1);transition:color .15s}
.fa .trust .family a:first-child{border-left:none;padding-left:0}
.fa .trust .family a:hover{color:#e2e8f0}


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
            Identity &amp; Face Solutions for Factories
          </span>
          <h1>
            Face Recognition Attendance on <em>Reader, Mobile and CCTV</em>
          </h1>
          <p className="sub">
            Enrol a worker's face once. It then works on our own face reader, on the mobile app and on your existing CCTV cameras, and feeds CLMS, HRIS and payroll.
          </p>
          <div className="btns">
            <Link href="/contact" className="b1">Get a Quote</Link>
            <Link href="#how-it-works" className="b2">Compare the Three Options</Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>3,000+</strong>
              <span>devices live</span>
            </div>
            <div className="stat">
              <strong>70+</strong>
              <span>sites</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>ways to capture</span>
            </div>
          </div>
        </div>

        {/* Step strip */}
        <div className="strip" id="how-it-works">
          <p className="strip-lead">Three ways to capture a face. One attendance record.</p>
          <div className="sg">
            <Link href="/face-recognition-attendance" className="step hi">
              <span className="stag">Best for plant gates</span>
              <h3>Gate reader</h3>
              <p>High-volume shift changes, with turnstiles</p>
            </Link>
            <Link href="/mobile-app-attendance" className="step hi">
              <span className="stag">Best for field sites</span>
              <h3>Mobile app</h3>
              <p>Only a phone needed, GPS-checked</p>
            </Link>
            <Link href="/cctv-attendance" className="step hi">
              <span className="stag">Best for open areas</span>
              <h3>CCTV</h3>
              <p>Uses the IP cameras you already have</p>
            </Link>
            <Link href="/contract-labour-management" className="step hi">
              <span className="stag">All three feed</span>
              <h3>Iddion RegX</h3>
              <p>One record for CLMS, HRIS and payroll</p>
            </Link>
          </div>
        </div>

        {/* Trust row */}
        <div className="trust">
          <div className="tblock">
            <span className="lbl">Also in this family</span>
            <div className="family">
              <Link href="/biometric-devices" className="">Biometric devices</Link>
              <Link href="/turnstiles-access" className="">Turnstiles &amp; flap barriers</Link>
              <Link href="/self-service-kiosk" className="">Self-service kiosk</Link>
              <Link href="/accessories" className="">Accessories</Link>
              <Link href="/services/biometric-amc" className="">Biometric AMC</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
