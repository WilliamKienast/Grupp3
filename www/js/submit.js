function sendMail() {
    var link = "swapnasudha.gandhi@gmail.com"
             
             + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}