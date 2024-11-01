function createProduct() {
    localStorage.removeItem('products');
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'Bắp nữ hoàng',
            img: '../img/img-pro/bap1.jpg',
            category: 'Gạo',
            price: 200000,
        }, {
            id: 2,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 3,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 4,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 5,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 6,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 7,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }, {
            id: 8,
            status: 1,
            title: 'name-product',
            img: 'src',
            category: 'Phan loai',
            price: 200000,
        }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

window.onload = createProduct();