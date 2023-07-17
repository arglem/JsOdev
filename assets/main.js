

let students = [
    {
        name: 'Özlem', 
        surname: 'Argun', 
        age:35,
        lessons: [
            'Tarih', 'Türkçe', 'matematik'
        ]
    },
    {
        name: 'Ali', 
        surname: 'Akgün', 
        age:26,
        lessons: []
    },
]

function addStudent(name, surname, age){
    students.push({
        name: name,
        surname: surname,
        age: age,
        lessons: []
    })

    console.log(students)
}



function addStudentLesson(i, lessons){
    students[i].lessons.push(lessons)
    console.log(students[i])
}

function deleteStudent(i){
    students.splice(i, 1);
    console.log(students);
}


function editStudentLesson(i, lessonid, newLesson){
    students[i].lessons[lessonid] = newLesson
    console.log(students[i].lessons)
}


function deleteStudentLesson(i, lessonid){
    students[i].lessons.splice(lessonid, 1)
    console.log(students[i].lessons)
}

function editStudent(i, name, surname, age){
    let oldStudent = students[i]

    let newStudent = {
        name: name,
        surname: surname,
        age: age,
        lessons: oldStudent.lessons
    }
    students[i] = newStudent

    console.log(students)
}


const date = new Date()
console.log(date.toLocaleString())