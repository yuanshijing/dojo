class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${ this.name } . I am ${ this.age } years old.`
    }
}

class Student {
    constructor(name,age,klass) {
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce() {
       return `My name is ${ this.name }. I am ${ this.age } years old. I am a Student. I am at Class ${ this.klass } .`;
    }
}
let p1 = new Person ('Tom',21);
console.log(p1.introduce());
let s1 = new Student ('Tom',21,2);
console.log (s1.introduce());
