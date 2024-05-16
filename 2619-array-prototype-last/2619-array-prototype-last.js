/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let arr= this;
    let size = arr.length;
    if(size==0) return -1;
    return this[size-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */