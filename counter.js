let countvalue=document.getElementById("count")
let inc=document.getElementById("inc")
let dec=document.getElementById("dec")
let reset=document.getElementById("reset")
reset.addEventListener("click",()=>{
    count=0
    display()
})

function display(){
    countvalue.textContent=count;

}
let count=0
dec.addEventListener("click",function(){
    count++
    display()
})
inc.addEventListener("click",function(){
    count++;
    display()
})