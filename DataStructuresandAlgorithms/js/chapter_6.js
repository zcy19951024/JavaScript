function Node(element) {
	this.element = element;
	this.next = null;
}

function LList() {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

//插入一个元素
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function findPrevious(item){
	var currNode = 	this.head;
	while ( (currNode.next != null) && (currNode.next.element != item) ){
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item){
	var preNode = this.findPrevious(item);
	if(preNode.next != null){
		preNode.next = preNode.next.next;
	}
}

function display() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		document.write(currNode.next.element + '&nbsp;');
		currNode = currNode.next;
	}
}

//测试程序
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlise", "Russellville");
cities.insert("Alma", "Carlise");
cities.display();
document.write('<br>');
cities.remove('Carlise');
cities.display();