/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./__tests__/setup-test.ts"],
    environment: "jsdom",
    globals: true,
  },
});
