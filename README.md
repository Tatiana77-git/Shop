# React + TypeScript + Vite

# i-Shop

A front-end online store for women's sportswear, built with React and TypeScript.

## Features

- Product catalog (Bestseller page) loaded from a JSON file with Axios
- Product page with details and rating, opened through a dynamic route (`/product/:id`)
- Loading and error states for data requests

## Tech stack

- React 19 and TypeScript
- React Router (routing, `useParams`)
- Axios (HTTP requests)
- React hooks: `useState`, `useEffect`
- Vite
- Docker

## How it works

There is no backend in this project. Product data is stored in `public/data/products.json`, and the app requests it with Axios the same way it would request a real API. With a backend, only the request URL would change.

## Getting started

### Run locally

```
npm install
npm run dev
```

Open http://localhost:3002

### Run with Docker

```
docker build -t shop .
docker run --rm -p 3002:3002 shop
```

Open http://localhost:3002

## Project structure

```
public/
  data/products.json     product data
  images/products/       product photos
src/
  components/            Header, BestSellers, Product
  types/                 TypeScript types
  assets/img/            icons and logo
```

## Roadmap

- Shopping cart
- Order confirmation page
- Customer account with order history