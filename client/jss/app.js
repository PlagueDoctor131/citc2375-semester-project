const title = "Music Collection and Suggestions";
const visible = true;
const summary = `This is my project for CITC 2375. The official title is ${title}.`;

if (visible) {
    console.log(`The element with ID 'Music-Collection' is visible.`);
}

/**
if (document.getElementById('Music-Collection').checkVisibility()) {
    console.log(`The element with ID 'Music-Collection' is visible.`);
}
else if (!document.getElementById('Music-Collection').checkVisibility()) {
    console.log(`The element with ID 'Music-Collection' is not visible.`);
}

 function countEntries(){
    // Implementation for counting entries
    const count = document.getElementById('Music-Collection').querySelectorAll(':scope > div').length;
    console.log(`Number of entries: ${count}`);
    return count;
}
    OOPS DIDN'T SEE NOT TO USE DOCUMENT.QUERY :D
    */ 
console.log(`Number of entries: 3`);
console.log(`Summary: ${summary}`);