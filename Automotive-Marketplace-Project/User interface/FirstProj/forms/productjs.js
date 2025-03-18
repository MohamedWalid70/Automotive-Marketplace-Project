var fname=document.getElementsByName("first_name")[0]
// console.log(fname)
var price=document.getElementsByName("price")[0]
// console.log(price)
var quantity=document.getElementsByName("quantity")[0]
// console.log(quantity)
var categories=document.getElementsByName("categories")[0]
// console.log(categories)
var picture=document.getElementsByName("picture")[0]
// console.log(picture)
var maximum=document.getElementsByName("maximum")[0]
var minimum=document.getElementsByName("minimum")[0]
var description=document.getElementsByName("description")[0]
var store=document.getElementsByName("store")[0]


var nrgx=/^[a-zA-z]+$/;
var pricergx=/^[0-9]+$/;
var quantityrgx=/^[0-9]+$/;
var minrgx=/^[0-9]+$/;
var maxrgx=/^[0-9]+$/;


var tableBody = document.getElementById('t').querySelector('tbody');
var add=document.getElementsByName("add")[0];
var reset=document.getElementsByName("reset")[0];
console.log(add)
add.addEventListener("click",function(){
    if(!nrgx.test(fname.value)||!pricergx.test(price.value)||!quantityrgx.test(quantity.value)||!picture.value||!maxrgx.test(maximum.value)||!minrgx.test(minimum.value)||!description.value)
    {

        alert("check the values")
    }
    else{
    var newrow = tableBody.insertRow();
    var namecell,quantitycell,pricecell,categorycell;
    namecell = newrow.insertCell(0);
    categorycell = newrow.insertCell(1);
    quantitycell = newrow.insertCell(2);
    pricecell = newrow.insertCell(3);
    // picturecell = newrow.insertCell(4);
   
   namecell.innerText = fname.value;
   categorycell.innerText=categories.value;
   quantitycell.innerText= quantity.value;
   pricecell.innerText= price.value;
//    picturecell=picture.value;
    }
})
reset.addEventListener("click",function(){
    fname.value="";
    price.value="";
    quantity.value="";
    categories.value="";
    picture.value="";
    maximum.value="";
    minimum.value="";
    description.value="";
    store.value="";
})