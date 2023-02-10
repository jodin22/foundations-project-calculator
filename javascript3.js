/*  
Need to have add, subtract, mulitply and divide functions. 

/home/jodin22sams/repos/javascript-exercises/08_calculator/calculator.js.

Reference the 08_calculator hw since those have add, subtract and multiply functions. Divide will be a new function. You will also 
need an operate function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

*/

/*  
Pseudocode: For the first two numbers; initialNumber and nextNumber. They will enter initialNumber, then press either add, 
subtract, multiply or divide. Then they will enter the nextNumber. Whichever operator they pressed, send the iniitalNumber and 
nextNumber to that function. Store the answer. 

If subtract is pressed, then then send initialNumber and nextNumber to the subtract function. Store the answer. 

If multiply is pressed, then then send initialNumber and nextNumber to the multiply function. Store the answer. 

If divide is pressed, then then send initialNumber and nextNumber to the divide function. Store the answer. 

If equal is pressed, then show the answer. If equal is not pressed and they enter another number, then take the stored answer 
from the first two numbers and send that answer with the new number to whichever function they want (add, sub, mult or div). 

Keep doing the above until equal is pressed. The equal button will stop everything and show an answer.
*/

/*  
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an 
operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with 
the ‘solution’ to the operation.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with
them. Don’t feel bad if it takes you a while to figure out the logic.

*/

/*
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated
at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student 
solution.

Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), 
followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should
then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), 
and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

*/

// The add and subtract functions below are the same as those above at lines 4 and 47. I changed the names from add to 
// addOperator while I test out receiving two numbers and storing the answer. Then receive another number and combine the stored
// answer with the new number and the new operator.

const addOperator = function(...futureNumbers) { 
	console.log(`add function received: ${futureNumbers}`); // shows all your numbers
  //console.log(typeof futureNumbers); // thought this would show array, but shows as object
  const toAdd = futureNumbers; // put the group of numbers into a const which is what you will use to refer to the array. otherwise 
  // you won't be able to use reduce
  console.log(`numbers to add: ${toAdd}`); // verifies that it is the same group of numbers from console line 32
  const total = toAdd.reduce((initialVal, nextVal) => { // reduce is adding up all the numbers in your array
    return initialVal + nextVal; // this return is only inside the arrow function so won't interfere with the return at line 44
  }); // the 0 is your initial val for the accumulator. if you don't have this, then it will use index 0 as the initial val 
  // for the accumulator and then add index 1 to it and then you get a new val for the accumulator. then it adds index 2 to it 
  // and you get a new val for the accumulator. then it adds index 3 to it and so on until the length of the array. for this,
  // you really don't need the 0 bc you're not dealing with objects in the array elements. when you have objects in the array
  // elements, then you need an initial val for the accumulator
  return total; // need to return something so the html can display it
};

const subtractOperator = function(...futureNumbers) {
  console.log(`subtract function received: ${futureNumbers}`);
  const toSubtract = futureNumbers; // the list of numbers is in an array format but has no name yet. now give it a name so you 
  // can reference the array's name and use reduce or any other type of array method
  console.log(`numbers to subtract: ${toSubtract}`); // verifies the same list of numbers from line 85
  const total = toSubtract.reduce((initialVal, nextVal) =>{
    return initialVal - nextVal;
  }); // unlike the addition, here we don't give a starting value for initialVal aka accumulator
  return total;
};

const multiplyOperator = function(...futureNumbers) {
  console.log(`function received: ${futureNumbers}`); // to see what was received
  const toMultiply = futureNumbers; // need a name to refer to the array of numbers this function received so we can use the name
  // and then apply array methods
  console.log(`numbers to multiply: ${toMultiply}`); // verify that this set of numbers is the same as what was received. {} will show the name of the 
  // variable and the value. without {}, only shows the value
  const totalMultiply = toMultiply.reduce((accumulator, nextVal)=> { // since there is no starting value for the accumulator, 
    return accumulator * nextVal; // it will take index 0 as the first val. then accumulate index 1 to it. then this new val 
    // will be the accumulator and will go to index 2 and accumulate that. and then you have a new val and will accumulate with 
    // the next index until the length of the array. 
  }); // this line will show a value if you need to accumulate objects that are items in an array. for now, your items in the 
  // array are non-objects and just numbers
  return totalMultiply; // having 2 returns is ok bc the return accumulator line is within the arrow function so it doesn't 
  // interfere with the return totalMultiply that will send the final value to whichever line called this function
};

