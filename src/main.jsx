import React, { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Magnet from "./components/Magnet";
import "./styles.css";

const LazyGrainient = lazy(() => import("./Grainient"));
const imageExtPattern = /\.(png|jpe?g)$/i;
const optimizedAssetPath = (path) => path.replace(imageExtPattern, ".webp");
const asset = (path) => `${import.meta.env.BASE_URL}assets/${optimizedAssetPath(path)}`;
const SPOTLIGHT_R = 260;
const BG_IMAGE_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

const projects = [
  {
    no: "01",
    title: "心里美酒店预订app",
    en: "XINLIMEI HOTEL BOOKING APP",
    category: "PRODUCT DESIGN · DESIGN LEAD",
    image: asset("projects/xinlimei/cover-card.jpg"),
    route: "#project/xinlimei",
    note: "从品牌重塑到核心预定、支付与入住流程，构建更清晰、更高效，也更有温度的酒店服务体验。",
    scope: ["USER RESEARCH", "UX / UI", "DESIGN SYSTEM", "DELIVERY"],
    detail: "面向酒店数智化场景，梳理多角色、高频任务与复杂数据关系。从核心路径、信息架构到视觉规范，建立可持续迭代的产品体验。",
  },
  {
    no: "02",
    title: "在线学习体验重塑",
    en: "CCTALK EXPERIENCE REDESIGN",
    category: "MOBILE · WEB · DESIGN SYSTEM",
    image: asset("projects/cctalk/cover-generated.jpg"),
    route: "#project/cctalk",
    note: "围绕 CCtalk 等学习产品，持续优化核心功能、内容层级与跨端体验。",
    scope: ["MOBILE", "WEB", "LIVE CLASS", "GROWTH"],
    detail: "围绕学习、直播、课程与社区等核心场景，优化跨端信息层级和操作效率，并通过组件化设计提升版本迭代与协作效率。",
  },
  {
    no: "03",
    title: "咪咕数字人",
    en: "MIGU DIGITAL HUMAN EXPERIENCE",
    category: "AI IDENTITY · VISUAL EXPERIENCE",
    image: asset("migu/hero.png"),
    route: "#project/migu",
    note: "围绕 AI 名片、MBTI 性格卡与新春祝福场景，构建一套可分享、可传播的数字身份体验。",
    scope: ["AI IDENTITY", "MBTI", "VISUAL SYSTEM", "GROWTH"],
    detail: "从个人名片到企业名片、从 MBTI 测试到祝福与运势签，建立统一的节日视觉语言和跨场景内容体验。",
  },
];

const strengths = [
  {
    index: "A",
    title: "Web3.0体验设计",
    en: "WEB3.0 EXPERIENCE DESIGN",
    text: "面向链上增长、资产发行与社区激励网络，构建更具科技感的官网体验。",
    icon: "↗",
    route: "https://yp1366369926-cpu.github.io/web3.0/",
    image: asset("projects/web3/cover.png"),
  },
  {
    index: "B",
    title: "HMI概念稿分享",
    en: "HMI CONCEPT STUDIES",
    text: "探索车载空间、3D场景与交互信息之间的关系，让驾驶体验更直观、更沉浸。",
    icon: "⌁",
    route: "#project/hmi",
    image: asset("projects/hmi/cover-generated.png"),
  },
  {
    index: "C",
    title: "设计系统构建",
    en: "ENTERPRISE DESIGN SYSTEM",
    text: "以 ZYSCO 2.0 数字化工厂为案例，统一规范、组件与复杂业务页面，提升设计与开发效率。",
    icon: "⊞",
    route: "#project/b-end",
    image: asset("projects/b-end/1.png"),
  },
  {
    index: "D",
    title: "视觉与品牌表达",
    en: "BRAND & VISUAL",
    text: "在复杂信息中建立清晰秩序，同时保留品牌辨识度与视觉记忆点。",
    icon: "✦",
    route: "#project/zhuzhu",
    image: asset("projects/zhuzhu/cover-generated.png"),
  },
  {
    index: "E",
    title: "业务与增长意识",
    en: "PRODUCT THINKING",
    text: "关注用户行为、转化效率与落地成本，让设计真正服务商业目标。",
    icon: "◎",
  },
  {
    index: "F",
    title: "动态视觉表达",
    en: "MOTION DESIGN",
    text: "使用节奏、转场与反馈增强信息层级，为界面建立自然的呼吸感。",
    icon: "◌",
  },
];

const motionFilms = [
  {
    no: "01",
    title: "Material Pulse",
    zh: "材质脉冲",
    category: "PRODUCT MATERIAL · MACRO MOTION",
    description: "以微距镜头放大鞋履材质、结构与光泽，让产品细节成为动态叙事的主角。",
    video: asset("motion/light-matrix.mp4"),
    poster: asset("motion/light-matrix.jpg"),
    plan: "从材质特写开始，沿着鞋面、网布、泡棉和鞋底结构缓慢推进；用红橙色反射光连接不同镜头，最后以完整轮廓收束。",
    prompt: "Premium futuristic footwear product film, extreme macro close-up of technical shoe materials, sculpted foam texture, breathable mesh, curved sole structure, deep charcoal black and warm vermilion red color palette, dramatic studio lighting, slow cinematic camera movement, tactile surface details, premium sports technology aesthetic, black background, realistic 3D product rendering, vertical 9:16",
    negative: "low resolution, distorted shoe, extra parts, deformed structure, random text, watermark, overexposure, noisy background, cartoon style, unstable camera, blurry details",
  },
  {
    no: "02",
    title: "Unbounded Vision",
    zh: "无界视界",
    category: "AI IDENTITY · FUTURE PORTRAIT",
    description: "用数字人肖像、识别界面与克制的推进镜头，表达一个正在生成的 AI 身份。",
    video: asset("motion/unbounded-vision.mp4"),
    poster: asset("motion/unbounded-vision.jpg"),
    plan: "以黑色空间中的数字人剪影建立悬念，红色识别光从局部扫过面部，再以环形界面和视线变化完成身份确认。",
    prompt: "Futuristic AI digital human portrait, gender-neutral human figure wearing a matte black futuristic helmet, glowing vermilion red visor, minimal white circular interface graphics, clean editorial composition, deep black background, cyber identity system, subtle facial silhouette, soft rim light, slow camera push-in, premium fashion technology campaign, mysterious and intelligent atmosphere, vertical 9:16",
    negative: "deformed face, extra eyes, messy cyberpunk background, excessive neon colors, low quality, text errors, watermark, exaggerated expression, unstable anatomy, horror style",
  },
  {
    no: "03",
    title: "Light Matrix",
    zh: "光栅矩阵",
    category: "PARTICLE SYSTEM · BRAND MOTION",
    description: "让粒子、光栅与几何文字在秩序和失序之间呼吸，形成品牌能量的动态标记。",
    video: asset("motion/material-pulse.mp4"),
    poster: asset("motion/material-pulse.jpg"),
    plan: "先用稀疏光点建立网格，再通过聚合、爆发和回收完成三段节奏；红色能量负责强调转场节点，白色粒子保持整体秩序。",
    prompt: "Abstract motion graphic made of thousands of white light pixels, glowing vermilion red energy particles, light matrix forming and dissolving into geometric typography, precise grid structure, black background, futuristic AI visual identity, elegant particle choreography, rhythmic expansion and contraction, cinematic glow, smooth transition, square 1:1 composition",
    negative: "unreadable typography, random symbols, messy particles, excessive colors, low resolution, flickering, broken geometry, watermark, flat lighting, chaotic movement",
  },
];

const zhuzhuCaseImages = [
  ["1.jpg", "BRAND STORY", "让智能生活变得更有温度。"],
  ["2.jpg", "DESIGN PROCESS", "从角色轮廓，到可以被记住的性格。"],
  ["3.jpg", "MOTION EXTENSION", "用动作延展角色的情绪与日常。"],
  ["4.jpg", "MATERIAL EXTENSION", "让同一个角色拥有不同的触感。"],
  ["5.jpg", "GARMENT EXTENSION", "把角色带进更多身份与故事。"],
  ["6.jpg", "SCENE EXTENSION", "在每一个生活场景里陪伴用户。"],
  ["7.jpg", "GAME MOMENTS", "从游戏时刻开始，建立更勇敢的想象。"],
  ["8.jpg", "LIFE MOMENTS", "把日常过成值得收藏的片段。"],
  ["9.jpg", "POSTER EXTENSION", "让品牌视觉拥有更丰富的传播表情。"],
  ["10.jpg", "DEFAULT PAGE", "即使在空状态，也保持品牌的温度。"],
  ["11.jpg", "PERIPHERAL EXTENSION", "从屏幕走进真实生活。"],
];

const hmiCaseImages = [
  ["reframed/1.png", "CONCEPT / DESIGN PRINCIPLES", "从炫酷视觉出发，但最终回到安全、清晰和可控。", "01 / CONCEPT", "从功能界面，到可被驾驶的数字空间"],
  ["reframed/2.png", "HOME / INFORMATION ARCHITECTURE", "让车辆状态、地图、媒体和环境信息拥有明确的主次关系。", "01 / CONCEPT", "从功能界面，到可被驾驶的数字空间"],
  ["reframed/3.png", "DRIVING MODE / EMOTION", "通过驾驶模式建立不同的速度感、氛围和操作反馈。", "02 / EXPERIENCE SYSTEM", "用状态、任务与情绪组织座舱体验"],
  ["reframed/4.png", "ENERGY / RANGE", "把电量、续航、充电与能耗转化为快速可读的视觉信息。", "02 / EXPERIENCE SYSTEM", "用状态、任务与情绪组织座舱体验"],
  ["reframed/5.png", "MEDIA / IMMERSION", "在沉浸式内容和驾驶注意力之间建立克制的平衡。", "02 / EXPERIENCE SYSTEM", "用状态、任务与情绪组织座舱体验"],
  ["reframed/6.png", "CLIMATE / COMFORT", "把空调、座椅和舒适性设置整合进同一套控制逻辑。", "02 / EXPERIENCE SYSTEM", "用状态、任务与情绪组织座舱体验"],
  ["reframed/7.png", "LIGHT / BRAND LANGUAGE", "用光线、色彩与空间层次延续品牌的运动感。", "03 / VISUAL LANGUAGE", "让视觉表达服务于驾驶判断"],
  ["reframed/8.png", "VEHICLE / 3D MODEL", "用车辆模型承载状态变化，让数据不再停留在平面卡片。", "03 / VISUAL LANGUAGE", "让视觉表达服务于驾驶判断"],
  ["reframed/9.png", "ASSIST / SAFETY", "将辅助驾驶、道路信息和提示内容组织在驾驶视野内。", "04 / SAFETY & FLOW", "信息出现的时机，就是体验的一部分"],
  ["reframed/10.png", "MOTION / FEEDBACK", "用光效和运动强化反馈，但不制造不必要的视觉噪音。", "04 / SAFETY & FLOW", "信息出现的时机，就是体验的一部分"],
  ["reframed/11.png", "MULTIMEDIA / CONTENT", "让内容拥有沉浸感，同时保留清晰的播放和控制路径。", "04 / SAFETY & FLOW", "信息出现的时机，就是体验的一部分"],
  ["reframed/12.png", "SPACE / AMBIENCE", "座舱不是屏幕的集合，而是人与车共同使用的空间。", "05 / SPATIAL EXPERIENCE", "把座舱做成可感知的空间"],
  ["reframed/13.png", "CONTROL / HIERARCHY", "将高频操作、状态确认和深层设置拆分到合适的层级。", "05 / SPATIAL EXPERIENCE", "把座舱做成可感知的空间"],
  ["reframed/14.png", "SYSTEM / COMPONENTS", "通过统一组件和视觉规则，保证不同场景之间的连续性。", "06 / SYSTEM OUTPUT", "一套可延展的 HMI 设计系统"],
  ["reframed/15.png", "SCENE / EXTENSION", "从驾驶、充电到娱乐，建立可以持续生长的场景语言。", "06 / SYSTEM OUTPUT", "一套可延展的 HMI 设计系统"],
  ["reframed/16.png", "OUTCOME / DIRECTION", "以游戏化 3D 视觉增强体验，但始终让驾驶安全成为底层原则。", "06 / SYSTEM OUTPUT", "一套可延展的 HMI 设计系统"],
];

const bEndChapters = [
  {
    no: "01",
    label: "DISCOVERY / 发现问题",
    title: "先理解复杂业务，再决定界面如何表达。",
    note: "通过业务访谈、用户反馈与内部走查，定位信息密度、状态识别和跨角色协作中的核心问题。设计不从改颜色开始，而从重新建立业务秩序开始。",
    files: [2, 3, 4],
  },
  {
    no: "02",
    label: "STRATEGY / 建立原则",
    title: "把一致、高效与安全，变成可执行的设计标准。",
    note: "围绕数字工厂的高频操作与实时监控场景，明确设计目标、信息优先级和视觉降噪策略，为后续组件与页面提供统一判断依据。",
    files: [5, 6],
  },
  {
    no: "03",
    label: "SYSTEM / 构建系统",
    title: "用规范和组件，让复杂产品持续生长。",
    note: "从颜色、字体、间距和图标，到表单、表格、导航与反馈组件，建立可复用的设计语言，同时兼顾设计交付和研发实现。",
    files: [7, 8, 9, 10, 11],
  },
  {
    no: "04",
    label: "REDESIGN / 场景验证",
    title: "在真实页面里验证系统，而不是停留在规范文档。",
    note: "围绕监控、列表、看板和管理后台进行结构重组，减少视觉噪音，突出关键状态，让数据更清晰、操作路径更短。",
    files: [12, 13, 14, 15, 16, 17, 18],
  },
];

const experiences = [
  {
    period: "2023.07 — 2025.05",
    role: "资深 UI 设计师 / 设计 Leader",
    company: "青岛尚美数智科技集团有限公司",
    groups: [
      {
        title: "核心职责",
        items: [
          "完成从用户需求分析、原型设计到视觉设计、交互优化的全流程工作，把控设计质量，确保设计方案落地效果达到预期。",
          "深入研究电商行业用户行为与设计趋势，结合公司业务目标，提出创新性的设计理念与方案，提升产品的用户吸引力和转化率。",
          "与产品、开发、运营等跨部门团队紧密协作，推动设计方案的实施，解决设计过程中出现的问题，确保项目顺利推进。",
        ],
      },
      {
        title: "主要负责项目",
        items: [
          "负责 B 端 / 店长端 PMS、CRS 的 UI 设计、功能梳理与产出。",
          "负责移动端超级系列、酒店后台综合平台的设计。",
          "负责心里美 App 的部分 C 端 UI 设计。",
          "负责酒店智能化大屏、自助机等终端的 UI 设计。",
        ],
      },
    ],
  },
  {
    period: "2021.08 — 2023.04",
    role: "资深 UI 设计师",
    company: "上海沪江教育",
    groups: [
      {
        title: "工作内容",
        items: [
          "负责移动端产品 CCtalk 的功能设计、更新迭代与产品视觉排版优化。",
          "负责 CCtalk 网师后台功能完善、三合一页面设计，并针对产品经理提出的需求进行线上落地。",
          "负责新产品绯凡的整体 UI 产出、视觉规范等。",
          "负责运营部门提出的节假日首页氛围设计及用户营销类小部件设计。",
        ],
      },
    ],
  },
  {
    period: "2019.07 — 2021.08",
    role: "运营设计师",
    company: "北京持柔科技有限公司",
    groups: [
      {
        title: "工作内容",
        items: [
          "负责校园代理业务的活动设计：海报、落地页、详情页，以及领袖家长团公众号的物料设计。",
          "负责电商渠道设计：京东、淘宝的宝贝头图、详情页与海报。",
          "负责 BD 渠道的海报、详情页、Banner 等。",
          "负责新媒体课包及 AB 测试相关设计。",
        ],
      },
    ],
  },
];

const xinlimeiFlowImages = [
  { src: asset("projects/xinlimei/home.jpg"), alt: "心里美酒店预订首页设计", label: "预订首页" },
  { src: asset("projects/xinlimei/hourly-home.jpg"), alt: "心里美钟点房首页设计", label: "钟点房首页" },
  { src: asset("projects/xinlimei/hotel-list.jpg"), alt: "心里美酒店列表页设计", label: "酒店列表" },
  { src: asset("projects/xinlimei/order.jpg"), alt: "心里美下单与权益页面设计", label: "下单与权益" },
  { src: asset("projects/xinlimei/coupon.jpg"), alt: "心里美优惠券页面设计", label: "优惠券" },
  { src: asset("projects/xinlimei/payment-success.jpg"), alt: "心里美支付成功与自助入住页面设计", label: "支付与入住" },
  { src: asset("projects/xinlimei/order-detail.jpg"), alt: "心里美订单详情页面设计", label: "订单详情" },
  { src: asset("projects/xinlimei/membership.jpg"), alt: "心里美联名会员页面设计", label: "联名会员" },
  { src: asset("projects/xinlimei/profile.jpg"), alt: "心里美个人中心页面设计", label: "个人中心" },
  { src: asset("projects/xinlimei/campaign.jpg"), alt: "心里美酒店活动专题页面设计", label: "活动专题" },
];

const xinlimeiLobbyImages = Array.from({ length: 5 }, (_, index) => ({
  src: asset(`projects/xinlimei/lobby-0${index + 1}.jpg`),
  alt: `尚美数智大堂长屏视觉设计 ${index + 1}`,
}));

const cctalkImages = Array.from({ length: 26 }, (_, index) => ({
  src: asset(`projects/cctalk/${index + 1}.jpg`),
  alt: `CCtalk 产品体验重塑项目展示 ${index + 1}`,
}));

const cctalkGroups = [
  {
    no: "01",
    label: "PROJECT FOUNDATION",
    title: "从产品定位出发，建立年轻、清晰且有记忆点的品牌体验。",
    images: cctalkImages.slice(0, 7),
  },
  {
    no: "02",
    label: "CORE EXPERIENCE",
    title: "重构移动端与桌面端的学习、直播和内容浏览体验。",
    images: cctalkImages.slice(7, 16),
  },
  {
    no: "03",
    label: "COURSE CONVERSION",
    title: "围绕课程售卖与决策路径，让信息更完整、转化更顺畅。",
    images: cctalkImages.slice(16, 21),
  },
  {
    no: "04",
    label: "GROWTH & RETENTION",
    title: "用积分、活动与荣誉体系连接活跃、留存和长期价值。",
    images: cctalkImages.slice(21),
  },
];

const miguImages = [
  { src: asset("migu/personal-cover.png"), alt: "咪咕数字人个人名片首页" },
  { src: asset("migu/enterprise.png"), alt: "咪咕数字人企业名片首页" },
  { src: asset("migu/card-self.png"), alt: "咪咕数字人个人视角 MBTI 名片" },
  { src: asset("migu/card-visitor.png"), alt: "咪咕数字人访客视角 MBTI 名片" },
  { src: asset("migu/shake-home.png"), alt: "咪咕数字人摇一摇运势签入口" },
  { src: asset("migu/shake-result.png"), alt: "咪咕数字人摇一摇结果页" },
  { src: asset("migu/enterprise-admin.png"), alt: "咪咕数字人企业管理页面" },
  { src: asset("migu/card-folder.png"), alt: "咪咕数字人名片夹页面" },
];

const toolItems = [
  ["Fi", "Figma", "figma"],
  ["Sk", "Sketch", "sketch"],
  ["即", "即时设计", "js"],
  ["Ps", "Photoshop", "photoshop"],
  ["Ai", "Illustrator", "illustrator"],
  ["Xd", "Adobe XD", "xd"],
  ["Cl", "Claude Code", "claude"],
  ["Cx", "Codex", "codex"],
];

function canUseFinePointer() {
  return typeof window !== "undefined"
    && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function canUseEnhancedEffects() {
  return typeof window !== "undefined"
    && window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (min-width: 721px)").matches;
}

function useDeferredVisualEnabled(delay = 320) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canUseEnhancedEffects()) return undefined;

    let timeoutId = 0;
    let idleId = 0;
    const activate = () => setEnabled(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(activate, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(activate, delay);
    }

    return () => {
      if (idleId) window.cancelIdleCallback?.(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [delay]);

  return enabled;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function getTiltProps() {
  return {
    onMouseMove: (event) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
      card.style.setProperty("--mouse-x", `${x * 100}%`);
      card.style.setProperty("--mouse-y", `${y * 100}%`);
    },
    onMouseLeave: (event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    },
  };
}

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!canUseFinePointer() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame;
    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.current?.style.setProperty("transform", `translate3d(${x}px,${y}px,0)`);
    };
    const render = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      ring.current?.style.setProperty("transform", `translate3d(${rx}px,${ry}px,0)`);
      frame = requestAnimationFrame(render);
    };
    const hover = (event) => {
      const active = event.target.closest("a, button, .glow-frame");
      ring.current?.classList.toggle("is-hovering", Boolean(active));
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    render();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" ref={dot} />
      <span className="cursor-ring" ref={ring} />
    </>
  );
}

