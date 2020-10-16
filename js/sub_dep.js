function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
}
Dep.prototype.notify = function () {
    this.subs.forEach(sub=>sub.update());
}
function Watcher(fn) {
    this.fn = fn;
}
Watcher.prototype.update = function () {
     this.fn();
}

var dep = new Dep();
dep.addSub(new Watcher(function () {
    console.log('okokok');
}))
dep.notify();



function iceman(){
    this.subs =[]
}

iceman.prototype.addSub =function(sub){
    this.subs.push(sub)
}

iceman.prototype.notify =function(){
    this.subs.map((sub)=>{
        sub.update()
    })
}

function watcher(fn){
    this.fn =fn
}
watcher.prototype.update =function (){
    this.fn();
}

let ice =new iceman();
ice.addSub(new Watcher(()=>{
    console.log('watch deal')
}))
ice.addSub(new Watcher(()=>{
    console.log('watch deal2')
}))

ice.notify()