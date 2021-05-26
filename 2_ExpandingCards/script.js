const panels = document.querySelectorAll('.panel') // puts all panels into array

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // first remove all active classes
        removeActiveClass()
        // the put active class on clicked panel
        panel.classList.add('active')
    })
})


// Removes active class from all panels
function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}