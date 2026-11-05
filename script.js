const produtos = [
  { id: 1, nome: "Teclado", precoCentavos: 12000, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", precoCentavos: 6500, estoque: 0, ativo: true },
  { id: 3, nome: "Cabo USB", precoCentavos: 2500, estoque: 10, ativo: true },
  { id: 4, nome: "Cabo HDMI", precoCentavos: 4000, estoque: 8, ativo: false },
  { id: 5, nome: "Webcam", precoCentavos: 18000, estoque: 2, ativo: true },
];

const pedido = {
  id: 1,
  estado: "rascunho",
  itens: [
    { produtoId: 1, quantidade: 2 },
    { produtoId: 3, quantidade: 3 },
  ],
};

// Produtos ativos com estoque disponível.
const produtosDisponiveis = produtos.filter((item) => {
  if (item.ativo === true && item.estoque > 0) {
    return item;
  }
});

// Busca pelo nome completo.
function buscarPorNome(produto) {
  const encontrados = produtos.filter((item) => {
    if (produto.trim().toLowerCase() === item.nome.trim().toLowerCase()) {
      return item;
    }
  });

  if (encontrados.length === 0) {
    console.log("Item não encontrado");
  }

  return encontrados;
}

// Busca pelo ID, retornando uma array.
function buscarPorId(id) {
  if (typeof id !== "number") {
    console.log("Digite um numero !");
    return;
  }

  const idEncontrados = produtos.filter((item) => {
    if (id === item.id) {
      console.log("O item foi encontrado !");
      return item;
    }
  });

  if (idEncontrados.length === 0) {
    console.log("Item não encontrado");
  }

  return idEncontrados;
}

// Ordenação sem alterar a ordem da array original.
function ordenarPorPreco(ordem) {
  if (
    ordem.trim().toLowerCase() !== "crescente" &&
    ordem.trim().toLowerCase() !== "decrescente"
  ) {
    console.log("Operação invalida");
    return [];
  }

  const checkOrdem = produtos.toSorted((a, b) => {
    if (ordem.trim().toLowerCase() === "crescente") {
      return a.precoCentavos - b.precoCentavos;
    } else if (ordem.trim().toLowerCase() === "decrescente") {
      return b.precoCentavos - a.precoCentavos;
    }
  });

  return checkOrdem;
}

function validarPedido(pedido) {
  if (pedido.itens.length === 0) {
    console.log("Pedido sem itens");
  } else if (pedido.itens.length > 0) {
    console.log("Temos pedidos!");
  }
  if (pedido.estado !== "rascunho") {
    console.log("Pedido não está em rascunho");
  }

  pedido.itens.forEach((element) => {
    produtos.find((item) => {
      if (element.produtoId === item.id) {
        console.log("Produto encontrado:", element.produtoId);
      }
    });
  });
}

validarPedido(pedido);
