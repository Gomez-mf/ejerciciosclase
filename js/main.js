let carrito = [];
let waffles = [];
const lista = document.getElementById("listaDeProductos");
const tiposDeWaffles = document.getElementById("tiposDeWaffles");
const verCarrito = document.querySelector('.tabla')
const contadorCarrito = document.getElementById("contadorCarrito");
const footerCarrito = document.getElementById('footerCarrito');
let precioTotal = document.getElementById('precioTotal');


fetch('js/stock.json')
    .then(Response => Response.json())
    .then(data => {
        waffles = data
        listaDeProductos(waffles)
    })
    .catch(error => console.log(error))


// // Filtro
tiposDeWaffles.addEventListener('change', () => {
    tiposDeWaffles.value === 'todos' ? listaDeProductos(waffles) : listaDeProductos(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
});
//Mostrar productos
recuperarLocalStorage()

function listaDeProductos(waffles) {
    lista.innerHTML = "";
    waffles.forEach((producto) => {
        const { nombre, img, descripcion, id } = producto
        let contenedor = document.createElement("div");
        contenedor.className = 'cardProdu'
        contenedor.innerHTML += `<h3>${nombre}</h3>
                                <img src=${img}>
                                <p>${descripcion}</p>
                                <button class="botonGral" id="botonComprar${id}">Comprar</button>
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
    mostrarCarrito()
    mostrarFooter()
    actualizarCarrito(carrito)
    guardarLocalStorage(carrito)
}

function mostrarCarrito() {
    verCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const { nombre, cantidad, precio, id } = producto;
        let tabla = document.createElement('tr');
        tabla.innerHTML += `
                                <td class="mostrar">${nombre}</td>
                                <td class="mostrar">Cantidad:${cantidad}</td>
                                <td class="mostrar">$${precio}</td>
                                <i class="fas fa-trash-alt" id="eliminar${id}"></i>
                                <td></td>
                                 `;
        verCarrito.appendChild(tabla);

        //Eliminar
        let botonEliminar = document.getElementById(`eliminar${id}`)
        botonEliminar.addEventListener('click', () => {
            eliminarDelCarrito(id)
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
                        }), eliminarDelCarrito(producto.id)
                    } else {
                        swal("No ha eliminado el producto");
                    }
                })
        })

        function eliminarDelCarrito(id) {
            botonEliminar.parentElement.remove(carrito)
            carrito = carrito.filter((producto) => producto.id !== id)
            footerCarrito()
            actualizarCarrito(carrito)
            guardarLocalStorage(carrito)
        }
    });
}
actualizarCarrito(carrito)

function guardarLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function recuperarLocalStorage() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito()
}

function mostrarFooter() {
    footerCarrito.innerHTML = "";
    if (carrito.length == 0) {
        footerCarrito.innerHTML = `<p>Carrito vacio. Comienza a comprar</p>`
        return
    } else {
        footerCarrito.innerHTML = `<p>Precio total: $<span id="precioTotal">0</span></p><button class="botonGral"><a href="./pages/pago.html">Finalizar Compra</a></button>`
        return
    }
}
mostrarFooter()
actualizarCarrito(carrito)


function actualizarCarrito(carrito) {
    let precioTotal = document.getElementById('precioTotal');
    contadorCarrito.innerText = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    precioTotal.innerText = carrito.reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
}


// Finalizar comprar
const comprar = document.getElementById('finalizarComprar');
comprar.addEventListener('click', finalizarCompra)

function finalizarCompra() {

}

fetch(`https://formsubmit.co/ajax/7e77fc1b7e4412f9635f9c5bdd658a0a`, {
        method: "POST",
        body: new FormData(e.target)
    })
    .then(res => res.ok ? res.json : Promise.reject(res))
    .then(json => {
        verCarrito.innerHTML = "";
        let mensajeFinalizarCompra = document.createElement('p')
        mensajeFinalizarCompra.innerHTML += `¡Muchas gracias por su compra!`
        verCarrito.appendChild(mensajeFinalizarCompra)
        carrito = []
        localStorage.clear();
        actualizarCarrito(carrito);
        setTimeout(() => { location.reload() }, 2000);
    })
    .catch(console.warn)