let bike = {
    a: 11,
    b: 22,
    m1: function() {
        console.log("bike:m1():" + this.a);
    }
};


console.log("bike");
console.log(bike);
for (let key in bike) {
    console.log(key + ":" + bike[key]);
}


let person = {
    name: 'nobody',
    mybike: Object.create(bike)
}

let b1 = Object.create(bike);
// b1.a = 111;
// b1.b = 222;
console.log("b1");
console.log(b1);
for (let key in b1) {
    console.log(key + ":" + b1[key]);
}
let b2 = Object.create(bike);
b2.a = 333;
b2.b = 444;
console.log("b2");
console.log(b2);
for (let key in b2) {
    console.log(key + ":" + b2[key]);
}

let b3 = bike.constructor(); // new Object();
b3.a = 555;
b3.b = 666;
console.log("b3");
console.log(b3);
for (let key in b3) {
    console.log(key + ":" + b3[key]);
}
console.log("------");
let p1 = Object.create(person);
// p1 = new Object;
p1.name = 'Brad';
p1.mybike.a = 777;
p1.mybike.m1();
for (let key in p1) {
    console.log(key + ":" + p1[key]);
}
console.log("------");

function clonePerson(obj) {
    let newperson = Object.create(person);
    for (let key in obj) {
        newperson[key] = obj[key];
    }
    return newperson;
}
let p2 = clonePerson(p1);
for (let key in p2) {
    console.log(key + ":" + p2[key]);
}
console.log(p2.mybike.a);
console.log("------");

// let p3 = clone(p1);
// for (let key in p3) {
//     console.log(key + ":" + p3[key]);
// }
// console.log(p3.mybike.a);
// console.log("------");
// let v1 = 123;
// let v2 = clone(v1);
// console.log(v1 + " : " + v2);