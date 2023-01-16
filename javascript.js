// the below is from the 08_calculator hw. use this as your starting point. the hw didn't have a divide function. that will be 
// a new one.

// the add function
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
  }, 0); // the 0 is your initial val for the accumulator. if you don't have this, then it will use index 0 as the initial val 
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

let initialNumber = 0; // First number
let nextNumber = 0; // Second number, third number, fourth number, fifth number etc.
let initialAnswer = 0; // use this instead of initialAnswerAdd and initialAnswerSubtract
let initialAnswerAdd = 0; // maybe not use? 
// Result of the first operator; could be sum, subtract, mult or div. If another number is entered, then 
// need to send initialAnswer with the new number to the next operator.
let initialAnswerSubtract = 0; // maybe not use?
let nextAnswerAdd = 0; // maybe not use?
let nextAnswerSubtract = 0; // maybe not use?

let initialOperator = ""; // maybe not use?
let nextOperator = ""; // maybe not use?

// Testing on add and subtract for two numbers only
initialNumber = 88; 
nextNumber = 200;
let addOperatorResult = addOperator(initialNumber, nextNumber); 
console.log({addOperatorResult});

initialAnswerAdd = addOperatorResult; // This is put into initialAnswer if they want to add another number
console.log({initialAnswerAdd});

let subtractOperatorResult = subtractOperator(initialNumber, nextNumber);
console.log({subtractOperatorResult});

initialAnswerSubtract = subtractOperatorResult; // This is put into initialAnswer if they want to subtract another number
console.log({initialAnswerSubtract});

// Testing with a third number. This takes the initialAnswer above and does either add or subtract with a third number.
// nextNumber will constantly be updated. initialNumber is not used anymore until they start over again after pressing 
// equals.

nextNumber = 48; // the third number. this replaces the previous nextNumber
addOperatorResult = addOperator(initialAnswerAdd, nextNumber);
initialAnswerAdd = addOperatorResult; // this replaces the previous initialAnswerAdd if they want to add more
console.log({addOperatorResult});
console.log({initialAnswerAdd});

subtractOperatorResult = subtractOperator(initialAnswerSubtract, nextNumber);
initialAnswerSubtract = subtractOperatorResult; // this replaces the previous initialAnswerSubtract if they want to subtract more
console.log({subtractOperatorResult});
console.log({initialAnswerSubtract});

// seems nextNumber and intialAnswerAdd and initialAnswerSubtract will always be replaced by new numbers until the equals button 
// is pressed.

nextNumber = 58; // the fourth number. this replaces the previous number
addOperatorResult = addOperator(initialAnswerAdd, nextNumber);
console.log({addOperatorResult});
initialAnswerAdd = addOperatorResult; // this replaces the previous initialAnswerAdd
console.log({initialAnswerAdd});

subtractOperatorResult = subtractOperator(initialAnswerSubtract, nextNumber);
console.log({subtractOperatorResult});
initialAnswerSubtract = subtractOperatorResult; // this replaces the previous initialAnswerSubtract
console.log({initialAnswerSubtract});

// need to always update nextNumber and initialAnswerAdd and initialAnswerSubtract if they keep entering numbers. once equals 
// is pressed, then stop all functions.

// testing multiple numbers but instead of all add or all subtract, combine add and subtract. before we used 88, 200, 48 and 58.
// use these same numbers but mix up add and subtract

// add the first two, then subtract the third, then add the fourth
// see what happens when you don't have initialAnswerAdd and initialAnswerSubtract and just have initialAnswer
initialNumber = 88; // first number
nextNumber = 200; // second number
addOperatorResult = addOperator(initialNumber, nextNumber);
console.log({addOperatorResult});
initialAnswer = addOperatorResult; // the result of the operation is put in initialAnswer bc we need to send this to the new
// operator when they don't press equals
console.log({initialAnswer});

nextNumber = 48; // the third number
subtractOperatorResult = subtractOperator(initialAnswer, nextNumber);
console.log({subtractOperatorResult});
initialAnswer = subtractOperatorResult; // this replaces the previous answer when they don't press equals and want to do more 
// numbers
console.log({initialAnswer});

