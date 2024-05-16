/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let arr = this;
    let output = {};
    arr.forEach((element,index)=>{
        let key = fn(element);
        if(!output.hasOwnProperty(key)){
            output[key] = [];
        }
        output[key].push(element);
    })
    return output;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */