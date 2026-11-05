Title is Music Collection and Suggestions, a place for me to collect and suggest music for all those who would like to partake. I plan to display them with the bands listed as well, in no particular ranking order. Should be text and possibly mp3 files, maybe with a music player involved as well through css and js elements.

## Project Deployment

- GitHub Repository: https://github.com/PlagueDoctor131/citc2375-semester-project
- Live Site: https://citc2375-semester-project-ggraves.onrender.com
- Project Topic: A place for me to collect and suggest music for all those who would like to partake.

## Planned Data Model
The project will organize music entries in a simple structured format for the collection and display pages.

### Music Collection Entry
- id: unique identifier for each entry
- title: song or album title
- artist: performer or band name
- genre: category such as soul/R&B, indie/alternative, or jazz rap
- category: collection type such as Tiny Desk Set or Album
- image: file name or URL for the cover art or related image
- description: short summary or notes about the track or album
- link: external YouTube or streaming URL
- addedBy: name of the person submitting the entry
- createdAt: date the item was added

### Example object
```json
{
  "id": 1,
  "title": "Tiny Desk Set",
  "artist": "Thee Sacred Souls",
  "genre": "Soul/R&B",
  "category": "Tiny Desk Set",
  "image": "thee-sacred-souls.jpg",
  "description": "A soulful performance featuring a vintage funk-inspired sound.",
  "link": "https://youtu.be/-4J-f5lkCLo?si=MgJH2BDwmHUafPSK",
  "addedBy": "G. Graves",
  "createdAt": "2026-09-29"
}
```

## Project Progress
    Added styling within styles.css in order to differentiate cards, as well as making the formatting the same between all of the pages. Also added background imaging, and a backup background color if it doesn't load.

    Additionally, changed up where the header existed within the page!

## Week 4 project progress
    Added the required flexbox styling, as well as making the cards scroll correctly. I added the functionality to make images expand when hovering over them as well. Links have hover functionality, and i made the styling fit the requirements.

## Week 5 project progress
    Added add.html, which contains a form that will eventually allow the users to add a song or similiar to the site. Also moved the header from the <head> to the <body>, as per feedback from previous weeks. No new entries onto the list this week, but there may be some soon. The form should work correctly, and uses browser validation.

## Week 6 project progress
    Short one this week - added app.js and added a few parameters that were requested. Started to use document.getelementbyid but then saw that the instructions specifically denied that so I have commented those out for now. displays messages in the console.

## Week 7 Midterm Exam Update
    Project Description: A site to display music suggestions by myself, and possibly others in the future. I have a placeholder add music form for that functionality later, as well as an about page with a table that shows the currently added categories and other sortables.

    Planned 

## Checkpoint 7 progress
    Created data.js, which contains a declaration as needed for the items array, which will eventually contain the items in a list. Added the neccesary images in the folder to add to it. Did the requested changes to the table in the about page, as well as added the caption that was requested. Adjusted the styling of a few elements as well.
    Example item with fields:
```json
{
    "id" : "item6",
    "name" : "The Rain Formerly Known As Purple",
    "artist" : "Chris Christodoulou",
    "genre" : "Prog Rock",
    "category" : "Video Games",
    "images" : [
        "images/formerly_purple.png"
    ],
    "description" : "Chris Christodoulou is one of my favorite composers for video games and other projects. He creates prog rock and other genres of music for titles such as Risk of Rain, one of my favorite video game series of all time! Another one of his top creations, in my opinion, is The Rain formerly known as Purple. Modeled after both the song by Prince, as well as referencing Prince's rebrand after his label issues, it is a masterful composition.I would suggest listening to <a href=\"https://youtu.be/EGXPAoyP_cg?si=-HQIii3iFF95q5NJ\" target=\"_blank\">the full song</a>!"
}
```
## Checkpoint 8 progress
    Changed the parent container to css grid , but left nav as flex. Added the requisite CSS in order to make the site look like how it needs to according to the assignment.

## Checkpoint 9 progress
    Big one - now using DOM calls in order to display the items, and ordered them into a json file, making it easier to fetch. Rendering them on page load, as well as being able to add/remove them relatively easily. Also added a filter functionality so that they can        filter out songs by name, genre, or category (partial name is accepted as well!). ALSO added a favorites feature, where the user can favorite songs and filter by them. favorites are saved in localstorage, and localstorage is held onto between reloads. Also saved        last favorited category as per requirements, it is console logged.

## Checkpoint 10 progress
    Changed to a react frontend - client static is still there as a reference. Rebuilt the front page with react elements, with some updated styling to boot in order to refresh it. The filter is saved in localstorage, along with the bookmarks. The transition was            smooth, and it was an interesting project. Some generative AI was used via VS code workspace for busywork such as variable labeling. I preserved the image zooming from before the transition, i think we needed to? Additionally, i brought over the add and about pages     as instructed.
