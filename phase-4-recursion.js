// Your code here
//? equivalent to (start...end) in ruby
function range(start, end, accumulator = [])  {
    //? start 
    //? end
    //? accumulator
    //? the accumulator will be returned at the end as our array of numbers from start to end
    //? base case:
    //?     start === end
    //?         return accumulator
    //? recursive step: (if start < end)
    //?     range(start+1, end, accumulator << start)
    //! start === end will be exclusive
    //! start > end will be inclusive
    if (start > end) {
        return accumulator;
    }
    return range(start + 1, end, accumulator.concat(start));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumRec(arr.slice(1))
}

//version1
function exponent(base, exp) {
    if (exp === 0) return 1;
    return base * exponent(base, exp -1);
}

//version2
function exponentV2(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;

    if (exp % 2 === 0) {
        return (exponentV2(base, exp/2))**2;
    }
    return base * (exponentV2(base, (exp-1)/2)**2);
}

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1, 1];
    
    const temp = fibonacci(n-1);
    return temp.concat(temp[n-1] + temp[n-2])
}


function deepDup(arr) {
    const output = [];
    arr.forEach((ele) => {
        if (ele instanceof Array) { 
            output.concat(deepDup(ele));
        } else {
            output.concat(ele);
        }
    }); 
    return output;
}