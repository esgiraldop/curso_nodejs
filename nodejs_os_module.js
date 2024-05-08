const os = require('node:os')
//  import os from 'node:os' //--> Should work, but it does not
/*
// Also can be imported with "import {platform} from 'node:os'

*/

console.log("Información del sistema operativo")
console.log("Nombre del sistema operativo", os.platform())