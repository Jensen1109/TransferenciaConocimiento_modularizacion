import { Subtotal, calculariva, Calculartotalconiva } from "./modulos/producto.js"


let nombre1 = prompt("Ingrese el nombre: ")
let precio1 = parseFloat(prompt("Ingrese el precio: "))
let cantidad1 = parseInt(prompt("Ingrese la cantidad: "))

let nombre2 = prompt("Ingrese el nombre: ")
let precio2 = parseFloat(prompt("Ingrese el precio: "))
let cantidad2 = parseInt(prompt("Ingrese la cantidad: "))

let nombre3 = prompt("Ingrese el nombre: ")
let precio3 = parseFloat(prompt("Ingrese el precio: "))
let cantidad3 = parseInt(prompt("Ingrese la cantidad: "))


let Subtotal1 = Subtotal(precio1, cantidad1)
let Subtotal2 = Subtotal(precio2, cantidad2)
let Subtotal3 = Subtotal(precio3, cantidad3)

let TotalSinIva = Subtotal1 + Subtotal2 + Subtotal3
let iva = calculariva(TotalSinIva)
let Totalconiva = Calculartotalconiva(TotalSinIva, iva)


alert(`total sin iva ${TotalSinIva} iva: ${iva} Total a pagar ${Totalconiva}`)