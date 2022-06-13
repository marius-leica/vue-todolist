/* Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano(true / false) che indica se il todo è stato fatto oppure no
*/

const todos = [
  {
    text: "Salvare il mio primo progetto",
    done: true,
  },
  {
    text: "Salvare il mio secondo progetto",
    done: false,
  },
  {
    text: "Salvare il mio terzo progetto",
    done: false,
  },
];

// dicchiarare vue
const app = new Vue({
  el: "#app",
  data: {
    todos: todos,
    // newTodo: "",
  },
  methods: {
    //     addTodo: function () {
    //       this.todos.push({
    //         text: this.newTodo,
    //         done: false,
    //       });
    //       this.newTodo = "";
    //     },
  },
});
