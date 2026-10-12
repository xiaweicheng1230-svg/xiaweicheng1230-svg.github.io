"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";

const diagnosisSteps = [
  {
    label: "1. 输入证据",
    kicker: "EVIDENCE FIRST",
    title: "先确认事实，再开始推断",
    body: "照片、EXIF、拍摄场景和用户目标共同进入分析。缺失字段保持为空，不把视觉猜测包装成相机事实。",
    points: ["读取真实拍摄参数", "GPS 信息默认剔除", "无 EXIF 时安全降级"],
    visual: "evidence",
  },
  {
    label: "2. 诊断原因",
    kicker: "STRUCTURED DIAGNOSIS",
    title: "把审美意见拆成可解释问题",
    body: "分析围绕曝光、清晰度、构图和色彩等维度展开，并明确证据、优先级与不确定性。",
    points: ["区分事实与 AI 判断", "优先级而非问题堆砌", "结构化输出避免白屏"],
    visual: "diagnosis",
  },
  {
    label: "3. 下一张建议",
    kicker: "ACTIONABLE ADVICE",
    title: "给范围、顺序和适用条件",
    body: "系统先给最值得尝试的动作，再解释设备、主体移动和现场光线带来的边界，让建议可以被重新拍摄验证。",
    points: ["一次只解决关键问题", "说明调整的代价", "引导用户复拍对比"],
    visual: "next-shot",
  },
];

const pitch = "LensPilot AI 是一个面向摄影新手的 AI 摄影教练。现有教程脱离用户正在拍的照片，而通用 AI 点评又缺少可执行建议。因此，我让系统结合照片、EXIF 和用户拍摄目标，解释问题原因，并告诉用户下一张应该优先调整什么。当前已经完成网页原型、上传校验、EXIF 提取和隐私处理，下一阶段将验证结构化 AI 分析与复拍学习闭环。";

function DiagnosisVisual({ type }: { type: string }) {
  if (type === "evidence") {
    return <div className="lp-evidence-visual">
      <div className="lp-sample-photo"><span className="lp-focus-box" /><small>夜景人像</small></div>
      <div className="lp-exif-list">
        <div><span>快门</span><strong>1/30s</strong></div>
        <div><span>光圈</span><strong>f/2.8</strong></div>
        <div><span>ISO</span><strong>3200</strong></div>
        <div><span>焦距</span><strong>50mm</strong></div>
      </div>
    </div>;
  }

  if (type === "diagnosis") {
    return <div className="lp-diagnosis-visual">
      <div className="lp-radar"><span /></div>
      <div className="lp-score-pills"><span>曝光 78</span><span>构图 74</span><span className="warning">清晰度 52</span><span>色彩 81</span></div>
    </div>;
  }

  return <div className="lp-next-visual">
    <small>TRY THIS NEXT</small>
    <strong>先把快门提高到<br /><em>1/125s</em></strong>
    <div><span>光圈 f/2.0–2.8</span><span>ISO 1600–3200</span></div>
    <p>用更高 ISO 换取安全快门；若人物静止，可尝试 1/80s。</p>
  </div>;
}

