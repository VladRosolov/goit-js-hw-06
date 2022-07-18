const form = document.querySelector(".login-form");

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert('Все поля должны быть заполнены!');
        }

    const formData = {
        email: email,
        password: password,
    }
    console.log(formData);

    

    form.reset();
};

