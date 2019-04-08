//adding all the universial variables

var guesses, wins, gamePlaying, hiddenWord, currentWord, guessesRemaining, dashDisplay, randomNumber;



function nextWord() {
    guesses = [];
    guessesRemaining = 15;
    hiddenWord = [];
    gamePlaying = true;
    document.getElementById('hiddenWord').textContent = dashDisplay;
    document.getElementById('guesses').textContent = "Hit a key to start!";
    document.getElementById('guessesRemaining').textContent = guessesRemaining;

    document.getElementById("nextWord").classList.add("disabled");
    randomNumber = Math.floor(Math.random() * words.length);
    dashGenerator(words[randomNumber]);
}

//"Press any key to get started" changes the state variable and resets the var values
function init() {
    nextWord();
    wins = 0;
    document.getElementById('wins').textContent = wins;
}

function dashGenerator(song) {
    for (i = 0; i < song.length; i++) {
        if (song.charAt(i) == " ") {
            hiddenWord.push(" ");
        } else {
            hiddenWord.push("_");
        }
    }
    dashDisplay = hiddenWord.join('');
    document.getElementById('hiddenWord').textContent = dashDisplay;
    console.log(song);
    currentWord = song;
}

var words = [
    'space oddity', //david bowie
    'ziggy stardust', //david bowie
    'life on mars', //david bowie
    'starman', //david bowie
    'moonage daydream', // david bowie
    'rocket man', //elton john
    'intergalactic', //beastie boys
    'walking on the sun', // smash mouth
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
    'across the universe', //the beatles
    'parallel universe', //red hot chili peppers
    'space jam', //quad city DJ's
    'staring at the sun', //tv on the radio
    'black hole sun', //soundgarden
];

var youTube = [
    'https://www.youtube.com/embed/iYYRH4apXDo?rel=0;&autoplay=1', //space oddity
    'https://www.youtube.com/embed/XXq5VvYAI1Q?rel=0;&autoplay=1', //ziggy stardust
    'https://www.youtube.com/embed/AZKcl4-tcuo?rel=0;&autoplay=1', //life on mars
    'https://www.youtube.com/embed/tRcPA7Fzebw?rel=0;&autoplay=1', //starman
    'https://www.youtube.com/embed/JFDj3shXvco?rel=0;&autoplay=1', //moonage daydream
    'https://www.youtube.com/embed/DtVBCG6ThDk?rel=0;&autoplay=1', //rocketman
    'https://www.youtube.com/embed/qORYO0atB6g?rel=0;&autoplay=1', //intergalactic
    'https://www.youtube.com/embed/LQj--Kjn0z8?rel=0;&autoplay=1', //walking on the sun
    'https://www.youtube.com/embed/FkSl9GGOFHM?rel=0;&autoplay=1', //girl from mars
    'https://www.youtube.com/embed/x1rFAaAKpVc?rel=0;&autoplay=1', //we are all made of stars
    'https://www.youtube.com/embed/f9X1C7pTu-M?rel=0;&autoplay=1', //space song
    'https://www.youtube.com/embed/Hc16Y9fiCvQ?rel=0;&autoplay=1', //spaceman
    'https://www.youtube.com/embed/thXmHW4-WC4?rel=0;&autoplay=1', //supersonic rocket ship
    'https://www.youtube.com/embed/LR4kY8LGx7M?rel=0;&autoplay=1', //the kinks
    'https://www.youtube.com/embed/LR4kY8LGx7M?rel=0;&autoplay=1', //oasis
    'https://www.youtube.com/embed/dLxpNiF0YKs?rel=0;&autoplay=1', //REM
    'https://www.youtube.com/embed/5BmEGm-mraE?rel=0;&autoplay=1', //CCR
    'https://www.youtube.com/embed/sR47TZdJg64?rel=0;&autoplay=1', //king harvest
    'https://www.youtube.com/embed/t76vsuJHe1Q?rel=0;&autoplay=1', //fleetwood mac
    'https://www.youtube.com/embed/n2MtEsrcTTs?rel=0;&autoplay=1', //neil young
    'https://www.youtube.com/embed/OMDbX1zksgI?rel=0;&autoplay=1', //peter schilllilng
    'https://www.youtube.com/embed/90M60PzmxEE?rel=0;&autoplay=1', //beatles
    'https://www.youtube.com/embed/VIfxDoQDaFE?rel=0;&autoplay=1', //red hot chili peppers
    'https://www.youtube.com/embed/-gUd88gc8WA?rel=0;&autoplay=1', //quad city DJ's
    'https://www.youtube.com/embed/oHrTOQ18yzU?rel=0;&autoplay=1', //tv on the radio
    'https://www.youtube.com/embed/3mbBbFH9fAg?rel=0;&autoplay=1', //soundgarden



];




