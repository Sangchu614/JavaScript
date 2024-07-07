/**
 * Objects / 객체 
 */

//key : value pair
 let sangchu = {
    name: '신성현',
    group: '채소',
    definition: function(){
        return `${this.name}은 채소입니다.`;
    } // this의 경우 함수가 정의되어 있는 객체를 가리킴
 };

 console.log(sangchu);
 console.log(sangchu.name); // this.name === sangchu.name 과 같음
 console.log(sangchu['name']);

 const key = 'name';
 console.log(sangchu[key]);

 console.log(sangchu.definition());
 console.log('---------------');
 const nameKey = 'name';
 const nameValue = '상추';

 const groupKey = 'group';
 const groupValue = '채소';

 const sangchu2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    definition: function(){
        return `${this.name}는 ${this.group}입니다.`;
    }
 }
 console.log(sangchu2.definition());

 sangchu2['group'] = '쌈채소';
 console.log(sangchu2);

 sangchu2['englishname'] = 'lettuce'; 
 //없는걸 넣으면 새로 만들어 준다
 console.log(sangchu2);

 delete sangchu2['englishname']; 
 //삭제
 console.log(sangchu2);

 /**
  * 객체의 특징
  * 
  * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
  * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
  */

 const lettuce = {
    name: '상추',
    group: '채소',
 }
 console.log(lettuce);
 //  lettuce = {}; -> 기본형은 변경 x
 lettuce['group'] = '쌈채소';
 console.log(lettuce);
 
 /**
  * 모든 키값 다 가져오기
  */
 console.log(Object.keys(lettuce)); // array로 반환
 
 /**
  * 모든 벨류값 다 가져오기
  */

 console.log(Object.values(lettuce)); 

 const name ='상추';
 const lettuce2 = {
    name, // name: name과 같은 문법
 };
 console.log(lettuce2);