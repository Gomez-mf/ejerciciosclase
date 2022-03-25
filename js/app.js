let carrito = [];
let waffles = [];
const lista = document.getElementById("listaDeProductos");
const tiposDeWaffles = document.getElementById("tiposDeWaffles");
const modal = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById("contadorCarrito");
const verCarrito = document.getElementById('tabla');
let precio = document.getElementById('precioTotal');
let comprar = document.getElementById('finalizarCompra');
const footerCarrito = document.getElementById('footerCarrito');
let botones = document.getElementById('que');

//Llamo a mi archivo json para cargar mis productos
fetch('js/stock.json')
    .then(Response => Response.json())
    .then(data => {
        waffles = data
        listaDeProductos(waffles)
    })
    .catch(error => console.log(error))


//Filtro
tiposDeWaffles.addEventListener('change', () => {
    tiposDeWaffles.value === 'todos' ? listaDeProductos(waffles) : listaDeProductos(waffles.filter((el) => el.tipo === tiposDeWaffles.value));
});

recuperarLocalStorage()

//Muestro mis productos 
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

//Agregar al carrito
function agregarAlCarrito(id) {
    //Si el producto está duplicada solo modifica la cantidad y no lo duplica en el DOM.
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

//Muestro productos que agrego el usuario
function mostrarCarrito() {
    verCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const { nombre, cantidad, precio, id } = producto;
        let tabla = document.createElement('tr');
        tabla.innerHTML += `
                                <td class="mostrar">${nombre}</td>
                                <td class="mostrar">${cantidad}</td>
                                <td class="mostrar">$${precio}</td>
                                <i class="fas fa-trash-alt" id="eliminar${id}"></i>
                                <td></td>
                                 `;
        verCarrito.appendChild(tabla);

        //Eliminar productos del carrito.
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
                        }), eliminarDelCarrito(id), mostrarFooter()
                    } else {
                        swal("No ha eliminado el producto");
                    }
                })
        })

        function eliminarDelCarrito(id) {
            botonEliminar.parentElement.remove(carrito)
            carrito = carrito.filter((producto) => producto.id !== id)
            actualizarCarrito(carrito)
            guardarLocalStorage(carrito)
        }
    });
}
actualizarCarrito(carrito)
    //Se guarda el carrito en storage
function guardarLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

//Al iniciar la web verifica si hay elementos en el carrito y los trae. Sino crea un carrito vacio.
function recuperarLocalStorage() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito()
}

//Si el carrito está vacio muestra mensaje sino actualiza a precio e incluye boton finalizar compra.
function mostrarFooter() {
    footerCarrito.innerHTML = "";
    if (carrito.length == 0) {
        footerCarrito.innerHTML = `<p>Carrito vacio. Comienza a comprar</p>`
        return
    } else {
        footerCarrito.innerHTML = `<p>Precio total: $<span id="precioTotal">0</span></p><button class="botonGral" id="finalizarCompra">Finalizar compra</button>`
        actualizarCarrito(carrito)
        let comprar = document.getElementById('finalizarCompra');
        comprar.addEventListener('click', finalizarCompra)
    }
}
mostrarFooter()

//Funcion para actualizar precio y cantidad
function actualizarCarrito(carrito) {
    precio = document.getElementById('precioTotal');
    contadorCarrito.innerText = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    precio.innerText = carrito.reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
}
// Finalizar comprar- Al presionar el boton se imprime el formulario y luego se enviara la información al mail
comprar.addEventListener('click', finalizarCompra)

function finalizarCompra() {
    modal.innerHTML = "";
    modal.innerHTML += `
    <div class="contenedorFormulario">
    <h3>Ingrese sus datos</h3>
    <form action="" id="formulario">
        <p>
            <label for="">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required>
        </p>
        <p>
            <label for="">Apellido</label>
            <input type="text" name="apellido" required id="apellido" placeholder="Ingrese su apellido"required>
        </p>
        <p>
            <label for="">Email</label>
            <input type="text" name="email" id="email" placeholder="wafflitos@gmail.com" required>
        </p>
        <p>
            <label for="">Telefono</label>
            <input type="tel" name="telefono" id="telefono" placeholder="15-xxxxxxxx" maxlength="10" required>
        </p>
        <p> 
            <input type="radio" value="tarjeta" name="metodo" required>
            <label for="tarjeta">Tarjeta de crédito/débito <i class="fas fa-credit-card"></i></label>
        </p>
        <p>
            <input type="radio" value="banco" name="metodo" required>
            <label for="banco">Transferencia bancaria <i class="fas fa-university"></i></label>
        </p>
        <p>
            <button type="submit" value="pagar" class="botonGral" id="botonPagar">Pagar</button>
        </p>
    </form>
</div> `
    let formulario = document.getElementById('formulario')

    const enviarFormulario = (e) => {
        e.preventDefault()
            //Se envía con POST la información del formulario.
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(carrito),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .catch(error => console.log(error))
            .then((respuesta) => {
                let nombre = document.getElementById('nombre').value
                let email = document.getElementById('email').value
                modal.innerHTML = "";
                modal.innerHTML += `<p> ¡Gracias ${nombre} por tu compra!<br>
                                    Te hemos enviado un correo a ${email} para proceder con el pago</p>
                                    <button class="botonGral"><a href="./index.html">Volver a atrás</a></button>
                                    `
                carrito = []
                localStorage.clear();
                //Vuelvo a calcular solo la cantidad porque si llamo a la función de actualizarCarrito me tira error de consola.
                contadorCarrito.innerText = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);

            })
    }

    formulario.addEventListener('submit', enviarFormulario)
}