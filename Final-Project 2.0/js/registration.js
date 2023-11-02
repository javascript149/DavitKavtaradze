document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
        firstName && 
        lastName && 
        location && 
        email && 
        email.match(emailPattern) && 
        username && 
        password.length >= 6 
    ) {

        let userData = JSON.parse(localStorage.getItem('userData')) || [];

        const isUsernameTaken = userData.some(user => user.username === username);

        if (isUsernameTaken) {
            alert('Username is already taken. Please choose a different username.');
        } else {
    
            const user = {
                firstName,
                lastName,
                email,
                username,
                password,
            };


            userData.push(user);

            localStorage.setItem('userData', JSON.stringify(userData));

            window.location.href = 'login.html';
        }
    } else {
        alert('Registration failed. Check your inputs and ensure the password is at least 6 characters long.');
    }
});
