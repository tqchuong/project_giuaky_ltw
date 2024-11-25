// Đợi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    // Chức năng đăng ký
    let signupButton = document.getElementById('signup-button');
    let loginButton = document.getElementById('login-button');
    
    if (signupButton) {
        signupButton.addEventListener('click', (event) => {
            event.preventDefault();
            let fullNameUser = document.getElementById('names').value;
            let phoneUser = document.getElementById('phone').value;
            let emailUser = document.getElementById('emailCreate').value;
            let passwordUser = document.getElementById('passwordCreate').value;

            // Kiểm tra dữ liệu đầu vào
            if (fullNameUser.length === 0) {
                document.querySelector('.form-message-name.form-message').innerHTML = 'Vui lòng nhập họ và tên';
                document.getElementById('names').focus();
            } else if (fullNameUser.length < 3) {
                document.querySelector('.form-message-name.form-message').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
                document.getElementById('names').value = '';
            } else {
                document.querySelector('.form-message-name.form-message').innerHTML = '';
            }

            if (phoneUser.length === 0) {
                document.querySelector('.form-message-phone.form-message').innerHTML = 'Vui lòng nhập vào số điện thoại';
            } else if (phoneUser.length !== 10 || !/^[0-9]+$/.test(phoneUser)) {
                document.querySelector('.form-message-phone.form-message').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
                document.getElementById('phone').value = '';
            } else {
                document.querySelector('.form-message-phone.form-message').innerHTML = '';
            }

            if (emailUser.length === 0) {
                document.querySelector('.form-message-email.form-message').innerHTML = 'Vui lòng nhập email';
            } else if (emailUser.length < 6 || !/^\S+@\S+\.\S+$/.test(emailUser)) {
                document.querySelector('.form-message-email.form-message').innerHTML = 'Email không hợp lệ';
                document.getElementById('emailCreate').value = '';
            } else {
                document.querySelector('.form-message-email.form-message').innerHTML = '';
            }

            if (passwordUser.length === 0) {
                document.querySelector('.form-message-password.form-message').innerHTML = 'Vui lòng nhập mật khẩu';
            } else if (passwordUser.length < 6) {
                document.querySelector('.form-message-password.form-message').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
                document.getElementById('passwordCreate').value = '';
            } else {
                document.querySelector('.form-message-password.form-message').innerHTML = '';
            }

            // Thực hiện đăng ký nếu hợp lệ
            if (fullNameUser && phoneUser && emailUser && passwordUser) {
                let user = {
                    fullname: fullNameUser,
                    phone: phoneUser,
                    email: emailUser,
                    password: passwordUser,
                    address: '',
                    status: 1,
                    join: new Date(),
                    cart: [],
                    userType: 0
                };

                let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
                let accountExists = accounts.some(account => account.phone === phoneUser || account.email === emailUser);

                if (!accountExists) {
                    accounts.push(user);
                    localStorage.setItem('accounts', JSON.stringify(accounts));
                    localStorage.setItem('currentuser', JSON.stringify(user));
                    toast({title: 'Thành công', message: 'Tạo thành công tài khoản!', type: 'success', duration: 3000});
                    closeModal();
                } else {
                    toast({title: 'Thất bại', message: 'Tài khoản đã tồn tại!', type: 'error', duration: 3000});
                }
            }
        });
    }

    // Chức năng đăng nhập
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();
            let namelog = document.getElementById('login-name').value;
            let passlog = document.getElementById('login-password').value;
            let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            if (namelog.length === 0) {
                document.querySelector('.form-message-namelogin').innerHTML = 'Vui lòng nhập họ và tên';
                document.getElementById('login-name').focus();
            } else if (namelog.length < 3) {
                document.querySelector('.form-message-namelogin').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
                document.getElementById('login-name').value = '';
            } else {
                document.querySelector('.form-message-namelogin').innerHTML = '';
            }

            if (passlog.length === 0) {
                document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu';
            } else if (passlog.length < 6) {
                document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
                document.getElementById('login-password').value = '';
            } else {
                document.querySelector('.form-message-check-login').innerHTML = '';
            }

            // Thực hiện đăng nhập nếu hợp lệ
            if (namelog && passlog) {
                let user = accounts.find(item => item.fullname === namelog && item.password === passlog);
                if (!user) {
                    toast({
                        title: 'Error',
                        message: 'Tài khoản của bạn không tồn tại hoặc sai mật khẩu',
                        type: 'error',
                        duration: 3000
                    });
                } else if (user.status === 0) {
                    toast({title: 'Warning', message: 'Tài khoản của bạn đã bị khóa', type: 'warning', duration: 3000});
                } else {
                    localStorage.setItem('currentuser', JSON.stringify(user));
                    toast({title: 'Success', message: 'Đăng nhập thành công', type: 'success', duration: 3000});
                    closeModal();
                    kiemtradangnhap();
                    checkAdmin();
                    updateAmount();
                }
            }
        });
    }
});
