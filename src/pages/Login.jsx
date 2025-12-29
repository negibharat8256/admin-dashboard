const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        window.location.href = "/";
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Admin Login</h1>
                <p className="login-subtitle">
                    Sign in to access the admin panel
                </p>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="admin@test.com" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" />
                </div>

                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
