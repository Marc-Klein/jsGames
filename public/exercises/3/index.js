console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

//Random Funktion
const random = n => Math.round(Math.random() * n);
const randomElement = array => array[random(array.length - 1)];

//Hier werden die Namen und Hobbies fuer die random Funktion festgelegt
const firstNames = ["Alex", "Daniel", "Max", "Riley", "Jaime", "Morgan"];
const lastNames = ["Meyer", "Schmidt", "Mueller", "Byrd", "Klein", "Smith"];
const gender = ["women", "men"];

//Hier werden die random Funktionen in variablen abgelegt
const ranFirstName = randomElement(firstNames);
const ranLastName = randomElement(lastNames);
// const ranHobbies = randomElement(hobbies);
// wird direkt in der Zeile aufgerufen, so wird jedes Hobbie
// neu gerandomized
const ranGender = randomElement(gender);
const ranImg = random(100);

//erstellt ein Array der mit der laenge 4
//mit map wird jedem dieser 4 Stellen eine Funktion zugewiesen
const people = Array.from({ length: 4 }).map(() => ({
  firstName: randomElement(firstNames),
  lastName: randomElement(lastNames),
  photo: `https://randomuser.me/api/portraits/${ranGender}/${ranImg}.jpg`,
}));

document.querySelector("#root").innerHTML += /*html*/ `


<!-- Hier werden der Konstante people mit der Hilfe von map
die Funktion person zugewiesen. So laesst sich im Nachgang mit der
Hilfe der Dot Notation und dem entsprechenden Vairablen Name, die Funktion 
fuer die jeweilige Stelle aus dem Objekt people aufrufen. -->
<div class="grid"> ${people
  .map(
    person => /*html*/ `

<div class="card">
  <header class="card card__header">
    <h3 class="card card__randomName"> ${person.ranFirstName} ${person.ranLastName}</h3>
    <img src="${person.photo}"/>
  </header>
</div>

`
  )
  .join("")}</div>`;
//mit join und einem leeren String werden die Kommata eliminiert,
//welche ueblicherweise den Inhalt von Objekten trennen
