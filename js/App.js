/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let textoEncriptar = [];
let textoEncriptado = [];
let textoDesencriptar = [];
let textoDesencriptado = []
let cadenaTextoEncriptado;


function encriptarTexto() {

    textoEncriptar = (document.getElementById('textoProcesar').value).split('');    
    
    textoEncriptar.map(function(letraBuscar) {
        
        switch (letraBuscar) {
            case 'a':
                textoEncriptado.push('ai');
                break;
            case 'e':
                textoEncriptado.push('enter');
                break;    
            case 'i':
                textoEncriptado.push('imes');
                break;
            case 'o':
                textoEncriptado.push('ober');
                break;
            case 'u':
                textoEncriptado.push('ufat');
                break;
            default:
                textoEncriptado.push(letraBuscar);
                break;
        }
    });
    
    cadenaTextoEncriptado = textoEncriptado.join('');
    document.getElementById('textoProcesado__contenidoMensaje').innerHTML = cadenaTextoEncriptado;
    mostrarMensajeEncriptado();
}

function mostrarMensajeEncriptado() {
    document.getElementById('procesado').style.display = 'none';
    document.getElementById('textoProcesado').style.display = 'inline';
}

function desencriptarTexto() {
    
}