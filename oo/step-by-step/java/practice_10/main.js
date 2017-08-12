class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
        }else{
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        student.klass = this;
    }
}

class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, id, klass) {
        super(name, age, id);
        this.klass = klass;
    }

    introduce() {
        let message = super.introduce() + ' I am a Student.';
        if (this.klass.leader === this) {
            message += ' I am Leader of Class ' + this.klass.number + '.';
        } else {
            message += ' I am at Class ' + this.klass.number + '.';
        }
        return message
    }
}

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ' I am a Teacher. I teach ' + (this.klass ? 'Class ' + this.klass + '.' : 'No Class.');
    }

    introduceWith(student) {
        return super.introduce() + ' I am a Teacher. I ' + (this.klass === student.klass.number ? `teach` : `don't teach`) + ` ${student.name}.`;
    }
}

let c1 = new Class(1);
let c2 = new Class(2);
let s1 = new Student('xx', 13, 1, c1);
let s2 = new Student('xxx', 14, 2, c2);
c1.assignLeader(s1);
c1.assignLeader(s2);
console.log(s1.introduce());
console.log(s2.introduce());

// let t=new Teacher('xiongxin',14,3,3);
// let s1=new Student('xx',13,1,new Class(3));
// let s2=new Student('xxx',14,2,new Class(2));
//
// console.log(t.introduce());
// console.log(t.introduceWith(s1));
// console.log(t.introduceWith(s2));