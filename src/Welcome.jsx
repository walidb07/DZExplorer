import './styles/Welcome.css'

function Welcome() {

  const handleButtonClick = (event) => {
  };


    return (
    <div className='root-wrap'>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="src/images/logo-bold.svg" alt="Logo"/>
          </div>
          <div className="nav-buttons">
            <a href="/" className="active">Accueil</a>
            <a href="/about">A propos</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="user-buttons">
            <a href="/register"><button className="register-btn">S'inscrire</button></a>
            <a href="/login"><button className="login-btn">Se connecter</button></a>
          </div>
        </div>
      </header>
      <section className="center-content">
          <div>
          <h1>Votre Prochaine Destination De <br/> Voyage est <span className="green-text">l'Algérie!</span></h1>
          <p className="desc">Chez nous, les clients sont toujours satisfaits grâce à notre large choix d'options disponibles.</p>
          <div className="cta-buttons">
          <a href="/register"><button href="#" className="green-btn">S'inscrire</button></a>
          <a href="/login"><button href="#" className="white-btn">Se connecter</button></a>
          </div>
          <div className="apropos">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non tortor ipsum. Proin iaculis 
              ligula ut risus ullamcorper eleifend. Nulla eu tellus eget turpis auctor pulvinar.  Nullam hendrerit, ex id 
              laoreet accumsan, ligula leo fringilla nisi, nec mattis tortor leo eu leo. Maecenas eu bibendum risus. 
                Vestibulum id lacinia quam. Vivamus eu nunc vel enim lobortis aliquet. Nam vitae rhoncus mi. Maecenas
                volutpat facilisis neque, at posuere velit aliquet non. Sed tristique vehicula neque, non dictum nisl 
                feugiat nec. Phasellus tempus, ante et luctus placerat, ipsum sapien egestas ligula, ac facilisis lectus 
                odio vitae metus. Aliquam erat volutpat. Sed pretium semper faucibus. Fusce a nisl nisl.</p>
          </div>
          <img src="src/images/Home/Home_image01.png" alt="App Preview" width="80%"/>
          </div>
      </section>
      <section className="footer">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <div className="testimonial-profile">
                  <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
              </div>
              <h3 className="testimonial-name">John Doe</h3>
              <p className="testimonial-role">Visiteur</p>
              <div className="testimonial-rating">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="emptystar"></span>
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
              </p>
            </div>
            {/* Add more testimonial cards here */}
            <div className="testimonial-card">
              <div className="testimonial-profile">
                  <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
              </div>
              <h3 className="testimonial-name">John Doe</h3>
              <p className="testimonial-role">Visiteur</p>
              <div className="testimonial-rating">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="emptystar"></span>
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
              </p>
            </div>


            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
              </div>
              <h3 className="testimonial-name">John Doe</h3>
              <p className="testimonial-role">Visiteur</p>
              <div className="testimonial-rating">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="emptystar"></span>
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
              </p>
            </div>
          </div>
      </section>    
    </div>
    )
}

export default Welcome


