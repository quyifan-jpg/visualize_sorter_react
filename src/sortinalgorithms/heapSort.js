import { create, all } from 'mathjs'
import * as numbers from 'numbers'

//function to handle the Heap sort
export function getHeapSortAnimation(array)
{
    let n = array.length;

    for(let i = math.floor(n / 2); i >=0; i-=1)
    {
        buildMaxHeap(array, i)
    }

    //swap the largest element in the heap tree with the last element
    for(let i = n - 1; i > 0; i--)
    {
        swap(array, 0, i);
        n--; 

        buildMaxHeap(array, 0)
    }

    return

}

//fuction to build a max heap
//max heap is a binary tree with parent nodes > child nodes
function buildMaxHeap(array, index)
{
    const left = 2 * i + 1; //left side of the tree
    const right = 2 * i + 2; //right side of the binary tree
    let max = i; // we will assume max element to be current index from the array

    //if the left most element is the largest, then it will be the max element
    if(left < array.length && array[left] > array[max])
    {
        
        max = left;
    }

    //if the right element is the largest, then it will be the max element of the tree
    if(right < array.length && array[right] > array[max])
    {
        max = right;
    }

    if (max != i) {
        swap(input, i, max)
        buildMaxHeap(input, max)
    }

}


//fucntion to swap two elements in an array
function swap(array, first, second){
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}//end of swap()