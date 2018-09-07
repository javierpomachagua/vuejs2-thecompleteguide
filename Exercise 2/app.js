new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Alert!');
            },
            save: function(event) {
                this.value = event.target.value;
            }
        }
    });