const stringWord = ["cat", "dog", "lion", "goat"];
const searchString1 = "lion";
const searchString2 = "rat";

function linearSearch(array, string){
    let found = false;
    for(let i = 0; i < array.length; i++){
        if(array[i] === string){
    
            console.log("Yes, the string exist in the array")
            found = true;
            break;
        }
        
    }
    if(!found){
        console.log("No, The string does not exist in the array")
    }
};
linearSearch(stringWord, searchString1)
linearSearch(stringWord, searchString2)
