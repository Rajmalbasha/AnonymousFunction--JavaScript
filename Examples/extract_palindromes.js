var input_str = ['eye',101,9999,'rajmal']
let check_item_is_palindrome = function(item)
{
    let str = item
    if(typeof(item)==='number') 
    {
        str = String(item)
    }
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
let extract_palindromes_from_array = function()
{
    let output_arr = input_str.filter(function(item)
    {
        if (typeof(item)==='string' || typeof(item)==='number') 
        {
           if (check_item_is_palindrome(item))
           {
               return item
           }
            
        }
        else
        {
            console.log(item,"can't be checked for palindrome cause it is neither string nor number")
        }
    })
    console.log(output_arr)
}
extract_palindromes_from_array(input_str)