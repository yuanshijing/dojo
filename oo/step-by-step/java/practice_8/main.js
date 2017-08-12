class Class {
    constructor(number) {
        this.number = number;
    }
}

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${ this.name } . I am ${ this.age } years old.`
    }
}

class Student extends Person {
    constructor(name,age,klass){
        super (name,age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce() + `I am a Student. I am at Class ${ this.klass.number }.`;
    }
}

class Teacher extends Person {
    constructor(name,age,klass){
        this.klass = klass;
    }
    introduce(name,age){
        return super.introduce() + 'I am a Teacher.I am at Class' + (this.klass?'klass' + this.klass:'No Class') +'.';
    }
    introduceWith(name,age){
        return super.introduce() + 'I am a Teacher.I am at Class' + (this.klass === student.klass ? 'teach' : "don't teach" )+ `${student.name}.`;
    }
}
c
let t = new Teacher('Tom',21,2);
let s1 = new Studene('Tom',21,new Class(2));
let s2 = new Student ('Jarry',21,new Class(1));

console.log(t.introduce());
console.log(t.introducewith(s1));
console.log(t.introducewith(s2));