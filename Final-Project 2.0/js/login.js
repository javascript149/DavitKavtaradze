document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        const user = userData.find(u => u.username === loginUsername && u.password === loginPassword);

        if (user) { }
         else {
            alert('Login failed. Please check your credentials.');
        }
    } else {
        alert('No user data found. Please register first.');
    }
    window.location.href = 'index.html';
});
