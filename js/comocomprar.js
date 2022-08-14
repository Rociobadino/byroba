const informacion = document.querySelector("#informacion")
const floatingname = document.querySelector("#floatingname")
const floatingInput = document.querySelector("#floatingInput")

let nombres = []

class nombre {
    constructor (nombre,email){
    this.nombre = nombre
    this.email = email
    }
}
const convertirAJSONYSubirALs = (clave,valor) => {
    const nombresAJSON = JSON.stringify(valor)
    localStorage.setItem(clave, nombresAJSON)
}

informacion.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    nombres.push(new nombre(floatingname.value, floatingInput.value,))
   informacion.reset ()
   swal({
    title: "La informacion se envio correctamente!",
    icon: "success",
    button: "Volver a la pagina",
})
    console.log(nombres)
    convertirAJSONYSubirALs ("nombres", nombres)
}

const traerDeLS = (clave) => {
    const nombresTraidosdeLs = localStorage.getItem ("nombres")
    const parsearnombres = JSON.parse("nombreTraidosdeLs")
    return parsearnombres
}

