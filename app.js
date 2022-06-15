
/***********************************************       DECLARANDO VARIABLES                ***********************************************************************/
let total = 0; // precio total del carrito
let cantidad = 0; // cantidad a comprar para el formato elegido
let formato = 0; // formato de album elegido (digital o vinilo)

/***********************************************      CONSTRUCTOR PARA ARMAR CADA OBJETO DE PRODUCTO             *****************************************************/
class producto {
    constructor(id, artista, stockd, stockv, preciod, preciov, compradod, compradov) {
        this.id = id;
        this.artista = artista;
        this.stockd = stockd;
        this.stockv = stockv;
        this.preciod = preciod;
        this.preciov = preciov;
        this.compradod = compradod;
        this.compradov = compradov;
    }
}

let productosEnVenta = [];

productosEnVenta.push(new producto(1, 'Tame Impala', 20, 5, 3500, 7900, 0, 0));
productosEnVenta.push(new producto(2, 'Radiohead', 20, 5, 3500, 19200, 0, 0));
productosEnVenta.push(new producto(3, 'Kornvel kovacs', 20, 5, 3500, 9000, 0, 0));
productosEnVenta.push(new producto(4, 'Gustavo Cerati', 20, 5, 3500, 11900, 0, 0));


/*****************************************        MI SOLUCION PARA ARMAR UN CARRITO RESUMIDO AL FINAL DE LA COMPRA    **********************************************/

let carritoActualizadoD = [];
let carritoActualizadoV = [];
let carritoFinal = [];
const carrito = []; 

function actualizarCarrito() {
    carritoActualizadoD = carrito.map((el) => {
        return {
            nombre: el.artista,
            precio: el.preciod,
            comprado: el.compradod,
        }
    });
    carritoActualizadoV = carrito.map((el) => {
        return {
            nombre: el.artista,
            precio: el.preciov,
            comprado: el.compradov,
        }
    });
    carritoFinal = carritoActualizadoD.concat(carritoActualizadoV);
}

/***********************************************        MENU DE SELECCION DE FORMATO Y CANTIDAD DEL PRODUCTO    ******************************************************/

function agregarProducto(num) {
    formato = parseInt(prompt(`Artista: ${productosEnVenta[num].artista} \n1. Precio digital: $${productosEnVenta[num].preciod} \n2. Precio vinilo: $${productosEnVenta[num].preciov}\nSeleccione formato 1 o 2`));
    if (formato == 1) {
        let cantidad = parseInt(prompt(`Actualmente hay ${productosEnVenta[num].stockd} en stock. \nSeleccione la cantidad deseada`))
        if (productosEnVenta[num].stockd > cantidad) {
            total = total + (cantidad * productosEnVenta[num].preciod);
            productosEnVenta[num].stockd = productosEnVenta[num].stockd - cantidad;
            if (productosEnVenta[num].compradod === 0 && productosEnVenta[num].compradov === 0) {
                productosEnVenta[num].compradod = cantidad;
                carrito.push(productosEnVenta[num]);
                console.log(carrito); // Verificando que se actualize la cantidad del producto seleccionado
            } else {
                productosEnVenta[num].compradod = productosEnVenta[num].compradod + cantidad;
            }
        } else { alert('No hay stock') }
    } else if (formato == 2) {
        let cantidad = parseInt(prompt(`Actualmente hay ${productosEnVenta[num].stockv} en stock. \nSeleccione la cantidad deseada`))
        if (productosEnVenta[num].stockv > cantidad) {
            total = total + (cantidad * productosEnVenta[num].preciov);
            productosEnVenta[num].stockv = productosEnVenta[num].stockv - cantidad;
            if (productosEnVenta[num].compradod === 0 && productosEnVenta[num].compradov === 0) {
                productosEnVenta[num].compradov = cantidad;
                carrito.push(productosEnVenta[num]);
                console.log(carrito); // Verificando que se actualize la cantidad del producto seleccionado
            } else {
                productosEnVenta[num].compradov = productosEnVenta[num].compradov + cantidad;
            }
        } else { alert('No hay stock') }
    }
}

/************************************************             INTERFAZ DEL SIMULADOR Y LLAMADO A MENUS          **********************************************************/

const comprar = () => {
    for (let comprando = 1; comprando < 2; comprando = prompt('Total: $' + total + '\nQuiere continuar su compra?\n1: Continuar\n2: Terminar')) {
        switch (parseInt(prompt('Seleccione un producto: \n1: Tame impala - Lonerism \n2: Radiohead - In Rainbows \n3: Kornél Kovács - The Bells  \n4: Gustavo Cerati - Siempre Es Hoy'))) {
            case 1: agregarProducto(0, 1);
                break;
            case 2: agregarProducto(1, 2);
                break;
            case 3: agregarProducto(2, 3);
                break;
            case 4: agregarProducto(3, 4);
                break;
        }
    }
}

/*************************************************              LLAMADOS               ***************************************************************************/

alert('simulador para compra de albums calculando monto total y cuotas')
comprar();
actualizarCarrito();
console.log(carritoFinal)

