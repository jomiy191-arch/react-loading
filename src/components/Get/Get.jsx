import React from 'react';
import './Get.css';

const Get = () => {
    return (
        <>
            {/* Hero / Call to action section */}
            <section className="get-section" id='all'>
                <div className="get-container" id='support'>
                    <article className="get-content">
                        <h1 className="get-title">
                            Enjoy every beat.
                            <span className="line-break">Get a new headphone.</span>
                        </h1>
                        <button className="get-button">Buy now</button>
                    </article>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-container">
                    <h1>Omega</h1>
                    <ul>
                        <li><a href="">Support</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><p>© 2020 UXTheme, All Rights Reserved</p></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Get;
