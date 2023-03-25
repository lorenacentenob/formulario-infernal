var params = new URLSearchParams(window.location.search)

let lore = document.getElementsByTagName('th');
let mytable = document.getElementById('tabla');

function cargar() {
    let lora = document.getElementsByTagName('input');
    for (let i = 0; i < lore.length; i++ ) {
        let mynode = document.createElement('td');
        console.log(lore[i]);
        mynode.innerHTML = '<td>' + lora[i].value + '</td>';
        console.log(mynode);
        mytable.appendChild(mynode);
    }
}