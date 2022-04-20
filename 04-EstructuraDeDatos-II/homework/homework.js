'use strict'

const { remove } = require("@11ty/eleventy/src/TemplateCache");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (input) {
  let newNode = new Node(input);
  if (this._length === 0) {
    this.head = newNode;
  } else {
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }
  this._length++;
}

LinkedList.prototype.remove = function () {
  let pointer = this.head,
    eliminado;
  if (this._length === 0) return null;
  if (this._length === 1) {
    let removed = pointer.value;
    this.head = null;
    this._length--;
    return removed;
  }
  else {
    while (pointer.next.next) {
      pointer = pointer.next;
    }
    eliminado = pointer.next;
    pointer.next = null;
    this._length--;
  }
  return eliminado.value;
}

LinkedList.prototype.search = function (index) {
  let current = this.head;
  while (current !== null) {
    if (typeof index === 'function') {
      if (index(current.value)) {
        return current.value;
      }
    }
    else if (index === current.value) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

class HashTable {
  constructor() {
    this.numBuckets = 35;
    this.buckets = [];
  }
  hash(llave) {
    let hash = 0;
    for (let i = 0; i < llave.length; i++) {
      hash += llave.charCodeAt(i);
    }
    return hash % this.numBuckets
  }
  set(key,value){
    if(typeof key !== "string"){
      throw TypeError ("Key must be a String");
    }
    let i = this.hash(key);
    if(this.buckets[i]===undefined){
      this.buckets[i]={};
    }
    this.buckets[i][key]=value;
  }
  get(key){
    let i = this.hash(key);
    return this.buckets[i][key];
  }
  hasKey(key){
    let i = this.hash(key);
    if(this.buckets[i].hasOwnProperty(key)){
      return true;
    }
    return false;
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
