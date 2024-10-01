// import React from 'react'
import './listing.css'

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import hair1 from '../../../Assets/kieutoc1.png'
import hair2 from '../../../Assets/kieutoc2.png'
import hair3 from '../../../Assets/kieutoc3.png'
import hair4 from '../../../Assets/kieutoc4.png'
import hair5 from '../../../Assets/kieutoc5.png'
import hair6 from '../../../Assets/kieutoc6.png'

import customer1 from '../../../Assets/khachhang1.png'
import customer2 from '../../../Assets/khachhang2.jpg'
import customer3 from '../../../Assets/khachhang3.jpg'
import customer4 from '../../../Assets/khachhang4.jpg'

import team1 from '../../../Assets/nhanvien1.jpg'
import team2 from '../../../Assets/nhanvien2.jpg'
import team3 from '../../../Assets/nhanvien3.jpg'
import team4 from '../../../Assets/nhanvien4.jpg'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>Kiểu Tóc Xu Hướng</h1>
        <button className='btn flex'>
          Xem Tất Cả <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className='singleItem'>
        <AiFillHeart className='icon'/>
        <img src={hair2} alt='' />
        <h3>Brown A2</h3>
        </div>

        <div className='singleItem'>
        <AiOutlineHeart className='icon'/>
        <img src={hair1} alt='' />
        <h3>Wig B3</h3>
        </div>

        <div className='singleItem'>
        <AiOutlineHeart className='icon'/>
        <img src={hair3} alt='' />
        <h3>Wig B5</h3>
        </div>

        <div className='singleItem'>
        <AiFillHeart className='icon'/>
        <img src={hair4} alt='' />
        <h3>Pull A2</h3>
        </div>

        <div className='singleItem'>
        <AiOutlineHeart className='icon'/>
        <img src={hair5} alt='' />
        <h3>Long D3</h3>
        </div>

        <div className='singleItem'>
        <AiFillHeart className='icon'/>
        <img src={hair6} alt='' />
        <h3>Long D2</h3>
        </div>
        
      </div>

      <div className="sellers flex">
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Khách Hàng Thân Thiết</h3>
            <button className='btn flex'>
              Xem Tất Cả <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={customer1} alt='' />
              <img src={customer2} alt='' />
              <img src={customer3} alt='' />
              <img src={customer4} alt='' />
            </div>
            <div className='cardText'>
              <span>
                4 khách hàng  <br/>
                <small>
                  Trong số <span className='date'>262</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Nhân Viên Tiêu Biểu</h3>
            <button className='btn flex'>
              Xem Tất Cả <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={team1} alt='' />
              <img src={team2} alt='' />
              <img src={team3} alt='' />
              <img src={team4} alt='' />
            </div>
            <div className='cardText'>
              <span>
                4 nhân viên <br/>
                <small>
                  Trong số <span className='date'>20</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
