console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"

4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

//1&2
const element = document.querySelector("#root");

element.innerHTML = `
<h1 class = "main-html">it works</h1>
`;

const style = `
<style id="main-style">
${mainheadlinestyles}
</style>`;

// 1.
// const element = document.querySelector("#root");
// element.innerHTML = "<h1> it works </h1>";

// 2.
// const headline = document.querySelector("h1");
// const h1Class = headline.classList.add("h1-class");
// headline.append(h1Class);
// 3.
// const head = document.querySelector("head");
// const style = document.createElement("style");
// head.append(style);
// style.id = "main-style";

// 4.
// style.innerHTML = `
// .h1-class {
//     color:blue;
// }`;
