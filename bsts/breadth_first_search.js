class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
		//console.log("this is this: ", this)
		const queue = [this];
		console.log("this is our Q: ", queue);
		while(queue.length > 0) {
			const current = queue.shift();

		  array.push(current.name) //pushes in the root/parent node
	
			for(let child of current.children){
				queue.push(child)
			}
		}
		console.log("this is our array with all nodes : ", array)

		return array;
  }
}