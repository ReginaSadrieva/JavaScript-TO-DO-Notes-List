// =================== THEORY ===================
//const array = [1, 2, 3, 5, 20, 42]; // Array (massiv)
//const arrayString = ['a', 'b', 'c', null, 12]; // Array of strings
//const object = { a: 1, b: 2, c: 3 }; // Object
//const array = new Array(1,2,3,5,20,42); // Array (massiv)

//console.log(array.length); // 6
//console.log(arrayString);
//console.log(array[0]); // 1
//console.log(array[3]); // 5
//console.log(array[10]); // undefined
//console.log(array[array.length - 1]); // 42 last element

//array[0] = 'Hello!'; // Change element
//console.log(array); // [ 'Hello!', 2, 3, 5, 20, 42 ]
//array[array.length] = 'dog'; // Add element to the end of array

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

// const notes = [
//   'add note about arrays in Java Script',
//   'add theory about arrays in Java Script',
// ];

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   listElement.insertAdjacentHTML(
//     'beforeend',
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = '';
// };

// function getNoteTemplate(title) {
//   return `
//     <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//             </li>`;
// }

// =================== OBJECT THEORY ===================
// const person = {
//   firstName: 'Regina',
//   lastName: 'Sadrieva',
//   year: 1991,
//   hasBoyfriend: false,
//   languages: ['Ru', 'En', 'Kor'],
//   getFullName: function () {
//     console.log(person.firstName + ' ' + person.lastName);
//   },
// };
// console.log(person.year);
// console.log(person['languages']);
// const key='hasBoyfriend';
// console.log(person[key]);
// person.hasBoyfriend = true;
// console.log(person[key]);
// person.getFullName();

const notes = [
  { title: 'add note about arrays in Java Script', completed: false },
  { title: 'add theory about arrays in Java Script', completed: true },
];

function render() {
  listElement.innerHTML = '';
  if(notes.length===0){
    listElement.innerHTML='<p>No notes yet</p>';
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = '';
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed;
    } else if (type === 'remove') {
      notes.splice(index, 1)
    }
    render();
  }
};

function getNoteTemplate(note, index) {
  return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class="${
              note.completed ? 'text-decoration-line-through' : ''
            }">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${
                  note.completed ? 'warning' : 'success'
                }" data-index=${index} data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}"> &times;</span>
            </span>
            </li>`;
}
