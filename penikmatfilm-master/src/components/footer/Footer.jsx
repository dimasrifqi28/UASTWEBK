import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">PENIKMAT.FILM</Link>
                    </div>
                </div>
                <h2><center>Copyright © 2021 Muhammad Taufiq / 11850114991</center></h2>
            </div>
        </div>
    );
}

export default Footer;
