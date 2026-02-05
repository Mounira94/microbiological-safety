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
      image: 'https://imgur.com/a/LLeOyeP',
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
     'staphylococcus-aureus': {
      name: 'Staphylococcus aureus (Staphylocoque doré)',
      icon: 'https://img.icons8.com/?size=100&id=W8GK2RwEACEf&format=png&color=000000',
      type: 'Bactéries toxigènes sporulées',
      image: "https://i.imgur.com/BK3FsaD.png",
      imageCaption: "S. aureus, coloration de Gram </br>(Source : CDC, image libre de droits)",
      identityCard: 'Famille : Staphylococcaceae - Genre : Staphylococcus<br>Cocci à Gram positif en amas, coagulase positive<br>Staphylococcus aureus = staphylocoque doré',
      transmission: '- Réservoir naturel : Homme et animaux à sang chaud ; réservoir secondaire : environnement (bactéries peu fragiles)</br>- Site de colonisation préférentiel : muqueuse nasale (20 à 30 % des adultes)</br>- Autres sites : tube digestif (20 %), muqueuse vaginale (10-15 %)</br>- Sites de colonisation secondaires (contamination locorégionale) : autres territoires cutanés, en particulier zones humides</br>(aisselles, périnée) et mains</br>Transmission par contact direct (manuportage) ; plus rarement indirecte à partir d’une source environnementale (vêtements, draps, matériels médicaux)',
      diseases: '',
      prevention: 'Mesures d’antisepsie et d’hygiène individuelle (traitement des lésions pouvant représenter une porte d’entrée à des infections</br>plus graves) et collective (lutte contre les infections dans les hôpitaux)</br>Respect des mesures d’hygiène (lavage des mains)</br>Dépistage et isolement (précautions complémentaires contact) des patients porteurs de SARM en unités de soins intensifs en</br>milieu hospitalier',
      pathogenicity: 'Spectre large +++ : infections suppuratives (multiplication bactérienne) et infections toxiniques liées à la diffusion de toxines</br>spécifiques pouvant être responsables de choc toxique staphylococcique, de syndrome d’exfoliation, etc.</br>Infections associées aux soins et communautaires',
      clinicalSigns: '<p>● Infections suppuratives :<br>- Superficielles ou invasives ; celles-ci impliquent prolifération bactérienne, invasion, puis destruction des tissus de l’hôte, réponse inflammatoire locale et systémique.<br>- Infections suppuratives loco-régionales : folliculites, furoncles, panaris, anthrax, dermohypodermites, sinusites et otites.<br>- Complications possibles : extension loco-régionale ou diffusion hématogène de la bactérie.<br>- Infections invasives : bactériémies, endocardites, pneumopathies, infections ostéoarticulaires, méningites, etc.<br>● Infections toxiniques : on en distingue plusieurs types<br>- Choc toxique staphylococcique : diffusion dans l’organisme de la toxine du choc toxique (TSST-1) et/ou d\'une autre entérotoxine à activité super-antigénique.<br>Forme clinique complète : fièvre &gt; 39°C, hypotension artérielle, érythrodermie scarlatiniforme généralisée suivie 7 à 14 jours après d’une desquamation intense, et au moins 3 manifestations systémiques.<br>Mortalité de l’ordre de 10 % dans les formes non menstruelles, &lt; 5 % en France pour les formes menstruelles.<br>Le choc survient le plus souvent au décours d’une infection suppurative et plus rarement d’une colonisation des voies aériennes supérieures. Il peut survenir en période menstruelle en lien avec l’utilisation de protections intravaginales (tampon, cup) par des femmes colonisées au niveau vaginal par des souches productrices de TSST-1 = choc toxique staphylococcique menstruel.<br>La recherche de la souche toxinogène est donc orientée par le contexte clinique du patient (foyer suppuratif, vagin, rhino-pharynx).<br>S. aureus, coloration de Gram (Source : CDC, image libre de droits)<br>- Scarlatine staphylococcique : fièvre et érythème scarlatiniforme typique en 48 heures suivi d’une fine desquamation, sans choc ni défaillance multi-viscérale.<br>- Syndromes staphylococciques cutanés bulleux, provoqués par les exfoliatines A et/ou B : épidermolyse staphylococcique. À distinguer de la nécrolyse épidermique d’origine toxique ou allergique : le décollement cutané provoqué par les exfoliatines crée un plan de clivage intra-épidermique tandis que le plan de clivage d’origine toxique et allergique se fait entre derme et épiderme (couche basale).<br>• Syndrome d’exfoliation généralisée : syndrome de la peau ébouillantée chez les jeunes enfants = Staphylococcal Scalded Skin Syndrome (SSSS) = syndrome de Ritter chez les nouveau-nés. Provoqué par la diffusion d’exfoliatines à partir d’un foyer de colonisation ou d’infection (foyer initial ORL, conjonctival ou cutané). Touche majoritairement le très jeune enfant mais peut aussi survenir chez l’adulte immunodéprimé. Rash scarlatiniforme douloureux prédominant sur le visage, les plis, les régions péri-orificielles suivi en quelques heures d’un décollement spontané ou provoqué (signe de Nikolski). Le contenu des bulles est clair et stérile en l’absence de surinfection. Évolution bénigne sous traitement antibiotique.<br>• Impétigo bulleux : induit par des souches productrices d’exfoliatines au sein même des lésions cutanées. Bulles à contenu trouble, contenant le staphylocoque et la toxine. Les bulles évoluent vers l’ouverture, la formation d’ulcérations puis de croûtes.<br>- Intoxications alimentaires : ingestion d’entérotoxines thermostables préformées dans les aliments contaminés par S. aureus producteur d’entérotoxines. Ces aliments sont typiquement des laitages, pâtisseries, crèmes glacées contaminés par un S. aureus producteur d’entérotoxines et non conservés au froid. Incubation courte (1 à 6 heures après ingestion), nausées, vomissements, crampes abdominales, diarrhées et absence de fièvre. Évolution le plus souvent spontanément favorable sans traitement.<br>● Infections suppurative/toxiniques<br>- Pneumonie nécrosante : associée dans la moitié des cas à des souches productrices d’une cytotoxine, la leucocidine de Panton Valentine (LPV ou PVL pour Panton Valentine leukocidin) dont la prévalence est par ailleurs &lt; 5 % dans les souches tout venant. Touche principalement les enfants et les jeunes adultes, sans antécédent particulier. Pneumonie communautaire sévère rapidement progressive avec détresse respiratoire, atteinte pleurale, leucopénie et hémoptysies. Mortalité élevée malgré antibiothérapie (en France 47 % des cas associés à une souche PVL+, 27 % des cas associés à une souche PVL-).<br>- Staphylococcie pleuro-pulmonaire du nourrisson : associée dans 95 % des cas à des souches productrices de PVL. Touche le nourrisson de 0 à 3 ans, tableau de pneumopathie bulleuse avec épanchement pleural et/ou pneumothorax dans &gt; 50 % des cas, absence de leucopénie et d\'hémoptysie, furonculose familiale fréquente, mortalité en France 16 %.</p>', 
      bacteriologicalDiagnostic: '<p>• Diagnostic direct par culture des prélèvements<br>- Prélèvement de pus<br>- Hémocultures en présence de fièvre<br>- Prélèvements articulaires et osseux (ponction)<br>- etc.<br>- TIAC : recherche de la toxine dans les vomissures des patients et dans les aliments à risque si possible. La coproculture n\'est pas indiquée car la présence de S. aureus dans les selles n’a pas de signification clinique.<br>• Examen direct, isolement et identification bactérienne<br>- Cocci à Gram positif en amas, coagulase positive<br>- Croissance sur milieux usuels en 24h, identification par spectrométrie de masse et caractères bactériologiques</p>',
      treatment: '<p>S. aureus est sensible à divers antibiotiques mais aptitude remarquable à acquérir de multiples caractères de résistance ; choix de l’antibiothérapie guidé par l’antibiogramme et le contexte clinique<br>- β-lactamines : 80 % souches produisent une pénicillinase -> utilisation d’amoxicilline + acide clavulanique, oxacilline (pénicilline M) et céfazoline (C1G) possibles. Résistance croisée à l’ensemble des β-lactamines par production d’une protéine liant la pénicilline (PLP) modifiée, la PLP2A (10-20 % des souches) : souches désignées S. aureus résistants à la méticilline (SARM), classées parmi les bactéries multi-résistantes (BMR)<br>- Aminosides : gentamicine (association synergique avec les β-lactamines) → infections sévères et sepsis<br>- Macrolides et apparentés : clindamycine, pristinamycine<br>- Glycopeptides : vancomycine = alternative aux β-lactamines pour les infections sévères à SARM<br>- Lipoglycopeptide : Daptomycine = autre alternative aux β-lactamines pour les infections sévères à SARM. Plus efficace et moindre toxicité (rénale) que la vancomycine<br>- Antibiotiques à activité anti-toxinique : clindamycine, linézolide<br>- Autres molécules possibles : fluoroquinolones (lévofloxacine), fosfomycine, acide fusidique, cotrimoxazole etc.</p>',
    },
      'bacillus-cereus': {
      name: 'Bacillus cereus',
      icon: 'https://img.icons8.com/?size=100&id=ymkjvusZEovn&format=png&color=000000',
      type: 'Bactéries toxigènes sporulées',
      image: 'https://i.imgur.com/cyofu2h.png',
      identityCard: '<p><strong>Genre Bacillus :</strong><br>- Bacilles à Gram positif sporulés<br>- Aérobie - anaérobie facultatifs<br>- Le plus souvent mobiles<br><strong>Espèces d’intérêt médical :</strong><br>- Bacillus anthracis : agent de l’anthrax ou maladie du charbon, classé parmi les agents biologiques utilisables dans un contexte de bioterrorisme<br>- Bacillus cereus : agent de toxi-infections alimentaires collectives (TIAC)</p>',
      transmission: '<p>Bactéries saprophytes, ubiquistes à réservoir environnemental<br>Spore : forme de survie de la bactérie dans des conditions défavorables (dessiccation, températures extrêmes, etc.) → principale forme de transmission par voie cutanée, ingestion ou inhalation</p>',
      diseases: '<p>Charbon : maladie devenue historique depuis la mise en place de mesures de prévention parmi les animaux d’élevage<br>Cas sporadiques et cas associés au bioterrorisme<br>Infection à B. anthracis : Maladie à Déclaration Obligatoire<br>TIAC : Maladie à déclaration obligatoire</p>',
      prevention: '<p>Signalement auprès de l’ARS par l’intermédiaire d’une fiche spécifique sans attendre l’enquête ni la documentation</p>',
      pathogenicity: '<p>● B. anthracis : maladie du charbon<br>3 manifestations cliniques selon les voies de transmission<br>o Cutanée : plaies souillées → 20 % bactériémiques<br>o Digestive (ingestion) → vomissements + diarrhées sanglantes<br>o Aérienne (inhalation) → pneumopathie mortelle dans 95 % des cas<br>● B. cereus<br>o TIAC : signes cliniques incluant nausées et vomissement, douleurs abdominales et/ou diarrhée cholériforme, généralement sans fièvre<br>Manifestations dues à l’ingestion de toxines thermostables diffusées dans l’alimentation, le plus souvent plats préparés réchauffés et riz cuisiné<br>Incubation 1 à 15h<br>o Autres : infections opportunistes extra-digestives rares (principalement bactériémies liées au cathéter), le plus souvent contaminants d’hémocultures</p>',
      clinicalSigns: '', 
      bacteriologicalDiagnostic: '<p>Enquête microbiologique en cas de TIAC :<br>Prélèvements de la source présumée (obligation de conservation dans les collectivités d’un repas témoin des 3 jours précédents) pour analyse microbiologique et toxicologique<br>Prélèvements des produits pathologiques des patients atteints (selles, vomissements, sang…)<br>Les TIAC à B. cereus étant le plus souvent dues à l’ingestion de toxines, les bactéries sont rarement isolées des prélèvements de patients</p>',
      treatment: '<p>Traitement de la TIAC avant tout symptomatique<br>Avis spécialisé si nécessité d’antibiothérapie</p>',
    },
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
            <Link to="/microbiological-safety/services" className="back-button">Back to Bacteria Types</Link>
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
            <div className="back-button-container" style={{marginTop:"15px"}}>
            <div onClick={() => window.history.back()} className="back-button">Back to Bacteria Types</div>
            </div>

          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bacteria-details-section">
        <div className="container">
          <div className="details-grid">
          {/* Image Section */}
            {bacteria.image && (
              <div style={{textAlign:"center"}}>
                <img src={bacteria.image} alt={bacteria.name} />
                <figcaption dangerouslySetInnerHTML={{ __html: bacteria.imageCaption }} />
              </div>
            )}
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

