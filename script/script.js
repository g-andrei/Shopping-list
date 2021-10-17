const valueOfInput = document.querySelector('.input-item');
const addItem = document.querySelector('.add-item');
const listOfItems = document.querySelector('ul');
const buttonWarning = document.querySelector('.button-warning');
const checkbutton = document.getElementsByClassName('checkbutton');
const deletebutton = document.getElementsByClassName('deleteButton');


addItem.addEventListener('click', function(e) {
    e.preventDefault();
    if (valueOfInput.value === '') {
        alert('Input is empty!')
    } else {
        const shoppingItem = document.createElement('li');
        shoppingItem.classList.add('deffaultLi')
        const shoppingItemParaghraph = document.createElement('p');
        listOfItems.appendChild(shoppingItem);
        shoppingItemParaghraph.textContent = valueOfInput.value.charAt(0).toUpperCase() + valueOfInput.value.slice(1);;

        shoppingItem.appendChild(shoppingItemParaghraph);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttonsContainer');

        const checkButton = document.createElement('button');
        checkButton.classList.add('checkbutton');
        checkButton.textContent = '\u2713';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton')
        deleteButton.textContent = '\u00D7';

        buttonsContainer.appendChild(checkButton);
        buttonsContainer.appendChild(deleteButton);
        shoppingItem.appendChild(buttonsContainer);

        valueOfInput.value = '';

        deleteButtonFunctionality();
        checkButtonFunctionality();

        if (listOfItems.children.length > 9) {
            addItem.disabled = true;
            buttonWarning.style.display = 'block';
        }
    }
});

function checkButtonFunctionality() {
    for (let i = 0; i < checkbutton.length; i++) {
        checkbutton[i].addEventListener('click', function(event) {
            event.stopImmediatePropagation();
            let target = event.target;
            if (target.parentElement.parentElement.classList.contains('deffaultLi')) {
                target.parentElement.parentElement.className = 'checkedLi';
            } else {
                target.parentElement.parentElement.className = 'deffaultLi';
            }
        });
    }
}

function deleteButtonFunctionality() {
    for (let i = 0; i < deletebutton.length; i++) {
        deletebutton[i].addEventListener('click', function(event) {
            let target = event.target;
            target.parentElement.parentElement.remove();

            if (listOfItems.children.length < 10) {
                addItem.disabled = false;
                buttonWarning.style.display = 'none';
            }
        });
    }
}