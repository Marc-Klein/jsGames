// const { randomInt } = require("crypto");
// const { arrayBuffer } = require("stream/consumers");

console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
`);

//Es wird zuerst eine Random Funktion erstellt
const random = n => Math.round(Math.random() * n);
const randomElement = array => array[random(array.length - 1)];

//Hier werden die Namen und Hobbies fuer die random Funktion festgelegt
const firstNames = ["Alex", "Daniel", "Max"];
const lastNames = ["Meyer", "Schmidt", "Mueller"];
const hobbies = ["Weightlifting", "Golf", "Hikeing"];
const gender = ["women", "men"];

//Hier werden die random Funktionen in variablen abgelegt
const ranFirstName = randomElement(firstNames);
const ranLastName = randomElement(lastNames);
// const ranHobbies = randomElement(hobbies);
// wird direkt in der Zeile aufgerufen, so wird jedes Hobbie
// neu gerandomized
const ranGender = randomElement(gender);
const ranImg = random(100);

//ggf. als Konstante hinterlegbar
document.querySelector("#root").innerHTML += /*html*/ `

<div class="card">
  <header class="card card__header">
    <h3 class="card card__randomName"> ${ranFirstName} ${ranLastName}</h3>
    <img src="https://randomuser.me/api/portraits/${ranGender}/${ranImg}.jpg" alt="Picture of ${ranFirstName} ${ranLastName}" />
    <section class="card card__content">
      <h4>My Hobbies</h4>
      <ul class="card card__hobbies">
        <li class="card__hobbies--items">${randomElement(hobbies)}</li>
        <li class="card__hobbies--items">${randomElement(hobbies)}</li>
        <li class="card__hobbies--items">${randomElement(hobbies)}</li>
      </ul>
    </section>
  </header>
</div>
`;
