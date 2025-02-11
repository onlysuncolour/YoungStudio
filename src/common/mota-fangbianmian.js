// https://h5mota.com/games/51_instant_noodles/

const items = [
  [],
["upFloor","redPotion","yellowKey","redPotion","redPotion","skeleton","yellowDoor","skeletonSoilder","yellowDoor","fly","greenSlime","yellowKey","yellowKey","redSlime","yellowDoor","greenSlime","yellowKey","yellowDoor","redGem","blueGem","bat","yellowKey","redPotion","bluePriest","yellowDoor","bat","greenSlime","yellowDoor","bat","bluePotion","greenSlime"],
["downFloor","upFloor","blueDoor","yellowKey","yellowKey","bluePotion","bluePotion","yellowKey","bluePotion","steelDoor","steelDoor","steelDoor","blueGuard","blueGuard","steelDoor","steelDoor","steelDoor","man","woman"],
["yellowKey","bluePriest","yellowDoor","yellowDoor","skeleton","redPotion","downFloor","blueGem","redPotion","yellowKey","redGem","bat","yellowKey","bluePotion","yellowKey","bluePotion","yellowKey","blueKey","yellowKey","bluePotion","yellowKey","greenSlime","redSlime","yellowDoor","yellowDoor","yellowDoor","bat","bluePriest","redPotion","man","redPotion","yellowKey","upFloor"],
["redPotion","redSlime","yellowDoor","upFloor","blueKey","bluePriest","yellowDoor","yellowKey","greenSlime","greenSlime","yellowKey","yellowDoor","yellowDoor","bat","greenSlime","blueShop-left","yellowKey","yellowKey","blueShop","blueDoor","redSlime","blueShop-right","redGem","yellowDoor","bluePriest","greenSlime","yellowKey","skeleton","redPotion","man","skeletonSoilder","yellowDoor","bluePotion","yellowDoor","downFloor"],
["upFloor","yellowKey","yellowKey","blueGem","downFloor","yellowDoor","skeletonSoilder","yellowKey","bat","bluePriest","redPotion","redSlime","yellowDoor","bat","yellowDoor","yellowKey","bat","greenSlime","greenSlime","greenSlime","yellowKey","yellowKey","yellowDoor","greenSlime","yellowKey","yellowKey","blueWall","yellowDoor","redSlime","redSlime","sword1"],
["downFloor","bluePriest","yellowDoor","yellowDoor","bat","greenSlime","yellowKey","yellowKey","yellowDoor","redSlime","yellowKey","yellowKey","redSlime","bluePriest","man","blueGem","yellowDoor","skeleton","yellowKey","bluePriest","yellowDoor","redPotion","woman","skeleton","yellowDoor","redPotion","yellowKey","skeletonSoilder","redSlime","redPotion","greenSlime","skeleton","yellowDoor","yellowDoor","bat","redSlime","upFloor"],
["upFloor","yellowDoor","yellowDoor","greenSlime","skeletonSoilder","redSlime","redGem","redPotion","bat","yellowDoor","yellowDoor","greenSlime","bluePriest","redSlime","blueDoor","yellowDoor","bat","yellowKey","yellowKey","woman","skeletonSoilder","yellowDoor","yellowDoor","redSlime","bluePriest","bluePotion","yellowKey","yellowKey","redPotion","skeleton","skeletonSoilder","bluePotion","yellowKey","yellowKey","greenSlime","redSlime","greenSlime","yellowDoor","yellowDoor","downFloor"],
["downFloor","yellowDoor","redPotion","yellowDoor","greenSlime","redSlime","bat","yellowDoor","yellowKey","greenSlime","blueDoor","yellowDoor","yellowKey","redSlime","bat","redGem","yellowKey","yellowKey","yellowDoor","yellowKey","blueGem","upFloor","yellowDoor","skeleton","greenSlime","bluePriest","bat","blueKey","yellowKey","bluePriest","redPotion","yellowKey","bluePotion","yellowGuard","yellowDoor","redKey","specialDoor","yellowDoor","skeletonSoilder","yellowKey","redPotion","yellowGuard","yellowDoor","skeleton"],
["skeletonSoilder","blueGem","yellowKey","skeletonSoilder","yellowDoor","upFloor","yellowKey","yellowKey","redPotion","skeleton","bat","yellowDoor","blueDoor","yellowDoor","yellowDoor","skeletonSoilder","yellowKey","yellowKey","yellowDoor","skeleton","downFloor","blueDoor","redGem","yellowDoor","yellowKey","redSlime","bat","yellowDoor","yellowDoor","yellowDoor","greenSlime","yellowDoor","shield1","yellowKey","bluePriest","greenSlime","blueWall","skeleton","redPotion","skeletonSoilder","yellowDoor","bluePriest","redPotion"],
["skeleton","skeleton","yellowDoor","downFloor","skeleton","skeletonSoilder","blueGem","skeletonSoilder","skeleton","skeleton","yellowDoor","specialDoor","bluePriest","skeletonCaptain","redDoor","specialDoor","bluePriest","skeleton","skeleton","yellowDoor","skeleton","skeletonSoilder","redGem","skeletonSoilder","skeleton","skeleton","yellowDoor","bluePotion"],
["redPriest","bluePotion","yellowKey","yellowKey","shield2","specialDoor","blueDoor","bigBat","yellowKey","redPriest","yellowKey","bigBat","blackSlime","yellowKey","redGem","yellowDoor","zombie","yellowDoor","bat","bigBat","downFloor","yellowDoor","yellowDoor","yellowDoor","zombie","redPriest","blackSlime","bluePotion","yellowDoor","redPotion","yellowDoor","bigBat","redPotion","bat","yellowKey","blackSlime","bigBat","upFloor"],
["woman","yellowDoor","yellowKey","yellowKey","upFloor","blueWall","redPriest","yellowKey","blueKey","bigBat","zombie","yellowDoor","yellowDoor","bat","yellowKey","redPriest","blueShop-left","redPotion","redGem","yellowDoor","zombie","bluePotion","blueShop","yellowKey","redPriest","redPriest","blueShop-right","redPotion","yellowDoor","bat","redPotion","yellowKey","blueDoor","blackSlime","blueWall","zombie","blueGem","blueWall","bigBat","blackSlime","yellowDoor","zombie","downFloor"],
["lava","lava","lava","lava","lava","lava","lava","lava","lava","downFloor","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","sword5","lava","lava","lava","lava","yellowDoor","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","upFloor"],
["zombieKnight","specialDoor","redPotion","yellowDoor","redPriest","blueKey","zombieKnight","blueDoor","blackSlime","zombieKnight","yellowDoor","redPriest","bigBat","zombie","yellowDoor","blueGem","blackSlime","blueDoor","redPotion","yellowKey","rock","yellowDoor","yellowDoor","blueWall","upFloor","redPotion","zombieKnight","yellowDoor","bigBat","blackSlime","yellowKey","redPotion","yellowDoor","yellowKey","yellowDoor","zombieKnight","blackSlime","yellowKey","yellowKey","zombie","yellowDoor","downFloor"],
["blueGem","zombie","yellowDoor","blackSlime","bigBat","zombieKnight","yellowDoor","redPriest","blackSlime","yellowKey","blueKey","yellowKey","bigBat","yellowDoor","octopus","octopus","octopus","upFloor","specialDoor","pickaxe","octopus","octopus","octopus","downFloor","octopus","octopus","octopus","yellowDoor","thief","bigBat","yellowDoor","yellowDoor","bat","bigBat","bat","blackSlime","yellowDoor","redPriest","bluePotion","woman"],
["yellowKey","yellowKey","yellowKey","redGem","redPotion","blueGem","man","bigBat","redPriest","bigBat","yellowKey","yellowKey","blueWall","blackSlime","rock","yellowDoor","yellowDoor","yellowDoor","zombie","redPotion","bigBat","downFloor","blueDoor","zombieKnight","yellowDoor","upFloor","yellowKey","yellowKey","bigBat","yellowDoor","yellowDoor","blackSlime","bigBat","slimeMan","yellowDoor","zombie","yellowDoor","redPriest","blueWall","bigBat","redPotion","blueKey","superPotion"],
["yellowGuard","yellowGuard","redPotion","sword2","specialDoor","specialDoor","yellowDoor","yellowGuard","yellowGuard","bigBat","zombieKnight","yellowDoor","zombie","upFloor","redPriest","downFloor","bigBat","blueDoor","blackSlime","bigBat","redGem","yellowKey","zombieKnight","zombie","bluePotion","specialDoor","specialDoor","yellowDoor","blueGem","yellowKey","zombieKnight","zombie","redPotion"],
["upFloor","yellowDoor","rock","yellowDoor","redPriest","redPotion","redPotion","zombie","yellowKey","redGem","man","rock","blueDoor","yellowDoor","yellowDoor","bigBat","bigBat","zombieKnight","bigBat","bigBat","yellowKey","downFloor","blueWall","blueDoor","zombieKnight","blackSlime","blackSlime","yellowKey","yellowDoor","yellowDoor","yellowDoor","blackSlime","blackSlime","redPriest","zombie","blackSlime","bigBat","rock","yellowKey","blueGem","yellowKey","yellowKey","blueKey","yellowKey","yellowKey","yellowDoor","redPriest","redPotion"],
["downFloor","yellowDoor","bat","yellowDoor","bigBat","yellowDoor","blackSlime","blackSlime","bigBat","redPotion","zombieKnight","yellowKey","yellowDoor","rock","yellowKey","redPriest","cross","blueWall","blueDoor","zombieKnight","upFloor","rock","yellowKey","blueKey","zombieKnight","yellowKey","zombieKnight","yellowDoor","redPotion","yellowKey","bigBat","yellowDoor","blackSlime","yellowKey","bat","redGem","blackSlime","yellowDoor","zombie","bigBat"],
["blueGem","yellowKey","bat","yellowDoor","redPotion","redGem","blueDoor","bat","rock","redPriest","bigBat","bigBat","bigBat","upFloor","specialDoor","bigBat","bigBat","redDoor","downFloor","bigBat","bigBat","bigBat","redPriest","redPotion","blueDoor","bat","rock","bluePotion","yellowKey","bat","yellowDoor","redPotion"],
["downFloor","man","upFloor"],
["upFloor","downFloor"],
["downFloor","upFloor","man"],
["downFloor","upFloor","redDoor"],
["upFloor","downFloor","blackMagician","redDoor"],
["downFloor","upFloor","lava","lava","lava","lava","lava","lava","lava","lava","lava","lava","princess","lava","redDoor","redDoor","redDoor","lava","lava","lava","lava","lava","lava","lava","lava"],
["downFloor","man","upFloor"],
["upFloor","fairy","downFloor"],
["downFloor","thief","upFloor"],
["blackSlime","redSlime","greenSlime","upFloor","specialDoor","downFloor","greenSlime","redSlime","blackSlime"],
["swordsman","yellowDoor","yellowDoor","ghostSkeleton","woman","soldier","ghostSkeleton","ghostSkeleton","redPotion","yellowKey","yellowKey","yellowDoor","yellowKey","yellowKey","blueKey","blueGem","yellowDoor","redKnight","downFloor","zombieKnight","zombieKnight","upFloor","soldier","yellowDoor","redGem","bluePotion","yellowKey","yellowKey","yellowDoor","yellowKey","yellowKey","redPotion","ghostSkeleton","ghostSkeleton","slimeMan","man","ghostSkeleton","yellowDoor","yellowDoor","slimeMan"],
["blueGem","yellowDoor","soldier","yellowKey","blueGuard","redGem","yellowKey","yellowKey","specialDoor","blueDoor","slimeMan","yellowKey","blueGuard","slimeMan","yellowKey","blueKey","yellowDoor","downFloor","yellowDoor","ghostSkeleton","redKnight","ghostSkeleton","yellowDoor","yellowDoor","blueShop-left","yellowKey","yellowKey","blueShop","upFloor","bluePotion","yellowKey","blueKey","yellowKey","blueShop-right"],
["upFloor","blueDoor","slimeMan","yellowDoor","swordsman","yellowKey","redPotion","slimeMan","soldier","yellowDoor","yellowDoor","zombieKnight","zombieKnight","man","swordsman","blueDoor","redPotion","yellowDoor","yellowKey","slimeMan","yellowKey","zombieKnight","ghostSkeleton","soldier","yellowDoor","yellowDoor","yellowDoor","slimeMan","yellowDoor","ghostSkeleton","soldier","sword3","downFloor","bluePotion","ghostSkeleton","soldier"],
["downFloor","swordsman","bluePotion","slimeMan","yellowDoor","yellowDoor","soldier","redPotion","ghostSkeleton","yellowDoor","yellowDoor","slimeMan","greenSlime","yellowDoor","yellowDoor","ghostSkeleton","yellowKey","upFloor","redKnight","swordsman","yellowDoor","yellowDoor","redSlime","yellowDoor","yellowDoor","yellowKey","blackSlime","yellowDoor","yellowDoor","redKnight","soldier","yellowKey","yellowKey","yellowKey","blueGem","redPotion","soldier","yellowDoor","yellowDoor","bat","redPotion","redGem"],
["blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","blueWall","bluePotion","magicDragon","magicDragon","magicDragon","specialDoor","bluePotion","snow","magicDragon","magicDragon","magicDragon","downFloor","bluePotion","magicDragon","magicDragon","magicDragon","upFloor"],
["man","slimeMan","redKnight","swordsman","bluePotion","yellowDoor","soldier","soldier","slimeMan","yellowKey","yellowDoor","ghostSkeleton","redKnight","yellowDoor","zombieKnight","slimeMan","zombieKnight","redKnight","swordsman","yellowDoor","downFloor","slimeMan","swordsman","redKnight","upFloor"],
["upFloor","blueDoor","redPotion","soldier","man","yellowDoor","redPotion","yellowKey","blueGem","yellowKey","slimeMan","redPotion","redPotion","yellowKey","redGem","yellowKey","blueKey","redPotion","yellowKey","bomb","bluePotion","yellowKey","blueKey","redPotion","redPotion","redKey","redGem","blueGem","bluePotion","redPotion","redPotion","yellowKey","redGem","blueGem","yellowKey","soldier","redPotion","yellowKey","redGem","blueGem","ghostSkeleton","bluePotion","redKnight","swordsman","redKnight","downFloor"],
["downFloor","ghostSkeleton","blueGuard","shield3","specialDoor","redDoor","soldier","blueGuard","slimeMan","soldier","blueDoor","yellowDoor","woman","blueDoor","blueDoor","blueGem","swordsman","yellowKey","redPotion","yellowDoor","ghostSkeleton","swordsman","zombie","slimeMan","yellowDoor","yellowDoor","yellowKey","yellowKey","yellowKey","yellowKey","soldier","redKnight","redKnight","upFloor","yellowDoor","ghostSkeleton","yellowDoor","ghostSkeleton","bluePotion"],
["man","yellowDoor","yellowDoor","yellowDoor","blueDoor","ghostSkeleton","ghostSkeleton","yellowKey","yellowDoor","yellowDoor","yellowDoor","yellowDoor","swordsman","yellowDoor","yellowDoor","yellowDoor","blueGem","slimeMan","redKnight","yellowDoor","woman","slimeMan","redPotion","yellowDoor","yellowDoor","redKnight","downFloor","yellowKey","soldier","redGem","ghostSkeleton","upFloor"],
["blueGem","bluePotion","redGem","swordsman","yellowKey","swordsman","ghostSkeleton","redKnight","swordsman","ghostSkeleton","blueDoor","ghostSkeleton","slimeMan","yellowKnight","redDoor","soldier","slimeMan","redKnight","soldier","yellowDoor","redKnight","soldier","redPotion","soldier","redKnight","swordsman","downFloor"],
["redPotion","yellowDoor","yellowDoor","yellowDoor","redBat","yellowDoor","yellowDoor","yellowDoor","bluePotion","redWizard","redBat","yellowDoor","brownWizard","redPotion","yellowKey","yellowKey","blueKey","slimelord","yellowDoor","yellowKey","redGem","whiteKing","blueDoor","downFloor","yellowDoor","yellowDoor","yellowDoor","upFloor","whiteKing","blueDoor","blueKey","slimelord","yellowDoor","yellowKey","blueGem","yellowDoor","brownWizard","redPotion","yellowKey","yellowKey","redBat","redPotion","yellowDoor","yellowDoor","yellowDoor","redBat","yellowDoor","yellowDoor","yellowDoor","bluePotion"],
["upFloor","man","yellowDoor","bluePotion","redBat","yellowKey","yellowKey","yellowKey","slimelord","yellowDoor","slimelord","redBat","yellowKey","blueGem","yellowDoor","T330","darkKnight","downFloor","redKey","yellowDoor","yellowKey","yellowKey","brownWizard","whiteKing","yellowKey","yellowKey","blueKey","yellowKey","yellowKey","blueKey","yellowKey","yellowKey","redWizard","brownWizard","whiteKing","yellowKey","yellowKey"],
["downFloor","blueDoor","yellowDoor","upFloor","slimelord","redBat","yellowDoor","yellowDoor","yellowDoor","redWizard","bluePotion","bluePotion","bluePotion","slimelord","slimelord","darkKnight","bluePotion","darkKnight","blueDoor","yellowDoor","darkKnight","yellowDoor","T330","yellowDoor","yellowDoor","whiteKing","shield4","brownWizard","yellowKey","redBat","yellowDoor","redPotion","yellowDoor","blueKey"],
["upFloor","redPotion","redGuard","redPotion","shield5","redPotion","specialDoor","redPotion","redGuard"],
["downFloor","redGem","blueDoor","blueGem","blueDoor","redGem","blueGem","redDoor","upFly","darkKnight","darkKnight","yellowDoor","specialDoor","brownWizard","redWizard","darkKnight","darkKnight","yellowDoor","yellowDoor","redWizard","brownWizard","redBat","specialDoor","whiteKing","whiteKing","woman","man","yellowDoor","redWizard","upFloor","slimelord","yellowDoor","yellowKey","yellowDoor","bluePotion"],
["redPotion","redGem","soldier","zombie","bigBat","redWizard","brownWizard","skeleton","yellowDoor","yellowDoor","swordsman","bigKey","brownWizard","redSlime","blueShop-left","redKnight","slimelord","blueShop","blueDoor","blueShop-right","redPotion","yellowDoor","redWizard","man","blueDoor","redBat","yellowDoor","yellowDoor","slimelord","brownWizard","downFloor","yellowDoor","yellowDoor","yellowDoor","upFloor"],
["upFloor","blackKing","yellowDoor","blueDoor","redBat","yellowDoor","yellowDoor","blueDoor","redPotion","woman","redWizard","blueKey","redGem","brownWizard","brownWizard","yellowKey","blueGem","redGem","yellowDoor","yellowDoor","blackKing","yellowDoor","yellowKey","slimelord","slimelord","brownWizard","yellowKey","blueGem","yellowKey","redBat","yellowDoor","downFloor"],
["redBat","brownWizard","upFloor","bluePotion","redWizard","blueDoor","man","slimelord","redGem","blueGem","yellowDoor","brownWizard","yellowDoor","darkKnight","blueDoor","redPotion","bluePotion","redPotion","whiteKing","whiteKing","redPotion","specialDoor","sword4","redPotion","whiteKing","whiteKing","brownWizard","blueDoor","downFloor"],
["downFloor","redDoor","darkKnight","redWizard","specialDoor","specialDoor","darkKnight","redWizard"],
["star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","thief","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star","star"]]

