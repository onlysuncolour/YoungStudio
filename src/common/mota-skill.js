const skillCondition = [
  [0, "切换楼层后"],
  [1, "开门后"],
  [2, "使用道具后", 2],
  [3, "你造成伤害后", 1], // good
  [4, "拾取物品后", 2],
  [5, "对话后"],
  [6, "加点或供奉祭坛后"],
  [7, "你进入濒死状态时"],
  [8, "消耗金币后", 1],
  [9, "主动技"], // good
  [10, "到达新楼层后"],
  [11, "当一名角色翻面前"],
  [12, "你受到伤害后", 1], // good
  [13, "战斗前"], // good
  [14, "触发非本技能时", null, true],
  [15, "你通过摸牌获得物品后", 2]
]

const skills = [{
  id: 0,
  desc: function desc() {
    return "你加点" + this.args[0] + "次"
  },
  run: function run() {
    core.insertCommonEvent("加点事件", [this.args[0]])
  },
  args: [1]
}, {
  id: 1,
  desc: function desc() {
    return "你摸" + this.args[0] + "张牌"
  },
  run: function run() {
    core.chouka(core.randAll, this.args[0])
  },
  args: [1]
}, {
  id: 2,
  desc: function desc() {
    return "你获得" + this.args[0] + "个随机宝石"
  },
  run: function run() {
    core.chouka(core.randGem, this.args[0])
  },
  args: [2]
}, {
  id: 3,
  desc: function desc() {
    return "你获得" + this.args[0] + "个随机血瓶"
  },
  run: function run() {
    core.chouka(core.randPotion, this.args[0])
  },
  args: [2]
}, {
  id: 4,
  desc: function desc() {
    return "你获得" + this.args[0] + "把随机钥匙"
  },
  run: function run() {
    core.chouka(core.randKey, this.args[0])
  },
  args: [2]
}, {
  id: 5,
  desc: function desc() {
    return "你获得" + this.args[0] + "个基本物品"
  },
  run: function run() {
    core.chouka(core.randBasic, this.args[0])
  },
  args: [2]
}, {
  id: 6,
  desc: function desc() {
    return "你获得" + this.args[0] + "个随机道具"
  },
  run: function run() {
    core.chouka(core.randTool, this.args[0])
  },
  args: [1],
  awaken: true
}, {
  id: 7,
  // core.randBasic
  desc: function desc() {
    return "你弃置X张牌，然后摸X+" + this.args[0] + "个基本物品"
  },
  args: [1],
  awaken: true
}, {
  id: 8,
  // core.randAll
  desc: function desc() {
    return "你摸" + this.args[0] + "张牌并翻面"
  },
  args: [3]
}, {
  id: 9,
  desc: function desc() {
    return "你获得一个破墙镐"
  },
  args: []
}, {
  id: 10,
  desc: function desc() {
    return "你发动一次地震卷轴"
  },
  args: [],
  awaken: true
}, {
  id: 11,
  desc: function desc() {
    return "你发动一次大黄门钥匙"
  },
  args: []
}, {
  id: 12,
  desc: function desc() {
    return "你获得并使用一瓶圣水"
  },
  args: []
}, {
  id: 13,
  desc: function desc() {
    return "你获得一个对称飞行器"
  },
  args: []
}, {
  id: 14,
  desc: function desc() {
    return "你在" + this.args[0] + "步内获得对话穿墙"
  },
  args: [5]
}, {
  id: 15,
  desc: function desc() {
    return "你获得一个炸弹"
  },
  args: []
}, {
  id: 16,
  desc: function desc() {
    return "你获得" + this.args[0] + "枚幸运金币"
  },
  args: [1],
  awaken: true
}, {
  id: 17,
  desc: function desc() {
    return "你获得本层至多" + this.args[0] + "个随机物品"
  },
  run: function run() {
    core.getFloorItems(this.args[0])
  },
  args: [3]
}, {
  id: 18,
  desc: function desc() {
    return "你下一次战斗攻击变为" + this.args[0] + "倍"
  },
  run: function run() {
    core.setBuff("atk", this.args[0])
  },
  args: [2]
}, {
  id: 19,
  desc: function desc() {
    return "你下一次战斗防御变为" + this.args[0] + "倍"
  },
  run: function run() {
    core.setBuff("def", this.args[0])
  },
  args: [2]
}, {
  id: 20,
  desc: function desc() {
    return "你的生命值变为" + this.args[0] + "倍,至多为1亿"
  },
  run: function run() {
    core.status.hero.hp = Math.floor(Math.max(hero.hp, Math.min(hero.hp * this.args[0], 1e8)));
    core.updateStatusBar()
  },
  args: [1.5],
  awaken: true
}, {
  id: 21,
  desc: function desc() {
    return "你获得魔攻直到切换楼层"
  },
  run: function run() {
    core.setFlag("魔攻", true)
  },
  args: []
}, {
  id: 22,
  desc: function desc() {
    return "你获得" + this.args[0] + "连击直到切换楼层"
  },
  run: function run() {
    core.setFlag("连击", this.args[0])
  },
  args: [2]
}, {
  id: 23,
  desc: function desc() {
    return "你无视敌人的技能直到切换楼层"
  },
  run: function run() {
    core.setFlag("无视技能", true)
  },
  args: []
}, {
  id: 24,
  desc: function desc() {
    return "你使用道具后摸一张牌直到切换楼层"
  },
  run: function run() {
    core.setFlag("用一摸一", true)
  },
  args: [],
  awaken: true
}, {
  id: 25,
  desc: function desc() {
    return "你永久无视阻激夹域，或获得三个蓝宝石"
  },
  run: function run() {
    if (!core.hasFlag("shield5")) {
      core.setFlag("shield5", true)
    } else {
      core.getItem("blueGem", 3)
    }
  },
  args: []
}, {
  id: 26,
  desc: function desc() {
    return "你获得" + this.args[0] + "个随机剑盾"
  },
  run: function run() {
    core.chouka(core.randEquip, this.args[0])
  },
  args: [1],
  awaken: true
}, {
  id: 27,
  desc: function desc() {
    return "你获得等同于该数值" + this.args[0] * 10 + "%的金币"
  },
  run: function run(x) {
    core.status.hero.money += Math.floor(x * 0.1 * this.args[0])
  },
  data: 1,
  args: [2]
}, {
  id: 28,
  desc: function desc() {
    return "你摸X张牌(X为该数值/200且至少为1至多为100)"
  },
  run: function run(x) {
    core.chouka(core.randAll, Math.min(Math.floor(x / 200), 100))
  },
  data: 1,
  args: [],
  awaken: true
}, {
  id: 29,
  desc: function desc() {
    return "你再获得一次该物品"
  },
  run: function run(x) {
    core.getItem(x)
  },
  data: 2,
  args: []
}, {
  id: 30,
  desc: function desc() {
    return "若物品为蓝色，你摸" + this.args[0] + "张牌"
  },
  run: function run(x) {
    if (core.getColor(x) == "blue")
      core.chouka(core.randAll, this.args[0])
  },
  data: 2,
  args: [3]
}, {
  id: 31,
  desc: function desc() {
    return "若物品为红色，你获得" + this.args[0] + "个黄血瓶"
  },
  run: function run(x) {
    if (core.getColor(x) == "red")
      core.getItem("yellowPotion", this.args[0])
  },
  data: 2,
  args: [2]
}, {
  id: 32,
  desc: function desc() {
    return "若物品为黄色，你加点" + this.args[0] + "次"
  },
  run: function run(x) {
    if (core.getColor(x) == "yellow")
      core.insertCommonEvent("加点事件", [this.args[0]])
  },
  data: 2,
  args: [2]
}, {
  id: 33,
  desc: function desc() {
    return "你重置祭坛的购买次数"
  },
  run: function run() {
    core.setFlag("times1", 1)
  },
  args: [],
  awaken: true
}, {
  id: 34,
  desc: function desc() {
    return "你获得等同于该数值" + this.args[0] * 10 + "%的生命"
  },
  run: function run(x) {
    core.status.hero.hp += Math.floor(x * 0.1 * this.args[0])
  },
  args: [3],
  data: 1
}, {
  id: 35,
  desc: function desc() {
    return "你重置其它技能的发动次数，然后删除此技能"
  },
  run: function run() {
    flags.skills.forEach(function (x) {
      if (x.time)
        x.time = x.max
    });
    this.time = 0;
    core.checkSkill(-1)
  },
  args: [],
  awaken: true
}, {
  id: 36,
  desc: function desc() {
    return "你令技能的发动次数上限加一(上限为10)，然后删除此技能"
  },
  run: function run() {
    if (core.getFlag("maxCount") < 10) {
      core.addFlag("maxTime", 1);
      flags.skills.forEach(function (x) {
        if (x.time)
          x.max = flags.maxTime
      })
    }
    this.time = 0;
    core.checkSkill(-1)
  },
  args: [],
  awaken: true
}, {
  id: 37,
  desc: function desc() {
    return "你令技能的存储数量上限加一(上限为10)"
  },
  run: function run() {
    if (core.getFlag("maxCount") < 10)
      core.addFlag("maxCount", 1)
  },
  args: [],
  awaken: true
}, {
  id: 38,
  desc: function desc() {
    return "你重新抽取一次技能，然后删除此技能"
  },
  run: function run() {
    core.insertCommonEvent(core.getFlag("ZiXuan") ? "自选技能" : "抽取技能");
    this.time = 0;
    core.checkSkill(-1)
  },
  args: []
}, {
  id: 39,
  desc: function desc() {
    return "你令至多" + this.args[0] + "个敌人翻面"
  },
  run: function run() {
    core.insertCommonEvent("选怪翻面", [this.args[0]])
  },
  args: [1]
}, {
  id: 40,
  desc: function desc() {
    return "你获得" + this.args[0] + "个黄宝石和蓝血瓶"
  },
  run: function run() {
    core.getItem("yellowGem", this.args[0]);
    core.getItem("bluePotion", this.args[0])
  },
  args: [1]
}, {
  id: 41,
  desc: function desc() {
    return "你获得等同于该数值" + this.args[0] + "%的攻击(至少+1)"
  },
  run: function run(x) {
    core.status.hero.atk += Math.max(1, Math.floor(x * 0.01 * this.args[0]))
  },
  args: [1],
  data: 1
}, {
  id: 42,
  desc: function desc() {
    return "你获得等同于该数值" + this.args[0] + "%的防御(至少+1)"
  },
  run: function run(x) {
    core.status.hero.def += Math.max(1, Math.floor(x * 0.01 * this.args[0]))
  },
  args: [1],
  data: 1
}, {
  id: 43,
  desc: function desc() {
    return "你获得" + this.args[0] + "个绿宝石"
  },
  run: function run() {
    core.getItem("greenGem", this.args[0])
  },
  args: [5]
}, {
  id: 44,
  desc: function desc() {
    return "你将生命的".concat(this.args[0], "%,").concat(this.args[1], "%,").concat(this.args[2], "%转化为攻击,防御,护盾")
  },
  run: function run() {
    var d = hero.hp - 1;
    if (d > 0) {
      hero.hp = 1;
      hero.atk += Math.floor(d * 0.01 * this.args[0]);
      hero.def += Math.floor(d * 0.01 * this.args[1]);
      hero.mdef += Math.floor(d * 0.01 * this.args[2]);
      core.updateStatusBar()
    }
  },
  args: [1, 1, 3]
}, {
  id: 45,
  desc: function desc() {
    return "你将生命补充至" + 800 * this.args[0] + "x区域倍率"
  },
  run: function run() {
    var d = 800 * this.args[0] * core.status.thisMap.ratio;
    if (d > hero.hp)
      hero.hp = d;
    core.updateStatusBar()
  },
  args: [1]
}]

