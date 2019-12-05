//function showScope(){
//	var scope = 'local';
//	return scope;
//}
//var scope = 'global';
//console.log(scope);
//console.log(showScope());
//for (var i = 1; i <= 10; ++i ) {
//	console.log(scope);
//}


//function showScope(){
//	scope = 'local';
//	return scope;
//}
//
//var scope = 'global';
//console.log(scope);
//console.log(showScope());
//console.log(scope);

function factorial(number){
	if(1==number){
		return number;
	}else{
		return number * factorial(number-1);
	}
}
console.log(factorial(5));
