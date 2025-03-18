
//-----------------------------------------
// الحصول على مرجع النموذج بدلاً من الزر
var form = document.querySelector(".RegistrationForm");

// عناصر الإدخال
var FirstName = document.querySelector("#fname");
var LastName = document.querySelector("#lname");
var EmailOrPhone = document.querySelector("#emailAndPhone");
var PasswordInput = document.querySelector("#password");
var ConfirmPass = document.querySelector("#confirmPassword");

// حدث الإرسال على النموذج
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // التحقق من المدخلات وتخزينها
    if (
        Validation(FirstName) &&
        Validation(LastName) &&
        Validation(EmailOrPhone) &&
        Validation(PasswordInput) &&
        Validation(ConfirmPass)
    ) {
        // تخزين القيم في LocalStorage
        localStorage.setItem("fname", FirstName.value);
        localStorage.setItem("lname", LastName.value);
        localStorage.setItem("emailAndPhone", EmailOrPhone.value);
        localStorage.setItem("password", PasswordInput.value);
        localStorage.setItem("confirmPassword", ConfirmPass.value);

        // الانتقال إلى الصفحة التالية بعد 1.5 ثانية
        setTimeout(() => {
            window.location = "Login.html";
        }, 1500);
    }
});


var password;
function Validation(element) {
    var NameOfElement = element.name;
    var ValueOfElement = element.value;

    if (NameOfElement == "Fname" || NameOfElement == "Lname") {
        return /^[a-zA-Z]{3,15}$/.test(ValueOfElement); // صحح الخطأ هنا: a-zA-z -> a-zA-Z
    } else if (NameOfElement === "EmailAndPhone") {
        var PhoneRegx = /^01(0|1|2|5)[0-9]{8}$/;
        var EmailRegx = /^[a-zA-Z]{2,4}[0-9]+@(gmail.com|yahoo.com)$/;
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

//----------------------------------------------------------
// إزالة الأخطاء عند إدخال المستخدم
var arrayOfInputs = [FirstName, LastName, EmailOrPhone, PasswordInput, ConfirmPass];
for (var i in arrayOfInputs) {
    RemoveErrors(arrayOfInputs[i]);
}
