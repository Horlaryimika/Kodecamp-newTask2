const shortString = "This is a short string less than 100"
const longString = "This is a long string greater than 100 fdry hysest gfytrytt ftyrytuy gftyr tre ytuyt trtyr fgrdrte trrt tyt h kjhiu hiu hi hgyu hgf rdf fdsg hjjh gfgh fgdgf ghhjg yjyu hjghj yfty tfyu hygjy gh gyutk gtyrrd tvbmkj yuhv tftf tyf"

function limitByLength(strg){
    if(strg.length > 100){
        return strg.slice(0, 100) + "...";
        
    }else{
        return strg
    }
}
console.log(limitByLength(shortString))
console.log(limitByLength(longString))