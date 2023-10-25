//get all text from the whole body
const wholeDoc = document.querySelector("body").textContent;

//get footer
const cleanUpString = "(Bandname)® 2023 Designed by XYZ Studios";
//get footer's first character's index
const cleanUpIndex = wholeDoc.lastIndexOf("(Bandname)® 2023 Designed by XYZ Studios");

//get the searchbar elements
const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-icon");
//keep everything from start of footer until footer's end
const cleanedUpDoc = wholeDoc.substring(0, (cleanUpIndex + cleanUpString.length));

//check console
console.log(cleanedUpDoc);

searchBar.addEventListener("keydown", (event) => {
    if ((event.key == "Enter") && (searchBar.value != "")) {
        alert("There are " + matchingStrings(wholeDoc, searchBar.value) + " matches for: " + searchBar.value);
        searchBar.value = "";
    }
})

searchButton.addEventListener("click", (event) => {
    if (searchBar.value != "") {
        alert("There are " + matchingStrings(wholeDoc, searchBar.value) + " matches for: " + searchBar.value);
        searchBar.value = "";
    }
})


function matchingStrings(innerText, value) {
    /* gi = global (all occurrences) and case insensitive
    `\` means the next character is treated as a literal, no special interpretation
    the regex is \bword\b. First \ makes JS treat the second \ as a literal; third \ does the same for the fourth, so we get:
    \bword\b literally, but we can use the variable inside since we're inside a TEMPLATE LITERAL (`` backticks)
    */
    let regex = new RegExp(`\\b${value}\\b`, "gi");
    let matches = innerText.match(regex);
    console.log(matches)
    if (matches != null) {
        return (matches.length)
    }
    else {
        return 0;
    }
}