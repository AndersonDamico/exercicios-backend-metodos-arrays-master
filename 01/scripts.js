const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInverso = frutas.reverse().join(', ');

console.log(arrayInverso)

frutas.shift();
frutas.pop();
frutas.push('melão')

console.log(frutas)