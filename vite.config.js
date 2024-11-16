const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react').default;
const path = require('path');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/OHIFViewerPanel.tsx'),
      name: 'OHIFViewerPanel',
      fileName: (format) => `index.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@fiftyone/plugins'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@fiftyone/plugins': 'fiftyone.plugins',
        },
      },
    },
  },
});
