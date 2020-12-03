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

console.log( binarySearch( [1,2,3,4,5] , 89 ) );

