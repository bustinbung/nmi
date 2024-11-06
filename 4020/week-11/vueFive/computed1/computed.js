var computed = new Vue({
    el: '#compute',
    data: {
        firstName: "Justin",
        lastName: "Jung"
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
})