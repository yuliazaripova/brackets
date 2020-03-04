module.exports = function check(str, bracketsConfig) {
	let dic = {};
	let arr = str.split('');
	let arrStr = [];

	for (let i of bracketsConfig) { 
        if (i[0] == i[1]) {
            arrStr.push(i[0])
        } else {
              dic[i[0]] = i[1];
      }
}

    let stack = [];
    for (let i of arr) {
        if (dic.hasOwnProperty(i)) {
            stack.push(i);
        } else if (dic[stack[stack.length - 1]] == i) {
                stack.pop();
        } else if (arrStr.includes(i) && i !== stack[stack.length - 1]){
          stack.push(i); 
        } else if (arrStr.includes(i) && i == stack[stack.length - 1]) {
          stack.pop();
        }

	}
	

	return (stack.length == 0) ? true : false;
	}
