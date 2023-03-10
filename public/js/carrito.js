const carritoContenedor = document.querySelector('#carritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');
const procesarCompra = document.getElementById('procesarCompra');

let carrito = [];

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito();
});


procesarCompra.addEventListener('click', () =>{
    if (carrito.length === 0){
        Swal.fire({
            title:"Tu carrito esta vacio",
            text:"Compra algo para continuar",
            icon:"error",
            confirmButtonText:"Aceptar",
        
        })
    }else {
    location.href="/checkout" 
    }
});

vaciarCarrito.addEventListener('click', () =>{
    carrito.length = [];
    mostrarCarrito();
});

function agregarCargador(id){

    const existe = carrito.some(prod => prod.id === id)

    if (existe){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad ++
            }
        })
    }else {
        const cargador = stockCargadores.find(prod => prod.id === id);
        carrito.push(cargador);
    }
    mostrarCarrito(); 
};

function agregarAuricular(id){

    const existe = carrito.some(prod => prod.id === id)

    if (existe){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad ++
            }
        })
    }else {
        const auricular = stockAuriculares.find(prod => prod.id === id);
        carrito.push(auricular);
    }
    mostrarCarrito(); 
};


const mostrarCarrito = () => {
    const offcanvasBody = document.querySelector('.offcanvas .offcanvas-body');

    offcanvasBody.innerHTML = ''
    carrito.forEach((prod) => {
        const {id, nombre, img, desc,cantidad, precio} = prod
        offcanvasBody.innerHTML += `
        <div class="offcanvas-contenedor">
            <div>
            <img class="img-fluid img-carrito" src="${img}"/>
            </div>
        </div>
        <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: ${cantidad}</p>
        
        <button onclick="eliminarProducto(${id})" class="btn btn-outline-danger"> Eliminar producto</button>
        </div>

        `
    })

    if(carrito.length === 0){
        offcanvasBody.innerHTML = `
        <p class="text-center parrafo">??A??n no agregaste nada!</p>
        `
    }
    carritoContenedor.textContent = carrito.length;
    precioTotal.innerText = carrito.reduce((acumulador,prod) => acumulador + prod.cantidad * prod.precio , 0)
    guardarStorage();
};

function eliminarProducto(id){
    const productoId = id;
    carrito = carrito.filter((producto) => producto.id != productoId);
    mostrarCarrito();
};

function guardarStorage(){
    localStorage.setItem("carrito",JSON.stringify(carrito));
};