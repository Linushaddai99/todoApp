const formAdd = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');



const todoAdd = (todo) => {
 let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center my-1">
        <span>${todo}</span>
        <i class="fa fa-trash delete"></i>
    </li>`;
    list.innerHTML += html;
}

// Add todo
formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const todo = formAdd.add.value.trim();

    if(todo.length > 0) {
        todoAdd(todo);
    }

    formAdd.reset();

});


// Delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Search todo
const filterTodo = (term) => {
    Array.from(list.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}


search.addEventListener('keyup', () => {
    const item = search.value.trim();
    filterTodo(item);
});