export interface LinkGroup {
  key: string;
  type: 'band' | 'member' | 'event';
  links: { key: string; url: string }[];
}

export const linkGroups: LinkGroup[] = [
  {
    key: 'sodagreen',
    type: 'band',
    links: [
      { key: 'website', url: 'https://sodagreen.com' },
      { key: 'weibo', url: 'https://weibo.com/sodagreen2010' },
      { key: 'facebook', url: 'https://www.facebook.com/oaeen.fb' },
      { key: 'instagram', url: 'https://www.instagram.com/sodagreen_aka_oaeen/' },
      { key: 'youtube', url: 'https://www.youtube.com/@sodagreenofficial' },
    ],
  },
  {
    key: 'tour20th',
    type: 'event',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/7889590866' },
      { key: 'facebook', url: 'https://www.facebook.com/20thSG.Tour' },
      { key: 'instagram', url: 'https://www.instagram.com/sodagreen.20th/' },
      { key: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5ff1b5b1000000000100511c' },
      { key: 'bilibili', url: 'https://space.bilibili.com/3546653889923355' },
    ],
  },
  {
    key: 'qingfeng',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://www.weibo.com/u/1822796164' },
      { key: 'facebook', url: 'https://www.facebook.com/WuQingFeng' },
      { key: 'instagram', url: 'https://www.instagram.com/imqingfeng/' },
      { key: 'youtube', url: 'https://www.youtube.com/@WuQingFeng' },
    ],
  },
  {
    key: 'afu',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/1823346907' },
      { key: 'facebook', url: 'https://www.facebook.com/SodagreenAfu' },
      { key: 'instagram', url: 'https://www.instagram.com/afu_ho/' },
      { key: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/623847e7000000001000a80a' },
    ],
  },
  {
    key: 'xiaowei',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/1862382142' },
      { key: 'facebook', url: 'https://www.facebook.com/sodagreenwei' },
      { key: 'instagram', url: 'https://www.instagram.com/chunweishih/' },
    ],
  },
  {
    key: 'agong',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/1893286874' },
      { key: 'facebook', url: 'https://www.facebook.com/cdix2' },
      { key: 'instagram', url: 'https://www.instagram.com/agong_sodagreen/' },
      { key: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/607b1525000000000101e23f' },
    ],
  },
  {
    key: 'xinyi',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/1842091643' },
      { key: 'facebook', url: 'https://www.facebook.com/sodagreenClaire' },
      { key: 'instagram', url: 'https://www.instagram.com/claire_sodagreen/' },
    ],
  },
  {
    key: 'jiakai',
    type: 'member',
    links: [
      { key: 'weibo', url: 'https://weibo.com/u/1854346080' },
      { key: 'facebook', url: 'https://facebook.com/imkayliu' },
      { key: 'instagram', url: 'https://www.instagram.com/imkayliu/' },
    ],
  },
];
