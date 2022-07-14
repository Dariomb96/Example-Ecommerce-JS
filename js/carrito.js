
const mostrarCarrito = () => {
	storageCarrito.forEach(producto => {
		contenedorCarrito.innerHTML += `
		<div class="template">
			<img src="${producto.img}" class="tapaCarrito"  alt="tapa">
			<div class="productoDesc">
				<h3>${producto.nombre}</h3>
				<p>${producto.artista}</p>
			</div>
			<p class="productoPrecio">$${producto.precio}</p>
		</div>`;
		total.push(producto.precio);
	});
	totalCarrito.innerText = `$${sumaPrecios(...total)}`
};

const limpiarCarrito = e => {
	if (e.target.classList.contains('comprarBoton')) {
		localStorage.removeItem('keyCarrito');
		Toastify({
			text: `Carrito limpiado con exito, recarga la pagina!`,
			duration: 2500,
			gravity: 'bottom',
			stopOnFocus: true,
			style: {
				background: 'black',
				border: '1px solid purple',
			}
		}).showToast();
	}
};


function sumaPrecios(...precios) {
	return precios.reduce((a, b) => a + b, 0)
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);
document.addEventListener('click', limpiarCarrito);
