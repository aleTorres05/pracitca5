const prompt = require("prompt-sync")();

const nombres = [];
let repuesta = "Si";

while (repuesta != "No") {
  const nombre = prompt("Ingresa un nombre: ");

  nombres.push(nombre);
  repuesta = prompt("Quieres ingresar otro nombre? Si o No ");
}

console.log("Tu lista es: ", nombres, "con logitud de: ", nombres.length);

const hasDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index).length > 0;

console.log("Hay valor repetido: ", hasDuplicates(nombres));

const largestName = (arr) =>
  arr.reduce(
    (largest, current) => (current.length > largest.length ? current : largest),
    ""
  );

console.log("Nombre mas Largo es: ", largestName(nombres));

const smallestName = (arr) =>
  arr.reduce(
    (smallest, current) =>
      current.length < smallest.length ? current : smallest,
    arr[0]
  );

console.log("Nombre mas corto es: ", smallestName(nombres));
