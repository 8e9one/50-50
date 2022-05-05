const faqToggle = document.querySelectorAll('.faqToggle')

faqToggle.forEach(faTog => {
    faTog.addEventListener('click', () => {
        faTog.parentNode.classList.toggle('active')
    })
})