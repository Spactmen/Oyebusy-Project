var unsortedArray = [5,4,3,2,1]
something(unsortedArray)


function something (array){
    let count = 0
    let sortedArray = array.sort()
    const sum = sortedArray.reduce((p,c) =>  p+c )
    const average = sum/sortedArray.length;
    //Finding no.of times the average is repeated in given element
    for(let i= 0;i<sortedArray.length; i++){
       if(sortedArray[i]===average){
        count= count+1;
    }
   }
   console.log(`The Average of given array is ${average} and is repeated ${count} times`)
}


