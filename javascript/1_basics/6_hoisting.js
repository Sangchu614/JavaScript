/**
 * Hoisting
 */

console.log('Hello');
console.log('world');

// console.log(name);
// var name = '상추';
// console.log(name);

var name;
console.log(name);
name = '상추';
console.log(name);
//이 상황과 비슷한 출력 결과

/**
 * Hoisting이란?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 
 * 느껴지는 현상
 * var은 그냥 가능하지만 let과 const는 제한적으로 가능함
 */