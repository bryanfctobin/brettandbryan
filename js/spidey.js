function makeOpaque() {
    var box = document.getElementById('giantBox');
    box.style.opacity = 0;
}

function kraven() {
    var  check = document.getElementById('loading');
    check.style.opacity = 0;
}

function killBox() {
    var box = document.getElementById('giantBox');
    var check = document.getElementById('loading');
    box.style.display = 'none';
    check.style.display = 'none';
}

window.setTimeout(makeOpaque, 2500);
window.setTimeout(kraven, 2000)
window.setTimeout(killBox, 4500);