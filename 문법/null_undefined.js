//null: 존재하지 않거나 유효하지 않은 object
//      의도적으로 비어있음을 표현할 때 사용

//undefined: 값이 대입되지 않은 변수

let foo;
console.log(foo);   //undefined

let obj = {};
console.log(obj.prop);  //undefined

//위에 두 변수는 선언을 하였으나, 이번에는 선언 안 함
//console.log(bar); //에러

let bar = null;
console.log(bar);   //null

console.log(typeof null);   //object
console.log(typeof undefined);  //undefined

