//Create Student Class with "name", "email", and "community" constructor parameters
class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

//Create Bootcamp Class with parameters: "name", "level", and "students" array.
class Bootcamp { 
    constructor (name, level, students=[]) { 
        this.name = name;
        this.level = level; 
        this.students = students;
    }

//registerStudent() methos adding to Bootcamp Class
registerStudent(student) {
    const studentEmailAlreadyRegistered = this.students.filter( s => s.email === student.email );
    if (studentEmailAlreadyRegistered.length > 0) {
        console.log(`The student ${student.email} is already registered.`)
    } else {
        this.students.push(student);
        console.log(`Registering ${student.email} to the bootcamp${this.name}`);
    }
    return this.students;
    }
}

let react = new Bootcamp("React Course", "Hard"); 
console.log(react);

let student1 = new Student("Billy Bob", "billy_bob@email.com", "web community");
console.log(student1);
react.registerStudent(student1);

let student2 = new Student("Billy Joel", "Joel_bob@email.com", "online pre-registered community");
console.log(student2);
react.registerStudent(student2);

let student3AlreadyRegistered = new Student("Billy Joel", "Joel_bob@email.com", "online pre-registered community");
console.log(student3AlreadyRegistered);
react.registerStudent(student3AlreadyRegistered);

console.log(react.students);
