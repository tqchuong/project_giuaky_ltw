// SHOW/HIDE PASSWORD FUNCTION
const togglePasswordVisibility = (passwordId, eyeIconId) => {
    const input = document.getElementById(passwordId),
          iconEye = document.getElementById(eyeIconId);
 
    if (input && iconEye) {
        iconEye.addEventListener('click', () => {
            input.type = input.type === 'password' ? 'text' : 'password';
            iconEye.classList.toggle('ri-eye-fill');
            iconEye.classList.toggle('ri-eye-off-fill');
        });
    }
 };
 
 // Apply show/hide password for login and register forms
 togglePasswordVisibility('login-password', 'loginPassword');         // Login password visibility toggle
 togglePasswordVisibility('passwordCreate', 'loginPasswordCreate');   // Register password visibility toggle
 
 // SWITCH BETWEEN LOGIN, REGISTER, AND FORGOT PASSWORD FORMS
 const loginForm = document.getElementById('loginForm');
 const registerForm = document.getElementById('registerForm');
 const forgotPasswordForm = document.getElementById('forgotPasswordForm');
 
 if (loginForm && registerForm && forgotPasswordForm) {
     // Show Register Form
     document.getElementById('loginButtonRegister')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
     });
 
     // Show Login Form
     document.getElementById('loginButtonAccess')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
     });
 
     // Show Forgot Password Form
     document.getElementById('forgotPasswordLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
     });
 
     // Back to Login from Forgot Password Form
     document.getElementById('backToLoginButton')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
     });
 }
 
 // LOGIN FUNCTION
 document.getElementById("login-button")?.addEventListener("click", function() {
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
    if (typeof kiemtradangnhap === 'function') {
        kiemtradangnhap();
    }
 });
 
 // login.js
 document.addEventListener("DOMContentLoaded", function() {
    // Hàm kiểm tra tham số URL và hiển thị phần tương ứng
    function showFormBasedOnURL() {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('loginForm')) {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            forgotPasswordForm.style.display = "none";
        } else if (urlParams.has('registerForm')) {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            forgotPasswordForm.style.display = "none";
        }
    }

    // Thực thi hàm khi tải trang
    showFormBasedOnURL();

    // Gắn sự kiện vào các nút chuyển đổi giữa login và register
    document.getElementById("loginButtonRegister")?.addEventListener("click", function() {
        window.location.href = "login.html?registerForm";
    });
 
    document.getElementById("loginButtonAccess")?.addEventListener("click", function() {
        window.location.href = "login.html?loginForm";
    });
 });
 

 document.getElementById('signup-button')?.addEventListener('click', (event) => {
    event.preventDefault();

    // Lấy thông tin từ form đăng ký
    let fullNameUser = document.getElementById('names').value.trim();
    let phoneUser = document.getElementById('phone').value.trim();
    let emailUser = document.getElementById('emailCreate').value.trim();
    let passwordUser = document.getElementById('passwordCreate').value.trim();

    // Kiểm tra dữ liệu hợp lệ
    if (fullNameUser.length < 3) {
        alert("Tên phải lớn hơn 3 ký tự!");
        return;
    }
    if (phoneUser.length !== 10 || !/^[0-9]+$/.test(phoneUser)) {
        alert("Số điện thoại phải có 10 chữ số!");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(emailUser)) {
        alert("Email không hợp lệ!");
        return;
    }
    if (passwordUser.length < 6) {
        alert("Mật khẩu phải lớn hơn 6 ký tự!");
        return;
    }

    // Lấy danh sách tài khoản từ localStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Kiểm tra xem tài khoản đã tồn tại chưa
    let accountExists = accounts.some(account => account.phone === phoneUser || account.email === emailUser);
    if (accountExists) {
        alert("Tài khoản với số điện thoại hoặc email này đã tồn tại.");
        return;
    }

    // Tạo tài khoản mới và thêm vào danh sách
    let newAccount = {
        fullname: fullNameUser,
        phone: phoneUser,
        email: emailUser,
        password: passwordUser,
        address: '',
        status: 1, // Kích hoạt
        join: new Date(),
        cart: [],
        userType: 0 // Người dùng thông thường
    };
    accounts.push(newAccount);

    // Lưu lại danh sách tài khoản vào localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đăng ký thành công!");
    window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
});


document.getElementById("login-button")?.addEventListener("click", function() {
    const loginName = document.getElementById("login-name").value.trim();
    const loginPassword = document.getElementById("login-password").value.trim();
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Tìm tài khoản khớp với tên và mật khẩu
    const user = accounts.find(account => account.fullname === loginName && account.password === loginPassword);

    if (user) {
        if (user.status === 0) {
            alert("Tài khoản của bạn đã bị khóa.");
            return;
        }
        // Lưu tài khoản hiện tại vào localStorage và chuyển hướng đến trang chủ
        localStorage.setItem("currentuser", JSON.stringify(user));
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
});
