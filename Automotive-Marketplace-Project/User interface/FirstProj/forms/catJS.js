var categories=document.getElementsByName("ncat")[0]
var tableBody = document.getElementById('t').querySelector('tbody');
var add=document.getElementsByName("add")[0];
var reset=document.getElementsByName("reset")[0];
add.addEventListener("click",function(){
    if(!categories.value)
    {
        alert("check the value")
    }
    else{
    var newrow = tableBody.insertRow();
    var categorycell;
    categorycell = newrow.insertCell(0);
    categorycell.innerText=categories.value;
    }
})
reset.addEventListener("click",function(){
    categories.value="";
   
})