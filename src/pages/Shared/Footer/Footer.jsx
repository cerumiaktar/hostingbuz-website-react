import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#100B94]'>
            <footer className="footer sm:footer-horizontal container mx-auto text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Dhaka Office: Dhaka,Bangladesh</a>
                    <a className="link link-hover">New York Office: New York, NY 10036 </a>
                    <a className="link link-hover">Las Vegas: Las Vegas, NV 89109</a>
                    <a className="link link-hover">Phone: 013XXXXXXXX</a>
                    <a className="link link-hover">Email: info@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Returris</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Our Sitemap</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Our Store</h6>
                    <a className="link link-hover">New York</a>
                    <a className="link link-hover">London SF</a>
                    <a className="link link-hover">Cockfosters BP</a>
                    <a className="link link-hover">Los Angeles</a>
                    <a className="link link-hover">Chicago</a>
                    <a className="link link-hover">Las Vegas</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Linkedin</a>
                    <a className="link link-hover">Google Plus</a>
                    <a className="link link-hover">Medium</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;