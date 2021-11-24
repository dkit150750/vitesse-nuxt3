const startAt = Date.now()
let count = 0

type Article ={
  name: string
}

export default async() => ({
  pageview: count++,
  startAt,

  article: await $fetch<Article>('https://api-time.dtivt.ru/api/times'),
})
