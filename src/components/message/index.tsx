import styles from './index.module.css'
export function message(msg: string) {
  const div = document.createElement('div')
  div.innerText = msg
  div.className = styles.message;

  const body = document.getElementsByTagName('body')[0]
  body.appendChild(div)

  setTimeout(() => {
    body.removeChild(div)
  }, 3000)
}