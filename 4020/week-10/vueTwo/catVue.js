import { createApp } from 'https://esm.sh/vue/dist/vue.esm-browser';
import { cats } from './cats.js';

const catVue = createApp({
    data() {
        return {
            counter: 0,
            imgURL: "",
            cats: cats
        }
    },
    methods: {
        showCat() {
            this.imgURL = this.cats[this.counter].url;

            if (this.counter >= this.cats.length - 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        }
    }
})
catVue.mount("#cats");