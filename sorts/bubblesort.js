function bubbleSort(array) {
  let switched;
	do {
    switched = false;
		for (let i = 0; i < array.length - 1; i++){
			if (array[i + 1] < array[i]){
				let first = array[i+1]; //5
				let second = array [i]; //8
				array[i] = first;  //5
				array[i+1] = second; //8
				switched = true; 

			}
		}
		// console.log('array:', array)
		// if (!switched) return array;
	}
	while (switched)
	// console.log("arr is", array);
	return array 
}
bubbleSort([8,5,2,9,5,6,3]);
// bubbleSort([2,1]);