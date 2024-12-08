document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.sliders img')
    const previousButton = document.getElementById('previousButton')
    const nextButton = document.getElementById('nextButton')
    let slideIndex = 0
    const totalIndex = sliders.length


    function slideComponent() {
        sliders.forEach(slide => {
            slide.style.transform = `translateX(${slideIndex * -100}%)`;
        });
    }

    previousButton.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalIndex) % totalIndex
        slideComponent()
    })

    nextButton.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalIndex
        slideComponent()
    })
})



