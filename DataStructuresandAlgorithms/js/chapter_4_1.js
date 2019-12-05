/*--------------Queue类的定义和测试代码----------------*/
function Queue(){
		this.dataStore = [];
		this.enqueue = enqueue;
		this.dequeue = dequeue;
		this.front = front;
		this.back = back;
		this.toString = toString;
		this.empty = empty;
}

//入队，就是在数组的末尾添加一个元素
function enqueue(element){
	this.dataStore.push(element);
}
//出队，判断优先级删除，注意这里用的是数组的splice方法，不是slice方法
function dequeue(){
	var priority = this.dataStore[0].code;
	var fromIndex = 0;
	for (var i=1; i<this.dataStore.length; ++i) {
		if (this.dataStore[i].code < priority) {
			fromIndex = i;
		}
	}
	return this.dataStore.splice(fromIndex, 1);
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
		retStr += "病人：" + this.dataStore[i].name + " 优先级:" + this.dataStore[i].code + "<br>"
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

/*----------------基数排序-----------------*/


function Patient(name, code){
	this.name = name;
	this.code = code;
}
var p = new Patient('smith', 5);
var ed = new Queue();
ed.enqueue(p);

p = new Patient('jones', 4);
ed.enqueue(p);

p = new Patient('fehrendbach', 6);
ed.enqueue(p);

p = new Patient('brown', 1);
ed.enqueue(p);

p = new Patient('ingram', 1);
ed.enqueue(p);

document.write(ed.toString());

var seen = ed.dequeue();
document.write('<br>');
document.write("服务病人：" + seen[0].name);

document.write('<br>');
document.write(ed.toString());

seen = ed.dequeue();
document.write('<br>');
document.write("服务病人：" + seen[0].name);

document.write('<br>');
document.write(ed.toString());


seen = ed.dequeue();
document.write('<br>');
document.write("服务病人：" + seen[0].name);

document.write('<br>');
document.write(ed.toString());