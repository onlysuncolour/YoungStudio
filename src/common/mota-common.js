function __next_rand(_rand) {
  _rand = _rand % 127773 * 16807 - ~~(_rand / 127773) * 2836;
  _rand += _rand < 0 ? 2147483647 : 0;
  return _rand
}

function getDataBySeed(seed, callback, nextRand = 0) {
  const rand = function (num) {
    seed = __next_rand(seed);
    const ans = seed / 2147483647;
    if (num && num > 0)
      return Math.floor(ans * num);
    return ans
  }

  for (let i = 0; i < nextRand; i++) {
    rand()
  }

  return callback(rand)
}




function getResult(seed) {
  let count2 = 0, count3 = 0, count = 0
  function callback(rand) {
    for (let i = 0; i < 24; i++) {
      if (count > 10) {
        return false
      }
      rand()
      rand()
      const d = rand(100);
      // console.log(d)
      if (d <= 10) {
        count2 ++
        if (d <= 2) {
          count3 ++
        }
      } else {
        count ++
      }
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
      rand()
    }
    // console.log(d)
    return `seed: ${seed}, count2: ${count2}, count3: ${count3}`
    // return false
  }
  return getDataBySeed(seed, callback, 1);
}


function test() {
  // 2147483647
  for (let i = 0; i < 2147483647; i++) {
    if (i % 10000000 === 0) {
      console.log(i);
    }
    const result = getResult(i);
    if (result) {
      console.log(result);
    }
  }

  // const result = getResult(20628118);
  // console.log(result);
}

test();

// events.prototype._startGame_start("简单",5868142)

// https://h5mota.com/games/51_slimedig/
// seed: 20628118, count2: 14, count3: 4
