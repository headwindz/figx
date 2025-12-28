import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'figx',
  favicon: '/static/figx.png',
  logo: '/static/figx.png',
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
          'isEllipseNode',
          'isComponentNode',
          'isInstanceNode',
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
        children: [
          'toSolidPaint',
          'solidPaintToWebRgb',
          'toImagePaint',
          'isImagePaint',
          'isGradientPaint',
        ],
      },
      {
        title: 'Storage',
        children: ['getPluginData', 'setPluginData'],
      },
      {
        title: 'Others',
        children: [
          'getRandomId',
          'copyToClipboard',
          'copyToClipboardAsync',
          'clone',
          'isEqual',
          'getDropPosition',
        ],
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
