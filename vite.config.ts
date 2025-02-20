import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from "vite-plugin-svgr";
type BuildMode = "development" | "production";

// https://vite.dev/config/
export default (() => {
  const mode: BuildMode = process.env.mode as BuildMode || "development";
  return defineConfig({
    mode,
    define: {
      isDev: mode === "development"
    },
    plugins: [react(), svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3300
    }
  });
})();
