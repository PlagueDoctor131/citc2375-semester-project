Title is Music Collection and Suggestions, a place for me to collect and suggest music for all those who would like to partake. I plan to display them with the bands listed as well, in no particular ranking order. Should be text and possibly mp3 files, maybe with a music player involved as well through css and js elements.

## Project Deployment

- GitHub Repository: https://github.com/PlagueDoctor131/citc2375-semester-project
- Live Site: https://citc2375-semester-project-ggraves.onrender.com
- Project Topic: A place for me to collect and suggest music for all those who would like to partake.

## Planned Data Model
- Header
- Category
- Genre
- Mp3
- Image
- Artist
- Name
- Hyperlink

## Project Progress
    Added styling within styles.css in order to differentiate cards, as well as making the formatting the same between all of the pages. Also added background imaging, and a backup background color if it doesn't load.

    Additionally, changed up where the header existed within the page!

## Week 4 project progress
    Added the required flexbox styling, as well as making the cards scroll correctly. I added the functionality to make images expand when hovering over them as well. Links have hover functionality, and i made the styling fit the requirements.

## Week 5 project progress
    Added add.html, which contains a form that will eventually allow the users to add a song or similiar to the site. Also moved the header from the <head> to the <body>, as per feedback from previous weeks. No new entries onto the list this week, but there may be some soon. The form should work correctly, and uses browser validation.

## Week 6 project progress
    Short one this week - added app.js and added a few parameters that were requested. Started to use document.getelementbyid but then saw that the instructions specifically denied that so I have commented those out for now. displays messages in the console.

## Week 7 project progress
    Created data.js, which contains a declaration as needed for the items array, which will eventually contain the items in a list. Added the neccesary images in the folder to add to it. Did the requested changes to the table in the about page, as well as added the caption that was requested. Adjusted the styling of a few elements as well. Deleted the uneeded DOM code that was requested to be deleted as well.

## Checkpoint 8 progress
    Changed it from flexbox to grid, and did the requested changes to the css. the additonal property was align items, and the css framework material i used was implementing scss files in order to be able to use mixins within my css.

## Checkpoint 9 progress
    Big one - now using DOM calls in order to display the items, and ordered them into a json file, making it easier to fetch. Rendering them on page load, as well as being able to add/remove them relatively easily. Also added a filter functionality so that they can filter out songs by name, genre, or category (partial name is accepted as well!). ALSO added a favorites feature, where the user can favorite songs and filter by them. favorites are saved in localstorage, and localstorage is held onto between reloads. Also saved last favorited category as per requirements, it is console logged.