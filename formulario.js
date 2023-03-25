
    var params = new URLSearchParams(window.location.search)
    let nombre1 = params.get("nam1")
    let apellido1 = params.get("ln1")
    let edad1 = params.get("age")
    let dni1 = params.get("doc")
    let email1 = params.get("email")
  document.getElementById("nam1").innerHTML = nam1
  document.getElementById("ln1").innerHTML = ln1
  document.getElementById("age").innerHTML = age
  document.getElementById("doc").innerHTML = doc
  document.getElementById("email").innerHTML = email

    function cargar() {
            let nombre = document.getElementById("nam1").value;
        console.log("nam1", nombre);
        console.log(document.getElementById("tabla"));
        
           let fila1 ="<tr><td>"+ nombre +" </td><td></td><td></td><td></td><td></td></tr>";
        console.log("fila", fila1);
        document.getElementById("tabla").innerHTML+= fila1;

        let apellido = document.getElementById("ln1").value;
        console.log("ln1", apellido);
        console.log(document.getElementById("tabla"));
        
          let fila2 ="<tr><td></td><td>"+ apellido +" </td><td></td><td></td><td></td></tr>";
        console.log("fila2", fila2);
        document.getElementById("tabla").innerHTML+= fila2;

        let edad = document.getElementById("age").value;
        console.log("age", edad);
        console.log(document.getElementById("tabla"));
        
          let fila3 ="<tr><td></td><td></td><td>"+ edad +" </td><td></td><td></td></tr>";
        console.log("fila3", fila3);
        document.getElementById("tabla").innerHTML+= fila3;
    }
    
