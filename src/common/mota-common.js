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
  let mapTotal = 37
  let result = {
    yellowKey: 0,
    blueKey: 0,
    redKey: 0,
    bigKey: 0,
    blueGem: 0,
    redGem: 0,
    map: 0,
    redPotion: 0,
    bluePotion: 0,
    superPotion: 0,
    tempB: 0,
    down: 0,
    up: 0,
    bomb: 0,
    wall: 0,
    bigWall: 0,
    center: 0,
    note: 0,
    rare1: 0,
    rare2: 0,
    rare3: 0,
  }

  function callback(rand) {

    function randAttr(rare) {
      let d = rand(100);
      // console.log(d)
      if (rare === 0) {
        if (d < 25) {
          result.redGem++
        } else if (d < 50) {
          result.blueGem++
        } else if (d < 75) {
          result.redPotion++
        } else if (d < 85) {
          result.redPotion += 2
        } else if (d < 90) {
          result.bluePotion++
        } else if (d < 95) {
          result.redGem++
          result.blueGem++
        } else if (d < 96) {
          result.redGem += 2
          result.blueGem += 2
        } else {
          result.redPotion += 3
        }
      } else if (rare === 1) {
        if (d < 20) {
          result.redGem++
        } else if (d < 40) {
          result.blueGem++
        } else if (d < 60) {
          result.redPotion += 2
        } else if (d < 65) {
          result.redGem += 2
        } else if (d < 70) {
          result.bluePotion++
        } else if (d < 85) {
          result.redPotion++;
          result.redGem++
        } else if (d < 90) {
          result.redPotion++
          result.blueGem++
        } else if (d < 91) {
          result.redGem += 4
        } else if (d < 92) {
          result.blueGem += 4
        } else {
          result.bluePotion++
        }
      } else if (rare === 2) {
        if (d < 15) {
          result.blueGem++
        } else if (d < 30) {
          result.redGem++
        } else if (d < 45) {
          result.blueGem += 2
        } else if (d < 60) {
          result.redGem += 2
        } else if (d < 75) {
          result.bluePotion++
          result.redPotion++
        } else if (d < 90) {
          d.redPotion += 3
        } else if (d < 95) {
          result.redGem += 2
          result.blueGem += 2
        } else if (d < 96) {
          result.superPotion++
        } else if (d < 97) {
          result.redGem += 5
        } else if (d < 98) {
          result.blueGem += 5
        } else if (d < 99) {
          result.blueGem++
          result.redGem++
          result.bluePotion++
          result.redPotion++
        } else {
          result.tempB -= 2
        }
      } else if (rare === 3) {
        if (d < 15) {
          result.blueGem += 2
        } else if (d < 30) {
          result.redGem += 2
        } else if (d < 45) {
          result.bluePotion += 1
          result.blueGem += 1
        } else if (d < 60) {
          result.bluePotion += 1
          result.redGem += 1
        } else if (d < 75) {
          result.blueGem++
          result.redGem++
          result.bluePotion++
          result.redPotion++
        } else if (d < 80) {
          result.redGem += 5
        } else if (d < 85) {
          result.blueGem += 5
        } else if (d < 90) {
          result.superPotion++
        } else if (d < 97) {
          result.tempB--
        } else {
          result.tempB -= 2
        }
      }
    }
    function randSpecial(rare) {
      let d = rand(100);
      if (rare === 0) {
        if (d < 1) {
          result.down++
        } else if (d < 2) {
          result.up++
        } else if (d < 3) {
          result.bomb++
        } else if (d < 4) {
          result.wall++
        } else if (d < 7) {
          result.center++
        } else if (d < 10) {
          result.superPotion++
        } else if (d < 15) {
          result.redKey++;
        } else if (d < 20) {
          result.bigKey++
        } else if (d < 25) {
          result.note++;
        } else if (d < 30) {
          result.tempB--
        }
      }
      if (rare === 1) {
        if (d < 10) {
          result.center++
        } else if (d < 20) {
          result.bomb++
        } else if (d < 30) {
          result.up++
        } else if (d < 40) {
          result.down++
        } else if (d < 51) {
          result.wall++
        } else if (d < 60) {
          result.bigKey++
        } else if (d < 65) {
          result.note++
        } else if (d < 70) {
          result.superPotion++
        } else if (d < 72) {
          result.bigWall++
        } else if (d < 77) {
          result.tempB--
        }
      }
      if (rare === 2) {
        if (d < 10) {
          result.center++
        } else if (d < 20) {
          result.bomb++
        } else if (d < 30) {
          result.up++
        } else if (d < 40) {
          result.down++
        } else if (d < 51) {
          result.wall++
        } else if (d < 60) {
          result.bigKey++
        } else if (d < 65) {
          result.superPotion++
        } else if (d < 70) {
          result.bigWall++
        } else if (d < 75) {
          result.map++
          mapTotal++
          result.tempB--
        } else if (d < 97) {
          result.tempB--
        } else {
          result.tempB -= 2
        }
      }
      if (rare === 3) {
        if (d < 10) {
          result.center++
        } else if (d < 20) {
          result.wall++
        } else if (d < 30) {
          result.up++
        } else if (d < 40) {
          result.down++
        } else if (d < 50) {
          result.bomb++
        } else if (d < 55) {
          result.superPotion++
        } else if (d < 60) {
          result.map++
          mapTotal++
          result.tempB--
        } else if (d < 85) {
          result.bigWall++
        } else {
          result.tempB -= 2
        }
      }
    }

    // 总共37个
    for (let i = 0; i < mapTotal; i++) {
      // if (count > 10) {
      //   return false
      // }
      rand()
      rand()
      let rare = 0;
      // get rare
      const d = rand(100);
      if (d <= 50) {
        rare = 1;
        if (d <= 10) {
          rare = 2;
          if (d <= 2) {
            rare = 3;
          }
        }
        result[`rare${rare}`]++
      }
      // console.log('rare', rare, d)

      // get key
      rand(100)
      rand(100)
      // console.log('rare', rare)
      for (result.tempB = 0; result.tempB <= 7; result.tempB++) {
        randAttr(rare)
        // console.log('attr')
      }
      for (result.tempB = 0; result.tempB <= 0; result.tempB++) {
        randSpecial(rare)
        // console.log('special')
      }
    }
    // console.log(result)
    if (result.rare2 < 10 || result.rare3 < 5 || result.map < 5) {
      return false
    }
    return `seed: ${seed}, rare1: ${result.rare1}, rare2: ${result.rare2}, rare3: ${result.rare3}, map: ${result.map}`
  }
  return getDataBySeed(seed, callback, 0);
}


