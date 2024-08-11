"use client"

import { useState } from 'react'
import styles from './page.module.css'
import { TEnemy, enemies, getMax } from '@/common/mota';

const crossDoubleAtkEnemy = ['兽人', '兽人武士']
export default function () {
  const [heroHp, setHeroHp] = useState(1000);
  const [heroAtk, setHeroAtk] = useState(1000);
  const [heroDef, setHeroDef] = useState(1000);
  const [heroHpAdd, setHeroHpAdd] = useState(0);
  const [heroAtkAdd, setHeroAtkAdd] = useState(0);
  const [heroDefAdd, setHeroDefAdd] = useState(0);
  const [currentEnemy, setCurrentEnemy] = useState<TEnemy | undefined>(undefined);
  const [result, setResult] = useState({ times: 0, hpAdd: 0 })

  const [allResult, setAllResult] = useState<string[]>([])

  const [hasCross, setHasCross] = useState(false)

  function addHp() {
    setHeroHp(heroHp + heroHpAdd)
    setHeroHpAdd(0)
  }

  function addAtk() {
    setHeroAtk(heroAtk + heroAtkAdd)
    setHeroAtkAdd(0)
  }

  function addDef() {
    setHeroDef(heroDef + heroDefAdd)
    setHeroDefAdd(0)
  }

  function handleClickEnemy(enemy: TEnemy) {
    setCurrentEnemy(enemy)
    console.log({
      heroHp,
      heroAtk,
      heroDef,
    })
    setResult(getMax({
      heroHp,
      heroAtk: hasCross && crossDoubleAtkEnemy.includes(enemy.name) ? heroAtk * 2 : heroAtk,
      heroDef,
      enemyHp: enemy.hp,
      enemyAtk: enemy.atk,
      enemyDef: enemy.def
    }))
  }

  function getAllResult() {
    let _allResult:string[] = []
    enemies.map((enemy, i) => {
      let _result = getMax({
        heroHp,
        heroAtk: hasCross && crossDoubleAtkEnemy.includes(enemy.name) ? heroAtk * 2 : heroAtk,
        heroDef,
        enemyHp: enemy.hp,
        enemyAtk: enemy.atk,
        enemyDef: enemy.def
      })
      const percent = `${((_result.hpAdd/heroHp)*100).toFixed(0)}%`
      _allResult.push(percent)
    })
    setAllResult(_allResult)
  }

  function submit() {
    setHeroHp(heroHp + result.hpAdd)
    setCurrentEnemy(undefined)
    setResult({ times: 0, hpAdd: 0 })
  }

  return <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroInfoItem}>
          <span className={styles.heroInfoTitle}>Hp</span>
          <input className={styles.heroInfoInput} type="number" step="" value={heroHp} onChange={e => setHeroHp(Number(e.target.value))} />
          <span className={styles.heroAddTitle}>Add Hp</span>
          <input className={styles.heroAddInput} type="number" step="" value={heroHpAdd} onChange={e => setHeroHpAdd(Number(e.target.value))} />
          <button className={styles.heroAddBtn} onClick={() => addHp()}>add</button>
        </div>
        <div className={styles.heroInfoItem}>
          <span className={styles.heroInfoTitle}>Atk</span>
          <input className={styles.heroInfoInput} type="number" step="" value={heroAtk} onChange={e => setHeroAtk(Number(e.target.value))} />
          <span className={styles.heroAddTitle}>Add Atk</span>
          <input className={styles.heroAddInput} type="number" step="" value={heroAtkAdd} onChange={e => setHeroAtkAdd(Number(e.target.value))} />
          <button className={styles.heroAddBtn} onClick={addAtk}>add</button>
        </div>
        <div className={styles.heroInfoItem}>
          <span className={styles.heroInfoTitle}>Def</span>
          <input className={styles.heroInfoInput} type="number" step="" value={heroDef} onChange={e => setHeroDef(Number(e.target.value))} />
          <span className={styles.heroAddTitle}>Add Def</span>
          <input className={styles.heroAddInput} type="number" step="" value={heroDefAdd} onChange={e => setHeroDefAdd(Number(e.target.value))} />
          <button className={styles.heroAddBtn} onClick={addDef}>add</button>
        </div>
        <div className={styles.heroInfoItem}>
          <input type="checkbox" checked={hasCross} onClick={() => setHasCross(!hasCross)} /> 持有十字架 
        </div>
        
      </div>
      <div className={styles.enemies}>
        {
          enemies.map((enemy, i) => (
            <button className={styles.enemyBtn} key={i} onClick={() => handleClickEnemy(enemy)}>
              {enemy.name}{allResult[i] && `-${allResult[i]}`}
            </button>
          ))
        }
      </div>
      <div>
        <button className={styles.calcAll} onClick={getAllResult}>计算所有</button>
        <button className={styles.calcAll} onClick={() => {setAllResult([])}}>clear</button>
      </div>
      {
      currentEnemy && <div className={styles.result}>
        <div>攻击怪物{currentEnemy?.name}共计需要{result.times}倍</div>
        <div>增加血量{result.hpAdd}</div>
        <div>增幅{((result.hpAdd/heroHp)*100).toFixed(0)}%</div>
        <button className={styles.submitBtn} onClick={submit}>应用</button>
      </div>
    }
    </div>
    
  </div>
}