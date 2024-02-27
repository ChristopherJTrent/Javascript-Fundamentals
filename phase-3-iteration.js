// Your code here

Array.prototype.bubbleSort = function() {
    const swap = function(arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    let temp = [...this];
    if (temp.length <= 1) return temp;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < temp.length - 1; i++) {
            if (temp[i] > temp[i+1]) {
                // swap(temp, i, i+1);
                const temp_storage = temp[i];
                temp[i] = temp[i+1];
                temp[i+1] = temp_storage;
                swapped = true
            }
        }
    }
    return temp;
}

String.prototype.substrings = function() {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            arr.push(this.slice(i, j));
        }
    }
    return arr;
}