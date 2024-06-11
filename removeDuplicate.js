const randomNumber = [1, 1, 2, 2, 3, 3, 3, 4, 4, 5];
function removeDuplicate(){
   const formatNumber = randomNumber.filter((value, index, self) => self.indexOf(value) === index)
   console.log(formatNumber)
}

removeDuplicate()





