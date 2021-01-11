let groceries = ["Milk", "Bread", "Cheese"];

function printAll(inputGroceries){
   console.log("Our list consists of:");
   for(let item of inputGroceries)
   console.log(item);
}

function addItem(item){
    if(typeof(item)!== "string"){
        console.log("Wrong type");
    }
    else{
        groceries.push(item);
    }
}

function checkItem(item){
    let itemFound = false;
    for(let i of groceries){
        if(i.toLowerCase()===item.toLowerCase()){
            itemFound = true;
            break;
        }
    }
    if(itemFound){
        console.log(`${item} exists in the array`);
    }
    else{
        console.log(`${item} doesn't exist in the array`);
    }
}

function deleteItem(item){
    let index = groceries.indexOf(item); // fins the index of the given item in the array. If not found, returns -1.
    console.log(`Index: ${index}`);
    if(index < 0){
        console.log(`${item} doesn't exist in the array`);
    }
    else{
        groceries.splice(index, 1);
    }
}

printAll(groceries);
addItem(2);
addItem("Salad");
printAll(groceries);
checkItem("Bread");
checkItem("Juice");
deleteItem("Cheese");
deleteItem("Chocolate");
printAll(groceries);