export function LensPilotCaseStudy({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const step = diagnosisSteps[activeStep];

  async function copyPitch() {
    await navigator.clipboard.writeText(pitch);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <main className="lp-case">
    <section className="lp-hero">
      <div className="lp-orb lp-orb-one" aria-hidden="true" />
      <div className="lp-orb lp-orb-two" aria-hidden="true" />
      <div className="lp-shell lp-hero-grid">
        <div className="lp-hero-copy">
          <p className="lp-eyebrow"><span /> PROJECT {project.index} · AI PRODUCT CASE · 0 → 1</p>
          <h1>让每一张废片，<br /><em>成为下一张好照片。</em></h1>
          <p className="lp-lede">LensPilot AI 是一个同时理解照片内容与拍摄参数的 AI 摄影教练。它不只评价好不好看，而是解释为什么，并告诉用户下一张先改什么。</p>
          <div className="lp-actions">
            <a href="#solution" className="lp-button lp-button-primary">查看产品方案 ↓</a>
            <a href="https://github.com/xiaweicheng1230-svg/lenspilot-ai" target="_blank" rel="noreferrer" className="lp-button lp-button-ghost">查看开源仓库 ↗</a>
          </div>
          <div className="lp-facts">
            <div><small>目标用户</small><strong>摄影新手</strong></div>
            <div><small>核心任务</small><strong>下一张怎么拍</strong></div>
            <div><small>当前阶段</small><strong>可运行原型</strong></div>
          </div>
        </div>
        <div className="lp-hero-visual">
          <div className="lp-image-frame"><Image src="/assets/ai-photography-cover.webp" alt="LensPilot AI 摄影助手产品概念界面" width={1200} height={1500} priority sizes="(max-width: 980px) 90vw, 46vw" /><span>PRODUCT CONCEPT</span></div>
          <div className="lp-floating-card lp-floating-one"><small>EXIF</small><strong>读取真实参数</strong></div>
          <div className="lp-floating-card lp-floating-two"><small>NEXT</small><strong>指导下一张</strong></div>
        </div>
      </div>
    </section>

    <section className="lp-section lp-shell" id="problem">
      <div className="lp-heading">
        <p className="lp-index">01 / 问题定义</p>
        <h2>用户缺的不是教程，<br />而是把知识用在<span>这一张照片</span>上。</h2>
      </div>
      <div className="lp-problem-grid">
        <article><span>01</span><h3>知道结果，不知道原因</h3><p>照片糊了、暗了、噪点多了，却无法判断问题来自快门、ISO、对焦还是现场光线。</p></article>
        <article><span>02</span><h3>学过参数，不会组合</h3><p>记住了光圈、快门和 ISO 的定义，却很难迁移到夜景、人像、宠物等真实场景。</p></article>
        <article><span>03</span><h3>AI 点评，不够可执行</h3><p>“构图不错、光线可以更好”无法指导下一次操作，更无法形成持续学习。</p></article>
      </div>
      <div className="lp-persona">
        <div className="lp-avatar">小林</div>
        <div><small>CORE PERSONA</small><h3>刚买入门微单的 23 岁摄影新手</h3><p>“我不想重新看一遍摄影理论，只想知道为什么拍糊了，以及下一张先改哪个参数。”</p></div>
        <div className="lp-jtbd"><small>JOB TO BE DONE</small><strong>在现场完成补拍，而不是回家后才发现问题。</strong></div>
      </div>
    </section>

    <section className="lp-section lp-solution" id="solution">
      <div className="lp-shell">
        <div className="lp-heading lp-heading-split"><div><p className="lp-index">02 / 产品方案</p><h2>从“评价照片”转向<br /><span>指导下一张。</span></h2></div><p>以真实 EXIF 为证据，以用户拍摄目标为上下文，让诊断、解释和行动形成一条连续链路。</p></div>
        <div className="lp-demo">
          <div className="lp-tabs" role="tablist" aria-label="产品诊断流程">
            {diagnosisSteps.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeStep === index} className={activeStep === index ? "active" : ""} onClick={() => setActiveStep(index)}>{item.label}</button>)}
          </div>
          <div className="lp-demo-content">
            <div className="lp-demo-visual"><DiagnosisVisual type={step.visual} /></div>
            <div className="lp-demo-copy"><small>{step.kicker}</small><h3>{step.title}</h3><p>{step.body}</p><ul>{step.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </div>
          <p className="lp-disclaimer">概念演示：结构化 AI 诊断与 Next Shot 处于规划阶段；上传、校验、EXIF 与隐私处理已经完成本地验证。</p>
        </div>
      </div>
    </section>

    <section className="lp-section lp-shell" id="strategy">
      <div className="lp-heading"><p className="lp-index">03 / 产品策略</p><h2>一个入口问题，<br />构建长期<span>学习闭环。</span></h2></div>
      <div className="lp-loop" aria-label="产品价值闭环">
        <div className="lp-loop-center"><small>核心任务</small><strong>下一张<br />怎么拍？</strong></div>
        {[['01','上传','照片 + 目标'],['02','诊断','证据 + 原因'],['03','重拍','执行建议'],['04','对比','验证改善'],['05','成长','画像 + 练习']].map(([num,title,text], index) => <div className={`lp-loop-node node-${index + 1}`} key={num}><b>{num}</b><strong>{title}</strong><small>{text}</small></div>)}
        <svg viewBox="0 0 760 430" aria-hidden="true"><ellipse cx="380" cy="215" rx="295" ry="165"/><path d="M620 115l36 8-18 32"/></svg>
      </div>
      <div className="lp-strategy-grid">
        <article><small>MVP PRIORITY</small><h3>先验证核心价值，后补平台能力</h3><div className="lp-priority"><div><span className="done">已验证</span><b>上传、校验、EXIF、隐私处理</b></div><div><span className="next">下一步</span><b>AI 诊断、Next Shot、反馈</b></div><div><span className="later">后续</span><b>登录、分享、RAW、硬件连接</b></div></div></article>
        <article><small>NORTH STAR</small><h3>不是上传量，而是行动发生</h3><div className="lp-north-star"><strong>重新拍摄率</strong><p>用户按照建议完成下一张拍摄，并返回上传对比的比例。</p></div><div className="lp-metric-chain"><span>报告完成</span><i>→</i><span>查看建议</span><i>→</i><span>再次上传</span></div></article>
      </div>
    </section>

    <section className="lp-section lp-trust">
      <div className="lp-shell lp-trust-grid">
        <div className="lp-heading"><p className="lp-index">04 / AI 可信设计</p><h2>好的 AI 产品，<br />先知道自己<span>不知道什么。</span></h2><p>摄影建议同时包含事实、推断和主观判断，产品必须让用户看见它们之间的边界。</p></div>
        <div className="lp-trust-list">
          <article><span>01</span><div><h3>不编造参数</h3><p>缺失 EXIF 保持为空，模型不能将视觉猜测写成相机事实。</p></div></article>
          <article><span>02</span><div><h3>建议带条件</h3><p>使用参数范围，并说明光线、主体速度、防抖和设备能力的影响。</p></div></article>
          <article><span>03</span><div><h3>结果可追溯</h3><p>记录模型、Prompt 版本、延迟和 Mock 标记，支持评测与纠错。</p></div></article>
        </div>
      </div>
    </section>

    <section className="lp-section lp-shell" id="roadmap">
      <div className="lp-heading lp-heading-split"><div><p className="lp-index">05 / 路线图</p><h2>从技术可行，<br />走向<span>用户有效。</span></h2></div><p>不把路线图当成功能清单，而是逐层降低产品风险。</p></div>
      <div className="lp-roadmap">
        <article className="current"><i /><small>PHASE 01 · VERIFIED</small><h3>工程基础</h3><p>网页、上传校验、EXIF、缩略图与 GPS 剔除。</p><span>当前阶段</span></article>
        <article><i /><small>PHASE 02 · NEXT</small><h3>价值验证</h3><p>结构化 AI 分析、Next Shot、真实样本与反馈。</p><span>核心假设</span></article>
        <article><i /><small>PHASE 03 · PLANNED</small><h3>学习闭环</h3><p>历史报告、能力画像、七天练习计划与复拍对比。</p><span>留存机制</span></article>
        <article><i /><small>PHASE 04 · RESEARCH</small><h3>设备连接</h3><p>Wi-Fi / USB 导入和摄影伴侣硬件概念验证。</p><span>远期探索</span></article>
      </div>
      <div className="lp-learning-shot"><Image src="/assets/ai-photography-learning-profile.webp" alt="LensPilot AI 摄影能力画像与学习计划概念界面" width={1500} height={1000} sizes="(max-width: 980px) 90vw, 62vw" /><div><small>FUTURE CONCEPT</small><h3>从一次诊断，走向持续成长</h3><p>五张有效报告后形成确定性摄影画像，再根据历史问题生成针对性的练习计划。</p></div></div>
    </section>

    <section className="lp-shell lp-closing">
      <p className="lp-index">PRODUCT TAKEAWAY</p>
      <h2>诊断一张照片只是入口。<br /><span>帮助用户拍好下一张，才是价值。</span></h2>
      <p>我负责产品定位、用户流程、需求优先级、AI 规则、风险设计与路线规划，并使用 AI 编程工具完成可运行原型和开源工程。</p>
      <div className="lp-actions"><button type="button" className="lp-button lp-button-primary" onClick={copyPitch}>{copied ? "已复制 ✓" : "复制 30 秒项目介绍"}</button><a href="https://github.com/xiaweicheng1230-svg/lenspilot-ai" target="_blank" rel="noreferrer" className="lp-button lp-button-ghost">查看源代码 ↗</a></div>
    </section>

    <nav className="project-pager lp-pager" aria-label="项目切换"><Link href={`/projects/${previous.slug}`}><span>上一个项目</span><strong>{previous.shortTitle}</strong></Link><Link href="/#work" className="all-projects">返回全部项目</Link><Link href={`/projects/${next.slug}`}><span>下一个项目</span><strong>{next.shortTitle}</strong></Link></nav>
  </main>;
}
