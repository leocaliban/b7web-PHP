function operacao(param){
    var campo1 = parseInt(document.getElementById('campo1').value);
    var campo2 = parseInt(document.getElementById('campo2').value);
    var resultado;
    if(param == 'som'){
        resultado = campo1 + campo2;
    }
    else if(param == 'sub'){
        resultado = campo1 - campo2;
    }
    else if(param == 'mult'){
        resultado = campo1 * campo2;
    }
    else if(param == 'div'){
        resultado = campo1 / campo2;
    }
    alert(resultado);
}