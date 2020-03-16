module.exports = function check(str, bracketsConfig) {
	let dic = {};
	let arr = str.split('');
	let arrStr = [];

	for (let i of bracketsConfig) {
		dic[i[0]] = i[1];
    }

    let stack = [];
    for (let i of arr) {
        if (dic[stack[stack.length-1]] != i) {
            stack.push(i);
        } else  {
                stack.pop();
            }

	}
	return (stack.length == 0) ? true : false;
	}


	