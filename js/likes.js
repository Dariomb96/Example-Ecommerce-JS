const storageLikes = JSON.parse(localStorage.getItem('keyLikes')); //parseo de JSON a objeto

const mostrarLikes = () => { //genera en el section listadoLikes cada producto del array "likes"
    storageLikes.forEach(producto => {
        contenedorLikes.innerHTML += `
        <div class="album">
        <img src="${producto.img}" alt="tapa" class="tapa tapaChica">
                <h3>${producto.nombre}</h3>
                <p>${producto.artista}</p>
            </div>
        `;
    });
};

document.addEventListener('DOMContentLoaded', mostrarLikes);