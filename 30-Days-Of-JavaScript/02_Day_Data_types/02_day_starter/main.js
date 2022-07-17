// this is your main.js script
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
let CHALLENGE = challenge.toUpperCase()
let challengeLow = challenge.toLowerCase()
console.log(CHALLENGE)
console.log(challengeLow)
let chalFirstWord = challenge.substring(3, 7)
console.log(chalFirstWord)
console.log(challenge.slice(3))
console.log(challenge.includes("Script"))
console.log(challenge.split(" "))
console.log(challenge.split())
let array = challenge.split(" ")
console.log(array[2])
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let arrCom = companies.split(', ')
console.log(arrCom)
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(4))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
console.log("This is the break point.")
let sentence = "You cannot end a sentence with because because because is a conjuction"
console.log(sentence.indexOf("because"))
console.log(sentence.lastIndexOf("because"))
console.log(sentence.search("because"))
let newChallenge = "    30 Days Of JavaScript                     "
console.log(newChallenge)
newChallenge = newChallenge.trim(" ")
console.log(newChallenge)
console.log(challenge.startsWith("30 D"))
console.log(challenge.endsWith("ript"))
console.log(challenge.repeat(2))
let first = "30 Days Of"
let second = "JavaScript"
console.log(first.concat(second), "Ajab baba Ajab")
console.log(challenge.match(/[a]/g))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"")
if (typeof '10' == typeof 10)
    console.log("Bale")
else if (typeof parseInt('10') == typeof 10)
    console.log("In Shod Hala")
parseFloat("9.8") == 10 ? console.log('True') : console.log('False')
let TenTen = false
TenTen = Math.ceil(parseFloat("9.8")) == 10 ? true : false
console.log(TenTen)

//
///
///
////
////
let x = 'Python', y = 'Jargon'
if (x.includes("on") && y.includes("on"))
    console.log("On hast dada")
//
let newSentence = 'I hope this course is not full of jargon.'
newSentence.includes("jargon") ? console.log("Jargon hastesh") : console.log("Jargon Margon Yox")
console.log(newSentence.includes('jargon') ? "Inam kar mikone" : "Ajab baba Ajab")
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))
let b = 'JavaScript'
console.log(b[Math.floor(Math.random() * b.length)])
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n")
console.log(sentence.substr(31, 23))
let love = 'Love is the best thing in the world. Some found their love but still looking for their love.'
let loveCount = love.match(/love/gi)
console.log(loveCount.length + " love")
let because = sentence.match(/because/gi)
console.log(because.length + " because")
let theLastSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let newLast = theLastSentence.match(/\d+/g)

console.log(newLast[0] * 12 + newLast[1] * 1 + newLast[2] * 12)


const Shit = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let editedShit = Shit.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
console.log(editedShit)
let arrOfShit = editedShit.split(' ')
console.log(arrOfShit)

function findWord(arr) {
    // Create Dictionary to store word
    // and it's frequency
    var hs = {};

    // Iterate through array of words
    for (var i = 0; i < arr.length; i++) {
        // If word already exist in Dictionary
        // then increase it's count by 1
        if (hs.hasOwnProperty(arr[i])) {
            hs[arr[i]] = hs[arr[i]] + 1;
        }

        // Otherwise add word to Dictionary
        else {
            hs[arr[i]] = 1;
        }
    }

    // Create set to iterate over Dictionary
    var Key = "";
    var Value = 0;

    for (const [key, value] of Object.entries(hs)) {
        // Check for word having highest frequency
        if (value > Value) {
            Value = value;
            Key = key;
        }
    }

    // Return word having highest frequency
    return Key;
}
console.log(findWord(arrOfShit))


function findTheMostShitty(x) {
    let most;
    let mostCount = 0;
    let count = 0;
    for (let j = 0; j < x.length; j++) {
        for (let i = 0; i < x.length; i++)
            if (x[i] == x[j])
                count++;
        if (count > mostCount) {
            mostCount = count;
            most = x[j];
        }
        count = 0;
    }
    return most;
}
console.log(findTheMostShitty(arrOfShit));
