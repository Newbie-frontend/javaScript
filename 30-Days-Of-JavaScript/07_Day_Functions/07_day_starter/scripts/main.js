console.log(countries)
// alert('Open the console and check if the countries has been loaded')
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

//Practices
//1. question
function fullName() {
    let firstName = 'Hossein'
    let lastName = 'Raz'
    let fullname = firstName + ' ' + lastName
    return fullname;
}
console.log(fullName())

//2. question
function fullName2(x, y) {
    return x + ' ' + y
}
console.log(fullName2('Hossein', 'Razegh'))

//3. question
function addNumbers(first, second) {
    return first + second
}
console.log(addNumbers(10, 20))

//4.question
function areaOfTriangle(len, wid) {
    let area = len * wid / 2;
    return area
}
console.log(areaOfTriangle(10, 20))

//5.question
function perimeterOfRectangle(len, wid) {
    let perimeter = 2 * (len + wid);
    return perimeter
}
console.log(perimeterOfRectangle(10, 20))

//6.question
function volumeOfRectPrism(len, wid, height) {
    let volume = len * wid * height;
    return volume
}
console.log(volumeOfRectPrism(10, 10, 10))

//7.question
function areaOfCircle(radius) {
    let area = Math.PI * radius ** 2;
    return area
}
console.log(areaOfCircle(10).toFixed(2))

//8.question
function circumOfCircle(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference
}
console.log(circumOfCircle(10).toFixed(2))

//9.question
function density(mass, volume) {
    let density = mass / volume;
    return density
}
console.log(density(1000, 1000))

//10.question
function speed(distance, time) {
    let speed = distance / time;
    return speed
}
console.log(speed(10, 2))

//11.question
function weight(mass, gravity = 9.81) {
    let weight = mass * gravity;
    return weight
}
console.log(weight(10).toFixed(2))


//12.question
function convertCelsiusToFahrenheit(oC) {
    let oF = (oC * 9 / 5) + 32;
    return oF
}
console.log(convertCelsiusToFahrenheit(10).toFixed(2))

//14.question
function checkSeason(month) {
    switch (month) {
        case 'July':
        case 'August':
        case 'September':
            return 'Summer'
        case 'October':
        case 'November':
        case 'Desember':
            return 'Autumn';
        case 'January':
        case 'February':
        case 'March':
            return 'Winter'
        case 'April':
        case 'May':
        case 'June':
            return 'Spring';
        default:
            return 'Not a month name'
    }
}
console.log(checkSeason('June'))

//15. question
function findMax(a, b, c) {
    return a > b && a > c ? a : b > c ? b : c;
}
console.log(findMax(10, 5, -50))


//Part 2 
//3rd question
const printArray = (arr) => {
    for (let x of arr)
        console.log(x);
}
printArray(countries);

//4th question
function showDateTime() {
    let time = new Date();
    let min = time.getMinutes();
    let hour = time.getHours();
    let day = time.getDate();
    let month = time.getUTCMonth() + 1;
    let year = time.getFullYear();
    console.log(`${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year} ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`)
}
showDateTime();
// let time = new Date()
console.log(Date())

//5th question wanted to change by reference
let z = [10, 20]
function swapValues(a) {
    let temp = a[1];
    a[1] = a[0];
    a[0] = temp;
}
swapValues(z)
console.log(z)

//6th question
function reverseArray(arr) {
    var temp = []
    for (let i = arr.length - 1; i >= 0; i--)
        temp.push(arr[i]) //unshift was another option
    return temp;
}
let a = [1, 2, 3, 4, 5]
console.log(reverseArray(a))
console.log(reverseArray(['A', 'B', 'C']))

//7th question
const capitalizeArray = (arr) => {
    let capitalizedarray = [];
    for (let x of arr)
        capitalizedarray.push(x.toUpperCase());
    return capitalizedarray;
}
let test = ['hossein', 'Ali', 'maMad', 'ismail']
console.log(test)
console.log(capitalizeArray(test))

//8th question
let exist = ['Hossein', 'Mamad', 'Ali']
function addItem(x) {
    exist.push(x)
    return exist;
}
console.log(addItem('Hossein'))
console.log(addItem('Mamad'))

//9th question
function removeItem(num) {
    exist.splice(num, 1)
    return exist;
}
console.log(removeItem(2))
console.log(removeItem(0))
console.log(removeItem(0))

//10th question
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++)
        sum += i;
    return sum;
}
console.log(sumOfNumbers(10))

//13th question
function evensAndOdds(num) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i <= num; i++) {
        i % 2 ? oddCount++ : evenCount++;
    }
    console.log(`The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.`)
}
evensAndOdds(100);

//14th question
function sum() {
    let total = 0;
    for (let x of arguments)
        total += x;
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

//15th qusetion
function randomUserIp() {
    let ip = [];
    for (i = 0; i < 4; i++) {
        ip[i] = Math.floor(Math.random() * 256)
    }
    return ip.join('.')
}
console.log(randomUserIp())

//16th question
function randomMacAddress() {
    let mac = []
    let hex = '1234567890abcdf'
    for (i = 0; i < 6; i++) {
        let bit = [];
        for (let j = 0; j < 2; j++)
            bit.push(hex[Math.floor(Math.random() * 16)])
        mac.push(bit.join(''))
        bit = '';
    }
    console.log(mac.join(':'))
}
randomMacAddress()

//17th question
function randomHexaNumberGenerator() {
    let randomHex = ['#'];
    let hex = '1234567890abcdf'
    for (let i = 0; i < 6; i++) {
        randomHex.push(hex[Math.floor(Math.random() * 16)])
    }
    return randomHex.join('')
}
console.log(randomHexaNumberGenerator())

//18th question
function userIdGenerator() {
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let userId = []
    for (let i = 0; i < 7; i++)
        userId.push(char[Math.floor(Math.random() * 62)])
    return userId.join('')
}
console.log(userIdGenerator());

//part 3
//1st qustion
function userIdGeneratedByUser() {
    let charNum = prompt('Number of characters: ');
    let idNum = prompt('How many IDs ? : ');
    let IDs = [];
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for (let i = 0; i < idNum; i++) {
        let ID = [];
        for (let j = 0; j < charNum; j++)
            ID.push(char[Math.floor(Math.random() * 62)]);
        IDs.push(ID.join(''));
        ID = [];
    }
    return IDs;
}
// console.log(userIdGeneratedByUser());

//8th question
function shuffleArray(arr) {
    let array = [...arr];
    let flag = array.length;
    let shuffled = [];
    for(let i = 0; i < arr.length; i++){
        let random = Math.floor(Math.random() * flag)
        shuffled.push(array[random]);
        array.splice(random, 1)
        flag--;
    }
    return shuffled;
}
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(shuffleArray(h))

//19th question
function sevenRandomNumbers() {
    let result = []
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let j = 10;
    for (let i = 0; i < 7; i++) {
        let random = Math.floor(Math.random() * j);
        result.push(nums[random]);
        nums.splice(random, 1);
        j--;
    }
    return result;
}
console.log(sevenRandomNumbers())
//check
let m = h.map((x) => x)
console.log(m)
