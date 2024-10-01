const ContactComponent = () =>{
    return(
        <>
{/* <!-- Contact Start --> */}
<div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-secondary text-center p-5">
                        <p className="d-inline-block btn-primary py-1 px-4">Liên Hệ</p>
                        <h1 className="text-uppercase text-primary mb-4">Bạn Có Câu Hỏi? Hãy Liên Hệ Với Chúng Tôi!</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent text-dark" id="name" placeholder="Your Name" />
                                        <label for="name">Họ Tên</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-transparent text-dark" id="email" placeholder="Your Email" />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent text-dark" id="subject" placeholder="Subject" />
                                        <label for="subject">Chủ đề</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="number" min="0" className="form-control bg-transparent text-dark" id="subject" placeholder="Subject" />
                                        <label for="subject">SĐT</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-transparent text-dark" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                        <label for="message">Tin nhắn</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Gửi</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="h-100" style={{ minHeight: "400px" }}>
                        <iframe title="map" className="google-map w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.95617958039884!2d106.36363286137612!3d10.234572055072384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa95e9a872095%3A0x4ac262cc68bec0ad!2zSGFpclNhbG9uIFBow7pjIExpw6puIELhur9uIFRyZQ!5e0!3m2!1svi!2s!4v1713950109923!5m2!1svi!2s"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style={{ filter: "grayscale(0%) invert(0%) contrast(100%)", border: "0"}}></iframe>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End -->     */}

        </>
    )
}

export default ContactComponent;