const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputObservaciones = document.querySelector("#inputObservaciones")
const inputState = document.querySelector("#inputState")
const submit = document.querySelector("#submit")

console.log(formulario, inputNombre, inputEmail, inputObservaciones)

const personas = []

class Persona {
    constructor(nombre, email, observaciones, state){
        this.nombre = nombre;
        this.email = email;
        this.observaciones = observaciones;
        this.state = state;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    personas.push(new Persona(inputNombre.value, inputEmail.value, inputObservaciones.value, inputState.value))
    console.log(personas)
}
