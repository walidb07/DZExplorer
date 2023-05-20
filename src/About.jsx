import './styles/About.css'

function About() {
    return (
        <>
            <div className='root-about'>
            <header>
        <div className="navbar">
          <div className="logo">
            <img src="src/logo.png" alt="Logo"/>
          </div>
          <div className="nav-buttons">
            <a href="/" >Home</a>
            <a href="/about" className="active">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="user-buttons">
            <a href="/register"><button className="register-btn">Register</button></a>
            <a href="/login"><button className="login-btn">Login</button></a>
          </div>
        </div>
      </header>
            </div>
        </>
    )
}

export default About