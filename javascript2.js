// the below is from the 08_calculator hw. use this as your starting point. the hw didn't have a divide function. that will be 
// a new one.

// the add function
/*
const add = function(...futureNumbers) { 
	console.log(`function received: ${futureNumbers}`); // shows all your numbers
  //console.log(typeof futureNumbers); // thought this would show array, but shows as object
  const toAdd = futureNumbers; // put the group of numbers into a const which is what you will use to refer to the array. otherwise 
  // you won't be able to use reduce
  console.log(`numbers to add: ${toAdd}`); // verifies that it is the same group of numbers from console line 32
  const total = toAdd.reduce((initialVal, nextVal) => { // reduce is adding up all the numbers in your array
    return initialVal + nextVal; // this return is only inside the arrow function so won't interfere with the return at line 44
  }, 0); // the 0 is your initial val for the accumulator. if you don't have this, then it will use index 0 as the initial val 
  // for the accumulator and then add index 1 to it and then you get a new val for the accumulator. then it adds index 2 to it 
  // and you get a new val for the accumulator. then it adds index 3 to it and so on until the length of the array. for this,
  // you really don't need the 0 bc you're not dealing with objects in the array elements. when you have objects in the array
  // elements, then you need an initial val for the accumulator
  return total; // need to return something so the html can display it
};

const enteredNumbers = function(...futureNumbers) { // ok to use ...futureNumbers here; the same as the above function bc the
  // parameter names are only good inside the function. 
  console.log(`Numbers entered: ${futureNumbers}`); // shows all your numbers you entered
  const toShow = futureNumbers; // put into a const so you can return the results of the function to the line that was calling it
  return toShow;
};

const showEnteredNumbersAdd = enteredNumbers(2, -35, 5.1456, -896.147); // for now, you are copy pasting the numbers
// for both functions. later when you build the ui, see if you can use a prompt or form.  also might need to cast as Number or
// floating number to allow for many decimals? re-read the mdn docs for casting
const showTotalAdd = add(2, -35, 5.1456, -896.147); 
console.log({showTotalAdd});

const numbers = document.createElement("p");  // creating your elements
const total = document.createElement("p");
const div = document.createElement("div");
const addDiv = div.classList.add("add"); 

numbers.textContent = `Numbers to add: ${showEnteredNumbersAdd}`; // fill with content. one line as the group of numbers.
total.textContent = `Total: ${showTotalAdd}`; // and the next line to be the total

document.body.appendChild(div); // show your content
div.appendChild(numbers);
div.appendChild(total);


// the subtract function
const subtract = function(...futureNumbers) {
    console.log(`function received: ${futureNumbers}`);
    const toSubtract = futureNumbers; // the list of numbers is in an array format but has no name yet. now give it a name so you 
    // can reference the array's name and use reduce or any other type of array method
    console.log(`numbers to subtract: ${toSubtract}`); // verifies the same list of numbers from line 85
    const total = toSubtract.reduce((initialVal, nextVal) =>{
      return initialVal - nextVal;
    }); // unlike the addition, here we don't give a starting value for initialVal aka accumulator
    return total;
};
  
const showEnteredNumbersSubtract = enteredNumbers(78, -190, 34.8876, -800.144);
const showTotalSubtract = subtract(78, -190, 34.8876, -800.144);
console.log({showTotalSubtract});
  
const numbersSubtract = document.createElement("p"); // create your elements
const totalSubtract = document.createElement("p");
const divSubtract = document.createElement("div");
const classDivSubtract = divSubtract.classList.add("subtract");
  
numbersSubtract.textContent = `Numbers to subtract: ${showEnteredNumbersSubtract}`; // fill with content
totalSubtract.textContent = `Total: ${showTotalSubtract}`;
  
// append divSubtract as the second child of body so it is not under the first div of addition
// then append the other parts of the subtraction to the divSubtract so add and subtract will be separate from each 
// other. or else subtract will become a child of add. you want them to be children of body and not of each other.
// in other words, add and subtract will be siblings
  
document.body.appendChild(divSubtract); // show the content
divSubtract.appendChild(numbersSubtract);
divSubtract.appendChild(totalSubtract);

// the multiiply function
const multiply = function(...futureNumbers) {
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

const showEnteredNumbersMultiply = enteredNumbers(50, -71, 5.1479, -123.41);
const showTotalMultiply = multiply(50, -71, 5.1479, -123.41);
console.log({showTotalMultiply});

const numberMultiply = document.createElement("p"); // create the elements
const totalMultiply = document.createElement("p");
const divMultiply = document.createElement("div");
const classDivMultiply = divMultiply.classList.add("multiply");

numberMultiply.textContent = `Numbers to multiply: ${showEnteredNumbersMultiply}`; // fill with content
totalMultiply.textContent = `Total: ${showTotalMultiply}`;

document.body.appendChild(divMultiply); // show the content
divMultiply.appendChild(numberMultiply);
divMultiply.appendChild(totalMultiply);

// the divide function is new. the 08_calculator hw  didn't have this one. 
const divide = function(...futureNumbers) {
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

const showEnteredNumbersDivide = enteredNumbers(10000, 1, 2, 3, 4, 5, 6, 7, 49, 59);
const showTotalDivide = divide(10000, 1, 2, 3, 4, 5, 6, 7, 49, 59);
console.log({showTotalDivide});

const numberDivide = document.createElement("p"); // create the elements
const totalDivide = document.createElement("p");
const divDivide = document.createElement("div");
const classDivDivide = divDivide.classList.add("divide");

numberDivide.textContent = `Numbers to divide: ${showEnteredNumbersDivide}`; // fill with content
totalDivide.textContent = `Total: ${showTotalDivide}`;

document.body.appendChild(divDivide); // show the content
divDivide.appendChild(numberDivide);
divDivide.appendChild(totalDivide);

*/

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

