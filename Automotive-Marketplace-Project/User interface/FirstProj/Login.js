var Username = "ahmed"
var Password = "123"

var LoginForm = document.forms[0]
let checkUsername = document.querySelector('#logusername');
let checkpassword = document.querySelector('#logpassword');
let checklogin = document.querySelector('#login');


var getusername = localStorage.getItem("username")
var getpassword = localStorage.getItem("password")
var stuts = false;
function ValidationLogin(Element, SavedValue) {

    var ParagraphAfterInput = Element.nextElementSibling
    ParagraphAfterInput.style.color = "red"
    ParagraphAfterInput.style.float = "left"
    ParagraphAfterInput.style.fontSize = "small"

    if (Element.value == "") {
        ParagraphAfterInput.innerHTML = `${Element.name} is required`
        Element.style.borderBottom = "1px solid red"
        return false

    }
    else if (Element.value != SavedValue) {
        ParagraphAfterInput.innerHTML = `${Element.name} invalid`
        Element.style.borderBottom = "1px solid red"
        return false
    }
    else {
        return true
    }
}

checklogin.addEventListener("submit", function (e) {
    var User = ValidationLogin(checkUsername, Username)
    var pass = ValidationLogin(checkpassword, Password)
    if (!User || !pass) {
        e.preventDefault()
    }

})

checklogin.addEventListener('click', function (e) {
    e.preventDefault();

    if (checkUsername.value == Username && checkpassword.value == Password) {
        setTimeout(() => {
            window.location = "Dashboard.html"
        }, 1500);

    }else{
        
        try {
            if (getusername.trim() === checkUsername.value.trim() && getpassword.trim() === checkpassword.value) {
                setTimeout(() => {
                    localStorage.setItem("loggedInFlag", 1);
                    window.location = localStorage.getItem("pageToJumpOn");            
                }, 1500);

            } else {
                alert("User Name or Password failed")
            }
        }
        catch {
            alert(" you must sign up first")
        }
    }

})
checkUsername.addEventListener("keydown", function () {
    checkUsername.nextElementSibling.innerHTML = ""
    checkUsername.style.borderBottom = "1px solid blue"


})
checkpassword.addEventListener("keydown", function () {
    checkpassword.nextElementSibling.innerHTML = ""
    checkpassword.style.borderBottom = "1px solid blue"
    checklogin.style.backgroundColor = " rgba(137, 43, 226, 0.9)"



})

