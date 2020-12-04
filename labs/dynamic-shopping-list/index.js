const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
    let newItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newItem;
    listItem.appendChild(listButton);
    listButton.textContent = 'Remove item';
    list.appendChild(listItem);

    listButton.onclick = function (e) {
        list.removeChild(listItem);
    }

    input.focus();
}