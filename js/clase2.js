//Parsear convertir un dato(un tipo de cadena, string) a numero entero.
//Double 15 digitos Float 7 digitos
/*let edad = prompt("Ingrese un numero");
edad = parseInt(edad)
console.log(edad + 25)*/

//Condicionales
//Valores booleanos true o false
//Si condicion
/*let nombre = prompt("Ingrese su nombre de usuario")
if (nombre == "") {
    alert("No ingresas ningún usuario")
} else {
    alert("Bienvenide " + nombre)
}*/
/*let num = 10;
if (num > 10) {
    console.log("Tu número es mayor a 10");
} else if (num < 10) {
    console.log("Tu numero es menor a 10");
} else {
    console.log("Tu numero es igual a 10");
}
*/
//Operaciones logicas
//es igual(==) es estrictamente igual(===) es distinto(!=) es estrictamente distinto(!==)operador and(y) && operador or || operador not no !
//con &&(and) todas las condiciones deben ser correctas. con ||(or) una puede no ser correcta

/*let usuario = "florgo";
let contraseña = "123";
let nombreUsuario = prompt("Ingrese su usuario");
let contraUsuario = prompt("Ingrese su contraseña");

if ((usuario == nombreUsuario) || (contraseña == contraUsuario)) {
    alert("Bienvenide " + usuario)
} else {
    alert("Alguno de sus datos están mal")
}
*/



/*let numero = prompt("Ingrese un numero")
if (numero > 1000) {
    alert("Tu numero es mayor a 1000")
} else {
    alert("Tu numero es menor que 1000")
}
*/
/*let palabra = prompt("Ingrese Hola")
if (palabra === "Hola") {
    alert("Ingresas Hola")
} else {
    alert("Ingresaste la palabra " + palabra)
}*/
/*let numero = prompt("Ingrese un número")
if ((numero > 10) && (numero < 50)) {
    alert("Su número está entre 10 y 50")
} else if (numero < 10) {
    alert("Su número es menor que 10")
} else(numero > 50); {
    alert("Su número es mayor a 50")
}*/
//Trabajo en grupo clase
// let numero = parseInt(prompt("Ingrese un numero")); // string 

// if (numero > 1000) { // 1000 > 1000 false
//     alert("El numero es mayor a 1000");
// }else {
//     alert("El numero es menor que 1000")
// }

//Preguntar al usuario si es mayor de edad, si es mayor entonces preguntar cuantos años tiene, si no decirle que no puede entrar.

/*const respuesta = prompt("Usted es mayor de edad");
console.log(respuesta);
console.log(respuesta.toUpperCase());

if (respuesta === "si") {
    const edad = parseInt(prompt("¿Cuantos años tienes?"));
    alert("Bienvenido usted tiene " + edad + "años");
} else {
    console.log("No eres mayor de edad");
}
*/

// const numero = 20;
// const numero1 = "20";

// if (numero === numero1) {
//     console.log("Si son iguales");
// }else{
//     console.log("No son iguales ");
// }

// == solamente compara valores
// === compara valores y tipo de dato 
// v  y f = f

//After class
/*let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
alert("Su nombre es " + nombre + " y tiene " + (edad + 2) + " años ")*/

//Ejercicios
/*1
let ingreseNombre = prompt("Ingrese un nombre")
let nombre = "Florencia"
if (ingreseNombre == nombre) {
    alert("Fui yo")
} else {
    alert("No fui yo")
}
*/
//2
/*let letra = prompt("Ingrese una letra de su teclado").toLocaleLowerCase()
if (letra == "y") {
    alert("Correcto")
} else {
    alert("Incorrecto")
}*/

//Usar operador OR
/*let letra = prompt("Ingrese una letra de su teclado").toLocaleLowerCase()
if (letra == "y") || (letra == "Y"){
    alert("Correcto")
} else {
    alert("Incorrecto")
}*/


// 3
/*
let numero = parseInt(prompt("Elija un número del 1 al 4"))
if (numero == 1) {
    alert("Elegiste a Homero")
} else if (numero == 2) {
    alert("Elegiste a marge")
} else if (numero == 3) {
    alert("Elegiste a Bart")
} else if (numero == 4) {
    alert("Elegiste a Lisa")
} else {
    alert("No elegiste un numero entre el 1 y el 5")
}
*/

/*let presu = parseInt(prompt("Ingrese un numero"))
if ((presu >= 0) && (presu <= 1000)) {
    alert("Presupuesto bajo")
} else if ((presu >= 1001) && (presu <= 3000)) {
    alert("Presupuesto medio")
} else(presu > 3000) {
    alert("Presupuesto alto")
}*/