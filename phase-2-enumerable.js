// Your code here

Array.prototype.myEach = function(callback) {

    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    return undefined
}

Array.prototype.myMap = function(callback) {
    const arr = [];
    function doMap(){
        this.myEach((ele) => {
            arr.push(callback(ele));
        });
    }
    return arr;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let temp = [...this];
    initialValue ??= temp.shift();
    let acc = initialValue;

    temp.myEach((ele) => {
        acc = callback(acc, ele);
    });
    return acc;
}