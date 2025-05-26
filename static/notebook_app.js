document.getElementById('logout-button').addEventListener('click', function() {
    // Clear the JWT token from localStorage on logout
    localStorage.removeItem('access_token');
    window.location.href = '/login';
});
