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

// 0-10 1: 5 - 10
// 11-20 2: 15 - 30 
// 21-30 3: 40 - 80
// 31-40 4: 50 - 100
// 41-50 5: 100 - 200

function getResult(seed) {
  function callback(rand) {
    let result = {
      seed,
      魔王小偷事件: 0,
      开墙: 0,
      金骑士之死: 0,
      魔王: 0,
      随机对话: 0,
      redKey: 0,
      blueKey: 0,
      yellowKey: 0,
      redGem: 0,
      blueGem: 0,
      redPotion: 0,
      bluePotion: 0,
      pickaxe: 0,
      superPotion: 0,
      bomb: 0,
      centerFly: 0,
      downFly: 0,
      upFly: 0,
      bigKey: 0,
      addYellowDoor: 0,
      addBlueDoor: 0,
      gold: 0,
      atkPercent: 0,
      sellYellowKey: 0,
      sellBlueKey: 0,
      sellRedKey: 0,
      sellLife: 0,
      sellEarthQuake: 0,
      boss_骷髅队长1: 0,
      boss_骷髅队长2: 0,
      boss_吸血鬼1: 0,
      boss_金骑士1: 0,
      boss_金骑士2: 0,
      boss_魔王: 0,
      boss_大法师: 0,
      boss_史莱姆族: 0,
    };

    function handleYellowDoor() {
      const d = rand()
      if (d < 0.0075) {
        handleRandom(7)
      } else if (d < 0.03) {
        handleRandom(8)
      } else if (d < 0.0375) {
        handleRandom(9)
      } else if (d < 0.045) {
        handleRandom(10)
      } else if (d < 0.06) {
        handleRandom(11)
      } else if (d < 0.09) {
        handleRandom(5)
      } else if (d < 0.135) {
        handleRandom(4)
      } else if (d < 0.195) {
        handleRandom(3)
      } else if (d < 0.32) {
        handleRandom(2)
      } else {
        handleRandom(1)
      }
    }

    function handleBlueDoor() {
      const d = rand()
      if (d < 0.0075) {
        handleRandom(7)
      } else if (d < 0.03) {
        handleRandom(8)
      } else if (d < 0.0375) {
        handleRandom(9)
      } else if (d < 0.045) {
        handleRandom(10)
      } else if (d < 0.06) {
        handleRandom(11)
      } else if (d < 0.09) {
        handleRandom(5)
      } else if (d < 0.1575) {
        handleRandom(4)
      } else if (d < 0.2475) {
        handleRandom(3)
      } else if (d < 0.4975) {
        handleRandom(2)
      } else {
        handleRandom(1)
      }
    }
    function handleRedDoor() {
      const d = rand()
      if (d < 0.0075) {
        handleRandom(7)
      } else if (d < 0.03) {
        handleRandom(8)
      } else if (d < 0.0375) {
        handleRandom(9)
      } else if (d < 0.0525) {
        handleRandom(6)
      } else if (d < 0.0825) {
        handleRandom(11)
      } else if (d < 0.1425) {
        handleRandom(5)
      } else if (d < 0.255) {
        handleRandom(4)
      } else if (d < 0.285) {
        handleRandom(3)
      } else if (d < 0.66) {
        handleRandom(2)
      } else {
        handleRandom(1)
      }
    }

    function handleRandom(num) {
      let randomPrice = (5 + rand(21)) * 10;
      if (num === 1) {
        rand()
        rand()
        result.随机对话++;
      } else if (num === 2) {
        let d = 3 + rand(10);
        if (d === 3) {
          result.sellYellowKey += 5;
        } else if (d === 4) {
          result.sellBlueKey += 1;
        } else if (d === 5) {
          result.sellBlueKey += 1;
        } else if (d === 6) {
          result.sellRedKey += 1;
        } else if (d === 7) {
          result.sellYellowKey += 100;
        } else if (d === 8) {
          result.sellBlueKey += 1;
          result.sellYellowKey += 4;
        } else if (d === 9) {
          result.sellYellowKey += 3;
        } else if (d === 10) {
          result.sellBlueKey += 3;
        } else if (d === 11) {
          result.sellLife += randomPrice * 2
        } else if (d === 12) {
          result.sellEarthQuake += 1;
        }
      } else if (num === 3) {
        let d = 1 + rand(8);
        if (d === 1) {
          result.boss_骷髅队长1++;
        } else if (d === 2) {
          result.boss_骷髅队长2++;
        } else if (d === 3) {
          result.boss_吸血鬼1++;
        } else if (d === 4) {
          result.boss_金骑士1++;
        } else if (d === 5) {
          result.boss_金骑士2++;
        } else if (d === 6) {
          result.boss_魔王++;
        } else if (d === 7) {
          result.boss_大法师++;
        } else {
          result.boss_史莱姆族++;
        }
      } else if (num === 4) {
        let d = 1 + rand(2);
        if (d === 1) {
          let m = Math.floor(Math.log2(1 + rand(10)));
          if (m === 0) {
            result.redKey++;
          } else if (m === 1) {
            result.blueKey++;
          } else {
            result.yellowKey++;
          }
        } else {
          let m = 1 + rand(4);
          if (m === 1) {
            result.redGem++;
          } else if (m === 2) {
            result.blueGem++;
          } else if (m === 3) {
            result.redPotion++;
          } else {
            result.bluePotion++;
          }
        }
      } else if (num === 5) {
        let d = 1 + rand(7);
        if (d === 1) {
          result.pickaxe++;
        } else if (d === 2) {
          result.superPotion++;
        } else if (d === 3) {
          result.bomb++;
        } else if (d === 4) {
          result.centerFly++;
        } else if (d === 5) {
          result.downFly++;
        } else if (d === 6) {
          result.upFly++;
        } else if (d === 7) {
          result.bigKey++;
        }
      } else if (num === 6) {
        let d = 1 + rand(3);
        if (d === 1) {
          result.addBlueDoor++;
        } else {
          result.addYellowDoor++;
        }
      } else if (num === 7) {
        result.魔王小偷事件++;
      } else if (num === 8) {
        rand()
        rand()
        result.开墙++;
      } else if (num === 9) {
        result.金骑士之死++;
      } else if (num === 10) {
        result.魔王++;
      } else if (num === 11) {
        let d = 1 + rand(2);
        if (d === 1) {
          result.gold += randomPrice;
        } else {
          let p = 1 + rand(2);
          result.atkPercent += p;
        }
      }
    }

    for (let i = 0; i < 250; i++) {
      handleYellowDoor();
      if (i === 0 &&
        result.boss_骷髅队长2 +
        result.boss_吸血鬼1 +
        result.boss_金骑士2 < 1
      ) {
        return false
      }
      if (
        i === 6 && ((
          result.boss_骷髅队长2 +
          result.boss_吸血鬼1 +
          result.boss_金骑士2 < 1
        ) || result.pickaxe < 1)
      ) {
        return false;
      }
      if (i === 50 && result.pickaxe < 1) {
        return false
      }
    }

    if (result.superPotion < 6 || result.pickaxe < 5) {
      return false
    }

    // console.log(result)
    // console.log(result)
    // if (atk > 500 && superPotion >= 7) {
    //   return `seed: ${seed}, atk: ${atk}, def: ${def}, superPotion: ${superPotion}, coin: ${result.coin}`;
    // }
    return result
  }
  return getDataBySeed(seed, callback, 0);
}


function test() {
  // 2147483647
  for (let i = 1; i < 2147483647; i++) {
    if (i % 10000000 === 0) {
      console.log(i);
    }
    const result = getResult(i);
    if (result) {
      console.log(result);
    }
  }

  // const result = getResult(2, 6);
  // console.log(result);
}

test();

// events.prototype._startGame_start(0,17250)

