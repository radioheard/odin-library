let myLibrary = [];



class Book{
    constructor(title, author, boolean) {
        this.title = title
        this.author = author
        this.read = boolean
    }
}

function addBookToLibrary() {
    let newAuthor = document.querySelector('#author').value;
    let newTitle = document.querySelector('#title').value;
    let newRead = () => {
        var value= document.getElementsByName('read');
        for (var radio of value){
        if (radio.checked) {    
            return (radio.value == "read");
            }
        }
    };
    let book = new Book(newTitle, newAuthor, newRead());
    myLibrary.push(book);
}

function showLibrary() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card =>{
        card.remove();
    })


    let i = 0;
    while (i < myLibrary.length) {    
        const newBook = document.createElement('div');
        newBook.className = "card"
        newBook.id = `${i}`;
        const title = document.createElement('h4');
        const titleT = document.createTextNode(myLibrary[i].title);
        title.appendChild(titleT);
        const author = document.createElement('p');
        const authorT = document.createTextNode(myLibrary[i].author);
        author.appendChild(authorT);
        const remove = document.createElement('button');
        remove.className = 'remove';
        const x = document.createTextNode('X');
        remove.addEventListener('click', (e) => {
            removeBook (e.target.parentNode.id);
        })
        const read = document.createElement('button');
        if (myLibrary[i].read == true) {
            read.className = 'read';
        } else {
            read.className = 'unread';
        }
        read.addEventListener('click', (e) => {
            if (myLibrary[e.target.parentNode.id].read == true) {
                myLibrary[e.target.parentNode.id].read = false;
                } else {
                    myLibrary[e.target.parentNode.id].read = true;
                }
            if (read.className == 'read')  {
                read.classList.remove('read');
                read.className= 'unread';
            } else {
                read.classList.remove('unread');
                read.className = 'read';
            }
        })
        const readT = document.createTextNode('Read');
        read.appendChild(readT);
        remove.appendChild(x);
        newBook.appendChild(remove);
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(read);
        grid.appendChild(newBook);
        i++;
    }
}

function removeBook (i) {
    myLibrary.splice(i,1);
    showLibrary();
}


const grid = document.getElementById('grid');


const form = document.getElementById('form')
const add = document.getElementById('add');
const author = document.getElementById('author');
const title = document.getElementById('title');
const span = document.querySelector('span');

add.addEventListener('click', ()=> form.style.visibility = 'visible');
const submit = document.getElementById('submit');

author.addEventListener('input', () => validator());
title.addEventListener('input', ()=> validator())

function validator () {
    if (author.checkValidity() == true && title.checkValidity() == true) {
        span.classList.add('good');
        span.textContent = 'Good To Go!';
        submit.disabled = false;
    } else {
        span.classList.remove('good')
        span.textContent = 'Please fill!';
        submit.disabled = true;
    }
}

submit.addEventListener('click', (event) => {
    form.style.visibility = 'hidden';
    addBookToLibrary();
    event.preventDefault();
    showLibrary();
    span.classList.remove('good')
    span.textContent = 'Please fill!';
    submit.disabled = true;
    author.value = '';
    title.value = '';
});

showLibrary();


