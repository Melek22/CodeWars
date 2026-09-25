import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Biserica Sfinții Arhangheli Mihail și Gavril</h1>
          <h2>Grozești, Iași</h2>
          <p>Bine ați venit pe pagina oficială a parohiei noastre. Vă așteptăm cu drag la sfintele slujbe!</p>
        </div>
      </section>

      <section className="widgets-section">
        <div className="widget-container">
          <h3>Calendar Ortodox</h3>
          <div className="widget-placeholder calendar-widget">
            {/* Replace this div with the actual iframe from Doxologia */}
            <p>Aici va fi integrat Widget-ul Calendar Doxologia</p>
          </div>
        </div>

        <div className="widget-container">
          <h3>Radio Trinitas / Doxologia</h3>
          <div className="widget-placeholder radio-widget">
             {/* Replace this div with the actual audio player or iframe */}
             <p>Aici va fi integrat player-ul Radio Trinitas</p>
             <audio controls style={{ width: '100%', marginTop: '10px' }}>
                <source src="https://edge126.rcs-rds.ro/trinitas/trinitas.mp3" type="audio/mpeg" />
                Browserul dumneavoastră nu suportă elementul audio.
             </audio>
          </div>
        </div>
      </section>

      <section className="welcome-message">
         <h3>Cuvânt de învățătură</h3>
         <p>
            Biserica noastră, ocrotită de Sfinții Arhangheli Mihail și Gavril, este un loc de pace,
            rugăciune și regăsire spirituală pentru toți credincioșii din Grozești și nu numai.
            Vă invităm să ne treceți pragul pentru a participa la sfintele taine și slujbe.
         </p>
      </section>
    </div>
  );
}

export default Home;
