const title = "Music Collection and Suggestions";
const visible = true;
const summary = `This is my project for CITC 2375. The official title is ${title}.`;

if (visible) {
    console.log(`The element with ID 'Music-Collection' is visible.`);
}
console.log(`Number of entries: 3`);
console.log(`Summary: ${summary}`);
console.log(`Number of category Video Games: ${getCountbyCategory("Video Games")}`)
console.log(`Item 1 is: ${JSON.stringify(getItem("item1"))}`)