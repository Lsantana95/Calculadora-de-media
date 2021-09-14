function calculaNota () {

    var nota1 = parseInt(document.getElementById('nota1').value)
    var nota2 = parseInt(document.getElementById('nota2').value)
    var nota3 = parseInt(document.getElementById('nota3').value)
    var nota4 = parseInt(document.getElementById('nota4').value)

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = "" 

    var resultado = (nota1 + nota2 + nota3 + nota4) / 4

    var notaFixada = resultado.toFixed(1)

    if(resultado >= 6) {
       divResultado.innerHTML = "Sua nota é maior que 6, portanto voce foi aprovado!" + notaFixada
    }
    else {
        divResultado.innerHTML = "Sua nota é menor que 6, portanto voce foi reprovado!" + notaFixada
    }

  }