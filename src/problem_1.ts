{
    function sumArray(numbers: number[]): number {
        let sum: number = 0;
        for (const number of numbers) {
            sum = number + sum;
        }
        // console.log(sum);
        return sum;
    }

    // Sample Input:
    // sumArray([1, 2, 3, 4, 5]);
}