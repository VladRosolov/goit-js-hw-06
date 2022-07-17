const textInput = document.querySelector('input');
const texEl = document.querySelector('#text');

textInput.addEventListener('input', (event) => {
    texEl.style.fontSize = `${event.currentTarget.value}px`;
})


