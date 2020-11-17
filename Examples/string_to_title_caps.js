var string_arr =['rajmal','basha','shaik']
let convert_array_of_strings_to_title_caps = function(){
 let output_arr = string_arr.map(function(item){
    if (typeof(item)==='string') // verifying type compatability before converting
    {
         item = item.toLowerCase()
        return item.charAt(0).toUpperCase() + item.slice(1)
    }
    else
    {
        console.log(item,"is not a string")
        
    }
})
 console.log(output_arr)
}
conevrt_array_of_strings_to_title_caps(string_arr)