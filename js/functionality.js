function showEmoji(emojis, domElement){
  emojis.map((emoji) => {
    let lists = document.createElement('li');
    let classes = document.createAttribute("class");
    let dataLebel = document.createAttribute("data-label");
    let dataValue = document.createAttribute("data-value");
    classes.value = emoji.key;
    dataLebel.value = emoji.key;
    dataValue.value = emoji.value;
    lists.setAttributeNode(classes);
    lists.setAttributeNode(dataLebel);
    lists.setAttributeNode(dataValue);
    lists.textContent = emoji.value;
    domElement.appendChild(lists);
  });
}

function showTodos(list, domElement) {
  list.map(item => {
    let dom = document.createElement( `
    <div class="list ${item.iconKey}-list">
      <div class="list-icon">
          <span id="listIcon">${item.icon}</span>
      </div>
      <div class="list-text">
        <p id="listText">${item.todo}</p>
      </div>
      <div class="list-action">
        <ul>
          <li><a href="#" id="${item.id}"><img src="./images/edit.png" alt="edit"></a></li>
          <li><a href="#" id="${item.id}"><img src="./images/correct.png" alt="correct"></a></li>
          <li><a href="#" id="${item.id}"><img src="./images/trash.png" alt="trash"></a></li>
        </ul>
      </div>
    </div>`);
    domElement.appendChild(dom);
    console.log('ami');
  });
}