//Create Classes: Student and Bootcamp

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
        if (this.students.filter(s => s.email === student.email.length)) {
            console.log(`The student ${student.email} is already registered.`)
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp${this.name}`);
        }
        return this.students;
    }
}

let student1 = new Student("Billy Bob", "billy_bob@email.com", "web community");
console.log(student1);

let react = new Bootcamp("React Course", "Hard"); 
console.log(react);

react.registerStudent(student1);
console.log(react.students);

let student2AlreadyRegistered = new Student("Billy Bob", "billy_bob@email.com", "web community");
console.log(student2AlreadyRegistered);