import './styles/Home.css'


function Home() {
    
    return (
    <> 
      <div class="welcome-section">
    <div class="left-section">
      <div class="logo">
          <img src="logo.png" alt="Logo"/>
      </div>
      <div class="tab-container">
        <div class="tab active" style="background-color: #31E981;">Acceuil</div>
        <div class="tab">Carte</div>
        <div class="tab">Evenements</div>
        <div class="tab">Actualités</div>
      </div>
      
    </div>
    <div class="right-section"></div>
</div>
  </>
    )
}

export default Home


