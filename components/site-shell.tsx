"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  ["首页", "/#home"],
  ["作品", "/#work"],
  ["关于我", "/#about"],
  ["经历", "/#experience"],
  ["联系方式", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-wrap">
        <Link className="wordmark" href="/#home" aria-label="夏炜城个人作品集首页">
          <span>XWC</span><span className="wordmark-sub">产品 · 硬件 · AI</span>
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
          {open ? "关闭" : "菜单"}
        </button>
        <nav id="site-nav" className={`nav-links ${open ? "is-open" : ""}`} aria-label="主导航">
          {nav.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-resume" href="/assets/resume-pdf-placeholder.txt" download>下载简历</a>
        </nav>
      </div>
    </header>
  );
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { rootMargin: "0px 0px -8%" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);
  return <div ref={setNode} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export function MediaPlaceholder({ label, src, alt, badge = "CONCEPT UI", dark = false, className = "" }: { label: string; src?: string; alt?: string; badge?: string; dark?: boolean; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={`media-placeholder ${src ? "has-image" : ""} ${dark ? "dark" : ""} ${className}`} onClick={() => setOpen(true)} aria-label={`${alt || label}，点击放大`}>
        {src ? <><img src={src} alt={alt || label} loading="lazy" /><span className="concept-badge">{badge}</span></> : <><span className="media-grid" aria-hidden="true" /><span className="media-corner">ASSET / 待替换</span><span className="media-label">{label}</span></>}
        <span className="media-zoom">点击放大</span>
      </button>
      {open && <div className="lightbox" role="dialog" aria-modal="true" aria-label="素材预览" onClick={() => setOpen(false)}>
        <button type="button" onClick={() => setOpen(false)} className="lightbox-close">关闭</button>
        <div className={`media-placeholder lightbox-media ${src ? "has-image" : ""} ${dark ? "dark" : ""}`}>
          {src ? <img src={src} alt={alt || label} /> : <><span className="media-grid" aria-hidden="true" /><span className="media-label">{label}</span></>}
        </div>
      </div>}
    </>
  );
}