const walls = [0, 44, 38, 42, 38, 44, 44, 47, 43, 37, 44, 39, 40, 28, 37, 38, 32, 39, 36, 37, 40, 16, 104, 0, 57, 35, 46, 92, 15, 86, 80, 40, 40, 37, 42, 62, 56, 45, 39, 25, 26, 41, 39, 39, 18, 40, 41, 40, 43, 38, 16]

// function origin() {
//   console.log({ seed: core.getFlag('__seed__'), rand: core.getFlag('__rand__') }); window.result = {};
//   //怪物道具打乱
//   for (var z = 1; z < 51; z++) {

//     var ranList = [];

//     //道具怪物楼梯随机

//     function shuffleArray(array) {
//       array.sort(() => 0.5 - core.rand());
//     }

//     //怪物道具随机
//     for (var x = 1; x < 12; x++) {
//       for (var y = 1; y < 12; y++) {
//         if (core.getBlockId(x, y, "MT" + z) != "yellowWall" && core.getBlockCls(x, y, "MT" + z) != null && core.getBlockId(x, y, "MT" + z) != "none" && core.getBlockId(x, y, "MT" + z) != "N331") {
//           ranList.push(core.getBlockId(x, y, "MT" + z));
//         }
//       }
//     }

//     window.result[`ranList${z}`] = [...ranList];

