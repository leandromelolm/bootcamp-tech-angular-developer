//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

// Percorrendo o array de itens do pedido e calculando o valor total:
let total = 0;
for (const item of pedido.itens) {
  total += item.preco;
}
total += pedido.taxaEntrega;

// Imprimindo a saída no padrão solicitado:
console.log(`Pedido: ${pedido.cliente}`);
console.log(`Endereco de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${total.toFixed(2)}`);

