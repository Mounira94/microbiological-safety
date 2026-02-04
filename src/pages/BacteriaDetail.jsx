import { useParams, Link } from 'react-router-dom';
import '../assets/BacteriaDetail.css';

function BacteriaDetail() {
  const { bacteriaName } = useParams();

  // Helper function to convert slug to title format
  const slugToTitle = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to convert title to slug
  const titleToSlug = (title) => {
    return title.toLowerCase().replace(/\//g, "") .replace(/\s+/g, '-').replace(/[éè]/g, "e");
  };

  // Bacteria detailed data
  const bacteriaDatabase = {
    'salmonella-spp': {
      name: 'Salmonella spp',
      icon: 'https://img.icons8.com/?size=100&id=AEEGcJRBM1rn&format=png&color=000000',
      type: 'Bactéries pathogènes majeures',
      identityCard: '<strong>Genre Salmonella :</strong> Bacilles à Gram négatif, groupe des entérobactéries. <br/> <strong>Salmonella enterica subsp. enterica : </strong>principale espèce et sous espèce rencontrée (> 90 % des salmonelles).<br/>Grande variabilité au sein de l’espèce (antigènes O [LPS] et H [flagellaires]) qui permet de distinguer plusieurs sérovars dont :<br/> - Salmonelles majeures, agents de fièvre typhoïde et paratyphoïde : sérovars Typhi, Paratyphi A, Paratyphi B, Paratyphi C ;<br/>- Salmonelles mineures, agents de gastro-entérites (salmonellose) ; sérovars les plus fréquent Enteritidis, Typhimurium.<br/> Catégorie B des agents de bioterrorisme (morbidité et mortalité modérée, agents à dissémination moins facile).',
      transmission: '<strong>Salmonelles majeures (Salmonella Typhi, Paratyphi A, B et C) : </strong> <br/> Réservoir strictement humain (portage asymptomatique des voies biliaires) <br/> Transmission interhumaine par voie féco-orale (eau et aliments contaminés) <br/> <strong>Salmonelles mineures : </strong><br/>Commensales de vertébrés (volailles, ovins, bovins)<br/> Transmission par ingestion d’aliments contaminés (viande, lait, œufs, fruits de mer, etc.)<br/>',
      diseases: '<strong>Fièvre typhoïde et paratyphoïde (Salmonella Typhi, Paratyphi A, B et C) : </strong></br> Parmi les principales maladies d’importation responsables de fièvre. </br> Endémiques en zone tropicale (5 % des individus souffrant de lithiase biliaire sont porteurs et favorisent la dissémination). </br> <strong>Salmonelles mineures :</strong></br> Causes fréquentes de gastroentérites et toxi-infections alimentaires collectives (TIAC).</br> Causes fréquentes de diarrhée du voyageur et de diarrhées d’importation.</br> Causes de diarrhées récurrentes et de fièvre prolongée chez le sujet immunodéprimé.</br> Maladies à déclaration obligatoire : fièvres typhoïdes et paratyphoïdes, TIAC</br> Surveillance épidémiologique et clinique nationale (Centre National de Référence des Escherichia coli, Shigella, Salmonella)',
      prevention: 'Vaccin typhoïdique (fièvre typhoïde) recommandé en cas de séjour prolongé en zone à bas niveau d\'hygiène (sous-continent indien en particulier). <br/>Règles d’hygiène alimentaire.',
      pathogenicity: 'Le processus physiopathologique des infections à Salmonella implique une étape de contamination par voie orale suivie d’une invasion de l’épithélium intestinal : mécanisme entéro-invasif qui entraîne syndrome dysentérique et fièvre. Les infections à Salmonella Typhi et Paratyphi A/B/C impliquent de plus une phase bactériémique. </br> <strong>Salmonella Typhi et Paratyphi A/B/C :</strong><br/>Incubation : 7 à 21 jours.<br/>Franchissement de la muqueuse intestinale sans la léser, atteinte de la circulation sanguine via le système lymphatique.<br/>Localisations secondaires possibles, à l\'origine de manifestations viscérales.<br/>Infection de la vésicule biliaire et réinfection du tractus intestinal.<br/><strong>- Salmonelles mineures :</strong> </br>Incubation courte (24-48h). </br>Franchissement de la muqueuse intestinale sans la léser, atteinte de la circulation sanguine via le système lymphatique.<br/>Localisations secondaires possibles, à l\'origine de manifestations viscérales.<br/>Infection de la vésicule biliaire et réinfection du tractus intestinal.<br/>- Salmonelles mineures :<br/>Incubation courte (24-48h).<br/>Invasion du tissu lymphoïde sous-muqueux.<br/>Bactériémie et atteintes viscérales possibles chez immunodéprimés.',
      clinicalSigns: '● Fièvre typhoïde et paratyphoïde : Salmonella Typhi et Paratyphi A/B/C <br/> L’infection se déroule en 2 phases : <br/>1- Phase d’invasion (1er septénaire) : fièvre progressivement croissante (à prédominance vespérale), associée de manière variable à céphalées, insomnie, asthénie, anorexie, troubles digestifs, pouls dissocié (signe évocateur), splénomégalie (30 %) ; <br/>2-Phase d’état (2ème et 3ème septénaire) : fièvre en plateau pouvant dépasser 40°C, associée de manière variable à tuphos (inversion du rythme nycthéméral, prostration, obnubilation), douleurs abdominales, diarrhée (2/3 des cas), pouls dissocié, angine de Duguet (10%, ulcérations superficielles de petite taille au niveau des piliers antérieurs et du voile du palais), splénomégalie (inconstante), exanthème lenticulaire du tronc (1/3 des cas). <br/>o Complications possibles : digestives (hémorragies, perforations), toxiniques (myocardite, encéphalite), localisations septiques secondaires ; <br/>o Biologie : bactériémie (phase d’invasion surtout), syndrome inflammatoire franc (CRP élevée), leuco-neutropénie typique habituelle. <br/>● Diarrhées et gastro-entérites : Salmonella non Typhi, non Paratyphi A/B/C <br/>o Syndrome gastro-entéritique : selles liquides ou glaireuses, plus ou moins accompagnées de vomissements, douleurs abdominales et fièvre ; <br/>o Fréquentes chez le sujet VIH ; <br/>o Complications possibles : bactériémie et sepsis, surtout chez les sujets immunodéprimés ; la bactériémie à Salmonella non Typhi définit le SIDA si elle est récurrente. <br/>● Infections ostéo-articulaires : en particulier chez l’enfant drépanocytaire', 
      bacteriologicalDiagnostic: '● Diagnostic direct : culture</br>La nature des prélèvements dépend du type d’infection (fièvre typhoïde/paratyphoïde ou gastro-entérite) et des signes cliniques</br>(sepsis, diarrhée, etc.).</br>o Fièvre typhoïde et paratyphoïde :</br>- Hémocultures : surtout pendant la phase d’invasion</br>- Coproculture : parfois contributive au cours du 2ème septénaire (cycle entéro-hépatique des bactéries)</br>o Gastro-entérites</br>- Coproculture : à prescrire si diarrhée aiguë fébrile, notamment si TIAC, signes de gravité, retour des tropiques, et chez</br>l\'immunodéprimé, dans les premiers jours de la maladie, avant toute antibiothérapie. Un écouvillonnage rectal peut être</br>utile chez le nourrisson.</br>- Culture sans difficulté sur milieux usuels ; utilisation de milieux sélectifs (après enrichissement) pour les coprocultures.</br>- Identification de l’espèce par techniques usuelles (spectrométrie de masse MALDI-TOF).</br>- Identification du sérovar indispensable pour distinguer les salmonelles Typhi et Paratyphi des salmonelles mineures et pour le</br>suivi épidémiologique, notamment en cas de TIAC (signalement et envoi de la souche au Centre National de Référence).</br>Typage réalisé par techniques d’agglutination entre les antigènes bactériens (antigène de paroi O, antigène de flagelle H, antigène</br>de capsule facultatif Vi) et des sérums polyvalents ou monovalents (anticorps dirigés contre plusieurs ou un seul antigène) ou par</br>méthodes moléculaires (séquençage complet du génome des souches).</br>● Diagnostic indirect : sérologie</br>Indiqué pour le diagnostic de fièvre typhoïde et paratyphoïde.</br>Les anticorps apparaissent après environ une semaine d\'évolution, soit à la phase d’état.</br>',
      treatment: 'Gastroentérites : traitement avant tout symptomatique (réhydratation orale), antibiothérapie conseillée chez les personnes</br>fragiles.</br>Fièvre typhoïde et paratyphoïde : antibiothérapie indispensable.</br>Sensibilité aux antibiotiques : Les salmonelles sont naturellement sensibles de nombreux antibiotiques, dont les β-lactamines</br>(amoxicilline, amoxicilline-acide clavulanique, céphalosporines, carbapénèmes), les fluoroquinolones, le cotrimoxazole.</br>Antibiogramme indispensable du fait de l’augmentation des résistances acquises.</br>Molécules de choix :</br>- Fièvre typhoïde et paratyphoïde : β-lactamine.</br>- Gastro-entérites : traitement indiqué si syndrome dysentérique fébrile, syndromes gastroentéritiques sévères (> 6 selles/j et/ou</br>fièvre > 38,5°C), surtout si terrain à risque (âges extrêmes, immunodépression, drépanocytose, etc.)</br>Durée habituelle : 1-3 jours : azithromycine ou ciprofloxacine.</br>',
    },
    'listeria-monocytogenes': {
      name: 'Listeria monocytogenes',
      icon: 'https://img.icons8.com/?size=100&id=xn06IGkR5XGY&format=png&color=000000',
      type: 'Bactéries pathogènes majeures',
      identityCard: 'Genre : Listeria</br>Espèce : monocytogenes</br>Bacille Gram positif aérobie non sporulé– Mobile à 22°C, Immobile à 37°C</br>',
      transmission: 'Bactérie ubiquitaire, tellurique, très largement répandue dans l’environnement et résistante dans le milieu extérieur pouvant être</br>responsable d’épidémies</br>Bactérie psychrophile : peut croître aux températures de réfrigération, donc dans les aliments contaminés conservés au</br>réfrigérateur</br>Transmission par voie alimentaire (99 % des cas) et transplacentaire</br>',
      diseases: 'Maladie rare en France, responsable d’épidémies et de cas sporadiques</br>Sujet à risque : sujets âgés, sujets immunodéprimés, femmes enceintes</br>Maladie à déclaration obligatoire</br>Surveillance épidémiologique et clinique nationale (Centre National de Référence)</br>',
      prevention: 'Recommandations pour les sujets à risques :</br>• Consultation sans délai devant toute fièvre isolée après la consommation d’un aliment suspect</br>• Éviter les aliments à risque : fromage au lait cru, charcuterie crue, poisson fumé…</br>• Cuire les aliments</br>• Éviter tout contact des aliments avec l’environnement : laver les légumes crus, nettoyer les ustensiles…</br>• Nettoyer et vérifier régulièrement la température du réfrigérateur</br>',
      pathogenicity: 'Facteurs de virulence :</br>• Internalisation dans les cellules</br>• Dégradation de la vésicule d’endocytose grâce à la listériolysine</br>• Polymérisation de l’actine et formation de « comètes d’actine » propulsant la bactérie dans la cellule voisine</br>',
      clinicalSigns: 'Chez l’adulte sans facteurs de risque : gastro-entérite fébrile</br>Chez l’adulte avec facteurs de risque :</br>• Méningite, méningo-encéphalite, rhombencéphalite</br>• Abcès cérébraux</br>Forme materno-fœtale :</br>• Femme enceinte : syndrome pseudo-grippal</br>• Avant 5ème mois de grossesse : risque d’avortement</br>• Après le 5ème mois de grossesse : accouchement prématuré possible</br>• Listériose néonatale : granulomatose septique infantile, méningite aiguë</br>', 
      bacteriologicalDiagnostic: '<strong>Diagnostic conventionnel par culture</strong></br><ul><li>Prélèvements : liquide cérébrospinal, hémoculture, placenta…</li><li>Identification : spectrométrie de masse</li><li>Biologie moléculaire : sensibilité variable selon les techniques</li></ul>',
      treatment: '<strong>Résistance naturelle aux céphalosporines (toutes générations confondues)</strong></br><strong>Traitement usuel :</strong></br><ul><li>Atteinte neuro-méningée, Bactériémie : Amoxicilline + Gentamicine</li><li>Fièvre non documentée chez la femme enceinte : Amoxicilline</li></ul>'
    },
    'campylobacter-jejuni-coli,vibrio-spp.-(produits-de-la-mer)': {
      name: 'Campylobacter jejuni / coli,Vibrio spp. (produits de la mer)',
      icon: 'https://img.icons8.com/?size=100&id=RoZIT1ZUKN0D&format=png&color=000000',
      type: 'Bactéries pathogènes majeures',
      image: './Capture.jpg',
      imageCaption: 'Aspect au Gram de Campylobacter jejuni.</br>Gram réalisé à partir d’une subculture d’une souche deC. jejuni sur gélose Campylosel®. Photo prise à l’objectif X100 à immersion. Photo du CNR des Campylobacter et des Helicobacter',
      identityCard: 'Famille des Campylobacteraceae qui contient les genres Campylobacter et Helicobacter</br>Principales espèces du genre Campylobacter retrouvées en clinique : C. jejuni, C. coli et C. fetus.</br>Campylobacter = bactéries responsables de zoonoses, dont le principal réservoir est le tube digestif des oiseaux (volaille)</br>D’autres animaux peuvent contribuer à leur diffusion, ex : porc, bovins, animaux de compagnie.',
      transmission: '- Indirecte par ingestion d’aliments ou d’eau contaminés :</br>- viande de volaille soit consommée notamment crue ou peu cuite, soit par contamination croisée ;</br>- ou carcasses souillées au niveau de la peau en contact d’autres aliments consommés crus.</br>- Directe via des animaux contaminés : contact avec des animaux de compagnie, ou via un environnement contaminé par des</br>déjections d’oiseaux ou d’animaux. La transmission interhumaine, plus rare, est possible et peut concerner les collectivités ou des</br>environnements ou populations à conditions d’hygiène précaires',
      diseases: 'Principale cause de gastro-entérites d’origine bactérienne en France (devant les Salmonelloses).</br>La grande majorité des souches sont isolées de selles (98 %, C. jejuni et C. coli) et de bactériémies (2 %, C. fetus et C. jejuni)</br>Recrudescence saisonnière pendant le printemps et l’été.</br>Infections majoritairement sous la forme de cas isolés. Cas groupés possibles majoritairement intrafamiliaux.</br>Surveillance épidémiologique et clinique nationale (Centre National de Référence)',
      prevention: 'Prévention individuelle en milieu domestique : hygiène des mains, règles de base d’hygiène dans la préparation des repas</br>Eviter la consommation de lait non pasteurisé</br>Hygiène à respecter si contacts avec des animaux de compagnie ou d’élevage</br>Lutte contre le péril fécal dans les pays en voie de développement',
      pathogenicity: 'Pouvoir cytotoxique, invasif et pro-inflammatoire.</br>Les Campylobacter ciblent principalement l’iléon et le côlon.</br>Principaux facteurs de virulence : flagelles, adhésines, toxine CDT, lipo-oligosaccharide, système de sécrétion de type III ou IV. En</br>fonction des souches et des espèces : γ-glutamyl transpeptidase pour C. jejuni, pseudo-capsule pour C. fetus.',
      clinicalSigns: '- Entérite à Campylobacter<br/>Incubation : 3 à 4 jours.<br/>Signes digestifs aspécifiques : diarrhée inflammatoire parfois sanglante, douleurs abdominales et parfois vomissements.<br/>Signes généraux : fièvre, céphalées, asthénie, anorexie.<br/>Risque de déshydratation.<br/>Pas de portage digestif sauf chez certains patients immunodéprimés.<br/>- Infections systémiques<br/>Bactériémies par translocation digestive (majoritairement à C. fetus et C.', 
      bacteriologicalDiagnostic: '<strong>Prélèvements</strong><br/>Selles sur milieu de transport ou écouvillonnage rectal.<br/>Hémocultures.<br/>Autres : biopsies, matériels endovasculaires etc...<br/><strong>Examen microscopique</strong><br/>Bacilles à Gram négatif incurvés.<br/><strong>Culture</strong><br/>Milieux sélectifs pour culture à partir de selles.<br/>Croissance en atmosphère micro-aérobie (3-5 % O2).<br/>Toutes les espèces poussent à 35-37°C certaines (notamment C. jejuni et C. coli) peuvent pousser à 40-42°C.<br/>Identification<br/>Identification possible par spectrométrie MALDI-TOF.<br/>Galeries d’identification automatisées</br>Autres méthodes</br>PCR syndromique possible sur prélèvements de selles.',
      treatment: '• Symptomatique de la diarrhée (éviter la déshydratation).<br/>• Macrolides pour diarrhées infectieuses si signes de gravité ou contexte : fièvre >38°C, sang dans les selles, douleurs abdominales importantes, enfants, patients âgés, femme enceinte, patient immunodéprimé, absence d’amélioration spontanée des symptômes.<br/>Molécule de choix : Azithromycine voie orale, 5 jours.<br/>• Infections systémiques : amoxicilline + acide clavulanique ou carbapénème +/- gentamicine. Fluoroquinolone possible si sensible sur l’antibiogramme.',
    },
    //  'listeria-monocytogenes': {
    //   name: 'Listeria monocytogenes',
    //   icon: 'https://img.icons8.com/?size=100&id=xn06IGkR5XGY&format=png&color=000000',
    //   type: 'Bactéries pathogènes majeures',
    //   identityCard: '',
    //   transmission: '',
    //   diseases: '',
    //   prevention: '',
    //   pathogenicity: '',
    //   clinicalSigns: '', 
    //   bacteriologicalDiagnostic: '',
    //   treatment: '',
    // },
     // 'listeria-monocytogenes': {
    //   name: 'Listeria monocytogenes',
    //   icon: 'https://img.icons8.com/?size=100&id=xn06IGkR5XGY&format=png&color=000000',
    //   type: 'Bactéries pathogènes majeures',
    //   identityCard: '',
    //   transmission: '',
    //   diseases: '',
    //   prevention: '',
    //   pathogenicity: '',
    //   clinicalSigns: '', 
    //   bacteriologicalDiagnostic: '',
    //   treatment: '',
    // },
  };

  
  // Get bacteria data or show not found
  const bacteria = bacteriaDatabase[bacteriaName] || null;

  if (!bacteria) {
    return (

      <div className="bacteria-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Bacterium Not Found</h1>
            <p>The bacterium you're looking for doesn't exist in our database.</p>
            <Link to="/services" className="back-button">Back to Bacteria Types</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bacteria-detail-page">
      {/* Header Section */}
      <section className="bacteria-header">
        <div className="container">
          <div className="header-content">
            <div className="bacteria-icon-large"><img src={bacteria.icon} alt={bacteria.name}/></div>
            <h1>{bacteria.name}</h1>
            <div className="bacteria-type-badge">{bacteria.type}</div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bacteria-details-section">
        <div className="container">
          <div className="details-grid">
          {/* Image Section */}
            {bacteria.image &&  <div>
                <figure>
                  <img src={bacteria.image} alt={bacteria.name}  />
                  <figcaption>{bacteria.imageCaption}</figcaption>
                </figure>
            </div>}
            <div className="detail-card">
              <div className="detail-icon">🧪</div>
              <h3>Carte d'identité</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.identityCard }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🌐</div>
              <h3>Transmission</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.transmission }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🦠</div>
              <h3>Epidémiologie</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.diseases }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🛡️</div>
              <h3>Prévention</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.prevention }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🤒</div>
              <h3>Pouvoir Pathogène</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.pathogenicity }}></p>
            </div>

             <div className="detail-card">
              <div className="detail-icon">🏥</div>
              <h3>Signes Cliniques</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.clinicalSigns }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🌡️</div>
              <h3>Diagnostic Bactériologique</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.bacteriologicalDiagnostic }}></p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">💊</div>
              <h3>Traitement</h3>
              <p dangerouslySetInnerHTML={{ __html: bacteria.treatment }}></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BacteriaDetail;

