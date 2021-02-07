$(document).ready(function(){
    const btnPeople = $("#btnPeople");
    const btnShips = $("#btnShips");
    const result = $("#result");
    const loader = $("#loader");
    const btnNext = $("#btnNext");
    const btnPrev = $("#btnPrev");
    
    let nextUrl = "";
    let previousUrl = "";
    let urlPeople = "https://swapi.dev/api/people/?page=1";
    let urlShips = "https://swapi.dev/api/starships/?page=1";
    
    // toggle dispaly of elements (loader, button next, button previous)
    
    let toggleElement = function(toggleCondition, element){
        if (toggleCondition)
            element.css("display","block");
        else
            element.css("display","none");
    }
    // GET data
    function getData(url) {
        //show loader
        toggleElement(true, loader);
        $.ajax({
            url: url,
            success: (data) => {
                console.log("The request succedeed!", data);
                //hide loader
                toggleElement(false, loader);
                if(url.includes("people")){
                    displayPeople(data.results)
                }
                else{
                    displayShips(data.results);
                }
               
                    nextUrl = data.next;
                    previousUrl = data.previous;
                    
                //depending whether next or previous have values, show/hide
                //previous/next buttons
                toggleElement(nextUrl, btnNext);
                toggleElement(previousUrl, btnPrev);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
    
    function displayPeople(people){
        if (people != null) {
            result.html("");
            result.append(`
            <div class="row different">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth year</div>
                <div class="col-md-1">Films</div>
            </div>`);
            for (let person of people) {
                result.append(`
            <div class="row">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>`);
            }
        } else {
            result.html('<h2 id="notification">Please Wait until data is loaded!</h2>');
        }
    }
    
    btnPeople.click(function(){
        getData(urlPeople);
    });
    
    function displayShips(ships){
        if (ships != null) {
            result.html("");
            result.append( `
            <div class="row different">
                <div class="col-md-2">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">People Capacity</div>
                <div class="col-md-2">Class</div>
            </div>`);
            for (let ship of ships) {
                result.append(`
            <div class="row">
                <div class="col-md-2">${ship.name}</div>
                <div class="col-md-2">${ship.model}</div>
                <div class="col-md-2">${ship.manufacturer}</div>
                <div class="col-md-2">${ship.cost_in_credits}</div>
                <div class="col-md-2">${ship.passengers}</div>
                <div class="col-md-2">${ship.starship_class}</div>
            </div>`);
            }
        } else {
            result.html('<h2 id="notification">Please Wait until data is loaded!</h2>');
        }
    }
    
    btnShips.click(function(){
        getData(urlShips);
    });
    
    // Next and Previous events
    btnNext.click(function(){
       getData(nextUrl);
    });
    
    btnPrev.click(function(){
       getData(previousUrl);
    });
});