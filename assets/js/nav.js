window.addEventListener('load', main);

function main() {
    const sublinks = document.querySelectorAll('.sublinks');
    sublinks.forEach(hideElement);

    const dropdowns = document.querySelectorAll('nav > ul > li > a');
    dropdowns.forEach(showElement);
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.addEventListener('mouseover', event => {
        const li = event.target.parentNode;
        // li.addEventListener('mouseleave', event => {
        //     console.log(event.target);
        // })
        const sublinks = li.querySelector('.sublinks');
        if (sublinks) {
            sublinks.classList.remove('hidden');
            li.addEventListener('mouseleave', event => {
                sublinks.classList.add('hidden');
            })
        }
    });
}