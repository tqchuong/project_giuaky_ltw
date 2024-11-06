function createProduct() {
    localStorage.removeItem('products');
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../img/img-pro/bap1.jpg',
            category: 'Bắp',
            price: 10000
        }, {
            id: 2,
            status: 1,
            title: 'Bắp nếp',
            img: '../img/img-pro/bap2.jpg',
            category: 'Bắp',
            price: 20000
        }, {
            id: 3,
            status: 1,
            title: 'Gạo Nhật Hokkaido',
            img: '../img/img-pro/gaohokkaido.jpg',
            category: 'Gạo',
            price: 30000
        }, {
            id: 4,
            status: 1,
            title: 'Gạo Nhật Japonica',
            img: '../img/img-pro/gao%20japan.jpg',
            category: 'Gạo',
            price: 40000
        }, {
            id: 5,
            status: 1,
            title: 'Khoai mì',
            img: '../img/img-pro/khoai%20mi.jpg',
            category: 'Khác',
            price: 20000
        }, {
            id: 6,
            status: 1,
            title: 'Khoai lang tím',
            img: '../img/img-pro/khoai%20lang%20tim.jpg',
            category: 'Khác',
            price: 15000
        }, {
            id: 7,
            status: 1,
            title: 'Gạo ST25',
            img: '../img/img-pro/gaost25.jpg',
            category: 'Gạo',
            price: 32000
        }, {
            id: 8,
            status: 1,
            title: 'Hạt kê',
            img: '../img/img-pro/hat%20ke2.jpg',
            category: 'Kê',
            price: 40000
        }, {
            id: 9,
            status: 1,
            title: 'Gạo Tám thơm',
            img: '../img/img-pro/gao-tam-thom-hai-hau.jpg',
            category: 'Gạo',
            price: 22000
        }, {
            id:10 ,
            status: 1,
            title: 'Gạo thiên long',
            img: '../img/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 27000
        }, {
            id:11 ,
            status: 1,
            title: 'Gạo nếp cẩm',
            img: '../img/img-pro/gao-nep-cam.jpg',
            category: 'Gạo',
            price: 30000
        }, {
            id:12 ,
            status: 1,
            title: 'Hạt kê nếp Indo',
            img: '../img/img-pro/hat-ke-nep.jpg',
            category: 'Kê',
            price: 70000
        }, {
            id:13,
            status: 1,
            title: 'Khoai sọ',
            img: '../img/img-pro/khoai-so.jpg',
            category: 'Khác',
            price: 16000
        }, {
            id: 14,
            status: 1,
            title: 'Yến mạch',
            img: '../img/img-pro/yen%20mach.jpg',
            category: 'Khác',
            price: 70000
        }, {
            id: 15,
            status: 1,
            title: 'Cao lương',
            img: '../img/img-pro/cao-luong.jpg',
            category: 'Cao lương',
            price: 80000
        }, {
            id: 16,
            status: 1,
            title: 'Đậu phộng',
            img: '../img/img-pro/dau-phong.jpg',
            category: 'Khác',
            price: 12000
        }, {
            id: 17,
            status: 1,
            title: 'Lúa mì',
            img: '../img/img-pro/lua-mi.jpg',
            category: 'Lúa mì',
            price: 70000
        }, {
            id: 18,
            status: 1,
            title: 'Khoai tây',
            img: '../img/img-pro/khoai-tay.jpg',
            category: 'Khác',
            price: 20000
        }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

window.onload = createProduct();