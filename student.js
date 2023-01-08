class student{
    static count = 0;
    constructor(name, age, marks,){
        this.name = `${name}`;
        this.age = `${age}`;
        this.marks = `${marks}`;
        student.studentCount();
    }
    checkEligibility(){
        if (this.marks <=40){
            console.log('not eligible')
        }
        else{
            console.log('eligible')
        }
    }
    static studentCount(){
        return student.count++;
    }
}
const student1 = new student ('Prince', 28, 80)
const student2 = new student ('Yogesh', 29, 40)
const student3 = new student ('Sawan', 27, 50)
const student4 = new student ('Piyush', 28, 60)
const student5 = new student ('Mayank', 28, 30)
student1.checkEligibility(this.marks);
student2.checkEligibility(this.marks);
student3.checkEligibility(this.marks);
student4.checkEligibility(this.marks);
student5.checkEligibility(this.marks);
console.log(student.studentCount());