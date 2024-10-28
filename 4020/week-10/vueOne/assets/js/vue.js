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
            link5: "Favorite Colors",
            profilePhotoURL: "images/profilePhoto.jpeg",
        }
    }
})
header.mount('#header');

const portfolio = createApp({
    data() {
        return {
            title: "My awesome default portfolio",
            content: "Some photos",
            img1Src: "images/one.jpg",
            img1Text: "A city",
            img2Src: "images/two.jpg",
            img2Text: "The same city",
            img3Src: "images/three.jpg",
            img3Text: "The city and the sea",
            img4Src: "images/four.jpg",
            img4Text: "The city and some trees",
            img5Src: "images/five.jpg",
            img5Text: "The city from above",
            img6Src: "images/six.jpg",
            img6Text: "The city from afar",
        }
    }
})
portfolio.mount("#portfolio");

const intro = createApp({
    data() {
        return {
            title: "Justin's Portfolio",
            subtitle: "Built with Vue",
            buttonText: "Click me"
        }
    }
})
intro.mount("#top");

const about = createApp({
    data() {
        return {
            title: "About Justin",
            content: "I'm a third-year student at the University of Georgia studying Entertainment and Media Studies.",
        }
    }
})
about.mount("#about");

const contact = createApp({
    data() {
        return {
            title: "Contact Justin",
            content: "Use this form to get in contact.",
        }
    }
})
contact.mount("#contact");

const list = createApp({
    data() {
        return {
            favorites: ["Purple", "Blue", "Green"]
        }
    }
})
list.mount("#list");

const conditional = createApp({
    data() {
        return {
            teacherName: ""
        }
    }
})
conditional.mount("#conditional");

const getColor = createApp({
    data() {
        return {
            bgColor: '',
            divWidth: '300px',
            colors: ['red', 'green', 'blue'],
            widths: ['300px', '200px', '100px']
        }
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        },
        changeWidth(width) {
            this.divWidth = width;
        }
    }
})
getColor.mount("#function");