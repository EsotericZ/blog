const Menu = () => {
    const posts = [
        {
            id: 1,
            title: 'Testing my dude',
            desc: 'Lets see if this works',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png?20221012140704',
        },
    ];

    return (
        <div className='menu'>
            <h1>Other posts</h1>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt='' />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;