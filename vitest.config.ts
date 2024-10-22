import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(),react()],
    test: {
        environment: "jsdom",
        globals: true, // This is needed by @testing-library to be cleaned up after each test
        include: ['src/**/*.test.{js,jsx,ts,tsx}'],
        coverage: {
            include: ['src/**/*'],
            exclude: ['src/**/*.{js,jsx,ts,tsx}', '**/*.d.ts'],

        },
        environmentMatchGlobs: [
            ['**/*.test.tsx', 'jsdom'],
            ['src/hooks/**/*.test.ts', 'jsdom'],
        ],
        setupFiles: ['./vitest-setup.ts'],
    }
});