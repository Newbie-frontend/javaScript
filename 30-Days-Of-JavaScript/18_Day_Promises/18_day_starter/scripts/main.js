// // console.log(countries)
// // alert('Open the console and check if the countries has been loaded')


// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'MongoDB']
//         if (skills) {
//             resolve(skills)
//         } else {
//             reject('Error')
//         }
//     }, 2000)
// })
// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         console.log(data)
//     })
//     .catch(error => console.error(error)) // handling error if something wrong happens

// const squid = async (n) => {
//     return n * n
// }

// const fetchData = async () => {
//     try {
//         const response = await fetch(url)
//         const countries = await response.json()
//         console.log(countries)
//     } catch (err) {
//         console.error(err)
//     }
// }
// console.log('===== async and await')
// fetchData()



//Exercises

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Level 1 2 3
let Keshvarha
const tenLargestCountries = (arr) => {
    // console.log(editedArr)
    let sorted = arr.sort((a, b) => {
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    })
    console.log(sorted)
    // console.log(sorted.slice(0, 10).map(x => x.name).join('\n'))
}
const getCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        Keshvarha = await response.json()
        // console.log(Keshvarha)
        // Keshvarha = Keshvarha.map(x => {
        //     x.area = x.area / 10
        //     return x
        // })
    } catch (err) {
        console.error(err)
    }
}
const edame = async () => {
    try {
        await getCountries()
        // await Keshvarha.forEach(country => {
        //     let print = `Name: ${country.name}`
        //     console.log(print)
        // })
        tenLargestCountries(Keshvarha)
    }
    catch (err) {
        console.error(err)
    }
}
edame()

// setTimeout(() => {
//     Keshvarha.forEach(country => {
//         let print = `Name: ${country.name}`
//         console.log(print)
//     })
// }, 2000)
let cats = []
const getCats = async () => {
    try {
        const response = await fetch(catsAPI)
        cats = await response.json()
        let len = cats.length
        const weights = cats.map(x => x.weight.metric.match(/\d+/g))
        let total = weights.reduce((acc, cur) => {
            return acc + Number(cur[0]) + Number(cur[1])
        }, 0)
        console.log('Average weight  of all cats: ', (total / (len * 2)).toFixed(2))
        console.log(cats.map(x => x.name).join('\n'))
        
    } catch (err) {
        console.error(err)
    }
}
getCats()



