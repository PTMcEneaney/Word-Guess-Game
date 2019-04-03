//adding all the universial variables

var trueLetters, falseLetters, guesses, wins, gamePlaying, hiddenWord, currentWord;


//"Press any key to get started" changes the state variable and resets the var values
function init() {
    trueLetters = [0];
    falseLetters = [0];
    guesses = 0;
    wins = 0;
    hiddenWord = [];
    currentWord = [];

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

function generateDashes(word) {
    currentWord.push(word);
    var hiddenWord = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            hiddenWord.push('&nbsp;');
        } else {
            hiddenWord.push('_');
        }
    }
    return hiddenWord;
}

console.log(generateDashes('david bowie'));
console.log(generateDashes('elton john'))
console.log(currentWord);






//listener event for key click
// document.querySelector('.btn-roll').addEventListener('keydown', function() { 

// }

// window.addEventListener('keypress', function (e) {
//     if (e.keyCode === 65 || e.keyCode === 66|| e.keyCode === 67 || e.keyCode === 68 || e.keyCode === 69 || e.keyCode === 70 || e.keyCode === 71 || e.keyCode === 72 || e.keyCode === 73 || e.keyCode === || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66 || e.keyCode = 66) {
//         chars.push(e.key);
//     }
// }, false);
