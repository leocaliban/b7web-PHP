//criando um array
var lista = ['Celular', 'Notebook', 'Televisão', 'Monitor'];

//busca o index do 'Monitor' na lista.
lista.indexOf('Monitor');
//o retorno é o número do índice do elemento buscado, se não encontrar este elemento na lista é retornado -1

//tranforma o array em uma string contendo todos os seus elementos separando cada um com uma ', '
lista.join(", ");

//remove o último elemento do array, e retorna ele.
lista.pop();

//remove o primeiro elemento do array, e retorna ele.
lista.shift();

//adiciona um elemento no fim array, retorna a posição em que ele foi adicionado.
lista.push("Tapete");