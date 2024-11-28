var isDate = function (input) {

	 if (input instanceof Date) {
        return !isNaN(input.getTime());  // Valid Date object will return true, invalid false
    }

    // Try to parse the input as a date string
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime()); 
  
};    

Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
