import { Link } from "react-router-dom";

const Team = () =>{
    return (
        <>

{/* <!-- Page Header Start --> */}
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Nhân Viên</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item"><Link className="text-white" >Trang Chủ</Link></li>
                <li className="breadcrumb-item"><Link className="text-white" to="#">Trang</Link></li>
                <li className="breadcrumb-item text-primary active" aria-current="page">Nhân Viên</li>
            </ol>
        </nav>
    </div>
</div>
{/* <!-- Page Header End --> */}

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
                
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-camhuong.jpg" alt="" />
                            <div className="team-social">
                                <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="bg-box text-center p-4">
                            <h5 className="text-uppercase text-primary">Cẩm Hướng</h5>
                            <span className="text-dark">Stylist</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-nhiphuong.jpg" alt="" />
                            <div className="team-social">
                                <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="bg-box text-center p-4">
                            <h5 className="text-uppercase text-primary">Nhi Phương</h5>
                            <span className="text-dark">Stylist</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-leminh.jpg" alt="" />
                            <div className="team-social">
                                <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="bg-box text-center p-4">
                            <h5 className="text-uppercase text-primary">Lê Minh</h5>
                            <span className="text-dark">Barber - Stylist</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid" src="assets/img/team-phamhuynhnhu.jpg" alt="" />
                            <div className="team-social">
                                <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fa-brands fa-tiktok"></i></Link>
                                <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="bg-box text-center p-4">
                            <h5 className="text-uppercase text-primary">Phạm Huỳnh Như</h5>
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

export default Team;