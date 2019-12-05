/**
 * 实现在链表中向前移动n个节点和向后移动n个节点
 * 
 * */

//链表节点
function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}

//链表
function LList(){
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.remove = remove;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
	//当前节点就是头节点
	this.currentNode = this.head;
	//从链表开头向前移动n个节点
	this.advance = advance;
	//从链表某个节点向后回退n个节点
	this.back = back;
	//显示当前节点
	this.show = show;
}

//倒序输出链表中的所有节点
function dispReverse(){
	var currNode = this.head;
	currNode = this.findLast();
	while (!(currNode.previous == null)){
		document.write(currNode.element + '&nbsp;');
		currNode = currNode.previous;
	}
}

//找到最后一个节点
function findLast(){
	var currNode = this.head;
	while (!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}

//删除某一个节点
function remove(item){
	var currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

//打印所有链表节点
function display(){
	var currNode = this.head;
	while (!(currNode.next == null)){
		document.write(currNode.next.element + '&nbsp;');
		currNode = currNode.next;
	}
}

//找到某一个节点
function find(item){
	var currNode = this.head;
	while (currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

//插入某一个节点
function insert(newElement , item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

//在链表中向前移动n个节点
function advance(n){
	while ((n>0) && !(this.currentNode.next==null)){
		this.currentNode = this.currentNode.next; 
		n--
	}
}

//在链表中向后移动n个节点
function back(n){
	while (n>0 && !(this.currentNode.element=='head')){
		this.currentNode = this.currentNode.previous;
		n--;
	}
}

//显示当前节点
function show(){
	document.write(this.currentNode.element);
}

var cities = new LList();
cities.insert('Conway','head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma' , 'Carlisle');
cities.insert('dezhou' , 'Alma');
cities.insert('alasijia' , 'dezhou');
cities.display();
document.write('<br>');

cities.show();
cities.advance(4);
document.write('<br>');
cities.show();
cities.back(2);
document.write('<br>');
cities.show();


