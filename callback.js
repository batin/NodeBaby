let megep = require('./megep.json')
const request = require('request');
console.log(megep.length);

let btn = []

const req = url => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (response.statusCode !== 200) {
        reject(error)
      }
      resolve(url)
    })
  })
}

const run = async (data, i = 0) => {
  return new Promise(async (resolve, reject) => {
    let available = await req(data[i].document).catch(_ => console.log('Bu doküman mevcut değil', data[i].document))
    if (available) {
      console.log('BTN length', btn.length, 'kaçıncı düğümü gezdim', i)
      btn.push(data[i])
    }
    if (i <= megep.length) {
      ++i
      await run(data, i)
    } else {
      resolve(true)
    }
  })
}

run(megep).then(_ => {
  console.log(megep.length - btn.length, 'bu kadar doküman gerçekte mevcut.')
})
