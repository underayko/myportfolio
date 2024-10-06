import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Use the public directory as the output directory
      out: 'public', // This will create the build output inside the public folder
      fallback: '200.html', // Optional: adds fallback for dynamic routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/myportfolio' : '', // Adjust base path if needed
    },
    prerender: {
      entries: ['*'], // Prerender all routes
    },
  },
};

export default config;
