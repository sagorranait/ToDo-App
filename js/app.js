const todo = {
  emoji: [
    { key: 'home', value: '๐ก', index: 1 },
    { key: 'car', value: '๐', index: 1 },
    { key: 'apple', value: '๐', index: 1},
    { key: 'banana', value: '๐', index: 1},
    { key: 'meat', value: '๐ฅฉ', index: 1},
    { key: 'hospital', value: '๐ฅ', index: 1},
    { key: 'bank', value: '๐ฆ', index: 1},
    { key: 'school', value: '๐ซ', index: 1},
    { key: 'college', value: '๐', index: 1},
    { key: 'bicycle', value: '๐ฒ', index: 1},
    { key: 'gym', value: '๐๏ธ', index: 1},
    { key: 'coffee', value: 'โ๏ธ', index: 1},
    { key: 'coking', value: '๐ฒ', index: 1},
    { key: 'dog', value: '๐ถ', index: 1},
    { key: 'cat', value: '๐ฑ', index: 1},
    { key: 'beauty-parlour', value: '๐๐ป', index: 1},
    { key: 'cloth', value: '๐', index: 1},
    { key: 'baby', value: '๐ถ', index: 1},
    { key: 'bath', value: '๐', index: 1},
    { key: 'clean-cloth', value: '๐งบ', index: 1},
    { key: 'toilet-paper', value: '๐งป', index: 1},
    { key: 'washroom', value: '๐ฝ', index: 1},
    { key: 'movie', value: '๐', index: 1},
    { key: 'presentation', value: '๐ป', index: 1},
    { key: 'work', value: '๐ญ', index: 1},
    { key: 'football', value: 'โฝ๏ธ', index: 1},
    { key: 'cricket', value: '๐', index: 1},
    { key: 'tree', value: '๐ฑ', index: 1},
    { key: 'mosquito', value: '๐ฆ', index: 1},
    { key: 'ice-cream', value: '๐จ', index: 1}
  ],
  todoList: [
    {id: '5454654', icon: '๐ก', iconKey: 'home', todo: 'Clean the house.'},
    {id: '4987875', icon: '๐', iconKey: 'car', todo: 'Clean the Car.'},
  ],
  showEmoji: document.querySelector('.emoji-list'),
  showTodo: document.querySelector('.todo-list'),
};

showEmoji(todo.emoji, todo.showEmoji);
showTodos(todo.todoList, todo.showTodo);