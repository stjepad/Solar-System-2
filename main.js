const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(function(arguement){
   planetEl.innerHTML +=
   `<h2> ${arguement}</h2>`
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const bloop = planets.map(function(arguement){
    return " " + arguement.charAt(0).toUpperCase() + arguement.slice(1)
})
planetEl.innerHTML +=
`<h2> ${bloop}</h2>`


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filtered = planets.filter(function(arguement){
    return arguement.includes("e")
})
planetEl.innerHTML +=
`<h2> ${filtered.join(", ")}  </h2>`

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reducedWords= words.reduce(
    function (currentTotal, next) {
        return currentTotal + " " + next
    }
)
console.log("reduce words classic", reducedWords)

const reduceWordsES6 = words.reduce(
    (currentTotal, next) => currentTotal + " " + next
)
console.log("reduce words ES", reduceWordsES6)