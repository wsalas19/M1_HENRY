'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests


function BinarySearchTree(value) {
  this.value = value;
  this.right = null;//mayores
  this.left = null;//menores
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    //derecha---> mayores
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value)
    }
  }
  if (value < this.value) {
    //izquierda--->menores
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  //caso que el numero sea igual.
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
  if (this.value < value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
}

BinarySearchTree.prototype.size = function () {
  if (this.right === null && this.left === null) {
    return 1;
  }
  if (this.left === null) {
    return 1 + this.right.size();
  }
  if (this.right === null) {
    return 1 + this.left.size();
  }
  if (this.right !== null && this.left !== null) {
    return 1 + this.left.size() + this.right.size();
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === "in-order" || !order) { //izquierda -- root -- derecha
    if (this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
  }
  if (order === "post-order") { //izquierda -- derecha -- root
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
  if (order === "pre-order") { //root -- izquierda -- derecha
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  cb(this.value);
  if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
