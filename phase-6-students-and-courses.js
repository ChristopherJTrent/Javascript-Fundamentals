// Your code here
/**
 * 
 * @param {String} fname first name
 * @param {String} lname last name
 */
function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courses = [];   
}

function Course(name, dept, credits) {
    this.name = name;
    this.dept = dept;
    this.credits = credits;
    this.students = [];
}

Student.prototype.name = function() {
    return `${this.fname} ${this.lname}`;
}

/**
 * @param {Course} course 
 */
Student.prototype.enroll = function(course) {
    this.courses.push(course)
    course.students.push(this.name())
}


