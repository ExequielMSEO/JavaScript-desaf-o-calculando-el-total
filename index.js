// Variables y selectores
const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnIncrementar = document.querySelector("#botonmas");
const btnDecrementar = document.querySelector("#botonmenos");

// Inicializar valores
let cantidad = 0;
precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
valorTotalSpan.innerHTML = 0;

// Función para actualizar el total
function actualizarTotal() {
    const total = precio * cantidad;
    valorTotalSpan.innerHTML = total;
}

// Evento para incrementar cantidad
btnIncrementar.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
});

// Evento para decrementar cantidad
btnDecrementar.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
});