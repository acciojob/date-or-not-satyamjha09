var isDate = function (input) {

	if(input instanceof Date) {
		return !NaN(input.getTime())
	}

	const parserDate = new Date(input);
	return !NaN(parserDate.getTime())
  
};    

Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
