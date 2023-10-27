const puntuacion = 23

if(puntuacion >=70) {
    console.log("Aprobado")
}else {
    console.log("Reprobado")
}

const dia = 3

switch(dia) {
    case 1:
        console.log('Lunes')
        break
      case 2:
        console.log('Martes')
        break
      case 3:
        console.log('Miércoles')
        break
      case 4:
        console.log('Jueves')
        break
      case 5:
        console.log('Viernes')
        break
      case 6:
        console.log('Sábado')
        break
      case 7:
        console.log('Domingo')
        break
      default:
        console.log('Día inválido')
}

const temperatura = 23

function convertirFahrenheit(temperatura) {
    return(temperatura * 9) / 5 + 32
}
const temperaturaCelsius = 25
const temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log('Temperatura en Fahrenheit: ' + temperaturaFahrenheit)


function esPar(numero) {
    return numero % 2 === 0
  }
  

  const numeroPar = 10
  if (esPar(numeroPar)) {
    console.log(numeroPar + ' es par')
  } else {
    console.log(numeroPar + ' es impar')
  }