function getSkillStep1() {
  var skillCondition1 = core.plugin.skillCondition.filter(function (x) {
    return core.getFlag("awaken") || x.length < 4
  });
  var a = []
  for (var i = 0; i < 3; ++i) {

    var j = core.rand(skillCondition1.length);

    a.push(skillCondition1[j][0]);

    skillCondition1.splice(j, 1);
  }
  core.setFlag("conditions", a);
}

function getSkillStep2() {
  var skillList1 = core.plugin.skillList.filter(function (x) {
    return core.satisfyCondition(x)
  });
  var a = []
  for (var i = 0; i < 3; ++i) {

    var j = core.rand(skillList1.length);

    a.push(skillList1[j].id);

    skillList1.splice(j, 1);
  }
  core.setFlag("effects", a);
}



function 抽卡() {
  this.getResult = function (n) {
      n = Math.max(0, Math.min(999, n));
      if (n < 70)
          return "redGem";
      if (n < 140)
          return "blueGem";
      if (n < 210)
          return "yellowGem";
      if (n < 280)
          return "greenGem";
      if (n < 350)
          return "redPotion";
      if (n < 420)
          return "bluePotion";
      if (n < 490)
          return "yellowPotion";
      if (n < 560)
          return "greenPotion";
      if (n < 620)
          return "redKey";
      if (n < 680)
          return "blueKey";
      if (n < 740)
          return "yellowKey";
      if (n < 800)
          return "greenKey";
      if (n < 820)
          return "pickaxe";
      if (n < 840)
          return "bomb";
      if (n < 860)
          return "centerFly";
      if (n < 880)
          return "upFly";
      if (n < 900)
          return "downFly";
      if (n < 920)
          return "superPotion";
      if (n < 930)
          return "earthquake";
      if (n < 940)
          return "cross";
      if (n < 950)
          return "knife";
      if (n < 960)
          return "coin";
      if (n < 970)
          return "bigKey";
      if (n < 975)
          return "sword1";
      if (n < 980)
          return "shield1";
      if (n < 985)
          return "sword2";
      if (n < 990)
          return "shield2";
      if (n < 992)
          return "sword3";
      if (n < 994)
          return "shield3";
      if (n < 996)
          return "sword4";
      if (n < 998)
          return "shield4";
      if (n < 999)
          return "sword5";
      if (n < 1000)
          return "shield5"
  };
  this.getColor = function (s) {
      var colorList = {
          "red": ["redGem", "redKey", "redPotion", "bomb", "upFly"],
          "blue": ["blueKey", "blueGem", "bluePotion", "downFly", "superPotion", "shield1", "sword1", "shield5", "sword5"],
          "green": ["greenKey", "greenGem", "greenPotion", "sword4", "shield4"],
          "yellow": ["yellowKey", "yellowGem", "yellowPotion", "pickaxe", "centerFly", "earthquake", "coin", "cross", "bigKey", "sword3", "shield3"]
      };
      for (var i in colorList) {
          var color = colorList[i];
          if (color.includes(s)) {
              return i
          }
      }
      return "none"
  };
  this.randGem = function () {
      return core.getResult(core.rand(280))
  };
  this.randPotion = function () {
      return core.getResult(core.rand(280) + 280)
  };
  this.randKey = function () {
      return core.getResult(core.rand(240) + 560)
  };
  this.randBasic = function () {
      return core.getResult(core.rand(800))
  };
  this.randTool = function () {
      return core.getResult(core.rand(200) + 800)
  };
  this.randAll = function () {
      return core.getResult(core.rand(1000))
  };
  this.randEquip = function () {
      return core.getResult(core.rand(30) + 970)
  };
  this.chouka = function (gen, times) {
      gen = gen || core.randAll;
      times = times || 1;
      var res = {};
      for (var i = 0; i < times; ++i) {
          var r1 = gen();
          if (res[r1]) {
              ++res[r1]
          } else {
              res[r1] = 1
          }
      }
      var resList = [];
      for (var _i2 in res) {
          resList.push(core.material.items[_i2].name + "x" + res[_i2]);
          core.getItem(_i2, res[_i2]);
          core.checkSkill(15, _i2)
      }
      if (core.getFlag("showResult")) {
          core.insertAction(["\\t[\u6478\u724C\u7ED3\u679C]" + resList.join("\u3001")])
      }
  }
}
function getFloorItems(n) {
  var itemList = core.searchBlockWithFilter(function(block) {
      return block.event.cls == "items"
  });
  n = Math.min(itemList.length, n);
  for (var i = 0; i < n; ++i) {
      var j = core.rand(itemList.length);
      var block = itemList[j].block;
      core.getItem(block.event.id, 1, block.x, block.y);
      itemList.splice(j, 1)
  }
}


// events.prototype._startGame_start(0,23790831)