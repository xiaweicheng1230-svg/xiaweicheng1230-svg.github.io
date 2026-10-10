import Link from "next/link";
import { Footer } from "@/components/footer";
import { SelectedProjects } from "@/components/selected-projects";
import { Header, MediaPlaceholder, Reveal } from "@/components/site-shell";
import { projects } from "@/data/projects";

const strengths = [
  { number: "01", title: "产品思维", text: "能够完成用户研究、需求分析、产品定义、功能规划、PRD、交互原型和测试验收。" },
  { number: "02", title: "技术理解", text: "具备 PCB、电源、STM32、ESP32、FreeRTOS、CAN、UART 等硬件与嵌入式基础，能够理解技术边界和实现成本。" },
  { number: "03", title: "落地能力", text: "拥有机器人、智能硬件和 AI 产品项目经历，能够参与样机开发、软硬件联调、问题定位和版本迭代。" },
];

const interests = [
  {
    number: "01",
    title: "摄影",
    english: "PHOTOGRAPHY",
    text: "我喜欢用取景、光线和色彩记录日常，也会从使用者的角度观察相机、影像与消费电子产品。",
    asset: "个人摄影作品",
  },
  {
    number: "02",
    title: "吉他",
    english: "GUITAR",
    text: "在节奏与反复练习中，享受从生疏到逐渐熟练的过程。",
    asset: "吉他练习",
  },
  {
    number: "03",
    title: "健身",
    english: "FITNESS",
    text: "用稳定的训练保持专注，也让目标、行动和反馈形成长期循环。",
    asset: "健身训练",
  },
  {
    number: "04",
    title: "篮球",
    english: "BASKETBALL",
    text: "享受团队配合、临场判断，以及每一次攻防之后迅速调整。",
    asset: "篮球练习",
  },
];

const campusExperiences = [
  ["专业学习", "湖南农业大学卓越工程师学院 · 智能科学与技术专业"],
  ["团队与领导", "RoboMaster 战队队长 · 机器人协会会长"],
  ["工程实践", "机器人研发、硬件调试与全国大学生电子设计竞赛经历"],
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
            <div className="hero-intro"><p className="hero-lead">你好，我是夏炜城，一名拥有硬件与嵌入式背景的智能硬件产品经理。</p><p>关注机器人、AI、影像与消费电子，尝试把用户需求转化为真正能够运行和持续迭代的产品。</p></div>
            <div className="hero-actions"><Link href="#work" className="button button-dark">查看精选项目</Link><a href="/assets/resume-pdf-placeholder.txt" download className="button button-light">下载个人简历</a><a href="mailto:1216244915@qq.com" className="contact-link">联系我</a></div>
          </div>
        </div>
        <a className="scroll-cue" href="#interests"><span />向下了解</a>
      </section>

      <section id="interests" className="section interests-section">
        <div className="section-head interests-head"><p className="eyebrow">LIFE &amp; INTERESTS</p><h2>工作之外，<br />我如何观察世界。</h2></div>
        <Reveal className="interest-feature">
          <div className="photo-gallery travel-gallery" aria-label="夏炜城与鹿图成员的世界名胜AI合影">
            <MediaPlaceholder label="巴黎铁塔" src="/assets/travel-paris-v1.webp" alt="夏炜城、罗宇伦、魏子奇在巴黎铁塔前的AI合影" badge="AI生成·鹿图" className="travel-gallery-main" />
            <MediaPlaceholder label="维多利亚港" src="/assets/travel-victoria-v1.webp" alt="夏炜城、詹绍源、黎健毓在维多利亚港的AI合影" badge="AI生成·鹿图" />
            <MediaPlaceholder label="自由女神像" src="/assets/travel-liberty-v1.webp" alt="夏炜城、唐博釜、彭鹏在自由女神像前的AI合影" badge="AI生成·鹿图" />
            <MediaPlaceholder label="天安门广场" src="/assets/travel-tiananmen-v1.webp" alt="夏炜城、李彦臻、唐胤鑫在天安门广场的AI合影" badge="AI生成·鹿图" />
            <MediaPlaceholder label="橘子洲头" src="/assets/travel-orange-isle-v1.webp" alt="夏炜城、涂腾辉在橘子洲头的AI合影" badge="AI生成·鹿图" />
          </div>
          <div className="interest-copy"><span>{interests[0].number} / {interests[0].english}</span><h3>{interests[0].title}</h3><p>{interests[0].text}</p></div>
        </Reveal>
        <div className="interest-grid">
          {interests.slice(1).map((interest) => <Reveal className="interest-card" key={interest.title}>
            <MediaPlaceholder label={interest.asset} src={`/assets/life-${interest.english.toLowerCase()}.webp`} badge="AI生成·鹿图" className="interest-media-small" />
            <div className="interest-card-copy"><span>{interest.number} / {interest.english}</span><h3>{interest.title}</h3><p>{interest.text}</p></div>
          </Reveal>)}
        </div>
      </section>

      <section id="campus" className="campus-section">
        <div className="campus-inner">
          <Reveal className="campus-intro"><div><p className="eyebrow">CAMPUS LIFE</p><h2>课堂之外，<br />也是成长现场。</h2></div><p>我的大学生活不只发生在课堂。专业学习给了我技术基础，战队、协会与竞赛则让我在真实目标、有限资源和团队协作中，把想法一步步推进下去。</p></Reveal>
          <Reveal className="campus-visual"><MediaPlaceholder label="校园实验室" src="/assets/life-campus.webp" badge="AI生成·鹿图" dark /></Reveal>
          <div className="campus-list">{campusExperiences.map(([title, text], index) => <Reveal className="campus-row" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
        </div>
      </section>

      <section id="strengths" className="section strengths-section">
        <div className="section-head"><p className="eyebrow">HOW I WORK</p><h2>在产品与工程之间，<br />建立可落地的连接。</h2></div>
        <div className="strength-list">{strengths.map((item) => <Reveal key={item.number} className="strength-row"><span className="strength-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
      </section>

      <SelectedProjects projects={projects} />

      <section id="experience" className="section experience-section"><div className="section-head"><p className="eyebrow">INTERNSHIP &amp; EXPERIENCE</p><h2>从校园实践，<br />走进真实产品现场。</h2></div><p className="experience-note">实习与组织经历按类型呈现；具体时间可在你补充简历后统一更新。</p><div className="timeline">{experiences.map(([org, role], index) => <Reveal className="timeline-item" key={org}><span>{String(index + 1).padStart(2, "0")}</span><h3>{org}</h3><p>{role}</p><time>{index < 2 ? "实习经历" : "校园经历"}</time></Reveal>)}</div></section>

      <section id="contact" className="contact-section"><div className="contact-inner"><p className="eyebrow">LET’S BUILD SOMETHING REAL</p><h2>期待与你一起，<br />把下一个想法做成真实产品。</h2><div className="contact-grid"><div className="contact-details"><a href="mailto:1216244915@qq.com">1216244915@qq.com</a><p>湖南 · 长沙</p><span>GitHub · 链接待补充</span><a href="/assets/resume-pdf-placeholder.txt" download className="button button-white">下载个人简历</a></div><div className="qr-placeholder" aria-label="微信二维码占位"><span>微信二维码</span><small>请替换 wechat-qr</small></div></div></div></section>
    </main>
    <Footer />
  </>;
}
