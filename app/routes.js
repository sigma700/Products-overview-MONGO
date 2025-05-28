import {index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("products", "routes/products.jsx"),
  route("newProduct", "routes/newProd.jsx"),
  route("products/:id", "routes/product.jsx"),
  route("products/:id/edit", "routes/edits.jsx"),
];
