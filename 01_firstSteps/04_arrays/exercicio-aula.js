const produto = {
  nome: 'Headset',
  preco: 250,
  marca: 'Sonora',
  estoque: 5,
};

const { nome, preco} = produto;
const {garantia = '3 meses'} = produto;
 console.log(nome, preco, garantia);