//MOST OF THE FUNCTIONALITY IS TRIGGERED BY A KEYPRESS
document.onkeypress = function(event) {
    if (gamePlaying) {
        guesses.push(event.key);
        guessesRemaining--;

        //********************** */
        for (i = 0; i < guesses.length; i++) {
            if (guesses.length <= 1) {
                document.getElementById('guesses').textContent = guesses;
                document.getElementById('guessesRemaining').textContent = guessesRemaining;
                //**IF THERE IS ONLY ONE GUESS, IT DOESN'T CHECK FOR DUPE LETTERS */
            } else if (guesses.length >= 2 && event.key !== guesses[i]) {
                document.getElementById('guesses').textContent = guesses;
                document.getElementById('guessesRemaining').textContent = guessesRemaining;
                //** IF THERE ARE 2 OR MORE GUESSES, IT CHECKS EACH INDEX IN THE ARRAY FOR A MATCH TO PREVENT DUPE GUESSES */
            } else if (event.key == guesses[i] && i < guesses.length - 1) {
                alert('You already guessed that!')
                guessesRemaining++;
                guesses.pop();
                document.getElementById('guesses').textContent = guesses;
                return guessesRemaining;     
                //IF THERE IS A DUPE, ADD A GUESS BACK, REMOVE THE LAST ITEM IN THE ARARY, AND ADJUST THE GUESSES DISPLAY
                //(CHECKS EVERY INDEX EXCEPT THE LAST ONE, THIS IS BECASUE THE EVENT.KEY GETS PUSHED TO THE END, SO WE DON'T WANT THE EVENT.KEY TO CHECK AGAINST IT SELF AND GET A FALSE POSITIVE.)           
            }
        }
        //********************** PUSHING K GUESSES TO THE CURRENT WORD BOX */
        for (i = 0; i < hiddenWord.length; i++) {
            if (event.key == currentWord.charAt(i)) {
                hiddenWord[i] = event.key;
                dashDisplay = hiddenWord.join('');
                document.getElementById('hiddenWord').textContent = dashDisplay;
            }
        }
        //********************* WIN CONDITIONS */
        if (currentWord === dashDisplay) {
            wins++;
            document.getElementById('wins').textContent = wins;
            document.getElementById('guessesRemaining').textContent = "You Did It!";
            document.getElementById("nextWord").classList.remove("disabled");
            document.getElementById("nextWord").classList.remove("disabled");
            document.getElementById('starterPic').classList.add("d-none");
            document.getElementById('video').classList.remove("d-none");

            var insertVideo = youTube[randomNumber];
            document.getElementById('video').src = insertVideo;


            gamePlaying = false;
        } 





        //*********************OUT OF GUESSES */
        if (guessesRemaining < 1) {
            alert("You Lose!")
            init()
        }
    }
}

init();
document.getElementById('nextWord').addEventListener('click', nextWord); 
document.getElementById('resetGame').addEventListener('click', init); 


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


//|| event.key == guesses[i-2] || event.key == guesses[i-3] || event.key == guesses[i-4] || event.key == guesses[i-5] || event.key == guesses[i-6] || event.key == guesses[i-7] || )
