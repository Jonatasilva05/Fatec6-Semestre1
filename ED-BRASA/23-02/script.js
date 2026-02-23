function checkNum(){
    const input = document.getElementById('numero').value;
    const verif = document.getElementById('verificar');

    if(input === ''){
        alert("Campo invalido! Digite um valor");
    }
    else if(input < 0 ){
        console.log("Numero negativo")
    }
    else {
        console.log("Numero positivo")
    }
}

