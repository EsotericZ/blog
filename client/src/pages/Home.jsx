import { Link } from 'react-router-dom';

const Home = () => {

    const posts = [
        {
            id: 1,
            title: 'Testing my dude',
            desc: 'Lets see if this works',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png?20221012140704',
        },
    ];

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt='' />
                        </div>
                        <div className='content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>More...</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;