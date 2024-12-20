Vue.component('toast', {
    props: {
        toastOpinion: String,
        bgColor: String
    },
    template: `<div><button v-on:click="checkToast">check the toast</button>
    <h3 :style="{backgroundColor: bgColor}">The toast is {{toastState}}</h3>
    <h3>{{toastOpinion}}</h3></div>`,
    data() {
        return {
            toastState: 'burnt'
        }
    },
    methods: {
        checkToast() {
            this.toastState = "perfect"
        }
    }
})

var co = new Vue({
    el: "#co"
})