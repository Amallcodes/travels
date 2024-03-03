import image1 from "../assets/images/hero-image.png"
import worldimg from "../assets/images/card-icon.png"
import student from "../assets/images/career-people.png"
import travel1 from "../assets/images/mauritius.png"
import travel2 from "../assets/images/maldives.png"
import travel3 from "../assets/images/cairo.png"
import man from "../assets/images/man.png"
import lady from "../assets/images/lady.png"

const LandingPage = () => {
    return (
        <div className="home">
            <div className="top-section section">
                <div className="top-header">
                    <h1>
                        Embrace New Horizons
                        with CharizTravels
                    </h1>

                    <p>CharizTravels is a dynamic travel consultancy firm with a team of experienced professionals, we specialize in making your international travel dreams a reality.</p>

                    <div className="top-buttons">
                        <button className="blue-btn">Book Consultation</button>
                        <button className="transp-btn">Learn more</button>
                    </div>
                </div>

                <div className="top-image laptop">
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className="second-section section">
                <div className="second-box">
                    <div className="titles">
                        <a>Flight Booking</a>
                        <a>Accomodation</a>
                    </div>

                    <div className="calendars">
                        <div className="select-box flight">
                            <select id="custom-options">
                                <option value="" disabled selected>Select flight</option>
                                <option value="LOS">LOS</option>
                                <option value="ABJ">ABJ</option>
                                <option value="IMO">IMO</option>
                                <option value="JOS">JOS</option>
                            </select>
                        </div>

                        <div className="select-box">
                            {/* <input type="date" className="custom-options date"> </input> */}
                            <input type="date" placeholder="Check-in" className="custom-options date" />
                        </div>

                        <div className="select-box">
                            <input type="date" placeholder="Check-Out" className="custom-options date" />
                        </div>

                        <div className="select-box guests">
                            <select className="custom-options">
                                <option value="" disabled selected>Guest (s)</option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                            </select>
                        </div>

                        <div className="select-box-button">
                            <button className="blue-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-section section">
                <div className="description">
                    <h1>What We Do</h1>
                    <p>Navigate the complexities of immigration with our expert guidance. We provide comprehensive
                        assistance for various pathways, ensuring a hassle-free process.
                    </p>
                </div>

                <div className="blue-boxes">
                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Immigration Services</h2>
                        <p>Navigate the complexities of immigration with our expert guidance. We provide comprehensive assistance for various pathways, ensuring a hassle-free process.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Study Abroad Service</h2>
                        <p>Dream of studying overseas? We make it happen. Our personalized counseling covers everything from university selection to visa processing guidiance, paving your path to global education.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Tourist Visas</h2>
                        <p>Embark on your next adventure with ease. Our team ensures a smooth tourist visa process for multiple countries, complying with all requirements.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Hotel Reservation & Flight Bookings </h2>
                        <p>Find the perfect stay and the best flight deals with our comprehensive booking services. We guarantee comfort and value in every step of your journey.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Group Tours & Excursions </h2>
                        <p>Join our expertly curated local and international excursions for unique and unforgettable experiences. Discover new places and create lasting memories with CharizTravels.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <img src={worldimg} alt="" />
                        <h2>Corporate Travel Solutions </h2>
                        <p>Efficient, cost-effective corporate travel is our specialty. We provide personalized support throughout the travel process, ensuring your business trips are successful and stress-free.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                </div>

                <div className="about">
                    <img src={student} alt="" />

                    <div className="about-text">
                        <button className="transp-btn"> About us </button>
                        <h2>Who we are</h2>
                        <p>
                            CharizTravels is a dynamic travel consultancy firm with a team of experienced professionals, we specialize in making your international travel dreams a reality. Our expertise lies in understanding the nuances of various travel and processes, ensuring a hassle-free experience for our clients
                        </p>
                        <button className="blue-btn"> Learn more </button>
                    </div>
                </div>

                <div className="consult-section">
                    <div className="consult-text">
                        <h1>Our drive is the relentless
                            pursuit of excellence and the joy of making dreams come true.
                        </h1>
                        <p>
                            It's the thrill of opening doors to new possibilities and the gratification of surpassing client expectations. At CharizTravels, we are driven by the transformative power of travel and the stories of lives changed through the experiences we curate.
                        </p>
                        <button className="transp-btn">
                            Book Consultation
                        </button>
                    </div>
                </div>

            </div>

            <div className="fourth-section section">
                <div className="fourth-title">
                    <div className="box-1">
                        <h1>Vacation Packages</h1>
                        <p>Navigate the complexities of immigration with our expert guidance. We provide comprehensive
                            assistance for various pathways, ensuring a hassle-free process.
                        </p>
                    </div>

                    <div className="left-right">
                        <button>See All</button>
                        <div className="left">X</div>
                        <div className="right">X</div>
                    </div>
                </div>

                <div className="fourth-grid">
                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img">
                            <img src={travel1} alt="" />
                        </div>
                        <h2> Mauritius</h2>
                        <p>A tropical paradise where turquoise waters meet sugary white sands, and lush green landscapes embrace a rich cultural tapestry.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img">
                            <img src={travel2} alt="" />
                        </div>
                        <h2> Cairo</h2>
                        <p>A bustling metropolis where ancient wonders meet the pulse of modern life. From the iconic pyramids that whisper of millennia past to the vibrant markets.</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>

                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img">
                            <img src={travel3} alt="" />
                        </div>
                        <h2> Maldives </h2>
                        <p>The Maldives, an enchanting tropical paradise in the Indian Ocean, is renowned for its stunning natural beauty pristine & beaches</p>
                        <button className="transp-btn">
                            Learn more
                        </button>
                    </div>
                </div>

                <div className="fourth-title-2">
                    <button>Our Blog</button>
                    <h1>Read from our insights</h1>
                </div>

                <div className="fourth-grid fourth-grid-2">
                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img-2">
                            <img src={man} alt="" />
                        </div>
                        <h2> Article about the benefits of travelling abroad</h2>
                        <div className="hr"></div>
                    </div>

                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img-2">
                            <img src={man} alt="" />
                        </div>
                        <h2> Article about the benefits of travelling abroad</h2>
                        <div className="hr"></div>
                    </div>

                    <div className="blue-box">
                        <div className="fourth-section-blue-box-img-2">
                            <img src={man} alt="" />
                        </div>
                        <h2> Article about the benefits of travelling abroad</h2>
                        <div className="hr"></div>
                        {/* <a>2nd, January, 2023</a> */}
                    </div>
                </div>

                <div className="lady-section">
                    <div className="lady-section-text">
                        <h1>Don’t be left out on our updates</h1>
                        <p>We send out updates to our weekly newsletter and we would love to keep you in the loop</p>
                        <div className="mail">
                            <input type="text" placeholder="Enter your email" />
                            <button>Submit</button>
                        </div>
                    </div>
                    <img src={lady} alt="" />
                </div>
            </div>

            
        </div>
    );
}

export default LandingPage;