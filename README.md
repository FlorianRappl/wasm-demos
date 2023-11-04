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

## Compile Rust

Install Rust on your platform according to [the official website](https://www.rust-lang.org/learn/get-started).

Make sure to have the `wasm32-wasi` target installed:

```sh
rustup target add wasm32-wasi
```

Now build it (e.g., in `/demos/07-docker/rust`):

```sh
cargo build --target wasm32-wasi
```

## Using wasmtime

```sh
wasmtime run ./demos/07-docker/rust/target/wasm32-wasi/debug/hello-wasm.wasm
```

## Building and Running Docker

If you have Docker in a recent version installed you can build and run the Docker image in one command:

```sh
docker run --rm -it $(docker build -q .)
```

## Runtimes

- wasmer: https://wasmer.io/
- wasmtime: https://wasmtime.dev/
- wasmedge: https://wasmedge.org/

## Links and Resources

- Official website: https://webassembly.org/
- MDN entry with lots of documentation: https://developer.mozilla.org/en-US/docs/WebAssembly
- List of examples: https://wasmbyexample.dev/home.en-us.html
- Node.js integration: https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly
- WASM code explorer: https://wasdk.github.io/wasmcodeexplorer/
- Curated list of WASM resources: https://github.com/mbasso/awesome-wasm
- Mete Atamel: https://github.com/meteatamel/wasm-basics/blob/main/README.md
