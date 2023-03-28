let myLibrary = [
    {
        title: 'The hobbit',
        author: 'Joe Mama',
        read: true,
    },

    {
        title: '1984',
        author: 'George Orwell',
        read: true,
    }

];



function Book(title, author, boolean) {
  this.title = title
  this.author = author
  this.read = boolean
}

function addBookToLibrary() {
    let newAuthor = document.querySelector('#author').value;
    let newTitle = document.querySelector('#title').value;
    let newRead = (document.querySelector('#read').name==='true');
    let book = new Book(newTitle, newAuthor, newRead);
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
add.addEventListener('click', ()=> form.style.visibility = 'visible');
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    form.style.visibility = 'hidden';
    addBookToLibrary();
    event.preventDefault();
    showLibrary();
});

showLibrary();


