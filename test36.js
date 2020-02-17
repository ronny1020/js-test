bike = {
    a: 11,
    b: 22,
    m1: function() {
        console.log("bike:m1():" + this.a);

    }
}
person = {
    name: 'aaa',
    mybike: Object.create(bike),

}

let b1 = Object.create(bike);
console.log(b1)

for (i in b1) {
    console.log(i + ':' + b1[i]);
}
console.log("............................")


// let b2 = {...b1 };
let b2 = new Object()
console.log(b2)

for (i in b2) {
    console.log(i + ':' + b2[i]);
}