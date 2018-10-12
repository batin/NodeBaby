let megep = require('./megep.json')
const request = require('request');
console.log(megep.length);

let btn = []

const req = data => {
  return new Promise((resolve, reject) => {
    console.log(data.document);
    request(data.document,(error,response,body)=> {
      if(response.statusCode == 200){
        btn.push(data)
      }
    })
  })
}
/*
  Bazı dokümanlar kayıp,
  Senin görevin bu kayıp dokümları filtrelemek.
  HTTP status olarak 200 dönen arkadaşları yeni bir dizide toplaman gerekiyor.
*/
for(let i = 0 ; i < megep.length; i++){
    req(megep[i])
}

  console.log(btn.length)
