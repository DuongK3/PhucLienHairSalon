// import React from 'react'
import './top.css'

import { BiSearchAlt } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

// import admin img
import img from '../../../Assets/admin.png'
import hair1 from '../../../Assets/kieutoc2.png'
import video from '../../../Assets/video1.mp4'


const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Chào mừng đến Hairsalon Phúc Liên</h1>
          <p>Đình Bảo, bạn đã trở lại!</p>
        </div>

        <div className="searchBar flex">
          <input type='text' placeholder='Tìm kiếm' />
          <BiSearchAlt className='icon'/>
        </div>

        <div className='adminDiv flex'>
        <TbMessage className='icon'/>
        <IoNotificationsOutline className='icon'/>
        <div className='adminImage'>
          <img src={img} alt='' />
        </div>
        </div>
      </div>

      <div className='cardSection flex'>

        <div className="rightCard flex">
          <h1>Cùng chúng tôi tạo nên sự khác biệt</h1>
          <p>Bạn của hôm nay khác biệt, mọi người sẽ có cái nhìn khác về bạn!</p>

          <div className="buttons flex">
            <button className='btn'>Trang Chủ</button>
            <button className='btn transparent'>Đến Facebook</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className='main flex'>

            <div className='textDiv'>
              <h1>Mẫu tóc HOT</h1>

              <div className='flex'>
                <span>
                  Hôm nay <br /> <small>2 người</small>
                </span>
                <span>
                  Tháng này <br /> <small>9 người</small>
                </span>
              </div>

              <span className="flex link">
                Tìm hiểu thêm <BsArrowRightShort className='icon'/>
              </span>

            </div>

            <div className='imgDiv'>
              <img src={hair1} alt='' />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className='icon'/>
              <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle2'></div>

                <h3>Trung Tâm Trợ Giúp</h3>
                <p>Bạn gặp vấn đề? hãy liên hệ tôi để nhận được sự trợ giúp.</p>
                <button className='btn'>Liên Hệ Tại Đây</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top