//     shuffleArray(ranList);

//     //强迫症魔王，同一层的所有墙只能用同一种东西修补
//     //开始随机放置
//     // if (core.getFlag("crazy", 0) === 1) {
//     var select1 = core.rand(ranList.length);
//     for (var x = 1; x < 12; x++) {
//       for (var y = 1; y < 12; y++) {
//         if (core.getBlockId(x, y, "MT" + z) === "yellowWall") {
//           core.setBlock(ranList[select1], x, y, "MT" + z);
//         }
//       }
//     }
//     // }
//     shuffleArray(ranList);

//     ranList.splice(0, ranList.length);
//   }
// }


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


const requires = {
  2: ['woman'],
  5: ['sword1'],
  // 17: ['sword2'],
  // 33: ['sword3'],
  // 48: ['sword4'],
  13: ['sword5'],
  // 9: ['shield1'],
  // 11: ['shield2'],
  // 38: ['shield3'],
  // 43: ['shield4'],
  44: ['shield5'],
  16: ['superPotion'],
}

const options = {
  1: 'bluePotion',
  2: 'bluePotion',
  3: 'bluePotion',
  4: 'bluePotion',
  7: 'bluePotion',
  8: 'bluePotion',
  10: 'bluePotion',
  11: 'bluePotion',
  12: 'bluePotion',
  15: 'bluePotion',
  17: 'bluePotion',
  20: 'bluePotion',
  31: 'bluePotion',
  32: 'bluePotion',
  33: 'bluePotion',
  34: 'bluePotion',
  35: 'bluePotion',
  36: 'bluePotion',
  37: 'bluePotion',
  38: 'bluePotion',
  40: 'bluePotion',
  41: 'bluePotion',
  42: 'bluePotion',
  43: 'bluePotion',
  45: 'bluePotion',
  46: 'redPotion',
  46: 'redPotion',
  48: 'bluePotion',
}

