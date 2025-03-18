let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let Cpassword = document.querySelector("#ConfirmPassword");
let reg_btn = document.querySelector("#submit");

reg_btn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('username', userName.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('ConfirmPassword', password.value)

    setTimeout(() => {
        window.location = "Login.html";
    }, 1500)

})


// let regForm = document.forms[0]
// let userName = document.querySelector("#username");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let confirmPassword = document.querySelector("#ConfirmPassword");
// let reg_btn = document.querySelector("#submit");

// // // RegExpesion patterns
// // var userNameRegx=/^[a-zA-Z]{3}.{3,9}$/
// // var emailRegx=/^[a-zA-Z]{3}.{3,7}@(gmail.com|yahoo.com)$/
// // var passwordRegx=/^[a-zA-Z]*$/

// var userNameRegx = /^[a-zA-Z]+$/
// var emailRegx = /^[a-zA-Z]+$/
// var passwordRegx = /^[a-zA-Z0-9]+$/
// var passwordValue;
// var stutsUser = true;
// var stutsEmail = true;
// var stutsPass = true;
// var stutsConfirm = true;
// // Function for validate the input value by take(Input , pattern which the value match it)
// function validation(Element, RegExpPattern) {

//     var ParagraphAfterInput = Element.nextElementSibling;
//     ParagraphAfterInput.style.color = "red";
//     ParagraphAfterInput.style.float = "left";
//     ParagraphAfterInput.style.fontSize = "small";


//     if (Element.name == "Confirm password") {
//         if (Element.value == "") {
//             ParagraphAfterInput.innerHTML = "Confirm password is required"
//             Element.style.borderBottom = "1px solid red"
//             stuts = false

//         }
//         else if (passwordValue != Element.value) {
//             ParagraphAfterInput.innerHTML = "Not match password"
//             Element.style.borderBottom = "1px solid red"

//             Element.value = ""
//             stuts = false


//         }

//     }

//     else {
//         if (Element.value == '') {
//             ParagraphAfterInput.innerHTML = `${Element.name} is required`;
//             Element.style.borderBottom = "1px solid red"
//             stuts = false

//         }

//         else if (!RegExpPattern.test(Element.value)) {
//             ParagraphAfterInput.innerHTML = Ivalid`${Element.name.toLowerCase()}`;
//             Element.style.borderBottom = "1px solid red"
//             stuts = false

//         }

//         else {
//             localStorage.setItem(`${Element.name}`, Element.value)
//             if (Element.name == "Password") {
//                 passwordValue = Element.value
//                 stuts = true
//             }
//         }
//     }
// }
// //----------------------------------

// function clearErrorAfterInput(Element) {

//     Element.addEventListener("keydown", function () {

//         var ParagraphAfterInput = Element.nextElementSibling;
//         ParagraphAfterInput.innerHTML = ""
//         Element.style.border = "none"

//     })
// }


// reg_btn.addEventListener('click', function (e) {
//     validation(userName, userNameRegx)
//     validation(email, emailRegx)
//     validation(password, passwordRegx)
//     validation(confirmPassword, "")

//     if (stuts != true) {
//         e.preventDefault()

//     }

// })
// clearErrorAfterInput(userName)
// clearErrorAfterInput(email)
// clearErrorAfterInput(password)
