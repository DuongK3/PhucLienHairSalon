// import React from 'react'
import './activity.css'

import { BsArrowRightShort } from "react-icons/bs";

import customer1 from '../../../Assets/khachhang1.png'
import customer2 from '../../../Assets/khachhang2.jpg'
import customer3 from '../../../Assets/khachhang3.jpg'
import customer4 from '../../../Assets/khachhang4.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Đánh Giá Gần Đây</h1>
        <button className='btn flex'>
          Xem Tất Cả 
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img src={customer1} alt='' />
          <div className='customerDetails'>
            <span className='name'>Dương Đình Bảo</span>
            <small>Đã đánh giá</small>
          </div>
          <div className='duration'>
            26 phút trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={customer2} alt='' />
          <div className='customerDetails'>
            <span className='name'>Trần Thu Hà</span>
            <small>Đã đánh giá</small>
          </div>
          <div className='duration'>
            20 giờ trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={customer3} alt='' />
          <div className='customerDetails'>
            <span className='name'>Ngô Tuấn Thiện</span>
            <small>Đã đánh giá</small>
          </div>
          <div className='duration'>
            1 ngày trước
          </div>
        </div>
        <div className='singleCustomer flex'>
          <img src={customer4} alt='' />
          <div className='customerDetails'>
            <span className='name'>Dương Ngọc Hải Vân</span>
            <small>Đã đánh giá</small>
          </div>
          <div className='duration'>
            3 ngày trước
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
