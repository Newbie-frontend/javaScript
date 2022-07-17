console.log(countries)
// alert('Open the console and check if the countries has been loaded')

//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible



const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

// person.getPersonInfo = function() {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ')
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//   let fullName = this.getFullName()
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//   return statement
// }
// console.log(person)
// console.log(person.getPersonInfo())

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

console.log(person.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('score'))

//questions 
// 1st question
const dog = {
    Name: 'Jose',
    legs: 4,
    color: 'black',
    age: 5,
    bark: function () { return `woof woof` }
}
console.log(typeof dog)
console.log(dog)
let valueOfDogs = Object.values(dog)
console.log(valueOfDogs)
dog.breed = 'Doberman'
dog.getDogInfo = function () {
    let info = `${this.Name} is a ${this.breed} dog. \nHe has ${this.color} color and ${this.legs} legs. \nHe is ${this.age} years old.`
    return info;
}
console.log(dog)
console.log(dog.getDogInfo())



//check
let mamad = Object()
console.log(mamad)

//second section
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const Name = Object.keys(users)
{
    let count = 0;
    let pers = 0;
    for (let i = 0; i < Name.length; i++) {
        if (users[Name[i]].skills.length > count) {
            count = users[Name[i]].skills.length;
            pers = i;
        }
    }
    console.log(`${Name[pers]} with ${users[Name[pers]].skills.length} skills has the most skills.`)
}

//2nd question
let loggedInCount = 0;
let per50OrMore = 0;
for (let i = 0; i < Name.length; i++) {
    if (users[Name[i]].isLoggedIn == true)
        loggedInCount++;
    if (users[Name[i]].points >= 50)
        per50OrMore++;
}
console.log(`${loggedInCount} are logged in. \n${per50OrMore} people have 50 or more points.`)

//3rd question
let Mern = []
for (let i = 0; i < Name.length; i++) {
    if (users[Name[i]].skills.includes('MongoDB')
        && users[Name[i]].skills.includes('Express')
        && users[Name[i]].skills.includes('Node')
        && users[Name[i]].skills.includes('React')
    )
        Mern.push([Name[i], i]);
}
console.log(Mern)

//7th question
console.log(users)
console.log(countries.length)

countries.print = function (country) {
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name == country)
            console.log(`Name: ${countries[i].name}\nPopulation: ${countries[i].population}\nLanguages: ${countries[i].languages}\nCapital: ${countries[i].capital}`)
    }
}
countries.print('Afghanistan')

//part 3 
const personAccount = {
    firstName: 'Hossein',
    lastName: 'Raz',
    incomses: {
        familyMoney: 2000,
        job: 3000,
        others: 500
    },
    expenses: {
        bill: 1000,
        school: 4000,
        food: 3000,
        others: 2000
    },
    totalInCome: function () {
        let keys = Object.keys(this.incomses);
        let total = 0;
        for (let i = 0; i < keys.length; i++)
            total += this.incomses[keys[i]];
        return total;
    },
    totalExpenses: function () {
        let keys = Object.keys(this.expenses);
        let total = 0;
        for (let i = 0; i < keys.length; i++)
            total += this.expenses[keys[i]];
        return total;
    },
    accountInfo: function () {
        let name = `Name: ${this.firstName}\nFamily name: ${this.lastName}\n`
        let money = `Incomes: ${this.totalInCome()}\nExpenses: ${this.totalExpenses()}\nBalance: ${this.accountBalance()}`
        console.log(name + money)
    },
    addIncome: function (key, value) {
        this.incomses[key] = value;
    },
    addExpense: function (key, value) {
        this.expenses[key] = value;
    },
    accountBalance: function () {
        let balance = this.totalInCome() - this.totalExpenses();
        return balance;
    }
}
console.log(personAccount.totalInCome())
console.log(personAccount.totalExpenses())
personAccount.accountInfo();
personAccount.addIncome("Mother", 2121)
personAccount.addExpense("Sister", 2121)
console.log(personAccount.incomses)
console.log(personAccount.expenses)

//2nd question
const costumers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
costumers.signUp = function (id, b, c, d, e, f) {
    let count = costumers.length
    let flag = 0;
    for (let i = 0; i < count; i++)
        if (costumers[i].username == b) {
            console.log('User already exist');
            flag++;
            break;
        }
    if (flag == 0) {
        costumers[count] = {}
        costumers[count]._id = id;
        costumers[count].username = b;
        costumers[count].email = c;
        costumers[count].password = d;
        costumers[count].creatcreatedAt = e;
        costumers[count].isLoggedIn = f;
    }
}
console.log(costumers)
console.log(costumers.length)
costumers.signUp('ghderc', 'Thomas', 'sdfsdf', 's11111', 'sfasdfasdf', true)
costumers.signUp('dsadsd', 'Mamad', 'sdfsdf', 's11111', 'sfasdfasdf', true)
costumers.signUp('dsadsd', 'Mamad', 'sdfsdf', 's11111', 'sfasdfasdf', true)
console.log(costumers)
console.log(costumers.length)

//2nd question part b
costumers.signIn = function (username, password) {
    for (let i = 0; i < costumers.length; i++) {
        if (costumers[i].username == username && costumers[i].password == password) {
            console.log('You have logged in');
            return true;
        }
    }
}
console.log(costumers.signIn('Mamad', 's11111'))

//3rd Question
// A part
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
products.rateProduct = function (name, user, rating) {
    let index = products.findIndex(x => x.name == name);
    if (products[index].ratings.map(x => x.userId).includes(user)) {
        let i = products[index].ratings.findIndex(x => x.userId == user);
        products[index].ratings[i].rate = rating;
    }
    else
        products[index].ratings.push({ userId: user, rate: rating });
}
products.rateProduct('TV', 'qwerty', 3)
products.rateProduct('TV', 'asdfgh', 4)
products.rateProduct('TV', 'zxcvbn', 5)
products.rateProduct('Laptop', 'zxcvbn', 5)
products.rateProduct('TV', 'zxcvbn', 4)

console.log(products)

products.averageRating = function (name) {
    let index = products.findIndex(x => x.name == name);
    if (products[index].ratings != []) {
        let total = products[index].ratings.reduce((acc, cur) => {
            return acc + cur.rate
        }, 0)
        return total / products[index].ratings.length
    }
}
console.log(products.averageRating('TV'))