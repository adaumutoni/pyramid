const character = "*";
const count = 5;
const pyramidArray = [];

for (let i = 0; i < count; i++) {
    const starsCount = i * 2 + 1;                  // Number of stars in the line
    const spacesCount = count - i - 1;             // Number of spaces before stars

    const spaces = " ".repeat(spacesCount);
    const stars = character.repeat(starsCount);

    // Add the line (spaces + stars) to the array
    pyramidArray.push(spaces + stars);
}

// Now pyramidArray holds all the lines of the pyramid

pyramidArray.forEach(line => console.log(line));
