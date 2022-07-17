// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

// let answer = prompt("Enter a month name: ");
// let ansLow = answer.toLowerCase();
// switch (ansLow) {
//     case 'september':
//     case 'november':
//     case 'october':
//         console.log("The season is Autumn.")
//         break;
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log("The season is Winter.")
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log("The season is Spring.")
//         break;
//     case 'june':
//     case 'july':
//     case 'august':
//         console.log("The season is Summer.")
//         break;
//     default:
//         console.log("Wrong name!")
//         break;
// }
let Month = prompt("Enter a month to give you the days: ")
Month = Month.toLowerCase();
switch (Month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${Month.charAt(0).toUpperCase() + Month.slice(1)} is 31 days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${Month.charAt(0).toUpperCase() + Month.slice(1)} is 30 days.`);
        break;
    case 'february':
        console.log(`${Month.charAt(0).toUpperCase() + Month.slice(1)} is 28 or 29(leap year) days.`);
        break;
    default:
        console.log("Wrong name!")
        break;
}