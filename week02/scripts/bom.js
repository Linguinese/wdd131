
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    
    const chapter = input.value;

    
    if (chapter === '') {
        alert('Please enter a chapter.');
        return;
    }

   
    const li = document.createElement('li');

    li.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

   
    li.append(deleteButton);

   
    list.append(li);


    input.value = '';
    input.focus(); 


    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
});
