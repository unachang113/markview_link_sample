import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./__tests__/setup-test.ts"],
    include: ["app/**/*.test.tsx"],
    environment: "jsdom",
    globals: true,
  },
});
