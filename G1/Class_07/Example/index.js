let printUnorderedList = document.getElementsByTagName("ul")[0];
let result = document.getElementById("result");
// Sum all numbers from an array

/* 
Ni treba niza 
Da proverime dali ima vrednosti vo taa niza, ako da ke prodolzime so kod ako ne return error
Ima vrednost
Da iterirame niz nizata
Da gi sobereme site vrednosti
Da go vratime rezultatot
*/
// ALWAYS LOOK BACK
let numbersArray = [1, 2, 5, 10, 6, 2];
let allSum = 0;

function sumNumbers(array) {
    if (array.length === 0) {
        console.log("You provided empty array!")
    } else {
        console.log("You provided fully array!");
        for (let i = 0; i < array.length; i++) {
            printUnorderedList.innerHTML += `
                <li>Number from our array: ${array[i]}</li>
            `
            // console.log(array[i]);
            allSum = allSum + array[i]
            // allsum += array[i]
        }
        result.innerText = allSum
        return allSum
    }
}
result.innerText = `${allSum}`
sumNumbers(numbersArray)
