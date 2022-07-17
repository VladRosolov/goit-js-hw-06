const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', OnInputChange);

function OnInputChange (event) {
        output.textContent = event.currentTarget.value || 'Anonymous'
}



