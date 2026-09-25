import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h2>Istoricul Bisericii</h2>
      <p>
        Parohia "Sfinții Arhangheli Mihail și Gavril" din localitatea Grozești, județul Iași, are o istorie bogată
        în sprijinirea comunității locale și păstrarea tradițiilor ortodoxe.
      </p>
      <p>
        Biserica servește ca un centru spiritual pentru locuitorii din zonă, oferind servicii religioase,
        asistență spirituală și organizând evenimente comunitare pentru a întări legăturile dintre enoriași.
      </p>

      <h3>Programul Slujbelor</h3>
      <ul>
        <li><strong>Sfânta Liturghie:</strong> În fiecare duminică și zi de sărbătoare, de la ora 09:00.</li>
        <li><strong>Vecernie:</strong> Sâmbătă seara, de la ora 17:00 (sau 16:00 în timpul iernii).</li>
        <li><strong>Acatist / Paraclis:</strong> Miercuri și Vineri dimineața.</li>
      </ul>
      <p><i>*Programul poate suferi modificări, vă rugăm să consultați avizierul bisericii.</i></p>
    </div>
  );
}

export default About;