// seems nextNumber and initialAnswer can always be used over and over again with new values. nextNumber is for each new 
// number they want to add or subtract. and initialAnswer is what you need to send to the next operator function bc 
// your calculator should not evaluate more than a single pair of numbers at a time.  

// so far it seems the variables you need at the beginning are initialNumber, nextNumber and initialAnswer. when it does an 
// an operation on a pair of numbers, the initialNumber doesn't change. only the nextNumber and initialAnswer seems to change 
// and get constantly updated until the equals button is pressed.

// notice starting at line 342, the results of the operator on a pair of numbers is always put into initialAnswer. that is 
// because whatever operation is done on a pair of numbers, that result has to be sent to the next operation. and in the 
// meantime before they press equals, you can show the initialAnswer while they are entering the next number. 

// the pseudocode at this point for add and subtract is this:
// get two numbers. put the first number in initialNumber. the second one is put in nextNumber. if they press add or subtract, 
// then the addOperator() or subtractOperator() will do its job and send the results to initialAnswer. if they put another number, 
// then this new number updates nextNumber. if they press add or subtract again, then it will send the new number along with
// initialAnswer to the addOperator() or subtractOperator() and update initialAnswer. this keeps going until they press equals.

// next is to test numbers on multiply and divide.

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

let initialNumber = 0; // First number
let nextNumber = 0; // Second number, third number, fourth number, fifth number etc.
let initialAnswer = 0; // use this instead of initialAnswerAdd and initialAnswerSubtract
let initialOperator = "";
let nextOperator = "";

// numbers -91, 1205, -427, 6, -50, 49, -672 divide, add, subtract, multiply, subtract, add.
initialNumber = -91;
nextNumber = 1205;
initialAnswer = divideOperator(initialNumber, nextNumber);
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = -427;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 6;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${initialAnswer}`);

nextNumber = -50;
initialAnswer = multiplyOperator(initialAnswer, nextNumber);
console.log(`Result of fifth: ${initialAnswer}`);

nextNumber = 49;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of sixth: ${initialAnswer}`);

nextNumber = -672;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of seventh: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);


// numbers -91, 1205, -427, 6, -50, 49, -672 divide, add, subtract, multiply, subtract, multiply.
initialNumber = -91;
nextNumber = 1205;
initialAnswer = divideOperator(initialNumber, nextNumber);
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = -427;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 6;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${initialAnswer}`);

nextNumber = -50;
initialAnswer = multiplyOperator(initialAnswer, nextNumber);
console.log(`Result of fifth: ${initialAnswer}`);

nextNumber = 49;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of sixth: ${initialAnswer}`);

nextNumber = -672;
initialAnswer = multiplyOperator(initialAnswer, nextNumber);
console.log(`Result of seventh: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);


// numbers -91, 1205, -427, 6, -50, 49, -672 divide, add, subtract, multiply, subtract, divide.
initialNumber = -91;
nextNumber = 1205;
initialAnswer = divideOperator(initialNumber, nextNumber);
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = -427;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 6;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${initialAnswer}`);

nextNumber = -50;
initialAnswer = multiplyOperator(initialAnswer, nextNumber);
console.log(`Result of fifth: ${initialAnswer}`);

nextNumber = 49;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of sixth: ${initialAnswer}`);

nextNumber = -672;
initialAnswer = divideOperator(initialAnswer, nextNumber);
console.log(`Result of seventh: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);

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

let initialNumber = 0; // First number
let nextNumber = 0; // Second number, third number, fourth number, fifth number etc.
let initialAnswer = 0; // use this instead of initialAnswerAdd and initialAnswerSubtract
let initialOperator = "";
let nextOperator = "";

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

