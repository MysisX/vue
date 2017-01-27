let vm = new Vue({
    el: '#exam-3',
    methods: {
        warn: function(message, event) {
            if (event) event.preventDefault()
            alert(message + 'hehe')
        }
    }
})

let out = new Vue({
    el: '#exam-4',
    data: {
        output: 'hehe'
    },
    methods: {
        showoutput: function() {
            alert(this.output)
        }
    }
})