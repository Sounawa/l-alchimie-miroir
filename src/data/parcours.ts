export interface ParcoursStep {
  bookId: string;
  order: number;
  title: string;
  duration: string;
  objective: string;
}

export interface Parcours {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  targetAudience: string;
  steps: ParcoursStep[];
}

export const parcoursTherapeutiques: Parcours[] = [
  {
    id: 'parcours-guerison-emotionnelle',
    title: 'Parcours Guérison Émotionnelle',
    subtitle: 'Transformer la douleur en sagesse',
    description:
      'Ce parcours est conçu pour toute personne qui porte des blessures émotionnelles profondes et souhaite les transformer en sources de sagesse et de force intérieure. En cinq étapes progressives sur dix semaines, vous allez apprendre à accueillir vos émotions sans jugement, à comprendre le langage de votre douleur, à honorer vos processus de deuil, puis à cultiver la gratitude comme porte de sortie de la souffrance. Le parcours se termine par un travail sur le pardon, non pas comme obligation morale mais comme acte libérateur qui vous permet de reprendre votre vie en main. Chaque étape s\'appuie sur la contemplation coranique selon la méthode Fana-Tajalli-Munajat-Béance, en dialogue permanent avec les enseignements d\'Ibn al-Qayyim et d\'Al-Ghazali sur la guérison du coeur. Vous n\'avez pas besoin d\'être un spécialiste du Coran pour suivre ce parcours : chaque exercice est guidé et progressif, adapté aux débutants comme aux praticiens expérimentés.',
    icon: '💚',
    color: '#22c55e',
    duration: '10 semaines',
    targetAudience: 'Adultes traversant une période de souffrance émotionnelle, en deuil, ou en reconstruction après une épreuve difficile',
    steps: [
      {
        bookId: 'tadabur-emotion',
        order: 1,
        title: 'Accueil des émotions',
        duration: '2 semaines',
        objective:
          'Durant ces deux premières semaines, vous allez apprendre à identifier et à nommer vos émotions sans les juger. La méthode Fana vous aidera à créer un espace intérieur où chaque émotion, même la plus douloureuse, peut être accueillie comme un visiteur temporaire. Vous découvrirez que vos émotions ne sont pas vos ennemies mais des messagères qui vous parlent de vos besoins profonds. En pratiquant le Tajalli sur les versets coraniques relatifs aux états du coeur, vous comprendrez que la sensibilité émotionnelle est une qualité valorisée par la tradition prophétique.',
      },
      {
        bookId: 'tadabur-douleur',
        order: 2,
        title: 'Travail sur la douleur',
        duration: '2 semaines',
        objective:
          'La douleur émotionnelle et physique sera explorée avec douceur et profondeur. Vous apprendrez à distinguer la douleur qui construit de celle qui détruit, en vous appuyant sur la sagesse coranique qui montre comment les épreuves peuvent devenir des moyens de purification de l\'âme. Les exercices de Fana vous permettront de ne pas fuir la douleur mais de la traverser en conscience, tandis que le Munajat vous offrira un espace de dialogue intime avec votre Créateur pour lui confier ce qui pèse sur votre coeur.',
      },
      {
        bookId: 'tadabur-deuil',
        order: 3,
        title: 'Accompagnement du deuil',
        duration: '2 semaines',
        objective:
          'Le deuil est une expérience universelle mais profondément solitaire. Cette étape vous accompagnera dans l\'honoration de votre processus de deuil, qu\'il s\'agisse d\'une perte d\'un être cher, d\'une relation, d\'un projet ou d\'une partie de vous-même. Les versets coraniques sur la patience et la promesse divine de réunion vous serviront d\'ancrage. Vous découvrirez que pleurer n\'est pas un signe de faiblesse spirituelle, et que le Coran lui-même accueille la tristesse humaine avec une tendresse remarquable.',
      },
      {
        bookId: 'tadabur-gratitude',
        order: 4,
        title: 'Cultiver la gratitude',
        duration: '2 semaines',
        objective:
          'Après avoir traversé les étapes d\'accueil de la douleur et du deuil, la gratitude apparaît non pas comme un déni de la souffrance mais comme sa transmutation. Vous apprendrez la pratique de la choura (reconnaissance des bienfaits) selon la méthode coranique, en découvrant comment la gratitude transforme littéralement la chimie du coeur. Les exercices de Fana sur les versets de remerciement vous aideront à voir les bénédictions cachées dans vos épreuves et à développer une posture de reconnaissance qui deviendra un rempart contre le désespoir.',
      },
      {
        bookId: 'tadabur-pardon',
        order: 5,
        title: 'Libération par le pardon',
        duration: '2 semaines',
        objective:
          'La dernière étape de ce parcours vous guide vers le pardon, compris ici comme un acte de libération intérieure et non comme une obligation extérieure. Vous apprendrez à distinguer le pardon divin du pardon humain, et à pratiquer le pardon envers vous-même, envers les autres et envers les circonstances de votre vie. Les versets coraniques sur la miséricorde divine et le pardon seront vos compagnons de contemplation. Le Munajat de cette étape est particulièrement puissant car il vous invite à demander à Allah de vous aider à pardonner ce qui vous semble encore impardonnable.',
      },
    ],
  },
  {
    id: 'parcours-relations-famille',
    title: 'Parcours Relations & Famille',
    subtitle: 'Guérir les liens qui nous unissent',
    description:
      'Les relations familiales sont à la fois notre plus grande source de joie et notre terrain de blessures le plus profond. Ce parcours de dix semaines propose une guérison progressive de vos liens relationnels, en commençant par la qualité de votre relation à vous-même et aux autres, puis en abordant les dynamiques de couple, les blessures d\'attachement de l\'enfance, la capacité de pardonner les offenses familiales, et enfin la relation avec les adolescents. Chaque étape combine la sagesse de la contemplation coranique avec les outils de la psychologie relationnelle pour vous offrir une approche holistique de la guérison des liens. Le Coran aborde les relations humaines avec une profondeur remarquable, et la méthode Fana-Tajalli-Munajat-Béance vous permettra d\'explorer ces enseignements de manière vivante et transformatrice. Ce parcours est particulièrement recommandé pour les personnes en difficulté relationnelle, les parents en souffrance face à leurs enfants, ou toute personne souhaitant améliorer la qualité de ses liens familiaux.',
    icon: '🤝',
    color: '#ec4899',
    duration: '10 semaines',
    targetAudience: 'Parents, couples, et toute personne souhaitant guérir et renforcer ses liens familiaux et relationnels',
    steps: [
      {
        bookId: 'tadabur-relations',
        order: 1,
        title: 'Qualité relationnelle',
        duration: '2 semaines',
        objective:
          'Cette première étape pose les fondations de la guérison relationnelle en vous invitant à examiner la qualité de vos liens avec votre entourage. Vous apprendrez à identifier vos patterns de communication, vos mécanismes de défense relationnels et vos zones de vulnérabilité. Les versets coraniques sur la bonté envers les parents, le respect du voisin et la fraternité serviront de miroir pour contempler vos propres comportements relationnels. Les exercices de Tajalli révéleront les blessures invisibles qui influencent vos interactions quotidiennes.',
      },
      {
        bookId: 'tadabur-couples',
        order: 2,
        title: 'Harmonie conjugale',
        duration: '2 semaines',
        objective:
          'Que vous soyez en couple actuellement ou que vous portiez les séquelles d\'une relation passée, cette étape vous aidera à comprendre les dynamiques de l\'amour et de la tendresse à la lumière de la sagesse coranique. Le verset « Et parmi Ses signes, Il a créé pour vous des épouses parmi vous » sera exploré en profondeur à travers les 4 phases de contemplation. Vous découvrirez comment la mawadda (tendresse affectueuse) et la rahma (miséricorde) mentionnées dans le Coran peuvent devenir les piliers d\'une relation épanouissante.',
      },
      {
        bookId: 'tadabur-attachement',
        order: 3,
        title: 'Guérison des blessures d\'attachement',
        duration: '2 semaines',
        objective:
          'Nos relations présentes sont profondément marquées par nos premiers liens d\'attachement dans l\'enfance. Cette étape vous guidera dans l\'exploration de ces blessures originelles à la lumière des enseignements coraniques sur la bonté envers les parents et la miséricorde divine qui compense toute carence humaine. Vous apprendrez que la sécurité que vous n\'avez peut-être pas reçue de vos parents peut être trouvée dans la relation avec votre Créateur. Les exercices de Munajat seront particulièrement centrés sur la réconciliation avec votre histoire familiale.',
      },
      {
        bookId: 'tadabur-pardon',
        order: 4,
        title: 'Pardon relationnel',
        duration: '2 semaines',
        objective:
          'Le pardon dans le cadre familial est souvent le plus difficile à accorder car les blessures sont les plus profondes. Cette étape aborde le pardon sous un angle spécifiquement relationnel, en travaillant sur les offenses parentales, les conflits entre frères et soeurs, et les blessures transgénérationnelles. Les versets coraniques sur le pardon mutuel et la clémence seront médités avec la méthode Tajalli pour révéler ce qui bloque votre capacité à pardonner. Vous découvrirez que le pardon n\'efface pas le passé mais libère votre avenir.',
      },
      {
        bookId: 'tadabur-ados',
        order: 5,
        title: 'Relation avec les jeunes',
        duration: '2 semaines',
        objective:
          'La relation avec les adolescents est un défi majeur pour de nombreux parents et éducateurs. Cette dernière étape vous donnera les outils pour accompagner les jeunes dans leur quête d\'identité tout en maintenant une connexion émotionnelle authentique. Les modèles coraniques de Youssouf, de Luqman et de Maryam serviront de cadres inspirants pour comprendre les enjeux de cette période de la vie. Vous apprendrez des techniques de communication bienveillante enrichies par la sagesse prophétique sur l\'éducation et la patience.',
      },
    ],
  },
  {
    id: 'parcours-tranquillite-mentale',
    title: 'Parcours Tranquillité Mentale',
    subtitle: 'Apaiser le mental, retrouver la clarté',
    description:
      'Ce parcours s\'adresse à toutes les personnes dont le mental est agité, envahi par les pensées anxieuses, les ruminations obsessionnelles, ou les difficultés de concentration. En dix semaines et cinq étapes, vous apprendrez à calmer les tempêtes de votre esprit en utilisant la contemplation coranique comme ancre et comme remède. La méthode Fana-Tajalli-Munajat-Béance sera appliquée spécifiquement aux troubles de l\'anxiété, aux pensées obsessionnelles, aux troubles du sommeil, au TDAH et au waswas (obsessions religieuses). Chaque étape propose des exercices pratiques et progressifs pour retrouver la tranquillité intérieure que le Coran appelle « sakina ». Ce parcours ne remplace pas un suivi médical ou psychiatrique, mais il constitue un complément spirituel puissant pour ceux qui souhaitent intégrer la dimension coranique dans leur parcours de guérison mentale. Les enseignements d\'Ibn al-Qayyim sur la médecine de l\'âme seront vos guides tout au long de ce cheminement.',
    icon: '🧘',
    color: '#14b8a6',
    duration: '10 semaines',
    targetAudience: 'Personnes souffrant d\'anxiété, de troubles obsessionnels, de problèmes de sommeil, de TDAH ou de waswas',
    steps: [
      {
        bookId: 'tadabur-anxiete',
        order: 1,
        title: 'Apaiser l\'anxiété',
        duration: '2 semaines',
        objective:
          'L\'anxiété est une des souffrances les plus répandues de notre époque. Cette étape vous donnera les outils pour la comprendre et la transformer en utilisant la contemplation coranique. Vous découvrirez comment les versets sur la confiance en Allah et la remise entre Ses mains peuvent devenir des ancres concrètes dans les moments de crise anxieuse. Les exercices de Fana seront spécifiquement adaptés aux symptômes anxieux, avec des techniques de respiration couplées à la récitation intérieure de versets apaisants. Vous apprendrez aussi à distinguer l\'anxiété normale de l\'anxiété pathologique.',
      },
      {
        bookId: 'tadabur-obsessions',
        order: 2,
        title: 'Libérer les pensées envahissantes',
        duration: '2 semaines',
        objective:
          'Les pensées obsessionnelles, qu\'elles soient d\'ordre religieux ou laïc, créent une prison mentale d\'où il semble impossible de sortir. Cette étape vous guidera dans la compréhension islamique des waswasa (les chuchotements) et des mécanismes de l\'obsession. Vous apprendrez à reconnaître l\'origine de vos pensées envahissantes et à utiliser la technique du Fana pour créer un espace de liberté entre vous et vos obsessions. Les versets sur la protection divine contre les pensées intrusives seront vos armes spirituelles pour défaire les boucles mentales.',
      },
      {
        bookId: 'tadabur-sommeil',
        order: 3,
        title: 'Retrouver un sommeil réparateur',
        duration: '2 semaines',
        objective:
          'Le sommeil est un don divin que l\'agitation mentale peut gravement perturber. Cette étape aborde les troubles du sommeil à travers le prisme coranique de la nuit comme moment de repos et de communion spirituelle. Vous apprendrez les invocations prophétiques pour le coucher, les pratiques de détente issues de la méthode Fana pour préparer le corps et l\'esprit au sommeil, et la méditation sur les versets qui décrivent la nuit comme une période de paix. L\'objectif est de retrouver un sommeil naturel et réparateur sans dépendance aux substances.',
      },
      {
        bookId: 'tadabur-tdah',
        order: 4,
        title: 'Concentration et TDAH',
        duration: '2 semaines',
        objective:
          'La difficulté à se concentrer n\'est pas simplement un défaut de volonté. Cette étape explore le TDAH et les troubles de l\'attention à travers les enseignements de la contemplation coranique. Le Fana, en tant que pratique d\'ancrage de l\'attention sur un point unique, est un exercice remarquablement adapté pour entraîner la concentration. Vous découvrirez comment les compagnons du Prophète pratiquaient la présence attentive et comment ces techniques ancestrales trouvent des échos étonnants dans les découvertes modernes en neurosciences.',
      },
      {
        bookId: 'tadabur-waswas',
        order: 5,
        title: 'Paix face aux doutes spirituels',
        duration: '2 semaines',
        objective:
          'Le waswas, ces doutes spirituels et ces pensées intrusives d\'ordre religieux, touche de nombreux croyants et peut devenir une source de souffrance intense. Cette dernière étape du parcours vous donnera les clés pour comprendre et dépasser ces obsessions. En vous appuyant sur la jurisprudence islamique des pensées intrusives et sur les enseignements d\'Ibn al-Qayyim et d\'Ibn Taymiyya sur ce sujet spécifique, vous apprendrez à ne pas vous identifier à vos doutes et à retrouver la certitude spirituelle. Les exercices de Munajat seront centrés sur la demande de protection et de stabilité du coeur.',
      },
    ],
  },
  {
    id: 'parcours-reconstruction',
    title: 'Parcours Reconstruction',
    subtitle: 'Rebâtir après la tempête',
    description:
      'Certaines épreuves de la vie sont si profondes qu\'elles exigent une reconstruction complète de notre identité, de nos croyances et de notre rapport au monde. Ce parcours de douze semaines est conçu pour les personnes qui ont traversé des traumatismes, des burnouts ou des crises existentielles majeures et qui souhaitent rebâtir leur vie sur des fondations plus solides. En six étapes progressives, vous aborderez la guérison des traumatismes, le développement de la résilience, la redécouverte de votre identité profonde, la récupération après un burnout, la reconstruction de la confiance en soi et en la vie, et enfin l\'intégration de la solitude comme espace de croissance. Ce parcours est le plus intense des cinq proposés et nécessite une stabilité psychologique de base. Il ne remplace pas un suivi thérapeutique professionnel mais vient le compléter par une dimension spirituelle forte. Chaque étape s\'appuie sur des versets coraniques spécifiquement choisis pour accompagner les processus de reconstruction post-traumatique.',
    icon: '🏗️',
    color: '#f59e0b',
    duration: '12 semaines',
    targetAudience: 'Personnes en reconstruction après un traumatisme, un burnout, ou une crise existentielle majeure',
    steps: [
      {
        bookId: 'tadabur-traumatismes',
        order: 1,
        title: 'Guérison des traumatismes',
        duration: '2 semaines',
        objective:
          'Les traumatismes laissent des empreintes profondes dans le corps, le coeur et l\'esprit. Cette première étape aborde la guérison post-traumatique avec la douceur et la profondeur que permet la contemplation coranique. Vous apprendrez à créer un espace de sécurité intérieure où les souvenirs douloureux peuvent être accueillis sans être submergés. Les versets coraniques sur la guérison divine, la protection et la promesse de facilité après la difficulté seront vos compagnons. Les exercices de Fana seront adaptés pour les personnes ayant vécu des traumatismes, avec une attention particulière au rythme et à la sécurité émotionnelle.',
      },
      {
        bookId: 'tadabur-resilience',
        order: 2,
        title: 'Développer la résilience',
        duration: '2 semaines',
        objective:
          'La résilience n\'est pas l\'absence de souffrance mais la capacité à se relever après chaque chute. Cette étape vous montrera comment la tradition coranique est jalonnée d\'histoires de résilience remarquables, de Youssouf vendu par ses frères à Ayyoub éprouvé dans sa chair. En pratiquant le Tajalli sur ces récits, vous découvrirez que la résilience est une qualité qui se cultive et qui s\'appuie sur une confiance profonde en la sagesse divine. Vous développerez des outils concrets pour rebondir face aux difficultés de la vie quotidienne.',
      },
      {
        bookId: 'tadabur-identite',
        order: 3,
        title: 'Redécouverte de l\'identité',
        duration: '2 semaines',
        objective:
          'Après une épreuve majeure, la question « Qui suis-je ? » devient souvent la plus urgente. Cette étape vous accompagne dans la redécouverte de votre identité profonde, au-delà des rôles, des étiquettes et des masques que la souffrance a pu vous forcer à porter. Les versets coraniques sur la création de l\'être humain, sa noblesse originelle et sa mission sur terre serviront de miroir pour contempler qui vous êtes vraiment. Vous apprendrez à vous reconnecter avec vos valeurs essentielles et à reconstruire une identité qui intègre la totalité de votre expérience, y compris la souffrance.',
      },
      {
        bookId: 'tadabur-burnout',
        order: 4,
        title: 'Récupération après le burnout',
        duration: '2 semaines',
        objective:
          'Le burnout est une épuisement de l\'âme qui touche aussi bien les professionnels que les parents, les étudiants et les aidants. Cette étape aborde la récupération après l\'épuisement en vous enseignant les principes coraniques de modération, de gestion de l\'énergie spirituelle et de renouvellement intérieur. Vous découvrirez que le Prophète Mouhammad lui-même recommandait des pauses régulières pour le coeur et le corps. Les exercices de Fana seront centrés sur la régénération de votre énergie vitale à travers la connexion avec le Divin.',
      },
      {
        bookId: 'tadabur-confiance',
        order: 5,
        title: 'Reconstruire la confiance',
        duration: '2 semaines',
        objective:
          'Les épreuves de la vie érodent souvent notre confiance en nous-mêmes, en les autres et même en la vie elle-même. Cette étape vous guidera dans la reconstruction de la confiance enracinée dans la tawakkul, la confiance en Allah qui est le fondement de toute confiance humaine. Vous apprendrez à distinguer la confiance aveugle de la confiance éclairée, et à développer une assurance intérieure qui ne dépend plus des circonstances extérieures. Les versets sur la promesse divine de facilité et de soutien seront vos piliers pour rebâtir cette confiance pas à pas.',
      },
      {
        bookId: 'tadabur-solitude',
        order: 6,
        title: 'Solitude comme espace de croissance',
        duration: '2 semaines',
        objective:
          'La solitude est souvent vécue comme un vide douloureux, surtout après une épreuve qui a éloigné de ses proches ou de ses repères. Cette dernière étape transforme votre rapport à la solitude en vous montrant comment elle peut devenir un espace sacré de croissance et de connexion avec le Divin. Les versets coraniques sur la présence divine, même dans l\'isolement le plus total, vous révéleront que vous n\'avez jamais été seul. Les exercices de Fana et de Munajat vous apprendront à transformer vos moments de solitude en moments de plénitude et de rencontre intime avec votre Créateur.',
      },
    ],
  },
  {
    id: 'parcours-jeunesse-croissance',
    title: 'Parcours Jeunesse & Croissance',
    subtitle: 'Accompagner les jeunes vers la sagesse',
    description:
      'Ce parcours est spécialement conçu pour les jeunes et les adolescents, ou pour les parents et éducateurs qui souhaitent accompagner les jeunes dans leur développement personnel et spirituel. En quatre étapes sur huit semaines, il aborde les défis spécifiques de cette période de la vie avec un langage accessible et des exercices adaptés. La crise identitaire adolescente, la construction de la confiance en soi, la recherche de sens et la gestion de la colère sont les thèmes centraux de ce parcours. Chaque étape s\'appuie sur des modèles coraniques inspirants comme Youssouf, Luqman et Maryam, qui parlent directement aux jeunes et à leur quête de sens. Les exercices de contemplation sont simplifiés et raccourcis pour correspondre à la capacité d\'attention des jeunes, tout en conservant la profondeur de la méthode Fana-Tajalli-Munajat-Béance. Ce parcours peut être suivi seul par un jeune motivé, ou accompagné par un parent ou un éducateur formé à la méthode du Tadaburr.',
    icon: '🌱',
    color: '#a3e635',
    duration: '8 semaines',
    targetAudience: 'Jeunes de 13 à 25 ans et parents ou éducateurs souhaitant les accompagner dans leur croissance personnelle et spirituelle',
    steps: [
      {
        bookId: 'tadabur-ados',
        order: 1,
        title: 'Spiritualité adolescente',
        duration: '2 semaines',
        objective:
          'L\'adolescence est une période de bouleversement total où le jeune cherche sa place dans le monde et sa relation avec le Divin. Cette étape utilise les modèles coraniques de Youssouf, de Luqman et de Maryam pour montrer aux jeunes que leurs questions, leurs doutes et leur soif d\'authenticité sont non seulement normaux mais nécessaires à leur croissance. Les exercices de Fana sont adaptés en durée et en complexité pour les jeunes, avec un langage direct et des métaphores issues de leur quotidien. Le journaling sera un outil central pour aider le jeune à verbaliser son monde intérieur.',
      },
      {
        bookId: 'tadabur-confiance',
        order: 2,
        title: 'Construire la confiance en soi',
        duration: '2 semaines',
        objective:
          'Le manque de confiance en soi est l\'un des défis les plus fréquents chez les jeunes. Cette étape aide le jeune à développer une confiance enracinée dans sa valeur intrinsèque en tant que créature divine, et non dans l\'approbation sociale ou les performances extérieures. Les versets coraniques sur la dignité de l\'être humain et le soutien divin inconditionnel seront explorés avec des exercices pratiques et accessibles. Le jeune apprendra à reconnaître ses qualités, à accepter ses imperfections et à se fixer des objectifs réalistes en s\'appuyant sur la tawakkul.',
      },
      {
        bookId: 'tadabur-identite',
        order: 3,
        title: 'Quête d\'identité',
        duration: '2 semaines',
        objective:
          'Qui suis-je ? D\'où viens-je ? Où vais-je ? Ces questions existentielles sont au coeur de l\'adolescence. Cette étape accompagne le jeune dans sa quête identitaire en utilisant les récits coraniques comme cadres de référence. L\'histoire de Moussa qui découvre sa mission, celle de Youssouf qui trouve sa place malgré les épreuves, et les enseignements de Luqman à son fils seront des repères puissants pour le jeune en construction. Les exercices de Tajalli aideront le jeune à contempler sa propre histoire de vie à la lumière de ces modèles inspirants.',
      },
      {
        bookId: 'tadabur-colere',
        order: 4,
        title: 'Transformer la colère',
        duration: '2 semaines',
        objective:
          'La colère est une émotion légitime mais souvent mal gérée, particulièrement chez les jeunes qui manquent d\'outils pour la canaliser. Cette dernière étape enseigne la transformation de la colère en énergie constructive, en s\'appuyant sur les enseignements coraniques et prophétiques sur la maîtrise de la colère. Le jeune apprendra à identifier les déclencheurs de sa colère, à pratiquer les techniques de Fana pour créer un espace de pause entre le stimulus et la réaction, et à utiliser le Munajat pour transformer sa frustration en prière. Des outils concrets de communication non violente enrichiront la pratique spirituelle.',
      },
    ],
  },
];
