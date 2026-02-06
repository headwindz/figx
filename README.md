<div align="center">
  <h1>Figx</h1>
</div>

<div align="center">

A comprehensive and reliable figma utilities library

[![npm-version-img]][npm-link] [![npm-downloads-img]][npm-link] [![license-img]][license-link] [![bundle-size-img]](https://bundlephobia.com/result?p=figx)

[npm-link]: https://www.npmjs.com/package/figx
[npm-version-img]: https://img.shields.io/npm/v/figx.svg?style=flat
[npm-downloads-img]: https://img.shields.io/npm/dm/figx.svg?style=flat
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg
[license-link]: https://github.com/headwindz/figx/blob/main/LICENSE
[bundle-size-img]: https://img.shields.io/bundlephobia/minzip/figx?cacheSeconds=1800

</div>

![figx](https://github.com/user-attachments/assets/0031653d-4603-41dd-ba89-896820b12cbb)

## 📚 Documentation

- [Home](https://figx.headwindz.me)
- [Guide](https://figx.headwindz.me/guide)
- [Utilities](https://figx.headwindz.me/utilities)

## ✨ Features

- A comprehensive collection of utilities
- Easy to learn and use with clear documentation
- Written in TypeScript with native type support

## 📦 Install

```bash
$ npm install figx
# or
$ yarn add figx
# or
$ pnpm add figx
```

## 🔨 Usage

```ts
import { toRgb, ColorFormat } from 'figx';
toRgb('#FF0000'); // => 'rgb(255, 0, 0)';
toRgb({ r: 255, g: 0, b: 0 }, ColorFormat.ARRAY); // => [255, 0, 0]
toRgb('hsl(0, 100%, 50%)', ColorFormat.OBJECT); // => { r: 255, g: 0, b: 0 }
```

## 🤝 Contributing

```bash
$ git clone git@github.com:headwindz/figx.git
$ pnpm i
$ pnpm run start
```

Open your browser and visit http://127.0.0.1:8000

## 🙏 Credit

Inspired by the following awesome work:

[create-figma-plugin](https://github.com/yuanqing/create-figma-plugin)

[figma-plugin-helpers](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers)
