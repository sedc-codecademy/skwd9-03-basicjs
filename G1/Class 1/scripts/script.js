let guesses = [];
let maxGuesses = 6;
let currentGuesses = 0;
let answer = '';
let programmingLanguages = ['Java','Javascript','C#','SQL','Python','CSS','HTML','C++'];
let wordStatus = null;

function generateKeyboard(){
    let keyboard = document.getElementById('keyboard');

    let letters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    var clearLetters = letters.split(',');
    for(let letter of clearLetters){
        let button = `<button class="btn btn-md btn-success mx-3 my-3"
                              id="${letter}" 
                              onclick="handleGuess(${letter})">
                              ${letter}
                      </button>`;
        keyboard.innerHTML += button;
    }
}

function chooseWordToGuess(){
    answer = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)]
}

generateKeyboard();

document.getElementById('totalGuesses').innerHTML = maxGuesses;

function createWord(){
    wordStatus = answer.split('');
    for(let i = 0; i < wordStatus.length; i++){
        if(guesses.indexOf(wordStatus[i]) >= 0){
            document.getElementById('guessingSpot').innerHTML += wordStatus[i];
        }
        else{
            document.getElementById('guessingSpot').innerHTML += '&nbsp &nbsp _ &nbsp &nbsp';
        }
    }
}
chooseWordToGuess();

function handleGuess(letter){
    if(guesses.indexOf(letter) === -1){
        guesses.push(letter);
    }else{
        return undefined;
    }
    letter.setAttribute('disabled',true);

    if(answer.indexOf(letter) >= 0){
        createWord();
    }
    else{
        currentGuesses++;
        document.getElementById('mistakes').innerHTML = currentGuesses;
    }

    if(currentGuesses == 6){
        alert('You lost');
        resizeTo()
    }
}
