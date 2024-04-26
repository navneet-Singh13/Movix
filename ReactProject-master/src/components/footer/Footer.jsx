import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Movies have the power to unite us, make us laugh, cry, and think. Thank you for being part of our movie-loving 
                community. We look forward to sharing more great films with you!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://github.com/SkilledSparrow"><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/skilled__sparrow/"><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href=""><FaTwitter /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/abhishek-sharma-750a4a243/"><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;