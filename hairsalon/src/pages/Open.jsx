import { Link } from "react-router-dom";
import WorkingHoursComponent from "../components/WorkingHoursComponent";

const Open = () =>{
    return (
        <>

{/* <!-- Page Header Start --> */}
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Giờ Làm Việc</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item"><Link className="text-white" >Trang Chủ</Link></li>
                <li className="breadcrumb-item"><Link className="text-white" to="#">Trang</Link></li>
                <li className="breadcrumb-item text-primary active" aria-current="page">Giờ Làm Việc</li>
            </ol>
        </nav>
    </div>
</div>
{/* <!-- Page Header End --> */}

<WorkingHoursComponent /> 

        </>
    )
}

export default Open;