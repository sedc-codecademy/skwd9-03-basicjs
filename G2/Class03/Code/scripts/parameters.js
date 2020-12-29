function example(a, b, c){
    console.log("A: "+a);
    console.log("B: "+b);
    console.log("C: "+c);
}

example(); //undefined undefined undefined
example(1); //1 undefined undefined
example(1,2,3,4); //1,2,3    4 - ignored


function defaultValues(a, b=2, c="Hello"){
    console.log("A: "+a);
    console.log("B: "+b);
    console.log("C: "+c);
}
defaultValues(6); //6 2 Hello
defaultValues(6, "Test"); //6 Test Hello

let academy = "CodeAcademy";
console.log(academy.substring(0,4)); //Code
console.log(academy.substring(4, academy.length)); //Academy -> (4,11)