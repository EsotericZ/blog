import { Link } from 'react-router-dom';
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import Profile from '../img/profile.png';

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img />
                <div className='user'>
                    <img src={Profile} alt='' />
                </div>
                <div className='info'>
                    <span>CJ</span>
                    <p>Posted</p>
                </div>
                <div className='edit'>
                    <Link to={`/write?edit=2`}>
                        <img src={Edit} alt='' />
                    </Link>
                    <img src={Delete} alt='' />
                </div>
            </div>
            <div className='menu'></div>
        </div>
    )
}

export default Single;