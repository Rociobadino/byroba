
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

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

const nuevosProductos = [...lista]
nuevosProductos.push("medias")
console.log(nuevosProductos)

const compras = lista.slice(1, 3);
console.log(compras);

const precio = [700, 5000, 4000, 3400, 1200, 500]

console.log(precio)

const precioMayor = 3400 >= 5000 ? "Es mayor" : "Es menor"
console.log(precioMayor)
// DESTRUCTURING ARRAYS
const [, precioMasAlto, , , , precioMasBajo, ,] = precio
console.log(precioMasAlto)
console.log(precioMasBajo)

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
]
console.log(clientes)
// SPREAD OPERATOR
const nuevaReferencia = [...clientes]
clientes.push("rocio")
console.log(clientes)
console.log(nuevaReferencia)
clientes.forEach((elemento) => {
    console.log(elemento.nombre)
})

const array = clientes.reduce((acc, elemento) => {
    return acc + `
 
 <div class= "cli text-center fs-5 text">
      <p>
      Cliente del mes:
      ${elemento.nombre}
      </p>
 </div>
 `
}, "")
console.log(array)

const cli = document.querySelector(".cli")
console.log(cli)

cli.innerHTML = array

const tituloByroba = document.querySelector(".titulo")
console.log(tituloByroba)

tituloByroba.innerText = "Bienvenidos a BY ROBA"

// compra productos (operador ternario)

const comprasMayorista = 200 >= 100 ? "es mayorista" : "es minorista"
console.log(comprasMayorista)

const compraMayorista = (cantidad, minorista) => cantidad >= 50 && minorista === false ? "mayorista" : "minorista"

console.log(compraMayorista(30, true))
console.log(compraMayorista(5, true))
console.log(compraMayorista(300, false))
console.log(compraMayorista(60, false))


