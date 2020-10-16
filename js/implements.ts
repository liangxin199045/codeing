interface Alarm {
    alert():void;
}

interface Light{
    light(light: number):void
}

class Door {

}

class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('alarm===')
    }
}

class Car implements Alarm, Light{
    alert(){
        console.log('car alarm====')
    }
    light(light:number){
        console.log('car light====');
    }
}