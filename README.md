# i-Shop

Une boutique en ligne front-end pour des vêtements de sport féminins, faite avec React et TypeScript.

C'est un projet de portfolio. Il n'y a pas de serveur et le paiement est simulé.

## Fonctionnalités

- Catalogue de 4 produits (page Bestseller), chargé depuis un fichier JSON avec Axios
- Page produit avec description et note, ouverte avec une route dynamique (`/product/:id`)
- Panier : ajouter un produit, voir la quantité, supprimer un produit, total en euros
- Compteur de produits sur l'icône du panier
- Le panier est gardé dans `localStorage` : il reste après un rechargement de la page
- Paiement simulé : le bouton Pay vide le panier et ouvre la page « Order confirmed »
- Messages de chargement et d'erreur
- Affichage adapté aux petits écrans

## Technologies

- React 19 et TypeScript
- React Router (routes, `useParams`, `useNavigate`)
- Axios (requêtes HTTP)
- Hooks React : `useState`, `useEffect`
- Vite
- Docker

## Comment ça marche

Il n'y a pas de serveur dans ce projet. Les produits sont dans le fichier `public/data/products.json`. L'application les demande avec Axios, comme elle le ferait avec une vraie API. Avec un serveur, seule l'adresse de la requête changerait.

Le panier est gardé dans le composant `App`. Il est envoyé aux autres composants (`Header`, `Product`, `Cart`) avec des props. Le total et le nombre de produits sont calculés à partir du panier à chaque changement.

## Lancer le projet

### En local

```
npm install
npm run dev
```

Avec pnpm : `pnpm install` puis `pnpm dev`.

Ouvrir http://localhost:3002

### Avec Docker

```
docker build -t shop .
docker run --rm -p 3002:3002 shop
```

Ouvrir http://localhost:3002

Docker lance le serveur de développement (`npm run dev`).

## Structure du projet

```
public/
  data/products.json     données des produits
  images/products/       photos des produits
src/
  components/            Header, BestSellers, Product, Cart, OrderConfirmed
  types/                 types TypeScript
  assets/img/            icônes et logo
  App.tsx                routes et état du panier
```

## Limites du projet

- Pas de serveur ni de base de données
- Le paiement est simulé : aucun argent n'est payé

## Prochaines étapes

- Espace client avec historique des commandes