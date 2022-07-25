
/*alert(`Bienvenido a BYROBA, recuerde que solo aceptamos transferencias o pagos en efectivo!`)

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

const lista = [
    {
        producto: "remera",
        talle: 1
    },
    {
        producto: "short",
        talle: 2
    },
    {
        producto: "buzo",
        talle: 3
    },
    {
        producto: "remera",
        talle: 3
    },
    {
        producto: "pantalon",
        talle: 2
    },
]

for (let i = 0; i < lista.length; i++){
console.log(lista[i])
}

const nuevosProductos = [...lista]
nuevosProductos.push("medias")
console.log(nuevosProductos)

const compras = lista.slice(1,3);
console.log(compras);*/

let productos = prompt("Ingrese el producto que esta buscando")
switch (productos) {
    case "tops":
    case "medias":
    case "gorros":
    case "remeras":
        console.log("si,lo tenemos!")
        alert("si lo tenemos, buscalo en nuestra tienda online!")
        break;
    default:
        alert("Disculpa, no vendemos ese producto")
        console.log("Disculpa, no vendemos ese producto")
        break;
}
let talle = prompt("Ingrese el talle que esta buscando")
switch (talle) {
    case "1":
    case "2":
    case "3":
        console.log("si, tenemos esos talles!")
        alert("Si tenemos, buscalo en nuestra tienda online!")
        break;
    default:
        alert("No tenemos ese talle, medias y gorros talle unico")
        console.log("Disculpa, no tenemos ese talle. Medias y gorros son talle unico")
        break;
}
const lista = [
    {
        producto: "remera",
        talle: 1
    },
    {
        producto: "short",
        talle: 2
    },
    {
        producto: "buzo",
        talle: 3
    },
    {
        producto: "remera",
        talle: 3
    },
    {
        producto: "pantalon",
        talle: 2
    },
]

for (let i = 0; i < lista.length; i++){
console.log(lista[i])
}

const nuevosProductos = [...lista]
nuevosProductos.push("medias")
console.log(nuevosProductos)

const compras = lista.slice(1,3);
console.log(compras);

const precio = [700,5000,4000,3400,1200,500]

console.log(precio)

const impuestos = precio.map((curr) => {
 return curr + 150
})

console.log(impuestos)

const total = impuestos.reduce((acc, curr) => {
    return acc + curr
})
 console.log(total)

const clientes = [
    {
        nombre: "Karina",
        edad: 20
    },
    {
        nombre: "Franco",
        edad: 39
    },
    {
        nombre: "Mauricio",
        edad: 23
    },
    {
        nombre: "Diego",
        edad: 56
    },
    {
        nombre: "Victoria",
        edad: 33
    },
]
console.log(clientes)

clientes.forEach((elemento) =>{
    console.log(elemento.nombre)
})