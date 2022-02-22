let carrito = [];
const lista = document.getElementById("listaDeProductos");
const tiposDeWaffles = document.getElementById("tiposDeWaffles");
const verCarrito = document.querySelector('.tabla')
const contadorCarrito = document.getElementById("contadorCarrito");
const comprar = document.getElementById('finalizarComprar');
const footerCarrito = document.getElementById('footerCarrito');
const precioTotal = document.getElementById('precioTotal');


//Filtro
tiposDeWaffles.addEventListener('change', () => {
    tiposDeWaffles.value === 'todos' ? listaDeProductos(waffles) : listaDeProductos(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
});
// //Mostrar productos
recuperarLocalStorage()
listaDeProductos(waffles)

function listaDeProductos(waffles) {
    lista.innerHTML = "";
    waffles.forEach((producto) => {
        const { nombre, img, descripcion, id } = producto
        let contenedor = document.createElement("div");
        contenedor.className = 'cardProdu'
        contenedor.innerHTML += `<h3>${nombre}</h3>
                                <img src=${img}>
                                <p>${descripcion}</p>
                                <button class="botonComprar" id="botonComprar${id}">Comprar</button>
                                `;
        lista.appendChild(contenedor);
        let botoncomprar = document.getElementById(`botonComprar${id}`);
        botoncomprar.onclick = () => {
            agregarAlCarrito(producto.id)
            swal({
                title: "¡Producto agregado!",
                text: `Usted ha agregado ${nombre} al carrito`,
                icon: "success",
                button: "Cerrar",
            });
        };
    })
}

function agregarAlCarrito(id) {
    console.log(carrito)
    let repetido = carrito.some((items) => items.id === id)
    if (repetido) {
        carrito = carrito.map(elemento => {
            if (elemento.id === id) {
                elemento.cantidad++
                    return elemento
            } else {
                return elemento
            }
        })
    } else {
        const items = waffles.find((producto) => producto.id === id);
        carrito.push(items)
    }
    mostrarCarrito(carrito)
    guardarLocalStorage(carrito)
    actualizarCarrito()
}

function guardarLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function recuperarLocalStorage() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito(carrito)
}

function mostrarCarrito(carrito) {
    verCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const { nombre, cantidad, precio, id } = producto;
        let tabla = document.createElement('tr');
        tabla.innerHTML += `
                                <td class="mostrar">${nombre}</td>
                                <td class="mostrar">Cantidad:${cantidad}</td>
                                <td class="mostrar">$${precio}</td>
                                <i class="fas fa-trash-alt" id="eliminar${id}"></i> 
                                 `;
        verCarrito.appendChild(tabla);
        //Eliminar
        let botonEliminar = document.getElementById(`eliminar${id}`)
        botonEliminar.addEventListener('click', () => {
                        swal({
                    title: "Eliminar producto",
                    text: "¿Está seguro que quiere eliminar este producto?",
                    icon: "warning",
                    buttons: ["Cancelar", true],
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Producto eliminado", {
                            icon: "success",
                            eliminarDelCarrito(id)
                        });
                    } else {
                        swal("No ha eliminado el producto");
                    }
            eliminarDelCarrito(producto.id)
        })

        function eliminarDelCarrito(id) {
            botonEliminar.parentElement.remove()
            carrito = carrito.filter((item) => item.id !== id)
            guardarLocalStorage(carrito)
            actualizarCarrito()});
        }
    });
    // mostrarInformacion()
}
actualizarCarrito()



// function mostrarInformacion() {
//     footerCarrito.innerHTML = "";
//     if (carrito.length === 0) {
//         footerCarrito.innerHTML = `<td>Carrito vacio. Comienza a comprar</td>`
//     } else {
//         footerCarrito.innerHTML = `<p class="precioProducto">Precio total: $<span id="precioTotal">0</span></p><button class="botonComprar" id="finalizarComprar">Finalizar Compra</button>`
//     }
// }

function actualizarCarrito(carrito) {
    contadorCarrito.innerText = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    precioTotal.innerText = carrito.reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
}


//Finalizar comprar
comprar.addEventListener('click', finalizarCompra)

function finalizarCompra() {
    verCarrito.innerHTML = "";
    let mensajeFinalizarCompra = document.createElement('p')
    mensajeFinalizarCompra.innerHTML += `¡Muchas gracias por su compra!`
    verCarrito.appendChild(mensajeFinalizarCompra)
    carrito = []
    localStorage.clear();
    actualizarCarrito();
}
