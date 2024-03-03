import logo from "../assets/images/Logo.png"
import logo1 from '../assets/images/socials/linkedin.svg'
import logo2 from '../assets/images/socials/x.svg'
import logo3 from '../assets/images/socials/instagram.svg'
import logo4 from '../assets/images/socials/facebook.svg'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-section section">
            <div className="footer">
                <div className="">
                    <img src={logo} alt="" />
                    <p>+234 (810) 234 5678</p>
                    <p>contact@chariz travels.com</p>
                    <p>4th Floor, Ocean Centre,off Oladipo Diya
                        Road, Gudu,Apo Abuja.
                    </p>
                </div>

                <div className="footer-box-2">
                    <div className="">
                        <h3>Legal</h3>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>FAQs</p>
                        <p>Contact</p>
                    </div>

                    <div className="">
                        <h3>Services</h3>
                        <p>Immigration Services</p>
                        <p>Study Abroad Service</p>
                        <p>Politics and Policy</p>
                        <p>Tourist Visas</p>
                        <p>Vacation Packages</p>
                        <p>Infrastructure</p>
                        <p>Hotel Reservation & Flight Bookingss</p>
                        <p>Corporate Travel Solutions</p>
                    </div>
                </div>

                <div className="">
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms & conditions</p>
                </div>
            </div>

            <div className="hr"></div>

            <div className="socials">
                <p>© chariz travels {year} - All Rights Reserved</p>

                <div className="social-icons">
                    <div className="social">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="social">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="social">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="social">
                        <img src={logo4} alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Footer;