import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'figx',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  resolve: {
    passivePreview: true,
  },
  navs: [
    {
      title: 'utilities',
      path: '/utilities',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/n0ruSh/figx',
    },
  ],
  menus: {
    '/utilities': [
      {
        title: 'Node',
        children: ['isTextNode', 'isFrameNode', 'isPageNode', 'isVisible', 'isFillableNode'],
      },
      {
        title: 'Color',
        children: ['toRgb', 'toHsl'],
      },
      {
        title: 'Paint',
        children: ['toSolidPaint'],
      },
      {
        title: 'Others',
        children: ['getRandomId'],
      },
    ],
  },
  theme: {
    '@c-primary': '#e78c56',
  },
});
