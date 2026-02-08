import { useParams, Link } from 'react-router-dom';
import '../assets/CategoryBacteria.css';

function CategoryBacteria() {
  const { categoryName } = useParams();
  console.log('categoryName :>> ', categoryName);
  // Helper function to convert name to URL-friendly slug
  const titleToSlug = (title) => {
    return title.toLowerCase().replace(/\//g, "") .replace(/\s+/g, '-').replace(/[éè]/g, "e");
  };

  // Bacteria data organized by category
  const bacteriaData = {
    'bacteries-pathogenes-majeures': {
      title: 'Bactéries pathogènes majeures',
      description: 'Salmonella spp, Listeria monocytogenes, Escherichia coli pathogènes (STEC / EHEC O157:H7), Campylobacter jejuni / coli,Vibrio spp. (produits de la mer)',
      icon: 'https://img.icons8.com/?size=100&id=s3hw30lVQFmO&format=png&color=000000',
      bacteria: [
        {
          name: 'Salmonella spp',
          icon: 'https://img.icons8.com/?size=100&id=AEEGcJRBM1rn&format=png&color=000000'
        },
        {
          name: 'Listeria monocytogenes',
          icon: 'https://img.icons8.com/?size=100&id=xn06IGkR5XGY&format=png&color=000000'
        },
        {
          name: 'Escherichia coli pathogènes (STEC / EHEC O157:H7)',
          icon: 'https://img.icons8.com/?size=100&id=MIYHrODGVPm3&format=png&color=000000'
        },
        {
          name: 'Campylobacter jejuni / coli,Vibrio spp. (produits de la mer)',
          icon: 'https://img.icons8.com/?size=100&id=RoZIT1ZUKN0D&format=png&color=000000'
        }
      ]
    },
    'bacteries-toxigenes-sporulees': {
      title: 'Bactéries toxigènes sporulées',
      description: 'Staphylococcus aureus, Bacillus cereus, Clostridium perfringens, Clostridium botulinum (cas spécifiques : conserves, produits anaérobies)',
      icon: 'https://img.icons8.com/?size=100&id=ymkjvusZEovn&format=png&color=000000',
      bacteria: [
        {
          name: 'Staphylococcus aureus',
          icon: 'https://img.icons8.com/?size=100&id=DyBTiewkkZcF&format=png&color=000000'
        },
        {
          name: 'Bacillus cereus',
          icon: 'https://img.icons8.com/?size=100&id=ymkjvusZEovn&format=png&color=000000'
        },
        {
          name: 'Clostridium perfringens',
          icon: 'https://img.icons8.com/?size=100&id=Hyge7ZSq4rhq&format=png&color=000000'
        },
        {
          name: 'Clostridium botulinum (cas spécifiques : conserves, produits anaérobies)',
          icon: 'https://img.icons8.com/?size=100&id=zCjCJjruE2vG&format=png&color=000000'
        }
      ]
    },
    'bacteries-indicatrices-d’hygiene': {
      title: 'Bactéries indicatrices d’hygiène',
      description: 'Escherichia coli β-glucuronidase positive (E. coli β⁺) ,Escherichia coli (indicateur fécal), Coliformes totaux, Entérobactéries, Flore aérobie mésophile totale (FAMT)',
      icon: 'https://img.icons8.com/?size=100&id=yGr4Ih8kw35A&format=png&color=000000',
      bacteria: [
        {
          name: 'Escherichia coli β-glucuronidase positive (E. coli β⁺)',
          icon: 'https://img.icons8.com/?size=100&id=futogFLcdEop&format=png&color=000000'
        },
        {
          name: 'Escherichia coli (indicateur fécal)',
          icon: 'https://img.icons8.com/?size=100&id=XbQX9Mv26TX2&format=png&color=000000'
        },
        {
          name: 'Coliformes totaux',
          icon: 'https://img.icons8.com/?size=100&id=L1UAO0qD2rhK&format=png&color=000000'
        },
        {
          name: 'Entérobactéries',
          icon: 'https://img.icons8.com/?size=100&id=znOV6AXk6GkW&format=png&color=000000'
        },
        {
          name: 'Flore aérobie mésophile totale (FAMT)',
          icon: 'https://img.icons8.com/?size=100&id=2V17ckP1AMoK&format=png&color=000000'
        }
      ]
    },
    'autres-germes-utiles-selon-le-produit': {
      title: 'Autres germes utiles selon le produit',
      description: 'Pseudomonas spp. (altération), levures et moisissures, Lactobacillus / flore lactique (fermentés)',
      icon: 'https://img.icons8.com/?size=100&id=zCjCJjruE2vG&format=png&color=000000',
      bacteria: [
        {
          name: 'Pseudomonas spp. (altération)',
          icon: 'https://img.icons8.com/?size=100&id=jMymggP7dFfN&format=png&color=000000'
        },
        {
          name: 'Levures et moisissures',
          icon: 'https://img.icons8.com/?size=100&id=rhORcdIWdqUU&format=png&color=000000'
        },
        {
          name: 'Lactobacillus / flore lactique (fermentés)',
          icon: 'https://img.icons8.com/?size=100&id=dNg0x1xCgZEr&format=png&color=000000'
        }
      ]
    }
  };

  // Get category data or show not found
  const category = bacteriaData[categoryName] || null;
  console.log('catergory :>> ', category);
  if (!category) {
    return (
      <div className="category-bacteria-page">
        <div className="container">
          <div className="not-found">
            <h1>Category Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>
            <Link to="/microbiological-safety/" className="back-button">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-bacteria-page">

      {/* Bacteria List Section */}
      <section className="bacteria-section">
        <div className="container">
          <div className="bacteria-grid">
            {category.bacteria.map((bacterium, index) => (
              <Link 
                key={index} 
                to={`/microbiological-safety/bacteria/${titleToSlug(bacterium.name)}`} 
                className="bacteria-card-link"
              >
                <div className="bacteria-card">
                  <div className="bacteria-icon"><img src={bacterium.icon} alt={bacterium.name}/></div>
                  <h3>{bacterium.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryBacteria;

