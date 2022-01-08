<div align="center">
  <h1>Figx</h1>
</div>

<div align="center">

A comprehensive and reliable figma utilities library

[![npm-version-img]][npm-link] [![npm-downloads-img]][npm-link] [![license-img]][license-link]

[npm-link]: https://www.npmjs.com/package/figx
[npm-version-img]: https://img.shields.io/npm/v/figx.svg?style=flat
[npm-downloads-img]: https://img.shields.io/npm/dm/figx.svg?style=flat
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg
[license-link]: https://github.com/n0ruSh/figx/blob/main/LICENSE

</div>

## 📚 Documentation

- [Site](https://figx.vercel.app)

## ✨ Features

- A comprehensive collection of utilities
- Easy to learn and use with clear documentation
- Written in TypeScript with native type support

## 📦 Install

```bash
$ npm install figx --save
# or
$ yarn add figx
```

## 🔨 Usage

```ts
import { toRgb, ColorFormat } from 'figx';
toRgb('#FF0000'); // => 'rgb(255, 0, 0)';
toRgb({ r: 255, g: 0, b: 0 }, ColorFormat.ARRAY); // => [255, 0, 0]
toRgb('hsl(0, 100%, 50%)', ColorFormat.Object); // => { r: 255, g: 0, b: 0 }
```

## 💻 Codesandbox demo

[![demo][sandbox-img]][sandbox-link]

[sandbox-img]: https://codesandbox.io/static/img/play-codesandbox.svg
[sandbox-link]: https://codesandbox.io/s/demo-316l9?file=/src/index.js

## 🤝 Contributing

```bash
$ git clone git@github.com:n0ruSh/figx.git
$ yarn
$ yarn start
```

Open your browser and visit http://127.0.0.1:8000
