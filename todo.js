let button = document.querySelector('#button')
let input = document.querySelector('#input')
let resultUL = document.querySelector('#result')


button.addEventListener('click', () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    if (input.value == '') return
    console.log(input.value)

    localStorage.setItem(randomCharacter, input.value)
    createlement(localStorage.getItem(randomCharacter))


})

function createlement(value) {
    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.textContent = 'delate'
    btn.style = 'margin-left:50px'

    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value
    li.style = `font-size:20px`



    resultUL.appendChild(li)
    li.appendChild(btn)

    btn.addEventListener('click', function() {
        resultUL.removeChild(li)
    })
    li.addEventListener('click', function() {
        li.classList.toggle('is-active')
    })
}