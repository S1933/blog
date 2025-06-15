import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.s1933.ovh',
  server: {
    port: 1234,
    host: true
  },
  integrations: []
});
