/*
Desafio
O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

Entrada
O programa receberá os dados necessários para criar dois Clientes com seu respectivo Item de Pedido para comparação:

Cliente 1:
Nome (string): nome do primeiro cliente.
Nome do Item (string): nome do item de pedido selecionado para o primeiro cliente.
Preço do Item (number): preço do item de pedido selecionado para o primeiro cliente.
Cliente 2:
Nome (string): nome do segundo cliente.
Nome do Item (string): nome do item de pedido selecionado para o segundo cliente.
Preço do Item (number): preço do item de pedido selecionado para o segundo cliente.
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

Saída
Se todos os dados dos clientes forem estritamente iguais, o programa deverá retornar a mensagem:
Os pedidos são iguais

Caso contrário, o programa deverá retornar a mensagem:
Os pedidos são diferentes

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	
Renan
Massa
45.0
Bianca
Kibe
8.0	

Saída
Os pedidos são diferentes

Entrada
Rafael
Pizza de calabresa
25.0
Rafael
Pizza de calabresa
25.0	

Saída
Os pedidos são iguais

Entrada
Aline
Hamburguer
15.0
Camila
Pizza
15.0	

Saída
Os pedidos são diferentes

*/


// JSON do Cliente 1
const cliente1 = { 
  nome: gets(), 
  item: gets(), 
  preco: parseFloat(gets())
};

// JSON do Cliente 2
const cliente2 = { 
  nome: gets(), 
  item: gets(), 
  preco: parseFloat(gets()) 
};

// Comparando os JSONs dos Clientes
const saoIguais = JSON.stringify(cliente1) === JSON.stringify(cliente2);

// Imprimindo a saída conforme o enunciado do desafio
if (saoIguais) {
  console.log("Os pedidos são iguais");
} else {
  console.log("Os pedidos são diferentes");
}

