import Vue from "vue";
var v = new Vue({
    el: "#app",
    template: "\n    <div>\n        <div>Hello {{name}}!</div>\n        Name: <input v-model=\"name\" type=\"text\">\n    </div>",
    data: {
        name: "World"
    }
});
//# sourceMappingURL=index.js.map