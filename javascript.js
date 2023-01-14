/*  
Need to have add, subtract, mulitply and divide functions. 

/home/jodin22sams/repos/javascript-exercises/08_calculator/calculator.js.

Reference the 08_calculator hw since those have add, subtract and multiply functions. Divide will be a new function. You will also 
need an operate function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated
at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student 
solution.

Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), 
followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should
then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), 
and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

*/

// the below is from the 08_calculator hw. use this as your starting point. you will need to create a divide function.

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

// the divide function. for this one, do it slightly different from your previous functions where you just take a single number 
// at a time. the previous functions from the 08_calculator hw is taking multiple numbers and that is why you had rest parameters.

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
divMultiply.appendChild(numberDivide);
divMultiply.appendChild(totalDivide);

/*  
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an 
operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with 
the ‘solution’ to the operation.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with
them. Don’t feel bad if it takes you a while to figure out the logic.

the calculator project is taking one number, then the operator is pressed, then another number and then another operator and 
then another number and another operator and so on and so on until the equals button is pressed. when the equals is pressed, 
then an answer shows.

*/

/*  
pseudocode to start out. enter a number and store that number. then press an operator. it could be add, subtract, multiply or 
divide. then enter another number and store that number also. then take the first and second number and do whatever operator was 
pressed. then take that answer and store it. 

if equals is pressed, then show the answer. if equals is not pressed, then take the 
next operator that is pressed and the next number. that latest number with the first stored answer will have an operation done 
to it. if equal is pressed, then show the answer. if equal is not pressed, then store the answer and get the next operator and 
the next number. then do the operation on the latest answer and number. at this point it seems to repeat until equal is pressed.

*/

// take the first number and store it

const addOperator = function(...futureNumbers) { 
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

const subtractOperator = function(...futureNumbers) {
  console.log(`function received: ${futureNumbers}`);
  const toSubtract = futureNumbers; // the list of numbers is in an array format but has no name yet. now give it a name so you 
  // can reference the array's name and use reduce or any other type of array method
  console.log(`numbers to subtract: ${toSubtract}`); // verifies the same list of numbers from line 85
  const total = toSubtract.reduce((initialVal, nextVal) =>{
    return initialVal - nextVal;
  }); // unlike the addition, here we don't give a starting value for initialVal aka accumulator
  return total;
};

let initialNumber = 0;
let nextNumber = 0;
let initialAnswer = 0;
let nextAnswer = 0;

let initialOperator = "";
let nextOperator = "";

initialNumber = 8;
nextNumber = 200;
const addOperatorResult = addOperator(initialNumber, nextNumber); 
console.log({addOperatorResult});

initialAnswer = addOperatorResult;
console.log({initialAnswer});

const showSubtractResult = subtractOperator(initialNumber, nextNumber);
console.log({showSubtractResult});

initialAnswer = showSubtractResult;
console.log({initialAnswer});


