
var wordGuessGame = {
    guesses: undefined,
    wins: undefined,
    gamePlaying: undefined,
    hiddenWord: undefined,
    currentWord: undefined,
    guessesRemaining: undefined,
    dashDisplay: undefined,
    randomNumber: undefined,

    nextWord: function nextWord() { //arrow function doesn't have a value for the word this --> will reference outside the arrow
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

        console.log('working');
    },

    //"Press any key to get started" changes the state variable and resets the var values
    init: function init() {
        this.nextWord();
        this.wins = 0;
        document.getElementById('wins').textContent = this.wins;

        //uncomment below if I want the video removed when the reset button ins pressed
        // document.getElementById('starterPic').classList.remove("d-none");
        // document.getElementById('video').classList.add("d-none");

    },

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
        console.log(song);
        this.currentWord = song;
    },

    words: [
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
    ],

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

    eventKey: function(event) {
        console.log(this.gamePlaying);
        //prevents browser from applying default key press behavior
        //determine if key is a letter or not (regular expressions/keycode values)
        if (event.key.toUpperCase() === event.key.toLowerCase() || event.key.length > 1) {
            //if upper case and lower case are the same then it's not a letter
            return;
        } 
        if (this.gamePlaying) {
            this.guesses.push(event.key);
            this.guessesRemaining--;
    
            var isGuessCorrect = false;
            //********************** */
            for (i = 0; i < this.guesses.length; i++) {
                if (event.key == this.guesses[i] && i < this.guesses.length - 1) {
                    alert('You already guessed that!')
                    this.guessesRemaining++;
                    this.guesses.pop();
                    return;    
                    //IF THERE IS A DUPE, ADD A GUESS BACK, REMOVE THE LAST ITEM IN THE ARARY, AND ADJUST THE GUESSES DISPLAY
                    //(CHECKS EVERY INDEX EXCEPT THE LAST ONE, THIS IS BECASUE THE EVENT.KEY GETS PUSHED TO THE END, SO WE DON'T WANT THE EVENT.KEY TO CHECK AGAINST IT SELF AND GET A FALSE POSITIVE.)           
                }
            }
            
            //********************** PUSHING GUESSES TO THE CURRENT WORD BOX */
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
            }
    
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
            } 
    
                //*********************OUT OF GUESSES */
            if (this.guessesRemaining < 1) {
                alert("You Lose!")
                this.init()
            }
        }
    },
}

wordGuessGame.init();

//MOST OF THE FUNCTIONALITY IS TRIGGERED BY A KEYPRESS
document.onkeydown = wordGuessGame.eventKey.bind(wordGuessGame);
document.getElementById('nextWord').addEventListener('click', wordGuessGame.nextWord.bind(wordGuessGame)); 
document.getElementById('resetGame').addEventListener('click', wordGuessGame.init.bind(wordGuessGame)); 
//had to bind so that this. was referencing wordGuessGame not the document
