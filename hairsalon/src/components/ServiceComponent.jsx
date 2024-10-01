const ServiceComponent = () =>{
    return(
        <>
{/* <!-- Service Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            
            <p className="d-inline-flex btn-primary py-1 px-4 me-auto">Dịch Vụ</p>
            <h1 className="text-uppercase text-primary">Các Dịch Vụ Của Chúng Tôi</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                    
                        <img className="img-fluid" src="assets/img/icon-cattoc.png" alt="" />
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Cắt tóc</h3>
                        <p className="text-justify">Một mái tóc được cắt tỉa gọn gàng sẽ giúp bạn trở nên ưa nhìn
                            và đẹp hơn trong mắt mọi người. Tại HairSalon Phúc Liên, mái tóc của bạn sẽ được tư vấn tạo kiểu
                            bởi những học viên trẻ tài năng nhất. Dù bạn sở hữu gương mặt tròn, mặt góc cạnh,... 
                            họ đều sẽ tư vấn và giúp bạn chọn cho mình một kiểu tóc phù hợp nhất với bản
                            thân.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 50K</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                        <img className="img-fluid" src="assets/img/icon-uontoc.png" alt="" />
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Uốn tóc</h3>
                        <p className="text-justify">Tóc uốn luôn là một trong những xu hướng thời trang dẫn đầu
                            trong nhiều năm qua. Nếu bạn muốn trải nghiệm việc uốn tóc hay muốn thay đổi kiểu tóc uốn khác,
                            hãy đến với chúng tôi, chúng tôi luôn cập nhật những xu hướng mới nhất và độc đáo nhất
                            dành cho bạn.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 100K</span>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                        <img className="img-fluid" src="assets/img/icon-nhuomtoc.png" alt=""/> 
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Nhuộm tóc</h3>
                        <p className="text-justify">Dù bạn là nam hay nữ, việc chọn một màu tóc phù hợp với
                            diện mạo và tính cách sẽ giúp bạn tự tin và phong cách hơn rất nhiều. Dù muốn nhuộm lại tóc,
                            che khuyết điểm trên tóc hay bạn muốn tạo điểm nhấn trên gương mặt, đến với chúng tôi,
                            bạn chắc chắn sẽ hài lòng với kết quả nhận được.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 100K</span>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                        <img className="img-fluid" src="assets/img/icon-duoitoc.png" alt="" />
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Duỗi tóc</h3>
                        <p className="text-justify">Đây là dịch vụ chăm sóc tóc dành cho các bạn muốn sở hữu
                            một mái tóc óng ả và suôn mượt. Những thành viên tại HairSalon Phúc Liên sẽ giúp bạn tư vấn và 
                            chăm sóc mái tóc của bạn đúng cách, giúp bạn sở hữu một mái tóc thật suôn mượt bằng những sản
                            phẩm chăm sóc tóc cao cấp.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 100K</span>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                        <img className="img-fluid" src="assets/img/icon-phuchoitoc.png" alt="" />
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Phục hồi tóc</h3>
                        <p className="text-justify">Tại HairSalon Phúc Liên, chúng tôi sử dụng những kỹ
                            thuật hiện đại nhất để giúp bạn khôi phục lại kết cấu và phục hồi những sợi tóc bị hư tổn bằng
                            những thiết bị chuyên dụng như máy sấy, máy nano,... và dưỡng chất từ những sản phẩm phục hồi tóc 
                            cao cấp sẽ giúp mái tóc của bạn phục hồi nhanh chóng ngay cả bên trong, bạn sẽ sở hữu cho mình một
                            mái tóc chắc khỏe, suôn mượt và đầy sức sống.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 150K</span>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item position-relative overflow-hidden bg-box d-flex h-100 p-5 ps-0">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                        <img className="img-fluid" src="assets/img/icon-trirungtoc.png" alt="" />
                    </div>
                    <div className="ps-4">
                        <h3 className="text-uppercase mb-3 text-primary">Trị rụng tóc</h3>
                        <p className="text-justify">Bạn thường xuyên bị rụng tóc? Đến với HairSalon Phúc Liên,
                            chúng tôi sẽ giải quyết vấn đề của bạn, mái tóc của bạn sẽ trở nên chắc khỏe, bồng bền trở lại.
                            Giúp bạn trở nên đẹp hơn, tự tin hơn với máy tóc của mình.</p>
                        <span className="text-uppercase text-primary">Chỉ từ 250K</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Service End --> */}

        </>
    )
}

export default ServiceComponent;