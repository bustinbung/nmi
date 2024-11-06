new Vue({
    el: '#app',

    data() {
        return {
            info: null,
            breeds: null,
            moreData: []
        }
    },
    mounted: function mounted() {
        this.getBreeds()

    },
    methods: {
        async getBreeds(index) {
            await axios
                .get('https://dog.ceo/api/breed/spaniel/list')
                .then(response => (this.breeds = response.data.message))
        },
        async showme(index) {
            await axios
                .get(`https://dog.ceo/api/breed/spaniel/${index}/images`)
                .then(response => (this.info = response.data.message));
        }
    }
})
