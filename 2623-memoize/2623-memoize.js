/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let hashMap = {
        sum:{},
        fib:{},
        factorial:{},
    }
    
    return function(...args) {
        if(args.length==2){
            let a = args[0];
            let b = args[1];
            let key = `${a},${b}`;
            if(key in hashMap.sum) return hashMap.sum[key];
            else{

                let ans = fn(...args);
                hashMap.sum[key] = ans;
                return ans;
            }
        }else{
        
            let a = args[0];
            let key = `${a}`;
            if(key in hashMap.fib) return hashMap.fib[key];
            else{
            
                let ans  = fn(...args);
                hashMap.fib[key] = ans;
                return ans;
            }
        
        
            let b= args[0];
            let key2 = `${b}`;
            if(key2 in hashMap.factorial) return hashMap.factorial[key2];
            else{
                
                let ans = fn(...args);
                hashMap.factorial[key2] = ans;
                return ans;
            }       
    }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */