document.addEventListener('copy', (event) => {
    const is_copied = localStorage.getItem('copied');
    if (is_copied === 'no') return;
    localStorage.setItem('copied', 'yes');
    invade();
});

document.querySelector('#alien').addEventListener('click', (ev) => {
    localStorage.setItem('copied', 'no');
    invade();
});

function invade() {
    const is_copied = localStorage.getItem('copied');
    if (is_copied === 'yes') {
        document.body.classList.add('invaded');
    } else {
        document.body.classList.remove('invaded');
    }
}

invade();