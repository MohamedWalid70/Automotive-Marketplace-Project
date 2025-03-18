
//let dropDownList = document.getElementById("dropDownList");

let cars = {};
let offerGauges = document.getElementsByClassName("offerGauge");
let readyOfferI = 0;
offerGauges[readyOfferI].style.width = "4vw";
let offerCard = document.getElementById("offerCard");
let offerImage = 1;
let logoutAnchor;

let xhr = new XMLHttpRequest();

xhr.open("GET","/download");
xhr.send();


xhr.addEventListener("readystatechange", () => {

    if(xhr.readyState=="4" && xhr.status=="200"){

        cars = JSON.parse(xhr.responseText);
        let exhibition = document.getElementById("exhibition");
        let carCard; 

        //console.log(cars);

        for(let i=0;i<cars.length;i++){

            carCard = document.createElement("div");

            carCard.classList.add("carCard");
    
            carCard.innerHTML = `
                <div class="carImg"> 
                    <img src=${cars[i].image} alt="car image">
                </div>
                <div class="carTitle">
                    <a id=${i}> ${cars[i].make} ${cars[i].model} model ${cars[i].year} </a>
                </div>
                <div class="carPrice">
                    Price: $${Intl.NumberFormat().format(cars[i].price)}
                </div>
            `;
    
            exhibition.appendChild(carCard);
        }

        exhibition.addEventListener("click", (ev) => {

            if(ev.target.nodeName=='A'){

                let postxhr = new XMLHttpRequest();
                postxhr.open("POST", "/update");

                postxhr.setRequestHeader("Content-type", "application/json")

                let data = JSON.stringify(cars[ev.target.id]);

                postxhr.send(data);

                window.open("../pages/close_view.html","_self");
                
            }
        
        });

    }

});


setInterval( () => {

    if(offerGauges[readyOfferI].value==100){
        
        offerGauges[readyOfferI].value=0;
        offerGauges[readyOfferI].style.width = "1vw";
        readyOfferI++;
        offerImage++;
        if(readyOfferI>3){
            readyOfferI=0;
            offerImage=1;
        }
        offerGauges[readyOfferI].style.width = "4vw";
        offerCard.style.backgroundImage = `url("../images/offer${offerImage}.jpg")`;
    }
    offerGauges[readyOfferI].value++;

}, 30);


offerCard.addEventListener("click", (ev) => {

    if(ev.button==0){
        if(ev.target.id=="leftOfferBtn"||ev.target.id=="leftArrow"){

            offerGauges[readyOfferI].value=0;
            offerGauges[readyOfferI].style.width = "1vw";

            if(offerImage==1){
                offerImage=4;
                readyOfferI=3;
            }
            else{
                offerImage--;
                readyOfferI--;
            }
            offerGauges[readyOfferI].style.width = "4vw";
            offerCard.style.backgroundImage = `url("../images/offer${offerImage}.jpg")`;

        }
        else if(ev.target.id=="rightOfferBtn"||ev.target.id=="rightArrow"){
            
            offerGauges[readyOfferI].value=0;
            offerGauges[readyOfferI].style.width = "1vw";

            if(offerImage==4){
                offerImage=1;
                readyOfferI=0;
            }
            else{
                offerImage++;
                readyOfferI++;
            }
            offerGauges[readyOfferI].style.width = "4vw";
            offerCard.style.backgroundImage = `url("../images/offer${offerImage}.jpg")`;
        }
    }

});


function undoAnimation(ev){

    let dropDownBtn;
    let pathTags;

    //console.log(ev.target);

    if(ev?.target?.id?.startsWith("dd",0)){
        dropDownBtn = ev.target.firstElementChild;

        pathTags = dropDownBtn.getElementsByTagName("path");

        dropDownBtn.nextElementSibling.style.display="none";
        dropDownBtn.style.backgroundColor="transparent";
        dropDownBtn.getElementsByTagName("a")[0].style.color="white";
        if(dropDownBtn.lastElementChild!=undefined)
            dropDownBtn.lastElementChild.getElementsByTagName("svg")[0].style.transform = "rotate(0deg)";
        else
            dropDownBtn.firstElementChild.getElementsByTagName("svg")[0].style.transform = "rotate(0deg)";


        for(let i=0;i<pathTags.length;i++){
            pathTags[i].style.fill = "white";
        }
    }

}


