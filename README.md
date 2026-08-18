# Test technique — Ivoire Pool

Ce dépôt est un **mono-repo** qui contient deux versions de la maquette.

## Démarche

1. **Intégration de la maquette en HTML / Tailwind** (`html-tailwind-version/`) — première étape, statique, avec Vite.
2. **Portage en React** (`next/`) — reprise de l'intégration sous Next.js + React.

Les deux versions sont conservées dans le dépôt pour montrer la progression, mais **la version finale est celle du dossier React (`next/`)**.

## Démo

https://after-immo-test.vercel.app/

## Structure

```
html-tailwind-version/   intégration initiale (Vite + Tailwind + TypeScript)
next/                    version finale (Next.js 16 + React 19 + Tailwind 4)
```

Chaque dossier a son propre `README.md` avec les instructions d'installation et de lancement.
