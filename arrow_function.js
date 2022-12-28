// let getA = a => a;
// console.log(getA(1));

// let square = (a) => {return a*a};
// console.log(square(5));

// var a = 5;
// var b = 6;
// let multiply = () => {return a*b};
// console.log(multiply());

// var x = function (){
//     this.val = 1;
//     setTimeout(() =>{
//         this.val++;
//         console.log(this.val);
//     },1000)
// };
// x();

class student{
    static count = 0;
    constructor(name, age, marks,){
        this.name = `${name}`;
        this.age = `${age}`;
        this.marks = `${marks}`;
        student.studentCount();
    }
    checkEligibility(minAge){
        return (minMarks) => {
            if (this.age > minAge && this.marks > minMarks){
                console.log(this.name +' ' + 'is eligible');
            }
            else{
                console.log(this.name +' ' + 'is not eligible');
            }
        }
        
    }
    static studentCount(){
        return student.count++;
    }
}
const student1 = new student ('Prince', 28, 80)
const student2 = new student ('Yogesh', 29, 45)
const student3 = new student ('Sawan', 27, 50)
const student4 = new student ('Piyush', 28, 60)
const student5 = new student ('Mayank', 28, 30)
student1.checkEligibility(18)(40);
student2.checkEligibility(18)(40);
student3.checkEligibility(18)(40);
student4.checkEligibility(18)(40);
student5.checkEligibility(18)(40);
console.log(student.studentCount());