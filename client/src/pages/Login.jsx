const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" />
                <input required type="password" placeholder="password" />
                <button>Login</button>
                <p>This is an error</p>
            </form>
        </div>
    )
}

export default Login;