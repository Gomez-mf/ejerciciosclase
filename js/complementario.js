let color = prompt("Adivina uno de los colores primarios: ").toLowerCase()
while (color != "rojo") {
    alert("Perdiste, color incorrecto")
    color = prompt("Ingresa otro color: ").toLowerCase()

}
alert("¡Felicitaciones, adivinaste!")