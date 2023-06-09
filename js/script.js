import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  
  hideAlertError()
  
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  
  inputWeight.value = ''
  inputHeight.value = ''
}

inputWeight.addEventListener('input', hideAlertError)
inputHeight.addEventListener('input', hideAlertError)

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function hideAlertError() {
  AlertError.close()
}
