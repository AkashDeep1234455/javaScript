/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let output = [];
    let array = [];
    arr.forEach((element,index)=>{
        array.push(element);
        if(array.length===size||index==arr.length-1){
            output.push(array);
            array = [];
        }
    })
    return output;
};
