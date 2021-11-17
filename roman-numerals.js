const romanNumerals=(num)=>{
    const numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const values = [1000, 500, 100, 50, 10, 5, 1];
    let result = '';
    values.forEach((v,i)=>{result+=numerals[i].repeat(Math.floor(num/v));num%=v});
    return result;
}

console.log(romanNumerals(4));
console.log(romanNumerals(267));
console.log(romanNumerals(1979));