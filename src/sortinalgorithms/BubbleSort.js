//Function to handle bubble sort:
export function getBubblesSortAnimations(array) {
    const animation = [];
    const auxiliaryArray = array.slice();
    bubbleSort(animation, auxiliaryArray);
    return animation;
  }//end of bubble sort

//Function to sort the array using bubble sort
function bubbleSort(animation, array)
{
    
    //looping through the array and chek if each element is on the right order or not
    for(let i = 0; i < array.length - 1; i++)
    {
        for(let j = 0; j < array.length - i - 1; j++)
        {
            animation.push([j, j+1]);
            animation.push([j, j+1]);
            if(array[j] > array[j+1])
            {
                animation.push([j, array[j+1]]);
                animation.push([j + 1, array[j]]);
                //swap the elment if they are not in the right order
                swap(j, j+1, array);

            }

            else{
                //the array is already sorted
                animation.push([-1,-1]);
                animation.push([-1,-1]);
            }
        }
    }
}//end of bubbleSort(animation, array)
  

//Helper method to swap the elemenet: 
function swap(before, after, array)
{
    
    //swap the element:
    let temp = array[before]; 
    array[before] = array[after];
    array[after] = temp;
}//end of swap()





























   