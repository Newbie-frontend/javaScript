// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


//Exercise : level 1
//Create a closure which has one inner function
//The outer function should return the value of the inner function
function outer() {
    let arr = []
    var add = function (x = 5) {
        arr.push(x)
        return arr
    }
    var remove = function () {
        arr.pop()
        return arr
    }
    return {
        add: add(),
        remove: remove()
    }
}
const myClosure = outer()
myClosure.add(100)
console.log(myClosure.add(3))
// console.log(myClosure.add(10))
// console.log(myClosure.add(5))
// console.log(myClosure.add(3))
// console.log(myClosure.remove())
// console.log(myClosure.remove())


//Exercise : level 2
//Create a closure which has three inner functions
function outer() {
    let arr = []
    var add = function (x) {
        arr.push(x)
        return arr
    }
    var remove = function () {
        arr.pop()
        return arr
    }
    var print = function () {
        console.log(arr)
    }
    return {
        add: add,
        remove: remove,
        print: print
    }
}
const Closure = outer()
Closure.add(10)
Closure.add(5)
Closure.add(3)
Closure.add(1)
Closure.add(1)
Closure.add(1)
Closure.add(1)
Closure.print()
Closure.remove()
Closure.print()
Closure.remove()
Closure.print()
Closure.remove()
Closure.print()

//Exercise : level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


// eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


