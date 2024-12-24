let listaNomes = [];
let listaNomeMostrar = listaNomes;

function adicionar() {
    // Obtém o nome do amigo a partir de um elemento HTML
    let getFriend = document.getElementById('nome-amigo').value;
    console.log(getFriend);
    if (getFriend == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    // Adiciona o nome do amigo à lista
    if (listaNomes.includes(getFriend)){
        alert('Este nome ja foi adicionado');
        return;
    }else{
    listaNomes.push(getFriend);

    // Atualiza a lista de amigos na interface
     document.getElementById('lista-amigos').textContent = listaNomes;

     document.getElementById('nome-amigo').value = '' ;
}
}
function sortear(){
    if (listaNomes.length < 2){
        alert('Coloque 2 nomes ou mais para sortear');
        return;
    }
    embaralha(listaNomes);
    let sorteio = document.getElementById('lista-sorteio');
    
    let i = 0; // Inicializa a variável i
    while (i < listaNomes.length) {
        if (i == listaNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i + 1] + '<br>';
        }
        i++; // Incrementa o índice
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    // Limpa a lista de amigos
    document.getElementById('lista-amigos').textContent = '';

    // Limpa a área do sorteio
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}