function apertouMouse(){
    console.log("APERTOU O MOUSE!");
}

function soltouMouse(){
    console.log("SOLTOU!");
}

function mouseEmCima(){
    console.log("Mouse sobre o botão.");
}

function mouseSaiuDeCima(){
    console.log("Mouse saiu de cima do botão.");
}

function mouseMovidoNoBotao(){
    console.log("Mouse se moveu dentro do botão.");
}

function clicar(){
    console.log("Botão clicado.");
}

function clicarComDireito(){
    console.log("Botão clicado com direito.");

    return false;
}

function clickDuplo(){
    console.log("Botão clicado com dois clicks.");
}

function mudarCor(){
    var objeto = document.getElementById('minha-div');

    objeto.setAttribute('class', 'medida divColorRed');
}