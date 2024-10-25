/* SIGN IN (#1) */
const passwordInput = document.getElementById('password109');
const togglePassword = document.getElementById('togglePassword109');
togglePassword.addEventListener('click', function () {
  // Toggle the input type between 'password' and 'text'
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  // Change the icon (optional)
  this.textContent = type === 'password' ? '👁️' : '🙈';
});