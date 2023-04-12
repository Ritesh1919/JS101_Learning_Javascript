let lower_case = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper_case = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let char ="p";
let i=0
while(i <=lower_case.length)
  {
    if(char==lower_case[i])
    {
      char=upper_case[i];
    }
    i++;
  }
console.log(char);