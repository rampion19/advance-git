// calling a obj
var obj = {a : 10}

var sum = function(b,c,d){
    return this.a + b + c + d;
}
console.log(sum.call(obj,1,2,3));

// apply 

var arr = [1,2,3]
console.log(sum.apply(obj,arr));

// bind

var obj1 = {num:10}

var add= function(arg1,arg2,arg3){
    return this.num + arg1 + arg2 + arg3;
}
var bound = add.bind(obj1);
console.log(bound(1,2,3));

// student obj
var object = {student:20}

var add= function(){
    return this.student;
}
var bound1 = add.bind(object);
console.log(bound1());