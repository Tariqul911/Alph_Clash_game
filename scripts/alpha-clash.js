// function play (){
//     // Step-1: Hide the home screen. To hide the screen and the class hidden to the home section.
    

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


// function continueGame(){
//     // generate a random alphabet 
//     const alphabet = getARandomAlphabet();
//     console.log('Your random alphabet',alphabet);

//     // set randomly generated alphabet to the screen (display it)
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;
// }


// function play (){
//     hideElementById('home-screen');   // এটা আগে hide করতে হবে
//     showElementById('play-ground');   // এরপর playground দেখাবে
//     continueGame();
// }

// function showElementById (elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key; 
    console.log( 'player pressed', playerPressed); 

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText; 
    const expectedAlphabet = currentAlphabet.toLowerCase(); 
    console.log(playerPressed, expectedAlphabet); 


    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById ('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        




        // ------------------------------------------------------
        // update score:
        // 1: get the current score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // console.log(currentScore);
        
        // // 2: increase the score by 1 
        const newScore = currentScore + 1;
        // // 3. show the updated score 
        // currentScoreElement.innerText = newScore;



        // start a new round
        console.log('you have pressed correctly', expectedAlphabet); 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life.');


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }


        // ------------------------------------------------------
        // //step:1 get the current life number
        // const currentLifeElement = document.getElementById('current-life'); 
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step:2 reduce the life count
        // const newLife = currentLife - 1;
        // // step:3 display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (display it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet); 
}

function play (){
    //  hide everything show only playground
    hideElementById('home-screen');   
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 5); 
    setTextElementValueById('current -score', 0);


    continueGame();
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function gameOver (){
    hideElementById('play-ground'); 
    showElementById('final-score');
}