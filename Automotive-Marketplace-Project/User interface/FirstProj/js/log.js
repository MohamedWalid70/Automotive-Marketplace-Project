let checkUsername = document.querySelector('#logusername');
let checkpassword = document.querySelector('#logpassword');
let checklogin = document.querySelector('#login');


let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")
checklogin.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkUsername.value === "" || checkpassword.value === "") {
        alert("please check username or password")
    } else {
        if (getusername && getusername.trim() === "admin" && getpassword && getpassword.trim() === "admin") {
            setTimeout(() => {
                window.location = "Dashboard.html"
            }, 1500);

        } else if (getusername.trim() === checkUsername.value.trim() && getpassword.trim() === checkpassword.value) {
            setTimeout(() => {
                localStorage.setItem("loggedInFlag", 1);
                window.location = localStorage.getItem("pageToJumpOn");
            }, 1500);

        } else {
            alert("User Name or Password faild")
        }

    }
})
