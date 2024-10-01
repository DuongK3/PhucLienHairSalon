import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        {/* <!-- Navbar Start --> */}
<nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <Link to="#" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="mb-0 text-primary text-uppercase">
            <i className="fa fa-cut me-3"></i>HairSalon Phúc Liên
        </h1>
    </Link>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Trang Chủ</Link>
            <Link to="/about" className="nav-item nav-link text-light">Về Chúng Tôi</Link>
            <Link to="/service" className="nav-item nav-link text-light">Dịch Vụ</Link>
            <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Trang</Link>
                <div className="dropdown-menu m-0">
                    <Link to="/price" className="dropdown-item">Bảng Giá</Link>
                    <Link to="/team" className="dropdown-item">Thành Viên Của Chúng Tôi</Link>
                    <Link to="/open" className="dropdown-item">Giờ Làm Việc</Link>
                    <Link to="/testimonial" className="dropdown-item">Đánh Giá Của Khách Hàng</Link>
                    <Link to="http://localhost:5173" className="dropdown-item">Đăng Nhập QTV</Link>
                </div>
            </div>
            <Link to="/contact" className="text-light nav-item nav-link">Liên Hệ</Link>
        </div>
        <Link to="https://www.facebook.com/PhucLien102" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Đặt Lịch<i className="fa fa-arrow-right ms-3"></i></Link>
    </div>
</nav>
{/* <!-- Navbar End --> */}
        </>
    )
}

export default Navbar;