import './styles/Contact.css'

function Contact() {
    return (
        <>
           <div className='root-contact'>
           <header>
        <div className="navbar">
          <div className="logo">
            <img src="src/logo.png" alt="Logo"/>
          </div>
          <div className="nav-buttons">
            <a href="/" >Home</a>
            <a href="/about">About</a>
            <a href="/contact" className="active">Contact</a>
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

export default Contact