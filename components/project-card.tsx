import Link from "next/link";
import { Project } from "@/data/projects";
import { MediaPlaceholder, Reveal } from "./site-shell";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-feature ${project.theme}`}>
      <div className="project-feature-inner">
        <Reveal className="project-copy">
          <div className="project-number">PROJECT {project.index}</div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <dl><div><dt>角色</dt><dd>{project.role}</dd></div></dl>
          <div className="tag-list">{project.keywords.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <Link href={`/projects/${project.slug}`} className="text-link">查看项目详情 <span aria-hidden="true">↗</span></Link>
        </Reveal>
        <Reveal className="project-visual"><MediaPlaceholder label={project.coverLabel} src={project.coverSrc} alt={`${project.title}概念 UI`} dark={project.theme === "dark"} /></Reveal>
      </div>
    </article>
  );
}
