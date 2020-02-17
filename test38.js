bike = {
    brand: 'Gaient',
    speed: 12,
    chSpeed: function(value) {
        this.speed = value;
    }
}
bike.test = "test"
person = {
    name: 'Perter',
    bike: [{
        brand: 'A',
        speed: 0
    }, {
        brand: 'B',
        speed: 10
    }]
}




// myBike = JSON.stringify(bike);
jbike = JSON.stringify(bike)
console.log(jbike)
jperson = JSON.stringify(person)
console.log(jperson)

pjbike = JSON.parse(jbike);
console.log(pjbike);
console.log(pjbike.brand + ':' + pjbike.speed)
pjperson = JSON.parse(jperson);
console.log(pjperson);
console.log(pjperson.name + ':' + pjperson.bike[0].brand)
number