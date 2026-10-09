"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

export function SelectedProjects({ projects }: { projects: Project[] }) {
  const shellRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ x: number; scrollY: number } | null>(null);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const shell = shellRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!shell || !sticky || !track || window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)").matches) return;
    const start = shell.offsetTop;
    const range = Math.max(1, shell.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, (window.scrollY - start) / range));
    const travel = Math.max(0, track.scrollWidth - sticky.clientWidth + 32);
    track.style.transform = `translate3d(${-progress * travel}px,0,0)`;
    setActive(Math.min(projects.length - 1, Math.round(progress * (projects.length - 1))));
  }, [projects.length]);

  useEffect(() => {
    let frame = 0;
    const onUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onWheel = (event: WheelEvent) => {
      const shell = shellRef.current;
      if (!shell || window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)").matches) return;
      const rect = shell.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight && Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
        window.scrollBy({ top: event.deltaX * 1.15, behavior: "auto" });
      }
    };
    update();
    window.addEventListener("scroll", onUpdate, { passive: true });
    window.addEventListener("resize", onUpdate, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onUpdate);
      window.removeEventListener("resize", onUpdate);
      window.removeEventListener("wheel", onWheel);
    };
  }, [update]);

  const goTo = (index: number) => {
    const next = Math.min(projects.length - 1, Math.max(0, index));
    const shell = shellRef.current;
    const track = trackRef.current;
    if (!shell || !track) return;
    if (window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)").matches) {
      const card = track.children[next] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActive(next);
      return;
    }
    const range = shell.offsetHeight - window.innerHeight;
    window.scrollTo({ top: shell.offsetTop + range * (next / Math.max(1, projects.length - 1)), behavior: "smooth" });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(max-width: 900px)").matches || (event.target as HTMLElement).closest("a,button")) return;
    dragRef.current = { x: event.clientX, scrollY: window.scrollY };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const shell = shellRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!drag || !shell || !sticky || !track) return;
    const travel = Math.max(1, track.scrollWidth - sticky.clientWidth + 32);
    const range = Math.max(1, shell.offsetHeight - window.innerHeight);
    window.scrollTo({ top: drag.scrollY - (event.clientX - drag.x) * (range / travel), behavior: "auto" });
  };
  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    dragRef.current = null;
    event.currentTarget.classList.remove("is-dragging");
    goTo(active);
  };

  return (
    <section ref={shellRef} id="work" className="project-scroll-shell" aria-label="精选项目">
      <div ref={stickyRef} className="project-sticky">
        <div className="project-stage-head">
          <div><p className="eyebrow">SELECTED WORK</p><h2>精选项目</h2></div>
          <div className="project-stage-controls" aria-label="项目切换">
            <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="上一个项目">←</button>
            <button type="button" onClick={() => goTo(active + 1)} disabled={active === projects.length - 1} aria-label="下一个项目">→</button>
          </div>
        </div>
        <div className="project-track-viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finishDrag} onPointerCancel={finishDrag}>
          <div ref={trackRef} className="project-track" onScroll={(event) => {
            if (!window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)").matches) return;
            const node = event.currentTarget;
            const index = Math.round(node.scrollLeft / Math.max(1, node.clientWidth * .9));
            setActive(Math.min(projects.length - 1, Math.max(0, index)));
          }}>
            {projects.map((project, index) => (
              <article className={`release-card ${project.theme} ${active === index ? "is-active" : ""}`} key={project.slug}>
                <div className="release-copy">
                  <p className="release-index">PROJECT {project.index}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="release-meta"><span>{project.role}</span><span>{project.keywords.slice(0, 3).join(" · ")}</span></div>
                  <Link href={`/projects/${project.slug}`} className="release-link">查看项目详情 <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="release-visual">
                  {project.coverSrc ? <img src={project.coverSrc} alt={project.coverLabel} loading={index === 0 ? "eager" : "lazy"} draggable={false} /> : <span>{project.coverLabel}</span>}
                  {project.coverBadge && <small>{project.coverBadge}</small>}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="project-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / projects.length) * 100}%` }} /></div>
      </div>
    </section>
  );
}
