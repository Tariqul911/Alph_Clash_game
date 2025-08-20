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
    }
    else{
        console.log('you missed. you lost a life.');
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (display it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet); 
}

function play (){
    hideElementById('home-screen');   // FIXED
    showElementById('play-ground');
    continueGame();
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
