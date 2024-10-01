

const CarouselComponent = () =>{
    return(
        <>
    {/* <!-- Carousel Start --> */}
<div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src="assets/img/anhnen1.jpg" alt="" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start text-center">
                    <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                        <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">Top 5 Tiệm Làm Tóc Nam Nữ Được Đánh Giá Tốt Nhất Tại Bến Tre</h1>
                        <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                            <i className="fa fa-map-marker-alt text-primary me-3"></i> 349D1 Đường Nguyễn Văn Tư, Phường 7, TP Bến Tre
                        </h4>
                        <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                            <i className="fa fa-phone-alt text-primary me-3"></i>070 419 1193
                        </h4>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="assets/img/anhnen2.jpg" alt="" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start text-center">
                    <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                        <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">Sự Hài Lòng Của Bạn Là Điều Mà Chúng Tôi Luôn Hướng Đến</h1>
                        <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                            <i className="fa fa-map-marker-alt text-primary me-3"></i> 349D1 Đường Nguyễn Văn Tư, Phường 7, TP Bến Tre
                        </h4>
                        <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                            <i className="fa fa-phone-alt text-primary me-3"></i>070 419 1193
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
{/* <!-- Carousel End --> */}

        </>
    )
}

export default CarouselComponent;