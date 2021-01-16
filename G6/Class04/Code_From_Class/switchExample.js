let input = prompt("Please enter a number between 1 and 7");
let day = parseInt(input);

switch (day) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
    case 7:
        alert("Its a weekend");
        break;
    default:
        alert("You didnt insert number between 1 and 7");
        break;
    
}