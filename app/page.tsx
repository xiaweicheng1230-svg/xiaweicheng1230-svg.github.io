import Link from "next/link";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Header, MediaPlaceholder, Reveal } from "@/components/site-shell";
import { projects } from "@/data/projects";

const strengths = [
  { number: "01", title: "产品思维", text: "能够完成用户研究、需求分析、产品定义、功能规划、PRD、交互原型和测试验收。" },
  { number: "02", title: "技术理解", text: "具备 PCB、电源、STM32、ESP32、FreeRTOS、CAN、UART 等硬件与嵌入式基础，能够理解技术边界和实现成本。" },
  { number: "03", title: "落地能力", text: "拥有机器人、智能硬件和 AI 产品项目经历，能够参与样机开发、软硬件联调、问题定位和版本迭代。" },
];

const experiences = [
  ["康通电子股份有限公司", "AI 体育机器人产品经理"],
  ["深圳科创院 FOCUS 桌面机器人团队", "嵌入式 / 机器人研发实习"],
  ["RoboMaster 战队", "战队队长、硬件负责人"],
  ["机器人协会", "会长"],
  ["全国大学生电子设计竞赛", "省级奖项"],
];

export default function Home() {
  return <>
    <Header />
    <main>
      <section id="home" className="hero">
        <div className="hero-ambient" aria-hidden="true"><span /><span /></div>
        <div className="hero-inner">
          <p className="eyebrow">XIA WEICHENG · PRODUCT PORTFOLIO</p>
          <h1>让硬件、AI 与<br />真实场景发生连接。</h1>
          <div className="hero-bottom">
            <div className="hero-intro"><p className="hero-lead">你好，我是夏炜城，一名拥有硬件与嵌入式背景的智能硬件产品经理。</p><p>我关注机器人、AI、影像与消费电子，并尝试把用户需求转化为能够真正运行的产品原型。</p></div>
            <div className="hero-actions"><Link href="#work" className="button button-dark">查看精选项目</Link><a href="/assets/resume-pdf-placeholder.txt" download className="button button-light">下载个人简历</a><a href="mailto:1216244915@qq.com" className="contact-link">联系我</a></div>
          </div>
        </div>
        <a className="scroll-cue" href="#strengths"><span />向下了解</a>
      </section>

      <section id="strengths" className="section strengths-section">
        <div className="section-head"><p className="eyebrow">WHY ME</p><h2>在产品与工程之间，<br />建立可落地的连接。</h2></div>
        <div className="strength-list">{strengths.map((item) => <Reveal key={item.number} className="strength-row"><span className="strength-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
      </section>

      <section id="work" className="work-intro section"><div className="section-head"><p className="eyebrow">SELECTED WORK</p><h2>把想法推进到<br />可以被验证的原型。</h2></div><p className="section-note">三个项目，分别从机器人电源、完整智能硬件与多模态 AI 产品，呈现我理解问题和推进落地的方式。</p></section>
      <section aria-label="精选项目">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</section>

      <section id="about" className="section about-section">
        <Reveal className="about-grid"><div><p className="eyebrow">ABOUT ME</p><h2>喜欢研究产品如何<br />真正进入生活。</h2></div><div className="about-copy"><p className="about-quote">我喜欢研究智能硬件如何进入真实生活，也享受把需求、交互、硬件和代码逐步连接起来的过程。相比只停留在概念阶段，我更希望亲手做出可以运行、可以测试、可以持续迭代的产品。</p><div className="about-facts"><p>湖南农业大学卓越工程师学院</p><p>智能科学与技术专业</p><p>RoboMaster 战队队长</p><p>机器人协会会长</p><p>AI 体育机器人产品经历</p><p>桌面机器人研发经历</p><p>电赛项目经历</p></div></div></Reveal>
        <Reveal className="interest-block"><div><span className="eyebrow">OUTSIDE OF WORK</span><h3>摄影、电吉他、篮球<br />与消费电子。</h3></div><MediaPlaceholder label="请补充：个人照片 / 摄影作品 / 兴趣照片" /></Reveal>
      </section>

      <section id="experience" className="section experience-section"><div className="section-head"><p className="eyebrow">EXPERIENCE</p><h2>经历不是标签，<br />而是解决问题的现场。</h2></div><div className="timeline">{experiences.map(([org, role], index) => <Reveal className="timeline-item" key={org}><span>{String(index + 1).padStart(2, "0")}</span><h3>{org}</h3><p>{role}</p><time>时间待补充</time></Reveal>)}</div></section>

      <section id="contact" className="contact-section"><div className="contact-inner"><p className="eyebrow">LET’S BUILD SOMETHING REAL</p><h2>期待与你一起，<br />把下一个想法做成真实产品。</h2><div className="contact-grid"><div className="contact-details"><a href="mailto:1216244915@qq.com">1216244915@qq.com</a><p>湖南 · 长沙</p><span>GitHub · 链接待补充</span><a href="/assets/resume-pdf-placeholder.txt" download className="button button-white">下载个人简历</a></div><div className="qr-placeholder" aria-label="微信二维码占位"><span>微信二维码</span><small>请替换 wechat-qr</small></div></div></div></section>
    </main>
    <Footer />
  </>;
}
