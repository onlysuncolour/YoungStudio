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
  function callback(rand) {
    let count = 0,
      d = {
        superPotion: 0,
        cross: 0,
        knife: 0,
        coin: 0,
        sword3: 0,
        shield3: 0,
        sword4: 0,
        shield4: 0,
        sword5: 0,
        shield5: 0,
        atk: 0,
        def: 0,
        flag: 0
      }
    let flag = false
    // for (let i = 0; i < 450; i++) {
    //   const r = rand(1000)
    // for (let i = 0; i < 100; i++) {
    //   const r = rand(30) + 970;
    for (let i = 0; i < 150; i++) {
      const r = flag ? rand(30) + 970 : rand(1000)
      if (r < 70) {
        d.atk += 2.5
      } else if (r < 140) {
        d.def += 2.5
      } else if (r < 210) {
        d.atk += 2.5
        d.def += 2.5
      } else if (r < 900) {} else if (r < 920) {
        d["superPotion"]++;
        count++
        flag = true
        d.flag = Math.ceil(i / 3)
      } else if (r < 930) {} else if (r < 940) {
        d["cross"]++;
        count++
      } else if (r < 950) {
        d["knife"]++;
        count++
      } else if (r < 960) {
        d["coin"]++;
        count++
      } else if (r < 970) {} else if (r < 975) {
        d.atk += 10
      } else if (r < 980) {
        d.def += 10
      } else if (r < 985) {
        d.atk += 20
      } else if (r < 990) {
        d.def += 20
      } else if (r < 992) {
        d["sword3"]++;
        count++
        d.atk += 40
      } else if (r < 994) {
        d["shield3"]++;
        count++
        d.def += 40
      } else if (r < 996) {
        d["sword4"]++;
        count++
        d.atk += 60
      } else if (r < 998) {
        d["shield4"]++;
        count++
        d.def += 60
      } else if (r < 999) {
        d["sword5"]++;
        count++
        d.atk += 100
      } else if (r < 1000) {
        d["shield5"]++;
        count++
        d.def += 100
      }
    }
    let atk = Math.floor(d.atk * (1 + d.knife * 0.05));
    let def = Math.floor(d.def * (1 + d.cross * 0.05));
    let total = atk + def;
    if (total >= 6000) {
      return `seed: ${seed}; flag: ${d.flag}; total: ${total}; atk: ${atk}; def: ${def}; count: ${count}; 金币: ${d.coin}; 十字架: ${d.cross}; 屠龙: ${d.knife}; 剑4: ${d.sword4}; 盾4: ${d.shield4}; 剑5: ${d.sword5}; 盾5: ${d.shield5}`
    }
    return false
  }
  return getDataBySeed(seed, callback, 1);
}


function test() {
  // 2147483647
  for (let i = 0; i < 100000000; i++) {
    if (i % 1000000 === 0) {
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

// events.prototype._startGame_start(0,1427992)

// seed: 260071; total: 2274; atk: 1221; def: 1053; count: 42; 金币: 6; 十字架: 5; 屠龙: 9; 剑4: 4; 盾4: 2; 剑5: 2; 盾5: 4


// seed: 3462351; total: 4400; atk: 2300; def: 2100; count: 54; 金币: 0; 十字架: 0; 屠龙: 0; 剑4: 5; 盾4: 7; 剑5: 12; 盾5: 10
// seed: 5829767; total: 4490; atk: 1720; def: 2770; count: 56; 金币: 0; 十字架: 0; 屠龙: 0; 剑4: 8; 盾4: 16; 剑5: 6; 盾5: 12
// seed: 7308805; total: 4440; atk: 1960; def: 2480; count: 52; 金币: 0; 十字架: 0; 屠龙: 0; 剑4: 13; 盾4: 10; 剑5: 6; 盾5: 14
