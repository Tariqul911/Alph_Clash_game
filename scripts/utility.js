
// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     const randomNumber = Math.random() * alphabets.length;
//     const index = Math.floor(randomNumber); 
    
//     const alphabet = alphabets[index]; 
//     // console.log(index, alphabet);
//     return alphabet; 
// }


function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * alphabets.length;
    const index = Math.floor(randomNumber); 
    
    const alphabet = alphabets[index]; 
    return alphabet; 
}
