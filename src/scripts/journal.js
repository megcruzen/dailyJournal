const journalEntriesArray = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "10/26/2018",
        concept: "Concept name",
        entry: "We learned about ---.",
        mood: "Overwhelmed"
    },
    {
        date: "10/28/2018",
        concept: "Concept name",
        entry: "We learned about ---.",
        mood: "A bit lost"
    }
]

/************************************ HTML CREATION ************************************/

// Targets article with 'entryContainer' ID
const entryContainer = document.querySelector("#entryContainer");           

// Functions that create HTML structure for each element
const conceptFunc = (title, style) => {                         
    return `<h1 class="${style}">Concept(s): ${title}</h1>`
};
const dateFunc = (title, style) => {
    return `<section class="${style}">${title}</section>`
};
const entryFunc = (title, style) => {
    return `<section class="${style}">${title}</section>`
};
const moodFunc = (title, style) => {
    return `<section class="${style}">Feeling: ${title}</section>`
};

// Function that calls functions above to create HTML structure for each journal entry
const renderJournalEntries = (date, concept, entry, mood) => `
    <div id="journalEntryContainer">
        ${conceptFunc(concept, "title")}
        ${dateFunc(date, "date")}
        ${entryFunc(entry, "content")}
        ${moodFunc(mood, "mood")}
    </div>
`

/*********************************** LOOP TO ADD ARRAY DATA TO HTML/DOM ************************************/

// Loop grabs the values from each array object (INCLUDING THE NEW DATA) and inserts them into "renderJournalEntries" function and then adds the result inside "entryContainer"

// Overarching function that creates and adds new data to DOM - need to tie this to the button click!
const createAndAppend = () => {     
    
    // Clears existing HTML from DOM element
    entryContainer.innerHTML = "";                              

    // Now we need to add the full array content (including newly input data) into the DOM.
    // Loop through each object inside "journalEntriesArray" and call "renderJournalEntries" function.
    // Add each object's data (now HTML) into "entryContainer"

    for (let i = 0; i < journalEntriesArray.length; i++) {
        entryContainer.innerHTML += renderJournalEntries(journalEntriesArray[i].date, journalEntriesArray[i].concept, journalEntriesArray[i].entry, journalEntriesArray[i].mood);
    };
}

// Now we call the function to add the HTML into the DOM.
createAndAppend();

// ^^^^^^ This will add data that *currently* exists in the array. New data will be added when you CLICK.


/************************************ BUTTON CLICK EVENT *********************************************/

let addButton = document.querySelector("#add-button");  // Creates variable for "Record Journal Entry" button 
addButton.addEventListener("click", () => {
    // ^^^ Add click event to button
    // Then pull data from each input field (set variable for each) 
    let journalDate = document.querySelector('input[name="journalDate"]').value;
    let conceptsCovered = document.querySelector('input[name="conceptsCovered"]').value;
    let entryText = document.querySelector('textarea[name="entryText"]').value;
    let currentMood = document.querySelector('select[name="currentMood"]').value;
    // console.log("Button was clicked");

    // console.log("Input values: ", journalDate, conceptsCovered, entryText, currentMood);

    let oneJournalEntry = {             // Creates new object using input values
        date: journalDate,
        concept: conceptsCovered,
        entry: entryText,
        mood: currentMood
    };

    console.log("One entry:", oneJournalEntry);

    journalEntriesArray.push(oneJournalEntry);   // Takes newly created object and adds it to array
    console.log("All entries:", journalEntriesArray); 

    

    renderJournalEntries(journalEntriesArray);   // Takes "journalEntriesArray" and calls "renderJournalEntries" function                                                       which creates HTML for each object in the array.
    createAndAppend();                          // Final function! Adds HTML we've created to the DOM.
});
