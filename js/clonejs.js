// 浅拷贝
function qianClone(obj){
	let newObj = {}
    for(let key in obj){
    	newObj[key] =obj[key]
    }
    return newObj
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

// 深拷贝
function deepClone(obj){
    // 处理各类特殊对象
    if(obj === null)return null
    if(obj instanceof RegExp)return new RegExp(obj)
    if(obj instanceof Date)return new Date(obj)
    if(typeof obj !='object'){
        return obj
    }

    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        newObj[key] =deepClone(obj[key])
    }
    return newObj
}


const cm = {
	name: 'iceman',
    age: 29,
    data: new Date(),
    ref: /^123/g,
    arr: ['apple',2,'jtr'],
    sports: {
    	ball: 'imda',
        leg: 14,
        bmw: '60w'
    },
    action: function(){
        console.log('2222')
    }
}

let result3 =deepClone(cm)
result3.sports.ball ='bob'
console.log(result3)






