// ✅ Basic Todo List with Status Filter

// Step 1: Create an array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Buy groceries", done: true },
  { title: "Call mom", done: false },
  { title: "Read a book", done: true },
  { title: "Clean the room", done: false },
];

// Step 2: Filter into completed and ongoing tasks
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Step 3: Display tasks in console

console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
