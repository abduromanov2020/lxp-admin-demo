/* eslint-disable indent */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/database"], // Daftar modul yang ingin dioptimasi
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
});
