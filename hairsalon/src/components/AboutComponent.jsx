

const AboutComponent = () =>{
    return(
        <>
{/* <!-- About Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex flex-column">
                    <img className="img-fluid w-90 align-self-end" src="assets/img/aboutPL.jpg" alt="" />
                    <div className="w-50 p-5 text-center bg-box" style={{ marginTop: "-15%" }}>
                    
                        <h1 className="text-uppercase text-primary mb-3">Hơn 5 Năm</h1>
                        <h2 className="text-uppercase mb-0 text-dark">Đào Tạo</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn text-center" data-wow-delay="0.5s">
                <p className="d-inline-block btn-primary py-1 px-4">Về Chúng Tôi</p>
                <h1 className="text-uppercase mb-4 text-primary">Chúng Tôi Không Đơn Giản Chỉ Làm Đẹp Cho Bạn. Tìm Hiểu Thêm Về Chúng Tôi!</h1>
                <p className="text-dark text-justify">
                    HairSalon Phúc Liên có lẽ là cái tên quen thuộc đối với các bạn trẻ ở Bến Tre, khi đến HairSalon Phúc Liên, chúng tôi sẽ tư vấn và giúp bạn trở nên khác biệt với những kiểu tóc phù hợp
                    nhất với bạn.
                </p>
                <p className="mb-4 text-dark text-justify">
                    Các sản phẩm dưỡng và chăm sóc tóc mà chúng tôi sử dụng có xuất xứ và nguồn gốc rõ ràng, chúng tôi xin cam kết tuyệt đối không sử dụng các sản phẩm kém chất lượng và ảnh hưởng
                    đến sức khỏe của bạn. Nếu không ngần ngại thay đổi bản thân và tìm kiếm cho mình một kiểu tóc phù hợp nhất, hãy đến HairSalon Phúc Liên, chúng tôi sẽ không làm bạn thất vọng.
                </p>
                <div className="row g-4">
                    <div className="col-md-6">
                        <h3 className="text-uppercase mb-3 text-primary">Mở Cửa Vào Năm 2019</h3>
                        <p className="mb-0 text-dark text-justify">
                            Sau khi đầu tư và tìm hiểu về nhiều địa điểm, chúng tôi đã lựa chọn Đường Nguyễn Văn Tư P7, đây là nơi tập hợp nhiều bạn trẻ năng động và nhiệt huyết, chúng tôi hứa
                            hẹn sẽ đem đến cho bạn những trải nghiệm tốt nhất mà chúng tôi có.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-uppercase mb-3 text-primary">Hơn 20+ học viên trẻ tài năng</h3>
                        <p className="mb-0 text-dark text-justify">Những học viên của chúng tôi được đào tạo chặt chẽ và bằng cả tâm huyết, họ sẽ không làm bạn thất vọng.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- About End --> */}

        </>
    )
}

export default AboutComponent;