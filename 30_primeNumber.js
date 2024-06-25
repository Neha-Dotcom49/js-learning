function isPrime(num){
for (let index = 2; index < num; index++) {
    if (num%index==0) {
        return "Is not Prime Number"; 
    }
}
return "Is prime Number";
}
  var result =isPrime(3);
  console.log(`Given Number 3  : ${result}`);
  var result =isPrime(9);
  console.log(`Given Number 9  : ${result}`);
  var result =isPrime(7);
  console.log(`Given Number 7  : ${result}`);
  var result =isPrime(6);
  console.log(`Given Number 6  : ${result}`);
  var result =isPrime(19);
  console.log(`Given Number 19 : ${result}`);
  var result =isPrime(29);
  console.log(`Given Number 29  : ${result}`);
  var result =isPrime(53);
  console.log(`Given Number 53  : ${result}`);

  const array = [3,9,7,6,19,29,53];
  let count = 0;
  for (const num of array) {
    if(isPrime(num)=="Is prime Number"){
  count = count + 1;
    }
  }
  console.log(`Total number of prime numbers:`,count);