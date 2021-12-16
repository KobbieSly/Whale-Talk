

let input = "turpentine and turtles’";
let vowels = ['a', 'i', 'u', 'e', 'o'];
let resultArray  =[];

for(let i in input){
  for(let j in vowels){
  if (input[i] == vowels[j]){
    if(input[i] == 'e'){
      resultArray.push(input[i]);
    } else if(input[i] == 'u'){
      resultArray.push(input[i]);
    }
    resultArray.push(input[i]);
  }  
}
}
console.log(resultArray.join('').toString().toUpperCase());