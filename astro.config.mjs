import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
import mdx from "@astrojs/mdx";
import { asideAutoImport, astroAsides } from './integrations/astro-asides';

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
			imports: [asideAutoImport],
		}),
  // Enable Preact to support Preact JSX components.
  preact(),
  // Enable React for the Algolia search component.
  react(),
  astroAsides(),
  mdx()],
  site: `https://docs.viewpointcomms.com`,
  build: {
    rollupOptions: {
      external: ['./src/components/Aside.astro']
    }
  }
});

