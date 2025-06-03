// Seleccionar el formulario y agregar un evento de escucha
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar los valores (puedes agregar lógica adicional aquí)
    if (username === 'admin' && password === '1234') {
        // Redirigir a view_user.html si las credenciales son correctas
        window.location.href = 'view_user.html';
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos');
    }
});