const divideOperator = function(...futureNumbers) {
  console.log(`function received: ${futureNumbers}`);
  const toDivide = futureNumbers; // need a name to refer to the array of numbers this function received so we can use the name
  // and then apply array methods
  console.log(`numbers to divide: ${toDivide}`); 
  const totalDivide = toDivide.reduce((accumVal, nextVal) => { // since there is no starting value for the accumulator,
      return accumVal / nextVal; // it will take index 0 as the first val. then accumulate index 1 to it. then this new val 
      // will be the accumulator and will go to index 2 and accumulate that. and then you have a new val and will accumulate with 
      // the next index until the length of the array. 
  }); // this line will show a value if you need to accumulate objects that are items in an array. for now, your items in the 
  // array are non-objects and just numbers
  return totalDivide; // having 2 returns is ok bc the return accumulator line is within the arrow function so it doesn't 
  // interfere with the return totalDivide that will send the final value to whichever line called this function

};

/*  
When you divide a negative number by a positive number then the quotient is negative. When you divide a positive
number by a negative number then the quotient is also negative. When you divide two negative numbers then the quotient
is positive. The same rules hold true for multiplication.
*/

/* each number button pressed will show that number in the display. first do one number at a time. then put them in an array and 
join or concatenate them so when you press the buttons 1, 2, 3, 4, it will show as 1234. store the ‘display value’ in a 
variable somewhere for use in the next step.

*/

const display = document.querySelector("#show-numbers"); // put this id in display var. this will show the value later on.

const button7 = document.querySelector("#button7"); // put the id's in each button var
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9"); // maybe don't need all these const's for buttons bc you can use a forEach
const button4 = document.querySelector("#button4"); // buttons.forEach((button) => {
const button5 = document.querySelector("#button5"); //  button.addEventListener('click', () => { ...}
const button6 = document.querySelector("#button6");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button0 = document.querySelector("#button0");

const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const buttonSubtract = document.querySelector("#subtract");
const buttonAdd = document.querySelector("#add");
const buttonEquals = document.querySelector("#equals");
const buttonClear = document.querySelector("#clear");

/* right now, each number is being shown correctly. do an operation on single digit numbers and update the display. then do with 
multiple digit numbers and update the display. when you click a number, put that value into initialNumber? then put the next one 
in nextNumber? then do the operation and show results? 

*/

/*  
const buttons = document.querySelectorAll('button'); // get the reference for all button tags and put in a var

// use the forEach to iterate through each element of buttons
buttons.forEach((button) => { // each element in the buttons "array" is passed to the arrow function that has an
  button.addEventListener('click', () => { // event listener. each time a click happens, it will alert the button id using another
    alert(`Button id: ${button.id}`); // arrow function
  });
});

*/

let initialAnswer;
let initialNumberBeforePush = ""; // accumulate each number button press to show as a concatenated multi-digit number
let nextNumberBeforePush = ""; // these are strings
let becomeFirstNumber = 0; // takes the multi-digit number that is a string and becomes a number
let becomeSecondNumber = 0;

const displayArray = []; // starts as index 0 and index 1, then index 2 and 3, then 4 and 5. the first is always even. 
// the second is always odd. work in pairs.
console.log(`holds the numbers: ${displayArray}`);

const testDisplayArray = []; // if have two const testDisplayArray, there is no conflict when the second one is declared 
// inside a buton event

const displayOperator = []; // holds the word for the operator function. then after the second number fills displayArray,
// apply the correct operator function.

console.log(`holds the operators: ${displayOperator}`);

