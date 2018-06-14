function adicionarBola(){
    var bola = document.createElement('div');
    bola.setAttribute('class', 'bola');

    var posicao1 = Math.floor(Math.random() * 500);
    var posicao2 = Math.floor(Math.random() * 400);

    bola.setAttribute('style', 'left:' + posicao1 + 'px;top:' + posicao2 + 'px;');

    bola.setAttribute('onclick', 'estourar(this)');

    document.body.appendChild(bola);
}

function estourar(objeto){
    document.body.removeChild(objeto);
}

function iniciar(){
    setInterval(adicionarBola, 2000);
}

