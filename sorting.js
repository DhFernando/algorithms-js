
function bubbleSort(array){
    for(let j = array.length -1 ; j > 0 ; j -- ){
       for( let i =0 ; array.length > i+1 ; i++ ){
        if( array[i] > array[i+1] ){    
            let temp = array[i]
            array[i] = array[i+1]
            array[i + 1] = temp
        }

        console.log(array);
    } 
    }
    
    
    console.log( 'Final result -->' + array );
}
//  bubbleSort( [3,32,4 , 6, 1 , 9] )

// ------------------ //

function selectionSort(array) {
    for( let j = 0  ; array.length > j ; j++) {
        let currentMin = array[j]

        for( let i = j + 1 ; array.length > i ; i ++ ){
            if( array[j] > array[i] ){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
            console.log((array));
        }
    }
    console.log( 'Final result -->' + array );

}

// selectionSort( [3,32,4 , 6, 1 , 9] ) 

// ------------------------ //

function insertionSort(array){
    for( let j = 0 ; array.length > j ; j++ ){
        if( array[ j ] > array[ j + 1 ] ){
            let hole = j + 1
            while( hole > 0 ){

                if( array[hole] < array[hole -1] ){
                    let temp = array[hole]
                    array[hole] = array[hole - 1 ]
                    array[hole - 1] = temp
                }

                hole -- ;
            }
        }

        console.log(array);
    }
}

// insertionSort( [3,32,4 , 6, 1 , 9] )

function recursive(n){ // this also for the trangle 
    if(n == 1) return 1
    else{
        return n * recursive( n - 1 )
    }
}

// console.log( recursive(4) );


function quickSort( array ){
    
    if(array.length <= 1) return array
    
    let pivot = array[ array.length - 1 ]
    let leftArray = []
    let rightArray = []
    
    for (let i = 0; i < array.length -1; i++) {
        if( array[i] > pivot ) rightArray.push(array[i])
        else if(array[i] < pivot) leftArray.push( array[i] )
    }

    return [ ...quickSort(leftArray)  , pivot , ...quickSort(rightArray) ]

}
 
// console.log( quickSort( [ 3, 32, 4, 6, 25, 1, 9 ] ) )


// --------- merge sort ------- //

 function mergeSort(array){

    if( array.length <= 1 ) return array

    let midPoint = Number.parseInt( array.length / 2 )

    let leftArray = array.slice(0 , midPoint)
    let rightArray = array.slice(midPoint)

    return merge( mergeSort( leftArray ) , mergeSort( rightArray ) )

 }

 function merge( leftArray , rightArray ){
     const results = []

     while (leftArray.length && rightArray.length){
         if( leftArray[0] <= rightArray[0] ){
             results.push(leftArray.shift())
         }else if( leftArray[0] > rightArray[0] ){
            results.push(rightArray.shift())
        }
     }
     return results.concat( leftArray , rightArray )
 }

 console.log( mergeSort( [ 3, 32, 4, 6, 25, 1, 9 ] ) )


// ---------------------------- //


