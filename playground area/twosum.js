
const array = [3,4,5,6,7];
const target = 10;

const result = function(arr, target)
{
   for(let i = 0; i < arr.length ; i++ )
   {
      for (let j = i++; j < arr.length; j++) 
      {
        if(arr[j] === target - arr[i])
        {
           return [i,j];   
        }
      }
   }
   return null;
}
 


console.log(result(array,target));
