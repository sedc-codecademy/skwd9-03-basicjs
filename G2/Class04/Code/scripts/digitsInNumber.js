function digitsInNumber(input){
console.log(`The number is ${input}`);

while(input > 0){
  console.log(input%10);
  input = parseInt(input/10);
}

}

digitsInNumber(543);
digitsInNumber(74658);