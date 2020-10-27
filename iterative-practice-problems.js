'use strict';

function sheepCount(num) {
  for(let i = 0; i < num; i++) {
    console.log(num-i, ': Another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence');
}

sheepCount(4);

