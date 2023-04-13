let arr=["Masai","School","web","full","stack"];

let sum=0;
let count;
for(let i=0;i<arr.length;i++)
  {
    count = arr[i].length;
    sum+=count;
  }
console.log(sum);