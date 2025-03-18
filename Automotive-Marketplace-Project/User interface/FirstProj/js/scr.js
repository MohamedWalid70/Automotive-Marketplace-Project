let checkUser_info = document.querySelector('#user_info');
let checkUser = document.querySelector('#user');
let checklinks = document.querySelector('#links');
let checklogout = document.querySelector('#logout');

if (localStorage.getItem("username")) {
    checklinks.remove()
    checkUser_info.style.display = "flex"
    checkUser.innerHTML = localStorage.getItem("username")

}

checklogout.addEventListener('click', function (e) {
    // e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "Registration.html"
    }, 1500);

})