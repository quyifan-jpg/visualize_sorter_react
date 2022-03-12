export function getInsertionSortAnimation(array){
    let animation = [];
    let auxilaryArray = array.slice();
    insertionSort(auxilaryArray, animation);
    return animation;
}


function insertionSort(array, animation)
{
    //looping through the array starting from index 1 because index 0 is assumed to be the sorted part of the array:
    for(let i = 1; i < array.length; i++)
    {
        let value = array[i];
        let hole = i - 1;
        //changing the color of the elements:
        animation.push(["comparison1", hole, i]);
        animation.push(["comparison2", hole, i]);
        //the index is not in 0 and the previous is greater than the current value:
        while(hole >= 0 && array[hole] > value)
        {
            animation.push(['overwrite', hole + 1, array[hole]]);
            //swap the elements
            array[hole+1] = array[hole]; 
            hole--; 
            if(hole >=0){
                animation.push(["comparison1", hole, i]);
                animation.push(["comparison2", hole, i]);
            }
        }

        animation.push(["overwrite", hole + 1, value]);
        array[hole + 1] = value;
    }

}