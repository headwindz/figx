# Intro

`figx` is a comprehensive and reliable figma utilities library. In the current React project development process, a set of easy-to-use React Hooks library is indispensable, hope ahooks can be your choice.

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
toRgb('hsl(0, 100%, 50%)', ColorFormat.OBJECT); // => { r: 255, g: 0, b: 0 }
```

## 💻 Demos

- [Sandbox][sandbox-link]
- [Runkit][runkit-link]

[sandbox-link]: https://codesandbox.io/s/demo-316l9?file=/src/index.js
[runkit-link]: https://runkit.com/n0rush/61d919edcdc69d0008742627
