import AboutComponent from "../components/AboutComponent";
import TeamComponent from "../components/TeamComponent";
import { Link } from "react-router-dom";

const About = () =>{
    return (
        <>

{/* <!-- Page Header Start --> */}
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Về Chúng Tôi</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item"><Link className="text-white" >Trang Chủ</Link></li>
                <li className="breadcrumb-item"><Link className="text-white" to="#">Trang</Link></li>
                <li className="breadcrumb-item text-primary active" aria-current="page">Về Chúng Tôi</li>
            </ol>
        </nav>
    </div>
</div>
{/* <!-- Page Header End --> */}


    <AboutComponent />
    <TeamComponent />

        </>
    )
}

export default About;