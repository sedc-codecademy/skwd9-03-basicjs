function example(){
    //FUNCTION SCOPE
    var firstName = "Ana";
    let lastName = "Anevska";
    //code...

    {
        //BLOCK SCOPE
        var sedc = "SEDC";
        let greeting = "Hello";
        console.log(`Sedc: ${sedc}`);  //sedc
        console.log(`Greeting: ${greeting}`);  //Hello
    }
    
    console.log(`Sedc: ${sedc}`);  //sedc
    console.log(`Greeting: ${greeting}`);  //error

    {
        //BLOCK SCOPE
        let greeting = "World";
        console.log(`Greeting 2: ${greeting}`); //World
    }

    console.log(`Greeting 2 : ${greeting}`); //error

    /*{
        //BLOCK SCOPE
        var greeting = "Hi";
        console.log(`Greeting 3: ${greeting}`); //Hi
    }
    console.log(`Greeting 3: ${greeting}`); //Hi*/

    console.log(`First name ${firstName}`);
    console.log(`Last name ${lastName}`);
    //FUNCTION SCOPE
}

example();