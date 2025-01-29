{
    function countWordOccurrences(sentence: string, word : string):number{
        const wordCase = word.toLowerCase();
        const sentenceArray : string[] = sentence.toLowerCase().split(" ");

        let countWord: number = 0;
        for(const sentenceArr of sentenceArray){
            if(sentenceArr == wordCase){
                countWord++
            }
        }
        // console.log(countWord);
        return countWord;
    }

    // countWordOccurrences("I love typescript typescript", "typescript");
}
