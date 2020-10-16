class parent {
    constructor(a,b){
        this.a =a
        this.b =b
    }

    parentMethods(){
        return this.a + this.b
    }
}

class child extends parent{
    constructor(a,b,c){
        super(a,b)
        this.c =c
    }

    childMethods(){
        return this.c +','+super.parentMethods()
    }
}

const child_temp =new child(1,2,3)
console.log(child_temp.childMethods())