/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.array = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
     return this.array.reduce((acc, curr) => acc + curr, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    let output = "[";
    for(let i=0;i<this.array.length;i++){
           if(i===this.array.length-1) output = output + this.array[i];
           else{ output = output + this.array[i] + ',';}
    }
    output = output + ']';
    return output;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */