const listaProductos = document.getElementById('listado'); // agarra la section listado por ID
const contenedorLikes = document.getElementById('listadoLikes'); // agarra la section listadoLikes por ID
const contenedorCarrito = document.getElementById('carrito'); // agarra la section carrito por ID
const totalCarrito = document.getElementById('yyy');

const likes = []; // array de likes
const carrito = []; // array de carrito

let total = 0; // total del carrito