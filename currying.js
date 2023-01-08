// currying method using bind
// let multiply = function(x,y){
//     console.log(x*y);
// }

// let multiplybyTwo = multiply.bind(this);
// multiplybyTwo(5,2);
// let multiplybyThree = multiply.bind(this, 3);
// multiplybyThree(5);

// currying method using closure

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
// let multiplybyTwo = multiply(3);
multiply((3)(5));
