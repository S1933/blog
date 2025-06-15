import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: true,
  },
  preview: {
    port: 5173,
    allowedHosts: true,
  },
});
