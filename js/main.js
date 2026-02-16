/************************************************************
 * Nombre del programa: Dibujo básico en Canvas
 * Lenguaje: JavaScript
 * API utilizada: HTML5 Canvas (contexto 2D)
 * 
 * Descripción:
 * Este programa utiliza la API Canvas de HTML5 para dibujar
 * un rectángulo relleno de color azul dentro de un lienzo
 * (canvas). El tamaño del canvas se ajusta dinámicamente
 * para ocupar el 50% del ancho y el 50% del alto de la
 * pantalla del usuario.
 ************************************************************/

/* =========================================================
   OBTENCIÓN DEL ELEMENTO CANVAS
   ========================================================= */

// Se obtiene el elemento <canvas> del documento HTML
var canvas = document.getElementById("lienzo");

/* =========================================================
   CONFIGURACIÓN DEL TAMAÑO DEL CANVAS
   ========================================================= */

// Se establece el ancho del canvas al 50% del ancho de la pantalla
canvas.width = window.innerWidth /2;

// Se establece el alto del canvas al 50% del alto de la pantalla
canvas.height = window.innerHeight /2;

/* =========================================================
   OBTENCIÓN DEL CONTEXTO DE DIBUJO
   ========================================================= */

// Se obtiene el contexto de renderizado en 2D del canvas
var ctx = canvas.getContext("2d");

/* =========================================================
   CONFIGURACIÓN DEL ESTILO DE DIBUJO
   ========================================================= */

// Se establece el color de relleno (azul)
ctx.fillStyle = "rgb(25, 0, 255)";

/* =========================================================
   DIBUJO DE FIGURAS
   ========================================================= */

// Se dibuja un rectángulo relleno dentro del canvas
// El tamaño se adapta al nuevo tamaño del lienzo
ctx.fillRect(10, 10, canvas.width - 200, canvas.height - 200);
 