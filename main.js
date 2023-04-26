function validateForm() {
     
      var name=document.getElementById("name").value;
      var password=document.getElementById("password").value;
       if (name == "Alejandra" && password == "1503") {
          //alert("usuario y contraseña validos")
          window.open('suma.html');
       }  else  {
         alert("intenta de nuevo");
    }
}

  