import type { ProjectKey, CategoryKey, Locale } from './projects';

type ProjectText = {
  title: string;
  description: string;
  urlDisplay: string;
};

export const translations: Record<Locale, {
  pageTitle: string;
  heroTitle: string;
  sectionTitle: string;
  all: string;
  expandAll: string;
  collapse: string;
  categories: Record<CategoryKey, string>;
  projects: Record<ProjectKey, ProjectText>;
  linksSectionTitle: string;
  linkGroups: Record<string, string>;
  membersSectionTitle: string;
  platforms: Record<string, string>;
  infoTitle: string;
  infoLine1: string;
  infoLine2: string;
  infoLine3: string;
  infoLine4: string;
}> = {
  'zh-Hant': {
    pageTitle: '蘇打綠 | Sodagreen',
    heroTitle: '蘇打綠',
    sectionTitle: '我的項目',
    all: '全部',
    expandAll: '展開全部',
    collapse: '收起',
    categories: {
      resource: '資料',
      interactive: '互動',
      media: '自媒體',
    },
    projects: {
      sodaguide: {
        title: '蘇打蓋 Sodaguide',
        description: '蘇打綠 aka 魚丁糸、吳青峰的觀光導覽地圖',
        urlDisplay: 'sodaguide.cn',
      },
      '2024-report': {
        title: '蘇打綠二十年一刻 2024 觀演報告',
        description: '我的二十年一刻 2024 觀演報告',
        urlDisplay: '2024.sodagreen.me',
      },
      'soda-yinpa': {
        title: '蘇打音趴 Soda Yinpa',
        description: '和我們一起聊聊蘇打綠的音樂故事',
        urlDisplay: '進入 Bilibili 合集',
      },
      'soda-life': {
        title: '蘇打人生',
        description: '敬請期待',
        urlDisplay: '敬請期待',
      },
      'soda-lyrics': {
        title: 'SODA·LYRICS',
        description: '敬請期待',
        urlDisplay: '敬請期待',
      },
    },
    linksSectionTitle: '外部連結',
    linkGroups: {
      sodagreen: '蘇打綠 aka 魚丁糸',
      tour20th: '蘇打綠二十年一刻巡迴演唱會',
      qingfeng: '吳青峰（青峰）',
      afu: '何景揚（阿福）',
      xiaowei: '史俊威（小威）',
      agong: '龔鈺祺（阿龔）',
      xinyi: '謝馨儀（馨儀）',
      jiakai: '劉家凱（家凱）',
    },
    membersSectionTitle: '團員個人',
    platforms: {
      website: '官網',
      weibo: '微博',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      xiaohongshu: '小紅書',
      bilibili: 'Bilibili',
    },
    infoTitle: '說明',
    infoLine1: '本網頁為粉絲自發製作，非官方網頁，與蘇打綠官方無關，禁止任何人將該網站用於盈利或商業用途。',
    infoLine2: '若您認為該網頁侵犯了您的權益，請與我聯絡：<a href="mailto:carlo0901@163.com" class="text-[#18794E] underline dark:text-[#34d399]">carlo0901@163.com</a>。',
    infoLine3: '網頁作者：<a href="https://corecabin.cn/" target="_blank" rel="noopener noreferrer" class="text-[#18794E] underline dark:text-[#34d399]">卡洛 Carlo</a>',
    infoLine4: '最後更新：2026-04-27',
  },
  'zh-CN': {
    pageTitle: '苏打绿 | Sodagreen',
    heroTitle: '苏打绿',
    sectionTitle: '我的项目',
    all: '全部',
    expandAll: '展开全部',
    collapse: '收起',
    categories: {
      resource: '资料',
      interactive: '互动',
      media: '自媒体',
    },
    projects: {
      sodaguide: {
        title: '苏打盖 Sodaguide',
        description: '苏打绿 aka 鱼丁糸、吴青峰的观光导览地图',
        urlDisplay: 'sodaguide.cn',
      },
      '2024-report': {
        title: '苏打绿二十年一刻 2024 观演报告',
        description: '我的二十年一刻 2024 观演报告',
        urlDisplay: '2024.sodagreen.me',
      },
      'soda-yinpa': {
        title: '苏打音趴 Soda Yinpa',
        description: '和我们一起聊聊苏打绿的音乐故事',
        urlDisplay: '进入 Bilibili 合集',
      },
      'soda-life': {
        title: '苏打人生',
        description: '敬请期待',
        urlDisplay: '敬请期待',
      },
      'soda-lyrics': {
        title: 'SODA·LYRICS',
        description: '敬请期待',
        urlDisplay: '敬请期待',
      },
    },
    linksSectionTitle: '外部链接',
    linkGroups: {
      sodagreen: '苏打绿 aka 鱼丁糸',
      tour20th: '苏打绿二十年一刻巡回演唱会',
      qingfeng: '吴青峰（青峰）',
      afu: '何景扬（阿福）',
      xiaowei: '史俊威（小威）',
      agong: '龚钰祺（阿龚）',
      xinyi: '谢馨仪（馨仪）',
      jiakai: '刘家凯（家凯）',
    },
    membersSectionTitle: '团员个人',
    platforms: {
      website: '官网',
      weibo: '微博',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      xiaohongshu: '小红书',
      bilibili: 'Bilibili',
    },
    infoTitle: '说明',
    infoLine1: '本网页为粉丝自发制作，非官方网页，与苏打绿官方无关，禁止任何人将该网站用于盈利或商业用途。',
    infoLine2: '若您认为该网页侵犯了您的权益，请与我联络：<a href="mailto:carlo0901@163.com" class="text-[#18794E] underline dark:text-[#34d399]">carlo0901@163.com</a>。',
    infoLine3: '网页作者：<a href="https://corecabin.cn/" target="_blank" rel="noopener noreferrer" class="text-[#18794E] underline dark:text-[#34d399]">卡洛 Carlo</a>',
    infoLine4: '最后更新：2026-04-27',
  },
};
