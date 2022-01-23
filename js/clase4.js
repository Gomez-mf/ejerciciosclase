function saludar() { //Funcion simple, no hay parametros
    alert("Barbarena es real")
}
saludar()

function suma() {
    let num1 = parseInt(prompt("Ingrese un número"))
    let num2 = parseInt(prompt("Ingrese un número"))
    let resultado = num1 + num2
    alert("el resultado de la suma es " + resultado)
}
suma()
    //Parametros
function resta(n1, n2) {
    let resultado = n1 - n2
    alert("Tu resta es " + resultado)
}
resta(50, 50)
resta(100, 20)


/*Aca les dejo en ejemplo para lo que no tienen claro
lo de return, como veran en la funcion suma, yo no uso return, si bien 
al llamar la funcion suma se visualizara su valor, pero esa funcion no 
va a retornar ningun valor, cuando yo llamo a la funcion suma dentro de
resultado y hago un console.log de resultado veran que no guardo nada.

Pero si nos vamos a la funcion sum, y la meto dentro de la variable 
resultado2, y hago un console.log de esa variable veran como si contiene 
un valor.

function suma(n1,n2){
    console.log(n1 + n2);
}

let resultado = suma(50,40) ;
console.log(resultado)

function sum(n1,n2){
    return n1 + n2;
}

let resultado2 = sum(50,40);
console.log(resultado2)
*/