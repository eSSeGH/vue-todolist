
const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Pushare ogni 30 min",
                    done: false
                },
                {
                    text: "Respirare",
                    done: false
                },
                {
                    text: "Entrare su discord coi raga",
                    done: false
                }
            ]
        }
    }
    methods: {
        isDone() {
            if (this.tasks.done === true) {
                return true
            } else {
                return false
            }
        }
    }
}).mount('#app')
