var vm = new Vue({
    el: '#main',
    data: {
        textOne: "This For That",
        btnThis: "This",
        btnThat: "That",
        thisPlaceholder: "{{ this }}",
        thatPlaceholder: "{{ that }}"
    },
    methods: {
        createThis: function (event) {
            var t = document.getElementById('thisPlaceholder');
            var a = ["Shoes", "Shirts", "Shorts"];
            //Ref: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
            var b = a[Math.floor(Math.random() * a.length)];
            t.innerHTML = b;
        },
        createThat: function (event) {
            var t = document.getElementById('thatPlaceholder');
            var a = ["Dogs", "Cats", "Turtles"];
            //Ref: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
            var b = a[Math.floor(Math.random() * a.length)];
            t.innerHTML = b;
        }
    }
});
