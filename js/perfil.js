let productos = []

fetch('js/listado.json')
    .then( (res) => res.json())
    .then( (data) => {
        productos = data

        productos.forEach(producto => {
            listaProductos.innerHTML += `
            <div class="album">
            <img src="${producto.img}" alt="tapa" class="tapa tapaChica">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.artista}</p>
                    <button id="${producto.id}" class="agregarLikes" >Agregar a likes</button>
                    <button id="${producto.id}" class="agregarCarrito" >Agregar a carrito</button>
                </div>
            `;
        });
    });

const mostrarProductos = () => { //genera en el section listado cada producto del array "listadoProductos"
    productos.forEach(producto => {
        listaProductos.innerHTML += `
        <div class="album">
        <img src="${producto.img}" alt="tapa" class="tapa tapaChica">
                <h3>${producto.nombre}</h3>
                <p>${producto.artista}</p>
                <button id="${producto.id}" class="agregarLikes" >Agregar a likes</button>
                <button id="${producto.id}" class="agregarCarrito" >Agregar a carrito</button>
            </div>
        `;
    });
};

function notificacion(producto, formato) {
    Toastify({
        text: `${producto} agregado a ${formato} con exito!`,
        duration: 2500,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: 'black',
            border: '1px solid purple',
        }
    }).showToast()
}

/* boton a cada producto para agregarlo a listadoLikes, transformando en JSON los objetos para luego parsear 
y deshabilitando el boton para no repetir cada objeto*/
const agregarALikes = e => {
    if (e.target.classList.contains('agregarLikes')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        likes.push(producto);
        console.log(likes)
        localStorage.setItem('keyLikes', JSON.stringify(likes));
        document.getElementById(`${producto.id}`).innerHTML = `<button id="${producto.id}" class="agregarLikes" disabled>Agregar a likes</button>`;
        notificacion(producto.nombre, 'likes');
    }
};

/* boton a cada producto para agregarlo a carrito, transformando en JSON los objetos para luego parsear*/
const agregarACarrito = e => {
    if (e.target.classList.contains('agregarCarrito')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        const enCarrito = carrito.find(producto => producto.id == id);
        enCarrito ? enCarrito.cantidad += 1 : (producto.cantidad += 1, carrito.push(producto));
        localStorage.setItem('keyCarrito', JSON.stringify(carrito));
        notificacion(producto.nombre, 'carrito');
    }
};

const actualizarCarrito = () => {
    carrito.push(...JSON.parse(localStorage.getItem('keyCarrito')));
}

document.addEventListener('DOMContentLoaded', actualizarCarrito);
document.addEventListener('DOMContentLoaded', mostrarProductos);
listaProductos.addEventListener('click', agregarALikes);
listaProductos.addEventListener('click', agregarACarrito);