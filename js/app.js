
const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Pushare ogni 30 min",
                    done: false,
                },
                {
                    text: "Respirare",
                    done: false,
                },
                {
                    text: "Entrare su discord coi raga",
                    done: false,
                },
            ],
        }
    },
    methods: {
        onClickCancel(index) {
           console.log("onclickcancel", index, this.tasks[index])
           this.tasks.splice(index, 1)
        }
    }
}).mount('#app')
