/* ****************************** LINEAR SEARCH ***************************** */

let arr = [2, 3, 4, 10, 40];
let x = 10;

function findNumber(arr, target) {
   for(let i=0 ; i < arr.length ; i++)
   {
      if(arr[i] == target)
      {
        return i;
      }
   }
}

const result = findNumber(arr, x);

console.log(result);
