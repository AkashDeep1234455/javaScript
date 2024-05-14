/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let toBe = function(newVal){
         if(newVal===val) return true;
         else{
            throw new Error("Not Equal");
         }
    }
    let notToBe = function(newVal){
        if(newVal!==val) return true;
        else{
            throw new Error("Equal");
        }
    }
    return {
        toBe : toBe,
        notToBe : notToBe,
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */