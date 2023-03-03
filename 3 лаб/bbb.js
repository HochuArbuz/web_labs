const items = document.querySelectorAll('.item:nth-child(even)');
let btn = document.getElementById('btn');
btn.onclick = function() {
    let color = "rgb(231, 231, 231)";
    for(let i = 0; i< items.length;i++){
        items[i].style.backgroundColor = color;
    }
}
