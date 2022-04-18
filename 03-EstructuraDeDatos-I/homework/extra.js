//Funcion que implementa un stack con 3 funciones basicas
function Stack () {
    this.stack=[];
}
Stack.prototype.push= function (element) {
    this.stack.push(element);
}
Stack.prototype.pop= function () {
    return this.stack.pop();
}
Stack.prototype.size= function () {
    this.stack.length;
}

//Testing
let a = new Stack();
a.push(1);
a.push(2);
a.push("String");
a.push(true);
a.push({key : "value"});
console.log(a);

a.pop();
a.size();
console.log(a);