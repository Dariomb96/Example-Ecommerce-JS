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

function notificacion(formato){
    Toastify({
        text: `Agregado a ${formato} con exito!`,
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
        notificacion('likes');
    }
};

/* boton a cada producto para agregarlo a carrito, transformando en JSON los objetos para luego parsear*/
const agregarACarrito = e => {
    if (e.target.classList.contains('agregarCarrito')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        console.log(carrito);
        localStorage.setItem('keyCarrito', JSON.stringify(carrito));
        notificacion('carrito');
    }
};

document.addEventListener('DOMContentLoaded', mostrarProductos);
listaProductos.addEventListener('click', agregarALikes);
listaProductos.addEventListener('click', agregarACarrito);