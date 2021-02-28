const form = document.getElementById('form');
const formName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    formInput();
})

function formInput() {
    const usernameValue = formName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(usernameValue === ''){
        setErrorFor(formName, 'Name cannot be blank');
    }
    else{
        setSuccessFor(formName);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid Email')
    }
    else{
        setSuccessFor(email)
    }

    if(passwordValue <= 6){
        setErrorFor(password, 'Password should be more than 6 charecters')
    }else{
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
    const formStyle = input.parentElement;
    const small = formStyle.querySelector('small');
    formStyle.className = 'form-style error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formStyle = input.parentElement;
    formStyle.className = 'form-style success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
