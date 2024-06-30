/**
 * Data Types
 * 
 * 여섯개의 primitive type과ㅏ
 * 한개의 오브젝트 타입
 * 
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언,참 거짓)
 * 4) Undefined(언디파인)
 * 5) Null(널)
 * 6) Symbol(심볼)
 * 
 * 7) Object(객체)
 *      Funtion
 *      Array
 *      Object
 */

 const age =32;
 const tem = -10;
 const pi = 3.14;

 console.log(typeof age);
 console.log(typeof tem);
 console.log(typeof pi);
 console.log('-----------------');

 const infinity = Infinity;
 const nInfinity = -Infinity;

 console.log(typeof infinity);
 console.log(typeof nInfinity);
 console.log('-----------------');
 /**
  * string 타입
  */

 let name = '신성현';
 console.log(typeof name);
 name = '"신"성현';

 console.log(name);
 name = "'신'성현";
 console.log(name);
 console.log('-----------------');

 /**
  * Template Literal
  * ``(1번 옆)
  * 
  * Escaping Character
  * 1) newline -> \n
  * 2) tab -> \t
  * 3) 백슬래시는 \\이렇게
  * 4) \' , \"
  */

 const real = `안녕하세요
 저는 "신성"현입니다\
 '자바스크립트'를 열심히 공부할게용`
 console.log(real);

 const groupName = '아이브';
 console.log(groupName + ' 안유진');
 console.log(`${groupName} 안유진`);
 console.log('-----------------');
 
 /**
  * Boolean 타입
  */
 const isTrue = true;
 const isFalse = false;
 console.log(typeof isTrue);
 console.log('-----------------');

 /**
  * Undefined
  * 
  * 사용자가 직접 값을 초기화하지 않았을 때
  * 지정되는 값
  * 
  * 직접 undefined로 값을 초기화하는 것은 지양
  */
 let noInit
 console.log(noInit);
 console.log('-----------------');
 
 let init = null;
 console.log(init); 

 /**
  * Symbol 타입
  * 
  * 유일무이한 값을 생성할 때 사용한다.
  * 다른 프리미티브 값들과 다르게 symbol 함수를
  * 호출해서 사용한다.
  */
 const test1 = '1';
 const test2 = '1';

 console.log(test1 === test2);
 const symbol1 = Symbol('1');
 const symbol2 = Symbol('1');
 console.log(symbol1 === symbol2);
console.log('-----------------');

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있다.
 * key:value
 */

const dictionary = {
    red: '빨간색',
    green: '초록색' 
};

console.log(dictionary);
console.log(dictionary['green']);
console.log('-----------------');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const vegetableArray = [
    '상추',
    '양상추',
    '배추',
    '양배추'
];
console.log(vegetableArray);
/**
 * index
 * 
 * 0부터 시작
 * 1식 증가 
 */

console.log(vegetableArray[2]);
vegetableArray[0] = '수상추';
console.log(vegetableArray);