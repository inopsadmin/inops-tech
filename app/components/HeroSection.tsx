const css = `
.ih{font-family:var(--font-inter),Inter,system-ui,sans-serif;position:relative;min-height:100vh;width:100%;display:flex;align-items:center}
.ih *{box-sizing:border-box;margin:0;padding:0}
.ih .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.ih .content{position:relative;z-index:2;padding:0 64px;max-width:680px}
.ih .tabs-bar{position:absolute;bottom:0;left:0;right:0;z-index:3;display:flex;align-items:center;gap:14px;padding:20px 56px 32px}
.ih .tab{flex:1;display:flex;align-items:center;justify-content:center;padding:14px 10px;border:1.5px solid rgba(45,212,191,.5);border-radius:16px;font-size:13.5px;font-weight:600;color:#e2e8f0;text-decoration:none;background:transparent;transition:background .2s,border-color .2s,color .2s;white-space:nowrap}
.ih .tab:hover{background:rgba(45,212,191,.08);border-color:rgba(45,212,191,.8);color:#fff}
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
@media(max-width:768px){
 .ih .content{padding:0 24px;max-width:100%}
 .ih h1{font-size:34px;letter-spacing:-1px}
 .ih .sub{font-size:16px}
 .ih .tabs-bar{bottom:0;padding:14px 16px;gap:8px;flex-wrap:wrap}
 .ih .tab{flex:1 1 calc(33% - 8px);font-size:12px;padding:10px 6px}
}


`;

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div style={{ marginTop: "-72px" }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="ih">
        <Image
          className="bg"
          src="/images/imagehome.webp"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="content">
          <span className="eyebrow">
            <i />
            InOps · Bengaluru · Since 2014
          </span>
          <h1>
            Workforce Compliance &amp; <em>Biometric Attendance</em> for Indian Plants
          </h1>
          <p className="sub">
            <b>InOps is a Bengaluru company that builds contract labour management (CLMS), biometric attendance and compliance systems for Indian manufacturing, defence and infrastructure plants.</b>{" "}
            Since 2014 we have managed 3,000+ attendance devices across 70+ sites, connecting the factory gate to payroll and statutory registers on one platform.
          </p>
          <div className="btns">
            <Link href="/contact" className="b1">Book a Demo</Link>
            <Link href="#solutions" className="b2">Explore Solutions</Link>
          </div>
        </div>
        <div className="tabs-bar">
          <Link href="/face-recognition-attendance" className="tab">Verify</Link>
          <Link href="/biometric-devices"           className="tab">Gate Hardware</Link>
          <Link href="/cctv-attendance"             className="tab">Attendance</Link>
          <Link href="/contract-labour-management"  className="tab">Compliance</Link>
          <Link href="/hris"                        className="tab">Wages</Link>
          <Link href="/earned-wage-access"          className="tab">Earned Wages</Link>
        </div>
      </div>

    </div>
  );
}
