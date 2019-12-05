/*--------------双向Queue类的定义和测试代码----------------*/
function Queue(){
		this.dataStore = [];
		this.enqueueFront = enqueueFront;
		this.enqueueBack = enqueueBack;
		this.dequeueFront = dequeueFront;
		this.dequeueBack = dequeueBack;
		this.front = front;
		this.back = back;
		this.toString = toString;
		this.empty = empty;
}

//尾部入队，就是在数组的末尾添加一个元素
function enqueueBack(element){
	this.dataStore.push(element);
}

//头部入队，就是在数组的头部添加一个元素
function enqueueFront(element){
	this.dataStore.splice(0,0,element);
}

//尾部出队，就是删除数组的最后一个元素
function dequeueBack(){
	return this.dataStore.splice(this.dataStore.length-1, 1);
}

//出队，就是删除数组的第一个元素
function dequeueFront(){
	return this.dataStore.shift();
}

//取出数组的第一个元素
function front(){
	return this.dataStore[0];
}
//取出数组的最后一个元素
function back(){
	return this.dataStore[this.dataStore.length-1];
}

function toString(){
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "&nbsp;"
	}
	return retStr;
}
//判断数组是否为空
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}	
}
//返回数组中元素的个数
function count(){
	return this.dataStore.length;
}

var q = new Queue();
q.enqueueFront("1");
q.enqueueFront("2");
q.enqueueBack("3");
q.enqueueBack("4");
document.write(q.toString());
document.write('<br>');

q.dequeueFront();
document.write(q.toString());
document.write('<br>');

q.dequeueBack();
document.write(q.toString());
document.write('<br>');
document.write('<br>');


/*---------------------------判断字符串是否是回文-------------------------*/
function isPalindrome(str){
	var queue = new Queue();
	for (var i=0; i<str.length; i++) {
		queue.enqueueFront(str[i]);
	}
	
	var newStr = "";
	while (!queue.empty()){
		newStr += queue.dequeueFront();
	}
	
	document.write(newStr);
	document.write('<br>');
	if(str == newStr){
		document.writeln(str + " 是回文");
	}else{
		document.writeln(str + " 不是回文");
	}
}

isPalindrome("racecar");
document.write('<br>');
isPalindrome("helloword");
