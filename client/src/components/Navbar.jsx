import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt='' />
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=monarch'>
                        <h6>MONARCH</h6>
                    </Link>
                    <Link className='link' to='/?cat=games'>
                        <h6>GAMES</h6>
                    </Link>
                    <Link className='link' to='/?cat=rball'>
                        <h6>CO RBALL</h6>
                    </Link>
                    <Link className='link' to='/?cat=sports'>
                        <h6>SPORTS</h6>
                    </Link>
                    <Link className='link' to='/?cat=life'>
                        <h6>LIFE</h6>
                    </Link>
                    <Link className='link' to='/?cat=random'>
                        <h6>RANDOM</h6>
                    </Link>
                    <span>CJ</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to='/post'>New</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;