//Scope and Hoisting 
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//5
  var f = function(a, b, c) {
    b = a;
    console.log(b);//5
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//10
}
c(8,9,10);//10, 8,8,8,
console.log(b);//10
console.log(x);//1
console.log(bar);//undefined   
console.log(baz);// undefined
foo();//undefined
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
    console.log(pm);//undefined
}
console.log(instructor);//Tony
console.log(pm);//Franco

//Coerción de datos
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//"9px"
"$" + 4 + 5//"$9"
"4" - 2//2
"4px" - 2//NaN
7 / 0 //NaN
{}[0]
parseInt("09")//9
5 && 2 //2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//-4
3>2>1//false
//[] == ![]//true

//Hoisting


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
 
 getFood(false);//"Meow Mix"


 //This

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

//Event Loop

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();// 1,4,3,2
