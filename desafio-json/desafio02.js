// Lendo os dados do pedido
const pedido = {
  cliente: {
    nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
    endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
  },
  id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
};

// Lendo o telefone do cliente
pedido.cliente.telefone = gets(); // Lê a quarta linha da "Entrada": Telefone do Cliente.

// Exibindo as informações do cliente e do pedido
const saida = `Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
ID: ${pedido.id}
Tel: ${pedido.cliente.telefone}`;

// Imprimindo a saída formatada
console.log(saida);

