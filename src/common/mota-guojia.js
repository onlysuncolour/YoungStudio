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
    let result = {seed, redGem: 0, blueGem: 0, redPotion: 0, bluePotion: 0, yellowKey: 0, blueKey: 0, redKey: 0, cross: 0, superPotion: 0, pickaxe: 0, bomb: 0, centerFly: 0, upFly: 0, downFly: 0, knife: 0, snow: 0, bigKey: 0, earthquake: 0, coin: 0, sword1: 0, sword2: 0, sword3: 0, sword4: 0, sword5: 0, shield1: 0, shield2: 0, shield3: 0, shield4: 0, shield5: 0, };

    var ri = function ri() {
      var i;
      var r = rand(620);
      if (r < 54)
        i = "redGem";
      else if (r < 112)
        i = "blueGem";
      else if (r < 244)
        i = "redPotion";
      else if (r < 314)
        i = "bluePotion";
      else if (r < 560)
        i = "yellowKey";
      else if (r < 594)
        i = "blueKey";
      else if (r < 598)
        i = "redKey";
      else if (r < 620) {
        var arr = ["cross", "superPotion", "pickaxe", "bomb", "centerFly", "upFly", "downFly", "knife", "snow", "bigKey", "earthquake", "coin", "sword1", "sword2", "sword3", "sword4", "sword5", "shield1", "shield2", "shield3", "shield4", "shield5"];
        i = arr[rand(arr.length)]
      }
      result[i]++;
    };
    for (let i = 0; i < 300; i++) {
      ri()
      ri()
      rand()
      rand()
    }
    const atk = result.sword1 * 10 + result.sword2 * 20 + result.sword3 * 40 + result.sword4 * 60 + result.sword5 * 100;
    const def = result.shield1 * 10 + result.shield2 * 20 + result.shield3 * 40 + result.shield4 * 60 + result.shield5 * 100;
    const superPotion = result.superPotion;
    console.log(result)
    // if (atk > 500 && superPotion >= 7) {
    //   return `seed: ${seed}, atk: ${atk}, def: ${def}, superPotion: ${superPotion}, coin: ${result.coin}`;
    // }
    return false
  }
  return getDataBySeed(seed, callback, 0);
}


function test() {
  // 2147483647
  // for (let i = 75004268; i < 2147483647; i++) {
  //   if (i % 1000000 === 0) {
  //     console.log(i);
  //   }
  //   const result = getResult(i);
  //   if (result) {
  //     console.log(result);
  //   }
  // }

  [
    52559778,
182347811,
184839793,
    189260801,
    243883721,
  ].forEach(seed => {
    const result = getResult(seed);
    console.log(result);
  })
  // const result = getResult(2, 6);
  // console.log(result);
}

test();

// https://h5mota.com/games/51_gjcmt/
// events.prototype._startGame_start(0,189260801)

// seed: 2694855, atk: 510, def: 340, superPotion: 7, coin: 1
// seed: 4428121, atk: 630, def: 320, superPotion: 7, coin: 0
// seed: 4692223, atk: 550, def: 280, superPotion: 7, coin: 0
// seed: 4949360, atk: 690, def: 480, superPotion: 7, coin: 1
// seed: 5282296, atk: 520, def: 140, superPotion: 7, coin: 1
// seed: 5406127, atk: 530, def: 120, superPotion: 7, coin: 1
// seed: 5800177, atk: 710, def: 340, superPotion: 7, coin: 2
// seed: 7117089, atk: 600, def: 360, superPotion: 7, coin: 2
// seed: 7595551, atk: 730, def: 480, superPotion: 7, coin: 1
// seed: 8476117, atk: 580, def: 30, superPotion: 7, coin: 4
// seed: 11388109, atk: 710, def: 370, superPotion: 7, coin: 1
// seed: 13035236, atk: 750, def: 250, superPotion: 7, coin: 3 ***
// seed: 13294519, atk: 520, def: 360, superPotion: 7, coin: 3
// seed: 18186043, atk: 750, def: 210, superPotion: 7, coin: 3
// seed: 21100467, atk: 580, def: 360, superPotion: 8, coin: 1
// seed: 23571208, atk: 550, def: 240, superPotion: 8, coin: 0
// seed: 38825639, atk: 580, def: 360, superPotion: 8, coin: 1
// seed: 45345237, atk: 750, def: 210, superPotion: 7, coin: 3
// seed: 52559778, atk: 730, def: 340, superPotion: 7, coin: 3 ***
// seed: 58003098, atk: 580, def: 320, superPotion: 8, coin: 1
// seed: 63070459, atk: 750, def: 250, superPotion: 7, coin: 3
// seed: 75004268, atk: 560, def: 100, superPotion: 7, coin: 0
// seed: 123260528, atk: 640, def: 400, superPotion: 7, coin: 3
// seed: 146566724, atk: 540, def: 170, superPotion: 9, coin: 1
// seed: 167964601, atk: 750, def: 210, superPotion: 7, coin: 3
// seed: 177004599, atk: 630, def: 340, superPotion: 7, coin: 3
// seed: 182347811, atk: 850, def: 210, superPotion: 7, coin: 3 ***
// seed: 184839793, atk: 850, def: 210, superPotion: 7, coin: 3 ***
// seed: 189260801, atk: 850, def: 210, superPotion: 7, coin: 3 ***
// seed: 218805925, atk: 750, def: 210, superPotion: 7, coin: 3
// seed: 228847841, atk: 750, def: 210, superPotion: 7, coin: 3
// seed: 243883721, atk: 730, def: 340, superPotion: 7, coin: 3 ***
// seed: 243954165, atk: 520, def: 200, superPotion: 7, coin: 1


