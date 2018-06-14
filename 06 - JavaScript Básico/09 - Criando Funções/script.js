function modificarCorpo(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');
    area.innerHTML = texto;
}

function modificarCorpoComParametro(parametro) {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');
    area.innerHTML = parametro + texto;
}