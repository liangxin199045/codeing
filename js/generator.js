
var readFile = function (fileName){
  return new Promise((resolve)=>{
    setTimeout(function(){
        resolve(fileName)
    },2000)
  })
}

function* gen(){
   let f1 =yield readFile('iceman')
   let f2 =yield readFile('wendy')
   console.log(f1)
   console.log(f2) 
}

let g =gen()

g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data);
    })
})