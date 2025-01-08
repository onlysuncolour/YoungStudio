// https://h5mota.com/games/51_instant_noodles/

const items = {
  "ranList1": [ "upFloor", "redPotion", "yellowKey", "redPotion", "redPotion", "skeleton", "yellowDoor", "skeletonSoilder", "yellowDoor", "fly", "greenSlime", "yellowKey", "yellowKey", "redSlime", "yellowDoor", "greenSlime", "yellowKey", "yellowDoor", "redGem", "blueGem", "bat", "yellowKey", "redPotion", "bluePriest", "yellowDoor", "bat", "greenSlime", "yellowDoor", "bat", "bluePotion", "greenSlime" ],
  "ranList2": [ "downFloor", "upFloor", "blueDoor", "yellowKey", "yellowKey", "bluePotion", "bluePotion", "yellowKey", "bluePotion", "steelDoor", "steelDoor", "steelDoor", "blueGuard", "blueGuard", "steelDoor", "steelDoor", "steelDoor", "man", "woman" ],
  "ranList3": [ "yellowKey", "bluePriest", "yellowDoor", "yellowDoor", "skeleton", "redPotion", "downFloor", "blueGem", "redPotion", "yellowKey", "redGem", "bat", "yellowKey", "bluePotion", "yellowKey", "bluePotion", "yellowKey", "blueKey", "yellowKey", "bluePotion", "yellowKey", "greenSlime", "redSlime", "yellowDoor", "yellowDoor", "yellowDoor", "bat", "bluePriest", "redPotion", "man", "redPotion", "yellowKey", "upFloor" ],
  "ranList4": [ "redPotion", "redSlime", "yellowDoor", "upFloor", "blueKey", "bluePriest", "yellowDoor", "yellowKey", "greenSlime", "greenSlime", "yellowKey", "yellowDoor", "yellowDoor", "bat", "greenSlime", "blueShop-left", "yellowKey", "yellowKey", "blueShop", "blueDoor", "redSlime", "blueShop-right", "redGem", "yellowDoor", "bluePriest", "greenSlime", "yellowKey", "skeleton", "redPotion", "man", "skeletonSoilder", "yellowDoor", "bluePotion", "yellowDoor", "downFloor" ],
  "ranList5": [ "upFloor", "yellowKey", "yellowKey", "blueGem", "downFloor", "yellowDoor", "skeletonSoilder", "yellowKey", "bat", "bluePriest", "redPotion", "redSlime", "yellowDoor", "bat", "yellowDoor", "yellowKey", "bat", "greenSlime", "greenSlime", "greenSlime", "yellowKey", "yellowKey", "yellowDoor", "greenSlime", "yellowKey", "yellowKey", "blueWall", "yellowDoor", "redSlime", "redSlime", "sword1" ],
  "ranList6": [ "downFloor", "bluePriest", "yellowDoor", "yellowDoor", "bat", "greenSlime", "yellowKey", "yellowKey", "yellowDoor", "redSlime", "yellowKey", "yellowKey", "redSlime", "bluePriest", "man", "blueGem", "yellowDoor", "skeleton", "yellowKey", "bluePriest", "yellowDoor", "redPotion", "woman", "skeleton", "yellowDoor", "redPotion", "yellowKey", "skeletonSoilder", "redSlime", "redPotion", "greenSlime", "skeleton", "yellowDoor", "yellowDoor", "bat", "redSlime", "upFloor" ],
  "ranList7": [ "upFloor", "yellowDoor", "yellowDoor", "greenSlime", "skeletonSoilder", "redSlime", "redGem", "redPotion", "bat", "yellowDoor", "yellowDoor", "greenSlime", "bluePriest", "redSlime", "blueDoor", "yellowDoor", "bat", "yellowKey", "yellowKey", "woman", "skeletonSoilder", "yellowDoor", "yellowDoor", "redSlime", "bluePriest", "bluePotion", "yellowKey", "yellowKey", "redPotion", "skeleton", "skeletonSoilder", "bluePotion", "yellowKey", "yellowKey", "greenSlime", "redSlime", "greenSlime", "yellowDoor", "yellowDoor", "downFloor" ],
  "ranList8": [ "downFloor", "yellowDoor", "redPotion", "yellowDoor", "greenSlime", "redSlime", "bat", "yellowDoor", "yellowKey", "greenSlime", "blueDoor", "yellowDoor", "yellowKey", "redSlime", "bat", "redGem", "yellowKey", "yellowKey", "yellowDoor", "yellowKey", "blueGem", "upFloor", "yellowDoor", "skeleton", "greenSlime", "bluePriest", "bat", "blueKey", "yellowKey", "bluePriest", "redPotion", "yellowKey", "bluePotion", "yellowGuard", "yellowDoor", "redKey", "specialDoor", "yellowDoor", "skeletonSoilder", "yellowKey", "redPotion", "yellowGuard", "yellowDoor", "skeleton" ],
  "ranList9": [ "skeletonSoilder", "blueGem", "yellowKey", "skeletonSoilder", "yellowDoor", "upFloor", "yellowKey", "yellowKey", "redPotion", "skeleton", "bat", "yellowDoor", "blueDoor", "yellowDoor", "yellowDoor", "skeletonSoilder", "yellowKey", "yellowKey", "yellowDoor", "skeleton", "downFloor", "blueDoor", "redGem", "yellowDoor", "yellowKey", "redSlime", "bat", "yellowDoor", "yellowDoor", "yellowDoor", "greenSlime", "yellowDoor", "shield1", "yellowKey", "bluePriest", "greenSlime", "blueWall", "skeleton", "redPotion", "skeletonSoilder", "yellowDoor", "bluePriest", "redPotion" ],
  "ranList10": [ "skeleton", "skeleton", "yellowDoor", "downFloor", "skeleton", "skeletonSoilder", "blueGem", "skeletonSoilder", "skeleton", "skeleton", "yellowDoor", "specialDoor", "bluePriest", "skeletonCaptain", "redDoor", "specialDoor", "bluePriest", "skeleton", "skeleton", "yellowDoor", "skeleton", "skeletonSoilder", "redGem", "skeletonSoilder", "skeleton", "skeleton", "yellowDoor", "bluePotion" ],
  "ranList11": [ "redPriest", "bluePotion", "yellowKey", "yellowKey", "shield2", "specialDoor", "blueDoor", "bigBat", "yellowKey", "redPriest", "yellowKey", "bigBat", "blackSlime", "yellowKey", "redGem", "yellowDoor", "zombie", "yellowDoor", "bat", "bigBat", "downFloor", "yellowDoor", "yellowDoor", "yellowDoor", "zombie", "redPriest", "blackSlime", "bluePotion", "yellowDoor", "redPotion", "yellowDoor", "bigBat", "redPotion", "bat", "yellowKey", "blackSlime", "bigBat", "upFloor" ],
  "ranList12": [ "woman", "yellowDoor", "yellowKey", "yellowKey", "upFloor", "blueWall", "redPriest", "yellowKey", "blueKey", "bigBat", "zombie", "yellowDoor", "yellowDoor", "bat", "yellowKey", "redPriest", "blueShop-left", "redPotion", "redGem", "yellowDoor", "zombie", "bluePotion", "blueShop", "yellowKey", "redPriest", "redPriest", "blueShop-right", "redPotion", "yellowDoor", "bat", "redPotion", "yellowKey", "blueDoor", "blackSlime", "blueWall", "zombie", "blueGem", "blueWall", "bigBat", "blackSlime", "yellowDoor", "zombie", "downFloor" ],
  "ranList13": [ "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "downFloor", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "sword5", "lava", "lava", "lava", "lava", "yellowDoor", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "upFloor" ],
  "ranList14": [ "zombieKnight", "specialDoor", "redPotion", "yellowDoor", "redPriest", "blueKey", "zombieKnight", "blueDoor", "blackSlime", "zombieKnight", "yellowDoor", "redPriest", "bigBat", "zombie", "yellowDoor", "blueGem", "blackSlime", "blueDoor", "redPotion", "yellowKey", "rock", "yellowDoor", "yellowDoor", "blueWall", "upFloor", "redPotion", "zombieKnight", "yellowDoor", "bigBat", "blackSlime", "yellowKey", "redPotion", "yellowDoor", "yellowKey", "yellowDoor", "zombieKnight", "blackSlime", "yellowKey", "yellowKey", "zombie", "yellowDoor", "downFloor" ],
  "ranList15": [ "blueGem", "zombie", "yellowDoor", "blackSlime", "bigBat", "zombieKnight", "yellowDoor", "redPriest", "blackSlime", "yellowKey", "blueKey", "yellowKey", "bigBat", "yellowDoor", "octopus", "octopus", "octopus", "upFloor", "specialDoor", "pickaxe", "octopus", "octopus", "octopus", "downFloor", "octopus", "octopus", "octopus", "yellowDoor", "thief", "bigBat", "yellowDoor", "yellowDoor", "bat", "bigBat", "bat", "blackSlime", "yellowDoor", "redPriest", "bluePotion", "woman" ],
  "ranList16": [ "yellowKey", "yellowKey", "yellowKey", "redGem", "redPotion", "blueGem", "man", "bigBat", "redPriest", "bigBat", "yellowKey", "yellowKey", "blueWall", "blackSlime", "rock", "yellowDoor", "yellowDoor", "yellowDoor", "zombie", "redPotion", "bigBat", "downFloor", "blueDoor", "zombieKnight", "yellowDoor", "upFloor", "yellowKey", "yellowKey", "bigBat", "yellowDoor", "yellowDoor", "blackSlime", "bigBat", "slimeMan", "yellowDoor", "zombie", "yellowDoor", "redPriest", "blueWall", "bigBat", "redPotion", "blueKey", "superPotion" ],
  "ranList17": [ "yellowGuard", "yellowGuard", "redPotion", "sword2", "specialDoor", "specialDoor", "yellowDoor", "yellowGuard", "yellowGuard", "bigBat", "zombieKnight", "yellowDoor", "zombie", "upFloor", "redPriest", "downFloor", "bigBat", "blueDoor", "blackSlime", "bigBat", "redGem", "yellowKey", "zombieKnight", "zombie", "bluePotion", "specialDoor", "specialDoor", "yellowDoor", "blueGem", "yellowKey", "zombieKnight", "zombie", "redPotion" ],
  "ranList18": [ "upFloor", "yellowDoor", "rock", "yellowDoor", "redPriest", "redPotion", "redPotion", "zombie", "yellowKey", "redGem", "man", "rock", "blueDoor", "yellowDoor", "yellowDoor", "bigBat", "bigBat", "zombieKnight", "bigBat", "bigBat", "yellowKey", "downFloor", "blueWall", "blueDoor", "zombieKnight", "blackSlime", "blackSlime", "yellowKey", "yellowDoor", "yellowDoor", "yellowDoor", "blackSlime", "blackSlime", "redPriest", "zombie", "blackSlime", "bigBat", "rock", "yellowKey", "blueGem", "yellowKey", "yellowKey", "blueKey", "yellowKey", "yellowKey", "yellowDoor", "redPriest", "redPotion" ],
  "ranList19": [ "downFloor", "yellowDoor", "bat", "yellowDoor", "bigBat", "yellowDoor", "blackSlime", "blackSlime", "bigBat", "redPotion", "zombieKnight", "yellowKey", "yellowDoor", "rock", "yellowKey", "redPriest", "cross", "blueWall", "blueDoor", "zombieKnight", "upFloor", "rock", "yellowKey", "blueKey", "zombieKnight", "yellowKey", "zombieKnight", "yellowDoor", "redPotion", "yellowKey", "bigBat", "yellowDoor", "blackSlime", "yellowKey", "bat", "redGem", "blackSlime", "yellowDoor", "zombie", "bigBat" ],
  "ranList20": [ "blueGem", "yellowKey", "bat", "yellowDoor", "redPotion", "redGem", "blueDoor", "bat", "rock", "redPriest", "bigBat", "bigBat", "bigBat", "upFloor", "specialDoor", "bigBat", "bigBat", "redDoor", "downFloor", "bigBat", "bigBat", "bigBat", "redPriest", "redPotion", "blueDoor", "bat", "rock", "bluePotion", "yellowKey", "bat", "yellowDoor", "redPotion" ],
  "ranList21": [ "downFloor", "man", "upFloor" ],
  "ranList22": [ "upFloor", "downFloor" ],
  "ranList23": [ "downFloor", "upFloor", "man" ],
  "ranList24": [ "downFloor", "upFloor", "redDoor" ],
  "ranList25": [ "upFloor", "downFloor", "blackMagician", "redDoor" ],
  "ranList26": [ "downFloor", "upFloor", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "princess", "lava", "redDoor", "redDoor", "redDoor", "lava", "lava", "lava", "lava", "lava", "lava", "lava", "lava" ],
  "ranList27": [ "downFloor", "man", "upFloor" ],
  "ranList28": [ "upFloor", "fairy", "downFloor" ],
  "ranList29": [ "downFloor", "thief", "upFloor" ],
  "ranList30": [ "blackSlime", "redSlime", "greenSlime", "upFloor", "specialDoor", "downFloor", "greenSlime", "redSlime", "blackSlime" ],
  "ranList31": [ "swordsman", "yellowDoor", "yellowDoor", "ghostSkeleton", "woman", "soldier", "ghostSkeleton", "ghostSkeleton", "redPotion", "yellowKey", "yellowKey", "yellowDoor", "yellowKey", "yellowKey", "blueKey", "blueGem", "yellowDoor", "redKnight", "downFloor", "zombieKnight", "zombieKnight", "upFloor", "soldier", "yellowDoor", "redGem", "bluePotion", "yellowKey", "yellowKey", "yellowDoor", "yellowKey", "yellowKey", "redPotion", "ghostSkeleton", "ghostSkeleton", "slimeMan", "man", "ghostSkeleton", "yellowDoor", "yellowDoor", "slimeMan" ],
  "ranList32": [ "blueGem", "yellowDoor", "soldier", "yellowKey", "blueGuard", "redGem", "yellowKey", "yellowKey", "specialDoor", "blueDoor", "slimeMan", "yellowKey", "blueGuard", "slimeMan", "yellowKey", "blueKey", "yellowDoor", "downFloor", "yellowDoor", "ghostSkeleton", "redKnight", "ghostSkeleton", "yellowDoor", "yellowDoor", "blueShop-left", "yellowKey", "yellowKey", "blueShop", "upFloor", "bluePotion", "yellowKey", "blueKey", "yellowKey", "blueShop-right" ],
  "ranList33": [ "upFloor", "blueDoor", "slimeMan", "yellowDoor", "swordsman", "yellowKey", "redPotion", "slimeMan", "soldier", "yellowDoor", "yellowDoor", "zombieKnight", "zombieKnight", "man", "swordsman", "blueDoor", "redPotion", "yellowDoor", "yellowKey", "slimeMan", "yellowKey", "zombieKnight", "ghostSkeleton", "soldier", "yellowDoor", "yellowDoor", "yellowDoor", "slimeMan", "yellowDoor", "ghostSkeleton", "soldier", "sword3", "downFloor", "bluePotion", "ghostSkeleton", "soldier" ],
  "ranList34": [ "downFloor", "swordsman", "bluePotion", "slimeMan", "yellowDoor", "yellowDoor", "soldier", "redPotion", "ghostSkeleton", "yellowDoor", "yellowDoor", "slimeMan", "greenSlime", "yellowDoor", "yellowDoor", "ghostSkeleton", "yellowKey", "upFloor", "redKnight", "swordsman", "yellowDoor", "yellowDoor", "redSlime", "yellowDoor", "yellowDoor", "yellowKey", "blackSlime", "yellowDoor", "yellowDoor", "redKnight", "soldier", "yellowKey", "yellowKey", "yellowKey", "blueGem", "redPotion", "soldier", "yellowDoor", "yellowDoor", "bat", "redPotion", "redGem" ],
  "ranList35": [ "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "blueWall", "bluePotion", "magicDragon", "magicDragon", "magicDragon", "specialDoor", "bluePotion", "snow", "magicDragon", "magicDragon", "magicDragon", "downFloor", "bluePotion", "magicDragon", "magicDragon", "magicDragon", "upFloor" ],
  "ranList36": [ "man", "slimeMan", "redKnight", "swordsman", "bluePotion", "yellowDoor", "soldier", "soldier", "slimeMan", "yellowKey", "yellowDoor", "ghostSkeleton", "redKnight", "yellowDoor", "zombieKnight", "slimeMan", "zombieKnight", "redKnight", "swordsman", "yellowDoor", "downFloor", "slimeMan", "swordsman", "redKnight", "upFloor" ],
  "ranList37": [ "upFloor", "blueDoor", "redPotion", "soldier", "man", "yellowDoor", "redPotion", "yellowKey", "blueGem", "yellowKey", "slimeMan", "redPotion", "redPotion", "yellowKey", "redGem", "yellowKey", "blueKey", "redPotion", "yellowKey", "bomb", "bluePotion", "yellowKey", "blueKey", "redPotion", "redPotion", "redKey", "redGem", "blueGem", "bluePotion", "redPotion", "redPotion", "yellowKey", "redGem", "blueGem", "yellowKey", "soldier", "redPotion", "yellowKey", "redGem", "blueGem", "ghostSkeleton", "bluePotion", "redKnight", "swordsman", "redKnight", "downFloor" ],
  "ranList38": [ "downFloor", "ghostSkeleton", "blueGuard", "shield3", "specialDoor", "redDoor", "soldier", "blueGuard", "slimeMan", "soldier", "blueDoor", "yellowDoor", "woman", "blueDoor", "blueDoor", "blueGem", "swordsman", "yellowKey", "redPotion", "yellowDoor", "ghostSkeleton", "swordsman", "zombie", "slimeMan", "yellowDoor", "yellowDoor", "yellowKey", "yellowKey", "yellowKey", "yellowKey", "soldier", "redKnight", "redKnight", "upFloor", "yellowDoor", "ghostSkeleton", "yellowDoor", "ghostSkeleton", "bluePotion" ],
  "ranList39": [ "man", "yellowDoor", "yellowDoor", "yellowDoor", "blueDoor", "ghostSkeleton", "ghostSkeleton", "yellowKey", "yellowDoor", "yellowDoor", "yellowDoor", "yellowDoor", "swordsman", "yellowDoor", "yellowDoor", "yellowDoor", "blueGem", "slimeMan", "redKnight", "yellowDoor", "woman", "slimeMan", "redPotion", "yellowDoor", "yellowDoor", "redKnight", "downFloor", "yellowKey", "soldier", "redGem", "ghostSkeleton", "upFloor" ],
  "ranList40": [ "blueGem", "bluePotion", "redGem", "swordsman", "yellowKey", "swordsman", "ghostSkeleton", "redKnight", "swordsman", "ghostSkeleton", "blueDoor", "ghostSkeleton", "slimeMan", "yellowKnight", "redDoor", "soldier", "slimeMan", "redKnight", "soldier", "yellowDoor", "redKnight", "soldier", "redPotion", "soldier", "redKnight", "swordsman", "downFloor" ],
  "ranList41": [ "redPotion", "yellowDoor", "yellowDoor", "yellowDoor", "redBat", "yellowDoor", "yellowDoor", "yellowDoor", "bluePotion", "redWizard", "redBat", "yellowDoor", "brownWizard", "redPotion", "yellowKey", "yellowKey", "blueKey", "slimelord", "yellowDoor", "yellowKey", "redGem", "whiteKing", "blueDoor", "downFloor", "yellowDoor", "yellowDoor", "yellowDoor", "upFloor", "whiteKing", "blueDoor", "blueKey", "slimelord", "yellowDoor", "yellowKey", "blueGem", "yellowDoor", "brownWizard", "redPotion", "yellowKey", "yellowKey", "redBat", "redPotion", "yellowDoor", "yellowDoor", "yellowDoor", "redBat", "yellowDoor", "yellowDoor", "yellowDoor", "bluePotion" ],
  "ranList42": [ "upFloor", "man", "yellowDoor", "bluePotion", "redBat", "yellowKey", "yellowKey", "yellowKey", "slimelord", "yellowDoor", "slimelord", "redBat", "yellowKey", "blueGem", "yellowDoor", "T330", "darkKnight", "downFloor", "redKey", "yellowDoor", "yellowKey", "yellowKey", "brownWizard", "whiteKing", "yellowKey", "yellowKey", "blueKey", "yellowKey", "yellowKey", "blueKey", "yellowKey", "yellowKey", "redWizard", "brownWizard", "whiteKing", "yellowKey", "yellowKey" ],
  "ranList43": [ "downFloor", "blueDoor", "yellowDoor", "upFloor", "slimelord", "redBat", "yellowDoor", "yellowDoor", "yellowDoor", "redWizard", "bluePotion", "bluePotion", "bluePotion", "slimelord", "slimelord", "darkKnight", "bluePotion", "darkKnight", "blueDoor", "yellowDoor", "darkKnight", "yellowDoor", "T330", "yellowDoor", "yellowDoor", "whiteKing", "shield4", "brownWizard", "yellowKey", "redBat", "yellowDoor", "redPotion", "yellowDoor", "blueKey" ],
  "ranList44": [ "upFloor", "redPotion", "redGuard", "redPotion", "shield5", "redPotion", "specialDoor", "redPotion", "redGuard" ],
  "ranList45": [ "downFloor", "redGem", "blueDoor", "blueGem", "blueDoor", "redGem", "blueGem", "redDoor", "upFly", "darkKnight", "darkKnight", "yellowDoor", "specialDoor", "brownWizard", "redWizard", "darkKnight", "darkKnight", "yellowDoor", "yellowDoor", "redWizard", "brownWizard", "redBat", "specialDoor", "whiteKing", "whiteKing", "woman", "man", "yellowDoor", "redWizard", "upFloor", "slimelord", "yellowDoor", "yellowKey", "yellowDoor", "bluePotion" ],
  "ranList46": [ "redPotion", "redGem", "soldier", "zombie", "bigBat", "redWizard", "brownWizard", "skeleton", "yellowDoor", "yellowDoor", "swordsman", "bigKey", "brownWizard", "redSlime", "blueShop-left", "redKnight", "slimelord", "blueShop", "blueDoor", "blueShop-right", "redPotion", "yellowDoor", "redWizard", "man", "blueDoor", "redBat", "yellowDoor", "yellowDoor", "slimelord", "brownWizard", "downFloor", "yellowDoor", "yellowDoor", "yellowDoor", "upFloor" ],
  "ranList47": [ "upFloor", "blackKing", "yellowDoor", "blueDoor", "redBat", "yellowDoor", "yellowDoor", "blueDoor", "redPotion", "woman", "redWizard", "blueKey", "redGem", "brownWizard", "brownWizard", "yellowKey", "blueGem", "redGem", "yellowDoor", "yellowDoor", "blackKing", "yellowDoor", "yellowKey", "slimelord", "slimelord", "brownWizard", "yellowKey", "blueGem", "yellowKey", "redBat", "yellowDoor", "downFloor" ],
  "ranList48": [ "redBat", "brownWizard", "upFloor", "bluePotion", "redWizard", "blueDoor", "man", "slimelord", "redGem", "blueGem", "yellowDoor", "brownWizard", "yellowDoor", "darkKnight", "blueDoor", "redPotion", "bluePotion", "redPotion", "whiteKing", "whiteKing", "redPotion", "specialDoor", "sword4", "redPotion", "whiteKing", "whiteKing", "brownWizard", "blueDoor", "downFloor" ],
  "ranList49": [ "downFloor", "redDoor", "darkKnight", "redWizard", "specialDoor", "specialDoor", "darkKnight", "redWizard" ],
  "ranList50": [ "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "thief", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star", "star" ]
}



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


const requires = {
  2: ['woman', 'man'],
  5: ['sword1'],
  17: ['sword2'],
  33: ['sword3'],
  48: ['sword4'],
  13: ['sword5'],
  9: ['shield1'],
  11: ['shield2'],
  38: ['shield3'],
  43: ['shield4'],
  44: ['shield5'],
}

function getResult(seed) {
  function callback(rand) {
    function shuffleArray(array) {
      array.sort(() => 0.5 - rand());
    }
    let flag = 11;
    const result = [seed]

    for (var z = 1; z < 49; z++) {

      var ranList = [...items[`ranList${z}`]];
  
      shuffleArray(ranList);
  
      //强迫症魔王，同一层的所有墙只能用同一种东西修补
      //开始随机放置

      var select1 = rand(ranList.length);
      if (requires[z]) {
        if (!requires[z].includes(ranList[select1])) {
          flag --
        }
      }

      if (flag < 6) {
        return false
      }

      result.push(ranList[select1])
      
      shuffleArray(ranList);
  
    }
    return result
  }
  return getDataBySeed(seed, callback, 0);
}

function test() {
  // 2147483647
  for (let i = 0; i < 10000000; i++) {
    if (i % 1000000 === 0) {
      console.log(i);
    }
    const result = getResult(i);
    if (result) {
      console.log(result);
    }
  }
}

test()



// utils.prototype.__init_seed = function() {
//   core.setFlag("__seed__", 1288253);
//   core.setFlag("__rand__", 1288253)
// }

// [
//   1234040,         'bat',             'woman',
//   'bluePriest',    'skeletonSoilder', 'yellowDoor',
//   'skeleton',      'skeletonSoilder', 'yellowDoor',
//   'yellowDoor',    'skeleton',        'shield2',
//   'blueShop-left', 'lava',            'blackSlime',
//   'octopus',       'redPotion',       'sword2',
//   'redPotion',     'redPotion',       'bat',
//   'upFloor',       'downFloor',       'downFloor',
//   'redDoor',       'blackMagician',   'redDoor',
//   'downFloor',     'upFloor',         'upFloor',
//   'downFloor',     'blueGem',         'slimeMan',
//   'sword3',        'slimeMan',        'blueWall',
//   'soldier',       'downFloor',       'soldier',
//   'yellowDoor',    'yellowDoor',      'yellowKey',
//   'yellowDoor',    'shield4',         'shield5',
//   'blueDoor',      'skeleton',        'brownWizard',
//   'blueDoor'
// ]
// [
//   1288253,        'bat',           'man',
//   'yellowDoor',   'blueDoor',      'sword1',
//   'redPotion',    'yellowDoor',    'yellowDoor',
//   'downFloor',    'bluePotion',    'shield2',
//   'redPriest',    'sword5',        'yellowDoor',
//   'yellowDoor',   'zombie',        'sword2',
//   'yellowDoor',   'blackSlime',    'blueDoor',
//   'downFloor',    'downFloor',     'downFloor',
//   'upFloor',      'upFloor',       'lava',
//   'upFloor',      'fairy',         'thief',
//   'redSlime',     'ghostSkeleton', 'upFloor',
//   'swordsman',    'ghostSkeleton', 'bluePotion',
//   'zombieKnight', 'yellowKey',     'redKnight',
//   'redPotion',    'soldier',       'yellowKey',
//   'yellowKey',    'yellowDoor',    'shield5',
//   'yellowDoor',   'yellowDoor',    'yellowDoor',
//   'redPotion'
// ]

// [
//   2963160,      'redPotion',       'woman',
//   'yellowDoor', 'yellowKey',       'sword1',
//   'yellowDoor', 'skeletonSoilder', 'redSlime',
//   'redPotion',  'skeleton',        'shield2',
//   'downFloor',  'lava',            'blueDoor',
//   'yellowDoor', 'yellowDoor',      'bluePotion',
//   'upFloor',    'bat',             'bluePotion',
//   'downFloor',  'downFloor',       'man',
//   'upFloor',    'redDoor',         'lava',
//   'man',        'fairy',           'downFloor',
//   'redSlime',   'zombieKnight',    'yellowKey',
//   'sword3',     'redKnight',       'blueWall',
//   'yellowDoor', 'yellowKey',       'redPotion',
//   'slimeMan',   'redPotion',       'yellowDoor',
//   'yellowKey',  'bluePotion',      'shield5',
//   'darkKnight', 'yellowDoor',      'redPotion',
//   'sword4'
// ]