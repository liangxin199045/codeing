// 防抖保护壳
function debounce(fn, wait){
    let timeout = null;
    return function() {
        let context =this
        let args =arguments;
        if(timeout !== null){
            clearTimeout(timeout);
        }
        timeout = setTimeout(function(){
            fn.apply(context,args)
        }, wait);
    }
}

// 处理函数
function deal(){
    console.log(Math.random())
}

window.addEventListener('scroll',debounce(deal, 2000))


function deal(fn,delay){
    let timeout =null
    return function(){
        let context =this
        let args= arguments
        if(timeout != null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(function(){
            fn.apply(context,args)
        },dealy)
    }
}


// 节流保护壳
function toole(func, delay) {
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}


function deal2(fn,delay){
    let pretime =Date.now()
    return function() {
        let context =this
        let args =arguments
        let now = Date.now()
        if(now -pretime>delay){
            fn.apply(context,args)
            pretime =Date.now()
        }
    }
}



function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', tool(handle, 2000));
