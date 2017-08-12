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
        return super.introduce() + `I am a Teacher. I am at Class ${ this.klass } .`;
    }
}

class Teacher extends Person {
    constructor(name,age,klass){
        super (name,age);
        this.klass = klass;
    }
    introduce(name,age){
        return super.introduce() + 'I am a Teacher.I am at Class' + (this.klass?'klass' + this.klass:'No Class') +'.';
    }
}

console.log(new Student('Tom',21,2).introduce());
console.log(new Person('Tom',21).introduce());