const storageCarrito = JSON.parse(localStorage.getItem('keyCarrito')); ////parseo de JSON a objeto

const mostrarCarrito = () => { //genera en el section listadoLikes cada producto del array "likes"
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

function sumaPrecios(...precios) {
	return precios.reduce((a, b) => a + b, 0)
}


document.addEventListener('DOMContentLoaded', mostrarCarrito);
