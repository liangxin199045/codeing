const demo =[5,4,5,6,2,1]


// 计算最大收益
function maxDeal(arr){
    let min =arr[0]     //买入点
    let result =0       // 收益

    let len =arr.length
    for(let i =1; i<len; i++){
        if(arr[i] > arr[i-1]){
            result =Math.max(result, arr[i]-min)
        }else{
            min =Math.min(min, arr[i])
        }
    }

    return result
}

console.log(maxDeal(demo))