function getResult(seed) {

  function callback(rand) {
    function shuffleArray(array) {
      array.sort(() => 0.5 - rand());
    }
    let flag = 11;
    const result = [seed]
    let attrs = {
      seed,
      hp: 36500,
      atk: 312,
      def: 316,
      woman: 1,
      superPotion: 1,
    }

    for (var z = 1; z < 50; z++) {

      let ratio = 1;
      if (z < 11) {
        ratio = 1
      } else if (z < 21) {
        ratio = 2
      } else if (z < 31) {
        ratio = 3
      } else if (z < 41) {
        ratio = 4
      } else if (z < 50) {
        ratio = 5
      }

      var ranList = [...items[z]];
      shuffleArray(ranList);

      //强迫症魔王，同一层的所有墙只能用同一种东西修补
      //开始随机放置


      // var select1 = rand(ranList.length);
      // if (requires[z]) {
      //   if (!requires[z].includes(ranList[select1])) {
      //     return false
      //     // flag --
      //   }
      // }

      // const selection = ranList[select1]

      // if (selection === 'redPotion') {
      //   attrs.hp += 50 * ratio * walls[z]
      // } else if (selection === 'bluePotion') {
      //   attrs.hp += 200 * ratio * walls[z]
      // } else if (selection === 'redGem') {
      //   attrs.atk += 1 * ratio * walls[z]
      // } else if (selection === 'blueGem') {
      //   attrs.def += 1 * ratio * walls[z]
      // } else if (selection === 'sword1') {
      //   attrs.atk += 10 * walls[z]
      // } else if (selection === 'sword2') {
      //   attrs.atk += 20 * walls[z]
      // } else if (selection === 'sword3') {
      //   attrs.atk += 40 * walls[z]
      // } else if (selection === 'sword4') {
      //   attrs.atk += 50 * walls[z]
      // } else if (selection === 'sword5') {
      //   attrs.atk += 100 * walls[z]
      // } else if (selection === 'shield1') {
      //   attrs.def += 10 * walls[z]
      // } else if (selection === 'shield2') {
      //   attrs.def += 20 * walls[z]
      // } else if (selection === 'shield3') {
      //   attrs.def += 40 * walls[z]
      // } else if (selection === 'shield4') {
      //   attrs.def += 50 * walls[z]
      // } else if (selection === 'shield5') {
      //   attrs.def += 100 * walls[z]
      // }

      
      for (let i = 0; i < walls[z]; i++) {
        // console.count(z)
        var select1 = rand(ranList.length);
        const selection = ranList[select1]

        if (selection === 'redPotion') {
          attrs.hp += 50 * ratio
        } else if (selection === 'bluePotion') {
          attrs.hp += 200 * ratio
        } else if (selection === 'redGem') {
          attrs.atk += 1 * ratio
        } else if (selection === 'blueGem') {
          attrs.def += 1 * ratio
        } else if (selection === 'sword1') {
          attrs.atk += 10
        } else if (selection === 'sword2') {
          attrs.atk += 20
        } else if (selection === 'sword3') {
          attrs.atk += 40
        } else if (selection === 'sword4') {
          attrs.atk += 50
        } else if (selection === 'sword5') {
          attrs.atk += 100
        } else if (selection === 'shield1') {
          attrs.def += 10
        } else if (selection === 'shield2') {
          attrs.def += 20
        } else if (selection === 'shield3') {
          attrs.def += 40
        } else if (selection === 'shield4') {
          attrs.def += 50
        } else if (selection === 'shield5') {
          attrs.def += 100
        } else if (selection === 'woman' && z === 2) {
          attrs.woman += 1
        } else if (selection === 'superPotion') {
          attrs.superPotion += 1
        }
      }


      // result.push(ranList[select1])

      shuffleArray(ranList);

    }
    attrs.atk = attrs.atk * (1.03 ** (attrs.woman))
    attrs.def = attrs.def * (1.03 ** (attrs.woman))
    // attrs.atk = attrs.atk * (1.03 ** (1 + walls[2])) 
    // attrs.def = attrs.def * (1.03 ** (1 + walls[2]))
    attrs.atk = Math.floor(attrs.atk)
    attrs.def = Math.floor(attrs.def)
    attrs.hp += 7.4 * (attrs.atk + attrs.def) * attrs.superPotion
    // attrs.hp += 7.4 * (attrs.atk + attrs.def) * (1 + walls[16])
    attrs.hp = Math.floor(attrs.hp)
    if (attrs.hp < 190000) {
      return false
    }

    return JSON.stringify(attrs)
    // return result
  }
  return getDataBySeed(seed, callback, 0);
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
  // [5603]
  // .forEach(seed => {
  //   const result = getResult(seed);
  //   console.log(result)
  // })
}

