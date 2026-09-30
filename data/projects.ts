export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  role: string;
  theme: "dark" | "light";
  keywords: string[];
  coverLabel: string;
  facts: { label: string; value: string }[];
  sections: { id: string; eyebrow: string; title: string; body: string; points?: string[]; media?: string }[];
};

export const projects: Project[] = [
  {
    slug: "robomaster-power-control",
    index: "01",
    title: "RoboMaster 步兵机器人电源与功率控制",
    shortTitle: "RoboMaster 功率控制",
    summary: "面向高动态机器人场景设计的整车电源与超级电容功率控制方案。",
    role: "硬件负责人 / 战队队长",
    theme: "dark",
    keywords: ["RoboMaster", "硬件设计", "电源管理", "PCB", "超级电容", "样机测试"],
    coverLabel: "请补充：机器人整车 / 功率控制器封面图",
    facts: [
      { label: "项目时间", value: "待补充" },
      { label: "我的角色", value: "硬件负责人 / 战队队长" },
      { label: "负责范围", value: "需求拆解、硬件方案、PCB、联调与迭代" },
    ],
    sections: [
      { id: "background", eyebrow: "01 / 项目背景", title: "高动态负载下，供电系统必须稳定且可控", body: "步兵机器人在运动与发射过程中存在快速变化的功率需求。本项目围绕整车供电、峰值功率与保护策略展开，目标是在真实比赛工况下建立可调试、可验证的电源与超级电容控制方案。", media: "请补充：机器人整车与比赛场景图" },
      { id: "problem", eyebrow: "02 / 系统问题", title: "把瞬时功率、供电安全与系统协同放在同一张图里", body: "项目首先分析整车供电与峰值功率需求，并与电控组、机械组共同定义接口、安装约束和保护策略。", points: ["峰值负载下的电压稳定", "充放电过程的监测与保护", "控制、机械与电源接口协同"] },
      { id: "role", eyebrow: "03 / 我的角色", title: "从模块目标到硬件版本迭代", body: "我参与定义电源管理和超级电容功率控制模块目标，推进电路设计、PCB实现、样机测试和联调问题闭环。" },
      { id: "constraints", eyebrow: "04 / 目标与限制", title: "在有限空间与真实负载中验证方案", body: "尺寸、散热、器件能力、接口可靠性与调试可观测性共同影响方案。具体额定参数与比赛成绩尚待补充，不在当前版本中虚构。" },
      { id: "breakdown", eyebrow: "05 / 系统拆解", title: "功率路径、采样、驱动与保护", body: "将系统拆分为 DC-DC、MOSFET 驱动、采样与保护等关键模块，再明确各模块的输入输出和异常边界。", media: "请补充：系统框图 / 功率路径图" },
      { id: "design", eyebrow: "06 / 方案设计", title: "让每个关键状态都能被看见和处理", body: "参与 DC-DC、MOSFET 驱动、采样与保护电路设计，并在接口层面为上电、负载切换和异常状态保留验证路径。" },
      { id: "prototype", eyebrow: "07 / 原型与实现", title: "从原理图进入可焊接、可测试的实体", body: "完成 PCB Layout、BOM、Gerber、打样与焊接，形成可用于整车联调的硬件原型。", media: "请补充：rm-pcb-detail / 焊接与装车照片" },
      { id: "testing", eyebrow: "08 / 测试和迭代", title: "用波形和工况定位问题", body: "使用示波器和万用表进行上电、纹波、负载切换和保护测试，并根据整车联调中暴露的问题推进硬件版本迭代。", media: "请补充：示波器波形 / 负载测试照片" },
      { id: "result", eyebrow: "09 / 项目成果", title: "成果数据与最终版本待补充", body: "当前已整理完整的工作链路。最终硬件版本、关键指标、比赛应用情况与可公开成果仍需补充后再展示。" },
      { id: "reflection", eyebrow: "10 / 项目复盘", title: "硬件产品不是孤立电路，而是系统边界的协商", body: "这段经历强化了我对跨模块接口、异常保护和联调节奏的理解。更具体的复盘将在补充测试记录后更新。" },
    ],
  },
  {
    slug: "smart-tea-machine",
    index: "02",
    title: "智能泡茶机",
    shortTitle: "智能泡茶机",
    summary: "从使用场景、交互体验到嵌入式控制和 IoT 连接的完整智能硬件原型。",
    role: "产品定义 / 硬件与嵌入式开发",
    theme: "light",
    keywords: ["产品定义", "智能硬件", "STM32", "IoT", "PCB", "App 交互"],
    coverLabel: "请补充：泡茶机整机封面图",
    facts: [
      { label: "项目时间", value: "待补充" },
      { label: "我的角色", value: "产品定义 / 硬件与嵌入式开发" },
      { label: "负责范围", value: "流程、交互、电路、固件、IoT 与整机联调" },
    ],
    sections: [
      { id: "background", eyebrow: "01 / 项目背景", title: "从一句真实需求出发：到家就能喝到温度合适的茶", body: "项目围绕日常泡茶过程中的等待、操作与温度管理展开，从产品定义开始建立完整智能硬件原型。", media: "请补充：泡茶机整机与使用场景图" },
      { id: "problem", eyebrow: "02 / 用户问题", title: "流程长、状态多，任何一步缺失都会破坏体验", body: "将加水、称茶、加热、出水、保温和预约串联为完整流程，同时处理缺水、缺茶和设备异常等反馈与兜底逻辑。" },
      { id: "role", eyebrow: "03 / 我的角色", title: "同时连接产品、交互和工程实现", body: "我负责从场景定义到软硬件原型的主要工作，包括双端交互规划、控制逻辑、原理图与 PCB、固件开发、IoT 接入和 Bring-up。" },
      { id: "constraints", eyebrow: "04 / 目标与限制", title: "安全、时序与可理解反馈", body: "加热与出水涉及安全边界；传感器状态、执行器动作和预约任务需要可靠时序；用户需要在本地屏与手机端理解设备当前状态。" },
      { id: "breakdown", eyebrow: "05 / 需求拆解", title: "一条主流程，多个异常分支", body: "以泡茶任务为主线，拆分加水、称茶、加热、出水、保温、预约与状态反馈，并为关键环节设计异常提示和兜底。", media: "请补充：产品流程图 / 状态机" },
      { id: "design", eyebrow: "06 / 方案设计", title: "OLED 本地交互 + App 远程交互", body: "规划 OLED 本地屏和手机 App 双端交互；通过 ESP8266、MQTT 与阿里云 IoT 实现远程控制、预约下发和状态上报。", media: "请补充：tea-machine-ui / App 与 OLED 界面" },
      { id: "prototype", eyebrow: "07 / 原型与实现", title: "以 STM32 为核心连接感知与执行", body: "使用 STM32F103 和 HAL 完成主要控制功能，接入 DS18B20 测温、HX711 称重、水位 ADC 与 DS1302 定时，并使用双继电器控制泡茶与保温。", points: ["独立完成原理图与 PCB", "完成打样、焊接和整机 Bring-up", "实现主要传感、控制与联网链路"], media: "请补充：tea-machine-pcb / 整机内部结构" },
      { id: "testing", eyebrow: "08 / 测试和迭代", title: "围绕整机链路逐项验证", body: "需要补充具体测试用例、异常注入记录和版本迭代数据。当前页面仅展示已确认的实现范围。" },
      { id: "result", eyebrow: "09 / 项目成果", title: "已完成可运行的完整原型链路", body: "项目覆盖产品定义、硬件实现、嵌入式控制与 IoT 连接。原型演示视频、最终照片与量化结果待补充。" },
      { id: "reflection", eyebrow: "10 / 项目复盘", title: "好的智能硬件体验，来自状态的一致性", body: "本地操作、远程指令、传感器状态和执行器反馈需要始终保持一致。后续可进一步补充安全验证和长时间稳定性测试。" },
    ],
  },
  {
    slug: "ai-photography-assistant",
    index: "03",
    title: "摄影 AI 助手",
    shortTitle: "摄影 AI 助手",
    summary: "面向摄影新手的多模态拍摄指导与照片复盘助手。",
    role: "AI 产品经理 / 原型设计",
    theme: "dark",
    keywords: ["AI 产品", "多模态 LLM", "EXIF", "Prompt Pipeline", "产品原型", "摄影"],
    coverLabel: "请补充：摄影作品 + AI 分析界面封面",
    facts: [
      { label: "项目时间", value: "待补充" },
      { label: "我的角色", value: "AI 产品经理 / 原型设计" },
      { label: "负责范围", value: "洞察、MVP、PRD、UI/UX、Prompt 与评测设计" },
    ],
    sections: [
      { id: "background", eyebrow: "01 / 项目背景", title: "拍到了，但不知道为什么不好", body: "摄影新手在拍摄现场常面临决策困难，拍摄后也缺少针对自身照片的结构化复盘指导。项目尝试把图像、拍摄参数和拍摄目标放进同一次分析。", media: "请补充：代表摄影作品 / 相机场景" },
      { id: "problem", eyebrow: "02 / 用户问题", title: "通用教程无法回答这一张照片的问题", body: "项目围绕拍摄决策与照片复盘两类问题，完成用户痛点、竞品分析和 MVP 定义。具体访谈样本与竞品表待补充。" },
      { id: "role", eyebrow: "03 / 我的角色", title: "定义产品边界，并把模型能力变成体验", body: "我负责产品方案、PRD、UI/UX 和可交互 Web 原型，并设计输入结构、Prompt Pipeline、异常兜底与评测维度。" },
      { id: "constraints", eyebrow: "04 / 目标与限制", title: "建议必须相关、稳定，也要承认信息缺失", body: "模型输出存在波动，EXIF 可能缺失，图片也可能无法分析。产品需要清晰处理异常输入、信息缺失和回答不稳定。" },
      { id: "breakdown", eyebrow: "05 / 需求拆解", title: "从一次分析到长期成长", body: "MVP 聚焦单张照片复盘，后续规划个人摄影能力画像与个性化学习计划，让零散建议沉淀为持续学习路径。" },
      { id: "design", eyebrow: "06 / 方案设计", title: "照片 + EXIF + 用户拍摄目标", body: "多模态输入被组织为三类上下文，输出覆盖曝光、构图、拍摄参数与后期处理建议。", media: "请补充：多模态输入与 Prompt Pipeline 架构图" },
      { id: "prototype", eyebrow: "07 / 原型与实现", title: "把模型回答组织成可执行的反馈", body: "完成 PRD、UI/UX 和可交互 Web 原型，设计多模态 LLM、EXIF 解析和 Prompt Pipeline 的产品方案。", media: "请补充：ai-photography-analysis-ui / Web 原型截图" },
      { id: "testing", eyebrow: "08 / 测试和迭代", title: "不仅看答案好不好，还要看是否稳定", body: "定义建议相关性、稳定性、准确性和响应延迟等评测维度。实际评测集规模与结果尚待补充。" },
      { id: "result", eyebrow: "09 / 项目成果", title: "形成从问题到可交互原型的完整产品方案", body: "当前可确认成果包括 PRD、UI/UX、产品架构与 Web 原型。用户数据与商业结果未提供，因此不作推测。" },
      { id: "reflection", eyebrow: "10 / 项目复盘", title: "AI 建议的价值，在于帮助用户做下一次选择", body: "产品重点不是生成更长的分析，而是让建议可理解、可执行、可验证。后续需要用真实样本持续校准评测标准。" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
