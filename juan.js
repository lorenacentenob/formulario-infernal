var params = new URLSearchParams(window.location.search)

let lore = document.getElementsByTagName('th');
let mytable = document.getElementById('tabla');

function cargar() {
    let lora = document.getElementsByTagName('input');
    for (let i = 0; i < lore.length; i++ ) {
        let mynode = document.createElement('td');
        mynode.innerHTML = '<td>' + lora[i].value + '</td>';
        mytable.appendChild(mynode);
    }
}