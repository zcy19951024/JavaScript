import Vue from "vue";
import HelloComponent from './components/Hello.vue'

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        <hello-component :name="name" :initialEnthusiasm="5"></hello-component>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        HelloComponent
    }
});