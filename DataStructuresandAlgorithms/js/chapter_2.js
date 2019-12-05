//var number = 3;
//var arr = [4,5,6];
//console.log(Array.isArray(number));
//console.log(Array.isArray(arr));

//var numbers = [1,2,3,4,5];
//var sum = 0;
//for (var i=0; i<numbers.length; ++i) {
//	sum += numbers[i];
//	console.log(i);
//}
//console.log(sum);

//var nums = [];
//for (var i=0; i<100; i++) {
//	nums[i] = i+1;
//}
//var samenums = nums;
//nums[0] = 400;
//console.log(samenums[0]);

//深拷贝
//function copy(arr1 , arr2){
//	for (var i=0; i<arr1.length; i++) {
//		arr2[i] = arr1[i];
//	}
//}
//var nums = [];
//for (var i=0; i<100; i++) {
//	nums[i] = i+1;
//}
//var samenums = [];
//copy(nums, samenums);
//nums[0] = 400;
//console.log(samenums[0]);


//forEach迭代器
//function square(num){
//	document.write(num + '&nbsp;&nbsp;' + num*num + '<br>');
//}
//
//var nums = [1,2,3,4,5,6,7,8];
//nums.forEach(square);

//every迭代器
//function isEven(num){
//	return num % 2 == 0;
//}
//var nums = [2,4,6,8];
//document.write(nums.every(isEven));

//some迭代器
//function isEven(num){
//	return num % 2 == 0;
//}
//var nums = [1,3,5,7];
//document.write(nums.some(isEven));

//reduce迭代器
//function add(runningTotal, currentValue){
//	return runningTotal + currentValue;
//}
//var nums = [1,2,3,4,5,6,7,8,9,10];
//var sum = nums.reduce(add);
//document.write(sum);

//使用reduce连接数组元素
//function concat(accumulatedString, item){
//	return accumulatedString + item;
//}
//var words = ['the ', 'quick ', 'brown ', 'fox '];
//var sentence = words.reduceRight(concat);
//document.write(sentence);

//使用map迭代器生成新的数组
//function curve(grade){
//	return grade+5;
//}
//var grades = [77,65,81,92,83];
//var newgrades = grades.map(curve);
//document.write(newgrades);


function isEven(num){
	return num % 2 == 0;
}

function isOdd(num){
	return num % 2 != 0;
}

var nums = [];
for (var i=0; i<20; i++) {
	nums[i] = i+1;
}
var evens = nums.filter(isEven);
document.write(evens);
document.write('<br>');
var odds = nums.filter(isOdd);
document.write(odds);
