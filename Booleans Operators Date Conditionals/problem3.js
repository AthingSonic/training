// using if else
console.log('using if else');
let compareType1 = (a,b)=>{
    if(a>b){
        console.log(`a: ${a} is greater than b: ${b}`);
    }else if(a<b){
            console.log(`b: ${b} is greater than a: ${a}`);
    } else{
        console.log('Both are the same');
    }
}
compareType1(5,6)

// using ternary operator
console.log('using ternary operator');
let compareType2 = (a,b)=>{
    return a>b ? console.log(`a: ${a} is greater than b: ${b}`) : console.log(`b: ${b} is greater than a: ${a}`)
}
compareType2(8,6)