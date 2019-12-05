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
//出队，就是删除数组的第一个元素
function dequeue(){
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
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
document.write(q.toString());
document.write('<br>');
document.write("Front of queue is:" + q.front());
document.write('<br>');
document.write("Back of queue is:" + q.back());

/*----------------基数排序-----------------*/
document.write('<br><br>');
function distribute(nums,queues,n,digit){
	for (var i=0; i<n; ++i) {
		if(digit == 1){
			//各位数字入队
			queues[nums[i]%10].enqueue(nums[i]);
		}else{
			//十位数字入队
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}	
}

//收集队列中的数字放在数字nums中
function collect(queues,nums){
	var i=0;
	for (var digit=0; digit<10; ++digit) {
		while (!queues[digit].empty()){
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr){
	for (var i=0; i<arr.length; ++i) {
		document.write(arr[i] + "&nbsp;");
	}
}

//初始化9个队列
var queues = [];
for (var i=0; i<10; i++) {
	queues[i] = new Queue();
}
//初始化10个二位整数
var nums = [];
for (var i=0; i<10; ++i) {
	nums[i] = Math.floor(Math.random()*100);
}

document.write('排序之前');document.write('<br>');
dispArray(nums);
document.write('<br>');
//按照个位数字入相应的队列
distribute(nums, queues, 10, 1);
//收集队列中的数字放在数组nums中
collect(queues, nums);
//按照十位数字如相应的队列
distribute(nums, queues, 10, 10);
//手机队列中的数字放在nums中
collect(queues, nums);
document.write("排序之后");document.write('<br>');
dispArray(nums);


