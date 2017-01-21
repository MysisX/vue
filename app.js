let vm = new Vue({
    el: '#exam-3',
    methods: {
        warn: function(message, event) {
            if (event) event.preventDefault()
            alert(message)
        }
    }
})