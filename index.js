let stopp=document.getElementById("stop");
let ready=document.getElementById("ready");
let go=document.getElementById("go");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2")
let l3=document.getElementById("l3");
let p=document.getElementById("pa")
stopp.onclick=()=>{
    stopp.style.backgroundColor='red';
    ready.style.backgroundColor='navy'
    go.style.backgroundColor='navy';
    l1.style.backgroundColor='red';
     l2.style.backgroundColor='navy';
      l3.style.backgroundColor='navy';
      p.textContent='Please Stop And Relax'

}
ready.onclick=()=>{
     ready.style.backgroundColor='orange';
    stopp.style.backgroundColor='navy'
    go.style.backgroundColor='navy';
    l1.style.backgroundColor='navy';
     l2.style.backgroundColor='orange';
      l3.style.backgroundColor='navy';
      p.textContent="Get Ready To Go";
}
go.onclick=()=>{
     go.style.backgroundColor='green';
    stopp.style.backgroundColor='navy';
    ready.style.backgroundColor='navy';
    l1.style.backgroundColor='navy';
     l2.style.backgroundColor='navy';
      l3.style.backgroundColor='green';
      p.textContent="All Set to Gooooo"
    
}