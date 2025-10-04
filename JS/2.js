//Array reference
console.log("Array reference : ");
const a = [1,2,4,6,2];
const b = a;

b.push(8);

console.log("Array a : ", a, "\nArray b : ", b);// changes both array while pushing 8 in b

//Array copy
console.log("\nArray Copy:")
const c = [10,30,20,40,60];
const d = [...c];
d.push(50);
console.log("Array c : ", c, "\nArray d : ", d);//Only change in d array