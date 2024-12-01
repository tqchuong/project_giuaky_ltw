
function createProduct() {
   
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../image/img-pro/bap1.jpg',
            category: 'Bắp',
            price: 10000,
            des: 'Bắp ngọt, hạt căng mọng, thích hợp luộc, nướng, giàu chất xơ và vitamin.'
        }, {
            id: 2,
            status: 1,
            title: 'Bắp nếp',
            img: '../image/img-pro/bap2.jpg',
            category: 'Bắp',
            price: 20000,
            des: 'Bắp nếp dẻo thơm, hương vị truyền thống cho các món ăn dân dã.'
        }, {
            id: 3,
            status: 1,
            title: 'Gạo ST25',
            img: '../image/img-pro/gaost25.jpg',
            category: 'Gạo',
            price: 30000,
            des: 'Gạo ST25 đặc sản, hạt dài, thơm dẻo cho bữa cơm ngon miệng.'
        }, {
            id: 4,
            status: 1,
            title: 'Gạo Thiên Long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 40000,
            des: 'Gạo trắng hạt to, mềm dẻo, dễ nấu, phù hợp nhiều món.'
        }, {
            id: 5,
            status: 1,
            title: 'Khoai mì',
            img: '../image/img-pro/khoai%20mi.jpg',
            category: 'Khác',
            price: 20000,
            des: 'Khoai mì dẻo ngọt, ngon tự nhiên, dùng cho món ăn vặt.'
        }, {
            id: 6,
            status: 1,
            title: 'Khoai lang tím',
            img: '../image/img-pro/khoai%20lang%20tim.jpg',
            category: 'Khác',
            price: 15000,
            des: 'Khoai tím ngọt, giàu dinh dưỡng, thơm mềm.'
        }, {
            id: 7,
            status: 1,
            title: 'Gạo lứt đen',
            img: '../image/img-pro/gao%20lut%20dien%20bien.jpg',
            category: 'Gạo',
            price: 32000,
            des: 'Gạo lứt đen, giàu chất xơ, tốt cho sức khỏe và dễ nấu.'
        }, {
            id: 9,
            status: 1,
            title: 'Hạt kê',
            img: '../image/img-pro/hat%20ke2.jpg',
            category: 'Kê',
            price: 40000,
            des: 'Hạt kê dinh dưỡng, dễ chế biến thành cháo hoặc bột.'
        }, {
            id: 10,
            status: 1,
            title: 'Gạo Tám Thơm Hải Hậu',
            img: '../image/img-pro/gao-tam-thom-hai-hau.jpg',
            category: 'Gạo',
            price: 22000,
            des: 'Gạo tám thơm, vị dẻo mềm, thích hợp cho bữa cơm gia đình.'
        }, {
            id: 11,
            status: 1,
            title: 'Gạo Thiên Long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 27000,
des: 'Gạo thơm, mềm, dễ nấu, thích hợp cho mọi bữa ăn.'
        }, {
            id: 12,
            status: 1,
            title: 'Gạo lứt đen',
            img: '../image/img-pro/gao-nep-cam.jpg',
            category: 'Gạo',
            price: 30000,
            des: 'Gạo lứt đen, bổ dưỡng, giàu chất xơ, tốt cho sức khỏe.'
        }, {
            id: 13,
            status: 1,
            title: 'Khoai sọ',
            img: '../image/img-pro/khoai-so.jpg',
            category: 'Khác',
            price: 16000,
            des: 'Khoai sọ dẻo, ngọt, dùng cho món súp, canh bổ dưỡng.'
        }, {
            id: 14,
            status: 1,
            title: 'Yến mạch',
            img: '../image/img-pro/yen%20mach.jpg',
            category: 'Khác',
            price: 70000,
            des: 'Yến mạch giàu dinh dưỡng, thích hợp cho bữa sáng và ăn kiêng.'
        }, {
            id: 15,
            status: 1,
            title: 'Lương khô Bay',
            img: '../image/img-luongkho/LUONG-KHO-BAY-4-300x300.jpg',
            category: 'Khác',
            price: 50000,
            des: 'Lương khô tiện lợi, dễ mang theo, giàu dinh dưỡng.'
        }, {
            id: 16,
            status: 1,
            title: 'Lương khô BB',
            img: '../image/img-luongkho/LUONG-KHO-BB-702-1-300x300.jpg',
            category: 'Khác',
            price: 20000,
            des: 'Lương khô BB tiện lợi, nhiều năng lượng, cho bữa ăn nhanh.'
        }, {
            id: 17,
            status: 1,
            title: 'Lương khô Cacao',
            img: '../image/img-luongkho/LUONG-KHO-CACAO-5-300x300.jpg',
            category: 'Khác',
            price: 50000,
            des: 'Lương khô vị cacao thơm ngon, dễ ăn, bổ sung năng lượng.'
        }, {
            id: 18,
            status: 1,
            title: 'Lương khô Dream',
            img: '../image/img-luongkho/LUONG-KHO-DREAM-4-300x300.jpg',
            category: 'Khác',
            price: 30000,
            des: 'Lương khô Dream, nhẹ nhàng, tiện lợi, phù hợp mọi bữa ăn.'
        }, {
            id: 19,
            status: 1,
            title: 'Lương khô Golf Man',
            img: '../image/img-luongkho/LUONG-KHO-GOLFMAN-2-300x300.jpg',
            category: 'Khác',
            price: 34000,
            des: 'Lương khô Golf Man, ngon miệng, giàu chất dinh dưỡng.'
        }, {
            id: 20,
            status: 1,
            title: 'Lương khô Happy',
            img: '../image/img-luongkho/LUONG-KHO-HAPPY-6-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô Happy, vị nhẹ nhàng, cung cấp năng lượng tức thời.'
        }, {
            id: 21,
            status: 1,
            title: 'Lương khô Hương Quê',
img: '../image/img-luongkho/LUONG-KHO-HUONG-QUE-6-300x300.jpg',
            category: 'Khác',
            price: 54000,
            des: 'Lương khô Hương Quê, vị quê nhà, bổ sung năng lượng.'
        }, {
            id: 22,
            status: 1,
            title: 'Lương khô Man',
            img: '../image/img-luongkho/LUONG-KHO-MAN-4-300x300.jpg',
            category: 'Khác',
            price: 32000,
            des: 'Lương khô Man, năng lượng cao, tiện lợi cho người bận rộn.'
        }, {
            id: 23,
            status: 1,
            title: 'Lương khô Matcha',
            img: '../image/img-luongkho/LUONG-KHO-MATCHA-8-300x300.jpg',
            category: 'Khác',
            price: 22000,
            des: 'Lương khô vị matcha, thơm mát, phù hợp bữa ăn nhẹ.'
        }, {
            id: 24,
            status: 1,
            title: 'Lương khô Mix vị',
            img: '../image/img-luongkho/LUONG-KHO-MIX-VI-300x300.jpg',
            category: 'Khác',
            price: 42400,
            des: 'Lương khô nhiều hương vị, đa dạng, thích hợp cho mọi khẩu vị.'
        }, {
            id: 25,
            status: 1,
            title: 'Lương khô Ăn Kiêng',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkh9v5ya67e93-300x300.jpg',
            category: 'Khác',
            price: 43000,
            des: 'Lương khô ăn kiêng, ít calo, phù hợp người giảm cân.'
        }, {
            id: 26,
            status: 1,
            title: 'Lương khô Mè Đen',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9a8b41e-300x300.jpg',
            category: 'Khác',
            price: 51000,
            des: 'Lương khô mè đen, thơm bùi, tốt cho sức khỏe.'
        }, {
            id: 27,
            status: 1,
            title: 'Lương khô Hạt Điều',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9d1g0e0-300x300.jpg',
            category: 'Khác',
            price: 50000,
            des: 'Lương khô hạt điều, giòn ngon, bổ dưỡng.'
        }, {
            id: 28,
            status: 1,
            title: 'Lương khô Óc Chó',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys9eg0g24-300x300.jpg',
            category: 'Khác',
            price: 53400,
            des: 'Lương khô óc chó, bổ sung dinh dưỡng và năng lượng.'
        }, {
            id: 29,
            status: 1,
            title: 'Lương khô Ruốc Thịt',
            img: '../image/img-luongkho/vn-11134207-7r98o-lkkkcys97f6807-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô ruốc thịt, ngon đậm đà, tiện lợi.'
        }, {
            id: 30,
            status: 1,
            title: 'Lương khô Ankie',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nrouci9aj9b-300x300.jpg',
category: 'Khác',
            price: 50000,
            des: 'Lương khô Ankie, hương vị đặc trưng, giàu năng lượng.'
        }, {
            id: 31,
            status: 1,
            title: 'Lương khô Sochola Chip',
            img: '../image/img-luongkho/vn-11134207-7r98o-ll2yx5oqggy31a-300x300.jpg',
            category: 'Khác',
            price: 50000,
            des: 'Lương khô Sochola Chip, hương vị socola hấp dẫn, giàu dinh dưỡng.'
        }, {
            id: 32,
            status: 1,
            title: 'Lương khô Mix vị',
            img: '../image/img-luongkho/vn-11134207-7r98o-llf5oh10d2uu86-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô nhiều hương vị, đa dạng và thơm ngon.'
        }, {
            id: 33,
            status: 1,
            title: 'Lương khô Ăn Kiêng Gạo Lứt',
            img: '../image/img-luongkho/vn-11134207-7r98o-lmrsss8ocp9bb1-300x300.jpg',
            category: 'Khác',
            price: 24000,
            des: 'Lương khô gạo lứt, ít calo, phù hợp người ăn kiêng.'
        }, {
            id: 34,
            status: 1,
            title: 'Lương khô Bay mini',
            img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5bp3s4b-300x300.jpg',
            category: 'Khác',
            price: 13000,
            des: 'Lương khô Bay mini, nhỏ gọn, tiện lợi, nhiều dinh dưỡng.'
        }, {
            id: 35,
            status: 1,
            title: 'Lương khô Ăn Kiêng Happy',
            img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5oc7s50-300x300.jpg',
            category: 'Khác',
            price: 54000,
            des: 'Lương khô Happy ít calo, ngon miệng, phù hợp cho ăn kiêng.'
        }, {
            id: 36,
            status: 1,
            title: 'Lương khô Chà Bông',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxq6zxb9-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô chà bông, vị mặn nhẹ, giàu năng lượng.'
        }, {
            id: 37,
            status: 1,
            title: 'Lương khô Mè Đen',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxt04t57-300x300.jpg',
            category: 'Khác',
            price: 54000,
            des: 'Lương khô mè đen thơm bùi, bổ dưỡng, phù hợp mọi lứa tuổi.'
        }, {
            id: 38,
            status: 1,
            title: 'Lương khô Yến Mạch',
            img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
            category: 'Khác',
            price: 21000,
            des: 'Lương khô yến mạch, bổ dưỡng, tiện lợi cho bữa sáng.'
        }, {
            id: 39,
            status: 1,
            title: 'Lương khô Hạt Điều',
img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
            category: 'Khác',
            price: 34000,
            des: 'Lương khô hạt điều, giòn ngon, tiện lợi, giàu năng lượng.'
        }, {
            id: 40,
            status: 1,
            title: 'Lương khô Ankie',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nrouci9aj9b-300x300.jpg',
            category: 'Khác',
            price: 50000,
            des: 'Lương khô Ankie, ngon miệng, giàu dưỡng chất.'
        }, {
            id: 41,
            status: 1,
            title: 'Lương khô dành cho ăn kiêng Ankie',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumf1877e-300x300.jpg',
            category: 'Khác',
            price: 24000,
            des: 'Lương khô Ankie ít calo, thích hợp cho chế độ ăn kiêng.'
        }, {
            id: 42,
            status: 1,
            title: 'Lương khô Mix Quân Đội',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumroc792-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô Mix Quân Đội, tiện dụng, phù hợp bữa ăn nhanh.'
        }, {
            id: 43,
            status: 1,
            title: 'Lương khô Mix SBT',
            img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroun4bg73d-300x300.jpg',
            category: 'Khác',
            price: 22300,
            des: 'Lương khô Mix SBT, nhiều hương vị, ngon miệng, dễ sử dụng.'
        }, {
            id: 44,
            status: 1,
            title: 'Lương khô Quân Nhu',
            img: '../image/img-luongkho/vn-11134207-7r98o-lor7c7288s232f-300x300.jpg',
            category: 'Khác',
            price: 23000,
            des: 'Lương khô Quân Nhu, bổ dưỡng, tiện dụng, thích hợp ăn nhanh.'
        }];


       
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