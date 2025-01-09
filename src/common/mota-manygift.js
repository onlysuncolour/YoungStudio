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



// https://h5mota.com/tower/?name=51_many_gift
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
        result.hp += (1 + rand(diff)) * 50;
      }
      result.r.push(r);
    }

    const validateResultAtk1 = 40,
      validateResultAtk2 = 50,
      validateResultAtk3 = 100;

    function validate(result) {
      const {
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
        totalAtk,
        totalDef,
        totalHp
      } = result;
      return (
        result1.atk >= 30 &&
        result2.atk >= 40 &&
        result3.atk >= 80
        // && result4.atk >= 100
        //  && result5.atk >= 100
        //  && result6.atk >= 120 
        &&
        totalAtk >= 450 &&
        totalDef >= 350
      )
    }
    const result1 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    const result2 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    const result3 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    const result4 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    const result5 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    const result6 = {
      // yellowKey: 0, blueKey: 0, redKey: 0, pickaxe: 0, 
      atk: 0,
      def: 0,
      hp: 0,
      r: []
    };
    for (let i = 0; i < 20; i++) {
      setValue(result1);
    }
    if (result1.atk < validateResultAtk1) {
      return false
    }
    // 60
    for (let i = 0; i < 40; i++) {
      setValue(result2);
    }
    if (result2.atk < validateResultAtk2) {
      return false
    }
    // 140
    for (let i = 0; i < 80; i++) {
      setValue(result3);
    }
    if (result3.atk < validateResultAtk3) {
      return false
    }
    // 240
    for (let i = 0; i < 100; i++) {
      setValue(result4);
    }
    // if (result4.atk < 100) {
    //   return false
    // }
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

    return `20atk ${result1.atk} 40atk ${result2.atk} 80atk ${result3.atk} 100atk ${result4.atk} 100atk ${result5.atk} 120atk ${result6.atk} seed ${seed}, totalAtk ${totalAtk}, totalDef ${totalDef}, totalHp ${totalHp}`
    if (validate({
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
        totalAtk,
        totalDef,
        totalHp
      })) {
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
  // 2147483647
  for (let i = 100000000; i < 2147483647; i++) {
    if (i % 1000000 === 0) {
      console.log(i);
    }
    const result = getResult(i, 6);
    if (result) {
      console.log(result);
    }
  }
  // const result = getResult(2, 6);
  // console.log(result);
}

test();


// events.prototype._startGame_start(0,6982935)
// 8132fa2


// 20atk 37 40atk 58 80atk 87 100atk 114 100atk 73 120atk 129 seed 90778, totalAtk 498, totalDef 229, totalHp 4900
// 20atk 38 40atk 42 80atk 87 100atk 132 100atk 103 120atk 78 seed 829095, totalAtk 480, totalDef 299, totalHp 8150


