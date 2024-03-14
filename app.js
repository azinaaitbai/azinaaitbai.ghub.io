// Theory

// const array = [1, 2, 3, 5, 20, 42, 111];
// //const arrayStrings = ["a", "b", "c", null, 12];
// //const array = new Array(1,2,3,5,20,42)

// //console.log(array.lenght);
// console.log(array[0]);
// console.log(array[array.lenght - 1]); //array[6-1]
// //console.log(array[10])
// array[0] = "Privet!";
// console.log(array);
// array[array.lenght] = "beloc";

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

//console.log(inputElement.value)

//const notes = ["записать блок про массивы", "рассказать теорию объектов"];

// function render() {
//   // for (let i = 0; i < notes.lenght; i++) {
//   //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

//render();

// createBtn.onclick = function () {
//   if (inputElement.value.lenght == 0) {
//     return;
//   }
//   //listElement.innerHTML =
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `
//   <li
//     class="list-group-item d-flex justify-content-between
//       align-items-center"
//   >
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success">&check;</span>
//       <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//   </li>`;
// }

/**
 * Object Theory


const person = {
  firstName: "Vladilen",
  lastName: "Milen",
  year: 1993,
  hasGirlfriend: false,
  languages: ["ru", "en", "de"],
  getFullName: function () {
    console.log(person.firstName + "" + person.lastName);
  },
};

console.log(person.year);
console.log(person["languages"]);
const key = "hasGirlfriend";
console.log(person[key]);
person.hasGirlfriend = true;
person.getFullName();
*/

const notes = [
  {
    title: "записать блок про массивы",
    completed: false,
  },
  {
    title: "рассказать теорию объектов",
    completed: true,
  },
];

function render() {
  // for (let i = 0; i < notes.lenght; i++) {
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  // }

  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.lenght == 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = "";
};

function getNoteTemplate(note) {
  return `
  <li
    class="list-group-item d-flex justify-content-between 
      align-items-center"
  >
    <span>${note.title}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>`;
}
