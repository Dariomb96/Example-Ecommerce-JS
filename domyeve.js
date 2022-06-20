const listaProductos = document.getElementById('listado'); // agarra la section listado por ID
const contenedorLikes = document.getElementById('listadoLikes'); // agarra la section listadoLikes por ID

const productos = [ // array de productos
    { id: 1, nombre: "BLEACHED PUNK", artista: "KAOS07", precio: 650, img: 'recursos/tapa1.jpg' },
    { id: 2, nombre: "Power To The Soul", artista: "Chlär", precio: 320, img: 'recursos/tapa2.jpg' },
    { id: 3, nombre: "HEARTCORE ESSENTIALS", artista: "KAOS08", precio: 400, img: 'recursos/tapa3.jpg' },
    { id: 4, nombre: "Juicy", artista: "Julian Muller", precio: 400, img: 'recursos/tapa4.jpg' },
    { id: 5, nombre: "Strange Days", artista: "Slam", precio: 400, img: 'recursos/tapa5.jpg' },
    { id: 6, nombre: "Disparate Lines", artista: "Axel Karakasis", precio: 400, img: 'recursos/tapa6.jpg' },
    { id: 7, nombre: "Mögen", artista: "TBK006", precio: 400, img: 'recursos/tapa7.jpg' },
    { id: 8, nombre: "TRANSFORMA VOLUME FIVE", artista: "A.Paul, DJ Dextro", precio: 400, img: 'recursos/tapa8.jpg' },
    { id: 9, nombre: "Many ways To Go", artista: "Jeroen Search", precio: 400, img: 'recursos/tapa9.jpg' },
    { id: 10, nombre: "Intermission", artista: "Thomas Hessler", precio: 400, img: 'recursos/tapa10.jpg' },
    { id: 11, nombre: "LOSDOSMILDOS", artista: "COYU", precio: 400, img: 'recursos/tapa11.jpg' },
    { id: 12, nombre: "Traces Of Influences", artista: "Hertz, Mhonolink", precio: 400, img: 'recursos/tapa12.jpg' },
    { id: 13, nombre: "Evolving", artista: "A-STS", precio: 400, img: 'recursos/tapa13.jpg' },
    { id: 14, nombre: "Manifesto Raw Culture", artista: "Various Artists", precio: 400, img: 'recursos/tapa14.jpg' },
    { id: 15, nombre: "Techwise & Otherwise", artista: "Devilfish", precio: 400, img: 'recursos/tapa15.jpg' },
    { id: 16, nombre: "Never Mind Have Fun", artista: "M.I.T.A.", precio: 400, img: 'recursos/tapa16.jpg' },
    { id: 17, nombre: "Metaroots 2", artista: "SCOM047", precio: 400, img: 'recursos/tapa17.jpg' },
    { id: 18, nombre: "Planet MHz III", artista: "MHZ003", precio: 400, img: 'recursos/tapa18.jpg' },
    { id: 19, nombre: "Third Eye", artista: "Florian Meindl", precio: 400, img: 'recursos/tapa19.jpg' },
    { id: 20, nombre: "Masquerade", artista: "A.Morgan", precio: 400, img: 'recursos/tapa20.jpg' },
];

const mostrarProductos = () => { //genera en el section listado cada producto del array "listadoProductos"
    productos.forEach(producto => {
        listaProductos.innerHTML += `
        <div class="album">
        <img src="${producto.img}" alt="tapa" class="tapa tapaChica">
                <h3>${producto.nombre}</h3>
                <p>${producto.artista}</p>
                <button id="${producto.id}" class="agregar" >Agregar a likes</button>
            </div>
        `;
    });
};

/* boton a cada producto para agregarlo a listadoLikes, transformando en JSON los objetos para luego parsear 
y deshabilitando el boton para no repetir cada objeto*/ 
const agregarALikes = e => { 
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        likes.push(producto);
        console.log(likes)
        localStorage.setItem('keyLikes', JSON.stringify(likes));
        document.getElementById(`${producto.id}`).innerHTML = `<button id="${producto.id}" class="agregar" disabled>Agregar a likes</button>`;
    }
};

const likes = []; // array de likes

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

console.log(storageLikes);
document.addEventListener('DOMContentLoaded', mostrarProductos);
document.addEventListener('DOMContentLoaded', mostrarLikes);
listaProductos.addEventListener('click', agregarALikes);


