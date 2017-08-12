class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${ this.name } . I am ${ this.age } years old.`
    }
    basicIntroduce(){
        return `My name is ${ this.name } . I am ${ this.age } years old.`
    }
}


class Student extends Person {
    constructor(name,age,klass){
        super (name,age)
        this.klass = klass;
    }
    introduce(){
        return super.introduce() + `I am a Student. I am at Class ${ this.klass } .`;
    }
}

class Worker extends Person{
    introduce(name,age){
        return super.introduce() + 'I am a Worker. I have a job.';
    }
}

console.log(new Worker('Tom',21).introduce());
console.log(new Student('Tom',21,2).introduce());
console.log(new Person('Tom',21).introduce());