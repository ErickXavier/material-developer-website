var ajxobj = null;
var url = "";
var name, email, comment, form, p, pSent;
var validateBox1 = false;

function validator() {
    name = document.getElementById('nameField').value;
    email = document.getElementById('emailField').value;
    comment = document.getElementById('commentField').value;
    event.preventDefault();
    var nameField = document.getElementById("nameField");
    var emailField = document.getElementById("emailField");
    var commentField = document.getElementById("commentField");
    if (name == "") {
        errorGenerator("Please fill all the blank sections");
        colorTheBorder(nameField);
        validateBox1 = false;
    } else {
        errorGenerator("");
        unColorTheBorder(nameField);
        validateBox1 = true;
    } if (email == "") {
        colorTheBorder(emailField);
        errorGenerator("Please fill all the blank sections");
        validateBox1 = false;
    } else {
        unColorTheBorder(emailField);
        errorGenerator("");
        validateBox1 = true;
    } if (comment == "") {
        colorTheBorder(commentField);
        errorGenerator("Please fill all the blank sections");
        validateBox1 = false;
    } else {
        unColorTheBorder(commentField);
        errorGenerator("");
        validateBox1 = true;
    } if (validateBox1) {
        if (email.indexOf('@') == '-1' || email.indexOf('.') == '-1') {
            errorGenerator("Please check your email");
            colorTheBorder(emailField);
        } else {
            if (comment.length <= 10) {
                errorGenerator("Please add more details");
                colorTheBorder(commentField);
                colorTheBorder(commentField);
            } else {
                url = "send_mail.php?Name=" + name + "&" + "Email=" + email + "&" + "Comment=" + comment;
                if (window.XMLHttpRequest) ajxobj = new XMLHttpRequest();
                else ajxobj = ActiveXObject('Microsoft.XMLHTTP'); if (ajxobj != null) {
                    ajxobj.onreadystatechange = myFunction;
                    ajxobj.open("GET", url, true);
                    ajxobj.send(null);
                }
            }
        }
    }
}

function myFunction() {
    if (ajxobj.readyState == 4 && ajxobj.status == 200) {
        formSent();
    }
}

function formSent() {
    div = document.getElementById("contactdivT");
    btn = document.getElementById("submitBtn")
    p = document.getElementById("messageP");
    div.removeChild(btn);
    p.style.textAlign = "left";
    p.style.color = "#02BCD4";
    p.style.float = "left";
    p.innerHTML = "Thanks, I will be in touch asap.";
}

function errorGenerator(error) {
    p = document.getElementById("messageP");
    p.innerHTML = error;
}

function colorTheBorder(nameofthefield) {
    nameofthefield.style.borderBottom = 1 + "px " + "solid " + "#FF4081";
}

function unColorTheBorder(nameofthefield) {
    nameofthefield.style.borderBottom = 1 + "px " + "solid " + "#9e9e9e";
}