document.getElementsByTagName("nav")[0].addEventListener("mouseover", (ev) => {

    let dropDownBtn;
    let pathTags;
    let selected=0;


    if(ev?.target?.id?.startsWith("btn",0)){

        dropDownBtn = ev.target;
        selected=1;

    }
    else if(ev?.target?.classList?.contains("lo")){

        dropDownBtn = ev.target.parentElement;
        selected=1;

    }
    else if(ev?.target?.nodeName=="SVG" && ev?.target?.parentElement?.classList?.contains("icon")){

        dropDownBtn = ev.target.parentElement.parentElement.parentElement;
        selected=1;
    }
    else if(ev?.target?.nodeName=="SVG" && ev?.target?.parentElement?.classList?.contains("tinyIcon")){

        dropDownBtn = ev.target.parentElement.parentElement;
        selected=1;
    }
    else if(ev?.target?.nodeName=="A" && ev?.target?.parentElement?.classList?.contains("lo")){

        dropDownBtn = ev.target.parentElement.parentElement;
        selected=1;
    }

    if(selected==1){

        pathTags = dropDownBtn.getElementsByTagName("path");

        dropDownBtn.nextElementSibling.style.display="block";
        dropDownBtn.style.backgroundColor="lightblue";
        dropDownBtn.getElementsByTagName("a")[0].style.color="black";
        if(dropDownBtn.lastElementChild!=undefined)
            dropDownBtn.lastElementChild.getElementsByTagName("svg")[0].style.transform = "rotate(180deg)";
        else
            dropDownBtn.firstElementChild.getElementsByTagName("svg")[0].style.transform = "rotate(180deg)";


        for(let i=0;i<pathTags.length;i++){
            pathTags[i].style.fill = "black";
        }
    }

})

window.addEventListener("load", () => {

    let username = localStorage.getItem("username");
    
    if(username!=null && localStorage.getItem("loggedInFlag")==1){

        document.getElementById("dd1").style.display="none";

        let loginEle = document.getElementsByClassName("lo")[0].firstElementChild;
        loginEle.removeAttribute("href");
        loginEle.textContent = username.replace(username.charAt(0), username.charAt(0).toUpperCase());

        document.getElementsByClassName("ddl")[0].innerHTML = `
            <a href="">My profile</a>
            <a href="">On Sale</a>
            <a href="">Orders</a>
            <a id="logoutAnchor">Logout</a>
        `;

        document.getElementById("btn1").style.columnGap = "0.5vw";
        document.getElementById("navbar-secA").style.columnGap = "1.5vw"
        document.getElementById("btn1").getElementsByClassName("lo")[0].style.columnGap = "0.5vw";


        document.getElementById("dd1").style.display="block";

        logoutAnchor = document.getElementById("logoutAnchor");
        logoutAnchor.addEventListener("click", logout);

    }
    else{

        document.getElementById("dd1").style.display="none";

        let loginEle = document.getElementsByClassName("lo")[0].firstElementChild;
        loginEle.setAttribute("href", "FirstProj/Login.html");
        loginEle.textContent = "Login";


        document.getElementsByClassName("ddl")[0].innerHTML = `
            <a href="FirstProj/Registration.html" onclick="saveContext()">New customer? &nbsp &nbsp &nbsp &nbsp<span style="color:blue;">Sign Up</span></a>
            <a href="">On Sale</a>
            <a href="">Orders</a>
        `;

        document.getElementById("navbar-secA").style.columnGap = "2vw"
        document.getElementById("btn1").style.columnGap = "0vw";
        document.getElementById("btn1").getElementsByClassName("lo")[0].style.columnGap = "0.25vw";

        document.getElementById("dd1").style.display="block";


    }

});

function logout(){

    localStorage.setItem("loggedInFlag",0);
    logoutAnchor.removeEventListener("click", logout);

    window.location.reload();

}

function saveContext(){

    localStorage.setItem("pageToJumpOn", window.location.href);
}


document.getElementById("dd1").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd2").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd3").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd4").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd5").addEventListener("mouseleave", undoAnimation);

