function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../image/img-pro/bap1.jpg',
            category: 'Bắp',
            price: 10000
        }, {
            id: 2,
            status: 1,
            title: 'Bắp nếp',
            img: '../image/img-pro/bap2.jpg',
            category: 'Bắp',
            price: 20000
        }, {
            id: 3,
            status: 1,
            title: 'Gạo Nhật Hokkaido',
            img: '../image/img-pro/gaohokkaido.jpg',
            category: 'Gạo',
            price: 30000
        }, {
            id: 4,
            status: 1,
            title: 'Gạo Nhật Japonica',
            img: '../image/img-pro/gao%20japan.jpg',
            category: 'Gạo',
            price: 40000
        }, {
            id: 5,
            status: 1,
            title: 'Khoai mì',
            img: '../image/img-pro/khoai%20mi.jpg',
            category: 'Khác',
            price: 20000
        }, {
            id: 6,
            status: 1,
            title: 'Khoai lang tím',
            img: '../image/img-pro/khoai%20lang%20tim.jpg',
            category: 'Khác',
            price: 15000
        }, {
            id: 7,
            status: 1,
            title: 'Gạo ST25',
            img: '../image/img-pro/gaost25.jpg',
            category: 'Gạo',
            price: 32000
        }, {
            id: 8,
            status: 1,
            title: 'Hạt kê',
            img: '../image/img-pro/hat%20ke2.jpg',
            category: 'Kê',
            price: 40000
        }, {
            id: 9,
            status: 1,
            title: 'Gạo Tám thơm',
            img: '../image/img-pro/gao-tam-thom-hai-hau.jpg',
            category: 'Gạo',
            price: 22000
        }, {
            id:10 ,
            status: 1,
            title: 'Gạo thiên long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 27000
        }, {
            id:11 ,
            status: 1,
            title: 'Gạo nếp cẩm',
            img: '../image/img-pro/gao-nep-cam.jpg',
            category: 'Gạo',
            price: 30000
        }, {
            id:12 ,
            status: 1,
            title: 'Hạt kê nếp Indo',
            img: '../image/img-pro/hat-ke-nep.jpg',
            category: 'Kê',
            price: 70000
        }, {
            id:13,
            status: 1,
            title: 'Khoai sọ',
            img: '../image/img-pro/khoai-so.jpg',
            category: 'Khác',
            price: 16000
        }, {
            id: 14,
            status: 1,
            title: 'Yến mạch',
            img: '../image/img-pro/yen%20mach.jpg',
            category: 'Khác',
            price: 70000
        }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}
// Xóa accounts khỏi localStorage để kiểm tra thử nghiệm


// Tạo tài khoản admin mặc định nếu chưa tồn tại
function createAdminAccount() {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Kiểm tra nếu tài khoản admin đã tồn tại
    let adminExists = accounts.some(account => account.userType === 1);

    if (!adminExists) {
        accounts.push({
            fullname: "tqc",
            phone: "0123456789",
            password: "1",
            address: 'https://github.com/tqchuong',
            email: 'tqc7704@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1 // Tài khoản admin
        });
        // Lưu vào localStorage
        localStorage.setItem('accounts', JSON.stringify(accounts));
        console.log("Admin account created successfully.");
    } else {
        console.log("Admin account already exists.");
    }
}

window.onload = function() {
    createProduct();
    createAdminAccount();
};


