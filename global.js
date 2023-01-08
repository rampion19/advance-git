var count = 0;
const name = (arr)=>{
return ()=>{
console.log("hello"+" "+arr[count]);
count++;
}

}
let fun = name(["Ram","Shyam"]);
fun()
fun()