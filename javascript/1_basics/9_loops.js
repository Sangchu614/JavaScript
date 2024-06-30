/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

 for(let i = 0; i < 10; i++){
    console.log(i);
 }
 console.log('--------------');

 for(let i = 10; i > 0; i--){
    console.log(i);
 }
 console.log('--------------');

 for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i,j);
    }
 }
console.log('--------------');

// *을 이용해서 6x6 정사각형 출력;
let square = '';
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        square +='*';
    }
    square +='\n';
}
console.log(square);

console.log('--------------');
/**
 * for...in
 */

const lettuce = {
    name: '상추',
    year: 2005,
    school: 'dongguk'
};

for(let key in lettuce){
    console.log(key);
}
console.log('--------------');

const lettuceArray = ['상추','양상추','배추','양배추'];
for(let key in lettuceArray){
    console.log(key)
    console.log(`${key}:${lettuceArray[key]}`);
}
console.log('--------------');

/**
 * for..of
 * 리스트에서 사용가능
 */

for(let value of lettuceArray){
    console.log(value);
}
console.log('--------------');
/**
 * While
 */

let number = 0;

while(number < 10){
    number ++;
}
console.log(number);
console.log('--------------');
/**
 * do...while
 */

number = 0;
do{
    number ++;
}while(number < 10);

console.log(number);
console.log('--------------');

/**
 * break
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }   
    console.log(i);
}

console.log('--------------');

number = 0;
while(number < 10){
    if(number === 5){
        break;
    }
    number++;
    console.log(number);
}

/**
 * continue
 */
console.log('--------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
}
console.log('--------------');

number = 0;
while(number < 10){
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}