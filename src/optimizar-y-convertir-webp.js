const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const directory = path.join(__dirname, 'img'); //carpeta 'img' con todas las imágenes

fs.readdirSync(directory).forEach(file => {
  const inputPath = path.join(directory, file); //ruta de la imagen
  const baseName = path.parse(file).name;
  
  if (['.png', '.jpg'].includes(path.extname(file).toLowerCase())) {
    
    //tamaño peque
    sharp(inputPath)
      .resize(200) //a 200px de ancho
      .webp() //a webp
      .toFile(path.join(directory, `${baseName}-small.webp`)); //se guarda

    //tamaño medio
    sharp(inputPath)
      .resize(500)
      .webp()
      .toFile(path.join(directory, `${baseName}-medium.webp`));

    //tamaño grande
    sharp(inputPath)
      .resize(1000)
      .webp()
      .toFile(path.join(directory, `${baseName}-large.webp`));
  }
});