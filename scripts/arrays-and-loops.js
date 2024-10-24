
// Program removes the last two "eggs" elements from foods array
function removeEggs(foods) {
  let reversedFoodsArray = foods.reverse(); // '.reverse() reverses the order of the array
  let foodsArray = [];
  let count = 0; // To keep count of the number of elements removed
  for (i = 0; i < reversedFoodsArray.length; i++) {
    if (reversedFoodsArray[i] === "eggs") {
      if (count < 2) {
        count++;
        continue; // skips "eggs"
      }
    }
    foodsArray.push(reversedFoodsArray[i]);
  }

  console.log(foodsArray.reverse());
}

const bachelorsKitchen = ["flour", "eggs", "greens", "eggs", "beef", "eggs", "chicken", "eggs"];
removeEggs(bachelorsKitchen);



/*
const votes = [7, 5, 4, 8, 22];

function doubleArray(nums) {
  const numsDoubled = [];

  for (i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
  }
  console.log(numsDoubled);
}

doubleArray(votes);




let c = 1;

while (c <= 10) {
  if (c % 3 === 0) {
    c++;
    continue;
  }
  console.log(c);
  c++;
}



function minMax(nums) {
  let min = nums[0];
  let max = nums[0];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  console.log(`Minimum: ${min}\nMaximum: ${max}`)
}

minMax([2, 4, 14, -1, -3, -9])





function minMax(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  console.log(`Minimum: ${min}\nMaximum: ${max}`);
}

minMax([-5, 2, 0, 4, 7, 11]);


let marks = [25, 30, 35, 40]

for (i = 0; i < marks.length; i++) {
  marks[i] += 1;
}

console.log(marks);


for (i = 0; i <= 10; i += 2) {
  console.log(i);
}




let i = 2;

while (i <= 10) {
  console.log(i);
  i++;
}

for (i = 1; i <= 10; i++) {
  console.log(i)
}




const nums = [9, 20, 30, 40, 75];

nums[2] = 99;
console.log(`Array: ${nums}`);

function getLastValue(array) {
  const lastValue = array[array.length - 1];
  console.log(`Last value: ${lastValue}`);
}

getLastValue(nums);

function arraySwap(array) {
  let firstValue = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstValue;
  console.log(`Swapped array: ${array}`)
}

arraySwap(nums);
*/