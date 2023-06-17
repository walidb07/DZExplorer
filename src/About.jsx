import './styles/About.css'

function About() {
    return (
        <>
            <div className='root-about'>
            <header>
        <div className="navbar">
          <div className="logo">
            <img src="src/images/logo-bold.svg" alt="Logo"/>
          </div>
          <div className="nav-buttons">
            <a href="/" >Accueil</a>
            <a href="/about" className="active">A propos</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="user-buttons">
            <a href="/register"><button className="register-btn">S'inscrire</button></a>
            <a href="/login"><button className="login-btn">Se connecter</button></a>
          </div>
        </div>
      </header>
            </div>
        </>
    )
}

export default About