const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputObservaciones = document.querySelector("#inputObservaciones")
const inputState = document.querySelector("#inputState")
const submit = document.querySelector("#submit")

console.log(formulario, inputNombre, inputEmail, inputObservaciones)

const personas = []

class persona {
    constructor(nombre, email, observaciones, state){
        this.nombre = nombre;
        this.email = email;
        this.observaciones = observaciones;
        this.state = state;
    }
}

const aJSONYSubirALs = (clave,valor) => {
    const personasAJSON = JSON.stringify(valor)
    localStorage.setItem(clave, personasAJSON)
}
formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    personas.push(new persona(inputNombre.value, inputEmail.value, inputObservaciones.value, inputState.value))
    formulario.reset()
    swal({
        title: "El formulario se envio correctamente!",
        icon: "success",
        button: "Volver a la pagina",
    })
    console.log(personas)
    aJSONYSubirALs ("personas", personas)
}
const deLS = (clave) => {
    const personasTraidosdeLs = localStorage.getItem ("personas")
    const parsearpersonas = JSON.parse("personasTraidosdeLs")
    return parsearpersonas
}

fetch("https://formsubmit.co/ajax/rociob0710@gmail.com",{
    method: "POST",
    body: new FormData()
})
.then(res=> res.ok ? res.json(): Promise.reject(res))
.then(json =>{
    console.log(json)
})
.catch(err => {
    console.log(err)
});
