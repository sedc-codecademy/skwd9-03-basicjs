let days = ["Mon","Tue","Wed","Thu"]; //declaration and initialization
console.log(`Full initialized array: ${days}`);
console.log(`Type of days array ${typeof(days)}`);

let emptyArray = [];
console.log(`Empty array: ${emptyArray}`);
console.log(`Type of empty array: ${typeof(emptyArray)}`);

let mixedArray = [2, 3, true, "Monday"];
console.log(`Mixed array: ${mixedArray}`);
console.log(`Type of mixed array: ${typeof(mixedArray)}`);

let secondMember = mixedArray[1];
console.log(`Second member of the mixed array: ${secondMember}`);

console.log("====Changing value of the second member of the mixed array====");
mixedArray[1] = "SEDC";
console.log(`Second member of the mixed array: ${mixedArray[1]}`);

console.log(`Length of days array ${days.length}`);
console.log(`Last member of days array is: ${days[days.length - 1]}`);

mixedArray[mixedArray.length] = false;
console.log(`Mixed array after adding a new member at the end: ${mixedArray}`);

mixedArray.push("New member"); //adding to the end of the array
console.log(`Mixed array after pushing one item: ${mixedArray}`);

mixedArray.push(4, true, "Another member");//adding to the end of the array
console.log(`Mixed array after pushing multiple items: ${mixedArray}`);

days.unshift("Days"); //adding an item at the beginning
console.log(`Days array after using unshift: ${days}`);

console.log("======Deleting itmes from array========");
let lastMemberOfDaysArray = days.pop();
console.log(`Last member of days array: ${lastMemberOfDaysArray}`);
console.log(`Days array after using pop: ${days}`);

let firstMemberOfDaysArray = days.shift();
console.log(`First member of days array: ${firstMemberOfDaysArray}`);
console.log(`Days array after using shift: ${days}`);

let secondMemberOfDaysArray = days.splice(1,1);
console.log(`Second member of days array: ${secondMemberOfDaysArray}`);
console.log(`Days array after using splice(1,1): ${days}`);


