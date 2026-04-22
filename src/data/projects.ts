export type ProjectKey = 'sodaguide' | '2024-report' | 'soda-yinpa' | 'soda-life' | 'soda-lyric';
export type CategoryKey = 'resource' | 'interactive' | 'media';
export type Locale = 'zh-Hant' | 'zh-CN';

export const categoryKeys: CategoryKey[] = ['resource', 'interactive', 'media'];

export interface Project {
  key: ProjectKey;
  icon: string;
  url: string;
  category: CategoryKey;
}

export const projects: Project[] = [
  {
    key: 'sodaguide',
    icon: 'https://sodaguide.cn/images/logo.jpg',
    url: 'https://sodaguide.cn',
    category: 'resource',
  },
  {
    key: '2024-report',
    icon: 'https://2024.sodagreen.me/favicon.ico',
    url: 'https://2024.sodagreen.me',
    category: 'interactive',
  },
  {
    key: 'soda-yinpa',
    icon: '/images/podcast-icon.png',
    url: 'https://space.bilibili.com/1536096/lists/3247433',
    category: 'media',
  },
  {
    key: 'soda-life',
    icon: '',
    url: '#',
    category: 'interactive',
  },
  {
    key: 'soda-lyric',
    icon: '',
    url: '#',
    category: 'resource',
  },
];
