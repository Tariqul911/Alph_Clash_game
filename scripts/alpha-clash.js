// function play (){
//     // Step-1: Hide the home screen. To hide the screen and the class hidden to the home section.
    

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet);
}


function play (){
    showElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}