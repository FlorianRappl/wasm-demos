import { readFile } from "node:fs/promises";
import { argv, env } from "node:process";
import { WASI } from "wasi";

const wasi = new WASI({
  args: argv,
  env,
});
const api = {
  wasi_snapshot_preview1: wasi.wasiImport,
};

const content = await readFile("./echo.wasm");
const wasm = await WebAssembly.compile(content);
const instance = await WebAssembly.instantiate(wasm, api);

wasi.start(instance);
