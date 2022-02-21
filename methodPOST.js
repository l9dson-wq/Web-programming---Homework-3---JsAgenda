function enviarContactos() {
    var datos = {
        nombre: document.getElementById("inputText").value,
        apellido: document.getElementById("inputText2").value,
        telefono: document.getElementById("inputText3").value
    } 
    fetch("http://www.raydelto.org/agenda.php",{
        method: 'POST',
        body: JSON.stringify(datos)
    });
    clearCamps();
    alert("You'll need to restar the page to see the new data");
}

function clearCamps(){
    document.getElementById('inputText').value = "";
    document.getElementById('inputText2').value = "";
    document.getElementById('inputText3').value = "";
    location.reload();
}