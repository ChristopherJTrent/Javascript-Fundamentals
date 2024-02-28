// Your code here

function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    return `${this.owner} loves ${this.name}`;
}

const cat1 = new Cat("jackson", "diego");
const cat2 = new Cat("tom", "jerry");
console.log(cat1.cuteStatement());
cat1.cuteStatement = function(){
    return `Everyone loves ${this.name}`;
}
console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function() {
    return "This method has been overloaded";
}

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());