import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/my-portfolio',
    },
    prerender: {
      default: true,
    },
  },
};
