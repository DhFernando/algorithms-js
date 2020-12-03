
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
 
// note about bubble sort --> in this case 1st iteration bubble the largest num in array then loop it again



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

    let sortedArray = [ ...array ]
    
    if(sortedArray.length <= 1) return sortedArray
    
    let pivot = sortedArray[ sortedArray.length - 1 ]
    let leftArray = []
    let rightArray = []
    
    for (let i = 0; i < sortedArray.length -1; i++) {
        if( sortedArray[i] > pivot ) rightArray.push(sortedArray[i])
        else if(sortedArray[i] < pivot) leftArray.push( sortedArray[i] )
    }

    return [ ...quickSort(leftArray)  , pivot , ...quickSort(rightArray) ]

    
}
 
console.log( quickSort( [ 3, 32, 4, 6, 25, 1, 9 ] ) )


