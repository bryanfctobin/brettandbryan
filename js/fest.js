new Vue({
    el: '#main',
    data: {
        mainText: 'Fest',
        smallText: 'Coming soon'
    },
    methods: {

    }
});

function displayText() {
    var x = document.getElementsByClassName('center');
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = 1;
    }
}

window.onload = function () {
    setTimeout(displayText, 1500);
}
