var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output-area");

function criptografar() {
    var str = textInput.value;

    var texto = str.toLowerCase();
    console.log(texto);

    var resultCripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    
    .replace(/á/g, "ai")
    .replace(/à/g, "ai")
    .replace(/â/g, "ai")
    .replace(/ã/g, "ai")
    
    .replace(/é/g, "enter")
    .replace(/è/g, "enter")
    .replace(/ê/g, "enter")
    
    .replace(/í/g, "imes")
    .replace(/ï/g, "imes")
    
    .replace(/ó/g, "ober")
    .replace(/ô/g, "ober")
    .replace(/õ/g, "ober")
    .replace(/ö/g, "ober")
    
    .replace(/ú/g, "ufat")
    
    .replace(/çñ/g, "c")
    
    .replace(/ñ/g, "n");
    
    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var str = textInput.value;

    var texto = str.toLowerCase();
    console.log(texto);

    var resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {

    var textoCopy = document.getElementById('resultado');

    textoCopy.select();
    document.execCommand('copy');
}
