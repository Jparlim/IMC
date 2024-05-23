import { modal } from "./slaaa.js"
import { alerta } from "./alertError.js"

const form = document.querySelector('form')
const inputweight = document.querySelector('#inputweight')
const inputheight = document.querySelector('#inputheight')


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputweight.value
    const height = inputheight.value

    const showalerterror = isNoanumber(weight) || isNoanumber(height)

    if(showalerterror) {
        alerta.open()
        return;
    }

    alerta.close()


    const imc = (weight / ((height / 100) ** 2)).toFixed()

    modal.titulo.innerText = `SEU IMC É DE ${imc}`
    modal.open()
}

function isNoanumber(value) {
    return isNaN(value) || value == ""
}