const  stockCargadores = [
    {
        id: 1,
        nombre: "Adaptador de enchufe",
        cantidad: 1,
        desc: "Adaptador para enchufes del exterior",
        precio: 350,
        img: "../img/cargadores/adapter.jpg",
    },
    {
        id: 2,
        nombre: "Cargador USB - C",
        cantidad: 1,
        desc: "Cargador turbo power USB con entrada tipo C",
        precio: 7990,
        img: "../img/cargadores/tipoC.jpg",
    },
    {
        id: 3,
        nombre: "Cargador USB - Dual",
        cantidad: 1,
        desc: "Cargador usb con doble puerto USB",
        precio: 2490,
        img: "../img/cargadores/turbo.jpg",
    },
    {
        id: 4,
        nombre: "Cargador Smart Watch",
        cantidad: 1,
        desc: "Cargador inalambrico SmartWatch",
        precio: 2800,
        img: "../img/cargadores/inalambrico.jpg",
    },
    {
        id: 5,
        nombre: "Cargador portatil - 1000maH",
        cantidad: 1,
        desc: "Cargador portatil - 1000maH",
        precio: 3200,
        img: "../img/cargadores/portatil.jpeg",
    },
    {
        id: 6,
        nombre: "Cargador portatil - 5000maH",
        cantidad: 1,
        desc: "Cargador portatil - 5000maH",
        precio: 5000,
        img: "../img/cargadores/power bank.jpg",
    },
    {
        id: 7,
        nombre: "Cargador portatil LED - 5000maH",
        cantidad: 1,
        desc: "Cargador portatil con indicador LED - 5000maH",
        precio: 5000,
        img: "../img/cargadores/portatil con LED.jpeg",
    },
    {
        id: 8,
        nombre: "Protector de cable",
        cantidad: 1,
        desc: "come cable protector de cable",
        precio: 890,
        img: "../img/cargadores/come cable animales.jpeg",
    },
    {
        id: 9,
        nombre: "Protector de Cable",
        cantidad: 1,
        desc: "come cable protector de cable",
        precio: 890,
        img: "../img/cargadores/come cable.jpeg",
    },

];



const contenedor = document.getElementById('contenedor');

stockCargadores.forEach((prod) =>{
    const {id, nombre, precio, desc, img, cantidad} = prod;
    contenedor.innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <h6 class="card-text">Precio:${precio}</h6>
            <p class="card-text">${desc}</p>

            <button onclick="agregarCargador(${id})" class="btn btn-success">Comprar</button>
        </div>

    </div>
        `
});