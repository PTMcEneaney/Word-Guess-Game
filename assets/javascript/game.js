   
//**************ENTIRE GAME IS SAVED IN THIS OBJECT wordGuessGame ***********************************************************************/
var wordGuessGame = {
    //defining keys since I reference them later, these were initially global variables
    guesses: undefined,
    wins: undefined,
    gamePlaying: undefined,
    hiddenWord: undefined,
    currentWord: undefined,
    guessesRemaining: undefined,
    dashDisplay: undefined,
    randomNumber: undefined,

    //*************NEXT WORD METHOD RESETS MOST VALUES BUT ALLOWS YOUTUBE VIDEO TO KEEP PLAYING, DOES NOT CHANGE TOTAL WINS ****************/
    nextWord: function nextWord() { 
        this.guesses = [];
        this.guessesRemaining = 15;
        this.hiddenWord = [];
        this.gamePlaying = true;
        document.getElementById('hiddenWord').textContent = this.dashDisplay;
        document.getElementById('guesses').textContent = "Hit any letter to start!";
        document.getElementById('guessesRemaining').textContent = this.guessesRemaining;
    
        document.getElementById("nextWord").classList.add("disabled");
        this.randomNumber = Math.floor(Math.random() * this.words.length);
        this.dashGenerator(this.words[this.randomNumber]);
        /* uncomment below if I want the video removed and the pic restored when the nextWord button is pressed
        document.getElementById('starterPic').classList.remove("d-none");
        document.getElementById('video').classList.add("d-none"); */
    },

    //*************INIT CALLS NEXT WORD, BUT ALSO RESETS WINS TO 0, AND UPDATES THE WINS DISPLAY ****************************************/
    init: function init() {
        this.nextWord();
        this.wins = 0;
        document.getElementById('wins').textContent = this.wins;
    },

    /* ************dashGenerator is a method that is called in NextWord method. It replaces the characters in the randomly chosen song
    with dashes or spaces, stores those characters as an array, and joins them so they display as a string without commas */
    dashGenerator: function dashGenerator(song) {
        for (i = 0; i < song.length; i++) {
            if (song.charAt(i) == " ") {
                this.hiddenWord.push(" ");
            } else {
                this.hiddenWord.push("_");
            }
        }
        this.dashDisplay = this.hiddenWord.join('');
        document.getElementById('hiddenWord').textContent = this.dashDisplay;
        this.currentWord = song;
    },

    /* **********THESE ARE ALL THE SPACE-THEMED SONG TITLES, they get chosen randomly by the Math.random function on keyup events ********/
    words: [
        'space oddity', 
        'ziggy stardust', 
        'life on mars', 
        'starman', 
        'moonage daydream', 
        'rocket man',
        'intergalactic', 
        'walking on the sun',
        'girl from mars',
        'we are all made of stars',
        'space song', 
        'spaceman',
        'champange supernova',
        'man on the moon', 
        'bad moon rising',
        'dancing in the moonlight',
        'sisters of the moon', 
        'harvest moon', 
        'major tom', 
        'across the universe', 
        'parallel universe', 
        'space jam', 
        'staring at the sun', 
        'black hole sun', 
    ],

    /* *****************THESE ARE ALL THE YOUTUBE VIDEOS ASSOCIATED WITH EACH SECRET SONG, the source changes to their URL when the word is guessed correctly */
    youTube: [
        'https://www.youtube.com/embed/iYYRH4apXDo?rel=0;&autoplay=1', // 'space oddity', david bowie
        'https://www.youtube.com/embed/XXq5VvYAI1Q?rel=0;&autoplay=1', // 'ziggy stardust', david bowie
        'https://www.youtube.com/embed/AZKcl4-tcuo?rel=0;&autoplay=1', // 'life on mars', david bowie
        'https://www.youtube.com/embed/tRcPA7Fzebw?rel=0;&autoplay=1', // 'starman', david bowie
        'https://www.youtube.com/embed/JFDj3shXvco?rel=0;&autoplay=1', // 'moonage daydream', david bowie
        'https://www.youtube.com/embed/DtVBCG6ThDk?rel=0;&autoplay=1', // 'rocket man', elton john
        'https://www.youtube.com/embed/qORYO0atB6g?rel=0;&autoplay=1', // 'intergalactic', beastie boys
        'https://www.youtube.com/embed/LQj--Kjn0z8?rel=0;&autoplay=1', // 'walking on the sun', smash mouth
        'https://www.youtube.com/embed/FkSl9GGOFHM?rel=0;&autoplay=1', // 'girl from mars', ash
        'https://www.youtube.com/embed/x1rFAaAKpVc?rel=0;&autoplay=1', // 'we are all made of stars', moby
        'https://www.youtube.com/embed/f9X1C7pTu-M?rel=0;&autoplay=1', // 'space song', beach house
        'https://www.youtube.com/embed/Hc16Y9fiCvQ?rel=0;&autoplay=1', // 'spaceman', the killers
        'https://www.youtube.com/embed/LR4kY8LGx7M?rel=0;&autoplay=1', // 'champange supernova', oasis
        'https://www.youtube.com/embed/dLxpNiF0YKs?rel=0;&autoplay=1', // 'man on the moon', REM
        'https://www.youtube.com/embed/5BmEGm-mraE?rel=0;&autoplay=1', // 'bad moon rising', CCR
        'https://www.youtube.com/embed/sR47TZdJg64?rel=0;&autoplay=1', // 'dancing in the moonlight', king harvest
        'https://www.youtube.com/embed/t76vsuJHe1Q?rel=0;&autoplay=1', //'sisters of the moon', fleetwood mac
        'https://www.youtube.com/embed/n2MtEsrcTTs?rel=0;&autoplay=1', // 'harvest moon', neil young
        'https://www.youtube.com/embed/OMDbX1zksgI?rel=0;&autoplay=1', // 'major tom', peter schilllilng
        'https://www.youtube.com/embed/90M60PzmxEE?rel=0;&autoplay=1', // 'across the universe', beatles
        'https://www.youtube.com/embed/VIfxDoQDaFE?rel=0;&autoplay=1', // 'parallel universe', red hot chili peppers
        'https://www.youtube.com/embed/-gUd88gc8WA?rel=0;&autoplay=1', //  'space jam', quad city DJ's
        'https://www.youtube.com/embed/oHrTOQ18yzU?rel=0;&autoplay=1', // 'staring at the sun', tv on the radio
        'https://www.youtube.com/embed/3mbBbFH9fAg?rel=0;&autoplay=1', // 'black hole sun', soundgarden
    
    ],

/* ********************METHOD DEFINED--> THIS IS WHERE MOST OF THE FUNCTIONALITY OF THE GAME IS DEFINED, CALLED LATER WITH AN ON-CLICK ********************/
eventKey: function(event) {
    //determine if key is a letter or not 
    if (event.key.toUpperCase() === event.key.toLowerCase() || event.key.length > 1) {
        //if upper case and lower case are the same then it's a symbol, number or other, if the length is more than one character then it's a complex key like enter, alt, control, etc.
        //THIS IF STATEMENT SHOULD PREVENT THE USER FROM ACCIDENTALLY INPUTING ANYTHING BUT A LETTER
        return;
        //return stops any other if statements or functions from taking place if the user pressed something other than a letter
    } 
    if (this.gamePlaying) {
        //when gamePlaying === true, it allows the user to enter guesses. This changes when win/lose conditions are met, and is reset with the nextWord method
            this.guesses.push(event.key);
            this.guessesRemaining--;
    
            var isGuessCorrect = false;
            //********************** CHECKS FOR DUPE INPUTS BY THE USER, REMOVES THAT GUESS FROM THE ARRAY/LETTERS GUESSED DISPLAY*/
            for (i = 0; i < this.guesses.length; i++) {
                if (event.key == this.guesses[i] && i < this.guesses.length - 1) {
                    alert('You already guessed that!')
                    this.guessesRemaining++;
                    this.guesses.pop();
                    return;   
                    //adding a return so that the loop ends if they clicked a dupe letter 
                }
            }
            
            //* *********************Pushes key strokes to the DashDisplay variable, and displays that to the user */
            for (i = 0; i < this.hiddenWord.length; i++) {
                if (event.key == this.currentWord.charAt(i)) {
    
                    this.hiddenWord[i] = event.key;
                    this.dashDisplay = this.hiddenWord.join('');
                    document.getElementById('hiddenWord').textContent = this.dashDisplay;
                    isGuessCorrect = true;
                }
            }

            if (isGuessCorrect === true) {
                this.guessesRemaining++;
                //added this b/c we only want to remove guesses if the player guesses incorrectly
            }
            
            //Update Displays for letters guessed, and guesses remaining
            document.getElementById('guesses').textContent = this.guesses;
            document.getElementById('guessesRemaining').textContent = this.guessesRemaining;
    
            //********************* WIN CONDITIONS */
            if (this.currentWord === this.dashDisplay) {
                this.wins++;
                document.getElementById('wins').textContent = this.wins;
                document.getElementById('guessesRemaining').textContent = "You Did It!";
                document.getElementById("nextWord").classList.remove("disabled");
                document.getElementById('starterPic').classList.add("d-none");
                document.getElementById('video').classList.remove("d-none");
    
                var insertVideo = this.youTube[this.randomNumber];
                document.getElementById('video').src = insertVideo;
    
                this.gamePlaying = false;
                //prevents the player from guessing extra letters
            } 
    
                //*********************OUT OF GUESSES / LOSE CONDITIONS */
            if (this.guessesRemaining < 1) {
                alert("You Lose!")

                //immediately calls the init function after the alert so that the game-restarts automatically
                this.init()
            }
        }
    },
}

//initializes the game, sets default values for all variables
wordGuessGame.init();

//KEYPRESS EVENT WHICH CALLS THE OBJECT AND IT'S METHODS
document.onkeydown = wordGuessGame.eventKey.bind(wordGuessGame);
document.getElementById('nextWord').addEventListener('click', wordGuessGame.nextWord.bind(wordGuessGame)); 
document.getElementById('resetGame').addEventListener('click', wordGuessGame.init.bind(wordGuessGame)); 
//had to bind these so that 'this' was referencing wordGuessGame not the document

