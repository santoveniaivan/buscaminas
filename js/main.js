"use strict"


function crearPartida() {


  let filas = document.getElementById('filas').value
  let columnas = document.getElementById('columnas').value
  let nminas = document.getElementById('nminas').value
  let partida = new Array(filas)
  let minafila = Math.floor(Math.random() * filas)
  let minacolumna = Math.floor(Math.random() * columnas)


  for (let i = 0; i < filas;i++) {
    partida[i] = new Array(columnas)
    for (let y = 0; y < columnas; y++) {
      partida[i][y] = ""
    }
  }
    for (let m= 0; m < nminas;m++){
      let minafila = Math.floor(Math.random() * filas)
      let minacolumna = Math.floor(Math.random() * columnas)
      if (partida[minafila][minacolumna] == ""){
        partida[minafila][minacolumna] = "M"
      }
    }

  console.log(partida)
  console.log(minafila, minacolumna)
  console.log(nminas)
  }








document.getElementById('enviar').addEventListener('click', crearPartida)