function test() {
  // 2147483647
  for (let i = 139000000; i < 2147483647; i++) {
    if (i % 1000000 === 0) {
      console.log(i);
    }
    const result = getResult(i);
    if (result) {
      console.log(result);
    }
  }

  // [3930734,4307785,18220462,21647442,24196643,29679533,34766743,50240775,74807495,95551359,114064260,114896080,120557886,123590682,].forEach(seed => {
  //   const result = getResult(seed);
  //   if (result) {
  //     console.log(result);
  //   }
  // })

  // const result = getResult(34216892);
  // console.log(result);
}

test();

// events.prototype._startGame_start("简单",123590682)

// https://h5mota.com/games/51_slimedig/


// seed: 3930734, rare1: 8, rare2: 11, rare3: 6, map: 6
// seed: 4307785, rare1: 12, rare2: 10, rare3: 5, map: 5
// seed: 18220462, rare1: 16, rare2: 11, rare3: 6, map: 5
// seed: 21647442, rare1: 14, rare2: 11, rare3: 5, map: 9
// seed: 24196643, rare1: 16, rare2: 10, rare3: 5, map: 9
// seed: 29679533, rare1: 15, rare2: 11, rare3: 5, map: 9
// seed: 34766743, rare1: 15, rare2: 11, rare3: 5, map: 9
// seed: 50240775, rare1: 14, rare2: 10, rare3: 5, map: 7
// seed: 74807495, rare1: 17, rare2: 10, rare3: 5, map: 9
// seed: 95551359, rare1: 15, rare2: 10, rare3: 5, map: 9
// seed: 114064260, rare1: 15, rare2: 11, rare3: 6, map: 5
// seed: 114896080, rare1: 10, rare2: 10, rare3: 5, map: 5
// seed: 120557886, rare1: 9, rare2: 10, rare3: 6, map: 6
// seed: 123590682, rare1: 11, rare2: 10, rare3: 5, map: 6
// seed: 139286875, rare1: 11, rare2: 10, rare3: 6, map: 6
// seed: 146291403, rare1: 8, rare2: 11, rare3: 5, map: 5
// seed: 197991652, rare1: 14, rare2: 10, rare3: 5, map: 5
// seed: 204611038, rare1: 15, rare2: 10, rare3: 5, map: 9
// seed: 219022299, rare1: 16, rare2: 10, rare3: 5, map: 5
// seed: 220795566, rare1: 9, rare2: 10, rare3: 5, map: 6
// seed: 221066032, rare1: 16, rare2: 11, rare3: 5, map: 9
// seed: 225181846, rare1: 13, rare2: 10, rare3: 5, map: 6