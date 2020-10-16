const iceman = {
    a:'123'
}
Object.defineProperty(iceman,'a',{
    set: function(val){
        console.log(val)
    },
    get: function(){
        console.log('iceman')
    }
})

console.log(iceman.a)