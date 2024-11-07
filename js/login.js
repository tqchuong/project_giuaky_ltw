// SHOW/HIDE PASSWORD FUNCTION
const togglePasswordVisibility = (passwordId, eyeIconId) => {
   const input = document.getElementById(passwordId),
         iconEye = document.getElementById(eyeIconId);

   iconEye.addEventListener('click', () => {
       input.type = input.type === 'password' ? 'text' : 'password';
       iconEye.classList.toggle('ri-eye-fill');
       iconEye.classList.toggle('ri-eye-off-fill');
   });
};

// Apply show/hide password for login and register forms
togglePasswordVisibility('login-password', 'loginPassword');         // Login password visibility toggle
togglePasswordVisibility('passwordCreate', 'loginPasswordCreate');  // Register password visibility toggle

// SWITCH BETWEEN LOGIN, REGISTER, AND FORGOT PASSWORD FORMS
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

// Show Register Form
document.getElementById('loginButtonRegister').addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'none';
   registerForm.style.display = 'block';
   forgotPasswordForm.style.display = 'none';
});

// Show Login Form
document.getElementById('loginButtonAccess').addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'block';
   registerForm.style.display = 'none';
   forgotPasswordForm.style.display = 'none';
});

// Show Forgot Password Form
document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'none';
   registerForm.style.display = 'none';
   forgotPasswordForm.style.display = 'block';
});

// Back to Login from Forgot Password Form
document.getElementById('backToLoginButton').addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'block';
   registerForm.style.display = 'none';
   forgotPasswordForm.style.display = 'none';
});

// LOGIN FUNCTION
document.getElementById("loginButton").addEventListener("click", function() {
   const loginName = document.getElementById("login-name").value;
   const loginPassword = document.getElementById("login-password").value;
   const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

   // Find matching account
   const user = accounts.find(account => account.fullname === loginName && account.password === loginPassword);

   if (user) {
       if (user.status === 0) {
           alert("Tài khoản của bạn đã bị khóa.");
           return;
       }
       localStorage.setItem("currentuser", JSON.stringify(user));
       window.location.href = "home.html";
   } else {
       document.querySelector('.form-message-check-login').innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
   }
});

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
   kiemtradangnhap();
});

// login.js
document.addEventListener("DOMContentLoaded", function() {
   // Hàm kiểm tra tham số URL và hiển thị phần tương ứng
   function showFormBasedOnURL() {
       const urlParams = new URLSearchParams(window.location.search);
       
       if (urlParams.has('loginForm')) {
           document.getElementById("loginForm").style.display = "block";
           document.getElementById("registerForm").style.display = "none";
           document.getElementById("forgotPasswordForm").style.display = "none";
       } else if (urlParams.has('registerForm')) {
           document.getElementById("loginForm").style.display = "none";
           document.getElementById("registerForm").style.display = "block";
           document.getElementById("forgotPasswordForm").style.display = "none";
       }
   }

   // Thực thi hàm khi tải trang
   showFormBasedOnURL();

   // Gắn sự kiện vào các nút chuyển đổi giữa login và register
   document.getElementById("loginButtonRegister").addEventListener("click", function() {
       window.location.href = "login.html?registerForm";
   });

   document.getElementById("loginButtonAccess").addEventListener("click", function() {
       window.location.href = "login.html?loginForm";
   });
});