nextNumber = 58; // the fourth number
addOperatorResult = addOperator(initialAnswer, nextNumber);
console.log({addOperatorResult});
initialAnswer = addOperatorResult; // this replaces the previous answer when they don't press equals and want to do more 
// numbers
console.log({initialAnswer});

// seems nextNumber and initialAnswer can always be used over and over again with new values. nextNumber is for each new 
// number they want to add or subtract. and initialAnswer is what you need to send to the next operator function bc 
// your calculator should not evaluate more than a single pair of numbers at a time. 

// next add the first two, then subtract the third, then subtract the fourth. and keep doing differnt combinations and then 
// try with multiply and divide as well. then mix it all up and see what happens.

// same numbers 88, 200, 48 and 58. this time add first two, then subtract third and fourth.
initialNumber = 88;
nextNumber = 200;
addOperatorResult = addOperator(initialNumber, nextNumber); // first operation will be add
console.log(`Result of first two: ${addOperatorResult}`); // result of first two
initialAnswer = addOperatorResult; // storing answer to send to the next operator
console.log({initialAnswer});

nextNumber = 48; // at this point, only need to update nextNumber and initialAnswer
subtractOperatorResult = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${subtractOperatorResult}`);
initialAnswer = subtractOperatorResult;
console.log({initialAnswer});

nextNumber = 58;
subtractOperatorResult = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${subtractOperatorResult}`);
initialAnswer = subtractOperatorResult;
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);

// same numbers 88, 200, 48 and 58. this time subtract first two, then subtract third and add fourth.
initialNumber = 88;
nextNumber = 200;
initialAnswer = subtractOperator(initialNumber, nextNumber); // instead of using let subtractOperatorResult, put the answer 
// into initialAnswer and send that with the nextNumber to the next operator. it saves a step.
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = 48;
initialAnswer = subtractOperator(initialAnswer, nextNumber); // instead of using let subtractOperatorResult, put the answer 
// into initialAnswer and send that with the nextNumber to the next operator. it saves a step
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 58;
initialAnswer = addOperator(initialAnswer, nextNumber); // instead of using let addOperatorResult, put the answer 
// into initialAnswer and send that with the nextNumber to the next operator. it saves a step
console.log(`Result of fourth: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);

// lines 342 to 358 seem to work. something i realized is that you don't need let addOperatorResult and let subtractOperatorResult 
// bc you can put the answer in initialAnswer and it keeps updating. so when a new operator is called, all you need to do is 
// send the initialAnswer with the new number (nextNumber) that they entered. 

// so far it seems the variables you need at the beginning are initialNumber, nextNumber and initialAnswer. when it does an 
// an operation on a pair of numbers, the initialNumber doesn't change. only the nextNumber and initialAnswer seems to change 
// and get constantly updated until the equals button is pressed.

// same numbers 88, 200, 48 and 58. this time subtract first two, then subtract third and fourth.
initialNumber = 88;
nextNumber = 200;
initialAnswer = subtractOperator(initialNumber, nextNumber);
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = 48;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 58;
initialAnswer = subtractOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);

// same numbers 88, 200, 48 and 58. this time subtract first two, then add third and fourth.
initialNumber = 88;
nextNumber = 200;
initialAnswer = subtractOperator(initialNumber, nextNumber);
console.log(`Result of first two: ${initialAnswer}`);

nextNumber = 48;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of third: ${initialAnswer}`);

nextNumber = 58;
initialAnswer = addOperator(initialAnswer, nextNumber);
console.log(`Result of fourth: ${initialAnswer}`);
console.log(`Send to next operator along with new number if they enter another number: ${initialAnswer}`);

// notice starting at line 342, the results of the operator on a pair of numbers is always put into initialAnswer. that is 
// because whatever operation is done on a pair of numbers, that result has to be sent to the next operation. and in the 
// meantime before they press equals, you can show the initialAnswer while they are entering the next number. 

// the pseudocode at this point for add and subtract is this:
// get two numbers. put the first number in initialNumber. the second one is put in nextNumber. if they press add or subtract, 
// then the addOperator() or subtractOperator() will do its job and send the results to initialAnswer. if they put another number, 
// then this new number updates nextNumber. if they press add or subtract again, then it will send the new number along with
// initialAnswer to the addOperator() or subtractOperator() and update initialAnswer. this keeps going until they press equals.

// next is to test these numbers on multiply and divide





















