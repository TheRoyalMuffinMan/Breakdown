const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const fileBtn = document.getElementById('curr__file');
const mainBtn = document.getElementById('file__transfer');
const navbarBtn = document.getElementById('resume__btn');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

mainBtn.addEventListener('click', function() {
    fileBtn.click();
})

navbarBtn.addEventListener('click', function() {
    fileBtn.click();
})

function uploadFile(form) {
    const formData = new FormData(form);
    var oOutput = document.getElementById("static_file_response");
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "upload_static_file", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            oOutput.innerHTML = "Uploaded!";
            console.log(oReq.response);
        } else {
            oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
        }
    };
    oOutput.innerHTML = "Sending file!";
    console.log("Sending file!");
    oReq.send(formData);
}