import { Link } from 'react-router-dom';
import '../assets/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Principales bactéries pathogènes</h1>
          <p className="hero-subtitle">
            Découvrez les principales bactéries pathogènes et les bactéries indicatrices d’hygiène.
          </p>
          <Link to="/services" className="cta-button">
            Découvrir les types de bactéries
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Catégories de bactéries</h2>
          <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><img src='https://img.icons8.com/?size=100&id=s3hw30lVQFmO&format=png&color=000000' alt="Bactéries pathogènes majeures" /></div>
                <h3>Bactéries pathogènes majeures</h3>
                <p>Salmonella spp, Listeria monocytogenes, Escherichia coli pathogènes (STEC / EHEC O157:H7), Campylobacter jejuni / coli,Vibrio spp. (produits de la mer)</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><img src="https://img.icons8.com/?size=100&id=ymkjvusZEovn&format=png&color=000000" alt="Bactéries toxigènes / sporulées" /></div>
                <h3>Bactéries toxigènes / sporulées</h3>
                <p>Staphylococcus aureus, Bacillus cereus, Clostridium perfringens, Clostridium botulinum (cas spécifiques : conserves, produits anaérobies)</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><img src="https://img.icons8.com/?size=100&id=yGr4Ih8kw35A&format=png&color=000000" alt="Bactéries indicatrices d’hygiène" /></div>
                <h3>Bactéries indicatrices d’hygiène</h3>
                <p>Escherichia coli β-glucuronidase positive (E. coli β⁺) ,Escherichia coli (indicateur fécal), Coliformes totaux, Entérobactéries, Flore aérobie mésophile totale (FAMT)</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><img src="https://img.icons8.com/?size=100&id=zCjCJjruE2vG&format=png&color=000000" alt="Autres germes utiles selon le produit" /></div>
                <h3>Autres germes utiles selon le produit</h3>
                <p>Pseudomonas spp. (altération), levures et moisissures, Lactobacillus / flore lactique (fermentés), Résumé rapide (format laboratoire), Groupe, Micro-organisme, Pathogènes, Salmonella, Listeria, E. coli STEC, Campylobacter, Toxigènes, Staph. aureus, B. cereus, C. perfringens, Indicateurs, E. coli β⁺, E. coli, Coliformes, Entérobactéries, Qualité, FAMT, Altération, Pseudomonas, levures, moisissures</p>
              </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>À propos des bactéries pathogènes</h2>
              <p>
                Les bactéries pathogènes sont des microorganismes qui peuvent causer des maladies chez les humains et les animaux. 
                Ces bactéries ont évolué de nombreux mécanismes pour envahir les tissus hôtes, éviter les réponses immunitaires, et causer une infection. 
                Comprendre leurs caractéristiques, les routes de transmission, et les mécanismes pathogènes est crucial pour la santé publique et le traitement médical.
              </p>
              <p>
                Les principales bactéries pathogènes incluent des espèces de genres tels que Staphylococcus, 
                Streptococcus, Escherichia, Salmonella, Mycobacterium, et bien d'autres. Chaque espèce 
                a des caractéristiques uniques, des habitats préférés, et des capacités de causer des maladies qui les rendent des menaces significatives pour la santé humaine dans le monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à explorer les bactéries pathogènes ?</h2>
          <p>Découvrez les informations détaillées sur les principales bactéries pathogènes et les maladies qu'elles causent</p>
          <Link to="/services" className="cta-button-secondary">
            Voir les types de bactéries
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

