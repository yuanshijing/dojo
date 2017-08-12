class Class {

    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        if(student.klass===this){
            this.leader=student;
        }else{
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        student.klass=this;
    }

    isIn(student){
        return student.klass===this;
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
    constructor(name, age, id, classes) {
        super(name, age, id);
        this.classes = classes;
    }

    introduce() {
        let message = super.introduce() + ' I am a Teacher.';
        if (this.classes.length) {
            message += ' I teach Class ';
            let temparr=[];
            for(let i of this.classes){
                temparr.push(i.number);
            }
            message+=temparr.join(', ')+'.';
        } else {
            message += ' I teach No Class.';
        }
        return message;
    }

    introduceWith(student) {
        return super.introduce() + ' I am a Teacher. I ' + (this.klass === student.klass.number ? `teach` : `don't teach`) + ` ${student.name}.`;
    }

    isTeaching(student){
        for(let i of this.classes){
            if(i.isIn(student))
                return true;
        }
        return false;
    }

}
// let c1=new Class(1);
// let c2=new Class(2);
// let c3=new Class(3);
// let s1=new Student('xxx',12,2,c1);
// let s2=new Student('xxxx',13,3,c3);
// let t1 = new Teacher('xx', 12, 1,c1,c2);
// console.log(t1.introduce());
//
// console.log(t1.isTeaching(s1));
// console.log(t1.isTeaching(s2));