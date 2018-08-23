###
Find the closing parenthesis when given the index of the opening parenthesis
###

function findClosingParen(str, index){
  let counter = 0;
  for(let i=index; i<str.length;i++){
    if(str[i] === '(') counter++
    if(str[i] === ')') counter--
    if(counter === 0) return i;
  }
}

findClosingParen("My string (has many (many (many)) different (parenthesis))!", 20) // 32