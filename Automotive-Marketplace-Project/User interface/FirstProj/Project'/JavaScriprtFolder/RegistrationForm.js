var password;
function Validation(element) {
    var NameOfElement = element.name;
    var ValueOfElement = element.value;

    if (NameOfElement == "Fname" || NameOfElement == "Lname") {
        return /^[a-zA-z]{3,15}$/.test(ValueOfElement);
    } else if (NameOfElement === "EmailAndPhone") {
        var PhoneRegx = /^01(0|1|2|5)[0-9]{8}$/;
        var EmailRegx = /^[a-zA-z]{2,4}[0-9]+@(gmail.com|yahoo.com)$/;
        return PhoneRegx.test(ValueOfElement) || EmailRegx.test(ValueOfElement);
    } else if (NameOfElement === "Password") {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(ValueOfElement)) {
            password = ValueOfElement;
            return true;
        } else {
            return false;
        }
    } else if (NameOfElement == "ConfirmPassword") {
        return ValueOfElement == password;
    }
}

//-------------------------------------------------
function CheckInfo(Element, e, message) {
    var ParagraphAfterInput = Element.nextElementSibling;

    if (Element.value == "") {
        e.preventDefault();
        ParagraphAfterInput.innerHTML = `${message} is required`;
        ParagraphAfterInput.style.color = "red";
    } else if (!Validation(Element)) {
        e.preventDefault();
        if (Element.name == "Password") {
            ParagraphAfterInput.innerHTML = `Invalid ${message.toLocaleLowerCase()} follow the instructions`;
        } else if (Element.name == "ConfirmPassword") {
            ParagraphAfterInput.innerHTML = `Not match the password`;
        } else if (Element.name == "Fname" || Element.name == "Lname") {
            ParagraphAfterInput.innerHTML = `Invalid Name`;
        } else {
            ParagraphAfterInput.innerHTML = `Invalid ${message.toLocaleLowerCase()}`;
        }

        ParagraphAfterInput.style.color = "red";
    }
}

//-------------------------------------------
function RemoveErrors(Element) {
    Element.addEventListener("keydown", function () {
        Element.nextElementSibling.innerHTML = "";
    });
}

//-----------------------------------------
var formRegistration = document.forms[0];
var FirstName = document.querySelector("input[name='Fname']");
var LastName = document.querySelector("input[name='Lname']");
var EmailOrPhone = document.querySelector("input[name='EmailAndPhone']");
var PasswordInput = document.querySelector("input[name='Password']");
var ConfirmPass = document.querySelector("input[name='ConfirmPassword']");

//-------------------------------------
formRegistration.addEventListener("submit", function (e) {
    
    CheckInfo(FirstName, e, "First Name");
    CheckInfo(LastName, e, "Last Name");
    CheckInfo(EmailOrPhone, e, "Email or phone");
    CheckInfo(PasswordInput, e, "Password");
    CheckInfo(ConfirmPass, e, "Confirm Password");

   
    if (!e.defaultPrevented) {
    
        var userType = document.querySelector("#userType").value;

    
        if (userType === "Owner") {
            location.assign("Dashboard.html");
        } else if (userType === "User") {
            location.assign("Main.html");
        }

    }
});

//----------------------------------------------------------
var arrayOfInputs = [FirstName, LastName, EmailOrPhone, PasswordInput, ConfirmPass];
for (var i in arrayOfInputs) {
    RemoveErrors(arrayOfInputs[i]);
}


// // تأكد من أن الصفحة جاهزة
// document.addEventListener("DOMContentLoaded", function () {
//     // تحديد النموذج وعناصر الإدخال
//     const formRegistration = document.querySelector(".RegistrationForm");
//     const userTypeSelect = document.querySelector("#userType");

//     // إضافة حدث للنموذج عند الإرسال
//     formRegistration.addEventListener("submit", function (event) {
//         event.preventDefault(); // منع الإرسال الافتراضي للنموذج

//         // التحقق من نوع المستخدم
//         const userType = userTypeSelect.value;

//         // التوجيه بناءً على نوع المستخدم
//         if (userType === "owner") {
//             window.location.href = "Dashboard.html";
//         } else if (userType === "user") {
//             window.location.href = "Main.html";
//         } else {
//             alert("Please select a valid user type!");
//         }
//     });
// });
