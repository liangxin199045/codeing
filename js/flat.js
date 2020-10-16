// 迭代器实现flat
function* flat2(arr) {
    let len =arr.length;
    for(let i=0; i<len; i++){
        let item =arr[i]
        if(typeof item !='number'){
        yield* flat2(item)
        } else {
        yield item 
        } 
    }
}

let flat =flat2([1, [[2], 3, 4], 5])
console.log(flat.next().value)
console.log(flat.next().value)
console.log(flat.next().value)
console.log(flat.next().value)



// 多重迭代实现flat
let res =[]
function flat3(arr){
    let len =arr.length
    for(let i=0; i<len; i++){
        let item =arr[i]
        if(typeof item !='number'){
            flat3(item)
        }else{
            res.push(item)
        }
    }
}

flat3([1, [[2], 3, 4], 5])
console.log(res)
