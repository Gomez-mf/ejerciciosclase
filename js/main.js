let agregarAlCarrito = [];
const lista = document.getElementById("listaDeProductos");
const tiposDeWaffles = document.getElementById("tiposDeWaffles");
const verCarrito = document.getElementById("carrito-contenedor");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById('precioTotal');
const comprar = document.getElementById('finalizarComprar');


//Filtro
tiposDeWaffles.addEventListener('change', () => {
    console.log(tiposDeWaffles.value);
    if (tiposDeWaffles.value === 'todos') {
        mostrarProductos(waffles);
    } else {
        console.log(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
        mostrarProductos(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
    }
});
//Mostrar productos
mostrarProductos(waffles);

function mostrarProductos(waffles) {
    lista.innerHTML = "";
    for (const producto of waffles) {
        let contenedor = document.createElement("div");
        contenedor.className = `cardProdu`;
        contenedor.innerHTML += `<h3>${producto.nombre}</h3>
                                <img src=${producto.img}>
                                <p>${producto.descripcion}</p>
                                <button class="botonComprar" id="botonComprar${producto.id}">Comprar</button>
                                `;
        lista.appendChild(contenedor);

        let botoncomprar = document.getElementById(`botonComprar${producto.id}`);
        botoncomprar.onclick = () => {
            agregarAlCarritoFuncion(producto.id);
        };
    }
}

function agregarAlCarritoFuncion(id) {
    let repetido = agregarAlCarrito.find(item => item.id === id);
    if (repetido) {
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<td class="mostrar" id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</td>`
        actualizarCarrito()
    } else {
        const items = waffles.find((producto) => producto.id === id);
        agregarAlCarrito.push(items);
        actualizarCarrito();
        let tabla = document.createElement('tr');
        tabla.innerHTML += `
                            <td class="mostrar">${items.nombre}</td>
                            <td class="mostrar" id= cantidad${items.id}>Cantidad:${items.cantidad}</td>
                            <td class="mostrar">$${items.precio}</td>
                            <i class="fas fa-trash-alt" id="eliminar${items.id}"></i> 
                             `;
        verCarrito.appendChild(tabla);

        //Eliminar del carrito
        const eliminarCarro = document.getElementById(`eliminar${items.id}`);
        eliminarCarro.addEventListener('click', () => {
            eliminarDelCarrito(id)
        })

        function eliminarDelCarrito(id) {
            eliminarCarro.parentElement.remove()
            agregarAlCarrito = agregarAlCarrito.filter((item) => item.id !== id)
            actualizarCarrito()
            guardarEnStorage()

        }
    }
    guardarEnStorage()
}
actualizarCarrito();

//Actualizo precios y cantidades del carrito
function actualizarCarrito() {
    contadorCarrito.innerText = agregarAlCarrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    precioTotal.innerText = agregarAlCarrito.reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

}

//Funcion para guardar en storage
function guardarEnStorage() {
    let setItems = localStorage.setItem('carrito', JSON.stringify(agregarAlCarrito));
    return setItems;
}

function recuperarCarrito() {
    let recuperarProductos = JSON.parse(localStorage.getItem('carrito'));
    if (recuperarProductos) {
        recuperarProductos.forEach(element => {
            agregarAlCarritoFuncion(element.id)
        })
    }
}
recuperarCarrito()

//Finalizar comprar
comprar.addEventListener('click', finalizarCompra)

function finalizarCompra() {
    verCarrito.innerHTML = "";
    let mensajeFinalizarCompra = document.createElement('p')
    mensajeFinalizarCompra.innerHTML += `¡Muchas gracias por su compra!`
    verCarrito.appendChild(mensajeFinalizarCompra)
    agregarAlCarrito = []
    localStorage.clear();
    actualizarCarrito();
}