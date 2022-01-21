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
    { title: 'Guide', path: '/guide' },
    {
      title: 'Utilities',
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
        children: [
          'isTextNode',
          'isFrameNode',
          'isPageNode',
          'isComponentNode',
          'isVisible',
          'isFillableNode',
          'isLocked',
          'getSelectedNodes',
          'isWithinInstance',
          'getComponentProps',
        ],
      },
      {
        title: 'Color',
        children: ['toRgb', 'toHsl', 'toHex', 'isSameColor', 'getColorContrast', 'isValidColor'],
      },
      {
        title: 'Paint',
        children: ['toSolidPaint', 'solidPaintToWebRgb', 'toImagePaint'],
      },
      {
        title: 'Storage',
        children: ['getPluginData', 'setPluginData'],
      },
      {
        title: 'Others',
        children: ['getRandomId', 'copyToClipboard', 'copyToClipboardAsync', 'clone', 'isEqual'],
      },
    ],
  },
  theme: {
    '@c-primary': '#e78c56',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@arco-design/web-react',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: true, // 样式按需加载
      },
      '@arco-design/web-react',
    ],
  ],
});
