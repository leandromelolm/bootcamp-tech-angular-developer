/*

Desafio
Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o tipo de comida do pedido mais próximo.

Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido (nome, tipo e distância).

Entrada
 A entrada consiste em uma lista com 3 pedidos, os quais terão as seguintes propriedades:

nome: o nome do cliente, representado por uma string;
tipo: o tipo de comida do restaurante, representado por uma string.
distancia: a distância em quilometros do pedido até o restaurante, representado por um valor de 0 a 15.
Saída
O programa deve exibir no console um texto contendo o nome do cliente e o tipo do pedido mais próximo encontrado na lista de pedidos. Conforme o exemplo abaixo:

O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada
Rafael
Massa
3.5
Julia
Arabe
4.2
Carla
Hamburguer
2.0	

Saída
O pedido mais próximo é o de Carla, do tipo Hamburguer

Entrada
João
Pizza
2.5
Pedro
Comida Japonesa
3.2
Ana
Sorvete
2.0	

Saída
O pedido mais próximo é o de Ana, do tipo Sorvete

Entrada
Renan
Risoto
2.8
Fernanda
Bolo
1.2
Arthur
Esfiha
4.9	O 

Saída
pedido mais próximo é o de Fernanda, do tipo Bolo

*/



const pedidos = [
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  },
  { 
    nome: gets(), 
    tipo: gets(), 
    distancia: parseFloat(gets())
  }
];

// Encontrando o pedido com a menor distância
const pedidoMaisProximo = pedidos.reduce((pedidoAtual, pedidoProximo) => {
  return pedidoProximo.distancia < pedidoAtual.distancia ? pedidoProximo : pedidoAtual;
});

// Imprimindo a saída de acordo com o enunciado do desafio
console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);

