function linerSearch( array , x ){
    let i = 0
    while( i < array.length  ){
        if( array[i] == x ) return true
        i++;
    }
    return false
}

console.log( linerSearch( [1,2,3,4,5]  , 4) )


function binarySearch(array , x){
    let left = 0 , right = array.length - 1;

    while( left <= right ){
        let mid = Number.parseInt( ( left + right ) / 2 )
        if(array[mid] == x){ return true }
        else if( x > array[mid] ){
            left = mid + 1
        }else if( x < array[mid] ) {
            right = mid - 1
        }
    } return false
}

// console.log( binarySearch( [1,2,3,4,5] , 89 ) );




