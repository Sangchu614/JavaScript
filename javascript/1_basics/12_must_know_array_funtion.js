/**
 * Array Funtions
 */

 let Vegetables = [
    '상추',
    '배추',
    '양상추',
    '양배추',
 ];

 console.log(Vegetables);

 //push() -> 마지막에 추가 
 console.log(Vegetables.push('무'));
 console.log(Vegetables);
 console.log('-------------');

 //pop() -> 마지막 요소를 반환
 console.log(Vegetables.pop());
 console.log(Vegetables);
 console.log('-------------');

 //shift() -> 첫번째 요소 반환
 console.log(Vegetables.shift());
 console.log(Vegetables);
 console.log('-------------');

 //unshift() -> 첫번째에 값을 추가 
 console.log(Vegetables.unshift('상추'));
 console.log(Vegetables);
 console.log('-------------');
 
 //splice(x,y) -> 배열의 x번째부터 y번째 인덱스 항목 삭제
 console.log(Vegetables.splice(0, 3));
 console.log(Vegetables); 
 console.log('-------------');

 Vegetables = [
    '상추',
    '배추',
    '양상추',
    '양배추',
 ];

 //concat() -> 기존 배열을 변경하지 않고 값을 추가(원본 배열은 변함 x)
 console.log(Vegetables.concat('무'));
 console.log(Vegetables);
 console.log('-------------');

 //slice(x,y) -> x번 인덱스부터 y번 인덱스까지 제외하고 나머지 삭제(원본 배열 변함 x)
 console.log(Vegetables.slice(0,3));
 console.log(Vegetables);
 console.log('-------------');

 //spread operator
 let Vegetables2 = [
    ...Vegetables,
 ];

 console.log(Vegetables2);
 console.log('-------------');

 let Vegetables3 = [
    Vegetables,
 ];
 console.log(Vegetables3);
 console.log('-------------');

 let Vegetables4 = Vegetables;
 console.log(Vegetables4);
 console.log(Vegetables4 === Vegetables);
 console.log('-------------');

 console.log(Vegetables2 === Vegetables); 
 //배열 모습은 같지만 저장되는 공간이 달라 서로 같지않음
 console.log('-------------');

 //join() -> 모든 값을 string으로 묶음
 console.log(Vegetables.join()); // ,단위로 나눔
 console.log(Vegetables.join('/')); // /단위로 나눔
 console.log(Vegetables.join(', '));

 //sort() -> 오름차순 정렬(기존 배열 교체)
 Vegetables.sort();
 console.log(Vegetables);
 console.log(Vegetables.reverse()); // 원상태 복귀

 let numbers = [
    1,
    8,
    9,
    10,
    2,
    4,
    7
 ];
  console.log(numbers);

  // a,b를 비교했을 때 
  // 1) a를 b보다 나중에 정렬할려면 (뒤어둘려면) 0보다 큰 숫자를 반환
  // 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
  // 3) 원래 순서를 그대로 두려면 0을 반환
  numbers.sort((a,b) => {
    return a > b ? 1 : -1;
  })
  console.log(numbers);

  numbers.sort((a,b) => a > b ? -1 : 1);
  console.log(numbers);

  //map() -> 배열 형태 변경가능(기존 배열 변경 x)
  console.log(Vegetables.map((x) => x));
  console.log(Vegetables.map((x) => `채소: ${x}`));

  console.log(Vegetables.map((x) => {
    if(x === '상추'){
        return `채소 : ${x}`;

    }else{
        return x;
    }
  }));

  console.log(Vegetables);

  //filter() -> 조건에 맞는 값만 남기기
  number = [1,8,7,6,3];

  console.log(number.filter((x) => true));
  console.log(number.filter((x) => x % 2 === 0));

  //find() ->조건에 맞는 가장 첫번째 값을 반환
  console.log(number.find((x) => x % 2 === 0));

  //findIndex() -> 조건에 맞는 가장 첫번째 값의 인덱스 가져오기
  console.log(number.findIndex((x) => x % 2 === 0));

  //reduce(함수,초기값)
  //1. 초기값 0이 p에 입력
  //2. number어레이의 첫번째 값인 1이 n에 입력
  //3. p + n 즉, 0 + 1의 결과인 1이 반환된다.
  //4. 3에서 반환한 값(1)이 p에 입력된다.
  //5. 어레이의 두번째 값인 8이 n에 입력된다.
  //6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
  //7. 6에서 반환한 값(9)가 p에 입력된다.
  //8. number 리스트의 모든 값을 다 순회할때까지 반복 
  //   결국 모든 값을 다 더한 25가 반환된다.
  console.log(number.reduce((p , n) => p + n,0))