button7.addEventListener("click", (e) => { // when button 7 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // the text only
  const beforeDisplayArray = e.target.innerText; // send the text value to the var. at this line it is a string.
  
  const lastOperator = displayOperator.length - 1; // index of the last operation
  console.log(`operator: ${displayOperator[lastOperator]}`);

  // 194 to 226 will need to be edited later. for now, the order is 1st num, operator then 2nd num. any other order will mess 
  // it up. takes a pair and does the add ok. next is to send initialAnswer as new 1st num and get a new 2nd num and do another
  // add.

    if (displayOperator[lastOperator] == undefined) { // if no operators entered yet, then this becomes the first number of a pair
      // of numbers to be calculated
      initialNumberBeforePush = initialNumberBeforePush + beforeDisplayArray; // this concatenates the single digits to become
      // a multi-digit number
      console.log(`initial number: ${initialNumberBeforePush}`);
      // console.log(typeof initialNumberBeforePush); string. needs to be a number
      becomeFirstNumber = Number(initialNumberBeforePush);
      console.log(`initial number: ${becomeFirstNumber}`);
      console.log(typeof becomeFirstNumber); // no longer a string. now a number.
      display.textContent = becomeFirstNumber;  // displays it in the html
    }   if (displayOperator[lastOperator] != undefined) { // if an operator has been entered, then this is the last number of the pair to be calculated.
        nextNumberBeforePush = nextNumberBeforePush + beforeDisplayArray; // this concatenates the single digits to become
        // a multi-digit number
        console.log(`next number: ${nextNumberBeforePush}`);
        // console.log(typeof nextNumberBeforePush); string. needs to be a number
        becomeSecondNumber = Number(nextNumberBeforePush);
        console.log(`next number: ${becomeSecondNumber}`);
        console.log(typeof becomeSecondNumber); // no longer a string. now a number.
        display.textContent = becomeSecondNumber; // displays it in the html
    }     if (displayOperator[lastOperator] == "addOperator") {
          initialAnswer = addOperator(becomeFirstNumber, becomeSecondNumber);
          console.log(`initial answer: ${initialAnswer}`);
          // nextNumberBeforePush = "";
          // becomeSecondNumber = 0;
          console.log(`after first pair answer secondNumber accum: ${nextNumberBeforePush}`);
          console.log(`after first pair answer secondNumber val: ${becomeSecondNumber}`);
          // nextNumberBeforePush = ""; // clears the second number accumulator since the pair is done. initialAnswer becomes 
          // the new first number and the else if below will accumulate the button clicks for the second number.
          //becomeFirstNumber = initialAnswer;
          //console.log(`initial answer becomes new first number: ${becomeFirstNumber}`);
          // display.textContent = initialAnswer;   
    
    }; //else if (displayOperator[lastOperator] == "subtOperator" ) {

  
  //if (initialAnswer != undefined) { // a pair is done. now starting a new pair
  //becomeFirstNumber = initialAnswer;
  //console.log(`initial answer becomes new first number: ${becomeFirstNumber}`);
  //display.textContent = initialAnswer; 
  /*
  } else {  // has received a pair of numbers and did the calculation and is now going 
    // to take that answer and will be the first number of a new pair 
    becomeFirstNumber = initialAnswer;
    console.log(`initial number of new pair: ${becomeFirstNumber}`);
    display.textContent = becomeFirstNumber;
    // nextNumberBeforePush = ""; // clears the second number accumulator since the pair is done. initialAnswer becomes 
          // the new first number and the else if below will accumulate the button clicks for the second number.
    nextNumberBeforePush = nextNumberBeforePush + beforeDisplayArray; // new number click is replacing the previous 
    // second number
    console.log(`new next number: ${nextNumberBeforePush}`);
    // console.log(typeof nextNumberBeforePush); string. needs to be a number
    becomeSecondNumber = Number(nextNumberBeforePush);
    console.log(`new next number: ${becomeSecondNumber}`);
    console.log(typeof becomeSecondNumber); // no longer a string. now a number.
    display.textContent = becomeSecondNumber; // displays it in the html

  };
  */
  //}
  
  /*
  if ((becomeFirstNumber != undefined) && (becomeSecondNumber != undefined)) {
    initialAnswer = addOperator(becomeFirstNumber, becomeSecondNumber);
    console.log(initialAnswer);
  }; 
  */
  

  // const displayArray = [];

  /*
  displayArray.push(becomeNumber); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(`after push displayArray: ${displayArray}`);
  console.log(`displayOperator shows: ${displayOperator}`);

  testDisplayArray.push(becomeNumber);
  console.log(testDisplayArray);
  */

  /*
  this part will take the last item in the array and put it in a var. but when you push this new value to another array you 
  will get a similar problem as before. instead of sending the value to the array, it sends a nested array.

  console.log(testDisplayArray.slice(-1));
  testDisplay2 = testDisplayArray.slice(-1);
  console.log(testDisplay2); // at this line, it shows a single value

  testDisplay3.push(testDisplay2); // the push will put the single value into a nested array
  console.log(testDisplay3); 

  testDisplay4.push(testDisplay3[testDisplay3.length-1]);
  console.log(testDisplay4);

  */

  

  // const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  // console.log(`the last index number: ${lastIndex}`);

  // const testDisplayArray = []; // having this here instead of outside the button, you get the desired number instead of 
  // the number broken apart and put into separate indexes or a nested array?
  // testDisplayArray.push(displayArray[lastIndex]);
  // console.log(testDisplayArray);
  
  // const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  // console.log(`modulus remainder of last index: ${isItOdd}`);

  /*
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);
  */

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button8.addEventListener("click", (e) => { // when button 8 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // const showInDisplay = Number(e.target.innerText);
  // display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  const beforeDisplayArray = e.target.innerText; // string type to the initialNumberBeforePush

  const lastOperator = displayOperator.length - 1; // index of the last operation
  console.log(`operator: ${displayOperator[lastOperator]}`);

  // 399 to 423 will need to be edited later. for now, the order is 1st num, operator then 2nd num. any other order will mess 
  // it up. takes a pair and does the add ok. next is to send initialAnswer as new 1st num and get a new 2nd num and do another
  // add.

  if (displayOperator[lastOperator] == undefined) {
    initialNumberBeforePush = initialNumberBeforePush + beforeDisplayArray;
    console.log(`initial number: ${initialNumberBeforePush}`);
    // console.log(typeof initialNumberBeforePush); string. needs to be a number
    becomeFirstNumber = Number(initialNumberBeforePush);
    console.log(`intial number: ${becomeFirstNumber}`);
    console.log(typeof becomeFirstNumber);
    display.textContent = becomeFirstNumber;
  }   if (displayOperator[lastOperator] != undefined) {
      nextNumberBeforePush = nextNumberBeforePush + beforeDisplayArray;
      console.log(`next number: ${nextNumberBeforePush}`);
      // console.log(typeof nextNumberBeforePush); string. needs to be a number
      becomeSecondNumber = Number(nextNumberBeforePush);
      console.log(`next number: ${becomeSecondNumber}`);
      console.log(typeof becomeSecondNumber);
      display.textContent = becomeSecondNumber;
  }     if (displayOperator[lastOperator] == "addOperator") {
        initialAnswer = addOperator(becomeFirstNumber, becomeSecondNumber);
        console.log(`initial answer: ${initialAnswer}`);
        console.log(`after first pair answer secondNumber accum: ${nextNumberBeforePush}`);
        console.log(`after first pair answer secondNumber val: ${becomeSecondNumber}`);
        //becomeFirstNumber = initialAnswer;
        //console.log(`initial answer becomes new first number: ${becomeFirstNumber}`);
        // display.textContent = initialAnswer;
  };

  /*
  if ((becomeFirstNumber != undefined) && (becomeSecondNumber != undefined)) {
    initialAnswer = addOperator(becomeFirstNumber, becomeSecondNumber);
    console.log(initialAnswer);
  }; 
  */



  // const displayArray = [];

  /*
  displayArray.push(becomeNumber); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(`after push displayArray: ${displayArray}`);
  console.log(`displayOperator shows: ${displayOperator}`);

  testDisplayArray.push(becomeNumber);
  console.log(testDisplayArray);
  */

  /*
  this part will take the last item in the array and put it in a var. but when you push this new value to another array you 
  will get a similar problem as before. instead of sending the value to the array, it sends a nested array.

  console.log(testDisplayArray.slice(-1));
  testDisplay2 = testDisplayArray.slice(-1);
  console.log(testDisplay2);  // at this line, it shows a single value

  testDisplay3.push(testDisplay2); // the push will put the single value into a nested array
  console.log(testDisplay3);

  testDisplay4.push(testDisplay3[length-1]);
  console.log(testDisplay4);

  */

  


  // const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  // console.log(`the last index number: ${lastIndex}`);

  // const testDisplayArray = []; // having this here instead of outside the button, you get the desired number instead of 
  // the number broken apart and put into separate indexes or a nested array?
  // testDisplayArray.push(displayArray[lastIndex]);
  // console.log(testDisplayArray);
  
  // const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  // console.log(`modulus remainder of last index: ${isItOdd}`);

  /*
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);
  */

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button9.addEventListener("click", (e) => { // when button 9 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.
  
});

button4.addEventListener("click", (e) => { // when button 4 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button5.addEventListener("click", (e) => { // when button 5 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button6.addEventListener("click", (e) => { // when button 6 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button1.addEventListener("click", (e) => { // when button 1 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button2.addEventListener("click", (e) => { // when button 2 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button3.addEventListener("click", (e) => { // when button 3 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

button0.addEventListener("click", (e) => { // when button 0 is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = Number(e.target.innerText);
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  displayArray.push(showInDisplay); // first time clicked goes to index 0, subsequent clicks go to index 1, 2, 3 etc
  console.log(displayArray);

  const lastIndex = displayArray.length - 1; // this is the last number's index inside displayArray. check if this index is an
  // odd. if it is odd, then take the pair of numbers with the operator that was clicked and send the answer to another area.
  console.log(`the last index number: ${lastIndex}`);
  
  const isItOdd = lastIndex % 2; // if 0 then it is not the end of a pair yet. if 1, then it is the end of a pair and now you can 
  // do the calculation
  console.log(`modulus remainder of last index: ${isItOdd}`);
  if (isItOdd != 0) { // if the last index is an odd number which means the remainder is not 0, then grab the last one and 
    // the one before it and take both numbers in displayArray and do a calculation
    // check the last operator in the displayOperator array and use that operator with the two numbers from displayArray
    const firstNumber = displayArray.length - 2; // index for first half of pair
    const secondNumber = displayArray.length - 1; // index for second half of pair
    // instead of hard coding the addOperator, use the array displayOperator to grab the last one to determine which operation 
    // to apply.
    const lastOperator = displayOperator.length - 1; // index of the last operation
    console.log(displayOperator[lastOperator]); 

    const displayArrayLength = displayArray.length;  
    console.log(`count of numbers entered: ${displayArrayLength}`);
    const lastIndex = displayArray.length - 1;
    console.log(`last index of displayArray: ${lastIndex}`);

    const displayOperatorLength = displayOperator.length;
    console.log(`count of operators entered: ${displayOperatorLength}`);
    const displayOperatorCompareDisplayArray = displayOperatorLength * 2;
    console.log(`operator count * 2: ${displayOperatorCompareDisplayArray}`);
    // after one pair is 2 num, 1 oper. then array holds 3 num after push below line 360 bc third is the result of operation.
    // after second pair is 4 num, 2 oper. then array holds 5 num after push below line 360 bc fifth is the result of operation.
    // after third pair is 6 num, 3 oper. then array holds 7 num after push below line 360 bc seventh is result of operation.
    // after fourth pair is 8 num, 4 oper. then array holds 9 num after push below line 360 bc 9th is result of operation.
    // after fifth pair is 10 num, 5 oper. then array holds 11 num after push below line 360 bc 11th is result of operation.

    if (displayOperatorCompareDisplayArray != displayArrayLength) { // this makes sure that double numbers aren't entered. 
      // that it is number then operator then number then operator etc
          console.log("error");
          let msg = "error. enter an operator.";
          display.textContent = msg;
          displayArray.splice(lastIndex);
          return;
    };    

    if (displayOperator[lastOperator] == "addOperator") {
      initialAnswer = addOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "subtractOperator") {
      initialAnswer = subtractOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "multiplyOperator") {
      initialAnswer = multiplyOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] == "divideOperator") { 
      initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log(initialAnswer); // keep
      displayArray.push(initialAnswer); // keep
      display.textContent = initialAnswer;
    } else if (displayOperator[lastOperator] === undefined) { 
      // initialAnswer = divideOperator(displayArray[firstNumber], displayArray[secondNumber]);
      console.log("error"); // keep
      let msg = "error. enter an operator after a number.";
      // displayArray.push(initialAnswer); // keep
      display.textContent = msg;
      displayArray.splice(lastIndex);
    };
  } else {
    console.log(`even index number`); // not a full pair yet. remember it has to be 0, 1. then 2, 3. then 4, 5 etc. the first
    // part of the pair is even. the last part of the pair is odd. only when it is odd, will you do a calculation.
  };

  console.log(displayArray);

  // if displayArray last index is odd which means there is now a pair of numbers to calculate, then send the pair to the 
  // operator and get the answer

  // use modulo % 2 on each odd index bc if % 2 on an even index such as 0, 2, 4, 6, 8 etc will not hava a remainder and those 
  // that do have a remainder you know is odd. and if there is a value at an odd index, then that means there is a pair of numbers 
  // that can be calculated.

});

buttonDivide.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  displayOperator.push("divideOperator");
  console.log(displayOperator);

  const displayArrayBeforeAnything = displayArray[0];

  if (displayArrayBeforeAnything === undefined) { // when no numbers have been entered yet
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(0);
  };

  // for this length part, when the operator is pressed, show an error if there was no number pressed before the operator.
  // see if you can keep track if the length changes?

  // numbers entered starts at 1, then goes to 3, 5, 7, 9, 11, 13, etc. it goes up by 2 as long as there is 1 operator 
  // entered between a number. the operators entered starts at 1 and goes to 2, then 3, 4, 5, etc.
  // (operator count * 2) - 1. this will equal the number count?

  const displayArrayLength = displayArray.length;  
  console.log(`count of numbers entered: ${displayArrayLength}`);

  const displayOperatorLength = displayOperator.length;
  console.log(`count of operators entered: ${displayOperatorLength}`);
  const compareWithDisplayArrayLength = ((displayOperatorLength * 2) - 1);
  console.log(`operator count * 2 minus 1: ${compareWithDisplayArrayLength}`);

  const lastOperator = displayOperator.length - 2;
  console.log(`last index of operators: ${lastOperator}`);

  if (compareWithDisplayArrayLength != displayArrayLength) {  // when double operators are entered after a number
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(lastOperator, 1);
  }; // a problem arises when you enter double numbers after an operator, it gives an error. need to fix this.
  // but fix double numbers at each number button part?

});

buttonMultiply.addEventListener("click", (e) => { // when multiply is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  displayOperator.push("multiplyOperator");
  console.log(displayOperator);

  const displayArrayBeforeAnything = displayArray[0];

  if (displayArrayBeforeAnything === undefined) { // when no numbers have been entered yet
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(0);
  };

  // for this length part, when the operator is pressed, show an error if there was no number pressed before the operator.
  // see if you can keep track if the length changes?

  // numbers entered starts at 1, then goes to 3, 5, 7, 9, 11, 13, etc. it goes up by 2 as long as there is 1 operator 
  // entered between a number. the operators entered starts at 1 and goes to 2, then 3, 4, 5, etc.
  // (operator count * 2) - 1. this will equal the number count?

  const displayArrayLength = displayArray.length;  
  console.log(`count of numbers entered: ${displayArrayLength}`);

  const displayOperatorLength = displayOperator.length;
  console.log(`count of operators entered: ${displayOperatorLength}`);
  const compareWithDisplayArrayLength = ((displayOperatorLength * 2) - 1);
  console.log(`operator count * 2 minus 1: ${compareWithDisplayArrayLength}`);

  const lastOperator = displayOperator.length - 2;
  console.log(`last index of operators: ${lastOperator}`);

  if (compareWithDisplayArrayLength != displayArrayLength) {  // when double operators are entered after a number
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(lastOperator, 1);
  }; // a problem arises when you enter double numbers after an operator, it gives an error. need to fix this.
  // but fix double numbers at each number button part?

});

buttonSubtract.addEventListener("click", (e) => { // when subtract is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  displayOperator.push("subtractOperator");
  console.log(displayOperator);

  const displayArrayBeforeAnything = displayArray[0];

  if (displayArrayBeforeAnything === undefined) { // when no numbers have been entered yet
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(0);
  };

  // for this length part, when the operator is pressed, show an error if there was no number pressed before the operator.
  // see if you can keep track if the length changes?

  // numbers entered starts at 1, then goes to 3, 5, 7, 9, 11, 13, etc. it goes up by 2 as long as there is 1 operator 
  // entered between a number. the operators entered starts at 1 and goes to 2, then 3, 4, 5, etc.
  // (operator count * 2) - 1. this will equal the number count?

  const displayArrayLength = displayArray.length;  
  console.log(`count of numbers entered: ${displayArrayLength}`);

  const displayOperatorLength = displayOperator.length;
  console.log(`count of operators entered: ${displayOperatorLength}`);
  const compareWithDisplayArrayLength = ((displayOperatorLength * 2) - 1);
  console.log(`operator count * 2 minus 1: ${compareWithDisplayArrayLength}`);

  const lastOperator = displayOperator.length - 2;
  console.log(`last index of operators: ${lastOperator}`);

  if (compareWithDisplayArrayLength != displayArrayLength) {  // when double operators are entered after a number
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(lastOperator, 1);
  }; // a problem arises when you enter double numbers after an operator, it gives an error. need to fix this.
  // but fix double numbers at each number button part?

});

buttonAdd.addEventListener("click", (e) => { // when add is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  displayOperator.push("addOperator");
  console.log(displayOperator);

  /*
  const displayArrayBeforeAnything = displayArray[0];

  if (displayArrayBeforeAnything === undefined) { // when no numbers have been entered yet
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(0);
  };
  */

  // for this length part, when the operator is pressed, show an error if there was no number pressed before the operator.
  // see if you can keep track if the length changes?

  // numbers entered starts at 1, then goes to 3, 5, 7, 9, 11, 13, etc. it goes up by 2 as long as there is 1 operator 
  // entered between a number. the operators entered starts at 1 and goes to 2, then 3, 4, 5, etc.
  // (operator count * 2) - 1. this will equal the number count?

  /*
  const displayArrayLength = displayArray.length;  
  console.log(`count of numbers entered: ${displayArrayLength}`);

  const displayOperatorLength = displayOperator.length;
  console.log(`count of operators entered: ${displayOperatorLength}`);
  const compareWithDisplayArrayLength = ((displayOperatorLength * 2) - 1);
  console.log(`operator count * 2 minus 1: ${compareWithDisplayArrayLength}`);

  const lastOperator = displayOperator.length - 2; // this is not the last operator but the second to last bc when you do a 
  // a double operator, it pushes the last one to the end of the array and we want to take this last one and replace the previous
  // operator so no matter how many operators they press, it will only use the last one that they pressed.
  console.log(`last index of operators: ${lastOperator}`);

  if (compareWithDisplayArrayLength != displayArrayLength) {  // when double operators are entered after a number
    console.log("error");
    let msg = "error. enter a number before an operator.";
    display.textContent = msg;
    displayOperator.splice(lastOperator, 1); // it removes the second to last operator so the last operator will move forward by 
    // one index.
  }; 
  */
});

buttonEquals.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showNum = [];
  showNum.push(displayArray[displayArray.length - 1]);
  console.log(showNum);
  displayOperator.splice(0);
  display.textContent = showNum;
  displayArray.splice(0);
  // bc this clears all the operators, when you enter a new number after = or enter a new operator after =, you'll get an 
  // error. need to fix this by clearing everything but be sure to store the answer in another area if you want to do 
  // more operations to the answer/showNum

});


buttonClear.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  display.textContent = 0;
  displayArray.splice(0);
  displayOperator.splice(0);
  console.log(displayArray);
  console.log(displayOperator);
  initialAnswer = 0;
});
