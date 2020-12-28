// let wouldLikeDrink = prompt('Hi, would you like a drink?');

// if (wouldLikeDrink === 'yes') {
//     let age = prompt('Please enter your age');

//     let parsedAge = parseInt(age);

//     if (parsedAge >= 18) {
        
//         alert(`Hey, since you ${age} years old, you can have have a drink.`);

//         let drink = prompt('What type of drink would you like to have?');

//         if (drink === 'beer' || drink === 'wine' || drink === 'whiskey') {
//             alert(`OK, we have that, here is your ${drink}.`)
//         } else {
//             alert(`Sorry we don't have ${drink}`)
//         }

//         // if (drink === 'beer') {
//         //     alert('OK, we have that, here is your beer.')
//         // } else if (drink === 'wine') {
//         //     alert('OK, we have that, here is your wine.')
//         // } else if (drink === 'whiskey') {
//         //     alert('OK, we have that, here is your whiskey.')
//         // } else {
//         //     alert(`Sorry we don't have ${drink}`)
//         // }

//     } else {
//         alert('Sorry, we only serve adults.')
//     }

// } else {
//     alert('OK, take care.');
// }

// [SWITCH STATEMENT]

let animal = prompt('Hi, welcome to our animal shelter. What type of animal would you like to adopt?');

switch(animal) {
    case 'dog':
        alert('Amazing, here is your dog');
        break;
    case 'cat':
        alert('Amazing, here is your cat');
        break;
    default:
        alert(`Sorry, we don't have a ${animal}`);
}