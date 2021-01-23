function Trainer(firstName, lastName, subject, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.group = group;
    this.university = 'SEDC';
    this.students = [];
    this.fullName = function () {
        // console.log('INSIDE FULLNAME FUNC', this);
        // console.log('GLOBAL THIS INSIDE FUNC', globalThis)
        return `${this.firstName} ${this.lastName}`
    }
    this.addStudent = function (student) {
        this.students.push(student);
    }
}

function Student(firstName, lastName, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.trainer = '';
    this.assignTrainer = function (group) {        
        switch (group) {
            case 'G1':
                this.trainer = 'Mike';
                break;
            case 'G2':
                this.trainer = 'Tanja';
                break;
            case 'G3':
                this.trainer = 'Jack';
                break;
            case 'G4':
                this.trainer = 'Peter';
                break;
            case 'G5':
                this.trainer = 'Martin';
                break;
            case 'G6':
                this.trainer = 'Goce';
                break;
            case 'G7':
                this.trainer = 'Ivo';
                break;
            default:
                this.trainer = '';
        }
    }
    this.changeGroup = function (group) {
        this.group = group;
        this.assignTrainer(group)
    }
}

let ivo = new Trainer('Ivo', 'Kostovski', 'BJS', 'G7');
// console.log(ivo.fullName())

let ivan = new Trainer('Ivan', 'Lazarevski', 'BJS', 'G7');
// console.log(ivan.fullName())
// console.log("THIS IN GLOBAL SCOPE", this)

let john = new Student('John', 'Smith', 'G7');

john.assignTrainer('G5')
john.changeGroup('G1');

let university = {
    trainers: [],
    students: [],
    addTrainer: function (trainer) {
        this.trainers.push(trainer);
    },
    addStudent: function (student) {
        this.students.push(student);
    },
    removeTrainer: function (trainer) {
        let newTrainersList = [];
        for (let tr of this.trainers) {
            if (tr === trainer) {
                continue;
            }
            newTrainersList.push(tr);
        }
        this.trainers = newTrainersList;
    },
    removeStudent: function (student) {
        let newStudentsList = [];
        for(let st of this.students) {
            if (st === student) {
                continue;
            }
            newStudentsList.push(st);
        }
        this.students = newStudentsList;
    }
}
let peter = new Student('Peter', 'Petersen', 'G1')
// console.log(university)
university.addTrainer(ivo);
university.addTrainer(ivan);
university.addStudent(john);
university.addStudent(peter);
// console.log(university)
// console.log(university.trainers)
// university.removeTrainer(ivo)
// console.log(university.trainers)
console.log(university.students);
university.removeStudent(peter);
console.log(university.students);
