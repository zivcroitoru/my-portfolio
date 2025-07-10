import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [sveltekit()],
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
};
