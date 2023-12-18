//storing marks "unread"
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log("Read message 0: " + readMessages.has(messages[0]));

messages.shift();

//reading time storage
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2023, 18, 12));