import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header, MediaPlaceholder, Reveal } from "@/components/site-shell";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const project = getProject((await params).slug); return project ? { title: project.shortTitle, description: project.summary, openGraph: { title: project.title, description: project.summary, images: [] } } : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug); if (!project) notFound();
  const current = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(current - 1 + projects.length) % projects.length]; const next = projects[(current + 1) % projects.length];
  return <><Header /><main className={`detail-page ${project.theme}`}>
    <section className="detail-hero"><div className="detail-hero-inner"><p className="eyebrow">PROJECT {project.index} / CASE STUDY</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><div className="tag-list">{project.keywords.map((tag) => <span key={tag}>{tag}</span>)}</div><MediaPlaceholder label={project.coverLabel} src={project.coverSrc} badge={project.coverBadge} alt={`${project.title}工业设计概念图`} dark={project.theme === "dark"} className="detail-cover" /></div></section>
    <section className="detail-overview section"><p className="eyebrow">PROJECT OVERVIEW</p><div className="fact-grid">{project.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><p>{fact.value}</p></div>)}</div></section>
    <div className="detail-content">{project.sections.map((section, index) => <section className={`case-section ${index % 2 ? "alternate" : ""}`} id={section.id} key={section.id}><Reveal className="case-grid"><div className="case-copy"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p>{section.body}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div>{section.media ? <MediaPlaceholder label={section.media} dark={project.theme === "dark" && index % 2 === 0} /> : <div className="case-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>}</Reveal></section>)}</div>
    <nav className="project-pager" aria-label="项目切换"><Link href={`/projects/${previous.slug}`}><span>上一个项目</span><strong>{previous.shortTitle}</strong></Link><Link href="/#work" className="all-projects">返回全部项目</Link><Link href={`/projects/${next.slug}`}><span>下一个项目</span><strong>{next.shortTitle}</strong></Link></nav>
  </main><Footer /></>;
}
