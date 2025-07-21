let stopp=document.getElementById("stopp");
let ready=document.getElementById("ready");
let go=document.getElementById("go");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2")
let l3=document.getElementById("l3");
let p=document.getElementById("pa");
let im=document.getElementById("ima");
stopp.onclick=()=>{
    stopp.style.backgroundColor='red';
    ready.style.backgroundColor='navy'
    go.style.backgroundColor='navy';
    l1.style.backgroundColor='red';
     l2.style.backgroundColor='navy';
      l3.style.backgroundColor='navy';
    im.src="https://www.creativehatti.com/wp-content/uploads/edd/2021/12/Traffic-policeman-is-holding-stop-signboard-and-doing-a-stop-hand-sign-9-large.jpg";

}
ready.onclick=()=>{
     ready.style.backgroundColor='orange';
    stopp.style.backgroundColor='navy'
    go.style.backgroundColor='navy';
    l1.style.backgroundColor='navy';
     l2.style.backgroundColor='orange';
      l3.style.backgroundColor='navy';
      im.src="https://uttarakhandtraffic.com/UserFiles/images/traffic-police/seat-belt-img1.jpg";
}
go.onclick=()=>{
     go.style.backgroundColor='green';
    stopp.style.backgroundColor='navy';
    ready.style.backgroundColor='navy';
    l1.style.backgroundColor='navy';
     l2.style.backgroundColor='navy';
      l3.style.backgroundColor='green';
    im.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJjYmHRksS9wJvEh67uAufa6L5Zb59_CPNQ&s";
    
}
