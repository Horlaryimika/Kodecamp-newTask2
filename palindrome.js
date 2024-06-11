const newWord1 = "Energy";
const newWord2 = "lawal";
function palindrome (newWords){
    const modifiedWord = newWords.toLowerCase();
    const reverseWord = modifiedWord.split('').reverse().join('');
    if(modifiedWord === reverseWord){
        console.log(newWords + " is a palindrome")
    }else{
        console.log(newWords + " is not a palindrome")
    }
                
}
palindrome(newWord1)
palindrome(newWord2)