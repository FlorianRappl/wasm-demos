import { readFile } from 'node:fs/promises';

const content = await readFile('../01-browser/add.wasm');
const wasm = await WebAssembly.compile(content);
const instance = await WebAssembly.instantiate(wasm);
const { add } = instance.exports;

console.log(add(7, 15));
