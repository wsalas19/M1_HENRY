//------------------------------------Scope and Hoisting 
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1
console.log(bar);//undefined   
console.log(baz);// undefined
foo();//"Hola"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);/*Franco :##Explicación
(o hace porque la variable pm esta declarada con let, 
lo cual su scope para reverse flash acaba dentro de las llaves del statement if*/

//------------------------------------Coerción de datos
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//"9px"
"$" + 4 + 5//"$9"
"4" - 2//2
"4px" - 2//NaN
7 / 0 //infinity
{}[0]
parseInt("09")//9
5 && 2 //2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//23, concatena los dos primeros arreglos, y como no puede concatenar el ultimo, le resta eso a la cifra concatenada
3>2>1//false
//[] == ![]//true

//------------------------------------Hoisting


function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();//undefined ,2


 //Y el de este código? :
 
 var snack = 'Meow Mix';
 
 function getFood(food) {
     if (food) {
         var snack = 'Friskies';
         return snack;
     }
     return snack;
 }
 
 getFood(false);//undefined, al momento de ejecutar, snack no esta definida cuando se hace return al final del if, en caso negativo.


 //------------------------------------This

 var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa.

var test = obj.prop.getFullname;

console.log(test());//Juan Perez

//------------------------------------Event Loop

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();// 1,4,3,2
