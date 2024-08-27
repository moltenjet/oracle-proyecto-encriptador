const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".copiar");


function btnEncriptar(){
    if (textArea.value == "") {
        mensaje.value = "                          Parece que no \n                         escribiste nada. \n                                       :(";
    } else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        botonEncriptar.innerHTML = "¡encriptado!";
    }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    if (textoDesencriptado == textArea.value) {
        mensaje.value = "                Parece que no hay nada \n                     que desencriptar. \n                                       :(";
    } else{
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        botonDesencriptar.innerHTML = "¡desencriptado!";
    }
    }
 

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiarTexto(){
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
