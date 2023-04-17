var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output-area");

function criptografar() {
    var str = textInput.value;

    var texto = str.toUpperCase();
    console.log(texto);

    var resultCripto = texto
    .replace(/A/g, "⏃")
    .replace(/B/g, "⏚")
    .replace(/C/g, "☊")
    .replace(/D/g, "⎅")
    .replace(/E/g, "⟒")

    .replace(/F/g, "⎎")
    .replace(/G/g, "☌")
    .replace(/H/g, "⊑")
    .replace(/I/g, "⟟")
    .replace(/J/g, "⟊")

    .replace(/K/g, "☍")
    .replace(/L/g, "⌰")
    .replace(/M/g, "⋔")
    .replace(/N/g, "⋏")
    .replace(/O/g, "⍜")
   
    .replace(/P/g, "⌿")
    .replace(/Q/g, "⍾")
    .replace(/R/g, "⍀")
    .replace(/S/g, "⌇")
    .replace(/T/g, "⏁")
   
    .replace(/U/g, "⎍")
    .replace(/V/g, "⎐")
    .replace(/W/g, "⍙")
    .replace(/X/g, "⌖")
    .replace(/Y/g, "⊬")

    .replace(/Z/g, "⋉");

    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var str = textInput.value;

    var texto = str.toUpperCase();
    console.log(texto);

    var resultDescripto = texto
    .replace(/⏃/g, "A")
    .replace(/⏚/g, "B")
    .replace(/☊/g, "C")
    .replace(/⎅/g, "D")
    .replace(/⟒/g, "E")
    
    .replace(/⎎/g, "F")
    .replace(/☌/g, "G")
    .replace(/⊑/g, "H")
    .replace(/⟟/g, "I")
    .replace(/⟊/g, "J")

    .replace(/☍/g, "K")
    .replace(/⌰/g, "L")
    .replace(/⋔/g, "M")
    .replace(/⋏/g, "N")
    .replace(/⍜/g, "O")
   
    .replace(/⌿/g, "P")
    .replace(/⍾/g, "Q")
    .replace(/⍀/g, "R")
    .replace(/⌇/g, "S")
    .replace(/⏁/g, "T")
   
    .replace(/⎍/g, "U")
    .replace(/⎐/g, "V")
    .replace(/⍙/g, "W")
    .replace(/⌖/g, "X")
    .replace(/⊬/g, "Y")

    .replace(/⋉/g, "Z");

    document.getElementById('output-area').innerHTML = '<textarea readonly id="resultado">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {

    var textoCopy = document.getElementById('resultado');

    textoCopy.select();
    document.execCommand('copy');
}
