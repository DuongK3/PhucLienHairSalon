import { Link } from "react-router-dom";

const TeamComponent = () =>{
    return(
        <>
{/* <!-- Team Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <p className="d-inline-block btn-primary py-1 px-4">Nhân Viên</p>
            <h1 className="text-uppercase text-primary">Gặp Một Trong Những Nhân Viên Tiêu Biểu Của Chúng Tôi</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/team-duyphuc.jpg" alt="" />
                        <div className="team-social">
                            <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="bg-box text-center p-4">
                        <h5 className="text-uppercase text-primary">Cao Văn Duy Phúc</h5>
                        <span className="text-dark">Barber - Stylist</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/team-thanhphong.jpg" alt="" />
                        <div className="team-social">
                            <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="bg-box text-center p-4">
                        <h5 className="text-uppercase text-primary">Đặng Thanh Phong</h5>
                        <span className="text-dark">Barber - Stylist</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/team-chautran.jpg" alt="" />
                        <div className="team-social">
                            <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="bg-box text-center p-4">
                        <h5 className="text-uppercase text-primary">Châu Trần</h5>
                        <span className="text-dark">Stylist</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                    <div className="team-img position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/team-dohuonglien.jpg" alt="" />
                        <div className="team-social">
                            <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                            <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="bg-box text-center p-4">
                        <h5 className="text-uppercase text-primary">Đỗ Hương Liên</h5>
                        <span className="text-dark">Stylist</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Team End --> */}

        </>
    )
}

export default TeamComponent;