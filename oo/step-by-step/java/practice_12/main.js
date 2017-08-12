class Class {
    constructor(number) {
        this.number = number;
        this.teachers=[];
    }

    assignLeader(student) {
        if(student.klass===this){
            this.leader=student;
            for(let i of this.teachers){
                if(i.isTeaching(student)){
                    i.welcomeLeader(student);
                }
            }
        }else{
            console.log('It is not one of us.');
        }
    }

    addTeacher(teacher){
        this.teachers.push(teacher);
    }

    appendMember(student) {
        student.klass=this;
        for(let i of this.teachers){
            if(i.isTeaching(student)){
                i.welcomeStudent(student);
            }
        }
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
        klass.appendMember(this);
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

class Worker extends Person {
    introduce() {
        return super.introduce() + ' I am a Worker. I have a job.'
    }
}

class Teacher extends Person {
    constructor(name, age, id, classes) {
        super(name, age, id);
        this.classes = classes;
        this.tellClass(classes);//这里是为了在相应Class对象中保存老师的信息
    }

    tellClass(classes) {
        for(let i of classes){
            i.addTeacher(this);
        }
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

    welcomeStudent(student){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }

    welcomeLeader(student){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
    }
}

let c1=new Class(1);
let c2=new Class(2);
let t1=new Teacher('x',13,1,c1);
let s1=new Student('xx',13,2,c1);
c1.assignLeader(s1);
let s2=new Student('xxx',13,3,c2);
c2.assignLeader(s2);
c1.assignLeader(s2);