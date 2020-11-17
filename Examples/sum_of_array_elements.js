let input_arr = ['rajmal','basha',30,40,50]
let sum_of_all_array_elements = function()
{
   const sum = input_arr.reduce(function(result,item)
   {
       if(typeof(item)==='number')
       {
        return result+item
       }
       else
       {
           console.log(item,"is not a number finding sum excluding the item ")
           return result+0
       }
     
   },0)
   console.log(sum)
}
sum_of_all_array_elements(input_arr)