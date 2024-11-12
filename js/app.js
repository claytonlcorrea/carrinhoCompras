let totalGeral = 0;
document.getElementById('valor-total').textContent = `R$ 0,00`;
document.getElementById('lista-produtos').innerHTML = '';

function adicionar(){
    // pegar valores, produto - valor - quantidade
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let nomeProduto = produto.split('-')[0];
    let precoUnitario = produto.split('R$')[1];

    // calcular subTotal
    let precoProdutos = quantidade * precoUnitario;

    const precoProdutosFormatado = precoProdutos.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    
    //adicionar produto carrinho
    let listaProdutos = document.getElementById('lista-produtos');

    if(document.getElementById('quantidade').value == ""){
        alert('Por favor, preencha o campo Qtde.')
    }else if (document.getElementById('quantidade').value <= 0){
        alert('Quantidade deve ser maior que zero.')
    }
    else{
        listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-preto">${quantidade}x</span> ${nomeProduto} <span class="texto-preto">${precoProdutosFormatado}</span>
        </section>`

        totalGeral = totalGeral + precoProdutos;
        let valorTotal = document.getElementById('valor-total');
    
        const totalFormatado = totalGeral.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    valorTotal.textContent = totalFormatado;
    }

    document.getElementById('quantidade').value = ''
}

function limpar(){
    document.getElementById('produto').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('valor-total').textContent = 'R$ 0,00'
    document.getElementById('lista-produtos').innerHTML = '';
    totalGeral = 0
}