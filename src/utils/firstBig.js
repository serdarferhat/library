export const firstBig=(sample="")=>{
                //kelimeleri ayırma
                var words=sample.split(" ")
                // console.log(words)
                var tempWords=[]
                //kelimeden döner
                for(let i=0;i<words.length;i++){
                                //harfleri döner
                                var tempWord=""
                for(let j=0;j<words[i].length;j++){
                 if(j===0){tempWord+=words[i][j].toLocaleUpperCase("tr-TR")
                }else{
                                tempWord+=words[i][j].toLocaleLowerCase("tr-TR")
                }
                }
tempWords.push(tempWord)
}
                
console.log(tempWords)
const cemi=tempWords.join(" ")
                return cemi
}