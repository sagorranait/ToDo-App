const todo = {
  emoji: [
    { key: 'home', value: '🏡', index: 1 },
    { key: 'car', value: '🚗', index: 1 },
    { key: 'apple', value: '🍎', index: 1},
    { key: 'banana', value: '🍌', index: 1},
    { key: 'meat', value: '🥩', index: 1},
    { key: 'hospital', value: '🏥', index: 1},
    { key: 'bank', value: '🏦', index: 1},
    { key: 'school', value: '🏫', index: 1},
    { key: 'college', value: '🏛', index: 1},
    { key: 'bicycle', value: '🚲', index: 1},
    { key: 'gym', value: '🏋️', index: 1},
    { key: 'coffee', value: '☕️', index: 1},
    { key: 'coking', value: '🍲', index: 1},
    { key: 'dog', value: '🐶', index: 1},
    { key: 'cat', value: '🐱', index: 1},
    { key: 'beauty-parlour', value: '💅🏻', index: 1},
    { key: 'cloth', value: '👕', index: 1},
    { key: 'baby', value: '👶', index: 1},
    { key: 'bath', value: '🛀', index: 1},
    { key: 'clean-cloth', value: '🧺', index: 1},
    { key: 'toilet-paper', value: '🧻', index: 1},
    { key: 'washroom', value: '🚽', index: 1},
    { key: 'movie', value: '🎞', index: 1},
    { key: 'presentation', value: '💻', index: 1},
    { key: 'work', value: '🏭', index: 1},
    { key: 'football', value: '⚽️', index: 1},
    { key: 'cricket', value: '🏏', index: 1},
    { key: 'tree', value: '🌱', index: 1},
    { key: 'mosquito', value: '🦟', index: 1},
    { key: 'ice-cream', value: '🍨', index: 1}
  ],
  todoList: [
    {id: '5454654', icon: '🏡', iconKey: 'home', todo: 'Clean the house.'},
    {id: '4987875', icon: '🚗', iconKey: 'car', todo: 'Clean the Car.'},
  ],
  showEmoji: document.querySelector('.emoji-list'),
  showTodo: document.querySelector('.todo-list'),
};

showEmoji(todo.emoji, todo.showEmoji);
showTodos(todo.todoList, todo.showTodo);