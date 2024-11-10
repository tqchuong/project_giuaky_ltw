function createProduct() {
    localStorage.removeItem('products');
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
            title: 'Gạo ST25',
            img: '../image/img-pro/gaost25.jpg',
            category: 'Gạo',
            price: 30000
        }, {
            id: 4,
            status: 1,
            title: 'Gạo Thiên Long',
            img: '../image/img-pro/gao-thien-long.jpg',
            category: 'Gạo',
            price: 40000
        }, {
            id: 5,
            status: 1,
            title: 'Khoai mì',
            img: '../image/img-pro/khoai%20mi.jpg',
            category: 'Khoai',
            price: 20000
        }, {
            id: 6,
            status: 1,
            title: 'Khoai lang tím',
            img: '../image/img-pro/khoai%20lang%20tim.jpg',
            category: 'Khoai',
            price: 15000
        }, {
            id: 7,
            status: 1,
            title: 'Gạo lứt đen',
            img: '../image/img-pro/gao%20lut%20dien%20bien.jpg',
            category: 'Gạo',
            price: 32000
        }, {
            id: 8,
            status: 1,
            title: 'Khoai lang mật',
            img: '../image/img-pro/khoai lang mat.jpg',
            category: 'Khoai',
            price: 12000
        }, {
            id: 9,
            status: 1,
            title: 'Hạt kê',
            img: '../image/img-pro/hat%20ke2.jpg',
            category: 'Khác',
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
            category: 'Khoai',
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
            },
            {
                id: 45,
                status: 1,
                title: 'Phở gạo',
                img: '../image/img-dokho/20240912-114520_0e8d2bb5536f4f188e511efcdb22cce3_medium.jpg',
                category: 'Khác',
                price: 20000
            },
            {
                id: 46,
                status: 1,
                title: 'Bánh ướt khô',
                img: '../image/img-dokho/banh-uop-kho-simply-food-chay-tot-market_a00054f60449463c9077095ba108b36c_large.png',
                category: 'Khác',
                price: 19000
            },
            {
                id: 47,
                status: 1,
                title: 'Bánh hỏi',
                img: '../image/img-dokho/banh_hoi_symply_food_bc5d4a00af7f4b6f97bfd1066af047b8_large.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 48,
                status: 1,
                title: 'Bún gạo Bình Tây',
                img: '../image/img-dokho/bun-gao-binh-tay-1-300x300_ba9b7c71594c45efbd9d86124a056615_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 49,
                status: 1,
                title: 'Bún gạo nàng hương ',
                img: '../image/img-dokho/bun-gao-nang-huong-bt-300x300_a4b2812151974f138d7d5fd7cb67d628_large.png',
                category: 'Khác',
                price: 19600
            },
            {
                id: 50,
                status: 1,
                title: 'Bún chùm ngây ',
                img: '../image/img-dokho/bun_chum_ngay_chay_tot_market_2c2b602e13984fb4aa6a28c30d34dbc7_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 51,
                status: 1,
                title: 'Bún gấc ',
                img: '../image/img-dokho/bun_gac_cao_bang_chay_tot_market_9424ddc1acaf4397b81744a62e7008eb_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 52,
                status: 1,
                title: 'Bún gạo lứt',
                img: '../image/img-dokho/bun_gao_lut_den-chay_tot_market_7f290f46971b4ee2bcb6f7a979d4afaa_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 53,
                status: 1,
                title: 'Bún ngô',
                img: '../image/img-dokho/bun_ngo_chay_tot_694a006d68754e34b2cd8300b9efdda7_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 54,
                status: 1,
                title: 'Hủ tiếu nam vang ',
                img: '../image/img-dokho/hu-tieu-nam-vang-simply-food-chay-tot-market_af31271a96014c60981c8faeb3221d88_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 55,
                status: 1,
                title: 'Mì quảng',
                img: '../image/img-dokho/mi-quang-simply-food-chay-tot-market_eb63d1cbb82347b0b3086be0286050f7_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 56,
                status: 1,
                title: 'Mì chũ gạo lứt',
                img: '../image/img-dokho/mi_chu_gao_lut_chay_tot_market-removebg-preview_b39099b25cbc4d10a24e2b2a68f163be_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 57,
                status: 1,
                title: 'Mì chũ rau củ',
                img: '../image/img-dokho/mi_chu_rau_cu_e0ee9f8ce6604923ad6c49bf72545e9a_large.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 58,
                status: 1,
                title: 'Miến dong đỏ',
                img: '../image/img-dokho/mien_dong_do-chay_tot_market_a673d07e97274811a4531ea1a5475e7a_large.png',
                category: 'Khác',
                price: 19500
            },
            {
                id: 59,
                status: 1,
                title: 'Miến dong',
                img: '../image/img-dokho/mien_dong_symply_food_chay_tot_market_d77a32bfcd604c39826413bac3f60794_large.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 60,
                status: 1,
                title: 'Bột ngũ cốc dinh dưỡng',
                img: '../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 61,
                status: 1,
                title: 'Bột ngũ cốc minmin',
                img: '../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 62,
                status: 1,
                title: 'Ngũ cốc abalanca',
                img: '../image/cereal/ngu-coc-abalanca.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 63,
                status: 1,
                title: 'Ngũ cốc ăn chay',
                img: '../image/cereal/ngu-coc-an-chay.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 64,
                status: 1,
                title: 'Ngũ cốc ăn chay',
                img: '../image/cereal/ngu-coc-an-chay2.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 65,
                status: 1,
                title: 'Ngũ cốc ăn kiêng',
                img: '../image/cereal/Ngu-coc-an-kieng-EURO-DIET-CEREAL-20-goi-600x600.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 66,
                status: 1,
                title: 'Ngũ cốc Calbe',
                img: '../image/cereal/ngu-coc-calbe.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 67,
                status: 1,
                title: 'Ngũ cốc cho bé',
                img: '../image/cereal/ngu-coc-cho-be-nissin-cisco-vi-bap-truyen-thong-180g.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 68,
                status: 1,
                title: 'Ngũ cốc dinh dưỡng',
                img: '../image/cereal/Ngu-coc-dinh-duong-EURO-CEREAL-20-goi-xuat-Nhat-600x600.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 69,
                status: 1,
                title: 'Ngũ cốc dinh dưỡng',
                img: '../image/cereal/Ngu-coc-dinh-duong-EURO-CEREAL-tui-hop-20-goi-600x600.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 70,
                status: 1,
                title: 'Ngũ cốc dinh dưỡng',
                img: '../image/cereal/Ngu-coc-dinh-duong-GOLDEN-KARE-20-goi-600x600.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 71,
                status: 1,
                title: 'Ngũ cốc hena',
                img: '../image/cereal/ngu-coc-hena.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 72,
                status: 1,
                title: 'Ngũ cốc tami',
                img: '../image/cereal/ngu-coc-tami.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 73,
                status: 1,
                title: 'Ngũ cốc vital',
                img: '../image/cereal/ngu-coc-vital.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 74,
                status: 1,
                title: 'Cháo thịt bò',
                img: '../image/dong-goi/chao-thit-bo.jpg',
                category: 'Khác',
                price: 18500
            },
            {
                id: 75,
                status: 1,
                title: 'Cháo tươi lươn đậu xanh',
                img: '../image/dong-goi/chao-tuoi-luon-dau-xanh-cay-thi-goi-260g-202401021618587467.jpg',
                category: 'Khác',
                price: 17500
            },
            {
                id: 76,
                status: 1,
                title: 'Cháo tươi thịt bò cà rốt',
                img: '../image/dong-goi/chao-tuoi-thit-bo-cay-thi-goi-260g-202309032058365692.jpg',
                category: 'Khác',
                price: 16500
            },
            {
                id: 77,
                status: 1,
                title: 'Cháo tươi thịt heo bí đỏ',
                img: '../image/dong-goi/chao-tuoi-thit-heo-cay-thi-goi-260g-202407091435294691.jpg',
                category: 'Khác',
                price: 18500
            },
            {
                id: 78,
                status: 1,
                title: 'Cháo gà',
                img: '../image/dong-goi/chao-vifon-vi-ga-goi-50g-202306231013287313.jpg',
                category: 'Khác',
                price: 12500
            },
            {
                id: 79,
                status: 1,
                title: 'Cháo thịt bằm',
                img: '../image/dong-goi/chao-vifon-vi-thit-bam-goi-50g-202306231012172188.jpg',
                category: 'Khác',
                price: 17500
            },
            {
                id: 80,
                status: 1,
                title: 'Mì 3 miền gà sợi phở',
                img: '../image/dong-goi/mi-3-mien-ga-soi-pho-goi-65g-clone-202406131512410241.jpg',
                category: 'Khác',
                price: 12500
            },
            {
                id: 81,
                status: 1,
                title: 'Mì đệ nhất thịt bằm',
                img: '../image/dong-goi/mi-de-nhat-thit-bam.jpg',
                category: 'Khác',
                price: 17500
            },
            {
                id: 82,
                status: 1,
                title: 'Mì gấu đỏ bò bít tết',
                img: '../image/dong-goi/mi-gau-do-bo-bit-tet-goi-63g-202407121408410572.jpg',
                category: 'Khác',
                price: 25500
            },
            {
                id: 83,
                status: 1,
                title: 'Mì gấu đỏ gà sợi phở',
                img: '../image/dong-goi/mi-gau-do-ga-soi-pho.jpg',
                category: 'Khác',
                price: 13500
            },
            {
                id: 84,
                status: 1,
                title: 'Mì gấu đỏ thịt bằm',
                img: '../image/dong-goi/mi-gau-do-thit-bam-goi-63g-202407121411246247.jpg',
                category: 'Khác',
                price: 16500
            },
            {
                id: 85,
                status: 1,
                title: 'Mì gấu đỏ tôm và gà',
                img: '../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg',
                category: 'Khác',
                price: 18500
            },
            {
                id: 86,
                status: 1,
                title: 'Mì hảo hảo chua cay',
                img: '../image/dong-goi/mi-hao-hao-chua-cay.jpg',
                category: 'Khác',
                price: 14500
            },
            {
                id: 87,
                status: 1,
                title: 'Mì khoa tây omachi',
                img: '../image/dong-goi/mi-khoai-tay-omachi-tom-chua-cay-thai-goi-80g-202306061558151636.jpg',
                category: 'Khác',
                price: 15500
            },
            {
                id: 88,
                status: 1,
                title: 'Mì lẩu thái',
                img: '../image/dong-goi/mi-lau-thai.jpg',
                category: 'Khác',
                price: 17500
            },
            {
                id: 89,
                status: 1,
                title: 'Mì siu-kay x2',
                img: '../image/dong-goi/mi-siu-kay-x2.jpg',
                category: 'Khác',
                price: 19500
            },
            {
                id: 90,
                status: 1,
                title: 'Mì xào hảo hảo',
                img: '../image/dong-goi/mi-xao-hao-hao.jpg',
                category: 'Khác',
                price: 15500
            },
            {
                id: 91,
                status: 1,
                title: 'Nui rau củ',
                img: '../image/dong-goi/nui-rau-cu.jpg',
                category: 'Khác',
                price: 17500
            },
            {
                id: 92,
                status: 1,
                title: 'Nui thượng hạng',
                img: '../image/dong-goi/nui-xoan-ba-bay-goi-500g-clone-202405271312145099.jpg',
                category: 'Khác',
                price: 16500
            },
            {
                id: 93,
                status: 1,
                title: 'Yến mạch trái cây',
                img: '../image/img-pro/yen-mach-trai-cay-sunrise-vi-pho-mai-bich-300g-202306241735231539.png',
                category: 'Khác',
                price: 13500
            },
            {
                id: 94,
                status: 1,
                title: 'Gạo thơm thái',
                img: '../image/riceproducts/gao-thom-thai-300x300.jpg',
                category: 'Gạo',
                price: 17500
            },
            {
                id: 95,
                status: 1,
                title: 'Gạo thơm lài sữa',
                img: '../image/riceproducts/gao-thom-lai-sua-300x300.jpg',
                category: 'Gạo',
                price: 17500
            },
            {
                id: 96,
                status: 1,
                title: 'Gạo thơm lài',
                img: '../image/riceproducts/gao-thom-lai-300x300.jpg',
                category: 'Gạo',
                price: 19500
            },
            {
                id: 97,
                status: 1,
                title: 'Gạo tám thơm',
                img: '../image/riceproducts/gao-tam-thom-300x300.jpg',
                category: 'Gạo',
                price: 15500
            },
            {
                id: 98,
                status: 1,
                title: 'Gạo nếp than',
                img: '../image/riceproducts/gao-nep-than-300x300.jpg',
                category: 'Gạo',
                price: 16500
            },
            {
                id: 99,
                status: 1,
                title: 'Gạo nàng hoa',
                img: '../image/riceproducts/gao-nang-hoa-300x300.jpg',
                category: 'Gạo',
                price: 14500
            },
            {
                id: 100,
                status: 1,
                title: 'Gạo long châu',
                img: '../image/riceproducts/gao-long-chau-66-moi-300x300.jpg',
                category: 'Gạo',
                price: 12500
            }


        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

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

window.onload = function () {
    createProduct();
    createAdminAccount();
};



