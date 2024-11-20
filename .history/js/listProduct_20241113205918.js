localStorage.removeItem('products'); // Thay 'key' bằng tên của mục bạn muốn xóa

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
                title: 'Gạo Thơm Hữu Cơ ST25',
                img: '../image/img-pro/gaost25.jpg',
                images: [
                    '../image/img-pro/gaost25.jpg',
                    '../image/productdetails/gaost25-2.png',
                    '../image/productdetails/gaost25-3.png',
                    '../image/productdetails/gaost25-4.png',
                    '../image/productdetails/gaost25-3.png'
                ],
                category: 'Gạo',
                price: 200000,
                desc: "Gạo ST25 2kg – Gạo ngon nhất Thế Giới có hạt dài, trắng trong, không bạc bụng, khi nấu cơm dẻo thơm, khi để nguội cơm vẫn ngon, không bị cứng. Hàm lượng đạm trong gạo cao (10% protein), cao gắp rưởi gạo thường, vì vậy sẽ no trước khi đầy bụng.",
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
                price: 20000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 6,
                status: 1,
                title: 'Khoai lang tím',
                img: '../image/img-pro/khoai%20lang%20tim.jpg',
                category: 'Khác',
                price: 15000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 7,
                status: 1,
                title: 'Gạo lứt đen',
                img: '../image/img-pro/gao%20lut%20dien%20bien.jpg',
                category: 'Gạo',
                price: 32000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 9,
                status: 1,
                title: 'Hạt kê',
                img: '../image/img-pro/hat%20ke2.jpg',
                category: 'Kê',
                price: 40000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 10,
                status: 1,
                title: 'Gạo thiên long',
                img: '../image/img-pro/gao-tam-thom-hai-hau.jpg',
                category: 'Gạo',
                price: 22000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 11,
                status: 1,
                title: 'Gạo thiên long',
                img: '../image/img-pro/gao-thien-long.jpg',
                category: 'Gạo',
                price: 27000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 12,
                status: 1,
                title: 'Gạo lứt đen',
                img: '../image/img-pro/gao-nep-cam.jpg',
                category: 'Gạo',
                price: 30000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 13,
                status: 1,
                title: 'Khoai sọ',
                img: '../image/img-pro/khoai-so.jpg',
                category: 'Khác',
                price: 16000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 14,
                status: 1,
                title: 'Yến mạch',
                img: '../image/img-pro/yen%20mach.jpg',
                category: 'Khác',
                price: 70000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 15,
                status: 1,
                title: 'Lương khô Bay',
                img: '../image/img-luongkho/LUONG-KHO-BAY-4-300x300.jpg',
                category: 'Lương Khô',
                price: 50000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 16,
                status: 1,
                title: 'Lương khô BB',
                img: '../image/img-luongkho/LUONG-KHO-BB-702-1-300x300.jpg',
                category: 'Lương Khô',
                price: 20000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 17,
                status: 1,
                title: 'Lương khô Cacao',
                img: '../image/img-luongkho/LUONG-KHO-CACAO-5-300x300.jpg',
                category: 'Lương Khô',
                price: 50000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 18,
                status: 1,
                title: 'Lương khô Dream',
                img: '../image/img-luongkho/LUONG-KHO-DREAM-4-300x300.jpg',
                category: 'Lương Khô',
                price: 30000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 19,
                status: 1,
                title: 'Lương khô Golf Man',
                img: '../image/img-luongkho/LUONG-KHO-GOLFMAN-2-300x300.jpg',
                category: 'Lương Khô',
                price: 34000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 20,
                status: 1,
                title: 'Lương khô Mini',
                img: '../image/img-luongkho/LUONG-KHO-MINI-1-300x300.jpg',
                category: 'Lương Khô',
                price: 15000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 21,
                status: 1,
                title: 'Lương khô Ngũ Cốc',
                img: '../image/img-luongkho/LUONG-KHO-NGUCOC-5-300x300.jpg',
                category: 'Lương Khô',
                price: 29000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 22,
                status: 1,
                title: 'Lương khô Snack',
                img: '../image/img-luongkho/LUONG-KHO-SNACK-3-300x300.jpg',
                category: 'Lương Khô',
                price: 18000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 23,
                status: 1,
                title: 'Lương khô Sữa Bò',
                img: '../image/img-luongkho/LUONG-KHO-SUABO-1-300x300.jpg',
                category: 'Lương Khô',
                price: 25000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 24,
                status: 1,
                title: 'Lương khô Yến Mạch',
                img: '../image/img-luongkho/LUONG-KHO-YENMACH-2-300x300.jpg',
                category: 'Lương Khô',
                price: 32000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 25,
                status: 1,
                title: 'Lương khô Gạo Lứt',
                img: '../image/img-luongkho/LUONG-KHO-GAOLUT-3-300x300.jpg',
                category: 'Lương Khô',
                price: 26000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 33,
                status: 1,
                title: 'Lương khô Ăn Kiêng Gạo Lứt',
                img: '../image/img-luongkho/vn-11134207-7r98o-lmrsss8ocp9bb1-300x300.jpg',
                category: 'Lương Khô',
                price: 24000,
                desc: "Mô tả sản phẩm..."
            }, {
                    id: 34,
                    status: 1,
                    title: 'Lương khô Bay mini',
                    img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5bp3s4b-300x300.jpg',
                    category: 'Lương Khô',
                    price: 13000,
                    desc: "Mô tả sản phẩm..."
                }, {
                id: 35,
                status: 1,
                title: 'Lương khô Ăn Kiêng Happy',
                img: '../image/img-luongkho/vn-11134207-7r98o-ln5ovde5oc7s50-300x300.jpg',
                category: 'Lương Khô',
                price: 54000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 36,
                status: 1,
                title: 'Lương khô Chà Bông',
                img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxq6zxb9-300x300.jpg',
                category: 'Lương Khô',
                price: 23000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 37,
                status: 1,
                title: 'Lương khô Mè Đen',
                img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfxt04t57-300x300.jpg',
                category: 'Lương Khô',
                price: 54000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 38,
                status: 1,
                title: 'Lương khô Yến Mạch',
                img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
                category: 'Lương Khô',
                price: 21000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 39,
                status: 1,
                title: 'Lương khô Hạt Điều',
                img: '../image/img-luongkho/vn-11134207-7r98o-lnx9fkfy9uy521-300x300.jpg',
                category: 'Lương Khô',
                price: 34000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 40,
                status: 1,
                title: 'Lương khô Ankie',
                img: '../image/img-luongkho/vn-11134207-7r98o-lo5nrouci9aj9b-300x300.jpg',
                category: 'Lương Khô',
                price: 50000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 41,
                status: 1,
                title: 'Lương khô Dành Cho Ăn Kiêng Ankie',
                img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumf1877e-300x300.jpg',
                category: 'Lương Khô',
                price: 24000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 42,
                status: 1,
                title: 'Lương khô Mix Quân Đội',
                img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroumroc792-300x300.jpg',
                category: 'Lương Khô',
                price: 23000,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 43,
                status: 1,
                title: 'Lương khô Mix SBT',
                img: '../image/img-luongkho/vn-11134207-7r98o-lo5nroun4bg73d-300x300.jpg',
                category: 'Lương Khô',
                price: 22300,
                desc: "Mô tả sản phẩm..."
            }, {
                id: 44,
                status: 1,
                title: 'Lương khô Quân Nhu',
                img: '../image/img-luongkho/vn-11134207-7r98o-lor7c7288s232f-300x300.jpg',
                category: 'Lương Khô',
                price: 23000,
                desc: "Mô tả sản phẩm..."
            },
                {
                    id: 45,
                    status: 1,
                    title: 'Phở gạo',
                    img: '../image/img-dokho/20240912-114520_0e8d2bb5536f4f188e511efcdb22cce3_medium.jpg',
                    category: 'Khác',
                    price: 20000,
                    desc: "Phở gạo, món ăn truyền thống Việt Nam, được làm từ gạo tự nhiên, mềm mịn và thơm ngon."
                },
                {
                    id: 46,
                    status: 1,
                    title: 'Bánh ướt khô',
                    img: '../image/img-dokho/banh-uop-kho-simply-food-chay-tot-market_a00054f60449463c9077095ba108b36c_large.png',
                    category: 'Khác',
                    price: 19000,
                    desc: "Bánh ướt khô, giòn tan, thích hợp để ăn kèm với nhiều loại nước chấm."
                },
                {
                    id: 47,
                    status: 1,
                    title: 'Bánh hỏi',
                    img: '../image/img-dokho/banh_hoi_symply_food_bc5d4a00af7f4b6f97bfd1066af047b8_large.jpg',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bánh hỏi, món ăn đặc sản miền Trung, mềm mịn và dễ ăn."
                },
                {
                    id: 48,
                    status: 1,
                    title: 'Bún gạo Bình Tây',
                    img: '../image/img-dokho/bun-gao-binh-tay-1-300x300_ba9b7c71594c45efbd9d86124a056615_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bún gạo Bình Tây, với sợi bún dai và hương vị đậm đà."
                },
                {
                    id: 49,
                    status: 1,
                    title: 'Bún gạo nàng hương',
                    img: '../image/img-dokho/bun-gao-nang-huong-bt-300x300_a4b2812151974f138d7d5fd7cb67d628_large.png',
                    category: 'Khác',
                    price: 19600,
                    desc: "Bún gạo nàng hương, sản phẩm ngon từ gạo hảo hạng."
                },
                {
                    id: 50,
                    status: 1,
                    title: 'Bún chùm ngây',
                    img: '../image/img-dokho/bun_chum_ngay_chay_tot_market_2c2b602e13984fb4aa6a28c30d34dbc7_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bún chùm ngây, giàu dinh dưỡng và có lợi cho sức khỏe."
                },
                {
                    id: 51,
                    status: 1,
                    title: 'Bún gấc',
                    img: '../image/img-dokho/bun_gac_cao_bang_chay_tot_market_9424ddc1acaf4397b81744a62e7008eb_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bún gấc có màu sắc bắt mắt và hương vị độc đáo."
                },
                {
                    id: 52,
                    status: 1,
                    title: 'Bún gạo lứt',
                    img: '../image/img-dokho/bun_gao_lut_den-chay_tot_market_7f290f46971b4ee2bcb6f7a979d4afaa_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bún gạo lứt tốt cho sức khỏe, chứa nhiều chất xơ."
                },
                {
                    id: 53,
                    status: 1,
                    title: 'Bún ngô',
                    img: '../image/img-dokho/bun_ngo_chay_tot_694a006d68754e34b2cd8300b9efdda7_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Bún ngô, ngọt tự nhiên và giàu dinh dưỡng."
                },
                {
                    id: 54,
                    status: 1,
                    title: 'Hủ tiếu nam vang',
                    img: '../image/img-dokho/hu-tieu-nam-vang-simply-food-chay-tot-market_af31271a96014c60981c8faeb3221d88_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Hủ tiếu nam vang, món ăn đường phố nổi tiếng với vị ngọt từ nước dùng."
                },
                {
                    id: 55,
                    status: 1,
                    title: 'Mì quảng',
                    img: '../image/img-dokho/mi-quang-simply-food-chay-tot-market_eb63d1cbb82347b0b3086be0286050f7_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Mì quảng, mang hương vị đặc trưng của miền Trung với nước dùng thơm ngon."
                },
                {
                    id: 56,
                    status: 1,
                    title: 'Mì chũ gạo lứt',
                    img: '../image/img-dokho/mi_chu_gao_lut_chay_tot_market-removebg-preview_b39099b25cbc4d10a24e2b2a68f163be_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Mì chũ gạo lứt, là lựa chọn tốt cho những ai muốn ăn kiêng."
                },
                {
                    id: 57,
                    status: 1,
                    title: 'Mì chũ rau củ',
                    img: '../image/img-dokho/mi_chu_rau_cu_e0ee9f8ce6604923ad6c49bf72545e9a_large.jpg',
                    category: 'Khác',
                    price: 19500,
                    desc: "Mì chũ rau củ, thơm ngon và bổ dưỡng, phù hợp với mọi bữa ăn."
                },
                {
                    id: 58,
                    status: 1,
                    title: 'Miến dong đỏ',
                    img: '../image/img-dokho/mien_dong_do-chay_tot_market_a673d07e97274811a4531ea1a5475e7a_large.png',
                    category: 'Khác',
                    price: 19500,
                    desc: "Miến dong đỏ, đặc sản miền Bắc với hương vị tự nhiên."
                },
                {
                    id: 59,
                    status: 1,
                    title: 'Miến dong',
                    img: '../image/img-dokho/mien_dong_symply_food_chay_tot_market_d77a32bfcd604c39826413bac3f60794_large.jpg',
                    category: 'Khác',
                    price: 19500,
                    desc: "Miến dong, nhẹ nhàng và thanh mát, thích hợp cho các món canh."
                },
                {
                    id: 60,
                    status: 1,
                    title: 'Bột ngũ cốc dinh dưỡng',
                    img: '../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Bột ngũ cốc dinh dưỡng, sản phẩm giàu chất xơ và vitamin, tốt cho sức khỏe."
                }, {
                    id: 61,
                    status: 1,
                    title: 'Bột ngũ cốc minmin',
                    img: '../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Bột ngũ cốc minmin, với 29 loại hạt, cung cấp nhiều dinh dưỡng cho cơ thể."
                }, {
                    id: 62,
                    status: 1,
                    title: 'Ngũ cốc abalanca',
                    img: '../image/cereal/ngu-coc-abalanca.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc abalanca, sản phẩm tuyệt vời cho bữa sáng dinh dưỡng."
                }, {
                    id: 63,
                    status: 1,
                    title: 'Ngũ cốc ăn chay',
                    img: '../image/cereal/ngu-coc-an-chay.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc ăn chay, lựa chọn hoàn hảo cho chế độ ăn chay."
                }, {
                    id: 64,
                    status: 1,
                    title: 'Ngũ cốc ăn chay',
                    img: '../image/cereal/ngu-coc-an-chay2.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc ăn chay, giàu protein và chất xơ, rất tốt cho sức khỏe."
                }, {
                    id: 65,
                    status: 1,
                    title: 'Ngũ cốc ăn kiêng',
                    img: '../image/cereal/Ngu-coc-an-kieng-EURO-DIET-CEREAL-20-goi-600x600.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc ăn kiêng, hỗ trợ giảm cân hiệu quả."
                }, {
                    id: 66,
                    status: 1,
                    title: 'Ngũ cốc Calbe',
                    img: '../image/cereal/ngu-coc-calbe.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc Calbe, giàu dinh dưỡng, giúp khởi đầu ngày mới tràn đầy năng lượng."
                }, {
                    id: 67,
                    status: 1,
                    title: 'Ngũ cốc cho bé',
                    img: '../image/cereal/ngu-coc-cho-be-nissin-cisco-vi-bap-truyen-thong-180g.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc cho bé, đảm bảo dinh dưỡng và an toàn cho sức khỏe của trẻ."
                }, {
                    id: 68,
                    status: 1,
                    title: 'Ngũ cốc dinh dưỡng',
                    img: '../image/cereal/Ngu-coc-dinh-duong-EURO-CEREAL-20-goi-xuat-Nhat-600x600.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc dinh dưỡng, cung cấp năng lượng và giữ dáng."
                }, {
                    id: 69,
                    status: 1,
                    title: 'Ngũ cốc dinh dưỡng',
                    img: '../image/cereal/Ngu-coc-dinh-duong-EURO-CEREAL-tui-hop-20-goi-600x600.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc dinh dưỡng, sự lựa chọn hoàn hảo cho người bận rộn."
                }, {
                    id: 70,
                    status: 1,
                    title: 'Ngũ cốc dinh dưỡng',
                    img: '../image/cereal/Ngu-coc-dinh-duong-GOLDEN-KARE-20-goi-600x600.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc dinh dưỡng, giúp bổ sung vitamin và khoáng chất cho cơ thể."
                }, {
                    id: 71,
                    status: 1,
                    title: 'Ngũ cốc hena',
                    img: '../image/cereal/ngu-coc-hena.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc hena, giàu chất xơ và dinh dưỡng, tốt cho tiêu hóa."
                }, {
                    id: 72,
                    status: 1,
                    title: 'Ngũ cốc tami',
                    img: '../image/cereal/ngu-coc-tami.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc tami, hợp khẩu vị với nhiều loại hạt tự nhiên."
                }, {
                    id: 73,
                    status: 1,
                    title: 'Ngũ cốc vital',
                    img: '../image/cereal/ngu-coc-vital.jpg',
                    category: 'Ngũ Cốc',
                    price: 19500,
                    desc: "Ngũ cốc vital, nguồn dinh dưỡng phong phú cho sức khỏe và sự phát triển."
                },
                {
                    id: 74,
                    status: 1,
                    title: 'Cháo thịt bò',
                    img: '../image/dong-goi/chao-thit-bo.jpg',
                    category: 'Khác',
                    price: 18500,
                    desc: "Cháo thịt bò, mềm mịn, thơm ngon, thích hợp cho mọi lứa tuổi."
                },
                {
                    id: 75,
                    status: 1,
                    title: 'Cháo tươi lươn đậu xanh',
                    img: '../image/dong-goi/chao-tuoi-luon-dau-xanh-cay-thi-goi-260g-202401021618587467.jpg',
                    category: 'Khác',
                    price: 17500,
                    desc: "Cháo tươi lươn đậu xanh, dinh dưỡng và giàu protein."
                },
                {
                    id: 76,
                    status: 1,
                    title: 'Cháo tươi thịt bò cà rốt',
                    img: '../image/dong-goi/chao-tuoi-thit-bo-cay-thi-goi-260g-202309032058365692.jpg',
                    category: 'Khác',
                    price: 16500,
                    desc: "Cháo tươi thịt bò cà rốt, bổ dưỡng và giàu vitamin."
                },
                {
                    id: 77,
                    status: 1,
                    title: 'Cháo tươi thịt heo bí đỏ',
                    img: '../image/dong-goi/chao-tuoi-thit-heo-cay-thi-goi-260g-202407091435294691.jpg',
                    category: 'Khác',
                    price: 18500,
                    desc: "Cháo tươi thịt heo bí đỏ, món ăn bổ dưỡng và thơm ngon, thích hợp cho bữa sáng hoặc bữa ăn nhẹ."
                },
                {
                    id: 78,
                    status: 1,
                    title: 'Cháo gà',
                    img: '../image/dong-goi/chao-vifon-vi-ga-goi-50g-202306231013287313.jpg',
                    category: 'Khác',
                    price: 12500,
                    desc: "Cháo gà, thơm ngon, dễ ăn, cung cấp dinh dưỡng, là lựa chọn lý tưởng cho mọi lứa tuổi."
                },
                {
                    id: 79,
                    status: 1,
                    title: 'Cháo thịt bằm',
                    img: '../image/dong-goi/chao-vifon-vi-thit-bam-goi-50g-202306231012172188.jpg',
                    category: 'Khác',
                    price: 17500,
                    desc: "Cháo thịt bằm, ngon miệng và dễ tiêu, phù hợp cho cả trẻ em và người lớn trong mâm cơm hàng ngày."
                },
                {
                    id: 80,
                    status: 1,
                    title: 'Mì 3 miền gà sợi phở',
                    img: '../image/dong-goi/mi-3-mien-ga-soi-pho-goi-65g-clone-202406131512410241.jpg',
                    category: 'Khác',
                    price: 12500,
                    desc: "Mì 3 miền gà sợi phở, món ăn ngon miệng, dễ chế biến, phù hợp cho bữa trưa hoặc tối."
                },
                {
                    id: 81,
                    status: 1,
                    title: 'Mì đệ nhất thịt bằm',
                    img: '../image/dong-goi/mi-de-nhat-thit-bam.jpg',
                    category: 'Khác',
                    price: 17500,
                    desc: "Mì đệ nhất thịt bằm, hấp dẫn với hương vị đậm đà và dễ ăn, lý tưởng cho bữa ăn nhanh."
                },
                {
                    id: 82,
                    status: 1,
                    title: 'Mì gấu đỏ bò bít tết',
                    img: '../image/dong-goi/mi-gau-do-bo-bit-tet-goi-63g-202407121408410572.jpg',
                    category: 'Khác',
                    price: 25500,
                    desc: "Mì gấu đỏ bò bít tết, món ăn hấp dẫn với thịt bò mềm và nước sốt đậm đà."
                },
                {
                    id: 83,
                    status: 1,
                    title: 'Mì gấu đỏ gà sợi phở',
                    img: '../image/dong-goi/mi-gau-do-ga-soi-pho.jpg',
                    category: 'Khác',
                    price: 13500,
                    desc: "Mì gấu đỏ gà sợi phở, thích hợp cho những ai yêu thích hương vị gà tươi ngon."
                },
                {
                    id: 84,
                    status: 1,
                    title: 'Mì gấu đỏ thịt bằm',
                    img: '../image/dong-goi/mi-gau-do-thit-bam-goi-63g-202407121411246247.jpg',
                    category: 'Khác',
                    price: 16500,
                    desc: "Mì gấu đỏ thịt bằm, lôi cuốn và thơm ngon, nhanh chóng và dễ chế biến."
                },
                {
                    id: 85,
                    status: 1,
                    title: 'Mì gấu đỏ tôm và gà',
                    img: '../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg',
                    category: 'Khác',
                    price: 18500,
                    desc: "Mì gấu đỏ tôm và gà, sự kết hợp hoàn hảo giữa gà và tôm, hấp dẫn cho bữa ăn."
                },
                {
                    id: 86,
                    status: 1,
                    title: 'Mì hảo hảo chua cay',
                    img: '../image/dong-goi/mi-hao-hao-chua-cay.jpg',
                    category: 'Khác',
                    price: 14500,
                    desc: "Mì hảo hảo chua cay, mang đến trải nghiệm vị giác thú vị với vị cay nồng đặc trưng."
                },
                {
                    id: 87,
                    status: 1,
                    title: 'Mì khoa tây omachi',
                    img: '../image/dong-goi/mi-khoai-tay-omachi-tom-chua-cay-thai-goi-80g-202306061558151636.jpg',
                    category: 'Khác',
                    price: 15500,
                    desc: "Mì khoai tây omachi, đầy đủ hương vị và dinh dưỡng, thích hợp cho cả gia đình."
                },
                {
                    id: 88,
                    status: 1,
                    title: 'Mì lẩu thái',
                    img: '../image/dong-goi/mi-lau-thai.jpg',
                    category: 'Khác',
                    price: 17500,
                    desc: "Mì lẩu thái, mang đậm phong vị Thái, thêm hương vị cho bữa ăn gia đình."
                },
                {
                    id: 89,
                    status: 1,
                    title: 'Mì siu-kay x2',
                    img: '../image/dong-goi/mi-siu-kay-x2.jpg',
                    category: 'Khác',
                    price: 19500,
                    desc: "Mì siu-kay x2, tuyệt vời cho những ai thích ăn cay và đậm đà vị biển."
                },
                {
                    id: 90,
                    status: 1,
                    title: 'Mì xào hảo hảo',
                    img: '../image/dong-goi/mi-xao-hao-hao.jpg',
                    category: 'Khác',
                    price: 15500,
                    desc: "Mì xào hảo hảo, thơm ngon, dễ làm với gia vị đặc trưng."
                },
                {
                    id: 91,
                    status: 1,
                    title: 'Nui rau củ',
                    img: '../image/dong-goi/nui-rau-cu.jpg',
                    category: 'Khác',
                    price: 17500,
                    desc: "Nui rau củ, giàu dinh dưỡng và tốt cho sức khỏe, phù hợp cho cả trẻ em và người lớn."
                },
                {
                    id: 92,
                    status: 1,
                    title: 'Nui thượng hạng',
                    img: '../image/dong-goi/nui-xoan-ba-bay-goi-500g-clone-202405271312145099.jpg',
                    category: 'Khác',
                    price: 16500,
                    desc: "Nui thượng hạng, chất lượng cao, dễ chế biến thành nhiều món ăn ngon."
                },
                {
                    id: 93,
                    status: 1,
                    title: 'Yến mạch trái cây',
                    img: '../image/img-pro/yen-mach-trai-cay-sunrise-vi-pho-mai-bich-300g-202306241735231539.png',
                    category: 'Khác',
                    price: 13500,
                    desc: "Yến mạch trái cây, bổ dưỡng và giàu vitamin, là bữa sáng lý tưởng cho mọi gia đình."
                },
                {
                    id: 94,
                    status: 1,
                    title: 'Gạo thơm thái',
                    img: '../image/riceproducts/gao-thom-thai-300x300.jpg',
                    category: 'Gạo',
                    price: 17500,
                    desc: "Gạo thơm thái, hạt gạo bóng, dẻo, mang đến bữa cơm thơm ngon cho gia đình."
                },{
                    id: 95,
                    status: 1,
                    title: 'Gạo thơm lài sữa',
                    img: '../image/riceproducts/gao-thom-lai-sua-300x300.jpg',
                    category: 'Gạo',
                    price: 17500,
                    desc: "Gạo thơm lài sữa, hạt gạo dài, thơm ngon và dẻo, mang lại bữa cơm ngon miệng."
                },
                {
                    id: 96,
                    status: 1,
                    title: 'Gạo thơm lài',
                    img: '../image/riceproducts/gao-thom-lai-300x300.jpg',
                    category: 'Gạo',
                    price: 19500,
                    desc: "Gạo thơm lài, mang đến hương vị đặc trưng, thích hợp cho nhiều món ăn Việt."
                },
                {
                    id: 97,
                    status: 1,
                    title: 'Gạo tám thơm',
                    img: '../image/riceproducts/gao-tam-thom-300x300.jpg',
                    category: 'Gạo',
                    price: 15500,
                    desc: "Gạo tám thơm, với hương thơm đặc trưng, dịu ngọt, rất thích hợp cho bữa cơm gia đình."
                },
                {
                    id: 98,
                    status: 1,
                    title: 'Gạo nếp than',
                    img: '../image/riceproducts/gao-nep-than-300x300.jpg',
                    category: 'Gạo',
                    price: 16500,
                    desc: "Gạo nếp than, với hương vị ngọt, dẻo, thường dùng để làm xôi và các món bánh truyền thống."
                },
                {
                    id: 99,
                    status: 1,
                    title: 'Gạo nàng hoa',
                    img: '../image/riceproducts/gao-nang-hoa-300x300.jpg',
                    category: 'Gạo',
                    price: 14500,
                    desc: "Gạo nàng hoa, mang hương vị thơm ngon, mềm dẻo, thích hợp cho các món ăn hàng ngày."
                },
                {
                    id: 100,
                    status: 1,
                    title: 'Gạo long châu',
                    img: '../image/riceproducts/gao-long-chau-66-moi-300x300.jpg',
                    category: 'Gạo',
                    price: 12500,
                    desc: "Gạo long châu, với hạt gạo bóng, dẻo và thơm, hoàn hảo cho bữa cơm gia đình."
                },
                {
                    id: 101,
                    status: 1,
                    title: '  Khoai tây McCain Bít Tết 34',
                    img: '../image/img-khoai1/ Khoai tây McCain Bít Tết 34 (~19mm) - McCain Steak Cut (Steak House) Fries 34 (~19mm) - 5kgbao.jpg',
                    category: 'Khoai',
                    price: 23500,
                    desc: ''
                },
                {
                    id: 102,
                    status: 1,
                    title: 'Khoai tây McCain Cắt múi tẩm tỏi ',
                    img: '../image/img-khoai1/ Khoai tây McCain Cắt múi tẩm tỏi  – McCain Country Potato Wedges -2.5kgbao .jpg',
                    category: 'Khoai',
                    price: 25000,
                    desc: ''
                },
                {
                    id: 103,
                    status: 1,
                    title: ' Khoai tây  McCain Cọng lớn  38',
                    img: '../image/img-khoai1/ Khoai tây  McCain Cọng lớn  38 (~10mm) - McCain Straight Cut  Fries 38 (~10mm).jpg',
                    category: 'Khoai',
                    price: 47000,
                    desc: ''
                },
                {
                    id: 104,
                    status: 1,
                    title: 'Khoai tây  McCain Cọng nhỏ 14 ',
                    img: '../image/img-khoai1/ Khoai tây  McCain Cọng nhỏ 14 (~6mm) - McCain Shoestring Fries 14 (~6mm) – 3kgbao.jpg',
                    category: 'Khoai',
                    price: 69000,
                    desc: ''
                },
                {
                    id: 105,
                    status: 1,
                    title: 'Khoai tây AVIKO FREEZE CHILL ',
                    img: '../image/img-khoai1/AVIKO FREEZE CHILL (POMMES FRITES) 916 - 15MM.jpg',
                    category: 'Khoai',
                    price: 34000,
                    desc: ''
                },
                {
                    id: 106,
                    status: 1,
                    title: 'BẮP HẠT ĐÔNG LẠNH BECO ',
                    img: '../image/img-khoai1/BẮP HẠT ĐÔNG LẠNH BECO.jpg',
                    category: 'Bắp',
                    price: 56000,
                    desc: ''
                },
                {
                    id: 107,
                    status: 1,
                    title: 'Bắp Hạt Đông Lạnh Corn Tomex ',
                    img: '../image/img-khoai1/Bắp Hạt Đông Lạnh Corn Tomex.jpg',
                    category: 'Bắp',
                    price: 72000,
                    desc: ''
                },
                {
                    id: 108,
                    status: 1,
                    title: 'BẮP HẠT ĐÔNG LẠNH DAT ',
                    img: '../image/img-khoai1/BẮP HẠT ĐÔNG LẠNH DAT - SCHAUB (450GRGÓI- 24 GÓITHÙNG).jpg',
                    category: 'Bắp',
                    price: 38000,
                    desc: ''
                },
                {
                    id: 109,
                    status: 1,
                    title: 'Hành Tây Cắt Vòng Tẩm Bột Lutosa',
                    img: '../image/img-khoai1/Hành Tây Cắt Vòng Tẩm Bột Lutosa - Onion Rings Lutosa.jpg',
                    category: 'Khác',
                    price: 54000,
                    desc: ''
                },
                {
                    id: 110,
                    status: 1,
                    title: 'HẠT HỖN HỢP ĐÔNG LẠNH MIX TOMEX ',
                    img: '../image/img-khoai1/HẠT HỖN HỢP ĐÔNG LẠNH MIX TOMEX.jpg',
                    category: 'Khác',
                    price: 62000,
                    desc: ''
                },
                {
                    id: 111,
                    status: 1,
                    title: 'KHOAI TÂY MỸ 500GR 38 ',
                    img: '../image/img-khoai1/KHAY KHOAI TÂY MỸ 500GR (MCCAIN CỌNG LỚN 38 ~10MM).jpg',
                    category: 'Khoai',
                    price: 29000,
                    desc: ''
                },
                {
                    id: 112,
                    status: 1,
                    title: 'khoai tây Mỹ 500gr 34 ',
                    img: '../image/img-khoai1/Khay khoai tây Mỹ 500gr - McCain Bít Tết 34 (~19mm).jpg',
                    category: 'Khoai',
                    price: 76000,
                    desc: ''
                },
                {
                    id: 113,
                    status: 1,
                    title: 'KHOAI LANG SWEET TREAT ',
                    img: '../image/img-khoai1/KHOAI LANG SWEET TREAT.jpg',
                    category: 'Khoai',
                    price: 49000,
                    desc: ''
                },
                {
                    id: 114,
                    status: 1,
                    title: 'KHOAI TÂY AVIKO CẮT THẲNG 38 1KG',
                    img: '../image/img-khoai1/KHOAI TÂY AVIKO CẮT THẲNG 38 AA-38 AVIKO FOMMES FRIES AA-GÓI 1KG.jpg',
                    category: 'Khoai',
                    price: 31000,
                    desc: ''
                },
                {
                    id: 115,
                    status: 1,
                    title: 'KHOAI TÂY AVIKO CẮT THẲNG 38 2.5KG',
                    img: '../image/img-khoai1/KHOAI TÂY AVIKO CẮT THẲNG 38 AA-38 AVIKO FOMMES FRIES AA-GÓI 2.5KG.jpg',
                    category: 'Khoai',
                    price: 67000,
                    desc: ''
                },
                {
                    id: 116,
                    status: 1,
                    title: 'KHOAI TÂY AVIKO HASHBROWN BÁNH TRÒN 2.5KG ',
                    img: '../image/img-khoai1/KHOAI TÂY AVIKO HASHBROWN BÁNH TRÒN-AVIKO HASHBROWN-2.5KG.jpg',
                    category: 'Khoai',
                    price: 85000,
                    desc: ''
                },
                {
                    id: 117,
                    status: 1,
                    title: 'KHOAI TÂY AVIKO RĂNG CƯA-12 2.5KG ',
                    img: '../image/img-khoai1/KHOAI TÂY AVIKO RĂNG CƯA-12 AVIKO CRINKCLE CUT AA-2,5KG.jpg',
                    category: 'Khoai',
                    price: 43000,
                    desc: ''
                },
                {
                    id: 118,
                    status: 1,
                    title: 'KHOAI TÂY BURGER RAU CỦ ',
                    img: '../image/img-khoai1/KHOAI TÂY BURGER RAU CỦ.jpg',
                    category: 'Khoai',
                    price: 24000,
                    desc: ''
                },
                {
                    id: 119,
                    status: 1,
                    title: 'KHOAI TÂY BÁNH CHURROS AVIKO 1KG ',
                    img: '../image/img-khoai1/KHOAI TÂY BÁNH CHURROS AVIKO-AVIKO CHURROS FRIES AAA-1KG .jpg',
                    category: 'Khoai',
                    price: 58000,
                    desc: ''
                },
                {
                    id: 120,
                    status: 1,
                    title: 'Khoai Tây Bánh Hình Nút Chai ',
                    img: '../image/img-khoai1/Khoai Tây Bánh Hình Nút Chai - Cork Hash Browns.jpg',
                    category: 'Khoai',
                    price: 39000,
                    desc: ''
                },
                {
                    id: 121,
                    status: 1,
                    title: 'KHOAI TÂY BÁNH TRÒN BABY AVIKO 2.5KG',
                    img: '../image/img-khoai1/KHOAI TÂY BÁNH TRÒN BABY AVIKO-AVIKO ROSTIBITE LAW SALT-GÓI 2,5KG.jpg',
                    category: 'Khoai',
                    price: 75000,
                    desc: ''
                },
                {
                    id: 122,
                    status: 1,
                    title: 'Khoai Tây Chiên Cắt Thẳng Mydibel 38 ',
                    img: '../image/img-khoai1/Khoai Tây Chiên Cắt Thẳng Mydibel 38 (~10mm)  .jpg',
                    category: 'Khoai',
                    price: 59000,
                    desc: ''
                },
                {
                    id: 123,
                    status: 1,
                    title: 'KHOAI TÂY COUNTRY POMMES FRITES 38 ',
                    img: '../image/img-khoai1/KHOAI TÂY COUNTRY POMMES FRITES 38 - 9,5MM.jpg',
                    category: 'Khoai',
                    price: 88000,
                    desc: ''
                },
                {
                    id: 124,
                    status: 1,
                    title: 'KHOAI TÂY CẮT MÚI AVIKO TẨM GIA VỊ ỚT 2.5KG ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT MÚI AVIKO TẨM GIA VỊ ỚT-AVIKO SPYCY JACKET WEDGE-2,5KG.jpg',
                    category: 'Khoai',
                    price: 68000,
                    desc: ''
                },
                {
                    id: 125,
                    status: 1,
                    title: 'KHOAI TÂY CẮT MÚI CAU ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT MÚI CAU.jpg',
                    category: 'Khoai',
                    price: 37000,
                    desc: ''
                },
                {
                    id: 126,
                    status: 1,
                    title: 'Khoai Tây Cắt Múi Tẩm Gia Vị Classic Wedges 1KG ',
                    img: '../image/img-khoai1/Khoai Tây Cắt Múi Tẩm Gia Vị Classic Wedges (1kgbao, 10kgthùng).jpg',
                    category: 'Khoai',
                    price: 49000,
                    desc: ''
                },
                {
                    id: 127,
                    status: 1,
                    title: 'Khoai Tây Cắt Múi Tẩm Gia Vị Lamb Weston 2.27KG ',
                    img: '../image/img-khoai1/Khoai Tây Cắt Múi Tẩm Gia Vị Lamb Weston (2.27kggói – 13.62kgthùng).jpg',
                    category: 'Khoai',
                    price: 80000,
                    desc: ''
                },
                {
                    id: 128,
                    status: 1,
                    title: 'KHOAI TÂY CẮT MÚI TẨM GIA VỊ TỎI VÀ THẢO MỘC ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT MÚI TẨM GIA VỊ TỎI VÀ THẢO MỘC-AVIKO GARLIC AND HERD WEDGES-2,5KG.jpg',
                    category: 'Khoai',
                    price: 54000,
                    desc: ''
                },
                {
                    id: 129,
                    status: 1,
                    title: 'KHOAI TÂY CẮT MÚI TẨM GIA VỊ ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT MÚI TẨM GIA VỊ-AVIKO JACKET WEDGES CUT-2,5KG.jpg',
                    category: 'Khoai',
                    price: 73000,
                    desc: ''
                },
                {
                    id: 130,
                    status: 1,
                    title: 'KHOAI TÂY CẮT MÚI TẨM VỊ ỚT ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT MÚI TẨM VỊ ỚT - LUTOSA (750 GRAMGÓI - 12 GÓITHÙNG).jpg',
                    category: 'Khoai',
                    price: 29000,
                    desc: ''
                },
                {
                    id: 131,
                    status: 1,
                    title: 'KHOAI TÂY CẮT RĂNG CƯA CRINKLE ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT RĂNG CƯA CRINKLE 12.jpg',
                    category: 'Khoai',
                    price: 63000,
                    desc: ''
                },
                {
                    id: 132,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG AVIKO  ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG AVIKO POMMES FRITES JULIENNE SHOESTRING 7MM.jpg',
                    category: 'Khoai',
                    price: 45000,
                    desc: ''
                },
                {
                    id: 133,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG COUNTRY ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG COUNTRY HOUSE 14 - 7MM.jpg',
                    category: 'Khoai',
                    price: 57000,
                    desc: ''
                },
                {
                    id: 134,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG CÓ VỎ SUPERLONG ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG CÓ VỎ SUPERLONG SKIN ON 11MM.jpg',
                    category: 'Khoai',
                    price: 29000,
                    desc: ''
                },
                {
                    id: 135,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG FARM 7mm ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG FARM FRITES FINEST 7MM.jpg',
                    category: 'Khoai',
                    price: 73000,
                    desc: ''
                },
                {
                    id: 136,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG FARM 10mm ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG FARM FRITES FINEST 10MM.jpg',
                    category: 'Khoai',
                    price: 85000,
                    desc: ''
                },
                {
                    id: 137,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG POMMES ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG POMMES FRITES JULIENNE 14 - 7MM.jpg',
                    category: 'Khoai',
                    price: 48000,
                    desc: ''
                },
                {
                    id: 138,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG POMMES 9.5mm ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG POMMES FRITES  38 - 9.5MM.jpg',
                    category: 'Khoai',
                    price: 29000,
                    desc: ''
                },
                {
                    id: 139,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG SIÊU GIÒN AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG SIÊU GIÒN AVIKO SUPERCRUNCH THICK CUT 18MM.jpg',
                    category: 'Khoai',
                    price: 56000,
                    desc: ''
                },
                {
                    id: 140,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG STEAK HOUSE ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG STEAK HOUSE 34.jpg',
                    category: 'Khoai',
                    price: 42000,
                    desc: ''
                },
                {
                    id: 141,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG SUPERCRUNCH  ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG SUPERCRUNCH SALT 14 - 7MM.jpg',
                    category: 'Khoai',
                    price: 75000,
                    desc: ''
                },
                {
                    id: 142,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG SUPERCRUNCH 9.5mm ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG SUPERCRUNCH SALT 38 -9.5MM.jpg',
                    category: 'Khoai',
                    price: 64000,
                    desc: ''
                },
                {
                    id: 143,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG SUPERLONG ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG SUPERLONG 14 - 7MM.jpg',
                    category: 'Khoai',
                    price: 32000,
                    desc: ''
                },
                {
                    id: 144,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG SUPERLONG 9.5mm ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG SUPERLONG 38- 9,5MM.jpg',
                    category: 'Khoai',
                    price: 55000,
                    desc: ''
                },
                {
                    id: 145,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG 11MM SIÊU DÀI AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG 11MM SIÊU DÀI AVIKO-11 AVIKO SUPER LONG AAA-2,5KG.jpg',
                    category: 'Khoai',
                    price: 45000,
                    desc: ''
                },
                {
                    id: 146,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG 14 AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG 14 AVIKO-14 AVIKO JULIENCE AA-2,5KG.jpg',
                    category: 'Khoai',
                    price: 71000,
                    desc: ''
                },
                {
                    id: 147,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG 14 SIÊU DÀI AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG 14 SIÊU DÀI AVIKO-14 AVIKO SUPER LONG AAA-2,5KG.jpg',
                    category: 'Khoai',
                    price: 39000,
                    desc: ''
                },
                {
                    id: 148,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG 34 AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG 34 AVIKO-34 AVIKO STEAK HOUSE FRIES-GÓI 2,5KG.jpg',
                    category: 'Khoai',
                    price: 85000,
                    desc: ''
                },
                {
                    id: 149,
                    status: 1,
                    title: 'KHOAI TÂY CẮT THẲNG 38 SIÊU DÀI AVIKO ',
                    img: '../image/img-khoai1/KHOAI TÂY CẮT THẲNG 38 SIÊU DÀI AVIKO-38 AVIKO SUPER LONG AAA-2,5KG.jpg',
                    category: 'Khoai',
                    price: 67000,
                    desc: ''
                },
                {
                    id: 150,
                    status: 1,
                    title: 'KHOAI TÂY GRATIN TOMATO ',
                    img: '../image/img-khoai1/KHOAI TÂY GRATIN TOMATO & MOZZARELA.jpg',
                    category: 'Khoai',
                    price: 48000,
                    desc: ''
                },
                {
                    id: 151,
                    status: 1,
                    title: 'KHOAI TÂY GRATIN TOMATO 2KG ',
                    img: '../image/img-khoai1/KHOAI TÂY GRATIN TOMATO & MOZZARELA.jpg',
                    category: 'Khoai',
                    price: 89000,
                    desc: ''
                },
                {
                    id: 152,
                    status: 1,
                    title: 'Khoai Tây Hash Brown',
                    img: '../image/img-khoai1/Khoai Tây Hash Brown Bánh Tròn.jpg',
                    category: 'Khoai',
                    price: 59000,
                    desc: ''
                },
                {
                    id: 153,
                    status: 1,
                    title: 'KHOAI TÂY HASH BROWN TAM GIÁC ',
                    img: '../image/img-khoai1/KHOAI TÂY HASH BROWN TAM GIÁC HIỆU MCCAIN MUA Ở ĐÂU.jpg',
                    category: 'Khoai',
                    price: 37000,
                    desc: ''
                },
                {
                    id: 154,
                    status: 1,
                    title: 'KHOAI TÂY HASHBROWN TAM GIÁC AVIKO 2.5KG ',
                    img: '../image/img-khoai1/KHOAI TÂY HASHBROWN TAM GIÁC AVIKO-AVIKO HASHBROWN TRIANGLE-2,5KG .jpg',
                    category: 'Khoai',
                    price: 72000,
                    desc: ''
                },
                {
                    id: 155,
                    status: 1,
                    title: 'KHOAI TÂY KEM PHÔ MAI ',
                    img: '../image/img-khoai1/KHOAI TÂY KEM PHÔ MAI GRATIN CREAM & CHEESE.jpg',
                    category: 'Khoai',
                    price: 94000,
                    desc: ''
                },
                {
                    id: 156,
                    status: 1,
                    title: 'Khoai tây McCain  Răng cưa (13mm) ',
                    img: '../image/img-khoai1/Khoai tây McCain  Răng cưa (13mm)  - McCain Crinkle Cut Fries (13mm) – 5kgbao .jpg',
                    category: 'Khoai',
                    price: 50000,
                    desc: ''
                },
                {
                    id: 157,
                    status: 1,
                    title: 'KHOAI TÂY MINIGRATIN AARDPEER ',
                    img: '../image/img-khoai1/KHOAI TÂY MINIGRATIN AARDPEER & PASTINAAK.jpg',
                    category: 'Khoai',
                    price: 32000,
                    desc: ''
                },
                {
                    id: 158,
                    status: 1,
                    title: 'KHOAI TÂY MINIGRATIN ASPERGE ',
                    img: '../image/img-khoai1/KHOAI TÂY MINIGRATIN ASPERGE & PARMEZAN.jpg',
                    category: 'Khoai',
                    price: 77000,
                    desc: ''
                },
                {
                    id: 159,
                    status: 1,
                    title: 'KHOAI TÂY MÚI CAU VỊ CƠ BẢN ',
                    img: '../image/img-khoai1/KHOAI TÂY MÚI CAU VỊ CƠ BẢN MEGA WEDGES 8.jpg',
                    category: 'Khoai',
                    price: 85000,
                    desc: ''
                },
                {
                    id: 160,
                    status: 1,
                    title: 'KHOAI TÂY MÚI CAU VỊ TỎI VÀ LÁ MÙI ',
                    img: '../image/img-khoai1/KHOAI TÂY MÚI CAU VỊ TỎI VÀ LÁ MÙI GARLIC &HERBS WEDGES 8.jpg',
                    category: 'Khoai',
                    price: 59000,
                    desc: ''
                },
                {
                    id: 161,
                    status: 1,
                    title: 'KHOAI TÂY MÚI CAU VỊ ỚT SPICY JACKET WEDGES',
                    img: '../image/img-khoai1/KHOAI TÂY MÚI CAU VỊ ỚT SPICY JACKET WEDGES 8.jpg',
                    category: '',
                    price: 34000,
                    desc: ''
                },
                {
                    id: 162,
                    status: 1,
                    title: 'KHOAI TÂY NGHIỀN BI ÍT MUỐI',
                    img: '../image/img-khoai1/KHOAI TÂY NGHIỀN BI ÍT MUỐI ROSTI BITES LOW SALT.jpg',
                    category: 'Khoai',
                    price: 72000,
                    desc: ''
                },
                {
                    id: 161,
                    status: 1,
                    title: 'Khoai Tây Nghiền Lamb’s Supreme Original',
                    img: '../image/img-khoai1/Khoai Tây Nghiền Lamb’s Supreme Original Mashed Potato – Lamb Weston.jpg',
                    category: 'Khoai',
                    price: 45000,
                    desc: ''
                },
                {
                    id: 162,
                    status: 1,
                    title: 'KHOAI TÂY NGHIỀN MASHED',
                    img: '../image/img-khoai1/KHOAI TÂY NGHIỀN MASHED POTATOES.jpg',
                    category: 'Khoai',
                    price: 72000,
                    desc: ''
                },
                {
                    id: 163,
                    status: 1,
                    title: 'Khoai Tây Nghiền Mc Cain',
                    img: '../image/img-khoai1/Khoai Tây Nghiền Mc Cain - Mc Cain Mashed Potatoes.jpg',
                    category: 'Khoai',
                    price: 69000,
                    desc: ''
                },
                {
                    id: 164,
                    status: 1,
                    title: 'KHOAI TÂY NGHIỀN TAM GIÁC ROSTIKO',
                    img: '../image/img-khoai1/KHOAI TÂY NGHIỀN TAM GIÁC ROSTIKO\'S TRIANGLES.jpg',
                    category: 'Khoai',
                    price: 57000,
                    desc: ''
                },
                {
                    id: 165,
                    status: 1,
                    title: 'KHOAI TÂY NGHIỀN TRÒN HASH',
                    img: '../image/img-khoai1/KHOAI TÂY NGHIỀN TRÒN HASH BROWN ROUNDS-FRYER.jpg',
                    category: 'Khoai',
                    price: 40000,
                    desc: ''
                },
                {
                    id: 166,
                    status: 1,
                    title: 'KHOAI TÂY PHO MAI QUE AVIKO MOZZARELLA',
                    img: '../image/img-khoai1/KHOAI TÂY PHO MAI QUE AVIKO MOZZARELLA FINGER.jpg',
                    category: 'Khoai',
                    price: 88000,
                    desc: ''
                },
                {
                    id: 167,
                    status: 1,
                    title: 'Khoai Tây Răng Cưa Mc Cain',
                    img: '../image/img-khoai1/Khoai Tây Răng Cưa Mc Cain - McCain Crinkle Cut Fries (5kg Bao,15kgThùng).jpg',
                    category: 'Khoai',
                    price: 43000,
                    desc: ''
                },
                {
                    id: 168,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT CẮT THẲNG ¼ ',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT CẮT THẲNG ¼ EXTRA LONG FANCY BLUE RIBBON.jpg',
                    category: 'Khoai',
                    price: 54000,
                    desc: ''
                },
                {
                    id: 169,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT GỢN SÓNG',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT GỢN SÓNG VỊ SỐT BBQ.jpg',
                    category: 'Khoai',
                    price: 60000,
                    desc: ''
                },
                {
                    id: 170,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT GỢN SÓNG B',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT GỢN SÓNG VỊ SỐT BUFFALO.jpg',
                    category: 'Khoai',
                    price: 47000,
                    desc: ''
                },
                {
                    id: 171,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT HASHBROWN',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT HASHBROWN TAM GIÁC.jpg',
                    category: 'Khoai',
                    price: 52000,
                    desc: ''
                },
                {
                    id: 172,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT HASHBROWN VUÔNG',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT HASHBROWN VUÔNG.jpg',
                    category: 'Khoai',
                    price: 75000,
                    desc: ''
                },
                {
                    id: 173,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT MÚI CAU',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT MÚI CAU CÓ VỎ (8 MÚI).jpg',
                    category: 'Khoai',
                    price: 67000,
                    desc: ''
                },
                {
                    id: 174,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT SỢI MINHON',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT SỢI MINHON 316” VỊ SỐT BUFFALO.jpg',
                    category: 'Khoai',
                    price: 49000,
                    desc: ''
                },
                {
                    id: 175,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT 34',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT 34” CẮT THẲNG EXTRA LONG FANCY BLUE RIBBON .jpg',
                    category: 'Khoai',
                    price: 88000,
                    desc: ''
                },
                {
                    id: 176,
                    status: 1,
                    title: 'KHOAI TÂY SIMPLOT 38 CẮT THẲNG EXTRA',
                    img: '../image/img-khoai1/KHOAI TÂY SIMPLOT 38 CẮT THẲNG EXTRA LONG FANCY BLUE RIBBON (NWSEAL).jpg',
                    category: 'Khoai',
                    price: 43000,
                    desc: ''
                },
                {
                    id: 177,
                    status: 1,
                    title: 'KHOAI TÂY XOẮN CHURROS',
                    img: '../image/img-khoai1/KHOAI TÂY XOẮN CHURROS.jpg',
                    category: 'Khoai',
                    price: 60000,
                    desc: ''
                },
                {
                    id: 178,
                    status: 1,
                    title: 'Khoai Tây 14 Mc Cain 3KG',
                    img: '../image/img-khoai1/Khoai Tây 14 Mc Cain - McCain Shoestring Fries 14 (3kg Bao,15kgThùng).jpg',
                    category: 'Khoai',
                    price: 56000,
                    desc: ''
                },
                {
                    id: 179,
                    status: 1,
                    title: 'Khoai Tây 34 Steak House',
                    img: '../image/img-khoai1/Khoai Tây 34 Steak House Fries Mc Cain (5kg Bao,15kgThùng).jpg',
                    category: 'Khoai',
                    price: 72000,
                    desc: ''
                },
                {
                    id: 180,
                    status: 1,
                    title: 'Khoai Tây 38 Mc Cain 5KG',
                    img: '../image/img-khoai1/Khoai Tây 38 Mc Cain - McCain Straight Cut Fries 38 (5kg Bao,15kgThùng).jpg',
                    category: 'Khoai',
                    price: 124000,
                    desc: ''
                },
                {
                    id: 181,
                    status: 1,
                    title: 'RAU CỦ HỖN HỢP ĐÔNG',
                    img: '../image/img-khoai1/RAU CỦ HỖN HỢP ĐÔNG LẠNH.jpg',
                    category: 'Khác',
                    price: 46000,
                    desc: ''
                },
                {
                    id: 182,
                    status: 1,
                    title: 'Đậu Bơ Đóng Hộp Fiamma',
                    img: '../image/img-khoai1/Đậu Bơ Đóng Hộp Fiamma - Canned Butter Beans Fiamma .jpg',
                    category: 'Khác',
                    price: 77000,
                    desc: ''
                },
                {
                    id: 183,
                    status: 1,
                    title: 'ĐẬU GÀ CECI (DIVELLA) 400GR',
                    img: '../image/img-khoai1/ĐẬU GÀ CECI (DIVELLA) 400GR.jpg',
                    category: 'Khác',
                    price: 53000,
                    desc: ''
                },
                {
                    id: 184,
                    status: 1,
                    title: 'Đậu Hà Lan Green Pea đông lạnh',
                    img: '../image/img-khoai1/Đậu Hà Lan Green Pea đông lạnh (450 gr gói).jpg',
                    category: 'Khác',
                    price: 92000,
                    desc: ''
                },
                {
                    id: 185,
                    status: 1,
                    title: 'Đậu Hà Lan Đóng Hộp Fiamma',
                    img: '../image/img-khoai1/Đậu Hà Lan Đóng Hộp Fiamma - Canned Green Peas Fiamma.jpg',
                    category: 'Khác',
                    price: 47000,
                    desc: ''
                },
                {
                    id: 186,
                    status: 1,
                    title: 'ĐẬU HÀ LAN ĐÔNG LẠNH BECO',
                    img: '../image/img-khoai1/ĐẬU HÀ LAN ĐÔNG LẠNH BECO.jpg',
                    category: 'Khác',
                    price: 59000,
                    desc: ''
                },
                {
                    id: 187,
                    status: 1,
                    title: 'ĐẬU HÀ LAN ĐÔNG LẠNH PEAS',
                    img: '../image/img-khoai1/ĐẬU HÀ LAN ĐÔNG LẠNH PEAS TOMEX.jpg',
                    category: 'Khác',
                    price: 65000,
                    desc: ''
                },
                {
                    id: 188,
                    status: 1,
                    title: 'Đậu Hỗn Hợp 4 Loại Fiamma',
                    img: '../image/img-khoai1/Đậu Hỗn Hợp 4 Loại Fiamma - Canned Four Beans Salad Fiamma.jpg',
                    category: 'Khác',
                    price: 70000,
                    desc: ''
                },
                {
                    id: 189,
                    status: 1,
                    title: 'Đậu Lăng Đóng Hộp Fiamma',
                    img: '../image/img-khoai1/Đậu Lăng Đóng Hộp Fiamma - Canned Lentils Fiamma .jpg',
                    category: 'Khác',
                    price: 85000,
                    desc: ''
                },
                {
                    id: 190,
                    status: 1,
                    title: 'Đậu Nành Đông Lạnh',
                    img: '../image/img-khoai1/Đậu Nành Đông Lạnh - Frozen Soybeans.jpg',
                    category: 'Khác',
                    price: 74000,
                    desc: ''
                },
                {
                    id: 191,
                    status: 1,
                    title: 'Đậu Răng Ngựa Đóng Hộp Fiamma',
                    img: '../image/img-khoai1/Đậu Răng Ngựa Đóng Hộp Fiamma - Canned Garbanzo Beans Fiamma.jpg',
                    category: 'Khác',
                    price: 55000,
                    desc: ''
                },
                {
                    id: 192,
                    status: 1,
                    title: '',
                    img: '../image/img-khoai1/ĐẬU SỐT CÀ FIAMMA 400GRAMLON – 24 LONTHÙNG.jpg',
                    category: 'Khác',
                    price: 79000,
                    desc: ''
                },
                {
                    id: 193,
                    status: 1,
                    title: 'ĐẬU TRẮNG TÂY BAN NHA FAGIOLI (DIVELLA)',
                    img: '../image/img-khoai1/ĐẬU TRẮNG TÂY BAN NHA FAGIOLI (DIVELLA) 400GR.jpg',
                    category: 'Khác',
                    price: 42000,
                    desc: ''
                },
                {
                    id: 194,
                    status: 1,
                    title: 'Đậu Trắng Đóng Hộp Fiamma',
                    img: '../image/img-khoai1/Đậu Trắng Đóng Hộp Fiamma - Canned White Beans Fiamma.jpg',
                    category: 'Khác',
                    price: 86000,
                    desc: ''
                },
                {
                    id: 195,
                    status: 1,
                    title: 'ĐẬU ĐỎ ROSSI KIDNEY LESSATI (DIVELLA)',
                    img: '../image/img-khoai1/ĐẬU ĐỎ ROSSI KIDNEY LESSATI (DIVELLA) 400GR.jpg',
                    category: 'Khác',
                    price: 47000,
                    desc: ''
                },
                {
                    id: 196,
                    status: 1,
                    title: 'BẮP HẠT ĐÔNG LẠNH TG',
                    img: '../image/img-khoai1/bap hat tran gia.jpg',
                    category: 'Bắp',
                    price: 29000,
                    desc: ''
                },
                {
                    id: 197,
                    status: 1,
                    title: 'BẮP HẠT ĐÔNG LẠNH CRYSTAL ',
                    img: '../image/img-khoai1/Bap dong hat.jpg',
                    category: 'Bắp',
                    price: 64000,
                    desc: ''
                },
                {
                    id: 198,
                    status: 1,
                    title: 'ĐẬU HÀ LAN ĐÔNG LẠNH ',
                    img: '../image/img-khoai1/dau ha lan dong lanh.jpg',
                    category: 'Khác',
                    price: 58000,
                    desc: ''
                },
                {
                    id: 199,
                    status: 1,
                    title: 'HẠT HỖN HỢP ĐÔNG LẠNH',
                    img: '../image/img-khoai1/HẠT HỖN HỢP ĐÔNG LẠNH.jpg',
                    category: 'Khác',
                    price: 37000,
                    desc: ''
                },
                {
                    id: 200,
                    status: 1,
                    title: 'ĐẬU NÀNH LÔNG ĐÔNG LẠNH',
                    img: '../image/img-khoai1/ĐẬU NÀNH LÔNG ĐÔNG LẠNH.jpg',
                    category: 'Khác',
                    price: 93000,
                    desc: ''
                }


            ];

            localStorage.setItem('products', JSON.stringify(products));

        }
    }
    const detailedInfo = {
        3: {
            kho: "8246",
            brand: "Gạo Ông Cua",
            type: "Gạo Trắng",
            weight: "5kg",
            shelf_life: "6 tháng",
            origin: "Việt Nam",
            expiry_date: "25-09-2025",
            quantity: "còn 1000",
            manufacture_date: "25-04-2025",
            manufacturer: "Việt Nam",
            ship_from: "Tp.Hồ Chí Minh"
        },
        // Thêm thông tin chi tiết cho các sản phẩm khác nếu cần
    };

    // Đánh giá của các sản phẩm, sử dụng productId làm key
    const reviews = {
        3: [
            { User_id: 13, rating: 5, comment: 'Sản phẩm rất ngon và chất lượng.' },
            { User_id: 2, rating: 4, comment: 'Dịch vụ tốt, sẽ mua lại.' }
        ],
        // Thêm đánh giá cho các sản phẩm khác nếu cần
    };
    function getProductDetail(id) {
        return detailedInfo[id] || {}; // Trả về chi tiết sản phẩm hoặc object rỗng nếu không tìm thấy
    }

    // Hàm lấy đánh giá sản phẩm dựa trên productId
    function getProductReviews(id) {
        return reviews[id] || []; // Trả về đánh giá hoặc mảng rỗng nếu không tìm thấy
    }

function createAdminAccount() {
    console.log("Running createAdminAccount");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Kiểm tra nếu tài khoản admin đã tồn tại
    let adminExists = accounts.some(account => account.userType === 1);

        if (!adminExists) {
            accounts.push({
                User_id:1,
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
        getProductDetail(productId);
        getProductReviews(productId);
    };



