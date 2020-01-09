import React from 'react';
import { NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.scss';

export const ContactPage = () => {
    return (
        <div className="contact">
            <h1 className="contact-header"> Contact us</h1>
            <p className="contact-adress">Customer Care, Unit 6 Follow Rise, Ridgmont, MD53 0YL</p>
            <p className="contact-hours">Monday – Friday: 08:00 – 20:00 <br/> Saturday: 08:00 – 16:00</p>
            <a className="contact-phone" href="tel:+123456789">Call us on: 0800 847 9684</a>
            <a className="contact-mail" href="mailto:homeshop@shop.com">email: homeshop@shop.com</a>
            <h3 className="contact-title">Follow us on social media:</h3>
            <div className="contact-social-media">
                <NavLink className="facebook" href='#'><FontAwesomeIcon icon={faFacebook} /></NavLink>
                <NavLink className="twitter" href='#'><FontAwesomeIcon icon={faTwitter} /></NavLink>
                <NavLink className="instagram" href='#'><FontAwesomeIcon icon={faInstagram} /></NavLink>
                <NavLink className="pinterest" href='#'><FontAwesomeIcon icon={faPinterest} /></NavLink>               
            </div>
        </div>
    )
}

export default ContactPage;