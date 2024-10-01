const PriceComponent = () =>{
    return(
        <>
{/* <!-- Price Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-0">
            <div className="col-lg-6 wow fadeIn text-center" data-wow-delay="0.1s">
                <div className="bg-box h-100 d-flex flex-column justify-content-center p-5">
                    <p className="d-inline-flex btn-primary py-1 px-4 me-auto">Bảng Giá</p>
                    <h1 className="text-uppercase mb-4 text-primary">Tham Khảo Các Dịch Vụ Và Bảng Giá Khi Bạn Đến HairSalon Phúc Liên</h1>
                    <div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Tư vấn tạo kiểu & Cắt tóc</h6>
                            <span className="text-uppercase text-primary">50 ~ 100K</span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Uốn tóc</h6>
                            <span className="text-uppercase text-primary">100 ~ 200K</span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Nhuộm tóc</h6>
                            <span className="text-uppercase text-primary">100 ~ 200K</span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Duỗi tóc</h6>
                            <span className="text-uppercase text-primary">100 ~ 150K</span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Phục hồi tóc</h6>
                            <span className="text-uppercase text-primary">100 ~ 200K</span>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <h6 className="text-uppercase mb-0 text-dark">Trị rụng tóc</h6>
                            <span className="text-uppercase text-primary">150 ~ 250K</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100">
                    <img className="img-fluid h-100" src="assets/img/nenbanggia.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Price End --> */}

        </>
    )
}

export default PriceComponent;