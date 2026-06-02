const n1 = parseInt(readline())
    const n2 = readline().split(" ").map(Number)
n2.sort((a,b)=>a-b)
let maxLager = Infinity
for(let i =1;i<n2.length;i++){
    const n4 =  n2[i]-n2[i-1]
    if(n4<maxLager){
        maxLager = n4
    }
}
console.log(maxLager)