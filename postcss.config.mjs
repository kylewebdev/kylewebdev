/** @type {import('postcss-load-config').Config} */
import utopia from 'postcss-utopia';

const config = {
  plugins: {
    tailwindcss: {},
    'postcss-utopia': utopia({
      minWidth: 320,
      maxWidth: 1280,
    }),
  },
};

export default config;
