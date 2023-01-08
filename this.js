// this used inside global space

this.table = "window table";
console.log(window.table);

this.garrage = {
    table : 'garrage table',
    cleanTable(){
        console.log(`cleaning a ${this.table} `)
    }
};
console.log(this.garrage.table);

// this inside an object

let johnsRoom = {
    table : 'johns table'
};
console.log(johnsRoom.table);

// this inside a method
let johnsRoom = {
    table : 'johns table',
    cleanTable(){
        console.log(`cleaning a ${this.table}`)
    }
};
console.log(johnsRoom.table);
johnsRoom.cleanTable();
garrage.cleanTable();

// this inside a function
this.table = "window table";

const cleanTable = function(soap){
    console.log(`cleaning a ${this.table} using ${soap}`)
}
cleanTable.call(this, 'some soap');
cleanTable.call(this.garrage, 'some soap');
cleanTable.call(johnsRoom.table, 'some soap');

// this inside a inner function
this.table = "window table";

const cleanTable = function(soap){
    const innerFunction = (_soap) =>{
        console.log(`cleaning a ${this.table} using ${soap}`)
    }
    innerFunction.call(soap);
};
cleanTable.call(this, 'some soap');

// this in class

class createRoom{
    constructor(name){
        this.table = `${name}`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const jillRoom = new createRoom ('jills');
jillRoom.cleanTable('some soap');