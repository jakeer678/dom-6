var form = document.getElementById('addForm');
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup',filterItems);

function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item');
var newText = document.createTextNode(inputValue)
const descriptionItem = document.createTextNode('description')

li.appendChild(newText);
li.appendChild(descriptionItem)
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode('newItem') )
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

deleteBtn.appendChild(document.createTextNode('x'));

li.appendChild(deleteBtn);
    itemList.appendChild(li); 

}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(consirm('Are you sure ?'))
var li = e.target.parentElement;
itemList.removeChild(li);

    }
}

function filterItems() {
    var text = e.target.value.toLowercase();
    var item = itemList.getElementById('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(textName.toLowercase().indexOf(text)!=-1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}























