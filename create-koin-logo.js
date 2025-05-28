const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

// Función para convertir el SVG a PNG
async function convertSvgToPng() {
  const canvas = createCanvas(150, 150);
  const ctx = canvas.getContext("2d");
  
  // Dibuja el círculo exterior negro
  ctx.beginPath();
  ctx.arc(75, 75, 70, 0, Math.PI * 2);
  ctx.fillStyle = "#333333";
  ctx.fill();
  
  // Dibuja el espacio blanco entre círculos
  ctx.beginPath();
  ctx.arc(75, 75, 60, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  
  // Dibuja el "Pac-Man" amarillo
  ctx.beginPath();
  ctx.moveTo(75, 75);
  ctx.arc(75, 75, 60, 0.25 * Math.PI, 1.75 * Math.PI);
  ctx.lineTo(75, 75);
  ctx.fillStyle = "#FFC233";
  ctx.fill();
  
  // Guarda la imagen como PNG
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./images/koin-logo.png", buffer);
  console.log("Logo de Koin creado como PNG");
}

// Como no podemos usar la biblioteca canvas en este entorno, vamos a crear el PNG directamente
// Vamos a crear una representación visual sencilla del logo

function createSimpleLogo() {
  // Crear un círculo negro con un círculo blanco dentro y un pac-man amarillo
  const canvas = createCanvas(150, 150);
  const ctx = canvas.getContext("2d");
  
  // Fondo transparente
  ctx.clearRect(0, 0, 150, 150);
  
  // Círculo exterior negro
  ctx.beginPath();
  ctx.arc(75, 75, 70, 0, Math.PI * 2);
  ctx.fillStyle = "#333333";
  ctx.fill();
  
  // Círculo blanco (espacio entre círculos)
  ctx.beginPath();
  ctx.arc(75, 75, 60, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  
  // Pacman amarillo
  ctx.beginPath();
  ctx.moveTo(75, 75);
  ctx.arc(75, 75, 60, 0.25 * Math.PI, 1.75 * Math.PI);
  ctx.lineTo(75, 75);
  ctx.fillStyle = "#FFC233";
  ctx.fill();
  
  // Guardar como PNG
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./images/koin-logo.png", buffer);
  console.log("Logo de Koin creado como PNG");
}

try {
  convertSvgToPng();
} catch (error) {
  console.error("Error al convertir SVG a PNG:", error);
}
