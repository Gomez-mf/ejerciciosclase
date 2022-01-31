let nombre = prompt("Ingrese su nombre, por favor ");
while (nombre === "") {
    alert("No ha ingresado ningún nombre");
    nombre = prompt("Ingrese su nombre, por favor ");
}
alert(`Bienvenido/a ${nombre} a wafflitos vm`);
const waffles = [
    { id: 1, nombre: "Waffles frutales", tipo: "dulce", precio: 375 },
    { id: 2, nombre: "Waffles con golosinas", tipo: "dulce", precio: 350 },
    { id: 3, nombre: "Waffles con oreos", tipo: "dulce", precio: 350 },
    { id: 4, nombre: "Waffle de jamón y queso", tipo: "salado", precio: 400 },
    { id: 5, nombre: "Waffles de jamón crudo y rúcula", tipo: "salado", precio: 500 },
];
for (const id of waffles) {
    let lista = id.id + " " + id.nombre;
    alert(`Los siguientes son los productos disponibles: \n ${lista}`);
}
let carritoDeCompras = []
function agregarAlCarrito() {
    let otroProducto = "";
    do {
        let productoElegido = parseInt(prompt("Elija el ID del producto que quiera comprar"));
        let agregarProducto = waffles.find((el) => el.id === productoElegido);
        carritoDeCompras.push(agregarProducto);
        otroProducto = prompt("¿Quiere agregar otro producto?").toLowerCase()
    } while (otroProducto === "si");
    console.log(carritoDeCompras);
    }
agregarAlCarrito()
function mostrarCarrito() {
    console.log("cantidad de productos: " + carritoDeCompras.length);
    let total = carritoDeCompras.length;
    total = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
    alert(`Su total a abonar es $${total}`);
    }
mostrarCarrito();