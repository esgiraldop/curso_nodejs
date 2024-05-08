const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)

// leyendo el archivo e imprimiendo su contenido
const text = fs.readFileSync('./archivo.txt', 'utf-8') // Manera sincrona de leer un archivo
console.log(text)

const textAsync = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log("segundo texto: ", text)
}) // Manera asincrona de leer un archivo. Esta función acepta un callback que es el que se ejecuta cuando se ejecuta "readFileSync()" y maneja el resultando dependiendo de si es error o no.
console.log(text)

const fsPromises = require("node:fs/promises")
// readFile() Se puede usar con una promesa en vez de de un callback, pero nótese que se debe importar un módulo diferente
fsPromises.readFile('./archivo.txt', 'utf-8').then(text => {console.log("tercer texto: ", text)}).catch(() => {console.log("Error leyendo el archivo")}) // Manera asincrona de leer un archivo. Esta función acepta un callback que es el que se ejecuta cuando se ejecuta "readFileSync()" y maneja el resultando dependiendo de si es error o no.

//Usando async await con función autoinvocada (Inmediately Invoked Function Expression - IIFE)
const forthText = (async () =>{
    return await fsPromises.readFile('./archivo.txt', 'utf-8')
})()
console.log("Cuarto texto: ", forthText)