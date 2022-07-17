// console.log(countries)
// // alert('Open the console and check if the countries has been loaded')

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Redux',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }
// // Let us create a function which give information about the person object with destructuring
// const getPersonInfo = ({
//     firstName,
//     lastName,
//     age,
//     country,
//     job,
//     skills,
//     languages
// }) => {
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const formattedLanguages = languages.slice(0, -1).join(', ')

//     personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//     return personInfo
// }
// console.log(getPersonInfo(person))


// const user = {
//     name:'Asabeneh',
//     title:'Programmer',
//     country:'Finland',
//     city:'Helsinki'
//   }

//   const copiedUser = {...user, title:'instructor'}
//   console.log(copiedUser)


//Exercise Part 1 
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
//1st question
let [pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(pi, gravity, humanBodyTemp, waterBoilingTemp)
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter)
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p)


//Part 2 
//1st Question
for (let { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age)
}
for (let { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        console.log(name)
    }
}


//part 3
//first Question
for (let { name, capital, languages, population, flag, currency } of count) {
    console.log(`Name: ${name} Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`)
}

//second Question
{
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    let [name, skills, [, , jsScore, reactScore]] = student;
    console.log(name, skills, jsScore, reactScore)
}

//third Question
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students) {
    let result = []
    for (let [name, skills, scores] of students) {
        result.push({ name: name, skills: skills, scores: scores })
    }
    return result;
}
console.log(convertArrayToObject(students))


//forth Question //Good Exercise
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
let newStudent = { ...student, name: 'Hossein' }
newStudent.skills = { ...newStudent.skills, frontEnd: [...newStudent.skills.frontEnd, { skill: 'Bootstrap', level: 8 }] }
newStudent.skills = { ...newStudent.skills, backEnd: [...newStudent.skills.backEnd, { skill: 'Express', level: 9 }] }
newStudent.skills = { ...newStudent.skills, dataBase: [...newStudent.skills.dataBase, { skill: 'SQL', level: 8 }] }
newStudent.skills = { ...newStudent.skills, dataScience: [...newStudent.skills.dataScience, 'SQL'] }
// newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
// newStudent.skills.backEnd.push({skill: 'Express', level: 9})
// newStudent.skills.dataBase.push({skill: 'SQL', level: 9})
// newStudent.skills.dataScience.push('SQL')
console.log(newStudent)
console.log(student)











