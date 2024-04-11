function shortcut(string1, string2) {
    // Check if either of the input strings is empty
    if (string1 === "" || string2 === "") {
        return "";
    }

    // Return the initial letters of the strings
    return string1[0] + string2[0];
}

// Do not change the code below
const string1 = prompt("Enter the first string.");
const string2 = prompt("Enter the second string.");
alert(shortcut(string1, string2));