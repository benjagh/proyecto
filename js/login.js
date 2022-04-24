function login(){
    var user, pass;
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if (user =="benja" && pass == "1234"){
        window.location.href = "bienvenido.html";
    }
}