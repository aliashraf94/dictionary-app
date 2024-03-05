// console.log(
//     fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/computer')
//     .then(response => response.json())
//     .then(data => console.log(data))
// )

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const outputBox = document.getElementById('output-box')
const sound = document.getElementById('sound')
const searchBtn = document.getElementById('search-btn')
console.log("Ali");



searchBtn.addEventListener('click', () => {

    let inputWord = document.getElementById('input-word').value

        fetch(`${url}${inputWord}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            outputBox.innerHTML = `
            <div class="word" id="word">
            <h3> ${inputWord} </h3>
            <!-- font awesome speaker icon -->
            <button onClick="playSound()">
            <i class="fas fa-volume-up"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[data[0].meanings.length - 1].partOfSpeech}</p>
            <p>/${data[0].phonetics[data[0].phonetics.length - 1].text}/</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
            `
        sound.setAttribute('src', `${data[0].phonetics[data[0].phonetics.length - 1].audio}`)
        console.log(data[0].phonetics[data[0].phonetics.length - 1].audio);
        })
        .catch( () => {
            outputBox.innerHTML = `<h3 class="error" >Could not find the Word</h3>`
        })
});

function playSound() {
    sound.play();
}       