test()



// utils.prototype.__init_seed = function() {
//   core.setFlag("__seed__", 5603);
//   core.setFlag("__rand__", 5603)
// }

// 全随机
// {"seed":6098602,"hp":205455,"atk":558,"def":1367,"woman":4,"superPotion":9}
// {"seed":10546110,"hp":216640,"atk":825,"def":1337,"woman":8,"superPotion":8}
// {"seed":55086508,"hp":201189,"atk":746,"def":1498,"woman":3,"superPotion":7}
// {"seed":57273597,"hp":227600,"atk":606,"def":1144,"woman":4,"superPotion":11}
// {"seed":58301325,"hp":200251,"atk":898,"def":863,"woman":5,"superPotion":8}
// {"seed":71653482,"hp":202262,"atk":641,"def":1167,"woman":5,"superPotion":9}
// {"seed":72610628,"hp":200742,"atk":747,"def":1499,"woman":3,"superPotion":7}
// {"seed":89791698,"hp":216790,"atk":827,"def":1335,"woman":8,"superPotion":8}
// {"seed":98445872,"hp":205657,"atk":955,"def":1111,"woman":6,"superPotion":8}
// {"seed":108121298,"hp":219110,"atk":572,"def":1078,"woman":2,"superPotion":11}
// {"seed":118540421,"hp":205705,"atk":557,"def":1368,"woman":4,"superPotion":9}
// {"seed":162023431,"hp":205755,"atk":557,"def":1368,"woman":4,"superPotion":9}
// {"seed":201180659,"hp":206098,"atk":1184,"def":1176,"woman":7,"superPotion":7}
// {"seed":231863275,"hp":202846,"atk":644,"def":1163,"woman":5,"superPotion":9}
// {"seed":238895746,"hp":201289,"atk":746,"def":1498,"woman":3,"superPotion":7}
// 250000000

