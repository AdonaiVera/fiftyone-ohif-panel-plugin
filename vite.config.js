const defineViteConfig = require("vite").defineConfig;
const react = require("@vitejs/plugin-react").default;
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const path = require("path");
const viteExternalsPlugin = require("vite-plugin-externals").viteExternalsPlugin;

const IS_DEV = process.env.IS_DEV === "true";
const dir = __dirname;

module.exports = defineViteConfig({
  mode: "development",
  plugins: [
    nodeResolve(),
    react(),
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
      recoil: "recoil",
      "@fiftyone/state": "__fos__",
      "@fiftyone/operators": "__foo__",
      "@fiftyone/components": "__foc__",
      "@fiftyone/utilities": "__fou__",
      "@mui/material": "__mui__",
    }),
  ],
  build: {
    minify: IS_DEV ? false : true,
    lib: {
      entry: path.join(dir, "src/OHIFViewerPanel.tsx"), // Your entry file
      name: "OHIFViewerPanel",
      fileName: (format) => `index.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@fiftyone/plugins"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@fiftyone/plugins": "fiftyone.plugins",
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"development"',
  },
  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
});
