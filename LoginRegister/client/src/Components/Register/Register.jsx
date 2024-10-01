// import React from 'react'
import {useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

// import assets
import video from '../../LoginAssets/video2.mp4'
import logo from '../../LoginAssets/logo2.png'

// import icons
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  const createUser = (e)=>{
    e.preventDefault()
    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      Password: password
    }).then(()=>{
      navigateTo('/')

      setEmail('')
      setUserName('')
      setPassword('')
    })
  }
  
  return (
    <div className='registerPage flex'>
      <div className='container flex'>

          <div className='videoDiv'>
            <video src={video} autoPlay muted loop></video>

            <div className='textDiv'>
              <h4 className='title'>CÙNG TẠO NÊN SỰ KHÁC BIỆT</h4>
              <p>HairSalon Phúc Liên - Bến Tre</p>
            </div>

            <div className='footerDiv flex'>
              <span className='text'>Bạn có tài khoản?</span>
              <Link to={'/'}>
                <button className='btn'>Đăng nhập</button>
              </Link>
            </div>
          </div>

          <div className='formDiv flex'>
            <div className="headerDiv">
              <img src={logo} alt='Logo Image' />
              <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
            </div>

            <form action='' className='form grid'>
            <div className="inputDiv">
                <label htmlFor='email'>Email</label>
                <div className="input flex">
                <MdEmail className='icon' />
                <input type='email' id='email' placeholder='Nhập Email' onChange={(event)=>{
                  setEmail(event.target.value)
                }} />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor='username'>Tên đăng nhập</label>
                <div className="input flex">
                <FaUserShield className='icon' />
                <input type='text' id='username' placeholder='Nhập tài khoản' onChange={(event)=>{
                  setUserName(event.target.value)
                }} />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor='password'>Mật khẩu</label>
                <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' placeholder='Nhập mật khẩu' onChange={(event)=>{
                  setPassword(event.target.value)
                }} />
                </div>
              </div>

              <button type='submit' className='btn flex' onClick={createUser}>
                <span>Đăng ký</span>
                <AiOutlineSwapRight className='icon'/>
              </button>

              <span className='forgotPassword'>
                Bạn quên mật khẩu? <a href="">Đặt lại mật khẩu</a>
              </span>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Register
