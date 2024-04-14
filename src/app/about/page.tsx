import styles from './page.module.css'

export default function About() {
  return <div>
    <div className={styles.warning}>warning: 样式丢失</div>
    <div className={styles.meTitle}>我是刘召阳</div>
    <div className={styles.block}>
      <div className={styles.title}>
        程序员
      </div>
      <div className={styles.content}>
        <p>从2015年同济大学毕业之后，就正式成为了一名前端程序员。</p>
        <p>在工作期间自学了Nodejs相关知识，求职面试阶段学习了Reactjs。</p>
        <p>后面就一直将这些作为自己的技术栈。</p>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.title}>
        游戏爱好者
      </div>
      <div className={styles.content}>
        <p>steam、switch游戏收集达人</p>
        <p>王者荣耀最高段位：王者28星(吕布专精)</p>
        <p>英雄联盟手游最高段位：翡翠3</p>
        <p>英雄联盟最高段位：白金1(2016年)</p>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.title}>
        运动者（蛄蛹着）
      </div>
      <div className={styles.content}>
        <p>非专业健身人士，减脂增肌中～</p>
        <p>目前pr：</p>
          <p>杠铃卧推80kg(*4)</p>
          <p>深蹲100kg(*10)</p>
          <p>硬拉140kg</p>
          <p>哑铃卧推34kg(*8)</p>
          <p>划船80kg(*6)</p>
      </div>
    </div>

    <div className={styles.block}>
      <div className={styles.title}>
        生活
      </div>
      <div className={styles.content}>
        <p>准奶爸</p>
        <p>大厨</p>
        <p>猫奴</p>
      </div>
    </div>

    <div className={styles.contact}>
      请联系我： iyoungliu@163.com
    </div>
  </div>
}