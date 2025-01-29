{
    function removeDuplicates(array: number[]): number[]{
        const newArray : number[] = [];

        for(const arr of array){
            if(!newArray.includes(arr)){
                newArray.push(arr)
            }
        }
        // console.log(newArray);
        return newArray;
    }

    // removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,6]);
}
