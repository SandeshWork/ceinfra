/**
 * PostCSS Configuration
 *
 * Next.js does not include the Tailwind CSS v4 Vite plugin, so the PostCSS
 * plugin must be registered explicitly here.
 */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
