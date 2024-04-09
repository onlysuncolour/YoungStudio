export function isChinese(value: string) {
  return /^[\u4e00-\u9fa5]*$/.test(value);
}

export function getPostWords(content: string) {
  return content.split(" ").filter(Boolean).length;
}

const WORDS_PER_MINUTE = 200;
export function readingTime(wordsCount: number) {
  return Math.ceil(wordsCount / WORDS_PER_MINUTE);
}

export function getRandom(e: number, t: number) {
  return e + (Math.random() * (t - e + 1))
}

export function getRandom3(e: number, t: number) {
  return e + ((1 - Math.random() ** 3) * (t - e + 1))
}


export function getSqrt3(n: number) {
  return Math.sqrt(Math.sqrt(n * n))
}