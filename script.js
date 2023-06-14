// complete the given function

function palindrome(str){
	const reversedStr = str.split('').reverse().join('');
	if(reversedStr!==str){
		return false;
	}
	return true;
}
module.exports = palindrome
