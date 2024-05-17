/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(obj===null) return null;
    if(Array.isArray(obj)){
        let output = [];
        obj.forEach((element,index)=>{
            if(Array.isArray(element)){
                output.push(compactObject(element));
            }else if(typeof element === 'object' && !Array.isArray(element) && element !== null){
                   output.push(compactObject(element));
                }
            else if(element) output.push(element);
         
        });
        return output;
    }else{
        let output = {};
        for(let key in obj){
            let value = obj[key];
            if(Array.isArray(value)){
                output[key] = compactObject(value);
            }else if(typeof value === 'object' && !Array.isArray(value) && value !== null){
                   output[key] = compactObject(value);
                }
            else if(value){
                output[key] = value;
            }
        }
        return output;
    }
};