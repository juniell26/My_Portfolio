// Select the night mode toggle button and the body
const nightModeToggle = document.getElementById('night-mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const allLinks = document.querySelectorAll('a');
const allSections = document.querySelectorAll('section');
const allInputs = document.querySelectorAll('input, textarea');
const allButtons = document.querySelectorAll('button');

// Check if night mode is stored in localStorage
if (localStorage.getItem('night-mode') === 'enabled') {
    body.classList.add('night-mode');
    header.classList.add('night-mode');
    footer.classList.add('night-mode');
    allLinks.forEach(link => link.classList.add('night-mode'));
    allSections.forEach(section => section.classList.add('night-mode'));
    allInputs.forEach(input => input.classList.add('night-mode'));
    allButtons.forEach(button => button.classList.add('night-mode'));
}

// Event listener for the night mode toggle button
nightModeToggle.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    header.classList.toggle('night-mode');
    footer.classList.toggle('night-mode');
    allLinks.forEach(link => link.classList.toggle('night-mode'));
    allSections.forEach(section => section.classList.toggle('night-mode'));
    allInputs.forEach(input => input.classList.toggle('night-mode'));
    allButtons.forEach(button => button.classList.toggle('night-mode'));

    // Save the night mode state in localStorage
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('night-mode', 'enabled');
    } else {
        localStorage.removeItem('night-mode');
    }
});
