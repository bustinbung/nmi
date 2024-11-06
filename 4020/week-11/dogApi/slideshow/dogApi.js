new Vue({
    el: '#app',

    data() {
        return {
            info: null,
            breeds: null,
            moreData: [],
            whichDawg: "",
            selector: 0
        }
    },
    mounted: function mounted() {
        this.getBreeds()
        this.showme('cocker')
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
            console.log(this.info.length)
            this.slider(0);
        },
        slider(dir) {
            console.log("before" + this.selector)
            if (dir == 1) {
                if (this.selector >= this.info.length) {
                    this.selector = 0
                } else {
                    this.selector++;
                }
            } else if (dir == -1) {
                if (this.selector  == 0) {
                    this.selector = this.info.length - 1;
                } else {
                    this.selector--;
                }
            } else if (dir == 0) {
                this.selector = 0
            }

            this.whichDawg = this.info[this.selector];
            console.log("after" + this.selector)
            
        }
    }
})
