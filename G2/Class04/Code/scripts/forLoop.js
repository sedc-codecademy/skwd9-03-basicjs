let days = ["Mon","Tue","Wed","Thu"];
for(let i=0; i < days.length; i++){
    //if(days[i]==="Wed")
   // continue; // go to increment/decrement (skip Wed)
    
    console.log(days[i]);
    //if(days[i]==="Tue")
    //break;
}

console.log("=== For of =======");
for(let day of days){ //iterates the members of the array
    console.log(day);
}

console.log("=== For in =======");
for(let dayIndex in days){ //iterates the indicies of the members of the array
    console.log(dayIndex);
}