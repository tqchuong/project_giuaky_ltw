//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../image/shoppingcart/ngo.jpg',

            category: 'b',
            price: 100000,
        }, {
            id: 2,
            status: 1,
            title: 'Bắp nếp',
            img: '../img/img-pro/bap2.jpg',
            category: 'b',
            price: 200000,
        }, {
            id: 3,
            status: 1,
            title: 'Gạo Nhật Hokkaido',
            img: '../img/img-pro/gaohokkaido.jpg',
            category: 'g',
            price: 300000,
        }, {
            id: 4,
            status: 1,
            title: 'Gạo Nhật Japonica',
            img: '../img/img-pro/gao%20japan.jpg',
            category: 'g',
            price: 400000,
        }, {
            id: 5,
            status: 1,
            title: 'Khoai mì',
            img: '../img/img-pro/khoai%20mi.jpg',
            category: 'khac',
            price: 20000,
        }, {
            id: 6,
            status: 1,
            title: 'Khoai lang tím',
            img: '../img/img-pro/khoai%20lang%20tim.jpg',
            category: 'khac',
            price: 15000,
        }, {
            id: 7,
            status: 1,
            title: 'Gạo ST25',
            img: '../img/img-pro/gaost25.jpg',
            category: 'g',
            price: 320000,
        }, {
            id: 8,
            status: 1,
            title: 'Hạt kê',
            img: '../img/img-pro/hat%20ke2.jpg',
            category: 'ke',
            price: 200000,
        }
    ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}
    
    


window.onload = createProduct();
