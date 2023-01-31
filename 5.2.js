
let num;

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log(" значение is Number");
} else if (typeof(num) == 'string') {
    console.log("значение is String");
} else if (typeof(num) == 'boolean') {
    console.log("value is Boolean");
} else {
    console.log("значение X is undefined");
}
