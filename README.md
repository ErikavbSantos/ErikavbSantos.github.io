# Codificador de Texto - Challenge ONE

[Clique aqui para ver o codificador](https://erikavbsantos.github.io)


## Descrição

Este é um projeto que criptografa/descriptografa textos, feito para um challenge da ONE(Oracle Next Education) e o curso de lógica de programação.

As "chaves" de criptografia utilizadas foram:<br>
<b>
A letra "e" é convertida para "enter"<br>
A letra "i" é convertida para "imes"<br>
A letra "a" é convertida para "ai"<br>
A letra "o" é convertida para "ober"<br>
A letra "u" é convertida para "ufat"
</b>

Abaixo mostro um exemplo de como foi feita a substituição, utilizando a função replace:
```html
.replace(/e/g, "enter");
```

## Requisitos

- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:<br>
<b>
"gato" => "gaitober"<br>
gaitober" => "gato"
</b>

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções.
- O resultado deve ser exibido na tela.

## Extras

- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do <b>ctrl+C</b> ou da opção <b>"copiar"</b> do menu dos aplicativos.