// 强迫版
// {"seed":2419646,"hp":4487790,"atk":11249,"def":6701}
// {"seed":2420878,"hp":4627987,"atk":11249,"def":7486}
// {"seed":7833214,"hp":6697572,"atk":19990,"def":7170}
// {"seed":14848418,"hp":4495890,"atk":11249,"def":6701}
// {"seed":22100542,"hp":4655284,"atk":11249,"def":7452}
// {"seed":30216332,"hp":4627987,"atk":11249,"def":7486}
// {"seed":35207731,"hp":4957081,"atk":11496,"def":8490}
// {"seed":42428677,"hp":4559040,"atk":11249,"def":6701}
// {"seed":59302200,"hp":4715071,"atk":11249,"def":7480}
// {"seed":70818831,"hp":4468690,"atk":11249,"def":6701}
// {"seed":88692057,"hp":6697572,"atk":19990,"def":7170}
// {"seed":94048000,"hp":4749378,"atk":12389,"def":6701}
// {"seed":99679213,"hp":5913435,"atk":16585,"def":7271}
// {"seed":106446103,"hp":6526174,"atk":19559,"def":6954}
// {"seed":116771808,"hp":4749378,"atk":12389,"def":6701}
// {"seed":131308266,"hp":4495890,"atk":11249,"def":6701}
// {"seed":131596910,"hp":4957081,"atk":11496,"def":8490}
// {"seed":132369596,"hp":4559040,"atk":11249,"def":6701}
// {"seed":163888727,"hp":5081064,"atk":11249,"def":9171}
// {"seed":167788668,"hp":4728119,"atk":11901,"def":6837}
// {"seed":175046655,"hp":4495890,"atk":11249,"def":6701}
// {"seed":185775170,"hp":6526174,"atk":19559,"def":6954}
// {"seed":198883554,"hp":4521383,"atk":11249,"def":6840}
// {"seed":232305770,"hp":5635888,"atk":16189,"def":6701}
// {"seed":234628100,"hp":4510322,"atk":11502,"def":6701}
// {"seed":237705397,"hp":4655284,"atk":11249,"def":7452}
// {"seed":256468905,"hp":4728119,"atk":11901,"def":6837}
// {"seed":271017306,"hp":4495890,"atk":11249,"def":6701}
// {"seed":271288231,"hp":5913435,"atk":16585,"def":7271}
// {"seed":279024148,"hp":4682611,"atk":11800,"def":6948}
// {"seed":283936600,"hp":4957081,"atk":11496,"def":8490}
// {"seed":293750981,"hp":6697572,"atk":19990,"def":7170}
// {"seed":324917798,"hp":4856756,"atk":12389,"def":7334}
// {"seed":340579877,"hp":4655284,"atk":11249,"def":7452}
// {"seed":378114565,"hp":4728119,"atk":11901,"def":6837}
// {"seed":388296096,"hp":4468690,"atk":11249,"def":6701}
// {"seed":394464981,"hp":6492230,"atk":19420,"def":6954}
// {"seed":398269111,"hp":4627987,"atk":11249,"def":7486}
// {"seed":402882623,"hp":5635888,"atk":16189,"def":6701}
// {"seed":449258274,"hp":4495890,"atk":11249,"def":6701}
// {"seed":478843828,"hp":4487790,"atk":11249,"def":6701}
// {"seed":491148605,"hp":4856756,"atk":12389,"def":7334}