// 20atk 41 40atk 61 80atk 101 100atk 52 100atk 69 120atk 100 seed 3982624, totalAtk 424, totalDef 286, totalHp 8050
// 20atk 45 40atk 52 80atk 101 100atk 83 100atk 90 120atk 81 seed 20664849, totalAtk 452, totalDef 303, totalHp 6250 ***
// 20atk 46 40atk 54 80atk 102 100atk 46 100atk 69 120atk 100 seed 37809889, totalAtk 417, totalDef 292, totalHp 8100
// 20atk 41 40atk 51 80atk 101 100atk 77 100atk 66 120atk 83 seed 44136317, totalAtk 419, totalDef 308, totalHp 8350
// 20atk 47 40atk 51 80atk 111 100atk 45 100atk 40 120atk 81 seed 83006639, totalAtk 375, totalDef 269, totalHp 8550
// 20atk 41 40atk 54 80atk 101 100atk 64 100atk 84 120atk 89 seed 83521425, totalAtk 433, totalDef 316, totalHp 6550
// 20atk 44 40atk 57 80atk 111 100atk 40 100atk 45 120atk 81 seed 87992380, totalAtk 378, totalDef 269, totalHp 8350
// 20atk 40 40atk 52 80atk 102 100atk 67 100atk 55 120atk 81 seed 96675410, totalAtk 397, totalDef 290, totalHp 9200
// 20atk 41 40atk 55 80atk 117 100atk 40 100atk 45 120atk 81 seed 99985696, totalAtk 379, totalDef 269, totalHp 8050
// 20atk 42 40atk 52 80atk 100 100atk 58 100atk 62 120atk 73 seed 120355798, totalAtk 387, totalDef 284, totalHp 9450
// 20atk 40 40atk 61 80atk 101 100atk 52 100atk 58 120atk 84 seed 125781966, totalAtk 396, totalDef 258, totalHp 9350
// 20atk 41 40atk 50 80atk 117 100atk 81 100atk 82 120atk 99 seed 163896839, totalAtk 470, totalDef 300, totalHp 7250 ***
// 20atk 44 40atk 56 80atk 102 100atk 50 100atk 76 120atk 61 seed 175909725, totalAtk 389, totalDef 338, totalHp 8050
// 20atk 41 40atk 55 80atk 102 100atk 81 100atk 76 120atk 103 seed 188366272, totalAtk 458, totalDef 360, totalHp 6850 ****
// 20atk 44 40atk 56 80atk 102 100atk 50 100atk 76 120atk 61 seed 218502585, totalAtk 389, totalDef 339, totalHp 8050
// 20atk 40 40atk 54 80atk 102 100atk 62 100atk 79 120atk 88 seed 231873640, totalAtk 425, totalDef 370, totalHp 9450
// 20atk 46 40atk 54 80atk 102 100atk 46 100atk 69 120atk 100 seed 237277024, totalAtk 417, totalDef 292, totalHp 8200
// 20atk 47 40atk 64 80atk 103 100atk 72 100atk 64 120atk 91 seed 238956812, totalAtk 441, totalDef 336, totalHp 8400
// 20atk 41 40atk 52 80atk 109 100atk 75 100atk 72 120atk 74 seed 245524455, totalAtk 423, totalDef 307, totalHp 7000
// 20atk 43 40atk 52 80atk 101 100atk 54 100atk 64 120atk 91 seed 265385224, totalAtk 405, totalDef 267, totalHp 8100
// 20atk 41 40atk 62 80atk 107 100atk 63 100atk 87 120atk 87 seed 265958112, totalAtk 447, totalDef 341, totalHp 5100
// 20atk 45 40atk 58 80atk 104 100atk 45 100atk 40 120atk 89 seed 290489106, totalAtk 381, totalDef 269, totalHp 8300
// 20atk 41 40atk 55 80atk 108 100atk 73 100atk 66 120atk 88 seed 292356213, totalAtk 431, totalDef 300, totalHp 8100
// 20atk 45 40atk 52 80atk 103 100atk 69 100atk 54 120atk 73 seed 292411456, totalAtk 396, totalDef 293, totalHp 5750
// 20atk 47 40atk 55 80atk 100 100atk 46 100atk 63 120atk 108 seed 294740212, totalAtk 419, totalDef 287, totalHp 6650
// 20atk 48 40atk 54 80atk 100 100atk 54 100atk 74 120atk 59 seed 299300453, totalAtk 389, totalDef 338, totalHp 8050
// 20atk 43 40atk 55 80atk 117 100atk 40 100atk 45 120atk 81 seed 305128276, totalAtk 381, totalDef 269, totalHp 8050
// 20atk 41 40atk 53 80atk 102 100atk 101 100atk 71 120atk 80 seed 315166958, totalAtk 448, totalDef 285, totalHp 7350 ***
// 20atk 45 40atk 57 80atk 101 100atk 76 100atk 53 120atk 71 seed 336421938, totalAtk 403, totalDef 292, totalHp 6000
// 20atk 40 40atk 52 80atk 102 100atk 77 100atk 44 120atk 74 seed 352565534, totalAtk 389, totalDef 272, totalHp 9200
// 20atk 40 40atk 51 80atk 100 100atk 61 100atk 48 120atk 55 seed 362212540, totalAtk 355, totalDef 347, totalHp 7250
// 20atk 47 40atk 53 80atk 102 100atk 48 100atk 67 120atk 101 seed 362921798, totalAtk 418, totalDef 297, totalHp 8100
// 20atk 42 40atk 53 80atk 104 100atk 52 100atk 99 120atk 67 seed 371781382, totalAtk 417, totalDef 343, totalHp 6950
// 20atk 42 40atk 55 80atk 105 100atk 67 100atk 51 120atk 116 seed 373137633, totalAtk 436, totalDef 250, totalHp 8100
// 20atk 42 40atk 61 80atk 100 100atk 100 100atk 78 120atk 67 seed 375900920, totalAtk 448, totalDef 297, totalHp 10800 ***
// 20atk 40 40atk 54 80atk 100 100atk 61 100atk 86 120atk 79 seed 384371028, totalAtk 420, totalDef 374, totalHp 8050
// 20atk 41 40atk 50 80atk 107 100atk 81 100atk 71 120atk 108 seed 394063660, totalAtk 458, totalDef 360, totalHp 6850 ***
// 20atk 41 40atk 50 80atk 106 100atk 39 100atk 49 120atk 70 seed 398810003, totalAtk 355, totalDef 299, totalHp 5700
// 20atk 44 40atk 58 80atk 102 100atk 91 100atk 72 120atk 94 seed 405309465, totalAtk 461, totalDef 273, totalHp 7050 ***
// 20atk 41 40atk 58 80atk 100 100atk 73 100atk 80 120atk 59 seed 408799330, totalAtk 411, totalDef 312, totalHp 8400
// 20atk 47 40atk 50 80atk 103 100atk 89 100atk 90 120atk 84 seed 414793273, totalAtk 463, totalDef 334, totalHp 7400 ***
// 20atk 40 40atk 51 80atk 106 100atk 75 100atk 76 120atk 84 seed 429978711, totalAtk 432, totalDef 342, totalHp 9100
// 20atk 40 40atk 57 80atk 104 100atk 63 100atk 71 120atk 111 seed 435680533, totalAtk 446, totalDef 291, totalHp 8850
// 20atk 45 40atk 51 80atk 111 100atk 45 100atk 40 120atk 85 seed 442213721, totalAtk 377, totalDef 270, totalHp 8300
// 20atk 40 40atk 52 80atk 101 100atk 63 100atk 90 120atk 99 seed 459140652, totalAtk 445, totalDef 304, totalHp 8250
// 20atk 46 40atk 54 80atk 100 100atk 54 100atk 74 120atk 59 seed 477137364, totalAtk 387, totalDef 338, totalHp 8050
// 20atk 42 40atk 55 80atk 102 100atk 81 100atk 76 120atk 103 seed 481037826, totalAtk 459, totalDef 356, totalHp 6850 ***
// 20atk 44 40atk 55 80atk 117 100atk 40 100atk 43 120atk 83 seed 483807540, totalAtk 382, totalDef 265, totalHp 8050
// 20atk 40 40atk 54 80atk 100 100atk 61 100atk 86 120atk 79 seed 493057420, totalAtk 420, totalDef 371, totalHp 8050
// 20atk 42 40atk 59 80atk 106 100atk 74 100atk 75 120atk 78 seed 499823043, totalAtk 434, totalDef 295, totalHp 8350
// 20atk 43 40atk 54 80atk 101 100atk 63 100atk 85 120atk 89 seed 507008903, totalAtk 435, totalDef 316, totalHp 6550
// 20atk 40 40atk 53 80atk 114 100atk 74 100atk 73 120atk 80 seed 509680674, totalAtk 434, totalDef 329, totalHp 7750
// 20atk 40 40atk 51 80atk 113 100atk 60 100atk 90 120atk 77 seed 514491429, totalAtk 431, totalDef 252, totalHp 6100
// 20atk 48 40atk 54 80atk 100 100atk 54 100atk 74 120atk 59 seed 543738850, totalAtk 389, totalDef 338, totalHp 7950
// 20atk 40 40atk 50 80atk 108 100atk 58 100atk 62 120atk 72 seed 576279058, totalAtk 390, totalDef 275, totalHp 9250
// 20atk 45 40atk 57 80atk 111 100atk 40 100atk 45 120atk 81 seed 639509945, totalAtk 379, totalDef 269, totalHp 8350