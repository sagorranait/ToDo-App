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