
/**
   *实现promise中的all方法
   */
  function all(array) {
    judgeType(array);
    return new Promise((resolve, reject) => {
      let count = 0
      let result =[]
      array.forEach((element, index) => {
        element.then((value) => {
          count += 1;
          result[index] =value
          if (array.length === count) {
            resolve(result);
          }
        },(error) => {
            reject(error);
        })
      })
    })
  }
  /**
   *类型的判断
   */
  function judgeType(array) {
    if (array instanceof Array) {
      array.forEach(item => {
        if (!(item instanceof Promise)) {
          throw "该参数的每一项必须是Promise的实例";
        }
      });
    } else {
      throw "必须是数组哦";
    }
  }


const promise1 =new Promise((resolve,reject)=>{
    // reject(new Error('error'))
    resolve('iceman')
})
const promise2 =new Promise((resolve,reject)=>{
    // reject(new Error('error'))
    resolve('is')
})
const promise3 =new Promise((resolve)=>{
    resolve('good')
})

const promise4 =Promise.reject(new Error('error'))


all([promise1,promise2,promise4]).then((results)=>{
    console.log(results)
}).catch((error)=>{
    console.log(error)
})