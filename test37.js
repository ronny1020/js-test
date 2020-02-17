let now = new Date();
console.log(now);
console.log(typeof now);

year = now.getFullYear();
mouth = now.getMonth() + 1;
date = now.getDate();

console.log(year + ',' + mouth + ',' + date);


Date.prototype.getTWYear = function() {
    return this.getFullYear() - 1911;
}
tw_year = now.getTWYear();
console.log(tw_year + ',' + mouth + ',' + date);
console.log(getFullYear.__proto__)