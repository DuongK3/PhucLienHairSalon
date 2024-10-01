import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const TestimonialComponent = () =>{
    return(
        <>
{/* <!-- Testimonial Start --> */}
<div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                <p class="d-inline-block btn-primary py-1 px-4">Đánh Giá Của Khách Hàng</p>
                <h1 class="text-uppercase text-primary">Một Số Khách Hàng Tiêu Biểu Của Chúng Tôi</h1>
            </div>
            <OwlCarousel className='mx-auto owl-theme wow fadeInUp' data-wow-delay="0.1s" loop margin={10} nav items={1} style={{ maxWidth: "600px", marginLeft: "26.5%" }}>
                <div class='item'>
                    <div class="testimonial-item text-center" >
                        <h4 class="text-uppercase text-primary">Tên Khách Hàng</h4>
                        <h5 class="text-dark">Dương Đình Bảo</h5>
                        <img class="img-fluid w-50" src="assets/img/khachhang3.jpg" style={{ marginLeft: "25%" }} alt="" />

                        <p class="text-center larger-text" >Mình đã từng đến rất nhiều các HairSalon để tìm cho mình
                            một mái tóc ưng ý, nhưng chưa lần nào mình thấy thật sự tự tin với mái tóc của mình. Nhưng ngay từ khi
                            đến HairSalon Phúc Liên lần đầu tiên, mình đã rất hài lòng với cách phục vụ của tiệm, các anh chị
                            nhân viên không những rất có tay nghề mà họ còn đều rất trẻ trung và năng động. Sau khi được các
                            anh chị nhân viên tư vấn, các anh chị đã giúp mình tìm được kiểu tóc phù hợp với mình nhất,
                            mình thật sự rất tự tin với kiểu tóc mới này.</p>
                    </div>

                </div>
                <div class='item'>
                <div class="testimonial-item text-center " >
                        <h4 class="text-uppercase text-primary">Tên Khách Hàng</h4>
                        <h5 class="text-dark">Trần Thu Hà</h5>
                        <img class="img-fluid w-50" src="assets/img/khachhang5.jpg" style={{ marginLeft: "25%" }} alt="" />
                        <span class="text-center larger-text">Mình đã đến rất nhiều các HairSalon có ở Bến Tre, nhưng
                            có lẽ HairSalon Phúc Liên là nơi mình cảm thấy có trải nghiệm tốt nhất, các dịch vụ và giá cả cũng rất
                            phải chăng, hoàn toàn phù hợp với các bạn sinh viên - học sinh như mình.</span>
                    </div>
                </div>
                <div class='item'>
                <div class="testimonial-item text-center" >
                    <h4 class="text-uppercase text-primary">Tên Khách Hàng</h4>
                    <h5 class="text-dark">Ngô Tuấn Thiện</h5>
                    <img class="img-fluid w-50" src="assets/img/khachhang1.jpg" style={{ marginLeft: "25%" }} alt="" />
                    <span class="text-center larger-text" >Trước đây mình chỉ cắt tóc ở các tiệm cắt tóc phổ thông,
                        cũng chưa từng nhuộm hay uốn tóc một lần nào. Sau khi quyết định thay đổi bản thân, và
                        mình đã chọn HairSalon Phúc Liên, các anh chị nhân viên không những thân thiện mà còn hết lòng
                        tư vấn các kiểu tóc phù hợp với mình. Mình thật sự rất thích kiểu tóc mới của mình, nếu có cơ hội
                        các bạn cũng nên thử đến HairSalon Phúc Liên một lần để trải nghiệm.</span>
                </div>
                </div>
                <div class='item'>
                    <div class="testimonial-item text-center">
                        <h4 class="text-uppercase text-primary">Tên Khách Hàng</h4>
                        <h5 class="text-dark">Dương Ngọc Hải Vân</h5>
                        <img class="img-fluid w-50" src="assets/img/khachhang2.jpg" style={{ marginLeft: "25%" }} alt="" />
                        <span class="text-center larger-text">Một kiểu tóc đẹp không chỉ giúp bạn tự tin khi đối 
                            diện với người khác, mà nó còn tôn lên vẻ đẹp con người của bạn, đến HairSalon Phúc Liên, bạn chắc 
                            chắn sẽ không hối hận.</span>
                    </div>
                </div>
                
            </OwlCarousel>

    
        </div>
    </div>
{/* <!-- Testimonial End --> */}

        </>
    )
}

export default TestimonialComponent;