
alert(`Bienvenido a BYROBA, recuerde que solo aceptamos transferencias o pagos en efectivo!`)

let productos = prompt("Ingrese el producto que esta buscando")
switch (productos) {
    case "tops":
        console.log("si,lo tenemos!")
        break;
    case "medias":
    case "gorros":
    case "remeras":
        console.log("si,lo tenemos!")
        break;
    default:
        console.log("Disculpa, no vendemos ese producto")
        break;
}

let nombre = prompt("Ingrese una palabra para saber cuantas letras tiene")
for (let i = 0; i < nombre.length; i++){
    console.log(i)
}


const numeros = prompt("Decida si quiere que los numeros sean pares o impares")

for (let i = 0; i <= 50; i++){

    if ( numeros === "pares" && i % 2 === 0  ){
        console.log(`El número ${i} es par`)
    }
    else if ( numeros === "impares" && i % 2 !== 0){
        console.log(`El número ${i} es impar`)
    }
    else if ( numeros === null ){
        console.log("Respuesta incorrecta")
        break;
    }  

}

let final = prompt ("ingrese el precio del producto para sumarle el impuesto")
const sumaImpuesto = function(producto){
    return producto+150
}
const suma = Number(final)
console.log(sumaImpuesto(suma));



