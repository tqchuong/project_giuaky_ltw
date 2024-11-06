// SHOW HIDE PASSWORD LOGIN
const passwordAccess = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type === 'password' ? input.type = 'text' : input.type = 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });
};
passwordAccess('password', 'loginPassword');

// SHOW HIDE PASSWORD CREATE ACCOUNT
const passwordRegister = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type === 'password' ? input.type = 'text' : input.type = 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });
};
passwordRegister('passwordCreate', 'loginPasswordCreate');

// SWITCH BETWEEN LOGIN, CREATE ACCOUNT, AND FORGOT PASSWORD
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

// Buttons to switch forms
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const loginButtonRegister = document.getElementById('loginButtonRegister');
const loginButtonAccess = document.getElementById('loginButtonAccess');
const backToLoginButton = document.getElementById('backToLoginButton');

// Switch to the "Create Account" form
// Switch to the "Create Account" form
loginButtonRegister.addEventListener('click', (e) => {
   e.preventDefault();
  
   loginForm.style.display = 'none';  // Ẩn form đăng nhập
   registerForm.style.display = 'block';  // Hiển thị form đăng ký
   forgotPasswordForm.style.display = 'none';  // Đảm bảo form quên mật khẩu được ẩn

   
});


// Switch back to the "Login" form from "Create Account"
loginButtonAccess.addEventListener('click', (e) => {
   e.preventDefault();
   console.log("Log In button clicked");
   loginForm.style.display = 'block';  // Show login form
   registerForm.style.display = 'none';  // Hide register form
   forgotPasswordForm.style.display = 'none';  // Ensure forgot password form is hidden
});

// Switch to the "Forgot Password" form
forgotPasswordLink.addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'none'; // Hide login form
   registerForm.style.display = 'none'; // Hide register form
   forgotPasswordForm.style.display = 'block'; // Show forgot password form
});

// Switch back to the "Login" form from "Forgot Password"
backToLoginButton.addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'block'; // Show login form
   registerForm.style.display = 'none'; // Hide register form
   forgotPasswordForm.style.display = 'none'; // Hide forgot password form
});
