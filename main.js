// const nomeProduto = "Casaco Branco";
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = 'product-1.jpg';

const catalogo = [
    {
        id: 1,
        marca: "Zara",
        nome: "Camisa Larga com Bolsos",        
        preco: 70,
        imagem: "product-1.jpg",
        feminino: false, 
    },

    {
        id: 2,
        marca: "Zara",
        nome: "Casaco Preto com La",        
        preco: 85,
        imagem: "product-2.jpg",
        feminino: true, 
    },

    {
        id: 3,
        marca: "Zara",
        nome: "Jaqueta com Efeito Camurca",        
        preco: 60,
        imagem: "product-3.jpg",
        feminino: false, 
    },

    {
        id: 4,
        marca: "Zara",
        nome: "Sobretudo em Mescla de La",        
        preco: 160,
        imagem: "product-4.jpg",
        feminino: false, 
    },

    {
        id: 5,
        marca: "Zara",
        nome: "Camisa Larga Acolchoada de Veludo Cotele",        
        preco: 110,
        imagem: "product-5.jpg",
        feminino: false, 
    },

    {
        id: 6,
        marca: "Zara",
        nome: "Casaco de La com Botoes",        
        preco: 170,
        imagem: "product-6.jpg",
        feminino: true, 
    },

    {
        id: 7,
        marca: "Zara",
        nome: "Casaco com Botoes",        
        preco: 75,
        imagem: "product-7.jpg",
        feminino: true, 
    },

    {
        id: 8,
        marca: "Zara",
        nome: "Colete Comprido com cinto",        
        preco: 88,
        imagem: "product-8.jpg",
        feminino: true, 
    },
];


for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto-1">
<img 
    src="./assets/img/${produtoCatalogo.imagem}" 
    alt="Produto 1" 
    style="height: 300px" 
/>
<p class='marca'>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Add Carrinho</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;


}

