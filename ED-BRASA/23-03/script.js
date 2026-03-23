let mostrarMensagem = function(){
        document.write("Olá")
    }
    mostrarMensagem()

let funcao = function(){
        somar(1, 2)
    }
    function somar(p1, p2){
        let res = p1 + p2
        document.write("<br> A soma é: " + res)
    }
    funcao()