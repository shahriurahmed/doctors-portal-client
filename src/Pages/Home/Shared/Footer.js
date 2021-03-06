import React from 'react';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover' }} className=" p-10 ">

            <div >
                <div className='footer justify-between'>
                    <div className='container  mx-auto px-8'>
                        <span className="footer-title">SERVICES</span>
                        <a className="link link-hover">Emergency Checkup</a>
                        <a className="link link-hover">Monthly Checkup</a>
                        <a className="link link-hover">Weekly Checkup</a>
                        <a className="link link-hover">Deep Checkup</a>
                    </div>
                    <div>
                        <span className="footer-title">ORAL HEALTH</span>
                        <a className="link link-hover">Fluoride Treatment</a>
                        <a className="link link-hover">Cavity Filling</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Teath Whitening</a>
                    </div>
                    <div>
                        <span className="footer-title">OUR ADDRESS</span>
                        <a className="link link-hover">New York - 101010 Hudson</a>

                    </div>
                </div>
                <div className='my-10 text-center'>
                    <p>Copyright © {year} - All right reserved by Doctors Portal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;