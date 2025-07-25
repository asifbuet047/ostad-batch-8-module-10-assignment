// ✅ Basic Todo List with Status Filter

// Step 1: Create an array of todo items
const todos = [
  { title: "Do shopping for family", done: true },
  { title: "Buy NVIDIA RTX 5090 for gaming", done: true },
  { title: "Upgrade Laptop RAM from 16GB to 64GB", done: false },
  { title: "Read a novel", done: true },
  { title: "Clean the room", done: false },
];

// Step 2: Filter into completed and ongoing tasks use array.filter() method
const completedTasks = todos.filter((todo) => {
  if (todo.done) {
    return true;
  }
});
const ongoingTasks = todos.filter((todo) => {
  if (!todo.done) {
    return true;
  }
});

// Step 3: Display tasks in console

console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
