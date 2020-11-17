

    let input_arr = [10,20,21,32,35,37,'hello']
    let extract_odd_values = function()
    {
        let odd_arr = input_arr.filter(function(item){
            if(typeof(item)==='number' && item%2!= 0)
            {
               return item
            }
            else if(typeof(item) != 'number')  // Error handling 
            {
                console.log( item,"in the input array is not an number and the type of the element is", typeof(item))
                return
            }
        })
        console.log("List of all the odd numbers in the array is :",odd_arr)
    }
    extract_odd_values(input_arr) 

  



