
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * alphabets.length;
    const index = Math.floor(randomNumber); 
    
    const alphabet = alphabets[index]; 
    // console.log(index, alphabet);
    return alphabet; 
}
