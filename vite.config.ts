import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      tsconfigPaths(),
    ],

    /*server: {
      proxy: {
        "/api": {
          target: process.env.VITE_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          ws: true,
        },
      },
    }, */
  });
};
