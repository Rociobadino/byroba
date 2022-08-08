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
    console.log(personas)
    aJSONYSubirALs ("personas", personas)
}
const deLS = (clave) => {
    const personasTraidosdeLs = localStorage.getItem ("personas")
    const parsearpersonas = JSON.parse("personasTraidosdeLs")
    return parsearpersonas
}