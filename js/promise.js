function delay(time){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('ok')
            resolve()
        },time)
    })
}

delay(5000)


const PENDING ='pengind'
const FULFILLED ='fulfilled'
const REJECTED ='reject'

function PromiseA (fn){
    if(typeof fn !=='function'){
        throw new Error('fn需要是一个函数')
    }

    var self =this
    self.state =PENDING     
    self.onResolveCallback  =[]  //存放成功回调
    self.onRejectCallback =[]    //存放失败回调

    function resolve(value){
        if(self.state ===PENDING){
            self.state =FULFILLED
            setTimeout(function(){
                self.onResolveCallback.map((func)=>{
                    func(value)    
                })
            },0)
        }
    }

    function reject(value){
        if(self.state ===PENDING){
            self.state =REJECTED
            setTimeout(function(){
                self.onRejectCallback.map((func)=>{
                    func(value)    
                })
            },0)
        }
    }

    try{
        fn(resolve,reject)
    }catch(e){
        reject(e)
    }
}

PromiseA.prototype.then =function(onFulfilled,onRejected){
    if(typeof onFulfilled !='function'){
        onFulfilled = (v) =>{return v}
    }
    if(typeof onRejected !='function'){
        onRejected = (v) =>{return v}
    }

    if(self.state ===FULFILLED){
        // todo
        // return new PromiseA
    }

    if(self.state ===REJECTED){
        // todo
        // return new PromiseA
    }

    if(self.state ===PENDING){
        self.onResolveCallback.push(onFulfilled)
        self.onResolveCallback.push(onFulfilled)   
    }

}

let a =function(){
    return new PromiseA((resolve,reject)=>{setTimeout(function(){console.log('iceman');resolve('success')},3000)});
}

a().then(((value)=>{console.log(value)}))