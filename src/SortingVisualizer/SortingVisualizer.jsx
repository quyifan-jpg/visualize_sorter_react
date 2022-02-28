//import external dependencies:
import React from 'react';
import {getMergeSortAnimations} from '../sortinalgorithms/sortingAlgorithms.js'
import {getBubblesSortAnimations} from '../sortinalgorithms/BubbleSort.js'
import {getQuickSortAnimation} from '../sortinalgorithms/QuickSort.js'
import {getInsertionSortAnimation} from '../sortinalgorithms/insertionSort.js'
import {getSelectionSortAnimation} from '../sortinalgorithms/selectionSort.js'
import './SortingVisualizer.css';
import { Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//global variable to control the speed of the animation
//for MERGE sort
const ANIMATION_SPEED_MS = 0.5;
//number of array bars being displayed
const NUMBER_OF_ARRAY_BARS = 250; 
//main color of the array bars:
const PRIMARY_COLOR = 'turquoise';
//the color of the array bar that is being compared throughout the sort
const SECONDARY_COLOR = 'red';

//the main function of the react app
export default class SortingVisualizer extends React.Component {
    //sorting constructor:
    constructor(props) {
      super(props);
  
      this.state = {
        terminate: false,
        number_bar : NUMBER_OF_ARRAY_BARS,
        animation_speed : ANIMATION_SPEED_MS,
        array: [],  //main array that would print out the element to be sorted.
      };
    }
    
    //when the component of the app is loaded, it will reset the current of element
    componentDidMount() {
      this.resetArray();
    }

    //resetting the array and generate new elements each time
    resetArray(){
        const array = [];
        //generating random integer for sorting: 
        for(let i = 0; i <=  NUMBER_OF_ARRAY_BARS; i++)
        {
            //pushing the integer into the array: 
            array.push(randomIntGeneration(5, 670));
        }
        this.setState({array});
    }
    disableWhenRunning(){
      console.log("yyeyyyyyes")
      document.getElementById("button1").disabled = true
      document.getElementById("button2").disabled = true
      document.getElementById("button3").disabled = true
      document.getElementById("button4").disabled = true
      document.getElementById("button5").disabled = true
      document.getElementById("button6").disabled = true
    }
    enableafterRunning(i){
            document.getElementById("button1").disabled = false
            document.getElementById("button2").disabled = false
            document.getElementById("button3").disabled = false
            document.getElementById("button4").disabled = false
            document.getElementById("button5").disabled = false
            document.getElementById("button6").disabled = false
          
      }

    //sorting alorithms:
    mergeSortImpl()
    {
      this.disableWhenRunning()
      //variable to intialize the animation for the current given array
      const animation = getMergeSortAnimations(this.state.array);
      for(let i = 0; i < animation.length; i++)
      {
        const arrayBar = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2; //NEED TO RESEARCH MORE ABOUT THIS
        
        if (i == animation.length - 1) {
          console.log("possible")
          setTimeout(() => 
          {
            this.enableafterRunning(i)
          },i*this.state.animation_speed)
        }
       
        if(isColorChange)
        {
          const [barOneIndex, barTwoIndex] = animation[i];
          const barOneStyle = arrayBar[barOneIndex].style;
          const barTwoStyle = arrayBar[barTwoIndex].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.animation_speed);
        } 
        else{
          setTimeout(() => {
            const [barOneIndex, newHeight] = animation[i];
            const barOneStyle = arrayBar[barOneIndex].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * this.state.animation_speed);
        }
      }
    
    } //end of mergeSortImpl
    
    //Quick sort implementation:
    quickSortImpl() {
      this.disableWhenRunning()
      const animations = getQuickSortAnimation(this.state.array);
      for (let i = 0; i < animations.length - 1; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');

          const isColorChange = (i % 6 === 0) || (i % 6 === 1);
          
          if (i == animations.length - 3) {
            console.log("possible")
            setTimeout(() => 
            {
              
              this.enableafterRunning(i)
            },i*this.state.animation_speed)
          }
          if(isColorChange === true) {
              const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
              const [barOneIndex, barTwoIndex] = animations[i];
              if(barOneIndex === -1) {
                  continue;
              }
              const barOneStyle = arrayBars[barOneIndex].style;
              const barTwoStyle = arrayBars[barTwoIndex].style;
              setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
              },i * this.state.animation_speed);
          }
          else {
              const [barIndex, newHeight] = animations[i];
              if (barIndex === -1) {
                  continue;
              }
              const barStyle = arrayBars[barIndex].style;
              setTimeout(() => {
                  barStyle.height = `${newHeight}px`;
              },i * this.state.animation_speed);  
          }
      }
  }//end of quickSortImpl()

  //Heap sort implementation:
  heapSortImpl()
  {

  }//end of heapSortImpl()

  //Insertion sort JS implementation:
  insertionSortImpl()
  {
    this.disableWhenRunning()
    const animation = getInsertionSortAnimation(this.state.array);
    //looping though the animation array: 
    for(let i = 0; i < animation.length; i++)
    {
      if (i == animation.length - 2) {
        console.log("possible")
        setTimeout(() => 
        {
          this.enableafterRunning(i)
        },i*this.state.animation_speed)
      }
      const isColorChange = (animation[i][0] === "comparison1" || (animation[i][0] === "comparison2"));
      const arrayBars = document.getElementsByClassName("array-bar");
      if(isColorChange)
      {
        const color = (animation[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const[temp, barOneIndex, barTwoIndex] = animation[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animation_speed);
      }
      else{
        const[temp, barIndex, newHeight] = animation[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * this.state.animation_speed);
      }
    }

  }//end of insertionSortImpl()

  selectionSortImpl() {
    this.disableWhenRunning()
    const animations = getSelectionSortAnimation(this.state.array);
    //loop through the animation array to determine the changes of the color
    for (let i = 0; i < animations.length; i++) {
      if (i == animations.length - 1) {
        console.log("possible")
        setTimeout(() => 
        {
          
          this.enableafterRunning(i)
        },i*this.state.animation_speed)
      }
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [temp, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * this.state.animation_speed);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * this.state.animation_speed);  
        }
    }
  }//end of selection sort
    
    //bubble sort:
    bubbleSortImpl()
    {
      this.disableWhenRunning();
      //variable to hold the animation return value from the bubble sort function
      const animation = getBubblesSortAnimations(this.state.array);
      for(let i = 0; i < animation.length; i++)
      {
        //extract the bar from the HTML side
        const arrayBar = document.getElementsByClassName('array-bar');
        const isColorChange = (i % 4 === 0) || (i % 4 === 1);
        //if the color changed:
        if(isColorChange)
        {
          const [barOneIndex, barTwoIndex] = animation[i];
          const barOneStyle = arrayBar[barOneIndex].style;
          const barTwoStyle = arrayBar[barTwoIndex].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() =>
            {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;

            }, i * this.state.animation_speed);
          if(i == animation.length - 1){
            this.enableafterRunning(i)
          }
        }
        //if the color has not changed:
        else
        {
          const [barOneIndex, newHeight] = animation[i];
          if (barOneIndex === -1)
          {
            continue;
          }
          const barStyle = arrayBar[barOneIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, i * this.state.animation_speed);
        }

      }

    }//end of bubble sort implementation

    //function to test all sorting algorithm for debugging
    testSortingAlgorithms()
    {
      //the function will create 100 array with different length
      for(var i = 0; i < 100; i++)
      {
        // create an array at each iteration: 
        const array = []
        //each array will have various length from 1 to 1000 
        for(var j = 0; j < randomIntGeneration(1, 1000); j++)
        {
          //the array will push element into it until the for loop is exhausted. 
          array.push(randomIntGeneration(0, 1000));
        }//end for loop.

        //testing the sorting algorithm: 
        const jsSortingBuiltIn = array.slice().sort((a,b) => a - b); //java built-in sorting function
        const selectionSort = getSelectionSortAnimation(array.slice());
        

        console.log(checkArrayEqual(jsSortingBuiltIn, selectionSort));
        
      }
    }

    render()
    {
        const {array} = this.state;

        return (

          <div className="array-container">
            <div className='button'>
            <Button id="button1" onClick={() => this.resetArray()}>Generate New Array</Button>
            <Button id="button2" onClick={() => this.mergeSortImpl()}>Merge Sort</Button>
            <Button id="button3" onClick={() => this.quickSortImpl()}>Quick Sort</Button>
            {/* <button onClick={() => this.heapSortImpl()}>Heap Sort</button> */}
            <Button id="button4" onClick={() => this.bubbleSortImpl()}>Bubble Sort</Button>
            <Button id="button5" onClick={() => this.insertionSortImpl()}>Insertion Sort</Button>
            <Button id="button6" onClick={() => this.selectionSortImpl()}>Selection Sort</Button>
            {/* <Button id="button7" onClick={()=>{this.setState({terminate:true})}}>terminate</Button> */}
          </div>
      
          {array.map((value, idx) => (
            <div className="array-bar" key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}> </div>
          ))}
        </div>
            
        );

    }

}

//Function to generate random integer from 5 to 1000
function randomIntGeneration(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function to test if two array of elements equal to each other
function checkArrayEqual(arr1, arr2)
{
  //if the two arrays are not equal to each other in length, then they are not equal.
  if (arr1.length !== arr2.length)
  {
    return false;
  }

  // looping through each character and check if they are both equals
  for (let i=0; i < arr1.length; i++)
  {
    if (arr1[i] !== arr2[i])
    {
      //array are equals
      return false;
      
    }

  }
  return true;
} //end of program
