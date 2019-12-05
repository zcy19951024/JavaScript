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
}

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


var cities = new LList();
cities.insert('Conway','head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma' , 'Carlisle');
cities.display();
document.write('<br>');
cities.remove('Carlisle');
cities.display();
document.write('<br>');
cities.dispReverse();

