Vue.component('slideshow', {
    // Declare prop for use throughout. Expects breed ID
    props: {
        breed: String
    },
    template: 
        `<div>
            <h1>{{this.catData.name}}</h1>
            <h2>Information</h2>
            <p>Description: {{this.catData.description}}</p>
            <p>Temperament: {{this.catData.temperament}}</p>
            <p>Origin: {{this.catData.origin}}</p>
            <h2>Statistics</h2>
            <div class="stats">
                <div class="labels">
                    <p>Adaptability: {{this.catData.adaptability}}</p>
                    <p>Child-friendliness: {{this.catData.child_friendly}}</p>
                    <p>Dog-friendliness: {{this.catData.dog_friendly}}</p>
                    <p>Energy level: {{this.catData.energy_level}}</p>
                    <p>Grooming: {{this.catData.grooming}}</p>
                    <p>Health issues: {{this.catData.health_issues}}</p>
                </div>
                <div class="bars">
                    <!-- 'scaleToPercent()' accepts a number 1-5 and return a percentage string -->
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.adaptability)}"
                        :class="{warn: this.catData.adaptability < 3, ok: this.catData.adaptability > 3}"></div>
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.child_friendly)}"
                        :class="{warn: this.catData.child_friendly < 3, ok: this.catData.child_friendly > 3}"></div>
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.dog_friendly)}"
                        :class="{warn: this.catData.dog_friendly < 3, ok: this.catData.dog_friendly > 3}"></div>
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.energy_level)}"></div>
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.grooming)}"
                        :class="{warn: this.catData.grooming < 3, ok: this.catData.grooming > 3}"></div>
                    <div class="bar"
                        :style="{width: scaleToPercent(this.catData.health_issues)}"
                        :class="{warn: this.catData.health_issues > 3, ok: this.catData.health_issues < 3}"></div>
                </div>
            </div>
            <button v-on:click="slideshow()">advance slideshow</button><br><br>
   
            <img :src="image.url"><br>
        </div>`,
    data() {
        return {
            image: "",
            whichcat: this.breed,
            images: [],
            i: 0,
            catData: {}
        }
    },
    created() {
        this.loadNextImage(this.whichcat);
    },
    methods: {
        async loadNextImage(breedID) {
            // Using native fetch() over axios here

            // Construct URL string; using template literals
            const url = (
                `https://api.thecatapi.com/v1/images/search?` +
                // Constructs HTTP query string from object notation
                // See: https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
                new URLSearchParams({
                    breed_ids: breedID,
                    limit: 10,
                    size: "full"
                // 'toString()' unnecessary but useful for readibility
                }).toString()
            )

            let response = await fetch(url, {
                headers: {
                    'x-api-key': "5707ff43-c0b5-456f-864a-78a03c24ea46"
                }
            });
            const images = await response.json();
            this.images = images;
            // console.log(images);

            // Mutate value of response instead of constructing new variable...
            response = await fetch(`https://api.thecatapi.com/v1/images/${images[0].id}`);

            // ...still works as expected
            const catResponseData = await response.json();
            const catData = catResponseData.breeds[0];
            this.catData = catData;

            this.slideshow()
        },
        async slideshow() {
            if (this.i >= this.images.length) {
                this.i = 0;
            }
            this.image = this.images[this.i];
            this.i++
        },
        scaleToPercent(scale) {
            return `${scale * 20}%` 
        }
    }
})

var ss = new Vue({
    el: '#slideshow',
    data: {
        breeds: [
            "java",
            "csho",
            "crex",
            "amau",
            "soma"
        ]
    }
})