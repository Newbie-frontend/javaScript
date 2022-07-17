let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
//level 1
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)

let Hossein = [
    { firstName: 'Hossein' },
    { lastName: 'Raz' },
    { age: 29 },
    { country: 'Iran' },
    { city: 'Ankara' }
]
let HosseinTxt = JSON.stringify(Hossein)
localStorage.setItem('Hossein', HosseinTxt)
//level 2 
const student = {
    firstName: 'Kerem',
    lastName: 'Mutlu',
    age: 20,
    skills: ['HTML', 'CSS', 'JS'],
    country: 'Turkey',
    enrolledKeys: {
        key1: 'key1 Value',
        key2: 'key2 Value',
        key3: 'key3 Value'
    }
}
let studentTxt = JSON.stringify(student)
localStorage.setItem('Student', studentTxt)

//level 3
//class