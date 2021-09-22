const search = document.querySelector('.head input')
const but = document.querySelector('.head button')
const text = document.querySelector('p')

but.addEventListener('click', () => {
    if (search.value === '') return
    const searchWord = search.value
    search.value = ''
    const searchText = text.textContent
    const regEx = new RegExp("\\b" + searchWord + '', 'gi')
    console.log(regEx)
    let high = searchText.replaceAll(searchWord.match(regEx), `<span class='highlight'>${searchWord}</span>`)
    text.innerHTML = high
    console.log(text)
})