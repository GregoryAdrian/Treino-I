let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log(produtoA, "Valor retirado do imposto é:")
let valorA = 20/100*100 + " reais " 
console.log(valorA)

console.log(produtoB, "Valor retirado do imposto é:")
let valorB = 20/100*200 + " reais "
console.log(valorB)

console.log(produtoC, "Valor retirado do imposto é:")
let valorC = 20/100*120 + " reais "
console.log(valorC)

