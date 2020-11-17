let input_arr = [1,2,3,4,5]
let deep_clone_input_arr = [...input_arr]
let rotate_count = 2
let rotate_array_right = function(arr,count)
{
    while (count>0)
    {
        arr.unshift(arr.pop())
        count--
    }
    console.log(arr)
}
rotate_array_right(deep_clone_input_arr,rotate_count)
console.log(input_arr)



