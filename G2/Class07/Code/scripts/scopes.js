console.log("======Global scope=======");
function windowSize(){
    let width = this.innerWidth; 
    let height = this.innerHeight;
    return `{Width: ${width}, Height; ${height}}`;
}

console.log(windowSize()); //window.windowSize() -> window is predefined
//this -> window
//innerWidth and innerHeight exist in window object


console.log("=======Object scope=======");

let shape = {
    width:40,
    height:60,
    type:"rectangle",
    printArea: function(){
        debugger
        let area = this.width * this.height;
        console.log(`The area of the rectangle is: ${area}`);
    }
}

shape.printArea(); // this -> shape

console.log("=====COMPARISON=======");
let a = 5;// global scope
var width = 100; //global scope, belongs to window object
let square = {
    width: 30
}

function printWidth(){
    console.log(`The width is: ${this.width}`);
}
printWidth(); // this -> window

square.getWidth = printWidth;
square.getWidth(); //this -> square