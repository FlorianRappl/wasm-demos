# wasm-demos

This repository is dedicated to some demos and code shown in the "My Coding Zone" Twitch stream on Saturday, 4th of November 2023.

## Steps for AssemblyScript

```sh
npm init -y
npm install --save-dev assemblyscript
npx asinit .
```

Try changing from `i32` to `f32` and `f64` - to see different types in action.

## Performing a WAT to WASM Transition

You can use the WABT tools to perform the transition (https://github.com/webassembly/wabt).

Let's use the [wat2wasm online](https://webassembly.github.io/wabt/demo/wat2wasm/).

## Links and Resources

- Official website: https://webassembly.org/
- MDN entry with lots of documentation: https://developer.mozilla.org/en-US/docs/WebAssembly
- List of examples: https://wasmbyexample.dev/home.en-us.html
- Node.js integration: https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly
- Wasmer runtime: https://wasmer.io/
- WASM code explorer: https://wasdk.github.io/wasmcodeexplorer/
- Curated list of WASM resources: https://github.com/mbasso/awesome-wasm
