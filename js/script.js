new Vue({
    el: '#superMain',
    data: {
        image1: 'content/brett-face.png',
        image2: '/content/bryan-face.png',
        link1: 'mailto: brett@brettandbryan.com?subject=Super%20SaaS%20Bros',
        link2: 'mailto: bryan@brettandbryan.com?subject=Super%20SaaS%20Bros',
        name1: 'Brett',
        name2: 'Bryan',
        headline: 'What is love?',
        music: '/content/what-is-love2.mp3'
    },
    methods: {
        runSite: function() {
            var all = document.getElementById('main');
            var start = document.getElementById('start');
            var body = document.body;
            start.style.display = 'none';
            all.style.display = 'block';
            body.style.backgroundColor = 'white';
            var myMusic = document.getElementById('myMusic');
            myMusic.play();
        }
    }
});