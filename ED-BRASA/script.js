document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        let nome = document.getElementById('codigo').value;
        if (nome.trim() == 1) {
            alert("Chaves");
            event.preventDefault();
        }
        else if (nome.trim() == 2) {
            alert("Quico");
            event.preventDefault();
        }
        else if (nome.trim() == 3) {
            alert("Dona Florinda");
            event.preventDefault();
        }
        else if (nome.trim() == 4) {
            alert("Seu Madruga");
            event.preventDefault();
        }
        else{
            alert("Insira um codigo valido! Tente Novamente");
        }
    });