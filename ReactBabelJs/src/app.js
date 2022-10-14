const root = document.getElementById("root");

/* ES6 Class */

class ES6Person {
    constructor(name = "Berkay", year = new Date().getFullYear()){
        this.name = name;
        this.year = year;
    }

    getAgeOfYear(){
        return  new Date().getFullYear() - this.year;
    }

    greeting(text){
        return `${text}, Benim adım ${this.name}`;
    }
}

class Student extends ES6Person {
    constructor(name, year, lessons){
        super(name, year);
        this.lessons = lessons;
    }

    teaching(){
        return "Öğreniyorum";
    }

    greeting2(text){
        let str = super.greeting(text);
        str += `Dersim: ${this.lessons}`;
        return str;
        //Alternatif yazım
        // return `${super.greeting(text)} Dersim : ${this.lessons}`;
    }
}

const ES6pStudent = new Student("Berkay Sivri","2000","React.js");

console.log(ES6pStudent.greeting2(ES6pStudent.name));

class Teacher extends ES6Person{
    constructor(name, year, department){
        super(name, year);
        this.department = department;
    }

    departments(){
        return 'Departmanım software';
    }

    greetingTeacher(text){
        return `${super.greeting(text)} Departmanım : ${this.department}`;
    }
}

const ES6Teacher = new Teacher("Berkay Sivri", 2000, "Web Developer");
console.log(ES6Teacher.greetingTeacher('Selam'))

