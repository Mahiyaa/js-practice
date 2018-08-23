function balancedBrackets(string) {
	const opening = '({[';
	const closing = ')}]';
	const matching = {
		']':'[',
		')':'(',
		'}':'{'
	};
	const stack = [];
	for(let i=0;i<string.length;i++){
		let curr = string[i];
		if(opening.includes(curr)) stack.push(curr);
		else if(closing.includes(curr)){
			if(stack.length){
				if(stack[stack.length-1] === matching[curr]) stack.pop();
				else return false;
			}
			else return false;
		}
	}
	return stack.length === 0;
}
