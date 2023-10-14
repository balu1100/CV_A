const array = [-200, - 100, 40, 30, 20, -10, 8, 10, 9, 23];

descendingSort=(arr=Array)=>{
    const length = arr.length;
    for(let i = 0; i<length-1; i++){
        for(let j = 0; j<length-1; j++){
            //check for element with the least value
            if(arr[j]<arr[j+1]){
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
console.log(descendingSort(array));