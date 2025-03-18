
//let dropDownList = document.getElementById("dropDownList");
let logoutAnchor;

let xhr = new XMLHttpRequest();
xhr.open("GET","/downloadChange");

xhr.send();

xhr.addEventListener("readystatechange", ()=>{

    if(xhr.readyState=="4" && xhr.status=="200"){

        let data = JSON.parse(xhr.responseText);

        let vehicleView = document.getElementById("vehicleView");

        vehicleView.innerHTML = `
            <div id="vehicleImg">
                <img src=${data["image"]} alt="car image">
            </div>
            <div id="vehicleInfo">
            </div>
        `;

        vehicleInfo = document.getElementById("vehicleInfo");

        vehicleInfo.innerHTML += `<div id="vehicleInfoTitle"> Overview </div>
            <div id="vehicleInfoDetails"> </div>
            <div id="orderBtn"> <button> Buy </button> </div>
        `;

        let vehicleInfoDetails = document.getElementById("vehicleInfoDetails");
        let capProp;

        for(let prop in data){
    
            capProp = prop.replace(prop.charAt(0), prop.charAt(0).toUpperCase());

            if(prop!="image" && prop!="id"){
                
                if(prop=="features"){

                    vehicleInfoDetails.innerHTML += `
                    <div style="display:flex; column-gap:0.25vw;">
                    <span>${capProp}: </span> <span style="display: inline-block;"> ${data[prop] }</span>
                    </div>
                `;

                }
                else if(prop=="price"){
                    vehicleInfoDetails.innerHTML += `
                        <div>
                        ${capProp}: $${Intl.NumberFormat().format(data[prop])}
                        </div>
                    `;
                }
                else{
                    vehicleInfoDetails.innerHTML += `
                    <div>
                    ${capProp}: ${data[prop]}
                    </div>
                `;
                }
            }
        }

        document.querySelector("div[id='orderBtn'] button").addEventListener("click", () => {

            // function to do when the button is pressed

        });

        let vehicleViewGallery = document.getElementById("vehicleGallery");

        for(let i=0;i<4;i++){

            vehicleViewGallery.innerHTML += `<div class="vehicleGalleryItem">
                <img src="../images/carPlaceholder.svg" alt="car image">
                </div>
            `;
        }
    }

})

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

document.getElementById("dd1").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd2").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd3").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd4").addEventListener("mouseleave", undoAnimation);
document.getElementById("dd5").addEventListener("mouseleave", undoAnimation);


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
        loginEle.setAttribute("href", "../FirstProj/Login.html");
        loginEle.textContent = "Login";


        document.getElementsByClassName("ddl")[0].innerHTML = `
            <a href="../FirstProj/Registration.html" onclick="saveContext()">New customer? &nbsp &nbsp &nbsp &nbsp<span style="color:blue;">Sign Up</span></a>
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