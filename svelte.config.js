import adapter from '@sveltejs/adapter-static'; // Use static adapter only
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '200.html' // Optional: adds fallback for dynamic routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/myportfolio' : ''
    },
    prerender: {
      entries: ['*'] // Prerender all routes
    }
  }
};

export default config;
