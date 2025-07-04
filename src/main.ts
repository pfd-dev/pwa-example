import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Store
import store from "./store/store";
import { inicializarCargaProductos } from "./slices/productsSlice";
// Router
import { enrutador } from "./routers/router";

function main() {
  const numero: string = 1;
  console.log(numero)
  store.dispatch(inicializarCargaProductos());
  enrutador();
}

document.addEventListener('DOMContentLoaded', main);
