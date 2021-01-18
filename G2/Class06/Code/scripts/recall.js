let firstNames = ["Ana", "Petko", "Marko", "Kate"];
let lastNames = ["Stojanovska", "Petkovski", "Markovski", "Mitrevska"];
let birthPlaces = ["Skopje", "Bitola", "Ohrid", "Tetovo"];

console.log(firstNames[5]);

function getData(fNames, lNames, bPlaces){
    let data = [];
    console.log(`fNames.length : ${fNames.length}`);

    for(let i=0; i<fNames.length; i++){ //we use fNames.length just to get the limit for the counter (i)
        data.push(`${fNames[i]} ${lNames[i]} - ${bPlaces[i]}`); // i as value for index (counter) can be used with any array
    }

    return data; // when we use return,  actually we get out of the function
}

let fullData = getData(firstNames, lastNames, birthPlaces); //the value of data (which we return) is assigned to fullData
console.log(`Full data: ${fullData}`);

/* let matrica = [[1,2], [3,4]];
for(let row of matrica){
    for(let col of row){

        console.log(col);
    }
} */