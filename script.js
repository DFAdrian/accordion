const btns = document.querySelectorAll('.accordion__btn');
const questions = document.querySelectorAll('.accordion-field')

btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
        questions.forEach(el=>{
            if(el !== e.currentTarget.parentElement.parentElement){
                el.classList.remove('show-text')
            }
        })

    })
})
