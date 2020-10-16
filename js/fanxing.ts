// 范型函数，范型约束
interface param {
    length: number;
}

function logiceman<T extends param>(arg:T):T{
    console.log(arg.length);
    return arg;
}

function iceman<T>(arg:T):T{
    return arg;
}

// 可以使用接口的方式定义一个函数需要符合的形状
// 范型接口
interface SearchFunc {
    (source: string, subString: string):boolean;
}

let serch: SearchFunc =function(source: string, subString: string):boolean{
    return false;
}

interface SearchBob<T> {
    (length: number, value: T):Array<T>
}

let searchbob:SearchBob<string> =function(length: number, value:string):Array<string>{
    return ['2','3']
}

searchbob(2,'33')

type wendy = string 

let searchbob2:SearchBob<number> =function(length:number, value:number):Array<number>{
    return [value,value]
}

searchbob2(3,333)

// 范型类
class Icemanliang<T =string> {
    title: T;
    add: (x: T,y: number) => T;
}

const im =new Icemanliang<number>();
im.title =12;
im.add(2,3);

// 枚举
enum Days {
    Mon,
    Tus,
    San,
    Tes,
    Fri
}

console.log(Days.Mon)