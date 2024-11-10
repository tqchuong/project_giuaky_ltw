
function createHotProducts() {
    // Lấy danh sách products từ localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if(!localStorage.getItem('viewProducts')) {
        // Tạo hotProducts tạm thời với thuộc tính view và date
        let viewProducts = products.map(product => {
            return {
                id: product.id,  // Chỉ lấy id từ sản phẩm gốc
                view: Math.floor(Math.random() * 101),  // Giá trị ngẫu nhiên từ 0 tới 100 cho view
                date: '', // Lấy thời gian hiện tại cho thuộc tính date
            };
        });

        // Lưu danh sách sản phẩm view vào localStorage
        localStorage.setItem('viewProducts', JSON.stringify(viewProducts));

        viewProducts.sort((a, b) => b.view - a.view);

        // Lấy top 20 sản phẩm có view cao nhất
        let topProducts = viewProducts.slice(0, 20);

        // Lưu danh sách sản phẩm hot vào localStorage
        localStorage.setItem('hotProducts', JSON.stringify(topProducts));
    }
}


window.onload = function () {

    createHotProducts();
};