// import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';


import logo from '../../Assets/logo2.png'

import { IoMdSpeedometer } from "react-icons/io";
import { IoMdSync } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStats } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiAlarm } from "react-icons/bi";
import { BiAnchor } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className='logoDiv flex'>
        <img src={logo} alt=''/>
        <h2>HAIRSALON <br /> PHÚC LIÊN</h2>
      </div>
      
      <div className='settingsDiv'>
      <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="/dashboard" className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className='smallText'>
                Dashboard
              </span>
            </a>
          </li>
      </ul>
      </div>
      
      <div className='menuDiv'>
        <h3 className='divTitle'>
          THÔNG TIN QUẢN LÝ
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <Link to="/listservice" className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dịch Vụ
              </span>
            </Link>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BiAlarm className='icon'/>
              <span className='smallText'>
                Thời Gian
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <IoMdStar className='icon'/>
              <span className='smallText'>
                Nhân Viên
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <IoMdStats className='icon'/>
              <span className='smallText'>
                Đánh Giá
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className='settingsDiv'>
        <h3 className='divTitle'>
          CÀI ĐẶT CHỨC NĂNG
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <LuLayoutDashboard  className='icon'/>
              <span className='smallText'>
                Chưa cài đặt
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <IoMdSync className='icon'/>
              <span className='smallText'>
                Chưa cài đặt
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BiAnchor  className='icon'/>
              <span className='smallText'>
                Chưa cài đặt
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Trung Tâm Trợ Giúp</h3>
          <p>Bạn gặp vấn đề? Hãy liên hệ tôi để nhận được sự trợ giúp.</p>
          <button className='btn'>Liên Hệ Tại Đây</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
