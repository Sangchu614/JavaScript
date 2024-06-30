/** Operations
 * 
 * 연산자 
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지 
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 %  10);
console.log('-----------');

/**
 * 증감
 */

let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('-----------');
/**
 * 연산자의 위치
 */

 let result = 1;
 console.log(result);

 result = number++;
 console.log(result,number);
 result = number--;
 console.log(result,number);
 console.log('-----------');

 result = ++number;
 console.log(result,number);
 result = --number;
 console.log(result,number);
 console.log('-----------');
 
 /**
  * 숫자 타입이 아닌 타입에 +,-
  */

 let sample = '99';
 console.log(+sample);
 console.log(-sample);
 console.log(typeof +sample);
 console.log('-----------');
 
 sample = true;
 console.log(+sample);
 console.log(typeof +sample);

 sample = false;
 console.log(+sample);
 console.log('-----------');

 sample = '상추';
 console.log(+sample);
 //NaN -> Not a Number
 console.log('-----------');

 /**
  * 할당 연산자(assignment operator)
  */
 number = 100;
 number += 10; // "+ - * / %"다 가능
 console.log(number);
 console.log('-----------');

 /**
  * 비교 연산자
  * 
  * 1) 값의 비교 "=="
  * 2) 값과 타입의 비교 "===" (이녀석을 가장 많이 사용함)
  */
 console.log(5 == 5);
 console.log(5 == '5');
 console.log(0 == '');
 console.log(true == 1);
 console.log(true == '1');
 console.log(false == 0);
 console.log('-----------');
 
 console.log(5 === 5);
 console.log(5 === '5');
 console.log(0 === '');
 console.log(true === 1);
 console.log(true === '1');
 console.log(false === 0);
 console.log('-----------');

 console.log(5 != 5);
 console.log(5 != '5');
 console.log(0 != '');
 console.log(true != 1);
 console.log(true != '1');
 console.log(false != 0);
 console.log('-----------');

 console.log(5 !== 5);
 console.log(5 !== '5');
 console.log(0 !== '');
 console.log(true !== 1);
 console.log(true !== '1');
 console.log(false !== 0);
 console.log('-----------');


 /**
  * 대소 관계 비교 연산자
  * >
  * <
  * <=
  * >=
  */

 console.log(100 > 1);
 console.log(100 >= 1);
 console.log(100 < 1);
 console.log(100 <= 1);
 console.log('-----------');

 /**
  * 삼항 조건 연산자(ternary operator)
  */
 console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
 console.log('-----------');
 /**
  * 논리 연산자 
  * 
  * 1) &&
  * 2) ||
  */
 //&&는 둘다 true 일때 true 반환
 console.log(true && true);
 console.log(true && false);
 console.log(false && true);
 console.log(false && false);
 console.log('-----------');

 //||는 하나만 true 여도 true 반환
 console.log(true || true);
 console.log(true || false);
 console.log(false || true);
 console.log(false || false);
 console.log('-----------');


 /**
  * 단축평가(short circuit evaluation)
  * 
  * &&를 사용했을 때 좌측이 true면 우측 값 반환
  * &&를 사용했을 때 좌측이 false면 좌측 값 반환
  * ||를 사용했을 때 좌측이 true면 좌측 값 반환
  * ||를 사용했을 때 좌측이 false면 우측 값 반환
  */
 console.log(true || '아이브');
 console.log(false || '아이브');
 console.log(true && '아이브');
 console.log(false && '아이브');
 console.log('-----------');

 console.log(true && true && '아이브');
 console.log(true && false && '아이브');
 console.log('-----------');

 /**
  * 지수 연산자
  */
 console.log(2**2);
 console.log(10**2);
 console.log('-----------');

 /**
  * null연산자 
  * 
  * ??연산자 앞에 변수가 null이거나 undefined일 경우
  * ??연산자 뒤의 값을 반환함 
  */
 let name;
 name = name ?? '상추'; // 상추를 name에 반환
 console.log(name);
 name = name ?? '배추'; //이미 값이 있으니 반환 x
