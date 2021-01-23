function Trainer(firstName, lastName, subject, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.group = group;
    this.university = 'SEDC';
    this.fullName = function () {
        // console.log('INSIDE FULLNAME FUNC', this);
        // console.log('GLOBAL THIS INSIDE FUNC', globalThis)
        return `${this.firstName} ${this.lastName}`
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
// console.log(ivo);
console.log(ivo.fullName())

let ivan = new Trainer('Ivan', 'Lazarevski', 'BJS', 'G7');
// console.log(ivan)
console.log(ivan.fullName())
// console.log("THIS IN GLOBAL SCOPE", this)

let john = new Student('John', 'Smith', 'G7');
console.log(john.trainer)
john.assignTrainer('G5')
console.log(john.trainer)
// john.group = 'G1';
console.log(john.group)
john.changeGroup('G1');
console.log(john.group)
console.log(john.trainer)
