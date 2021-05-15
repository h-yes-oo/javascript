var value;
try {
	//value = ball;
	throw "예외";
} catch(error){
	console.log("catch 실행");
	console.log(error)
} finally {
	console.log("finally 실행");
};