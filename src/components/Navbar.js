import { useState } from "react";
import logo from "../assets/images/Logo.png"
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [popStates, setPopStates] = useState({
        services: false,
        company: false,
        vacation: false,
        support: false,
    });

    const addActiveClasses = () => {
        setIsActive(!isActive);
    }

    // const popups = (popupKey) => {
    //     setPopStates(prevState => ({
    //         ...prevState,
    //         ...prevState = false,
    //         [popupKey]: !prevState[popupKey],
    //     }));
    // };

    const popups = (popupKey) => {
        setPopStates(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => {
                acc[key] = false; // Set all popups to false
                return acc;
            }, {}),
            [popupKey]: !prevState[popupKey], // Then toggle the specified popup
        }));
    };

    return (
        <div className="nav">
            <div className="nav-title">
                <img src={logo} alt="" />
            </div>

            <div className={`nav-links ${isActive && "active"}`}>
                <div className="nav-link" onClick={() => popups('services')}>
                    <a> Services <span className="arrow"><IoIosArrowDown /></span> </a>
                    <div className={`popup ${popStates.services && "active"}`}> <a> About us</a> <a>Careers</a> </div>
                </div>

                <div className="nav-link" onClick={() => popups('company')}>
                    <a> The Company <span className="arrow"><IoIosArrowDown /></span> </a>
                    <div className={`popup ${popStates.company && "active"}`}> <a> About us</a> <a>Careers</a>
                </div>                </div>

                <div className="nav-link" onClick={() => popups('vacation')}>
                    <a>Vacation <span className="arrow"><IoIosArrowDown /></span> </a>
                    <div className={`popup ${popStates.vacation && "active"}`}> <a> About us</a> <a>Careers</a> </div>
                </div>

                <div className="nav-link" onClick={() => popups('support')}>
                    <a> Support <span className="arrow"><IoIosArrowDown /></span> </a>
                    <div className={`popup ${popStates.support && "active"}`}> <a> About us</a> <a>Careers</a> </div>
                </div>
            </div>

            <div className="nav-buttons laptop">
                <button className="transp-btn">Login</button>
                <button className="blue-btn">Sign up</button>
            </div>

            <div className={`mobile hamburger ${isActive && "active"}`} onClick={addActiveClasses}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Navbar;