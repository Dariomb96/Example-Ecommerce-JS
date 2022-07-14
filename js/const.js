const listaProductos = document.getElementById('listado'); // agarra la section listado por ID
const contenedorLikes = document.getElementById('listadoLikes'); // agarra la section listadoLikes por ID
const contenedorCarrito = document.getElementById('carrito'); // agarra la section carrito por ID
const totalCarrito = document.getElementById('yyy');
const storageCarrito = JSON.parse(localStorage.getItem('keyCarrito')); ////parseo de JSON a objeto

const likes = []; // array de likes
const carrito = []; // array de carrito

const total = []; // total del carrito