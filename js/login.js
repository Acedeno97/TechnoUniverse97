const $submit = document.getElementById("submit");
      $password = document.getElementById("password");
      $username = document.getElementById("username");
      $visible= document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
})

document.addEventListener("click", (e) => {
    if(e.target ===$submit) {
        if($password.value !== "" && $username.value !== "") {
            if($username.value === "admin" && $password.value === "admin") {
                e.preventDefault();
                window.location.href = "/TechnoUniverse97/views/login/view_user.html";
            }
            else {
                e.preventDefault();
                alert("Usuario o contraseña incorrectos.");
            }
        }
        else {
            e.preventDefault();
            alert("Por favor, rellene todos los campos.");
        }
    }
})