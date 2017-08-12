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
        super (name,age)
        this.klass = klass;
    }
    introduce () {
        return `My name is ${ this.name }. I am ${ this.age } years old. I am a Student. I am at Class ${ this.klass } .`;  
    }
}

let s1 = new Student('Tom',21,2);
console.log(s1.introduce());

class Worker extends Person{
    introduce(name,age){
        return `My name is ${ this.name }. I am ${ this.age } years old. I am a Worker. I have a job.`;
    }
}
let w1 = new Worker('Tom',21);
console.log(w1.introduce());
