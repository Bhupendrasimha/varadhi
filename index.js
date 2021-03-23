//Time complexity =O(n)
//Space complexity=O(1)

function minMaxSum(array) {
    var sum = array[0]
      var  min = array[0]
       var max = array[0]
       console.log(min,max)
        
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]){ 
            min = array[i]
        }
        else if (max < array[i]) {
            max = array[i]
        }
    }

    return `min=${sum - max} and max= ${sum - min}`
}

console.log(minMaxSum([1, 3, 5, 7, 9]));