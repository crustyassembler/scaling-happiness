var basket_contents = document.getElementById('basket-contents');

if(getCartContents()) {
  for(i of getCartContents()) {
    var item = document.createElement('li');

    var item_name      = document.createElement('p');
    var item_name_text = document.createTextNode(i.course_name);
    item_name.appendChild(item_name_text);

    var item_id        = document.createElement('p');
    var item_id_text   = document.createTextNode(i.course_id);
    item_id.appendChild(item_id_text);

    item.appendChild(item_name);
    item.appendChild(item_id);
    basket_contents.appendChild(item);
  }
}
