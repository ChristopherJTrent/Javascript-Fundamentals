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