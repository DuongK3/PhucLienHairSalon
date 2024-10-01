// import React from 'react'
import {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

// import assets
import video from '../../LoginAssets/video2.mp4'
import logo from '../../LoginAssets/logo2.png'

// import icons
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

  const loginUser = (e)=>{
    e.preventDefault();
    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response)=>{
      console.log()
      if(response.data.message || loginUserName == '' || loginPassword == '') {
        navigateTo('/')
        setLoginStatus('Kiểm tra lại thông tin đăng nhập!')
      }
      else{
        navigateTo('/dashboard')
      }
    })
  }

  useEffect(()=> {
    if(loginStatus !== ''){
      setstatusHolder('showMessage')
      setTimeout(()=> {
        setstatusHolder('message')
      }, 999999)
    }
  }, [loginStatus])

const onSubmit = ()=>{
  setLoginUserName('')
  setLoginPassword('')
}

  return (
    <div className='loginPage flex'>
      <div className='container flex'>

          <div className='videoDiv'>
            <video src={video} autoPlay muted loop></video>

            <div className='textDiv'>
              <h4 className='title'>VẺ ĐẸP CỦA BẠN LÀ NIỀM TỰ HÀO CỦA CHÚNG TÔI</h4>
              <p>HairSalon Phúc Liên - Bến Tre</p>
            </div>

            <div className='footerDiv flex'>
              <span className='text'>Bạn không có tài khoản?</span>
              <Link to={'/register'}>
                <button className='btn'>Đăng ký ngay</button>
              </Link>
            </div>
          </div>

          <div className='formDiv flex'>
            <div className="headerDiv">
              <img src={logo} alt='Logo Image' />
              <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
            </div>

            <form className='form grid' onSubmit={onSubmit}>
              <span className={statusHolder}>{loginStatus}</span>
              <div className="inputDiv">
                <label htmlFor='username'>Tên đăng nhập</label>
                <div className="input flex">
                <FaUserShield className='icon' />
                <input type='text' id='username' placeholder='Nhập tên người dùng' onChange={(event)=>{
                  setLoginUserName(event.target.value)
                }}/>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor='password'>Mật khẩu</label>
                <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' placeholder='Nhập mật khẩu' onChange={(event)=>{
                  setLoginPassword(event.target.value)
                }}/>
                </div>
              </div>

              <button type='submit' className='btn flex' onClick={loginUser}>
                <span>Đăng nhập</span>
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

export default Login
