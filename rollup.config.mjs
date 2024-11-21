import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts", // Adjust the input path as needed
  output: {
    dir: "dist",
    format: "esm", // CommonJS format; change to 'esm' for ES modules
  },
  plugins: [typescript()],
};
