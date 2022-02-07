const lista = document.getElementById(`contenedor`);
const tiposDeWaffles = document.getElementById(`tiposDeWaffles`);
const agregarAlCarrito = [];

let titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = `<h2>Bienvenido/a wafflitos VM</h2>`;

let formulario = document.getElementById(`formulario`)
formulario.addEventListener(`submit`, validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let usuario = document.getElementById(`usuario`).value;
    let mostrar = document.getElementById(`nombreBienvenida`);
    mostrar.innerHTML = `<p>Hola ${usuario} ¿Qué producto quieres comprar?</p>`;
    console.log(`formulario enviado`)
}

/*Filtro Dulce/Salado*/
tiposDeWaffles.addEventListener(`change`, () => {
    console.log(tiposDeWaffles.value);
    if (tiposDeWaffles.value === `all`) {
        mostrarProductos(waffles);
    } else {
        console.log(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
        mostrarProductos(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
    }
});
/*Mostrar Productos*/
mostrarProductos(waffles);

function mostrarProductos(waffles) {
    lista.innerHTML = "";
    for (const producto of waffles) {
        let contenedor = document.createElement("div");
        contenedor.className = `card`
        contenedor.innerHTML += `<h3></h3>
                                <img src=${producto.img}>
                                <p>  Producto: ${producto.nombre}</p>
                                <p> $ ${producto.precio}</p>
                                <button class="botonComprar" id="${producto.id}">Comprar</button>
                                `;
        lista.appendChild(contenedor);
    }
}
/*Agregar al carrito*/
botonAgregarCarrito = document.getElementsByClassName(`botonComprar`);
for (boton of botonAgregarCarrito) {
    boton.addEventListener(`click`, agregarAlCarritoFuncion)
    console.log(boton)
}

function agregarAlCarritoFuncion(e) {
    let botonWaffle = parseInt(e.target.id)
    console.log(botonWaffle)
    const items = waffles.find((producto) => producto.id === botonWaffle)
    agregarAlCarrito.push(items)
}
console.log(agregarAlCarrito)