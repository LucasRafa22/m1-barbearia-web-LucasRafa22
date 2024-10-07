const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    let listaDeCortes = barbearia.cortes;
    for(i = 0; i < listaDeCortes.length; i++){
        if(id == listaDeCortes[i].id){
            return listaDeCortes[i];
        };
    };
    return 'Corte não encontrado';
};


function buscaBarbaPorId(id) {
    let listaDeCortes = barbearia.barbas;
    for(i = 0; i < listaDeCortes.length; i++){
        if(id == listaDeCortes[i].id){
            return listaDeCortes[i];
        };
    };
    return 'Barba não encontrada';
};


function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
        return 'Estamos abertos';
    };
    return 'Estamos fechados';
};

function retornaTodosCortes() {
    return barbearia.cortes
};

function retornaTodasBarbas() {
    return barbearia.barbas
};


function criaPedido(nomeCliente, corteId, barbaId) {
    let pedido= {};
    pedido.nome = nomeCliente;
    const corte = barbearia.cortes;
    const barba = barbearia.barbas;
    for(i = 0; i < corte.length; i++){
        if(corte[i].id === corteId){
            pedido.pedidoCorte = buscaCortePorId(corteId).tipo
            pedido.pedidoCortePreco = buscaCortePorId(corteId).valor
        };
    };

    for(i = 0; i < barba.length; i++){
        if(barba[i].id === corteId){
            pedido.pedidoBarba = buscaBarbaPorId(barbaId).tipo
            pedido.pedidoBarbaPreco = buscaBarbaPorId(barbaId).valor
        };
    };
    

    return pedido
};
console.log(criaPedido('Lucas', 2, 5));


function atualizarServico(lista, id, valor, tipo) {
    for(i = 0; i < lista.length; i++){
        if(id === lista[i].id){
            lista[i].valor = valor
            lista[i].tipo = tipo
        };
    };
    return lista
}; 

function calculaTotal(pedido) {
    let soma = 0
    soma += pedido.pedidoBarbaPreco
    soma += pedido.pedidoCortePreco
    return soma
};

console.log(calculaTotal(criaPedido('Lucas', 2, 5)))