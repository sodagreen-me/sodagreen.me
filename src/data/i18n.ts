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
  lyrics: { text: string; song: string }[];
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
    lyrics: [
      { text: '大約凌晨三點半醒過來\n莫名其妙喝了一杯蘇打', song: '空氣中的視聽與幻覺' },
      { text: '看天國 看快活\n看眼角耳際開出花朵', song: '飛魚' },
      { text: '我身上還有 春天的痕跡\n塵封的記憶 已開始飄零', song: '頻率' },
      { text: '為何這城市為所欲為\n我只要只屬於我的宇宙', song: '小宇宙' },
      { text: '你知道 就算大雨讓整座城市顛倒\n我會給你懷抱', song: '小情歌' },
      { text: '我知道你才是這世界上\n無與倫比的美麗', song: '無與倫比的美麗' },
      { text: '請讓我在你身邊\n一起紀念這一天', song: '這天' },
      { text: '我會永遠相信 最後一片落葉\n無論什麼世界 東風藏在眉心', song: '相信' },
      { text: '切切的思念 懸在天央上呼喊\n不睡的魚 載著我出海', song: '陪我歌唱' },
      { text: '水濂遮蔽 海妖歌吟\n夜燕竄襲 金手撫息', song: '日光' },
      { text: '埋伏了一整季的思念被你剝離\n棉絮爬上了頭髮換算年齡', song: '交響夢' },
      { text: '汗水在他的身上化成了彩虹\n步伐的節奏延續生命的河流', song: '他夏了夏天' },
      { text: '再不能愛 也是活該\n只能短暫 所以大嚷', song: '蟬想' },
      { text: '無論有多少嘲笑的眼\n我就算死也要死於自己的信念', song: '包圍' },
      { text: '就算偶爾受傷 打直腰桿堅強\n因為受過了傷 自由才有光芒', song: '狂熱' },
      { text: '過去一直去，未來一直來，\n只有現在……', song: '近未來' },
      { text: '寧願捨一頓飯也聽你唱\n消磨這一身魂也陪你闖', song: '十年一刻' },
      { text: '我 在曠野漂流\n漂流的盡頭 就是你愛的寬容', song: '當我們一起走過' },
      { text: '時間從來不回答\n生命從來不喧嘩', song: '你在煩惱什麼' },
      { text: '一葉舟，一蓑煙，丟了槳，也無悔，\n任江水漂流我飛。', song: '故事' },
      { text: '我好想你，好想你，\n卻不露痕跡。', song: '我好想你' },
      { text: '「我試著騙自己，有散也有聚，\n只是想起了，再無人聆聽，不如歸去。」', song: '說了再見以後' },
      { text: '故事已經，翻了幾頁。\n所有回憶，青絲成雪。', song: '再遇見' },
      { text: '我讓你揭發我讓你恨我讓你罪怪我', song: '痛快的哀艷' },
      { text: '像一片落葉 墜落前枯黃的紛飛\n情緒越沉重 就越貼近地面', song: '下雨的夜晚' },
      { text: '「有沒有它這麼恨我們的八卦？」\n「幾十年後，世界會不會還一樣……」', song: '他舉起右手點名' },
      { text: '那愛絕不會放棄愛\n別失望 🌈', song: '牆外的風景' },
      { text: '不愛永恆，但求現在：\n真實活著的人生。', song: '未了' },
      { text: '停不了對夢想的渴望\n那就放膽一搏再去闖一闖', song: 'Tomorrow will be fine.' },
      { text: '謊言 心碎 失眠 你在我身邊\n無措 陪我面對 來來回回', song: 'To You' },
      { text: '在你的眼底想我所有的一切\n而你的應許是我唯一的信念', song: '應許' },
      { text: '在你的笑裡頭我的私人王國\n煽情的歌手都聽不懂', song: '只有可以' },
    ],
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
    infoLine4: '最後更新：2026-04-24',
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
    lyrics: [
      { text: '大约凌晨三点半醒过来\n莫名其妙喝了一杯苏打', song: '空气中的视听与幻觉' },
      { text: '看天国 看快活\n看眼角耳际开出花朵', song: '飞鱼' },
      { text: '我身上还有 春天的痕迹\n尘封的记忆 已开始飘零', song: '频率' },
      { text: '为何这城市为所欲为\n我只要只属于我的宇宙', song: '小宇宙' },
      { text: '你知道 就算大雨让整座城市颠倒\n我会给你怀抱', song: '小情歌' },
      { text: '我知道你才是这世界上\n无与伦比的美丽', song: '无与伦比的美丽' },
      { text: '请让我在你身边\n一起纪念这一天', song: '这天' },
      { text: '我会永远相信 最后一片落叶\n无论什么世界 东风藏在眉心', song: '相信' },
      { text: '切切的思念 悬在天央上呼喊\n不睡的鱼 载着我出海', song: '陪我歌唱' },
      { text: '水濂遮蔽 海妖歌吟\n夜燕窜袭 金手抚息', song: '日光' },
      { text: '埋伏了一整季的思念被你剥离\n棉絮爬上了头发换算年龄', song: '交响梦' },
      { text: '汗水在他的身上化成了彩虹\n步伐的节奏延续生命的河流', song: '他夏了夏天' },
      { text: '再不能爱 也是活该\n只能短暂 所以大嚷', song: '蝉想' },
      { text: '无论有多少嘲笑的眼\n我就算死也要死于自己的信念', song: '包围' },
      { text: '就算偶尔受伤 打直腰杆坚强\n因为受过了伤 自由才有光芒', song: '狂热' },
      { text: '过去一直去，未来一直来，\n只有现在……', song: '近未来' },
      { text: '宁愿舍一顿饭也听你唱\n消磨这一身魂也陪你闯', song: '十年一刻' },
      { text: '我 在旷野漂流\n漂流的尽头 就是你爱的宽容', song: '当我们一起走过' },
      { text: '时间从来不回答\n生命从来不喧哗', song: '你在烦恼什么' },
      { text: '一叶舟，一蓑烟，丢了桨，也无悔，\n任江水漂流我飞。', song: '故事' },
      { text: '我好想你，好想你，\n却不露痕迹。', song: '我好想你' },
      { text: '「我试着骗自己，有散也有聚，\n只是想起了，再无人聆听，不如归去。」', song: '说了再见以后' },
      { text: '故事已经，翻了几页。\n所有回忆，青丝成雪。', song: '再遇见' },
      { text: '我让你揭发我让你恨我让你罪怪我', song: '痛快的哀艳' },
      { text: '像一片落叶 坠落前枯黄的纷飞\n情绪越沉重 就越贴近地面', song: '下雨的夜晚' },
      { text: '「有没有它这么恨我们的八卦？」\n「几十年后，世界会不会还一样……」', song: '他举起右手点名' },
      { text: '那爱绝不会放弃爱\n别失望 🌈', song: '墙外的风景' },
      { text: '不爱永恒，但求现在：\n真实活着的人生。', song: '未了' },
      { text: '停不了对梦想的渴望\n那就放胆一搏再去闯一闯', song: 'Tomorrow will be fine.' },
      { text: '谎言 心碎 失眠 你在我身边\n无措 陪我面对 来来回回', song: 'To You' },
      { text: '在你的眼底想我所有的一切\n而你的应许是我唯一的信念', song: '应许' },
      { text: '在你的笑里头我的私人王国\n煽情的歌手都听不懂', song: '只有可以' },
    ],
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
    infoLine4: '最后更新：2026-04-24',
  },
};
