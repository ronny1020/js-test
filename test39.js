//es6
//請問class bike{}跟bike={}這兩個方法有什麼差？
class bike {
    constructor(speed) {
        console.log('bike()')
        this.speed = speed;
        this.name = '';

    }
    upSpeed() {
        console.log('upSpeed()')
    }
}

b1 = new bike(12);
b1.upSpeed();
console.log('----------------------------------------------------------------')
class Scooter extends bike {
    chGear() {
        console.log("chGear()");
    }
    upSpeed() {
        super.upSpeed();
        console.log('SCOOTER:upSpeed()')
    }
}
console.log('----------------------------------------------------------------')
s1 = new Scooter(34);
s1.upSpeed();








console.log('----------------------------------------------------------------')
console.log(bike)
console.log(Object.prototype.toString.call(Math))