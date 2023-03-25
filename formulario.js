
    var params = new URLSearchParams(window.location.search)
 
  document.getElementById("nam1").innerHTML = nam1
  document.getElementById("ln1").innerHTML = ln1
  document.getElementById("age").innerHTML = age
  document.getElementById("doc").innerHTML = doc
  document.getElementById("email").innerHTML = email

    function cargar() {
            let nombre = document.getElementById("nam1").value;
            let apellido = document.getElementById("ln1").value;
            let edad = document.getElementById("age").value;
            let doc = document.getElementById("doc").value;
            let email = document.getElementById("email").value;
            let fila1 ="<tr><td>"+ nombre +" </td><td>" + apellido + " </td><td>" + edad + " </td><td>" + doc + " </td><td>" + email + "</td></tr>";
        console.log("fila", fila1);
        document.getElementById("tabla").innerHTML+= fila1;

    }
    
