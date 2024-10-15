const successMsg= document.getElementById('success-msg')
const form = document.querySelector('form')
const textSection = document.querySelector('.text')
const labels = document.querySelectorAll('label')
const img = document.querySelector('img')
const successButton = document.getElementById('success-button')

successMsg.classList.toggle('no-display')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})



function emailSubmit()
{
    const email = document.getElementById('email');
    
    if( email.value.includes('@') && email.value.includes('.com') && email.value.length >= 7)
    {
        successMsg.classList.toggle('no-display')
        successMsg.classList.toggle('flex')
        textSection.classList.toggle('no-display')
        img.classList.toggle('no-display')
        
    }
    else{
        labels[1].classList.toggle('no-display')
        labels[1].classList.toggle('error-txt')
        email.classList.toggle('error')
    }
}

function dismissMessage()
{
        successMsg.classList.toggle('no-display')
        successMsg.classList.toggle('flex')
        textSection.classList.toggle('no-display')
        img.classList.toggle('no-display')

}