// import React from 'react'
import { useEffect, useState } from 'react'
import '../InfoManager/ListServiceComponent.css'
import axios from 'axios';


function ListServiceComponent() {
    const [dichvu, setDichVu] = useState([]);
    useEffect(() => {
        getDichVu();
    }, []);

    function getDichVu() {
        axios.get('http://localhost/react/api/').then(function(response) {
            console.log(response.data);
            setDichVu(response.data);
        });
    }

  return (
    <>
        <div className='bottom flex'>
            <div className="row">
                <div className="col-12">
                    <h1 className='titleManager'>Danh Sách Dịch Vụ</h1>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên dịch vụ</th>
                                <th>Mô tả dịch vụ</th>
                                <th>Giá tiền</th>
                                <th>Icon hiển thị</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dichvu.map((dichvu, key) =>
                                <tr key={key}>
                                    <td>{dichvu.iddv}</td>
                                    <td>{dichvu.tendv}</td>
                                    <td>{dichvu.motadv}</td>
                                    <td>{dichvu.giatien}</td>
                                    <td>{dichvu.icondv}</td>
                                    <td>
                                        <button className='btn'>Thêm</button>
                                        <button className='btn'>Sửa</button>
                                        <button className='btn'>Xóa</button>
                                        
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default ListServiceComponent
