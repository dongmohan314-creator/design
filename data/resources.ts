import { Category, Resource } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'inspiration', label: '灵感收集', iconName: 'Lightbulb' },
  { id: 'tools', label: '设计工具', iconName: 'PenTool' },
  { id: 'resources', label: '免费素材', iconName: 'Download' },
  { id: 'fonts', label: '字体设计', iconName: 'Type' },
  { id: 'learning', label: '学习资源', iconName: 'BookOpen' },
  { id: 'portfolio', label: '作品集', iconName: 'Briefcase' },
];

export const RESOURCES: Resource[] = [
  // 灵感收集
  {
    id: 'behance',
    name: 'Behance',
    description: 'Adobe旗下的全球顶级创意作品展示平台。',
    url: 'https://www.behance.net/',
    category: 'inspiration',
    tags: ['UI', 'Branding', 'Global'],
    isPopular: true
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: '设计师的社交网络，聚焦UI/UX细节与微交互。',
    url: 'https://dribbble.com/',
    category: 'inspiration',
    tags: ['UI', 'Animation', 'Community'],
    isPopular: true
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: '全球最大的灵感瀑布流图库，Moodboard必备。',
    url: 'https://www.pinterest.com/',
    category: 'inspiration',
    tags: ['Moodboard', 'Images'],
    isPopular: true
  },
  {
    id: 'zcool',
    name: '站酷 Zcool',
    description: '中国人气设计师互动平台，本土设计风向标。',
    url: 'https://www.zcool.com.cn/',
    category: 'inspiration',
    tags: ['China', 'Community', 'Portfolio'],
    isPopular: true
  },
  {
    id: 'ui-cn',
    name: 'UI中国',
    description: '专业的界面交互设计平台。',
    url: 'https://www.ui.cn/',
    category: 'inspiration',
    tags: ['UI', 'UX', 'China']
  },
  {
    id: 'huaban',
    name: '花瓣网',
    description: '设计师寻找灵感图片的必备工具，国内版Pinterest。',
    url: 'https://huaban.com/',
    category: 'inspiration',
    tags: ['Images', 'China', 'Moodboard']
  },

  // 设计工具
  {
    id: 'figma',
    name: 'Figma',
    description: '云端协作界面设计工具，行业标准。',
    url: 'https://www.figma.com/',
    category: 'tools',
    tags: ['UI', 'Collab', 'Vector'],
    isPopular: true
  },
  {
    id: 'mastergo',
    name: 'MasterGo',
    description: '面向团队的国产专业UI/UX设计工具。',
    url: 'https://mastergo.com/',
    category: 'tools',
    tags: ['UI', 'China', 'Collaboration']
  },
  {
    id: 'js-design',
    name: '即时设计',
    description: '可云端编辑的专业UI设计工具，支持Sketch导入。',
    url: 'https://js.design/',
    category: 'tools',
    tags: ['UI', 'China', 'Cloud']
  },
  {
    id: 'canva',
    name: 'Canva 可画',
    description: '在线平面设计工具，海量模板快速出图。',
    url: 'https://www.canva.cn/',
    category: 'tools',
    tags: ['Graphic', 'Easy', 'Templates']
  },
  {
    id: 'adobe-cc',
    name: 'Adobe CC',
    description: 'Photoshop, Illustrator等行业标准创意套件。',
    url: 'https://www.adobe.com/cn/creativecloud.html',
    category: 'tools',
    tags: ['Software', 'Standard']
  },

  // 学习资源
  {
    id: 'bilibili-design',
    name: 'Bilibili 设计区',
    description: '国内最活跃的视频学习社区，海量设计教程。',
    url: 'https://www.bilibili.com/v/channel/3266/?tab=multiple',
    category: 'learning',
    tags: ['Video', 'Tutorials', 'China'],
    isPopular: true
  },
  {
    id: 'youtube-design',
    name: 'YouTube Design',
    description: '全球最丰富的设计视频教程库（需网络支持）。',
    url: 'https://www.youtube.com/results?search_query=graphic+design',
    category: 'learning',
    tags: ['Video', 'Global']
  },
  {
    id: 'uisdc',
    name: '优设网',
    description: '设计师学习平台，包含教程、讲座与行业资讯。',
    url: 'https://www.uisdc.com/',
    category: 'learning',
    tags: ['Articles', 'Tutorials', 'China']
  },
  {
    id: 'font-tianxia',
    name: '字体天下',
    description: '提供丰富的字体下载与鉴赏，兼具素材与学习。',
    url: 'https://www.fonts.net.cn/',
    category: 'learning',
    tags: ['Fonts', 'China']
  },

  // 免费资源
  {
    id: 'unsplash',
    name: 'Unsplash',
    description: '全球知名的免费高质量摄影图片社区。',
    url: 'https://unsplash.com/',
    category: 'resources',
    tags: ['Photos', 'CC0'],
    isPopular: true
  },
  {
    id: 'pexels',
    name: 'Pexels',
    description: '免费素材图片和视频，支持中文搜索。',
    url: 'https://www.pexels.com/zh-cn/',
    category: 'resources',
    tags: ['Photos', 'Videos', 'Free']
  },
  {
    id: 'icons8',
    name: 'Icons8',
    description: '一致性极高的图标库、插画和照片资源。',
    url: 'https://icons8.com/',
    category: 'resources',
    tags: ['Icons', 'Assets']
  },
  {
    id: 'freepik',
    name: 'Freepik',
    description: '高质量矢量图、PSD、照片素材库。',
    url: 'https://www.freepik.com/',
    category: 'resources',
    tags: ['Vector', 'PSD']
  },
  {
    id: 'fontsquirrel',
    name: 'Font Squirrel',
    description: '100% 免费商用的英文字体下载站。',
    url: 'https://www.fontsquirrel.com/',
    category: 'resources',
    tags: ['Fonts', 'Commercial Free']
  },

  // 字体设计
  {
    id: 'hellofont',
    name: '字由 HelloFont',
    description: '设计师必备的字体管理客户端，云端激活。',
    url: 'https://www.hellofont.cn/',
    category: 'fonts',
    tags: ['Tool', 'China', 'Management'],
    isPopular: true
  },
  {
    id: 'founder',
    name: '方正字库',
    description: '国内最早从事中文字库开发的专业厂商。',
    url: 'https://www.foundertype.com/',
    category: 'fonts',
    tags: ['China', 'Standard']
  },
  {
    id: 'hanyi',
    name: '汉仪字库',
    description: '专业的汉字设计与字库厂商。',
    url: 'https://www.hanyi.com.cn/',
    category: 'fonts',
    tags: ['China', 'Professional']
  },
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    description: '谷歌提供的开源免费字体库（建议使用镜像）。',
    url: 'https://fonts.google.com/',
    category: 'fonts',
    tags: ['Open Source', 'Web Fonts']
  },

  // 作品集
  {
    id: 'portfolio-zcool',
    name: '站酷作品集',
    description: '国内最主流的作品发布与招聘对接平台。',
    url: 'https://www.zcool.com.cn/',
    category: 'portfolio',
    tags: ['China', 'Career']
  },
  {
    id: 'portfolio-behance',
    name: 'Behance Profile',
    description: '建立国际化的专业设计作品集。',
    url: 'https://www.behance.net/',
    category: 'portfolio',
    tags: ['International']
  }
];
