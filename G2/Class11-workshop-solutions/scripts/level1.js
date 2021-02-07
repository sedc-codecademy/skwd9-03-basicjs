function extendArray(inputArray){
    if(!validateArray(inputArray)){
        console.log("Not all members are numbers");
        return;
    }
    let extendedArray = [];
    for(let i=0; i<inputArray.length-1; i++){
        if(inputArray[i]%2 === 0 && inputArray[i+1]%2 === 0){
            extendedArray.push(inputArray[i]);
                extendedArray.push("-");
        }
        else{
            extendedArray.push(inputArray[i]);
        }
        if(i==inputArray.length-2){
            extendedArray.push(inputArray[i+1]);
        }
    }
    return extendedArray;
}

function validateArray(inputArray){
    for(let item of inputArray){
        if(isNaN(item)){
            return false;
        }
    }
    return true;
}

console.log(extendArray([0,2,5,4,6,8]));
console.log(extendArray([1,3,5,7]));
console.log(extendArray([2,8,6,3]));
console.log(extendArray([2,8]));
console.log(extendArray(["test",8, true])); //the function will return undefined and log error