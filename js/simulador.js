let nombre = prompt("Ingrese su nombre, por favor ")
while (nombre === "") {
    alert("No ingresas ningún nombre")
    nombre = prompt("Ingrese su nombre, por favor ")
}
alert("¡Bienvenido/a " + nombre + " a wafflitos vm!")
alert("Los siguientes son los productos disponibles")

function productos() {
    let waffle1 = "Waffles frutales"
    let waffle2 = "Waffles con golosinas"
    let waffle3 = "Waffles salados"
    alert(waffle1)
    alert(waffle2)
    alert(waffle3)
}
productos()
let producto = prompt("¿Qué waffles quiere comprar?").toLowerCase()
if ((producto == "waffles frutales" || producto == "frutales")) {
    alert("Usted eligió waffles frutales y debe abonar $300")
} else if ((producto == "waffles con golosinas" || producto == "con golosinas")) {
    alert("Usted eligió waffles con golosinas y debe abonar $350")
} else if ((producto == "waffles salados" || producto == "salados")) {
    alert("Usted eligió waffles salados debe abonar $400")
} else {
    alert("¡Error! No ha ingresado ningún producto")
}