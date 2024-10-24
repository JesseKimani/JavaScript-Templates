/*
const multiply = (num1, num2) => {
  console.log(num1 * num2);
};
multiply(2,8);

const multiply = (num1, num2) => console.log(num1 * num2);
multiply(3,4);
*/

// Using 'filter' to loop through an array
console.log([2, -3, 4, -1, 8].filter((value, index) => {
  // Creates a new array that meets this condition
  if (value >= 0) {
    return true;
  } else {
    return false;
  }

  return value >= 0; // Alternative for the same
}));

// Using 'map' to loop theough an array
console.log([2, -3, 5, 7].map((value, index) => {
  return value * 2; // Transforms the original array to a new array
}));


//Best way to use html 'onclick'
const buttonElement = document.querySelector('.js-button');
buttonElement.addEventListener('click', () => {
  console.log("Click");
});

buttonElement.addEventListener('click', () => {
  console.log('Click 2')
});

/*
const oneParam = (param1) => {
  console.log(param1 + 5)
};
oneParam(10);

const oneLine = () => { return (5 + 2)}; // Brackets are optional
console.log(oneLine());


//'forEach' loops through an array
[
  'make coffee', 'write code', 'sleep'
].forEach((value, index) => { //Arrow function option
  console.log(`${index}: ${value}`);
})


// Waits a specific amount of time before running
setTimeout(function() {
  console.log("7s Timeout")
}, 7000);


// Keeps running in the future in intervals
setInterval(function() {
  console.log("3s interval")
}, 3000)
*/

// Using 'forEach' to loop through an array and count positive numbers
function countPositive(nums) {
  let count = 0;
  nums.forEach((value, index) => {
    if (value >= 0) {
      count++;
    }
  });
  console.log(`Positive numbers: ${count}`);
}

countPositive([8, -2, 3, -5, 7, 9]);

/*
// Using map to map an array to a new array
function addNum(array, num) {
  console.log(array.map((value, index) => {
    return value + num;
  }));
}

addNum([8, -4, 5, -12, 55, 90], 2);
*/

// Using 'filter' to remove a string 'egg' from an array
function removeEgg(foods) {
  console.log(foods.filter((value, index) => {
    if (value === 'egg') {
      foods.slice(value, index); // To be confirmed
    }
  }));
};

removeEgg(['fruits', 'egg', 'beef', 'egg', 'fish', 'chicken wings']);
