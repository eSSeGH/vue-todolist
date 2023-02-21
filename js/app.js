
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
                    done: true
                },
            ],
        }
    },
    methods: {
        // isDone(task) {
        //     if (this.tasks[task].done === true) {
        //         console.log("this task is DONE")
        //         return true
        //     } else {
        //         console.log("this task is NOT done")
        //         return false
        //     }
        // }
    }
}).mount('#app')
