/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let copy = init;
    let increment = function(){
        return ++init;
    }
    let decrement = function(){
        return --init;
    }
    let reset = function(){
        init = copy;
        return init;
    }
    return{
        increment:increment,
        decrement:decrement,
        reset:reset,
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */