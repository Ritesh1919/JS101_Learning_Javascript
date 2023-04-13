//  let B=["banana","strawberry", "apple", "apple", "strawberry","orange", "strawberry"];
// //let B=["banana","banana", "banana"];
// let N=B.length;

let count=0;
let end=N-1;
    for(let i=0;i<N;i++&&end--)
    {
        if(B.length == 1)
        {
          count++;
          break;
        }
        if(B[i]!=B[end] && i!=end)
        {
            console.log("Mixed Basket");
          break;
        }
      else{
        count++;
      }
      
    }
    
    if(count>0)
    {
        console.log("Single Type");
    }
    // else {
    //     console.log("Mixed Basket");
    // }