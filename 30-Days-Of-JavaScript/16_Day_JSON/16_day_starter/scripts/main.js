console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`

// const usersObj = JSON.parse(usersText, undefined, 4)
// console.log(usersObj)

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`

// const usersObj = JSON.parse(usersText, (key, value) => {
//     let newValue =
//         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//     return newValue
// })
// console.log(usersObj)



//Exercises 
//Part 1
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
//1st Question
let skillsTxt = JSON.stringify(skills)
console.log(skillsTxt)

//2nd Question
let ageTxt = JSON.stringify(age)
console.log("🚀 ~ file: main.js ~ line 175 ~ ageTxt", ageTxt)

//3rd Question
let isMarriedTxt = JSON.stringify(isMarried)
console.log("🚀 ~ file: main.js ~ line 177 ~ isMarriedTxt", isMarriedTxt)

//4th Question
let studentTxt = JSON.stringify(student)
console.log("🚀 ~ file: main.js ~ line 184 ~ studentTxt", studentTxt)

//level 2 
//1st Question
let studentTxt2 = JSON.stringify(student, ["firstName", "lastName", "skills"])
console.log("🚀 ~ file: main.js ~ line 189 ~ studentTxt2", studentTxt2)


//level 3
//1st Question
let txtObject = JSON.parse(txt, undefined, 4)
console.log("🚀 ~ file: main.js ~ line 195 ~ txtObject", txtObject)


//2nd Question
let keys = Object.keys(txtObject)
console.log("🚀 ~ file: main.js ~ line 200 ~ keys", keys)
let max = txtObject[keys[0]].skills.length
let maxName = keys[0]
for (let x of keys) {
  if (txtObject[x].skills.length > max) {
    max = txtObject[x].skills.length;
    maxName = x
  }
}
console.log({Name: maxName, Skills: max})

let enteries = Object.entries(txtObject)
enteries = enteries.sort(function (a, b) {
  if (a[1].skills.length < b[1].skills.length) return 1;
  if (a[1].skills.length > b[1].skills.length) return -1;
  return 0;
})
console.log("🚀 ~ file: main.js ~ line 211 ~ enteries", enteries)
console.log(enteries[0])