/*

Desafio
Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.

Entrada
A entrada do seu código será os valores (nome e avaliação) dos seus objetos JSON, contendo informações necessárias sobre cada restaurante. Cada objeto terá as seguintes propriedades:

nome: o nome do restaurante, representado por uma string;
avaliacao: a avaliação média do restaurante, representado por um número de 0 a 5.
Saída
A saída do seu código será o nome e a avaliação do restaurante melhor avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a virgula, conform o exemplo a seguir:
Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}

Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	
DIO
5.0
Feijuca
4.5	

Saída
Restaurante: DIO, Avaliação: 5.0

Entrada
Bar do Zé  
3.5
Pizza Boa
4.2	

Saída
Restaurante: Pizza Boa, Avaliação: 4.2

Entrada
Pizza Mania
4.0
Sabor Oriental
4.0	

Saída
Restaurante: Pizza Mania, Avaliação: 4.0

*/

const restaurantes = [
  {
    nome: gets(), 
    avaliacao: parseFloat(gets())
  },
  {
    nome: gets(), 
    avaliacao: parseFloat(gets())
  }
];

// Encontrando o restaurante com a melhor avaliação
const restauranteMelhorAvaliacao = restaurantes.reduce((restauranteAtual, restauranteProximo) => {
  return restauranteProximo.avaliacao > restauranteAtual.avaliacao ? restauranteProximo : restauranteAtual;
});

// Imprimindo a saída de acordo com o enunciado do desafio
console.log(`Restaurante: ${restauranteMelhorAvaliacao.nome}, Avaliação: ${restauranteMelhorAvaliacao.avaliacao.toFixed(1)}`);

