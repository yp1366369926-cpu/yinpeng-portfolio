export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  tags: string[];
};

export type ProjectItem = {
  number: string;
  category: string;
  title: string;
  description: string;
  accent: string;
  images: string[];
};

export type PortfolioData = {
  identity: {
    displayName: string;
    chineseName: string;
    roles: string[];
    statement: string;
  };
  navigation: { label: string; href: string }[];
  contact: {
    phone: string;
    email: string;
  };
  about: string;
  education: {
    period: string;
    degree: string;
    subject: string;
    school: string;
  };
  awards: string[];
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  capabilities: { number: string; title: string; description: string }[];
};

export const portfolio: PortfolioData = {
  identity: {
    displayName: 'YIN PENG',
    chineseName: '殷鹏',
    roles: ['Visual Designer', 'UI Designer', 'Brand Designer'],
    statement: 'Crafting clear, distinctive, and memorable digital experiences.',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    phone: '17601241637',
    email: '17600043819@163.com',
  },
  about:
    'I am a visual and UI designer who enjoys turning complex ideas into clear, useful, and memorable experiences. I work across product interfaces, brand systems, e-commerce campaigns, and operational design, with a strong focus on quality, collaboration, and thoughtful problem solving.',
  education: {
    period: '2015 — 2019',
    degree: 'Bachelor',
    subject: 'Visual Communication and Design',
    school: '首都师范大学科德学院',
  },
  awards: ['花瓣认证签约 UI 设计师', '计算机一级证书', '沪江季度优秀员工'],
  skills: ['UI Design', 'Branding', 'Visual Design', 'Interaction', 'E-commerce', 'Team Lead'],
  experience: [
    {
      period: '2019.07 — 2021.08',
      role: '运营设计师 · 市场部',
      company: '北京持柔科技有限公司',
      summary: '负责校园代理、电商渠道、BD 渠道与新媒体的活动视觉设计，覆盖海报、落地页、详情页、Banner 和 AB 测试物料。',
      tags: ['Campaigns', 'E-commerce', 'Social'],
    },
    {
      period: '2021.08 — 2023.04',
      role: '资深 UI 设计师 · 产研中心 · 产品部',
      company: '上海沪江教育',
      summary: '负责 CCtalk 移动端产品迭代、网师后台与新产品绯凡的整体 UI 产出，同时支持节日氛围和用户营销组件设计。',
      tags: ['Product UI', 'Design System', 'Operations'],
    },
    {
      period: '2023.07 — 2025.05',
      role: '资深 UI 设计师 · 产品部 · 设计 Leader',
      company: '青岛尚美数智科技集团有限公司',
      summary: '从用户需求分析、原型到视觉设计与交互优化全流程推进项目，研究电商用户行为，与产品、开发、运营团队协作落地设计方案。',
      tags: ['UX', 'Leadership', 'E-commerce'],
    },
  ],
  projects: [
    {
      number: '01',
      category: 'Product UI',
      title: 'Digital Product Systems',
      description: 'A flexible interface direction for products that need clarity, rhythm, and a strong visual point of view.',
      accent: '#2447FF',
      images: [
        'linear-gradient(140deg, #15245e 0%, #2447ff 45%, #c7d2ff 100%)',
        'linear-gradient(140deg, #0e111a 0%, #526dff 58%, #e2e7ff 100%)',
        'linear-gradient(160deg, #101935 0%, #8ba1ff 45%, #2447ff 100%)',
      ],
    },
    {
      number: '02',
      category: 'Brand Identity',
      title: 'Visual Language & Identity',
      description: 'A distinctive visual system that connects typography, color, and image-making across brand touchpoints.',
      accent: '#ff6b4a',
      images: [
        'linear-gradient(140deg, #29131a 0%, #ff6b4a 48%, #ffd2be 100%)',
        'linear-gradient(140deg, #301117 0%, #d7464f 50%, #ffe1c6 100%)',
        'linear-gradient(160deg, #180f19 0%, #ff9a66 44%, #743746 100%)',
      ],
    },
    {
      number: '03',
      category: 'Operations & E-commerce',
      title: 'Campaigns That Convert',
      description: 'Campaign and commerce visuals designed to make offers easier to understand and moments harder to forget.',
      accent: '#9b7cff',
      images: [
        'linear-gradient(140deg, #171332 0%, #9b7cff 50%, #e7ddff 100%)',
        'linear-gradient(140deg, #21163b 0%, #cc8cff 48%, #ffe4f1 100%)',
        'linear-gradient(160deg, #130f2d 0%, #6a4ed4 44%, #c5b4ff 100%)',
      ],
    },
  ],
  capabilities: [
    { number: '01', title: 'Visual Design', description: 'Building clear visual directions with strong hierarchy, composition, and polish.' },
    { number: '02', title: 'UI / Product Design', description: 'Turning product goals and user needs into intuitive, expressive interface systems.' },
    { number: '03', title: 'Brand Identity', description: 'Creating memorable identities that stay consistent across every touchpoint.' },
    { number: '04', title: 'Operations & E-commerce Design', description: 'Designing campaigns, promotional assets, and commerce experiences that communicate quickly.' },
    { number: '05', title: 'Interaction Optimization', description: 'Refining flows, states, and feedback so the experience feels natural and complete.' },
    { number: '06', title: 'Design Leadership', description: 'Aligning teams, translating ideas, and guiding quality from concept to delivery.' },
  ],
};
