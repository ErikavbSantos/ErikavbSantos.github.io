var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output-area");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto
    .replace(/a/g, "bg")
    .replace(/e/g, "da")
    .replace(/i/g, "ng")
    .replace(/o/g, "bn")
    .replace(/u/g, "fb")

    .replace(/A/g, "BG")
    .replace(/E/g, "DA")
    .replace(/I/g, "NG")
    .replace(/O/g, "BN")
    .replace(/U/g, "FB");

    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto
    .replace(/bg/g, "a")
    .replace(/da/g, "e")
    .replace(/ng/g, "i")
    .replace(/bn/g, "o")
    .replace(/fb/g, "u")

    .replace(/BG/g, "A")
    .replace(/DA/g, "E")
    .replace(/NG/g, "I")
    .replace(/BN/g, "O")
    .replace(/FB/g, "U");

    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {

    var textoCopy = document.getElementById('resultado');

    textoCopy.select();
    document.execCommand('copy');
}