export interface LinkGroup {
  key: string;
  links: { key: string; url: string }[];
}

export const linkGroups: LinkGroup[] = [
  {
    key: 'sodagreen',
    links: [
      { key: 'website', url: 'https://sodagreen.com' },
      { key: 'weibo', url: 'https://weibo.com/sodagreen2010' },
      { key: 'facebook', url: 'https://www.facebook.com/oaeen.fb' },
      { key: 'instagram', url: 'https://www.instagram.com/sodagreen_aka_oaeen/' },
      { key: 'youtube', url: 'https://www.youtube.com/@sodagreenofficial' },
    ],
  },
  {
    key: 'qingfeng',
    links: [
      { key: 'weibo', url: 'https://www.weibo.com/u/1822796164' },
      { key: 'facebook', url: 'https://www.facebook.com/WuQingFeng' },
      { key: 'instagram', url: 'https://www.instagram.com/imqingfeng/' },
      { key: 'youtube', url: 'https://www.youtube.com/@WuQingFeng' },
    ],
  },
  {
    key: 'tour20th',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/7889590866' },
      { key: 'facebook', url: 'https://www.facebook.com/20thSG.Tour' },
      { key: 'instagram', url: 'https://www.instagram.com/sodagreen.20th/' },
      { key: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5ff1b5b1000000000100511c' },
      { key: 'bilibili', url: 'https://space.bilibili.com/3546653889923355' },
    ],
  },
];
