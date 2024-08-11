const enemyObj = {
    "greenSlime": {
        "name": "\u7EFF\u8272\u53F2\u83B1\u59C6",
        "hp": 35,
        "atk": 18,
        "def": 1,
        "money": 1,
        "experience": 0,
        "special": 0
    },
    "redSlime": {
        "name": "\u7EA2\u8272\u53F2\u83B1\u59C6",
        "hp": 45,
        "atk": 20,
        "def": 2,
        "money": 2,
        "experience": 0,
        "special": 0
    },
    "blackSlime": {
        "name": "\u5927\u53F2\u83B1\u59C6",
        "hp": 130,
        "atk": 60,
        "def": 3,
        "money": 8,
        "experience": 0,
        "special": 0
    },
    "slimelord": {
        "name": "\u53F2\u83B1\u59C6\u738B",
        "hp": 360,
        "atk": 310,
        "def": 20,
        "money": 40,
        "experience": 0,
        "special": 0
    },
    "bat": {
        "name": "\u5C0F\u8759\u8760",
        "hp": 35,
        "atk": 38,
        "def": 3,
        "money": 3,
        "experience": 0,
        "special": 0
    },
    "bigBat": {
        "name": "\u5927\u8759\u8760",
        "hp": 60,
        "atk": 100,
        "def": 8,
        "money": 12,
        "experience": 0,
        "special": 0
    },
    "redBat": {
        "name": "\u5438\u8840\u8759\u8760",
        "hp": 200,
        "atk": 390,
        "def": 90,
        "money": 50,
        "experience": 0,
        "special": 0
    },
    "vampire": {
        "name": "\u5438\u8840\u9B3C",
        "hp": 444,
        "atk": 199,
        "def": 66,
        "money": 144,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "skeleton": {
        "name": "\u9AB7\u9AC5\u4EBA",
        "hp": 50,
        "atk": 42,
        "def": 6,
        "money": 6,
        "experience": 0,
        "special": 0
    },
    "skeletonSoilder": {
        "name": "\u9AB7\u9AC5\u58EB\u5175",
        "hp": 55,
        "atk": 52,
        "def": 12,
        "money": 8,
        "experience": 0,
        "special": 0
    },
    "skeletonCaptain": {
        "name": "\u9AB7\u9AC5\u961F\u957F",
        "hp": 100,
        "atk": 65,
        "def": 15,
        "money": 30,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "ghostSkeleton": {
        "name": "\u9B3C\u6218\u58EB",
        "hp": 220,
        "atk": 180,
        "def": 30,
        "money": 35,
        "experience": 0,
        "special": 0
    },
    "zombie": {
        "name": "\u517D\u4EBA",
        "hp": 260,
        "atk": 85,
        "def": 5,
        "money": 18,
        "experience": 0,
        "special": 0
    },
    "zombieKnight": {
        "name": "\u517D\u4EBA\u6B66\u58EB",
        "hp": 320,
        "atk": 120,
        "def": 15,
        "money": 30,
        "experience": 0,
        "special": 0
    },
    "rock": {
        "name": "\u77F3\u5934\u4EBA",
        "hp": 20,
        "atk": 100,
        "def": 68,
        "money": 28,
        "experience": 0,
        "special": 0
    },
    "slimeMan": {
        "name": "\u5E7D\u7075",
        "hp": 320,
        "atk": 140,
        "def": 20,
        "money": 30,
        "experience": 0,
        "special": 0,
        "atkValue": null,
        "defValue": null
    },
    "bluePriest": {
        "name": "\u521D\u7EA7\u6CD5\u5E08",
        "hp": 60,
        "atk": 32,
        "def": 8,
        "money": 5,
        "experience": 0,
        "special": 0
    },
    "redPriest": {
        "name": "\u9AD8\u7EA7\u6CD5\u5E08",
        "hp": 100,
        "atk": 95,
        "def": 30,
        "money": 22,
        "experience": 0,
        "special": 0
    },
    "brownWizard": {
        "name": "\u521D\u7EA7\u5DEB\u5E08",
        "hp": 220,
        "atk": 370,
        "def": 110,
        "money": 80,
        "experience": 0,
        "special": 15,
        "value": 100,
        "range": 1
    },
    "redWizard": {
        "name": "\u9AD8\u7EA7\u5DEB\u5E08",
        "hp": 200,
        "atk": 380,
        "def": 130,
        "money": 90,
        "experience": 0,
        "special": 15,
        "value": 200,
        "zoneSquare": null,
        "range": 1
    },
    "yellowGuard": {
        "name": "\u521D\u7EA7\u536B\u5175",
        "hp": 50,
        "atk": 48,
        "def": 22,
        "money": 12,
        "experience": 0,
        "special": 0
    },
    "blueGuard": {
        "name": "\u4E2D\u7EA7\u536B\u5175",
        "hp": 100,
        "atk": 180,
        "def": 110,
        "money": 50,
        "experience": 0,
        "special": 0
    },
    "redGuard": {
        "name": "\u9AD8\u7EA7\u536B\u5175",
        "hp": 180,
        "atk": 460,
        "def": 360,
        "money": 200,
        "experience": 0,
        "special": 0
    },
    "swordsman": {
        "name": "\u53CC\u624B\u5251\u58EB",
        "hp": 100,
        "atk": 680,
        "def": 50,
        "money": 55,
        "experience": 0,
        "special": 0
    },
    "soldier": {
        "name": "\u6218\u58EB",
        "hp": 210,
        "atk": 200,
        "def": 65,
        "money": 45,
        "experience": 0,
        "special": 0
    },
    "yellowKnight": {
        "name": "\u9A91\u58EB\u961F\u957F",
        "hp": 120,
        "atk": 150,
        "def": 50,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "redKnight": {
        "name": "\u9A91\u58EB",
        "hp": 160,
        "atk": 230,
        "def": 105,
        "money": 65,
        "experience": 0,
        "special": 0
    },
    "darkKnight": {
        "name": "\u9ED1\u6697\u9A91\u58EB",
        "hp": 180,
        "atk": 430,
        "def": 210,
        "money": 120,
        "experience": 0,
        "special": 0
    },
    "blackKing": {
        "name": "\u9AD8\u7EA7\u5DEB\u5E08",
        "hp": 200,
        "atk": 380,
        "def": 130,
        "money": 90,
        "experience": 0,
        "special": 18,
        "bomb": false,
        "value": 200
    },
    "yellowKing": {
        "name": "\u9EC4\u8863\u9B54\u738B",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "greenKing": {
        "name": "\u9752\u8863\u6B66\u58EB",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "blueKnight": {
        "name": "\u84DD\u9A91\u58EB",
        "hp": 100,
        "atk": 120,
        "def": 0,
        "money": 9,
        "experience": 0,
        "special": 8
    },
    "goldSlime": {
        "name": "\u9EC4\u5934\u602A",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "poisonSkeleton": {
        "name": "\u7D2B\u9AB7\u9AC5",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "poisonBat": {
        "name": "\u7D2B\u8759\u8760",
        "hp": 100,
        "atk": 120,
        "def": 0,
        "money": 14,
        "experience": 0,
        "special": 13
    },
    "steelRock": {
        "name": "\u94C1\u9762\u4EBA",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "skeletonPriest": {
        "name": "\u9AB7\u9AC5\u6CD5\u5E08",
        "hp": 100,
        "atk": 100,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 18,
        "value": 20
    },
    "skeletonKing": {
        "name": "\u9AB7\u9AC5\u738B",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "skeletonWizard": {
        "name": "\u9AB7\u9AC5\u5DEB\u5E08",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "redSkeletonCaption": {
        "name": "\u9AB7\u9AC5\u6B66\u58EB",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "badHero": {
        "name": "\u8FF7\u5931\u52C7\u8005",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "demon": {
        "name": "\u9B54\u795E\u6B66\u58EB",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "demonPriest": {
        "name": "\u9B54\u795E\u6CD5\u5E08",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "goldHornSlime": {
        "name": "\u91D1\u89D2\u602A",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "redKing": {
        "name": "\u9B54\u738B",
        "hp": 8000,
        "atk": 5000,
        "def": 1000,
        "money": 500,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "whiteKing": {
        "name": "\u9B54\u6CD5\u8B66\u536B",
        "hp": 230,
        "atk": 450,
        "def": 100,
        "money": 100,
        "experience": 0,
        "special": 16
    },
    "blackMagician": {
        "name": "\u5927\u6CD5\u5E08",
        "hp": 4500,
        "atk": 560,
        "def": 310,
        "money": 1000,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "silverSlime": {
        "name": "\u94F6\u5934\u602A",
        "hp": 100,
        "atk": 120,
        "def": 0,
        "money": 15,
        "experience": 0,
        "special": 14
    },
    "swordEmperor": {
        "name": "\u9B54\u738B",
        "hp": 5000,
        "atk": 1580,
        "def": 190,
        "money": 500,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "whiteHornSlime": {
        "name": "\u5C16\u89D2\u602A",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "badPrincess": {
        "name": "\u75DB\u82E6\u9B54\u5973",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "badFairy": {
        "name": "\u9ED1\u6697\u4ED9\u5B50",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "grayPriest": {
        "name": "\u4E2D\u7EA7\u6CD5\u5E08",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "redSwordsman": {
        "name": "\u5251\u738B",
        "hp": 100,
        "atk": 120,
        "def": 0,
        "money": 7,
        "experience": 0,
        "special": 6,
        "n": 8
    },
    "whiteGhost": {
        "name": "\u6C34\u94F6\u6218\u58EB",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "poisonZombie": {
        "name": "\u7EFF\u517D\u4EBA",
        "hp": 100,
        "atk": 120,
        "def": 0,
        "money": 13,
        "experience": 0,
        "special": 12
    },
    "magicDragon": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "octopus": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true
    },
    "darkFairy": {
        "name": "\u4ED9\u5B50",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "greenKnight": {
        "name": "\u5F3A\u76FE\u9A91\u58EB",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "special": 0
    },
    "angel": {
        "name": "\u5929\u4F7F",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "point": 0,
        "special": 0
    },
    "elemental": {
        "name": "\u5143\u7D20\u751F\u7269",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "point": 0,
        "special": 0
    },
    "steelGuard": {
        "name": "\u94C1\u5B88\u536B",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "experience": 0,
        "point": 0,
        "special": 18,
        "value": 20
    },
    "evilBat": {
        "name": "\u90AA\u6076\u8759\u8760",
        "hp": 1000,
        "atk": 1,
        "def": 0,
        "money": 0,
        "experience": 0,
        "point": 0,
        "special": [2, 3]
    },
    "E331": {
        "name": "\u65B0\u654C\u4EBA",
        "hp": 0,
        "atk": 0,
        "def": 0,
        "money": 0,
        "exp": 0,
        "point": 0,
        "special": []
    },
    "E333": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E334": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E335": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E336": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E337": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E338": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E339": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E340": {
        "name": "\u5927\u4E4C\u8D3C",
        "hp": 1200,
        "atk": 180,
        "def": 20,
        "money": 100,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E341": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E342": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E343": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E344": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E345": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E346": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E347": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    },
    "E348": {
        "name": "\u9B54\u9F99",
        "hp": 1500,
        "atk": 600,
        "def": 250,
        "money": 800,
        "experience": 0,
        "special": 0,
        "notBomb": true,
        "displayIdInBook": null
    }
}

function parseFromUnicode(str: string) {
    return unescape(str.replace(/\\u/g, "%u"));
}

export type TEnemy = {
    name: string;
    hp: number;
    atk: number;
    def: number
}
export const enemies: TEnemy[] = Object.keys(enemyObj).filter(key => {
    // @ts-ignore
    const enemy = enemyObj[key]
    return enemy?.atk > 0 && enemy?.def > 0
}).map(key => {
    // @ts-ignore
    const enemy = enemyObj[key]
    return {
        name: parseFromUnicode(enemy.name),
        hp: enemy.hp,
        atk: enemy.atk,
        def: enemy.def
    }
}).filter((enemy, i, arr) => {
    if (arr.findIndex(e => e.name === enemy.name && e.atk === enemy.atk && e.def === enemy.def && e.hp === enemy.hp) === i) {
        return true
    }
})

export function getMax({ heroAtk, heroDef, heroHp, enemyAtk, enemyDef, enemyHp }:
    { heroAtk: number, heroDef: number, heroHp: number, enemyAtk: number, enemyDef: number, enemyHp: number }
) {
    let t = 1;
    // let maxHp = 0, maxHpRounds= 0 ;
    let rounds1 = Math.ceil((enemyHp * t) / (heroAtk - enemyDef * t)), // 勇士进攻回合数
        rounds2 = Math.ceil(heroHp / (enemyAtk * t - heroDef)) // 勇士死亡回合数

    while (rounds1 <= rounds2 || enemyAtk * t - heroDef <= 0) {
        // let hpAdd = ((enemyAtk * t) - heroDef) * rounds1
        // if (hpAdd > maxHp) {
        //     maxHp = hpAdd;
        //     maxHpRounds = t
        // }
        t++;
        // console.log(t, rounds1, rounds2)
        // if (enemyAtk * t - heroDef >= 0) {
        //     continue
        // }
        if (heroAtk - enemyDef * t <= 0) {
            break;
        }
        rounds1 = Math.ceil(enemyHp * t / (heroAtk - enemyDef * t))
        rounds2 = Math.ceil(heroHp / (enemyAtk * t - heroDef));
        // let hpAdd = ((enemyAtk * t) - heroDef) * rounds1 - 2
        // if (hpAdd > maxHp) {
        //     maxHp = hpAdd;
        //     maxHpRounds = t - 2
        // }
    }
    const times = t - 1;
    const rounds = Math.ceil((enemyHp * times) / (heroAtk - enemyDef * times)) - 1
    const hpAdd = ((enemyAtk * times) - heroDef) * rounds
    console.log({
        // enemyAtk,
        // enemyDef,
        // enemyHp,
        rounds,
        hpAdd,
        // maxHpRounds,
        // maxHp
    })
    return {
        times, hpAdd,
    }
    // return {
    //     times: maxHpRounds,
    //     hpAdd: maxHp
    // }
}

function goldCost(currentRound: number) {
    const gold = 10 * currentRound * (currentRound - 1) + 20;
}

function getStoreRounds(currentGold: number) {
    if (!currentGold) {
        return undefined
    }
    var discriminant = 100 - 4 * 10 * (20 - currentGold);
    if (discriminant < 0) {
        return undefined;
    } else {
        var sqrtDiscriminant = Math.sqrt(discriminant);
        var x1 = (10 + sqrtDiscriminant) / (2 * 10);
        return x1
    }
}