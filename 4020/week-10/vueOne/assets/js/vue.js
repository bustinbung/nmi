import { createApp } from 'https://esm.sh/vue/dist/vue.esm-browser';

const header = createApp({
    data() {
        return {
            name: "Justin Jung",
            description: "Student, filmmaker, developer, musician.",
            link1: "Introduction",
            link2: "My Portfolio",
            link3: "About",
            link4: "Contact Me",
            profilePhotoURL: "images/profilePhoto.jpeg",
        }
    }
})
header.mount('#header');

const portfolio = createApp({
    data() {
        return {
            title: "My awesome default portfolio",
            img1Src: "images/one.jpg",
            img1Text: "A city",
        }
    }
})