/* Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano(true / false) che indica se il todo è stato fatto oppure no

# MILESTONE 1

Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

# MILESTONE 2

Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
*/

const todos = [
  {
    text: "Salvare il mio primo progetto",
    done: false,
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
  },
  methods: {
    removeTask: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
// backtick = `// newTodo: "",
//     addTodo: function () {
//       this.todos.push({
//         text: this.newTodo,
//         done: false,
//       });
//       this.newTodo = "";
//     },
