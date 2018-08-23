class BST{
  constructor(value){
    this.root = value;
    this.left = null;
    this.right = null;
  }
  //contains
  //insert
  //traverse (which order)
  findMin(){
    if(this.left){
      return this.left.findMin()
    }
    else return this.root;
  }
  findMax(){
    if(this.right){
      return this.right.findMax()
    }
    else return this.root;
  }
}