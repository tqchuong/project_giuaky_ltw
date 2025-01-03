<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/checkout.css">
    <link rel="stylesheet" href="font/font-awesome-pro-v6-6.2.0/css/all.min.css" />
    <title>Document</title>
</head>

<body>
    <div class="checkout-page">
        <div class="checkout-header">
            <div class="checkout-return">
                <button ><i class="fa-regular fa-chevron-left"></i></button>
            </div>
            <h2 class="checkout-title">Thanh toán</h2>
        </div>
        <main class="checkout-section container">
            <div class="checkout-col-left">
                <div class="checkout-row">
                    <div class="checkout-col-title">
                        Thông tin đơn hàng
                    </div>
                    <div class="checkout-col-content">
                        <div class="content-group">
                            <p class="checkout-content-label">Hình thức giao nhận</p>
                            <div class="checkout-type-order">
                                <button class="type-order-btn active" id="giaotannoi">
                                    <i class="fa-duotone fa-moped"
                                        style="--fa-secondary-opacity: 1.0;--fa-primary-color: dodgerblue;--fa-secondary-color: #ffb100;"></i>
                                    Giao tận nơi
                                </button>
                                <button class="type-order-btn" id="tudenlay">
                                    <i class="fa-duotone fa-box-heart"
                                        style="--fa-secondary-opacity: 1.0; --fa-primary-color: pink; --fa-secondary-color: palevioletred;"></i>
                                    Tự đến lấy
                                </button>
                            </div>
                        </div>
                        <div class="content-group">
                            <p class="checkout-content-label">Ngày giao hàng</p>
                            <div class="date-order">
                            </div>
                        </div>


                        <div class="content-group chk-ship" id="giaotannoi-group">
                            <p class="checkout-content-label">Thời gian giao hàng</p>
                            <div class="delivery-time">
                                <input type="radio" name="giaongay" id="giaongay" class="radio">
                                <label for="giaongay">Giao ngay khi xong</label>
                            </div>
                            <div class="delivery-time">
                                <input type="radio" name="giaongay" id="deliverytime" class="radio">
                                <label for="deliverytime">Giao vào giờ</label>
                                <select class="choise-time">
                                    <option data-hours="08" value="08:00" selected="selected">08:00 - 09:00</option>

                                    <option data-hours="09" value="09:00">09:00 - 10:00</option>

                                    <option data-hours="10" value="10:00"> 10:00 - 11:00</option>

                                    <option data-hours="11" value="11:00"> 11:00 - 12:00</option>

                                    <option data-hours="12" value="12:00"> 12:00 - 13:00</option>

                                    <option data-hours="13" value="13:00"> 13:00 - 14:00</option>

                                    <option data-hours="14" value="14:00"> 14:00 - 15:00</option>

                                    <option data-hours="15" value="15:00"> 15:00 - 16:00</option>

                                    <option data-hours="16" value="16:00"> 16:00 - 17:00</option>

                                    <option data-hours="17" value="17:00"> 17:00 - 18:00</option>

                                    <option data-hours="18" value="18:00"> 18:00 - 19:00</option>

                                    <option data-hours="19" value="19:00"> 19:00 - 20:00</option>

                                    <option data-hours="20" value="20:00"> 20:00 - 21:00</option>

                                    <option data-hours="21" value="21:00"> 21:00 - 22:00</option>

                                </select>
                            </div>
                        </div>
                        <div class="content-group" id="tudenlay-group">
                            <p class="checkout-content-label">Lấy hàng tại chi nhánh</p>
                            <div class="delivery-time">
                                <input type="radio" name="chinhanh" id="chinhanh-1" class="radio">
                                <label for="chinhanh-1">Khu phố 6, Phường Linh Trung, TP Thủ Đức, TP HCM</label>
                            </div>
                            <div class="delivery-time">
                                <input type="radio" name="chinhanh" id="chinhanh-2" class="radio">
                                <label for="chinhanh-2">Nhơn Tân, An Nhơn, Bình Định</label>
                            </div>
                        </div>
                        <div class="content-group">
                            <p class="checkout-content-label">Ghi chú đơn hàng</p>
                            <textarea type="text" class="note-order" placeholder="Nhập ghi chú"></textarea>
                        </div>
                    </div>
                </div>
                <div class="checkout-row">
                    <div class="checkout-col-title">
                        Thông tin người nhận
                    </div>
                    <div class="checkout-col-content">
                        <div class="content-group">
                            <form action="" class="info-nhan-hang">
                                <div class="form-group">
                                    <input id="tennguoinhan" name="tennguoinhan" type="text"
                                        placeholder="Tên người nhận" class="form-control">
                                    <span class="form-message"></span>
                                </div>
                                <div class="form-group">
                                    <input id="sdtnhan" name="sdtnhan" type="text" placeholder="Số điện thoại nhận hàng"
                                        class="form-control">
                                    <span class="form-message"></span>
                                </div>
                                <div class="form-group">
                                    <input id="diachinhan" name="diachinhan" type="text" placeholder="Địa chỉ nhận hàng"
                                        class="form-control chk-ship">
                                    <span class="form-message"></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkout-col-right">
                <p class="checkout-content-label">Đơn hàng</p>
                <div class="bill-total" id="list-order-checkout">
            <div class="food-total">
                <div class="count">2x</div>
                <div class="info-food">
                    <div class="name-food">Gạo Thơm Hữu Cơ ST25</div>
                    <div class="price">105.000&nbsp;₫</div>
                </div>
            </div></div>
                <div class="bill-payment">
                    <div class="total-bill-order">
        <div class="priceFlx">
            <div class="text">Tiền hàng <span class="count">2 món</span></div>
            <div class="price-detail"><span id="checkout-cart-total">210.000&nbsp;₫</span></div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship"><span>30.000&nbsp;₫</span></div>
        </div></div>
                    <div class="policy-note">
                        Bằng việc bấm vào nút “Đặt hàng”, tôi đồng ý với
                        <a href="#" target="_blank">chính sách hoạt động</a>
                        của chúng tôi.
                    </div>
                </div>

                <div class="payment-options" bis_skin_checked="1">
                    <div bis_skin_checked="1">
                        <label style="border: 1px solid #ced4da;height: calc(1.5em + 0.75rem + 2px);border-radius: 0.25rem;width: 100%; padding: 6px; background: #fff">
                            <input type="radio" id="rdPaymentTypeCod" name="paymentType" value="COD" checked="">&nbsp;&nbsp;
                            <i class="fa-solid fa-hand-holding-usd"></i>
                            <span>&nbsp;&nbsp;Thanh toán khi nhận hàng</span>
                        </label>

                        <label style="border: 1px solid #ced4da;height: calc(1.5em + 0.75rem + 2px);border-radius: 0.25rem;width: 100%; padding: 6px; background: #fff;">
                            <input type="radio" id="rdPaymentTypeMomo" name="paymentType" value="MOMO">&nbsp;&nbsp;
                            <i class="fa-solid fa-wallet"></i>
                            <span>&nbsp;&nbsp;Thanh toán bằng ví điện tử</span>
                        </label>
                    </div>
                </div>
                <div class="total-checkout">
                    <div class="text">Tổng tiền</div>
                    <div class="price-bill">
                        <div class="price-final" id="checkout-cart-price-final">240.000&nbsp;₫</div>
                    </div>
                </div>
                <button class="complete-checkout-btn">Đặt hàng</button>
            </div>

    </div>
    </main>
    </div>
    <script src="js/checkout.js"></script>

</body>

</html>