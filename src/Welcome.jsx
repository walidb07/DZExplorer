import './styles/Welcome.css'

function Welcome() {
    
    return (
    <>
  <header>
    <div class="navbar">
      <div class="logo">
        <img src="src/logo.png" alt="Logo"/>
      </div>
      <div class="nav-buttons">
        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="user-buttons">
        <button href="#" class="register-btn">Register</button>
        <button href="#" class="login-btn">Login</button>
      </div>
    </div>
  </header>
    <section className="centerimage">
        <div>
        <h1>Votre Prochaine Destination De <br/> Voyage est <span class="green-text">l'Algérie!</span></h1>
        <p class="desc">Chez nous, les clients sont toujours satisfaits grâce à notre large choix d'options disponibles.</p>
        <div class="cta-buttons">
            <button href="#" class="green-btn">Register</button>
            <button href="#" class="white-btn">Login</button>
        </div>
        <div class="apropos">
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
    <section className="testimonial-section">
        <h2 class="section-title">Ce que disent nos clients</h2>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <div class="testimonial-profile">
                <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
            </div>
            <h3 class="testimonial-name">John Doe</h3>
            <p class="testimonial-role">Visiteur</p>
            <div class="testimonial-rating">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="emptystar"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
            </p>
          </div>
          {/* Add more testimonial cards here */}
          <div class="testimonial-card">
            <div class="testimonial-profile">
                <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
            </div>
            <h3 class="testimonial-name">John Doe</h3>
            <p class="testimonial-role">Visiteur</p>
            <div class="testimonial-rating">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="emptystar"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
            </p>
          </div>


          <div class="testimonial-card">
            <div class="testimonial-profile">
              <img src="src/images/Home/profile_icon.png" alt="Profile Picture" width="30%"/>
            </div>
            <h3 class="testimonial-name">John Doe</h3>
            <p class="testimonial-role">Visiteur</p>
            <div class="testimonial-rating">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="emptystar"></span>
            </div>
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod eu justo id blandit.
            </p>
          </div>
        </div>
    </section>    
  </>
    )
}

export default Welcome


