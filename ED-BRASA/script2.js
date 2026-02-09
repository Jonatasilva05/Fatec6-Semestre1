document.getElementById('form2').addEventListener('submit', function(event) {
        let valor = document.getElementById('codigo2').value;
        if (valor.trim() % 2 === 0) {
            alert("Par");
            event.preventDefault();
        }
        else{
            alert("Impar");
        }
    });