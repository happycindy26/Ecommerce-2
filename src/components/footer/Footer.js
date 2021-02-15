import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__link">
                    <a className="footer__link-item" href="https://www.facebook.com/"><i class="fab fa-facebook-square">Facebook</i></a>
                
                    <a className="footer__link-item" href="https://www.twitter.com/"><i class="fab fa-twitter-square">Twitter</i></a>
                
                    <a className="footer__link-item" href="https://www.linkedin.com/"><i class="fab fa-linkedin">LinkedIn</i></a>
                
                    <a className="footer__link-item" href="https://www.youtube.com/"><i class="fab fa-youtube-square">Youtube</i></a>
                
                    <a className="footer__link-item" href="https://www.instagram.com/"><i class="fab fa-instagram-square">Instagram</i></a>
                </div> 
                <div>
                    <p className="footer__copy">&copy; Botani 2021</p>
                </div>
            </footer>
        )
    }
}

export default Footer;