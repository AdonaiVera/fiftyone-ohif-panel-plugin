const defineViteConfig = require("vite").defineConfig;
const react = require("@vitejs/plugin-react").default;
const path = require("path");

module.exports = defineViteConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/OHIFViewerPanel.tsx"),
      name: "OHIFViewerPanel",
      fileName: (format) => `index.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      external: [
        "react",         // Mark React as external
        "react-dom",     // Mark ReactDOM as external
        "@fiftyone/plugins", // Mark FiftyOne plugins as external
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@fiftyone/plugins": "fiftyone.plugins", // Ensure FiftyOne plugins are globally available
        },
      },
    },
  },
});
