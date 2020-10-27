/* eslint-disable no-console */
'use strict';

function sheepCount(num) {
  for(let i = 0; i < num; i++) {
    console.log(num-i, ': Another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence');
}

sheepCount(4);

function powerCalculator(base, exp) {
  if (exp >= 0) {
    let val = 1;
    for(let i = exp; i > 0; i--) {
      val = val*base;
    }
    return val;
  } else {
    return 'exponent should be >= 0';
  }
}

console.log(powerCalculator(10,2));
console.log(powerCalculator(10,-2));

function reverseString(str) {
  let newStr = '';
  for(let i = str.length-1; i >= 0; i--) {
    newStr = newStr.concat(str[i]);
  }
  return newStr;
}

console.log(reverseString('Harry'));
console.log(reverseString('Antidisestablishmentarianism'));

function nthTriangle(num) {
  let val = 0;
  for(let i = 1; i <= num; i++) {
    val += i;
    console.log(val);
  }
  return val;
}

console.log('the nth Triangle of 8 is: ',nthTriangle(8));

function splitter(str,char) {
  let arr = [];
  let lastIdx = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === char) {
      arr.push(str.slice(lastIdx,i));
      lastIdx = i + 1;
    } else if( i+1 === str.length )
      arr.push(str.slice(lastIdx, str.length));
  }
  return arr;
}

console.log(splitter('02/20/2020','/'));

function fibonacci(num) {
  if(num === 1)
    return [1];
  if (num === 2)
    return [1,1];
  
  let sequence = [1,1];
  let curr = 0;

  for(let i = 2; i <= num + 3; i++) {
    curr = sequence[i - 1] + sequence[i - 2];
    sequence.push(curr);
  }

  return sequence;
}

console.log('fibonacci sequence of 1', fibonacci(1));
console.log('fibonacci sequence of 2', fibonacci(2));
console.log('fibonacci sequence of 10', fibonacci(10));

function factorial(n) {
  let val = 1;
  for(let i = 1; i <= n; i++) {
    val *= i;
  }
  return val;
}


console.log('factorial of 3', factorial(3));
console.log('factorial of 5', factorial(5));
console.log('factorial of 6', factorial(6));