# Ivoire Pool — landing page

Page vitrine statique pour Ivoire Pool, construite avec **Vite 8**, **Tailwind CSS 4** et **TypeScript**.

## Démarrer

Node **≥ 22** est requis, et le projet utilise **pnpm**.

```bash
pnpm install
pnpm dev     # serveur de dev sur http://localhost:5173
pnpm build   # génère dist/
pnpm preview # sert dist/ pour vérifier le build
```

Deux autres scripts : `pnpm format` (Prettier en écriture) et `pnpm format:check` (vérification seule, sans modification).

## Structure

```
public/assets/     tous les assets utilisés dans le projet
src/
  index.html       document principal, assemble toutes les sections
  main.ts          point d'entrée JS
  css/style.css    tokens Tailwind
  partials/        fragments techniques (font.html)
  components/      éléments réutilisables (header.html)
  sections/home/   une section par fichier (hero, about, services…)
```

L'assemblage repose sur `vite-plugin-include-html` : dans `src/index.html`, chaque `<include src="src/sections/home/hero.html"></include>` est remplacé par le contenu du fichier au moment du build. Les chemins sont relatifs à la **racine du projet**, pas au fichier qui inclut.
