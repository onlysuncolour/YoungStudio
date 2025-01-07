function __next_rand(_rand) {
  _rand = _rand % 127773 * 16807 - ~~(_rand / 127773) * 2836;
  _rand += _rand < 0 ? 2147483647 : 0;
  return _rand
}

function getDataBySeed(seed, callback, nextRand = 0) {
  const rand = function(num) {
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


function getResult(seed, diff) {
  function callback(rand) {
    function setValue(result) {
      const r = rand(500);
      if (r < 200) {
        // result.yellowKey++;
      } else if (r < 230) {
        // result.blueKey++;
      } else if (r < 245) {
        // result.redKey++;
      } else if (r < 250) {
        // result.pickaxe++;
      } else if (r < 350) {
        result.atk += 1 + rand(diff);
      } else if (r < 450) {
        result.def += 1 + rand(diff);
      } else {
        result.hp+= (1 + rand(diff)) * 50;
      }
      result.r.push(r);
    }
    function validate(result) {
      const {
        result1, result2, result3, result4, result5, result6, totalAtk, totalDef, totalHp
      } = result;
      return (
        result1.atk >= 30 
        && result2.atk >= 40 
        // && result3.atk >= 80 
        // && result4.atk >= 100
        //  && result5.atk >= 100
        //  && result6.atk >= 120 
        && totalAtk >= 450
        && totalDef >= 350
      )
    }
    const result1 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    const result2 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    const result3 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    const result4 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    const result5 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    const result6 = { 
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0, def: 0, hp: 0, r: []};
    for (let i = 0; i < 20; i++) {
      setValue(result1);
    }
    // 60
    for (let i = 0; i < 40; i++) {
      setValue(result2);
    }
    // 140
    for (let i = 0; i < 80; i++) {
     setValue(result3);
    }
    // 240
    for (let i = 0; i < 100; i++) {
      setValue(result4);
    }
    // 340
    for (let i = 0; i < 100; i++) {
      setValue(result5);
    }
    // 460
    for (let i = 0; i < 120; i++) {
      setValue(result6);
    }
    const totalAtk = result1.atk + result2.atk + result3.atk + result4.atk + result5.atk + result6.atk,
      totalDef = result1.def + result2.def + result3.def + result4.def + result5.def + result6.def,
      totalHp = result1.hp + result2.hp + result3.hp + result4.hp + result5.hp + result6.hp;
    if (validate({result1, result2, result3, result4, result5, result6, totalAtk, totalDef, totalHp})) {
      return `20atk ${result1.atk} 40atk ${result2.atk} 80atk ${result3.atk} 100atk ${result4.atk} 100atk ${result5.atk} 120atk ${result6.atk} seed ${seed}, totalAtk ${totalAtk}, totalDef ${totalDef}, totalHp ${totalHp}`
      return {
        "1-20": result1,
        "21-60": result2,
        "61-140": result3,
        "141-240": result4,
        "241-340": result5,
        "341-460": result6,
        atk: result1.atk + result2.atk + result3.atk + result4.atk + result5.atk + result6.atk,
        def: result1.def + result2.def + result3.def + result4.def + result5.def + result6.def,
        hp: result1.hp + result2.hp + result3.hp + result4.hp + result5.hp + result6.hp,
        seed: seed
      }
    }
  }
  return getDataBySeed(seed, callback, 1);
}

function test() {
  for (let i = 0; i < 10000000; i++) {
    const result = getResult(i, 6);
    if (result) {
      console.log(result);
    }
  }
  // const result = getResult(2, 6);
  // console.log(result);
}

test();

// 131, 255, 458
// yellow atk, hp
// events.prototype._startGame_start(0,1123728)