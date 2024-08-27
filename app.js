document.addEventListener("DOMContentLoaded", function () {
  const tamanoVentana = document.getElementById("tamaño-ventana");

  function actualizarTamanoVentana() {
    tamanoVentana.textContent = `Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`;
  }

  window.addEventListener("resize", actualizarTamanoVentana);

  actualizarTamanoVentana(); // Muestra el tamaño inicial
});
