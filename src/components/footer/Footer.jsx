import React from 'react'
import logo from '../../assets/foter.png'
import './Footer.css'
import { IoLogoWhatsapp , IoLogoFacebook  , IoLogoInstagram  } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="footer-cards">
                    <div className="foter-card">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="foter-card">
                        <h3>Contact Us</h3>
                        <p>E :  info@example.com</p>
                        <p>P : 9498562198165</p>
                        <p>A: 123 Hospital rd</p>
                        <p>Kalubowila, Dehiwela</p>
                    </div>
                    <div className="foter-card">
                        <h3>Useful links</h3>
                        <p>Shop All </p>
                        <p>Tempered Glass</p>
                        <p>Back-cover</p>
                        <p>About Us</p>
                    </div>
                    <div className="foter-card">
                        <span>
                            <IoLogoWhatsapp/>
                            <p>WhatsUp</p>
                        </span>
                        <span>
                            <IoLogoFacebook/>
                            <p>FaceBook</p>
                        </span>
                        <span>
                            <IoLogoInstagram/>
                            <p>Instagramm</p>
                        </span>
                        <span>
                            <IoLogoTiktok/>
                            <p>Tik Tok</p>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer