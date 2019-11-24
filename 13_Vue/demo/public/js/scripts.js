$(document).ready(() => {
    var vc = Vue.component('automobile-component', {
        props: ['automobile'],
        template: '<li> \
                        {{ automobile.make }} {{ automobile.model }} \
                    </li>'
    }); // End Component

    // Init App
    var v = new Vue({
        el: '#app',
        data: {
            // Populated via AJAX call in mounted lifecycle hook method
            automobiles: []
        },
        mounted() {
            // AJAX call to http://localhost:3000/data
            fetch("/data")
                .then(response => response.json())
                .then((data) => {
                    this.automobiles = data;
                })
        },
        template: `<div><automobile-component v-for="auto in automobiles" v-bind:automobile="auto"/></div>`
    })
});