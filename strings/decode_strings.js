/* decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guarenteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab".

For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa". */ 

// function decodeString(s) {
//   // let arr = s.split("");
//   // return arr;
// }

// function decodeString(str){
// 	let regex = /(\d+)\[([a-z]*)\]/g;
// 	let newStr = str.replace(regex, (match, amount, part) => part.repeat(amount));
// 	let recall = regex.test(newStr);
// 	if(recall){
// 		return decodeString(newStr);
// 	}
// 	return newStr;
// }

// function decodeString(s) {
//   let regex = /(\d+)\[([a-z]*)\]/g;
//     while (s.includes("[")) {
//         s = s.replace(/(\d+)\[([a-z]*)\]/, (match, amount, part) => part.repeat(amount));
//     }
//     return s;
// }

function decodeString(s) {
  let regex = /(\d+)\[([a-z]*)\]/g;
    while (s.includes("[")) {
        s = s.replace(regex, (match, amount, part) => part.repeat(amount));
    }
    return s;
}

decodeString("4[ab]");
decodeString("2[b3[a]]");