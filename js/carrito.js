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
		total += producto.precio;
		totalCarrito.innerText = `$${total}`
	});
};
document.addEventListener('DOMContentLoaded', mostrarCarrito);