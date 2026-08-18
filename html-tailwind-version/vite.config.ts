import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import includeHtml from 'vite-plugin-include-html';

/**
 * Vite-plugin-include-html déclare `transformIndexHtml` comme une simple fonction, donc sans `order: 'pre'` : ses
 * partials sont injectés APRÈS que Vite a traité les URLs d'assets de index.html. Conséquence, les `src="/assets/..."`
 * des sections/composants n'étaient jamais réécrits avec `base`, contrairement à ceux écrits directement dans
 * index.html. On réenveloppe le hook en `pre` pour que Vite voie le document complet.
 */
function includeHtmlPre(): Plugin {
  const { name, transformIndexHtml } = includeHtml() as Plugin & {
    transformIndexHtml: (html: string) => Promise<string>;
  };

  return {
    name,
    transformIndexHtml: { order: 'pre', handler: transformIndexHtml },
  };
}

/**
 * Vite ajoute `crossorigin` sur le script de module et la feuille de style qu'il génère. En `file://`, le navigateur
 * applique alors un contrôle CORS depuis une origine opaque et bloque les deux ressources : la page s'affiche sans
 * style. On retire l'attribut uniquement sur nos propres assets, pour préserver le `crossorigin` du preconnect Google
 * Fonts, où il est nécessaire.
 */
function stripAssetCrossorigin(): Plugin {
  return {
    name: 'strip-asset-crossorigin',
    transformIndexHtml: {
      order: 'post',
      handler: (html) =>
        html.replace(/<(?:script|link)\b[^>]*>/g, (tag) =>
          /\b(?:src|href)="\.?\/assets\//.test(tag) ? tag.replace(/\s+crossorigin(?:="[^"]*")?/g, '') : tag,
        ),
    },
  };
}

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: '../public',
  plugins: [
    tailwindcss(),
    includeHtmlPre(),
    stripAssetCrossorigin(),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
