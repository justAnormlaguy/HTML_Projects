$(document).ready(function () {
    const produtos = JSON.parse(localStorage.getItem("bancoDados")) || [];
    const data = produtos.map(produto => ({
        "id": produto.id,
        "nome": produto.nome,
        "preco": produto.valor,
        "descricao": produto.descricao 
    }));

    $("#card-produtos").empty();

    data.forEach(produto => {
        var produtoHtml = `
            <div data-id="${produto.id}" class="card-element">
            <div class="texto-elemento">
                <p>${produto.nome}</p>    
            </div>
            <div class="preco-elemento">
                    <p>R$ ${produto.preco}</p>
                    </div>
                <div class="descricao-element">
                    <span>${produto.descricao}</span> 
                </div>
                <div class="botao-elemento">
                    <button class="add-to-cart" data-produto='${JSON.stringify(produto)}'>Adicionar ao Carrinho</button>
                </div>
            </div>`;
        $("#card-produtos").append(produtoHtml);
        console.log("Produto adicionado:", produto);
        console.log($("card-produtos").html()); 
    });

    $(".add-to-cart").on("click", function () {
        const produto = $(this).data('produto');
        const carrinho = JSON.parse(localStorage.getItem('carrinhoCompra')) || []; 
        carrinho.push(produto);
        localStorage.setItem('carrinhoCompra', JSON.stringify(carrinho)); 
        console.log("Produto adicionado ao carrinho:", produto);
        alert('Produto adicionado!')
        // Update cart HTML
        const cartHtml = `
            <div class="cart-item" data-id="${produto.id}">
                <p>${produto.nome}</p>
                <p>R$ ${produto.preco}</p>
                <button class="delete-item">Excluir</button>
            </div>
        `;
        $("#cart-products").append(cartHtml);
        updateCartTotal();
    });

    function updateCartTotal() {
        const carrinho = JSON.parse(localStorage.getItem('carrinhoCompra')) || [];
        let total = 0;
        carrinho.forEach(produto => {
            if (produto.preco && !isNaN(parseFloat(produto.preco))) {
                total += parseFloat(produto.preco);
            }
        });
        document.getElementById('cart-total').innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }

    // Delete item from cart
    $(document).on("click", ".delete-item", function () {
        const itemId = $(this).closest(".cart-item").data("id");
        const carrinho = JSON.parse(localStorage.getItem('carrinhoCompra')) || []; 
        const index = carrinho.findIndex(item => item.id === itemId);
        if (index!== -1) {
            carrinho.splice(index, 1);
            localStorage.setItem('carrinhoCompra', JSON.stringify(carrinho)); 
            $(this).closest(".cart-item").remove();
            console.log("Item removido do carrinho:", itemId);
            updateCartTotal();
        }
    });

    // Delete all items from cart
    $(".DeleteAll").on("click", function () {
        localStorage.removeItem('carrinhoCompra');
        $("#cart-products").empty();
        console.log("Todos os itens removidos do carrinho");
        updateCartTotal();
    });

    updateCartTotal(); // Call updateCartTotal initially to display the initial total
});