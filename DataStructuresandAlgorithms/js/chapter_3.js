/*-----------------------------------表结构-------------------------------------*/
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; //初始化一个空数组来保存列表元素
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;

	//给列表添加元素，给列表的下一个位置增加一个新的元素，这个位置刚好等于listSize的值
	function append(element) {
		this.dataStore[this.listSize++] = element;
	}
		
	//在列表中查找一个元素，对数组对象dataStore迭代，查找给定的元素，如果找到就返回钙元素在列表中的位置
	function find(element) {
		for(var i = 0; i < this.dataSource.length; ++i) {
			if(this.dataSource[i] == element) {
				return i;
			}
			return -1;
		}
	}

	//从列表中删除元素，先在列表中找到该元素，然后删除它，并且调整底层的数据对象以填补钙元素留下的空白，slice()方法简化这个过程
	function remove(elemment) {
		var foundAt = this.find(elemment);
		if(foundAt > -1) {
			this.dataSource.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	}
	
	//返回列表中的元素个数
	function length(){
		return this.listSize;
	}
	
	function toString(){
		return this.dataStore;
	}
	
	//插入元素，先找到要插入的位置，然后插入一个元素listSize自增
	function insert(element, after){
		var insertPos = this.find(after);
		if(insertPos > -1){
			this.dataStore.splice(insertPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	}
	
	//清空列表中所有元素，指针指向第一个
	function clear(){
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}
	
	//判断给定值是否在列表中
	function contains(element){
		for (var i=0; i<this.dataStore.length; ++i) {
			if(this.dataStore[i] == element){
				return true;
			}
		}
		return false;
	}
	
	//回到第0个
	function front(){
		this.pos = 0;
	}
	
	//到最后一个
	function end(){
		this.pos = this.listSize - 1;
	}
	
	//上一个，注意这里不判断边界
	function prev(){
		--this.pos;
	}
	
	//下一个，注意这里不判断边界
	function next(){
		++this.pos;
	}
	
	//当前指针
	function currPos(){
		return this.pos;
	}
	
	//定位到位置
	function moveTo(position){
//		if( position>-1 && position<this.listSize ){
			this.pos = position;
//		}
	}
	
	//返回当前元素
	function getElement(){
		return this.dataStore[this.pos];
	}
}

var names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

for(names.front(); names.currPos() < names.length(); names.next()) {
	document.writeln(names.getElement());
}
document.write('<br>');
for(names.end(); names.currPos() >= 0; names.prev()) {
	document.writeln(names.getElement());
}

/*-----------------------------------栈结构-------------------------------------*/
document.write('<br><br>');

//使用数组dataStore保存站内元素，构造函数将其初始化为一个空数组。
//变量top定义栈顶的位置，构造时初始化为0，表示栈的起始位置为0
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	this.printElement = printStack;

	//注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就被放在top的当前位置对应的位置，同时top自加1，指向下一个位置
	function push(element){
		this.dataStore[this.top++] = element;
	}
	//返回栈顶元素，同时top的位置减1
	function pop(){
		return this.dataStore[--this.top];
	}
	//peek()方法返回数组的第top-1个位置的元素，即栈顶元素
	function peek(){
		return this.dataStore[this.top-1];
	}
	//将top的值设置0，即清空一个栈
	function clear(){
		this.top = 0;
	}
	//返回变量top的值即为栈内元素的个数
	function length(){
		return this.top;
	}
	
	//输出栈内元素
	function printStack(){
		while (this.top>0){
			document.writeln(this.pop()+"&nbsp;&nbsp;");
		}
	}
}

var s = new Stack();
s.push("David");
s.push("Baymond");
s.push("Bryan");
document.writeln("length:" + s.length());
document.write('<br>');
document.writeln(s.peek());
document.write('<br>');
var popped = s.pop();
document.writeln("the popped element is:" + popped);
document.write('<br>');
document.writeln(s.peek());
document.write('<br>');
s.push("Cynthia");
document.writeln(s.peek());
document.write('<br>');
s.clear();
document.writeln("length:" + s.length());
document.write('<br>');
document.writeln(s.peek());
document.write('<br>');
s.push("Clayton");
document.writeln(s.peek());
document.write('<br><br>');
/*-----------------------------------使用栈结构求任意数组的任意进制数-------------------------------------*/
function mulBase(num,base){
	var s = new Stack();
	do{
		s.push(num % base);
		num = Math.floor( num /= base );
	}while(num>0);
	var converted = "";
	while (s.length()>0){
		converted += s.pop();
	}
	
	return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
document.writeln(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
newNum = mulBase(num, base);
document.writeln(num + " converted to base " + base + " is " + newNum);
document.write('<br><br>');
/*-----------------------------------使用栈结构判断字符串是否是回文字符串-------------------------------------*/
function isPalindrome(word){
	var s = new Stack();
	for (var i=0; i<word.length; ++i) {
		s.push(word[i]);
	}
	var reword = "";
	while(s.length()>0){
		reword += s.pop();
	}
	if(word == reword){
		return true;
	}else{
		return false;
	}	
}

var word = "hello";
if(isPalindrome(word)){
	document.writeln(word + " is a palindrome.");
}else{
	document.writeln(word + " is not a palindrome");
}
word = "racecar";
if(isPalindrome(word)){
	document.writeln(word + " is a palindrome.");
}else{
	document.writeln(word + " is not a palindrome");
}
document.write('<br><br>');

/*-----------------------------------使用栈结构模拟递归-------------------------------------*/
function fact(n){
	var s = new Stack();
	while (n>1){
		s.push(n--);
	}
	var product = 1;
	while (s.length()>0){
		product *= s.pop();
	}
	return product;
}
document.writeln(fact(5));

/*-------------------栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置---------------------*/
document.write('<br><br>');
function isMatch(str){
	var left = "({[";
	var right = ")}]";
	var s = new Stack();
	var i = 0;
	while (str[i]){
		//左符号入栈
		if(left.indexOf(str[i])>-1){
			s.push(str[i])
		}
		//遇到右括号
		else if( right.indexOf(str[i])>-1 && right.indexOf( str[i] ) == left.indexOf( s.peek()) ){
			s.pop();
		}
		i++
	}
	
//	document.writeln( s.peek() );
	if(s.length() == 0){
		document.writeln(str + " is match success");
	}else{
		document.writeln(str + " is not match");
	}
}

isMatch("2.3 + {23 / 12 + (3.14159×0.24)");

/*-------------------栈将中缀表达式转换成后缀表达式-------------------*/
document.write('<br><br>');
function suffixExpression(){
	var str = 'a+b*c+(d*e+f)*g';
	var stack = new Stack();
	var outStack = new Array();
	for (var i=0; i<str.length; ++i) {
		if(')' == str[i]){
			while (true){
				var top = stack.peek();
				stack.pop();
				if('(' != top){
					outStack[outStack.length] = top;
				}else{
					break;
				}
			}
		}else if(['-','+'].indexOf(str[i])>-1){
			if(['*','/'].indexOf(stack.peek())>-1){
				while (['*','/'].indexOf(stack.peek())>-1){
					outStack[outStack.length] = stack.peek();
					stack.pop();
				}
				outStack[outStack.length] = str[i];
			}else{
				stack.push(str[i]);
			}
		}else if(['(','*','/'].indexOf(str[i])>-1){
			stack.push(str[i]);
		}else{
			outStack[outStack.length] = str[i];
		}		
	}
	
	for (var i=0; i< outStack.length; i++) {
		document.write(outStack[i]);
	}
	

}
suffixExpression();
/*-------------------用栈结构求后缀表达式的值-------------------*/
document.write('<br><br>');
function countSuffixExpression(){
	var str = '6523+8*+3+*';
	var stack = new Stack();
	for (var i=0; i<str.length; i++) {
		if(isNaN(str[i])){
			stack.push( eval( stack.pop() + str[i] + stack.pop()) );
		}else{
			stack.push(str[i])
		}
	}
	
	document.write(stack.pop());
}
countSuffixExpression();

/*---------------------佩兹糖果盒问题-------------------*/
function candy(){
	var candy = Array('red','blue','yellow','red','brown');
	
}
