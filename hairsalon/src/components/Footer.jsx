import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
{/* <!-- Footer Start --> */}
<div className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4 text-primary">Liên Lạc</h4>
                <div className="d-flex align-items-center mb-2">
                    <div className="btn-square bg-box flex-shrink-0 me-3">
                        <span className="fa fa-map-marker-alt text-primary"></span>
                    </div>
                    <span>349D1 Đường Nguyễn Văn Tư, Phường 7, TP Bến Tre</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="btn-square bg-box flex-shrink-0 me-3">
                        <span className="fa fa-phone-alt text-primary"></span>
                    </div>
                    <span>070 419 1193</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="btn-square bg-box flex-shrink-0 me-3">
                        <span className="fa fa-envelope-open text-primary"></span>
                    </div>
                    <span>Dohuonglien2702@gmail.com</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4 text-primary">Đường Dẫn Nhanh</h4>
                <Link className="btn btn-link" to="/about">Về Chúng Tôi</Link>
                <Link className="btn btn-link" to="/contact">Liên Hệ Với Chúng Tôi</Link>
                <Link className="btn btn-link" to="/service">Dịch Vụ Của Chúng Tôi</Link>
                <Link className="btn btn-link" to="#">Điều Khoản</Link>
                <Link className="btn btn-link" to="#">Hỗ Trợ</Link>
            </div>
            <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4 text-primary">Đăng Ký Thành Viên</h4>
                <div className="position-relative mb-4">
                    <input className="form-control bg-box border-0 w-100 py-3 ps-4 pe-5 text-dark" type="text" placeholder="Nhập Email Của Bạn" />
                    <Link to="http://localhost:5173/register" type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Đăng Ký</Link>
                </div>
                <div className="d-flex pt-1 m-n1">
                    <Link className="btn btn-lg-square bg-box text-primary m-1" to="https://www.facebook.com/PhucLien102"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-lg-square bg-box text-primary m-1" to="#"><i className="fab fa-youtube"></i></Link>
                    <Link className="btn btn-lg-square bg-box text-primary m-1" to="#"><i className="fa-brands fa-tiktok"></i></Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-12 text-center text-white mb-3 mb-md-0">
                    &copy;
                    <Link className="border-bottom text-white" to="#">HairSalon Phúc Liên - Bến Tre</Link>, Copyright © 2024
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Footer End --> */}

{/* <!-- Back to Top --> */}
<Link to="#" className="btn btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>

        </>
    )
}

export default Footer;