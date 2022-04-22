'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right));
    
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let div = dividir(array);
  let left = div[0];
  let right = div[1];
return unir(mergeSort(left), mergeSort(right)); 

}
function dividir(array) {
  let mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);
  return [left, right];
}
function unir(left, right) {
  let array = [];
  let lftIndex = 0;
  let rghtIndex = 0;
  while (lftIndex < left.length && rghtIndex < right.length) {
    if (left[lftIndex] < right[rghtIndex]) {
      array.push(left[lftIndex]);
      lftIndex++;
    } else {
      array.push(right[rghtIndex]);
      rghtIndex++;
    }
  }
  return array.concat(left.slice(lftIndex)).concat(right.slice(rghtIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
