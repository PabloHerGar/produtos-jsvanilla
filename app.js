const reset = function () {
  document.getElementById('name').value = ''
  document.getElementById('price').value = 0
  document.getElementById('release').value = 2023
}

document.addEventListener('submit', function (event) {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const release = document.getElementById('release').value

  console.log(name)
  console.log(price)
  console.log(release)

  reset()

  event.preventDefault() //Evita que la pagina de HTML se recarga, de este modo se mantienen los valores por consola
})

document.addEventListener('reset', reset())

// console.log(name)
// console.log(price)  No queremos devolver ningún valor
// console.log(release)
