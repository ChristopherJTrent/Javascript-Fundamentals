// Your code here

/**
 * @returns {Array}
 */
Array.prototype.uniq = function() {
    let arr = []
    this.forEach((element)=>{
        if (!arr.includes(element)) {
            arr.push(element)
        }
    });
    return arr;
}


Array.prototype.twoSum = function() {
    let arr = []
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                arr.push([i, j])
            }
        }
    }
    return arr;
}

Array.prototype.transpose = function() {
    let arr = []
    for (i = 0; i < this.length; i++) {
        // [[1,2,3],[4,5,6],[7,8,9]]
        // steps:
        // [[1],[2],[3]]
        // [[1,4],[2,5],[3,6]]
        // [[1,4,7],[2,5,8],[3,6,9]]
        let subarray = []
        for (j = 0; j < this[i].length; j++) {
            subarray.push(this[j][i])
        }
        arr.push(subarray)
    }
    return arr;
}