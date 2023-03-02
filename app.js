const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const ImgBtn = document.querySelector('img')

const randomAnswers = ["Zdecydowanie tak", "Raczej tak", "Ciężko powiedzieć", "Raczej nie", "Zdecydowanie nie"]

const getRandom = () => {
    const number = Math.floor(Math.random()*5)
    answer.textContent = `Odpowiedź: ${randomAnswers[number]}`
}

const checkInput = () => {
    if(input.value !== "" && input.value.indexOf('?') > -1){
        getRandom()
        error.textContent = ""
    }else{
        error.textContent = "Wpisz pytanie, pamiętaj o pytajniku."
        answer.textContent = ""
    }
    ImgBtn.classList.remove('shake-animation')
}


ImgBtn.addEventListener('click', ()=>{
    ImgBtn.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
});
