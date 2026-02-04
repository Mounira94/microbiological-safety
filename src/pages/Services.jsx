import { Link } from 'react-router-dom';
import '../assets/Services.css';

function Services() {

  // Helper function to convert title to URL-friendly slug
  const titleToSlug = (title) => {
    console.log('title:>> ', title.toLowerCase().replace(/\//g, "") .replace(/\s+/g, '-').replace(/[éè]/g, "e"));
    return title.toLowerCase().replace(/\//g, "").replace(/\s+/g, '-').replace(/[éè]/g, "e");
  };

  const services = [
    {
      icon: 'https://img.icons8.com/?size=100&id=s3hw30lVQFmO&format=png&color=000000',
      title: 'Bactéries pathogènes majeures',
      description: 'Salmonella spp, Listeria monocytogenes, Escherichia coli pathogènes (STEC / EHEC O157:H7), Campylobacter jejuni / coli,Vibrio spp. (produits de la mer)'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=ymkjvusZEovn&format=png&color=000000',
      title: 'Bactéries toxigènes / sporulées',
      description: 'Staphylococcus aureus, Bacillus cereus, Clostridium perfringens, Clostridium botulinum (cas spécifiques : conserves, produits anaérobies)'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=yGr4Ih8kw35A&format=png&color=000000',
      title: 'Bactéries indicatrices d’hygiène',
      description: 'Escherichia coli β-glucuronidase positive (E. coli β⁺) ,Escherichia coli (indicateur fécal), Coliformes totaux, Entérobactéries, Flore aérobie mésophile totale (FAMT)'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=zCjCJjruE2vG&format=png&color=000000',
      title: 'Autres germes utiles selon le produit',
      description: 'Pseudomonas spp. (altération), levures et moisissures, Lactobacillus / flore lactique (fermentés), Résumé rapide (format laboratoire), Groupe, Micro-organisme, Pathogènes, Salmonella, Listeria, E. coli STEC, Campylobacter, Toxigènes, Staph. aureus, B. cereus, C. perfringens, Indicateurs, E. coli β⁺, E. coli, Coliformes, Entérobactéries, Qualité, FAMT, Altération, Pseudomonas, levures, moisissures'
    }
  ];

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="container">
          <h1>Principales bactéries pathogènes</h1>
          <p>Découvrez les principales bactéries pathogènes et leurs caractéristiques</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/category/${titleToSlug(service.title)}`} 
                className="service-card-link"
              >
                <div className="service-card">
                  <div className="service-icon"><img src={service.icon} alt={service.title}/></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="appointment-section">
        <div className="container">
          <div className="appointment-container">
            <div className="appointment-info">
              <h2>En savoir plus</h2>
              <p>
                Remplissez le formulaire ci-dessous pour demander plus d'informations sur les bactéries pathogènes spécifiques
                ou pour poser des questions sur les maladies bactériennes.
              </p>
              <div className="info-box">
                <h3>Faites attention</h3>
                <p><strong>Transmission:</strong> Air, eau, alimentation, contact</p>
                <p><strong>Prévention:</strong> Hygiène, vaccination, antibiotiques</p>
                <p><strong>Traitement:</strong> Antibiotiques, soins de soutien</p>
              </div>
              <div className="info-box">
                <h3>Sources de recherche</h3>
                <p>CDC, WHO, revues médicales</p>
                <p>Manuels de microbiologie</p>
                <p>Papiers de recherche peer-reviewed</p>
              </div>
            </div>

            <div className="appointment-form-container">
                <form className="appointment-form" action="https://formspree.io/f/xreebraj" method="post">
                  <h2>Demande d'informations</h2>
                  
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Adresse email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Bactérie d'intérêt *</label>
                    <select
                      id="service"
                      name="service"
                      required
                    >
                      <option value="">Sélectionner une bactérie</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date de la demande</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">Heure</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Votre question ou sujet *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Que voulez-vous savoir sur cette bactérie pathogène ?"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Soumettre la demande
                  </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

