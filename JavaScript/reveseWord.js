const str = "This is a sunny day";

reverseWordSentence=(string)=>{
    const splittedString = string.split(" ");
    const revsersedWord = splittedString.map((word)=>{
        let end = word.length-1;
        let start = 0;
        let newWord = '';
        while (end>=start){
            newWord+=word[end];
            end--;
        }
        return (newWord);
    })
    return revsersedWord.join(' ');
}
console.log(reverseWordSentence(str));