function AmbientBloom() {
  return <span className="ambient-bloom" aria-hidden="true" />;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    let current = false;

    const update = () => {
      frame = 0;
      const next = window.scrollY > 24;
      if (next !== current) {
        current = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav aria-label="主导航">
        <a href="#about">关于</a>
        <a href="#work">项目</a>
        <a href="#strengths">优势</a>
      </nav>
    </header>
  );
}

function SectionLabel({ no, children }) {
  return (
    <div className="section-label">
      <span>{no}</span>
      <p>{children}</p>
    </div>
  );
}

function ToolMarquee() {
  return (
    <div className="tool-marquee" aria-label="常用设计与 AI 工具">
      <span className="tool-marquee-label">TOOLS</span>
      <div className="tool-marquee-viewport">
        <div className="tool-marquee-track">
          {[...toolItems, ...toolItems].map(([mark, name, tone], index) => (
            <span className={`tool-chip tool-chip--${tone}`} key={`${name}-${index}`}>
              <b>{mark}</b>
              <em>{name}</em>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RevealLayer({ image, revealRef }) {
  const mask = `radial-gradient(circle ${SPOTLIGHT_R}px at var(--spotlight-x, -999px) var(--spotlight-y, -999px), rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,.75) 60%, rgba(0,0,0,.4) 75%, rgba(0,0,0,.12) 88%, rgba(0,0,0,0) 100%)`;

  return (
    <div
      ref={revealRef}
      className="spotlight-reveal"
      aria-hidden="true"
      style={{
        backgroundImage: `url("${image}")`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

function Hero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const revealRef = useRef(null);
  const spotlightEnabled = useDeferredVisualEnabled(700);

  useEffect(() => {
    if (!spotlightEnabled) return undefined;

    const onMouseMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      revealRef.current?.style.setProperty("--spotlight-x", `${smooth.current.x.toFixed(1)}px`);
      revealRef.current?.style.setProperty("--spotlight-y", `${smooth.current.y.toFixed(1)}px`);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [spotlightEnabled]);

  return (
    <section className="hero hero--spotlight" id="top" style={{ height: "100dvh" }}>
      <div className="spotlight-base hero-zoom" aria-hidden="true" style={{ backgroundImage: `url("${BG_IMAGE_1}")` }} />
      {spotlightEnabled && <RevealLayer image={BG_IMAGE_2} revealRef={revealRef} />}

      <div className="hero-heading">
        <h1 aria-label="UX Designer Personal Site">
          <span className="font-playfair hero-anim hero-reveal" style={{ animationDelay: "0.25s" }}>UX Designer</span>
          <span className="font-playfair hero-anim hero-reveal" style={{ animationDelay: "0.42s" }}>Personal Site</span>
        </h1>
      </div>

      <Magnet
        padding={70}
        magnetStrength={18}
        wrapperClassName="hero-resume-magnet hero-anim hero-fade"
        innerClassName="hero-resume-magnet__inner"
        style={{ animationDelay: "0.62s" }}
      >
        <a className="hero-resume-button" href={asset("yin-peng-resume.pdf")} download>
          <span>View / Download Resume</span>
          <i aria-hidden="true">↓</i>
        </a>
      </Magnet>

      <div className="hero-bottom-left hero-anim hero-fade" style={{ animationDelay: "0.7s" }}>
        <p>
          我把复杂业务拆解成清晰的体验路径，从需求定义、交互设计到视觉落地，让产品更易用、更可信，也更具转化力。
        </p>
      </div>

      <div className="hero-bottom-right hero-anim hero-fade" style={{ animationDelay: "0.85s" }}>
        <p>
          拥有 7年 互联网产品设计经验的资深UI/视觉设计师，兼具 产品经理思维 与 前沿AIGC流体化协作能力。主导过多个后台管理系统、移动端App及小程序、品牌视觉体系从0到1的建设。擅长将商业策略转化为高品质、高转化率的用户界面，能够深度参与产品全生命周期（需求定义、原型设计、交互体系、视觉还原）。深耕UI设计、系统化组件库（Design System），具备极强的自驱力与前沿技术敏锐度，熟练运用AI工具实现设计资产的高效产出与创意突破。
        </p>
        <div className="hero-actions">
          <div className="hero-mini-stats" aria-hidden="true">
            <strong>7+</strong>
            <span>YEARS EXPERIENCE</span>
          </div>
          <div className="hero-mini-stats" aria-hidden="true">
            <strong>100w</strong>
            <span>TEAM REVENUE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [openExperience, setOpenExperience] = useState(null);

  return (
    <section className="section about page-shell" id="about">
      <SectionLabel no="01">ABOUT / 关于我</SectionLabel>
      <div className="about-grid" data-reveal>
        <div className="portrait-wrap">
          <img src={asset("profile-portrait-v2.jpg")} alt="殷鹏个人肖像" loading="lazy" decoding="async" />
          <div className="portrait-overlay">
            <div className="profile-name-line">
              <h3>殷鹏</h3>
              <span className="verified-badge">
                <img src={asset("verified-badge.png")} alt="" aria-hidden="true" />
                花瓣认证UI设计师
              </span>
            </div>
            <p className="profile-role">UI/UX设计师｜7年工作经验｜专业科班</p>
            <div className="profile-info">
              <div className="profile-collection">
                <strong>20,000+</strong>
                <span>原创作品采集数</span>
              </div>
              <dl>
                <div><dt>学校</dt><dd>首都师范大学｜视觉传达与艺术</dd></div>
                <div><dt>电话/微信</dt><dd>17601241637 / Eric-destiny</dd></div>
                <div><dt>邮箱</dt><dd><a href="mailto:yp1366369926@gmail.com">yp1366369926@gmail.com</a></dd></div>
                <div><dt>社交媒体</dt><dd>Eric</dd></div>
              </dl>
            </div>
            <ToolMarquee />
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            我是殷鹏，一名擅长把<span>复杂问题转化为清晰体验</span>的 UI / 视觉设计师。
          </p>
          <div className="about-columns">
            <p>
              拥有 7年 互联网产品设计经验的资深UI/视觉设计师，兼具 产品经理思维 与 前沿AIGC流体化协作能力。主导过多个后台管理系统、移动端App及小程序、品牌视觉体系从0到1的建设。擅长将商业策略转化为高品质、高转化率的用户界面，能够深度参与产品全生命周期（需求定义、原型设计、交互体系、视觉还原）。深耕UI设计、系统化组件库（Design System），具备极强的自驱力与前沿技术敏锐度，熟练运用AI工具实现设计资产的高效产出与创意突破。
            </p>
          </div>
        </div>
      </div>
      <div className="metrics" data-reveal>
        <div><strong>07<sup>+</sup></strong><span>YEARS OF<br />EXPERIENCE</span></div>
        <div><strong>03</strong><span>INDUSTRIES<br />IN DEPTH</span></div>
        <div><strong>100w</strong><span>TEAM REVENUE<br />APPROACHING</span></div>
        <div><strong>∞</strong><span>CURIOSITY<br />FOR DESIGN</span></div>
      </div>
      <div className="experience-list" data-reveal>
        {experiences.map((item, index) => (
          <div className={`experience-item ${openExperience === index ? "is-open" : ""}`} key={item.period}>
            <button
              className="experience-row"
              type="button"
              aria-expanded={openExperience === index}
              onClick={() => setOpenExperience(openExperience === index ? null : index)}
            >
              <span>{item.period}</span>
              <strong>{item.role}</strong>
              <p>{item.company}</p>
              <i>{openExperience === index ? "−" : "+"}</i>
            </button>
            <div className="experience-detail" aria-hidden={openExperience !== index}>
              <div className="experience-detail-inner">
                {item.groups.map((group) => (
                  <div className="experience-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <ol>
                      {group.items.map((detail) => <li key={detail}>{detail}</li>)}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", close);
    document.body.classList.toggle("modal-open", Boolean(activeProject));
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [activeProject]);

  return (
    <section className="section work" id="work">
      <div className="page-shell">
        <SectionLabel no="02">SELECTED WORK / 精选项目</SectionLabel>
        <div className="section-heading" data-reveal>
          <h2>让作品自己<br />建立说服力。</h2>
          <p>SELECTED WORKS<br />2019 — 2025</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`glow-frame project-frame project-frame--${project.no}`} key={project.no} data-reveal {...getTiltProps()}>
              {project.route ? (
              <a className="project-card project-card--native" href={project.route} aria-label={`查看${project.title}完整项目`}>
                <img src={project.image} alt="" loading="lazy" decoding="async" />
                <div className="project-shade" />
                <div className="project-top">
                  <span>{project.no}</span>
                  <p>{project.category}</p>
                </div>
                <div className="project-meta">
                  <div>
                    <p>{project.en}</p>
                    <h3>{project.title}</h3>
                    <span>{project.note}</span>
                  </div>
                  <i className="project-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </i>
                </div>
              </a>
              ) : (
                <div className="project-card">
                  <img src={project.image} alt="" loading="lazy" decoding="async" />
                  <div className="project-shade" />
                  <div className="project-top">
                    <span>{project.no}</span>
                    <p>{project.category}</p>
                  </div>
                  <div className="project-meta">
                    <div>
                      <p>{project.en}</p>
                      <h3>{project.title}</h3>
                      <span>{project.note}</span>
                    </div>
                    <button aria-label={`查看${project.title}项目`} onClick={() => setActiveProject(project)}>
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title}项目详情`}>
          <button className="modal-backdrop" aria-label="关闭项目详情" onClick={() => setActiveProject(null)} />
          <div className="modal-panel">
            <div className="modal-bar">
              <span>CASE STUDY / {activeProject.no}</span>
              <button onClick={() => setActiveProject(null)} aria-label="关闭">CLOSE ×</button>
            </div>
            <img src={activeProject.image} alt="" />
            <div className="modal-content">
              <p>{activeProject.en}</p>
              <h3>{activeProject.title}</h3>
              <div className="modal-grid">
                <span>{activeProject.detail}</span>
                <ul>
                  {activeProject.scope.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths page-shell" id="strengths">
      <SectionLabel no="03">CAPABILITIES / 个人优势</SectionLabel>
      <div className="section-heading" data-reveal>
        <h2>有审美，也有<br />解决问题的能力。</h2>
        <p>DESIGN IS NOT A LAYER.<br />IT IS HOW THINGS WORK.</p>
      </div>
      <div className="strength-grid">
        {strengths.map((item) => {
          const href = item.route || (item.index === "F" ? "#motion" : undefined);
          const isExternal = Boolean(href?.startsWith("http"));

          return (
            <article className="glow-frame strength-frame" key={item.index} data-reveal {...getTiltProps()}>
              <a
                className={`strength-card ${item.image ? "strength-card--project" : ""} ${item.index === "A" ? "strength-card--web3" : ""} ${item.index === "F" ? "strength-card--motion" : ""}`}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {item.image && <img src={item.image} alt={`${item.title}项目封面`} loading="lazy" decoding="async" />}
                {item.index === "F" && !item.image && <img src={asset("motion/light-matrix.jpg")} alt="动态视觉表达视频封面" loading="lazy" decoding="async" />}
                <div className="strength-top">
                  <span>{item.index}</span>
                  <i>{item.icon}</i>
                </div>
                <div>
                  <p>{item.en}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                </div>
                {(item.index === "F" || item.image) && <b className="strength-motion-cta">VIEW PROJECT ↗</b>}
              </a>
            </article>
          );
        })}
      </div>
      <div className="tool-line">
        <span>TOOLS</span>
        <p>FIGMA</p><i>·</i><p>PHOTOSHOP</p><i>·</i><p>SKETCH</p><i>·</i><p>DAVINCI RESOLVE</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-noise" />
      <div className="page-shell contact-inner">
        <p className="eyebrow" data-reveal>AVAILABLE FOR SELECTED PROJECTS · 2026</p>
        <h2>LET'S CREATE<br /><span>SOMETHING</span><br />MEANINGFUL.</h2>
        <div className="contact-footer">
          <a className="contact-email" href="mailto:17600043819@163.com">
            <span>START A CONVERSATION</span>
            <strong>17600043819@163.com</strong>
            <ArrowIcon />
          </a>
          <div>
            <p>BASED IN CHINA</p>
            <p>UI / VISUAL / PRODUCT</p>
          </div>
        </div>
        <div className="contact-links">
          <a href="https://huaban.com/" target="_blank" rel="noreferrer">HUABAN ↗</a>
          <a href="tel:17601241637">PHONE</a>
          <a href={asset("yin-peng-resume.pdf")} download>DOWNLOAD RESUME ↓</a>
        </div>
        <div className="copyright">
          <span>© 2026 YIN PENG</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

function CaseImage({ src, alt, className = "", loading = "lazy", onOpen }) {
  return (
    <button className={`case-image-button ${className}`} type="button" onClick={() => onOpen({ src, alt })}>
      <img src={src} alt={alt} loading={loading} decoding="async" />
      <span>VIEW +</span>
    </button>
  );
}

function XinlimeiCase() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox));
    const close = (event) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <>
      <header className="case-header">
        <a href="#work">← 返回项目</a>
        <span>CASE STUDY / 01</span>
        <p>YIN PENG · UX / UI DESIGN</p>
      </header>
      <main className="case-page">
        <section className="case-hero">
          <img src={asset("projects/xinlimei/cover-generated.jpg")} alt="" loading="eager" fetchPriority="high" decoding="async" />
          <div className="case-hero-shade" />
          <div className="case-hero-copy">
            <p>APP · MINI PROGRAM · 2025</p>
            <h1>心里美酒店预订app</h1>
            <span>从品牌重塑到核心预定、支付与入住流程，构建更清晰、更高效，也更有温度的酒店服务体验。</span>
            <div>
              <i>PRODUCT DESIGN</i>
              <i>UX / UI</i>
              <i>VISUAL SYSTEM</i>
              <i>DELIVERY</i>
            </div>
          </div>
        </section>

        <section className="case-section case-shell" data-reveal>
          <div className="case-section-head">
            <span>01 / PROJECT OVERVIEW</span>
            <h2>从品牌焕新，走向完整的预订体验。</h2>
          </div>
          <CaseImage
            src={asset("projects/xinlimei/overview.jpg")}
            alt="心里美酒店预订入住 App 体验升级项目概览"
            className="case-board"
            loading="eager"
            onOpen={setLightbox}
          />
        </section>

        <section className="case-section case-shell" data-reveal>
          <div className="case-section-head case-section-head--split">
            <span>02 / STRATEGY</span>
            <h2>重新梳理专业性、效率与品牌温度之间的关系。</h2>
          </div>
          <CaseImage
            src={asset("projects/xinlimei/strategy.jpg")}
            alt="心里美产品改版背景、问题与体验目标"
            className="case-board case-board--tall"
            onOpen={setLightbox}
          />
        </section>

        <section className="case-section case-shell" data-reveal>
          <div className="case-section-head">
            <span>03 / INTERFACE SYSTEM</span>
            <h2>让核心页面在统一规则下保持清晰和可识别。</h2>
          </div>
          <div className="case-board-stack">
            <CaseImage src={asset("projects/xinlimei/interface-a.jpg")} alt="心里美核心页面展示一" className="case-board" onOpen={setLightbox} />
            <CaseImage src={asset("projects/xinlimei/interface-b.jpg")} alt="心里美核心页面展示二" className="case-board" onOpen={setLightbox} />
          </div>
        </section>

        <section className="case-section case-shell" data-reveal>
          <div className="case-section-head case-section-head--split">
            <span>04 / EXPERIENCE FLOW</span>
            <h2>连接搜索、预订、支付、入住与会员权益。</h2>
          </div>
          <CaseImage
            src={asset("projects/xinlimei/case-overview.jpg")}
            alt="心里美项目全景与业务数据"
            className="case-board case-board--tall"
            onOpen={setLightbox}
          />
          <div className="case-flow-grid">
            {xinlimeiFlowImages.map((image) => (
              <article className="case-flow-item" key={image.src}>
                <CaseImage src={image.src} alt={image.alt} onOpen={setLightbox} />
                <p>{image.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-shell case-lobby" data-reveal>
          <div className="case-section-head">
            <span>05 / BRAND EXTENSION</span>
            <h2>把数字体验延伸到酒店空间与品牌触点。</h2>
          </div>
          <div className="lobby-grid">
            {xinlimeiLobbyImages.map((image) => (
              <CaseImage key={image.src} src={image.src} alt={image.alt} onOpen={setLightbox} />
            ))}
          </div>
        </section>

        <section className="case-ending">
          <p>END OF CASE / 01</p>
          <h2>让每一次预订，<br />都更简单，也更有人情味。</h2>
          <a href="#work">返回精选项目 <ArrowIcon /></a>
        </section>
      </main>

      {lightbox && (
        <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览">
          <button className="case-lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setLightbox(null)} />
          <div>
            <button type="button" onClick={() => setLightbox(null)} aria-label="关闭">CLOSE ×</button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </>
  );
}

function CctalkCase() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox));
    const close = (event) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <>
      <header className="case-header cctalk-case-header">
        <a href="#work">← 返回项目</a>
        <span>CASE STUDY / 02</span>
        <p>YIN PENG · PRODUCT / UX / UI</p>
      </header>
      <main className="case-page cctalk-page">
        <section className="case-hero cctalk-case-hero">
          <img
            src={asset("projects/cctalk/cover-generated.jpg")}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="case-hero-shade" />
          <div className="case-hero-copy">
            <p>ONLINE EDUCATION · MOBILE · DESKTOP</p>
            <h1>CCtalk<br />体验重塑</h1>
            <span>围绕学习、直播、课程与社区等核心场景，重构跨端信息层级、品牌语言和关键转化路径。</span>
            <div>
              <i>PRODUCT STRATEGY</i>
              <i>UX / UI</i>
              <i>VISUAL SYSTEM</i>
              <i>GROWTH DESIGN</i>
            </div>
          </div>
        </section>

        {cctalkGroups.map((group, groupIndex) => (
          <section className="case-section case-shell cctalk-section" data-reveal key={group.no}>
            <div className="case-section-head">
              <span>{group.no} / {group.label}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="cctalk-gallery">
              {group.images.map((image, imageIndex) => (
                <CaseImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading={groupIndex === 0 && imageIndex === 0 ? "eager" : "lazy"}
                  onOpen={setLightbox}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="case-ending cctalk-ending">
          <p>END OF CASE / 02</p>
          <h2>让学习更快乐，<br />也让体验更有价值。</h2>
          <a href="#work">返回精选项目 <ArrowIcon /></a>
        </section>
      </main>

      {lightbox && (
        <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览">
          <button className="case-lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setLightbox(null)} />
          <div>
            <button type="button" onClick={() => setLightbox(null)} aria-label="关闭">CLOSE ×</button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </>
  );
}

function MiguCase() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox));
    const close = (event) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <>
      <header className="case-header migu-case-header">
        <a href="#work">← 返回项目</a>
        <span>CASE STUDY / 03</span>
        <p>YIN PENG · VISUAL / AI EXPERIENCE</p>
      </header>
      <main className="case-page migu-page">
        <section className="migu-hero case-shell">
          <div className="migu-hero-copy">
            <p>CHINA MOBILE · AI IDENTITY SYSTEM</p>
            <h1>咪咕数字人</h1>
            <span>把身份、性格与祝福做成可被分享的视觉体验，让每个人都拥有一张会生长的数字名片。</span>
            <div className="migu-hero-tags"><i>AI NAME CARD</i><i>MBTI SOCIAL</i><i>NEW YEAR CAMPAIGN</i></div>
          </div>
          <div className="migu-hero-art">
            <div className="migu-orbit migu-orbit--one" />
            <div className="migu-orbit migu-orbit--two" />
            <img src={asset("migu/hero.png")} alt="咪咕数字人春节视觉角色" loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <div className="migu-hero-index"><strong>03</strong><span>IDENTITY<br />IN MOTION</span></div>
        </section>

        <section className="migu-stats case-shell" data-reveal>
          <div><strong>01</strong><span>统一数字身份<br />建立视觉语言</span></div>
          <div><strong>16</strong><span>种 MBTI 性格<br />可生成分享</span></div>
          <div><strong>03</strong><span>身份场景<br />个人 · 企业 · 访客</span></div>
          <div><strong>∞</strong><span>持续生长的<br />内容触点</span></div>
        </section>

        <section className="migu-story case-shell" data-reveal>
          <div className="case-section-head"><span>01 / EXPERIENCE ARCHITECTURE</span><h2>从一张名片，延展出完整的数字身份旅程。</h2></div>
          <div className="migu-story-grid">
            <div className="migu-story-copy"><p>以“可识别、可表达、可分享”为核心，将个人信息、MBTI 性格、节日氛围和企业内容串联成一条轻盈的体验路径。</p><p>每一次测试、摇签与分享，都是用户再次回到产品的理由。</p></div>
            <div className="migu-story-steps"><span>IDENTITY</span><b>→</b><span>PERSONALITY</span><b>→</b><span>SHARE</span></div>
          </div>
        </section>

        <section className="migu-gallery case-shell" data-reveal>
          <div className="case-section-head case-section-head--split"><span>02 / SELECTED SCREENS</span><h2>节日视觉、角色资产与内容组件，组成一套可扩展的系统。</h2></div>
          <div className="migu-gallery-grid">
            {miguImages.map((image, index) => <CaseImage key={image.src} src={image.src} alt={image.alt} className={`migu-gallery-item migu-gallery-item--${index + 1}`} loading={index < 2 ? "eager" : "lazy"} onOpen={setLightbox} />)}
          </div>
        </section>

        <section className="migu-closing case-shell" data-reveal>
          <div><span>03 / OUTCOME</span><h2>让设计成为一种<br /><em>愿意被转发的表达。</em></h2></div>
          <img src={asset("migu/card-self.png")} alt="咪咕数字人 MBTI 名片成果" loading="lazy" decoding="async" />
        </section>
        <section className="case-ending migu-ending"><p>END OF CASE / 03</p><h2>把每一次表达，<br />变成值得收藏的身份。</h2><a href="#work">返回精选项目 <ArrowIcon /></a></section>
      </main>
      {lightbox && <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览"><button className="case-lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setLightbox(null)} /><div><button type="button" onClick={() => setLightbox(null)} aria-label="关闭">CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div></div>}
    </>
  );
}

function VisualProjectCase({ type }) {
  const isHmi = type === "hmi";
  const images = isHmi ? hmiCaseImages : zhuzhuCaseImages;
  const [lightbox, setLightbox] = useState(null);
  const title = isHmi ? "HMI概念稿分享" : "筑筑智能家居 IP";
  const english = isHmi ? "HMI CONCEPT STUDIES" : "ZHUZHU SMART HOME IP";
  const intro = isHmi
    ? "以游戏化 3D 场景为视觉入口，重新梳理驾驶状态、核心任务与情绪反馈，让 HMI 在沉浸感和安全性之间保持平衡。"
    : "一个连接智能品牌与用户日常生活的陪伴型 IP，让科技变得更轻松、更亲切，也更值得被记住。";
  const accent = isHmi ? "#ff7954" : "#c9df58";

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox));
    const close = (event) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <>
      <header className={`case-header visual-case-header ${isHmi ? "hmi-case-header" : "zhuzhu-case-header"}`}>
        <a href="#strengths">← 返回优势</a>
        <span>CASE STUDY / {isHmi ? "HMI" : "IP"}</span>
        <p>YIN PENG · {isHmi ? "HMI / 3D VISUAL" : "BRAND / IP / VISUAL"}</p>
      </header>
      <main className={`case-page visual-case-page ${isHmi ? "hmi-case-page" : "zhuzhu-case-page"}`} style={{ "--case-accent": accent }}>
        <section className={`visual-case-hero case-shell ${isHmi ? "visual-case-hero--hmi" : "visual-case-hero--zhuzhu"}`}>
          <div className="visual-case-hero-copy">
            <p>{isHmi ? "AUTOMOTIVE HMI · DIGITAL COCKPIT · 2026" : "SMART HOME · IP DESIGN · 2026"}</p>
            <h1>{isHmi ? <>智能座舱 HMI <em>概念设计</em></> : <>筑筑<br /><em>ZHUZHU</em></>}</h1>
            {isHmi && <div className="hmi-hero-english">Automotive Human Machine Interface</div>}
            <span>{isHmi ? "聚焦数字座舱体验设计，涵盖仪表、中控、多场景交互" : intro}</span>
            <div className="visual-case-tags"><i>{isHmi ? "HMI SYSTEM" : "IP DESIGN"}</i><i>3D VISUAL</i><i>{isHmi ? "DIGITAL COCKPIT" : "BRAND EXTENSION"}</i></div>
          </div>
          <div className={`visual-case-stage ${isHmi ? "visual-case-stage--hmi" : "visual-case-stage--ip"}`}>
            {isHmi ? (
              <div className="hmi-hero-cockpit" aria-label="HMI 智能座舱主视觉">
                <img src={asset("projects/hmi/hmi-hero-group16.png")} alt="未来驾驶体验 HMI 智能座舱头图" loading="eager" fetchPriority="high" decoding="async" />
                <div className="hmi-hero-cockpit-shade" aria-hidden="true" />
                <div className="hmi-hero-cockpit-glow" aria-hidden="true" />
                <div className="hmi-hero-scan" aria-hidden="true" />
                <div className="hmi-hero-data hmi-hero-data--top"><span>IN-CAR EXPERIENCE / 01</span><b>ACTIVE</b></div>
                <div className="hmi-hero-data hmi-hero-data--bottom"><span>HMI CONCEPT STUDIES</span><b>SPACE / FLOW / SAFETY</b></div>
                <span className="hmi-hero-node hmi-hero-node--one" aria-hidden="true" />
                <span className="hmi-hero-node hmi-hero-node--two" aria-hidden="true" />
              </div>
            ) : (
              <div className="zhuzhu-hero-full" aria-label="筑筑智能家居 IP 项目首屏视觉">
                <img src={asset("projects/zhuzhu/hero-fullwidth.png")} alt={`${title}居家陪伴场景`} loading="eager" fetchPriority="high" decoding="async" />
                <div className="zhuzhu-hero-shade" aria-hidden="true" />
              </div>
            )}
          </div>
        </section>
        <section className="visual-case-intro case-shell" data-reveal>
          <div className="case-section-head"><span>00 / DESIGN DIRECTION</span><h2>{isHmi ? "从功能界面，到可被驾驶的数字空间。" : "让智能家居拥有一个可以被感知的性格。"}</h2></div>
          <div className="visual-case-intro-grid"><p>{isHmi ? "这次 HMI 概念以“状态—任务—情绪”为设计骨架：状态帮助驾驶者快速确认车辆，任务让高频操作保持清晰，情绪则通过 3D 场景、光效和动效建立品牌记忆。最终让复杂能力被更自然地理解，也让视觉表达始终服务于驾驶判断。" : "筑筑不是一个单纯的吉祥物，而是品牌与用户之间的情绪接口。通过圆润的形体、明亮的色彩和丰富的生活场景，让智能家居从功能连接走向关系连接。"}</p><div><strong>{isHmi ? "STATE" : "WARM"}</strong><strong>{isHmi ? "TASK" : "CURIOUS"}</strong><strong>{isHmi ? "EMOTION" : "CONNECTED"}</strong></div></div>
        </section>
        <section className="visual-case-gallery case-shell" data-reveal>
          <div className="case-section-head case-section-head--split"><span>01 — {isHmi ? "HMI EXPERIENCE SYSTEM" : "3D CHARACTER SYSTEM"}</span><h2>{isHmi ? "以六个章节，拆解一套可延展的数字座舱体验。" : "从角色出发，延展一整套生活想象。"}</h2></div>
          <div className="visual-case-board-list">
            {images.map(([file, label, caption, chapter, chapterTitle], index) => (
              <React.Fragment key={file}>
                {isHmi && (index === 0 || images[index - 1][3] !== chapter) && <div className="hmi-chapter-heading" data-reveal><span>{chapter}</span><h3>{chapterTitle}</h3></div>}
                <article className={`visual-case-board visual-case-board--${index % 2 ? "offset" : "wide"}`} data-reveal>
                  <div><span>{String(index + 1).padStart(2, "0")} / {label}</span><h3>{caption}</h3><small>CLICK TO EXPLORE</small></div>
                  <CaseImage src={asset(`projects/${isHmi ? "hmi" : "zhuzhu"}/${file}`)} alt={`${title} ${label}`} onOpen={setLightbox} />
                </article>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="case-ending visual-case-ending"><p>END OF CASE / {isHmi ? "HMI" : "IP"}</p><h2>{isHmi ? <>让每一条信息，<br />都服务于驾驶。</> : <>让科技更有温度，<br />让陪伴自然发生。</>}</h2><a href="#strengths">返回个人优势 <ArrowIcon /></a></section>
      </main>
      {lightbox && <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览"><button className="case-lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setLightbox(null)} /><div><button type="button" onClick={() => setLightbox(null)} aria-label="关闭">CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div></div>}
    </>
  );
}

function BEndCase() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox));
    const close = (event) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.classList.remove("modal-open");
    };
  }, [lightbox]);

  return (
    <>
      <header className="case-header b-end-case-header">
        <a href="#strengths">← 返回优势</a>
        <span>CASE STUDY / B2B</span>
        <p>YIN PENG · PRODUCT / DESIGN SYSTEM</p>
      </header>
      <main className="case-page b-end-page">
        <section className="b-end-hero">
          <div className="b-end-shell b-end-hero-copy">
            <p>ENTERPRISE PRODUCT · DESIGN SYSTEM · 2026</p>
            <h1>ZYSCO 2.0<br /><em>数字化工厂</em></h1>
            <div className="b-end-hero-meta">
              <span>面向复杂工业业务的 B 端产品重构，从用户洞察、信息架构到设计系统与页面落地，建立更清晰、更高效、更可持续的数字体验。</span>
              <div><i>UX STRATEGY</i><i>DESIGN SYSTEM</i><i>DATA EXPERIENCE</i></div>
            </div>
          </div>
          <div className="b-end-hero-board b-end-shell">
            <CaseImage src={asset("projects/b-end/1.png")} alt="ZYSCO 2.0 数字化工厂项目总览" loading="eager" onOpen={setLightbox} />
          </div>
        </section>

        <section className="b-end-overview b-end-shell" data-reveal>
          <div className="b-end-kicker"><span>00</span><p>DESIGN THINKING<br />设计思路</p></div>
          <div className="b-end-overview-copy">
            <h2>不是把后台做得更漂亮，<br />而是把复杂业务变得更容易理解。</h2>
            <p>项目以“业务秩序”为核心：先识别用户角色与关键任务，再重建信息层级；通过设计系统统一表达方式，最后回到真实页面验证效率与可读性。视觉克制、层级清晰、状态明确，是这套系统最重要的设计语言。</p>
          </div>
          <div className="b-end-principles">
            <article><span>01</span><h3>一致</h3><p>统一组件、状态和交互语言，降低跨模块学习成本。</p></article>
            <article><span>02</span><h3>高效</h3><p>突出核心任务与高频操作，缩短判断和执行路径。</p></article>
            <article><span>03</span><h3>安全</h3><p>强化状态、告警与结果反馈，让关键操作更可控。</p></article>
          </div>
        </section>

        <section className="b-end-process b-end-shell">
          {bEndChapters.map((chapter) => (
            <article className="b-end-chapter" key={chapter.no} data-reveal>
              <header>
                <span>{chapter.no}</span>
                <div><p>{chapter.label}</p><h2>{chapter.title}</h2></div>
                <p>{chapter.note}</p>
              </header>
              <div className="b-end-board-list">
                {chapter.files.map((file, index) => (
                  <div className={index % 3 === 1 ? "b-end-board b-end-board--inset" : "b-end-board"} key={file}>
                    <div className="b-end-board-label"><span>{String(file).padStart(2, "0")}</span><p>ZYSCO 2.0 / SYSTEM BOARD</p></div>
                    <CaseImage src={asset(`projects/b-end/${file}.png`)} alt={`ZYSCO 2.0 数字化工厂设计展示 ${file}`} onOpen={setLightbox} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="b-end-outcome">
          <div className="b-end-shell">
            <p>DESIGN OUTCOME / 设计说明</p>
            <h2>让数据更清晰，<br />让系统更容易协作。</h2>
            <span>通过统一视觉规范、可复用组件与场景化验证，设计从单个页面优化升级为可持续的产品能力；既改善用户对信息的判断效率，也为产品、设计和开发建立共同语言。</span>
            <a href="#strengths">返回个人优势 <ArrowIcon /></a>
          </div>
        </section>
      </main>
      {lightbox && <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="作品大图预览"><button className="case-lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setLightbox(null)} /><div><button type="button" onClick={() => setLightbox(null)} aria-label="关闭">CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div></div>}
    </>
  );
}

function MotionCase() {
  return (
    <>
      <header className="case-header motion-case-header">
        <a href="#work">← 返回项目</a>
        <span>MOTION STUDIES / 03 FILMS</span>
        <p>YIN PENG · DYNAMIC VISUAL EXPRESSION</p>
      </header>
      <main className="case-page motion-page">
        <section className="motion-hero case-shell">
          <div>
            <p className="motion-kicker">DYNAMIC VISUAL EXPRESSION / 2026</p>
            <h1>MOTION<br /><em>VISUAL</em><br />EXPRESSION</h1>
            <span>把材质、身份和品牌能量转译成可观看、可感知、可被记住的动态语言。</span>
          </div>
          <div className="motion-hero-orbit" aria-hidden="true"><span>03</span><i /></div>
        </section>

        <section className="motion-intro case-shell" data-reveal>
          <div className="case-section-head"><span>01 / MOTION SYSTEM</span><h2>三种运动逻辑，组成一套可延展的视觉表达方法。</h2></div>
          <div className="motion-intro-grid">
            <p>从产品材质的触感，到数字身份的识别，再到粒子与文字的品牌能量，三个片段分别对应“看见细节、确认身份、形成记忆”三个层次。</p>
            <div><strong>TACTILE</strong><strong>IDENTITY</strong><strong>ENERGY</strong></div>
          </div>
        </section>

        <section className="motion-films case-shell" data-reveal>
          <div className="case-section-head case-section-head--split"><span>02 / SELECTED FILMS</span><h2>每一段动态，都从一个清晰的视觉命题出发。</h2></div>
          <div className="motion-film-list">
            {motionFilms.map((film) => (
              <article className="motion-film" key={film.no}>
                <div className="motion-film-media">
                  <video controls playsInline preload="metadata" poster={film.poster} aria-label={`${film.title} 视频播放`}>
                    <source src={film.video} type="video/mp4" />
                  </video>
                  <span className="motion-film-no">{film.no}</span>
                </div>
                <div className="motion-film-copy">
                  <div><p>{film.category}</p><h3>{film.title} <em>{film.zh}</em></h3></div>
                  <span>{film.description}</span>
                  <details>
                    <summary>查看生成方案与提示词</summary>
                    <div className="motion-prompt"><p><strong>生成方案</strong>{film.plan}</p><p><strong>Prompt</strong>{film.prompt}</p><p><strong>Negative prompt</strong>{film.negative}</p></div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="motion-closing case-shell" data-reveal>
          <span>03 / DESIGN NOTE</span>
          <h2>动态不是装饰，<br /><em>而是让信息开始呼吸。</em></h2>
          <p>通过镜头速度、粒子密度、光线方向和转场节奏，让视觉系统在静态页面之外继续表达。</p>
        </section>
        <section className="case-ending motion-ending"><p>END OF MOTION STUDIES</p><h2>让每一个画面，<br />都留下运动的余韵。</h2><a href="#work">返回精选项目 <ArrowIcon /></a></section>
      </main>
    </>
  );
}

function GlobalBackground() {
  const showBackground = useDeferredVisualEnabled(260);

  return (
    <div className="site-grainient" aria-hidden="true">
      {showBackground ? (
        <Suspense fallback={null}>
          <LazyGrainient
            color1="#ff6b36"
            color2="#170704"
            color3="#030303"
            timeSpeed={0.12}
            colorBalance={0.08}
            warpStrength={1.65}
            warpFrequency={3.8}
            warpSpeed={0.75}
            warpAmplitude={68}
            blendAngle={18}
            blendSoftness={0.28}
            rotationAmount={240}
            noiseScale={1.45}
            grainAmount={0.055}
            grainScale={2.2}
            contrast={1.35}
            gamma={0.9}
            saturation={0.72}
            centerX={0.08}
            centerY={-0.06}
            zoom={0.82}
            maxFps={12}
          />
        </Suspense>
      ) : null}
    </div>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.hash);
  const isMotionPath = window.location.pathname.endsWith("/motion");

  useEffect(() => {
    const onRouteChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onRouteChange);
    return () => window.removeEventListener("hashchange", onRouteChange);
  }, []);

  useLayoutEffect(() => {
    if (isMotionPath || route === "#project/xinlimei" || route === "#project/cctalk" || route === "#project/migu" || route === "#project/zhuzhu" || route === "#project/hmi" || route === "#project/b-end") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (!route) return;

    try {
      const target = document.querySelector(route);
      if (target instanceof Element) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
      }
    } catch {
      // Ignore malformed hashes so the app can still render normally.
    }
  }, [isMotionPath, route]);

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [route]);

  if (route === "#project/xinlimei") {
    return (
      <>
        <GlobalBackground />
        <AmbientBloom />
        <Cursor />
        <XinlimeiCase />
      </>
    );
  }

  if (route === "#project/cctalk") {
    return (
      <>
        <GlobalBackground />
        <AmbientBloom />
        <Cursor />
        <CctalkCase />
      </>
    );
  }

  if (route === "#project/migu") {
    return (
      <>
        <GlobalBackground />
        <AmbientBloom />
        <Cursor />
        <MiguCase />
      </>
    );
  }

  if (route === "#project/zhuzhu") {
    return <><GlobalBackground /><AmbientBloom /><Cursor /><VisualProjectCase type="zhuzhu" /></>;
  }

  if (route === "#project/hmi") {
    return <><GlobalBackground /><AmbientBloom /><Cursor /><VisualProjectCase type="hmi" /></>;
  }

  if (route === "#project/b-end") {
    return <><GlobalBackground /><AmbientBloom /><Cursor /><BEndCase /></>;
  }

  if (isMotionPath || route === "#motion") {
    return (
      <>
        <GlobalBackground />
        <AmbientBloom />
        <Cursor />
        <MotionCase />
      </>
    );
  }

  return (
    <>
      <GlobalBackground />
      <AmbientBloom />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Strengths />
      </main>
      <Contact />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = window.__YIN_PENG_PORTFOLIO_ROOT__ ?? createRoot(rootElement);
window.__YIN_PENG_PORTFOLIO_ROOT__ = root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
