var painel,
//financeiro
contasapagar, 
pedidosareceber, 
pedidosrecebidos, 
compras, 
//administrativo
cadastro,
pedidos, 
vendas, 
estoque,
//produção
pedidosemabertos, 
pedidoemproducao,
pedidosentregue,
maodeaobra

window.onload = function(){
    painel = document.getElementById('painel')
    //Financeiro
    contasapagar = document.getElementById('contas-a-pagar')
    pedidosareceber = document.getElementById('pedidos-a-receber')
    pedidosrecebidos = document.getElementById('pedidos-recebidos')
    compras = document.getElementById('compras')

    //Administrativo
    cadastro = document.getElementById('cadastro')
    pedidos  = document.getElementById('pedidos')
    vendas  = document.getElementById('vendas')
    estoque = document.getElementById('estoque')

    //Produção
    pedidosemabertos = document.getElementById('pedidos-em-aberto') 
    pedidoemproducao = document.getElementById('pedido-em-producao')
    pedidosentregue = document.getElementById('pedidos-entregue')
    maodeaobra = document.getElementById('mao-de-obra')
   
    //adiconando insibilidade
    contasapagar.classList.add('invisible')
    pedidosareceber.classList.add('invisible')
    pedidosrecebidos.classList.add('invisible')
    compras.classList.add('invisible')

    cadastro.classList.add('invisible')
    pedidos .classList.add('invisible')
    vendas .classList.add('invisible')
    estoque.classList.add('invisible')

    pedidosemabertos.classList.add('invisible') 
    pedidoemproducao.classList.add('invisible')
    pedidosentregue.classList.add('invisible')
    maodeaobra.classList.add('invisible')



    //financeiro
    var btnPainel = document.getElementById('btn-painel')
    btnPainel.onclick = mostrarPainel

    var btnContasAPagar = document.getElementById('btn-contas-a-pagar')
    btnContasAPagar.onclick = mostrarContasAPagar

    var btnPedidosAReceber = document.getElementById('btn-pedidos-a-receber')
    btnPedidosAReceber.onclick = mostrarPedidosAReceber

    var btnPedidosRecebidos = document.getElementById('btn-pedidos-recebidos')
    btnPedidosRecebidos.onclick = mostrarPedidosRecebidos

    var btnCompras = document.getElementById('btn-compras')
    btnCompras.onclick = mostrarCompras

    var btnCadastro = document.getElementById('btn-cadastro')
    btnCadastro.onclick = mostrarCadastro

    var btnPedidos = document.getElementById('btn-pedidos')
    btnPedidos.onclick = mostrarPedidos
    
    var btnVendas = document.getElementById('btn-vendas')
    btnVendas.onclick = mostrarVendas
    
    var btnEstoque = document.getElementById('btn-estoque')
    btnEstoque.onclick = mostrarEstoque
    
    var btnPedidosEmAbertos = document.getElementById('btn-pedidos-em-aberto') 
    btnPedidosEmAbertos.onclick = mostrarPedidosEmAberto

    var btnPedidoEmProducao = document.getElementById('btn-pedido-em-producao')
    btnPedidoEmProducao.onclick = mostrarPedidoEmProducao

    var btnPedidosEntregue = document.getElementById('btn-pedidos-entregue')
    btnPedidosEntregue.onclick = mostrarPedidosEntregue

    var btnMaoDeaObra = document.getElementById('btn-mao-de-obra')
    btnMaoDeaObra.onclick = mostrarMaoDeObra
    
    
   
}

function mostrarPainel(){
    painel.classList.remove('invisible')
    contasapagar.classList.add('invisible')
    pedidosareceber.classList.add('invisible')
    pedidosrecebidos.classList.add('invisible')
    compras.classList.add('invisible')

    cadastro.classList.add('invisible')
    pedidos .classList.add('invisible')
    vendas .classList.add('invisible')
    estoque.classList.add('invisible')

    pedidosemabertos.classList.add('invisible') 
    pedidoemproducao.classList.add('invisible')
    pedidosentregue.classList.add('invisible')
    maodeaobra.classList.add('invisible')
}


function mostrarContasAPagar(){
    contasapagar.classList.remove('invisible')
    painel.classList.add('invisible')
    pedidosareceber.classList.add('invisible')
    pedidosrecebidos.classList.add('invisible')
    compras.classList.add('invisible')
}

function mostrarPedidosAReceber(){
    pedidosareceber.classList.remove('invisible')
    contasapagar.classList.add('invisible')
    painel.classList.add('invisible')
    pedidosrecebidos.classList.add('invisible')
    compras.classList.add('invisible')
}

function mostrarCompras(){
    compras.classList.remove('invisible')
    pedidosareceber.classList.add('invisible')
    contasapagar.classList.add('invisible')
    painel.classList.add('invisible')
    pedidosrecebidos.classList.add('invisible')
}

function mostrarPedidosRecebidos(){
    pedidosrecebidos.classList.remove('invisible')
    contasapagar.classList.add('invisible')
    painel.classList.add('invisible')
    pedidosareceber.classList.add('invisible')
    compras.classList.add('invisible')
}

function mostrarCadastro(){
    cadastro.classList.remove('invisible')
    pedidos .classList.add('invisible')
    vendas .classList.add('invisible')
    estoque.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarPedidos(){
    pedidos.classList.remove('invisible')
    cadastro.classList.add('invisible')
    vendas.classList.add('invisible')
    estoque.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarVendas(){
    vendas.classList.remove('invisible')
    pedidos.classList.add('invisible')
    cadastro.classList.add('invisible')
    estoque.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarEstoque(){
    estoque.classList.remove('invisible')
    pedidos.classList.add('invisible')
    cadastro.classList.add('invisible')
    vendas.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarPedidosEmAberto(){
    pedidosemabertos.classList.remove('invisible') 
    pedidoemproducao.classList.add('invisible')
    pedidosentregue.classList.add('invisible')
    maodeaobra.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarPedidoEmProducao(){
    pedidoemproducao.classList.remove('invisible')
    pedidosemabertos.classList.add('invisible') 
    pedidosentregue.classList.add('invisible')
    maodeaobra.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarPedidosEntregue(){
    pedidosentregue.classList.remove('invisible')
    pedidosemabertos.classList.add('invisible') 
    pedidoemproducao.classList.add('invisible')
    maodeaobra.classList.add('invisible')
    painel.classList.add('invisible')
}

function mostrarMaoDeObra(){
    maodeaobra.classList.remove('invisible')
    pedidosentregue.classList.add('invisible')
    pedidosemabertos.classList.add('invisible') 
    pedidoemproducao.classList.add('invisible')
    painel.classList.add('invisible')
}
