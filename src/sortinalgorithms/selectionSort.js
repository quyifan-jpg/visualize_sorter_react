export function getSelectionSortAnimation(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    return animations;
}
//function to handle the selection sort algorithm
function selectionSort(auxillaryArray, animations) {
    const length = auxillaryArray.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i; //Finding minimum element in unsorted array
        for (let j = i + 1; j < length; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);
        swap(auxillaryArray, minIndex, i);
    }
}

//helper method to swap element within an array
function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}
