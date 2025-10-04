//Normal Function
function calculation(...num){
    let sum = 0;
    let multiply=1;
    let subtraction = num[0];
    for(let i = 0; i<num.length; i++){
        sum+= num[i];
        multiply *= num[i];
        if (i>0) subtraction -= num[i];
    }
    
    return "Sum : "+sum +"\nMultiply : "+multiply+"\nSubtration : "+ subtraction;
}

console.log(calculation(1, 2, 3, 4));

//arrow function

const calculationarrow = (...num) =>{
    let sum = 0;
    let multiply=1;
    let subtraction = num[0];
    for(let i = 0; i<num.length; i++){
        sum+= num[i];
        multiply *= num[i];
        if (i>0) subtraction -= num[i];
    }
    
    return "Sum : "+sum +"\nMultiply : "+multiply+"\nSubtration : "+ subtraction;
}

console.log(calculationarrow(1, 2, 3, 4));