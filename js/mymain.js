let nombre = prompt("Ingrese su nombre, por favor ")
while (nombre === "") {
    alert("No ingresas ningún nombre")
    nombre = prompt("Ingrese su nombre, por favor ")
}
alert("¡Bienvenido/a " + nombre + " a wafflitos vm!")
alert("Los siguientes son los productos disponibles")
const wafflesDulces = [{ id: 1, nombre: "Waffles frutales", precio: 375 },
    { id: 2, nombre: "Waffles con golosinas", precio: 350 },
    { id: 3, nombre: "Waffles con oreos", precio: 350 }
];
const wafflesSalados = [{ id: 4, nombre: "Waffle de jamón y queso", precio: 400 },
    { id: 5, nombre: "Waffles de jamón crudo y rúcula", precio: 500 },
];
const waffles = wafflesDulces.concat(wafflesSalados)
for (const nombre of waffles) {
    alert(nombre.id);
    alert(nombre.nombre)
}
let productoElegido = parseInt(prompt("Ingrese ID del producto elegido"))
if (productoElegido == "") {
    alert("Error, no ha ingresado ningún ID");
    productoElegido = parseInt(prompt("Ingrese ID del producto elegido"));
} else if (productoElegido == 1) {
    alert("Usted ha elegido Waffles frutales y debe adobar $375")
} else if (productoElegido == 2) {
    alert("Usted ha elegido waffles con golosinas y debe adobar $350")
} else if (productoElegido == 3) {
    alert("Usted ha elegido Waffles con oreos y debe adobar $350")
} else if (productoElegido == 4) {
    alert("Usted ha elegido Waffles de jamón y queso y debe adobar $400")
} else if (productoElegido == 5) {
    alert("Usted ha elegido Waffles de jamón crudo y rúcula y debe adobar $500")
} else {
    alert("¡Error!")
    productoElegido = parseInt(prompt("Ingrese ID del producto elegido"));
}
let continuarCompra = prompt("¿Quiere comprar otro producto?").toLowerCase()
if (continuarCompra == "si") {
    productoElegido = parseInt(prompt("Ingrese ID del producto elegido"));
} else if (continuarCompra == "no") {
    alert("Muchas gracias por su compra")
} else if (continuarCompra != "") {
    alert("Error ingrese si o no, por favor");
    continuarCompra = prompt("¿Quiere comprar otro producto?").toLowerCase()
} else {
    alert("Error")
}