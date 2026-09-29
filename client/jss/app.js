const title = "Music Collection and Suggestions";
const visible = true;
const sampleCount = 3;
const addedCount = 2;
const featuredMultiplier = 2;
const totalCollectionItems = sampleCount + addedCount;
const projectedDisplayCount = totalCollectionItems * featuredMultiplier;
const summary = `This is my project for CITC 2375. The official title is ${title}.`;
const hasFeaturedItems = totalCollectionItems >= sampleCount;

if (hasFeaturedItems && visible) {
    console.log(`The ${title} page is ready to display ${projectedDisplayCount} collection items.`);
} else {
    console.log(`The ${title} page needs more content before launch.`);
}

const averageItemsPerSection = totalCollectionItems / 2;
console.log(`Average items per section: ${averageItemsPerSection.toFixed(1)}`);
console.log(`Number of sample entries: ${sampleCount}`);
console.log(`Summary: ${summary}`);