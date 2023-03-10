const stockAuriculares = [
    {
        id: 10,
        nombre: "Auricular lightning con cable",
        cantidad: 1,
        desc: "Auricular para iphone con cable",
        precio: 3000,
        img: "../img/auriculares/auri lighting.jpeg",
    },
    {
        id: 11,
        nombre: "Auricular bluetooth i15S",
        cantidad: 1,
        desc: "Auricular bluetooth          ",
        precio: 8400,
        img: "../img/auriculares/earpods.jpg",
    },
    {
        id: 12,
        nombre: "Protector airpods Disney",
        cantidad: 1,
        desc: "Protector de airpods motivo Disney",
        precio: 1400,
        img: "../img/auriculares/protectores disney.jpeg",
    },
    {
        id: 13,
        nombre: "Auriculares manos libres Samsung",
        cantidad: 1,
        desc: "Auriculares manos libres samsung AKG",
        precio: 5900,
        img: "../img/auriculares/auri samsung.jpeg",
    },
    {
        id: 14,
        nombre: "Auriculares headphone",
        cantidad: 1,
        desc: "Auriculares vincha",
        precio: 5900,
        img: "../img/auriculares/auri vincha.jpg",
    },
    {
        id: 15,
        nombre: "Auriculares manos libres",
        cantidad: 1,
        desc: "Auriculares manos libres colores pasteles",
        precio: 1490,
        img: "../img/auriculares/auri.jpg",
    },

];

    const contenedorAuriculares = document.getElementById('contenedorAuriculares');

    stockAuriculares.forEach((prod) =>{
    const {id, nombre, precio, desc, img, cantidad} = prod;
    contenedorAuriculares.innerHTML +=  `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <h6 class="card-text">Precio: ${precio}</h6>
        <p class="card-text">${desc}</p>

        <button onclick="agregarAuricular(${id})" class="btn btn-success">Comprar</button>
    </div>
    </div>
        `
});

