import './Nav.css'
import MenuItem from '../MenuItem/MenuItem'

export default function Nav(props) {
    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <MenuItem />
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                    <MenuItem menuName={'Homer'} />
                    <MenuItem menuName={'Lisa'} />
                    <MenuItem menuName={'Maggie'} />
                    <MenuItem menuName={'Marge'} />
                    <MenuItem menuName={'Bart'} />
                    <MenuItem menuName={'Others'} />
                    <i className="fa fa-search"></i>            
                </ul>
            </div>
        </nav>
    );
}