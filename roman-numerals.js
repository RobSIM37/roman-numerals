const romanNumerals=(num)=>{

    const convert = [{letter:'M', value:1000},
                        {letter:'D', value:500},
                        {letter:'C', value:100},
                        {letter:'L', value:50},
                        {letter:'X', value:10},
                        {letter:'V', value:5},
                        {letter:'I', value:1}]

    let result = '';
    convert.forEach(v=>{result+=v.letter.repeat(Math.floor(num/v.value));num%=v.value});
    return result;

}

console.log(romanNumerals(4));
console.log(romanNumerals(267));
console.log(romanNumerals(1979));