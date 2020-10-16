var array = [1, 2, 1, 1, '1'];

// es6 set
function unique(array) {
   return Array.from(new Set(array));
}

// indexof
function unique2(array) {
    let res =[]
    const len =array.length;
    for(let i =0; i<len; i++){
        let current =array[i]
        if(res.indexOf(current) === -1){
            res.push(current)
        }
    }
    return res
}

console.log(unique2(array));



