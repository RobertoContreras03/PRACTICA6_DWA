let parrafo = document.getElementById("miParrafo");
console.log(parrafo.textContent); //Imprime el contenido de texto del parrafo con ID "miParrafo"

//Cambiar el contenido del parrafo cuando se hace clic en el boton

let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    parrafo.textContent = "Texto Actualizado";
    console.log(parrafo.textContent); //Imprime : Texto Actualizado
});