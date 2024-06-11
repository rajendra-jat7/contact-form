document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    //First Name
    if(firstName.value.trim() === '') {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    //Last Name
    if(lastName.value.trim() === '') {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    //Email
    if(email.value.trim() === '') {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('emailError').style.display = 'none';
    }

    //Query Type
    if(!queryType) {
        document.getElementById('queryTypeError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('queryTypeError').style.display = 'none';
    }

    //Message
    if(message.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('messageError').style.display = 'none';
    }

    //Consent
    if(!consent.checked) {
        document.getElementById('consentError').style.display = 'block';
        isValid = false;
    }
    else {
        document.getElementById('consentError').style.display = 'none';
    }

    if(isValid) {
        alert("Form Successfully Submitted!!!");
    }
});