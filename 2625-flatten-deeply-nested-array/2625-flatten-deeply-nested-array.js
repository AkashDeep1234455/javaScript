/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0) return arr;
    let output = [];
    arr.forEach((element,index)=>{
        if(Array.isArray(element)&&n>0){
            output.push(...flat(element,n-1));
        }else{
            output.push(element);
        }
    });
    return output;
};