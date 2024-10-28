import { createApp } from 'https://esm.sh/vue/dist/vue.esm-browser';
import { students } from './youguys.js';

const studentsVue = createApp({
    data() {
        return {
            yall: students,
            image: "https://bit.ly/2U2OCs0",
            stuname: "",
            counter: 0,
            oswald: "nothing yet"
        }
    },
    methods: {
        showPic() {
            if (this.counter == this.yall.length - 2) {
                this.counter = 0;
            }

            const student = this.yall[this.counter];
            this.stuname = student.stu_name + " " + student.last_name;
            this.image = `https://${student.domain}/images/me.jpg`
            this.counter++;
        },
        displayImage() {
            this.image = this.oswald;
        }
    }
})
studentsVue.mount("#us");