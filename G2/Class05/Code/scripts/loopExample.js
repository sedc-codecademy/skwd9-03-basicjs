let numbers = [2,3,56,4,7]; //length=5;

function printAll(input){
    console.log("Beginning");
    for(let i=0;i<input.length;i++){
        //debugger;
        if(input[i]===4){
            return;
        }
        console.log(input[i]);
        
    }
    
    console.log("End");
    //return -> this is appropriate if we want the whole for loop to execute
    //and also the whole function code
}

printAll(numbers);
