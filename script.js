// Selección de elementos del DOM.
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".copiar");

// Botón de ejecución para la función de encriptación
function btnEncriptar(){
    // Validación de entrada
    if (textArea.value == "") {
        mensaje.value = "                          Parece que no \n                         escribiste nada. \n                                       :(";
    } else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        // Limpieza del área de texto
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        // Cambio de texto en el botón
        botonEncriptar.innerHTML = "¡encriptado!";
    }
}

/* Función de encriptación del texto con base en la clave:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat" */

function encriptar(stringEncriptado){
    // Definición de la matriz con base en los pares ordenados de la clave
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // Conversión de caracteres a minúsculas
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


// Botón de ejecución para la función de desencriptación
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    // Validación de entrada
    if (textoDesencriptado == textArea.value) {
        mensaje.value = "                Parece que no hay nada \n                     que desencriptar. \n                                       :(";
    } else{
        mensaje.value = textoDesencriptado;
        // Limpieza del área de texto
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        // Cambio de texto en el botón
        botonDesencriptar.innerHTML = "¡desencriptado!";
    }
    }
 
// Función de desencriptación
function desencriptar(stringDesencriptado){
    // Definición de la matriz con base en los pares ordenados de la clave
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // Conversión de caracteres a minúsculas
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

// Función de copiar
function copiarTexto(){
    // Validación de entrada
    if (mensaje.value == "") {
        mensaje.value = "                    Parece que no hay \n                      nada que copiar. \n                                       :(";
    } else{
        const textoACopiar = mensaje.value;
        if(textoACopiar) {
            navigator.clipboard.writeText(textoACopiar)
            botonCopiar.innerHTML = "¡copiado!";
        } else {
            alert("No hay texto para copiar");
        }
    }
}
