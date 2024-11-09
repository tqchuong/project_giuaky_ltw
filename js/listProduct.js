function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../image/img-pro/bap1.jpg',
            category: 'Bắp',
            price: 10000,
            desc: "Mô tả sản phẩm...",
            rating: 4,
            views: 12,
            reviews: [
                {customer: "Khách hàng A", comment: "Sản phẩm rất ngon."},
                {customer: "Khách hàng B", comment: "Dịch vụ tốt."}
            ]
        }, {
            id: 2,
            status: 1,
            title: 'Bắp nếp',
            img: '../image/img-pro/bap2.jpg',
            category: 'Bắp',
            price: 20000,
            desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
        }, {
            id: 3,
            status: 1,
            title: 'Gạo ST25',
            img: '../image/img-pro/gaost25.jpg',
            images: [
                '../image/productdetails/gaost25-1.jpg',
                '../image/productdetails/gaost25-2.jpg',
                '../image/productdetails/gaost25-3.jpg',
                '../image/productdetails/gaost25-4.jpg',
                '../image/productdetails/gaost25-3.jpg'
            ],
            category: 'Gạo',
            price: 10000,
            rating: 4,  // Đánh giá trung bình
            views: 1234,  // Lượt truy cập

            reviews: [
                {customer: 'Khách hàng A', comment: 'Sản phẩm rất ngon và chất lượng.'},
                {customer: 'Khách hàng B', comment: 'Dịch vụ tốt, sẽ mua lại.'}
            ]

        }, {
            id: 4,
            status: 1,
            title: 'Gạo Thiên Long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 40000,
            desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
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
            title: 'Gạo lứt đen',
            img: '../image/img-pro/gao%20lut%20dien%20bien.jpg',
            category: 'Gạo',
            price: 32000
        }, {
            id: 9,
            status: 1,
            title: 'Hạt kê',
            img: '../image/img-pro/hat%20ke2.jpg',
            category: 'Kê',
            price: 40000
        }, {
            id: 10,
            status: 1,
            title: 'Gạo thiên long',
            img: '../image/img-pro/gao-tam-thom-hai-hau.jpg',
            category: 'Gạo',
            price: 22000
        }, {
            id: 11,
            status: 1,
            title: 'Gạo thiên long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 27000
        }, {
            id: 12,
            status: 1,
            title: 'Gạo lứt đen',
            img: '../image/img-pro/gao-nep-cam.jpg',
            category: 'Gạo',
            price: 30000
        }, {

            id: 13,
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
        },
        {
            id: 15,
            status: 1,
            title: 'Lương khô Bay',
            img: '../image/img-luongkho/LUONG-KHO-BAY-4-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 16,
            status: 1,
            title: 'Lương khô BB',
            img: '../image/img-luongkho/LUONG-KHO-BB-702-1-300x300.jpg',
            category: 'Khác',
            price: 20000
        },
        {
            id: 17,
            status: 1,
            title: 'Lương khô Cacao',
            img: '../image/img-luongkho/LUONG-KHO-CACAO-5-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 18,
            status: 1,
            title: 'Lương khô Dream',
            img: '../image/img-luongkho/LUONG-KHO-DREAM-4-300x300.jpg',
            category: 'Khác',
            price: 30000
        },
        {
            id: 19,
            status: 1,
            title: 'Lương khô Golf Man',
            img: '../image/img-luongkho/LUONG-KHO-GOLFMAN-2-300x300.jpg',
            category: 'Khác',
            price: 34000
        },
        {
            id: 20,
            status: 1,
            title: 'Lương khô Happy',
            img: '../image/img-luongkho/LUONG-KHO-HAPPY-6-300x300.jpg',
            category: 'Khác',
            price: 23000
        },
        {
            id: 21,
            status: 1,
            title: 'Lương khô Hương Quê',
            img: '../image/img-luongkho/LUONG-KHO-HUONG-QUE-6-300x300.jpg',
            category: 'Khác',
            price: 54000
        },
        {
            id: 22,
            status: 1,
            title: 'Lương khô Man',
            img: '../image/img-luongkho/LUONG-KHO-MAN-4-300x300.jpg',
            category: 'Khác',
            price: 32000
        },
        {
            id: 23,
            status: 1,
            title: 'Lương khô Matcha',
            img: '../image/img-luongkho/LUONG-KHO-MATCHA-8-300x300.jpg',
            category: 'Khác',
            price: 22000
        },
        {
            id: 24,
            status: 1,
            title: 'Lương khô Mix vị',
            img: '../image/img-luongkho/LUONG-KHO-MIX-VI-300x300.jpg',
            category: 'Khác',
            price: 42400
        },
        {
            id: 25,
            status: 1,
            title: 'Lương khô Ăn Kiêng',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkh9v5ya67e93-300x300.jpg',
            category: 'Khác',
            price: 43000
        },
        {
            id: 26,
            status: 1,
            title: 'Lương khô Mè Đen',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9a8b41e-300x300.jpg',
            category: 'Khác',
            price: 51000
        },
        {
            id: 27,
            status: 1,
            title: 'Lương khô Matcha ',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9bmvkd9-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 28,
            status: 1,
            title: 'Lương khô Hạt Điều',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9d1g0e0-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 29,
            status: 1,
            title: 'Lương khô Óc Chó',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9eg0g24-300x300.jpg',
            category: 'Khác',
            price: 53400
        },
        {
            id: 30,
            status: 1,
            title: 'Lương khô Ruốc Thịt',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys97f6807-300x300.jpg',
            category: 'Khác',
            price: 23000
        },
        {
            id: 31,
            status: 1,
            title: 'Lương khô Sochola Chip',
            img: '../image/img-luongkho/vn-11134207-7r98o-ll2yx5oqggy31a-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 32,
            status: 1,
            title: 'Lương khô Mix vị',
            img: '../image/img-luongkho/vn-11134207-7r98o-llf5oh10d2uu86-300x300.jpg',
            category: 'Khác',
            price: 23000
        },
        {
            id: 33,
            status: 1,
            title: 'Lương khô Ăn Kiêng Gạo Lứt',
            img: '../image/img-luongkho/vn-11134207-7r98o-lmrsss8ocp9bb1-300x300.jpg',
            category: 'Khác',
            price: 24000
        },
        {
            id: 34,
            status: 1,
            title: 'Lương khô Bay mini',
            img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5bp3s4b-300x300.jpg',
            category: 'Khác',
            price: 13000
        },
        {
            id: 35,
            status: 1,
            title: 'Lương khô Ăn Kiêng Happy',
            img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5oc7s50-300x300.jpg',
            category: 'Khác',
            price: 54000
        },
        {
            id: 36,
            status: 1,
            title: 'Lương khô Chà Bông',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxq6zxb9-300x300.jpg',
            category: 'Khác',
            price: 23000
        },
        {
            id: 37,
            status: 1,
            title: 'Lương khô Mè Đen',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxt04t57-300x300.jpg',
            category: 'Khác',
            price: 54000
        },
        {
            id: 38,
            status: 1,
            title: 'Lương khô yến mạch',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
            category: 'Khác',
            price: 21000
        },
        {
            id: 39,
            status: 1,
            title: 'Lương khô Hạt Điều',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
            category: 'Khác',
            price: 34000
        },
        {
            id: 40,
            status: 1,
            title: 'Lương khô Ankie',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nrouci9aj9b-300x300.jpg',
            category: 'Khác',
            price: 50000
        },
        {
            id: 41,
            status: 1,
            title: 'Lương khô dành cho ăn kiên Ankie',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumf1877e-300x300.jpg',
            category: 'Khác',
            price: 24000
        },
        {
            id: 42,
            status: 1,
            title: 'Lương khô Mix quân đội',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumroc792-300x300.jpg',
            category: 'Khác',
            price: 23000
        },
        {
            id: 43,
            status: 1,
            title: 'Lương khô Mix SBT',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroun4bg73d-300x300.jpg',
            category: 'Khác',
            price: 22300
        },
        {
            id: 44,
            status: 1,
            title: 'Lương khô Quân Nhu',
            img: '../image/img-luongkho/vn-11134207-7r98o-lor7c7288s232f-300x300.jpg',
            category: 'Khác',
            price: 23000
        }
        

        ]
        localStorage.setItem('products', JSON.stringify(products));

    }
}


function createAdminAccount() {
    console.log("Running createAdminAccount");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Kiểm tra nếu tài khoản admin đã tồn tại
    let adminExists = accounts.some(account => account.userType === 1);

    if (!adminExists) {
        accounts.push({
            fullname: "tuquangchuong",
            phone: "0123456789",
            password: "123456",
            address: 'https://github.com/tqchuong',
            email: 'tqc7704@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1 // Tài khoản admin
        });

        // Cập nhật `accounts` vào `localStorage`
        localStorage.setItem('accounts', JSON.stringify(accounts));
        console.log("Admin account created successfully.");
    } else {
        console.log("Admin account already exists.");
    }
    
}

window.onload = function () {
    createAdminAccount();
    createProduct();
};



