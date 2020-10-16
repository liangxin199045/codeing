const a =() => {
    console.log('iceman')
    console.log(this)
}
// a()

function Test(name){
    this.name =name
    console.log(this)
}

let m =new Test('wendy')
let n =Test('bob')

// console.log(m)
// console.log(n)
