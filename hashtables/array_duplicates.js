// [ 1,3,4,6,3,1,6,9,1,3], 3
//(arr, count) => return new arr #s count times

const arrFixer = (arr, count) => {
  let hashtable = {};
  let newArr = new Array;
  for (let i = 0; i < arr.length; i++){
    if (!hashtable[arr[i]]){
      hashtable[arr[i]] = 1;
    } else {
       hashtable[arr[i]]++;
    }
  }
  // console.log("key is", key);
  for (key in hashtable){
    if (hashtable[key] === count){
      newArr.push(Number(key))
    }
  }
  return newArr;
}

arrFixer([ 1,3,4,6,3,1,6,9,1,3], 3); // [1,3]