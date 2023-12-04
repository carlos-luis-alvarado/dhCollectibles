//MICRO DESAFIO 1
const fs = require('fs');
/*
3. Crear en la carpeta raíz del proyecto un archivo (collectibles.js). Este archivo será un
módulo propio, en el que debes construir una función (importar). Esta recibirá como
parámetro el nombre de la marca de las figuras coleccionables. Tendrá la responsabilidad
de leer el archivo en formato JSON y devolver un array de objetos de cada una de las
marcas que reciba.
*/
function importar(nombreMarca) {
  let dataObj = [];
  const path = './datos'
  const archivos = fs.readdirSync(path)
  for (let i = 0; i < archivos.length; i++) {
    let data = fs.readFileSync(`${path}/${archivos[i]}`)
    if (data.includes(`"marca": "${nombreMarca}"`)) {
      dataObj = JSON.parse(data);
      return dataObj
    }
  }

}
// importar('Hot Toys')
module.exports = importar;