function showEmoji(emojis, domElement){
  let lists = document.createElement('li');
  let attr = document.createAttribute("class");
  emojis.map((emoji, index) => {
    attr.value = emoji.key;
    lists.setAttributeNode(attr);
    console.log(lists)
  });
}