
const mostrarCarrito = () => {
	contenedorCarrito.innerHTML = '';
	storageCarrito.forEach((producto) => {
		const div = document.createElement('div');
		div.classList.add('template');
		div.classList.add('noselect');
		div.innerHTML = `
			<img src="${producto.img}" class="tapaCarrito"  alt="tapa">
			<div class="productoDesc">
				<h3>${producto.nombre}</h3>
				<p>${producto.artista}</p>
			</div>
			<div class="productoPrecio">
			<p>Precio : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${producto.precio}</p>
			<div class="flexProducto">
			<p style="margin-top: 0.2rem;">Cantidad :&nbsp;&nbsp;&nbsp;</p>
			<span onclick="restarProducto(${producto.id});" id='restar'><i class="material-icons restar">remove</i></span>
			<p>${producto.cantidad}</p>
			<span onclick="sumarProducto(${producto.id});" id='sumar'><i class="material-icons sumar">add</i></span>
			</div>
			</div>
		<button onclick="EliminarProducto(${producto.id})" class="btnEliminar">Eliminar</button>`;
		contenedorCarrito.append(div);
	})
	mostrarResumen();
	calcularTotal();
}

function mostrarResumen() {
	const actualizado = storageCarrito.map((el) => {
		return {
			nombre: el.nombre,
			artista: el.artista,
			precio: el.precio,
			cantidad: el.cantidad,
			id: el.id,
		}
	})
	contenedorResumen.innerHTML = '';
	actualizado.forEach((producto) => {
		const div = document.createElement('div');
		div.classList.add('resumenProducto');
		div.classList.add('noselect');
		div.innerHTML = `
			<div class="nombreResumen"><p>${producto.nombre} - ${producto.artista}</p></div>
			<div class="flexResumen">
			<p>$${producto.precio * producto.cantidad}</p>
			<span onclick="EliminarProducto(${producto.id})"><i class="material-symbols-outlined">delete</i></span>
			</div>
			`;
		contenedorResumen.append(div);
	})
}

function calcularTotal() {
	let total = 0;
	storageCarrito.forEach(producto => {
		total += producto.precio * producto.cantidad;
		return total;
	})
	totalCarrito.innerText = `$${total}`
}
const sumarProducto = e => {
	const item = storageCarrito.find(producto => producto.id === e);
	item.cantidad += 1;
	calcularTotal()
	localStorage.setItem('keyCarrito', JSON.stringify(storageCarrito));
	mostrarCarrito();
}

const restarProducto = (e) => {
	const item = storageCarrito.find(producto => producto.id === e);
	item.cantidad -= 1;
	console.log(storageCarrito);
	if (item.cantidad === 0) {
		const indice = storageCarrito.indexOf(item);
		storageCarrito.splice(indice, 1);
	}
	localStorage.setItem('keyCarrito', JSON.stringify(storageCarrito));
	mostrarCarrito();
}

EliminarProducto = e => {
	const item = storageCarrito.find(producto => producto.id === e);
	const indice = storageCarrito.indexOf(item);
	storageCarrito.splice(indice, 1);
	localStorage.setItem('keyCarrito', JSON.stringify(storageCarrito));
	mostrarCarrito();
	Toastify({
		text: `${item.nombre} eliminado del carrito`,
		duration: 2500,
		gravity: 'bottom',
		stopOnFocus: true,
		style: {
			background: 'black',
			border: '1px solid purple',
		}
	}).showToast();
}

const limpiarCarrito = e => {
	if (e.target.classList.contains('comprarBoton')) {
		storageCarrito.length = 0;
		localStorage.setItem('keyCarrito', JSON.stringify(storageCarrito))
		Toastify({
			text: `Carrito limpiado con exito!`,
			duration: 2500,
			gravity: 'bottom',
			stopOnFocus: true,
			style: {
				background: 'black',
				border: '1px solid purple',
			}
		}).showToast();
		mostrarCarrito();
	}
};

document.addEventListener('DOMContentLoaded', mostrarCarrito);
document.addEventListener('click', limpiarCarrito);