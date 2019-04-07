//adding all the universial variables

var trueLetters, falseLetters, guesses, wins, gamePlaying, hiddenWord, currentWord, guessesRemaining;


//"Press any key to get started" changes the state variable and resets the var values
function init() {
    trueLetters = [0];
    falseLetters = [0];
    guesses = [];
    guessesRemaining = 15;
    wins = 0;
    hiddenWord = [];

    gamePlaying = true;
}

var words = [
    'space oddity', //david bowie
    'ziggy stardust', //david bowie
    'life on mars', //david bowie
    'starman', //david bowie
    'moonage daydream', // david bowie
    'rocket man', //elton john
    'intergalactic', //beastie boys
    'walkin on the sun', // smash mouth
    'girl from mars', //ash
    'we are all made of stars', //moby
    'space song', //beach house
    'spaceman', //the killers
    'supersonic rocket ship', //the kinks
    'champange supernova', //oasis
    'man on the moon', //REM
    'bad moon rising', //CCR
    'dancing in the moonlight', //king harvest
    'sisters of the moon', //fleetwood mac
    'harvest moon', //neil young
    'major tom', //peter schilling
    'tahitian moon', //porno for pyros
    'across the universe', //the beatles
    'parallel universe', //red hot chili peppers
    'space jam' //quad city DJ's
]

init();


function dashGenerator(song) {
    for (i = 0; i < song.length; i++) {
        if (song.charAt(i) == " ") {
            hiddenWord.push(" ");
        } else {
            hiddenWord.push("_");
        }
    }
    var dashDisplay = hiddenWord.join('');
    document.getElementById('hiddenWord').textContent = dashDisplay;
    
}

dashGenerator(words[Math.floor(Math.random() * words.length)]);

document.onkeypress = function(event) {
    guesses.push(event.key);

    for (i = 0; i < guesses.length; i++) {
        if (guesses.length <= 1) {
            document.getElementById('guesses').textContent = guesses;
            document.getElementById('guessesRemaining').textContent = guessesRemaining;
            guessesRemaining--;
        } else if (event.key !== guesses[i]) {
            document.getElementById('guesses').textContent = guesses;
            document.getElementById('guessesRemaining').textContent = guessesRemaining;
            guessesRemaining--;
        } else {
            alert("something else happens")

            //pop the last double letter off the array
            //make it so it only checks the event.key to the array items if there are 2 or more items in the array
            //alert if they already picked that letter
            
        }
    }

    console.log(guesses);
}


//TODO LIST
//Fix event listener so that it records key strokes properly
//check if event.key matches any hidden-word elements
//ask tutor if there is a way to remove commas from a printed array. If I can do that, I may not have to create the var dashDisplay and join the array on line 56
//if I can't remove commas, figure out how to replace letters, probably using .charAt()
//hide element of dash-arary or change that array item to the event.key
//add win conditions and update score
//add win banner
//create next-word function that resets guesses and calls the dashGenerator function
//add functionality to the reset game button that calls the init();
//check that all scores etc are reset in the init();
