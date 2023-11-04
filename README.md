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

## Using wasmtime

Install a WASM runtime (any of the ones mentioned at the end will work, we will mostly refer to `wasmtime` here - but they are all quite similar).

Now you can run (as an example):

```sh
wasmtime run ./demos/07-docker/rust/target/wasm32-wasi/debug/hello-wasm.wasm
```

## Build Dotnet

Make sure to have .NET 8 up and running (available [here](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)).

You can build the release file:

```sh
dotnet build -c Release
```

Once created you can run it via `wasmtime` as explained before like:

```sh
wasmtime run --mapdir /helloworld::. bin/Release/net8.0/Hello.wasm
```

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

## Building and Running Docker

If you have Docker in a recent version installed you can build the Docker image:

```sh
docker build -t flo/hello:0.1 .
```

Afterwards, you run the Docker image with the chosen runtime:

```sh
docker run --runtime=io.containerd.wasmedge.v1 flo/hello:0.1
```

This will use the wasmedge runtime. There are other runtimes that you can use (e.g., `wasmtime` via `io.containerd.wasmtime.v1`).

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