let i = 0;
const displayArray = []; // starts as 0 and 1, then 2 and 3, then 4 and 5. the first is always even. the second is always odd.
console.log(displayArray);
let operatorArray = 0; // it holds the operator but doesn't do anything until a pair is received in displayArray. then 
// after a pair is received, then it sends the pair to the operator 
console.log(operatorArray);


button7.addEventListener("click", (e) => { // when button 7 is clicked, it sends the value 7 to the display
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  const showInDisplay = e.target.innerText;
  console.log(showInDisplay); // text
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  // initialNumber = showInDisplay;
  // console.log(`initial: ${initialNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
  // nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);
  /*  
  try sending the number into an array for the display. so 0 would be 7, then the next number 8 would be 1. after you click 
  7, it sends it to index 0. then click multiply and that sends it to index 0 for an operator array. then click 8 and that 
  sends it to index 1 of the display array. then click equal and it does the operation of index 0 operator array?

  pseudocode: click 7. it sends 7 to displayArray as index 0. then click multiply which will call multiply and get index 0. 
  then click 8 which will send to displayArray as index 1. which will complete send index 1 to the multiply and return the 
  answer.

  */
});

button8.addEventListener("click", (e) => { // when button 8 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  // initialNumber = showInDisplay;
  // console.log(`initial: ${initialNumber}`);
  // nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button9.addEventListener("click", (e) => { // when button 9 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display. this will show in display in the html id show-numbers.
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  ///console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button4.addEventListener("click", (e) => { // when button 4 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button5.addEventListener("click", (e) => { // when button 5 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button6.addEventListener("click", (e) => { // when button 6 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button1.addEventListener("click", (e) => { // when button 1 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button2.addEventListener("click", (e) => { // when button 2 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button3.addEventListener("click", (e) => { // when button 3 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  //console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

button0.addEventListener("click", (e) => { // when button 0 is clicked
  const showInDisplay = e.target.innerText;
  display.textContent = showInDisplay; // put the value in the display
  //initialNumber = showInDisplay;
 // console.log(`initial: ${initialNumber}`);
 // nextNumber = showInDisplay;
 // console.log(`next: ${nextNumber}`);
  displayArray.push(showInDisplay);
  console.log(displayArray);
});

buttonDivide.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);;
  initialNumber = divideOperator(displayArray[i], );
  console.log(initialNumber);
});

buttonMultiply.addEventListener("click", (e) => { // when multiply is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // initialAnswer = multiplyOperator(initialNumber, nextNumber);
  // console.log(`result of multiply: ${initialAnswer}`);
  // nextAnswer = multiplyOperator(initialNumber, nextNumber);
  // initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);;
  /*  
  
  */
  // operatorArray = multiplyOperator(displayArray[0], displayArray[1]);
  initialNumber = multiplyOperator(displayArray[i], );
  console.log(initialNumber); // shows NaN until the second number is entered. then it does the multiplication

});

buttonSubtract.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);;
  initialNumber = subtractOperator(displayArray[i], );
  console.log(initialNumber);
});

buttonAdd.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);;
  initialNumber = addOperator(displayArray[i], );
  console.log(initialNumber);
});

buttonEquals.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  // initialNumber = showInDisplay;
  //console.log(`initial: ${initialNumber}`);
  //nextNumber = showInDisplay;
  // console.log(`next: ${nextNumber}`);;
  initialAnswer = divideOperator(initialNumber, displayArray[i+1]);
  // initialAnswer = multiplyOperator(initialNumber, displayArray[i+1]);
  // initialAnswer = subtractOperator(initialNumber, displayArray[i+1]);
  // initialAnswer = addOperator(initialNumber, displayArray[i+1]); // add seems to concatenate but the others seem to work. 
  // for add, it is bc it sees it as a string so need to convert to number? might as well convert all of them to numbers?
  console.log(initialAnswer);
  display.textContent = initialAnswer;

/*
testing each div, mult, sub manually by commenting and uncommenting each operation and only doing a pair of numbers at a time
which is displayArray index 0 and index 1. then using CL to test another pair. seems to work ok but for add, it concatenates
instead of treating them as numbers, it treats them as strings?

after you get add to work, see how to extend each operation to more than one pair of numbers. maybe a loop? bc you are 
storing the numbers in displayArray[], maybe advance the i and i+1 a little each time. so each odd is the first number and 
each even is the second number of a future pair. then try to do the operations on multiple pairs.

*/
});

buttonClear.addEventListener("click", (e) => { // when divide is clicked
  console.log(e.target); // full element with id, text etc
  console.log(e.target.innerText); // text only
  display.textContent = 0;
  displayArray.splice(0);
  console.log(displayArray);
});


