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
let textoDesencriptado = [];
let cadenaTextoEncriptado;

// ********* Proceso de Encriptar texto *********

function encriptarTexto() {
    textoEncriptar = (document.getElementById('textoProcesar').value).toLowerCase().split('');
    
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
    document.getElementById('textoProcesado__contenidoMensaje').value = cadenaTextoEncriptado;
    textoEncriptado = [];
    mostrarMensaje();
    habilitarBotones();
}

function mostrarMensaje() {
    document.getElementById('procesado').style.display = 'none';
    document.getElementById('textoProcesado').style.display = 'inline';
}


// ********* Proceso de Desencriptar texto *********
let busqueda = ['ai', 'enter', 'imer', 'ober', 'ufat'];

function desencriptarTexto() {
    textoDesencriptar = (document.getElementById('textoProcesar').value);   
    let resultado; 

    busqueda.map(function(codBuscar) {
        switch (codBuscar) {
            case 'ai':
                resultado = textoDesencriptar.replace(/ai/g, 'a'); 
                textoDesencriptar = resultado;
                break;
            case 'enter':
                resultado = textoDesencriptar.replace(/enter/g, 'e');
                textoDesencriptar = resultado;  
                break;    
            case 'imer':
                resultado = textoDesencriptar.replace(/imes/g, 'i');
                textoDesencriptar = resultado;  
                break;
            case 'ober':
                resultado = textoDesencriptar.replace(/ober/g, 'o');
                textoDesencriptar = resultado; 
                break;
            case 'ufat':
                resultado = textoDesencriptar.replace(/ufat/g, 'u'); 
                textoDesencriptar = resultado;
                break;            
        }
    });
    document.getElementById('textoProcesado__contenidoMensaje').value = resultado;
    mostrarMensaje();
    habilitarBotones();
}

// ********* Proceso de copiar texto al portapapeles *********

async function copiarMensaje() {    
    let mensajeCopiar = document.getElementById('textoProcesado__contenidoMensaje').value;    
    try {
        await navigator.clipboard.writeText(mensajeCopiar);
        document.getElementById('textoProcesado__ok').style.display = 'inline';
    } catch (err) {
        console.error('Error al copiar: ', err);        
    }    
}

// ********* Finalizar proceso de encriptar y desencriptar mensaje *********

function finalizarProceso() {    
    document.getElementById('textoProcesar').value = " ";
    document.getElementById('textoProcesado__contenidoMensaje').value = " ";
    document.getElementById('procesado').style.display = 'inline';
    document.getElementById('textoProcesado').style.display = 'none';
    document.getElementById('textoProcesado__ok').style.display = 'none';
    habilitarBotones();
}
// ********* Habilitar y deshabilitar botones para controlar funcionalidad *********

function habilitarBotones() {
    document.getElementById("btn-encriptar").classList.toggle("activo");
    document.getElementById("btn-desencriptar").classList.toggle("activo");     
}