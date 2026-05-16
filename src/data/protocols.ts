export interface TherapyProtocol {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  category: 'trauma' | 'relationnel';
  icon: string;
  color: string;
  description: string;
  phases: {
    name: string;
    duration: string;
    description: string;
    verses: { arabic: string; french: string; reference: string }[];
  }[];
  contraindications: string[];
  keyInsights: string[];
}

export const therapyProtocols: TherapyProtocol[] = [
  {
    id: 'trauma-ptsd',
    letter: 'A',
    title: 'Trauma / PTSD',
    subtitle: 'Le Refuge Sécurisant',
    category: 'trauma',
    icon: '🛡️',
    color: '#c9a227',
    description:
      'Protocole pour accompagner les personnes souffrant de traumatismes et de trouble de stress post-traumatique à travers les 4 phases de la méditation coranique.',
    phases: [
      {
        name: 'Fana — Le Cocon',
        duration: '10-15 min',
        description:
          'Créer un espace intérieur de sécurité absolue. Le patient apprend à se sentir enveloppé par la miséricorde divine, comme dans un cocon protecteur.',
        verses: [
          {
            arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
            french: 'Il est avec vous où que vous soyez.',
            reference: '57:4',
          },
          {
            arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            french: "N'est-ce point par le rappel d'Allah que les cœurs se tranquillisent ?",
            reference: '13:28',
          },
        ],
      },
      {
        name: 'Tajalli — Le Refuge',
        duration: '10-15 min',
        description:
          'Explorer le verset comme un refuge intérieur. Le patient apprend à y retourner chaque fois que les flashbacks ou l\'anxiété surgissent.',
        verses: [
          {
            arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
            french: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même.',
            reference: '2:255',
          },
        ],
      },
      {
        name: 'Munajat — La Supplication du Souffrant',
        duration: '10 min',
        description:
          'Permettre au patient de verbaliser sa douleur dans un cadre sacré. La supplication du prophète Ayyub (Job) comme modèle.',
        verses: [
          {
            arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
            french: 'Le mal m\'a touché et Tu es le plus Miséricordieux des miséricordieux.',
            reference: '21:83',
          },
        ],
      },
      {
        name: 'Béance — La Guérison Silencieuse',
        duration: '5-10 min',
        description:
          'Le silence après la tempête. Un espace où la guérison opère sans intervention, par la grâce divine seule.',
        verses: [
          {
            arabic: 'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ',
            french: 'Et si je suis malade, c\'est Lui qui me guérit.',
            reference: '26:80',
          },
        ],
      },
    ],
    contraindications: [
      'Traumatisme récent (moins de 3 mois) sans stabilisation médicale préalable',
      'Psychose active ou épisode psychotique',
      'Idées suicidaires actuelles — orienter vers urgence psychiatrique',
      'Dissociation sévère non gérée',
    ],
    keyInsights: [
      'La sécurité est le préalable à toute guérison traumatique',
      'Le Coran offre un cadre contenant et apaisant pour l\'expression traumatique',
      'Les versets choisis créent des « ancres spirituelles » accessibles en situation de crise',
    ],
  },
  {
    id: 'anxiete-panique',
    letter: 'B',
    title: 'Anxiété / Panique',
    subtitle: 'La Présence Apaisante',
    category: 'trauma',
    icon: '🌊',
    color: '#0ea5e9',
    description:
      'Protocole pour la gestion de l\'anxiété généralisée et des attaques de panique par l\'ancrage dans la présence divine.',
    phases: [
      {
        name: 'Fana — L\'Ancrage',
        duration: '5-10 min',
        description: 'Exercices de respiration ancrée dans le dhikr. Chaque expiration est un lâcher-prise.',
        verses: [
          { arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', french: 'En vérité, avec la difficulté vient la facilité.', reference: '94:5' },
        ],
      },
      {
        name: 'Tajalli — La Confiance',
        duration: '10 min',
        description: 'Rumination sur les versets de confiance en Allah (tawakkul).',
        verses: [
          { arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', french: 'Et quiconque place sa confiance en Allah, Il lui suffit.', reference: '65:3' },
        ],
      },
      {
        name: 'Munajat — La Remise',
        duration: '5-10 min',
        description: 'Exercice de remise symbolique des soucis à Allah.',
        verses: [
          { arabic: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ', french: 'Allah me suffit ! Pas de divinité à part Lui. C\'est en Lui que je place ma confiance.', reference: '9:129' },
        ],
      },
      {
        name: 'Béance — Le Repos',
        duration: '5 min',
        description: 'Silence paisible, accueil de la tranquillité.',
        verses: [
          { arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', french: 'Ne t\'avons-Nous pas ouvert la poitrine ?', reference: '94:1' },
        ],
      },
    ],
    contraindications: ['Panic disorder sévère sans traitement médicamenteux stabilisé', 'Agoraphobie non gérée'],
    keyInsights: [
      'L\'anxiété est un excès de futur — le Coran ramène au présent',
      'Le tawakkul est un antidote naturel à l\'anticipation anxieuse',
      'La respiration rythmée couplée au dhikr crée un effet apaisant mesurable',
    ],
  },
  {
    id: 'depression',
    letter: 'C',
    title: 'Dépression',
    subtitle: "L'Aube Après la Nuit",
    category: 'trauma',
    icon: '🌅',
    color: '#f59e0b',
    description: 'Protocole d\'accompagnement de la dépression par la méditation coranique axée sur l\'espoir et la reconnexion au sens.',
    phases: [
      {
        name: 'Fana — La Nuit Intérieure',
        duration: '10 min',
        description: 'Accueillir la nuit de l\'âme sans la combattre.',
        verses: [
          { arabic: 'وَجَعَلْنَا اللَّيْلَ لِبَاسًا', french: 'Et Nous avons fait de la nuit un vêtement.', reference: '78:10' },
        ],
      },
      {
        name: 'Tajalli — La Promesse de l\'Aube',
        duration: '10 min',
        description: 'Contempler les versets qui promettent la lumière après l\'obscurité.',
        verses: [
          { arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', french: 'Certes, avec la difficulté vient la facilité.', reference: '94:6' },
        ],
      },
      {
        name: 'Munajat — L\'Appel du Cœur',
        duration: '10 min',
        description: 'La supplication de Yunus (Jonas) dans le ventre du poisson comme modèle.',
        verses: [
          { arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', french: 'Pas de divinité à part Toi ! Gloire à Toi ! J\'ai été du nombre des injustes.', reference: '21:87' },
        ],
      },
      {
        name: 'Béance — La Pointe de l\'Aube',
        duration: '5-10 min',
        description: 'L\'espace où l\'aube commence à poindre, même imperceptiblement.',
        verses: [
          { arabic: 'وَالشَّمْسِ وَضُحَاهَا', french: 'Par le soleil et sa clarté !', reference: '91:1' },
        ],
      },
    ],
    contraindications: ['Dépression sévère avec risque suicidaire — priorité à la prise en charge médicale', 'Épisode mélancolique'],
    keyInsights: ['La dépression dans la tradition est vue comme une « nuit de l\'âme » avec une fin promise', 'L\'espoir coranique ne nie pas la souffrance mais lui donne un horizon'],
  },
  {
    id: 'colere',
    letter: 'D',
    title: 'Colère',
    subtitle: 'Le Miroir Relationnel',
    category: 'trauma',
    icon: '🔥',
    color: '#ef4444',
    description: 'Protocole pour la gestion et la compréhension de la colère à travers le miroir coranique.',
    phases: [
      {
        name: 'Fana — La Tempête',
        duration: '5-10 min',
        description: 'Accueillir la colère sans jugement, la laisser circuler.',
        verses: [{ arabic: 'وَالَّذِينَ كَظَمُوا الْغَيْظَ', french: 'Et ceux qui répriment leur colère.', reference: '3:134' }],
      },
      {
        name: 'Tajalli — Le Miroir',
        duration: '10 min',
        description: 'La colère comme révélateur : que nous dit-elle sur nos blessures ?',
        verses: [{ arabic: 'وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ', french: 'Et si tu étais rude au cœur dur, ils se seraient dispersés.', reference: '3:159' }],
      },
      {
        name: 'Munajat — La Demande de Douceur',
        duration: '10 min',
        description: 'Supplication pour que le cœur soit remplacé par la douceur.',
        verses: [{ arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي', french: 'Seigneur, ouvre-moi la poitrine.', reference: '20:25' }],
      },
      {
        name: 'Béance — L\'Après-Colère',
        duration: '5 min',
        description: 'Le silence après la tempête.',
        verses: [{ arabic: 'وَأَصْلِحْ لِي أَمْرِي', french: 'Et arrange pour moi mes affaires.', reference: '26:83' }],
      },
    ],
    contraindications: ['Colère explosive avec risque de violence physique', 'Trouble de la personnalité border-line non stabilisé'],
    keyInsights: ['La colère est souvent le masque d\'une blessure plus profonde', 'Le Coran enseigne que réprimer la colère est une qualité des « gens de paradis »'],
  },
  {
    id: 'estime-soi',
    letter: 'E',
    title: 'Estime de Soi & Honte',
    subtitle: 'Le Miroir Intérieur',
    category: 'trauma',
    icon: '🪞',
    color: '#8b5cf6',
    description: 'Protocole pour reconstruire l\'estime de soi et guérir la honte par la contemplation de la valeur que Dieu accorde à chaque âme.',
    phases: [
      {
        name: 'Fana — L\'Écoute du Soi',
        duration: '10 min',
        description: 'Écouter la voix intérieure sans la juger.',
        verses: [{ arabic: 'وَنَفَخْتُ فِيهِ مِن رُّوحِي', french: 'Et J\'y ai insufflé de Mon Esprit.', reference: '15:29' }],
      },
      {
        name: 'Tajalli — L\'Image Originelle',
        duration: '15 min',
        description: 'Contempler les versets qui parlent de la valeur originelle de l\'être humain.',
        verses: [{ arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ', french: 'Nous avons certes créé l\'homme dans la plus belle forme.', reference: '95:4' }],
      },
      {
        name: 'Munajat — La Reconnaissance',
        duration: '10 min',
        description: 'Supplication pour se reconnecter à sa valeur inhérente.',
        verses: [{ arabic: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ', french: 'Nous avons certes honoré les enfants d\'Adam.', reference: '17:70' }],
      },
      {
        name: 'Béance — L\'Intégration',
        duration: '5 min',
        description: 'Accueil de la valeur retrouvée.',
        verses: [{ arabic: 'فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ', french: 'Où que vous vous tourniez, là est la Face d\'Allah.', reference: '2:115' }],
      },
    ],
    contraindications: ['Honte toxique liée à des abus non traités'],
    keyInsights: ['L\'estime de soi dans l\'islam est ancrée dans la fitrah — la nature originelle pure', 'La honte est distinguée de la culpabilité : la honte dit « je suis mauvais », la culpabilité dit « j\'ai fait quelque chose de mal »'],
  },
  {
    id: 'deuil',
    letter: 'F',
    title: 'Deuil & Perte',
    subtitle: "La Mer de l'Âme",
    category: 'trauma',
    icon: '🌊',
    color: '#06b6d4',
    description: 'Protocole d\'accompagnement du deuil et de la perte à travers la sagesse coranique de la patience et de l\'espoir.',
    phases: [
      {
        name: 'Fana — L\'Océan',
        duration: '10 min',
        description: 'Plonger dans l\'océan de la douleur sans y résister.',
        verses: [{ arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', french: 'C\'est à Allah que nous appartenons et c\'est à Lui que nous retournons.', reference: '2:156' }],
      },
      {
        name: 'Tajalli — La Promesse',
        duration: '10 min',
        description: 'Les versets qui promettent la reunion et la miséricorde pour les défunts.',
        verses: [{ arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', french: 'Et ton Seigneur te donnera et tu seras satisfait.', reference: '93:5' }],
      },
      {
        name: 'Munajat — Le Cri du Cœur',
        duration: '10 min',
        description: 'La supplication de Yaqub (Jacob) comme modèle du deuil.',
        verses: [{ arabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ', french: 'Je ne me plains de mon affliction et de mon chagrin qu\'à Allah.', reference: '12:86' }],
      },
      {
        name: 'Béance — Le Port',
        duration: '5-10 min',
        description: 'Le silence après la tempête du deuil.',
        verses: [{ arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', french: 'Avec la difficulté vient la facilité.', reference: '94:5' }],
      },
    ],
    contraindications: ['Deuil compliqué avec symptômes psychotiques'],
    keyInsights: ['Le deuil dans l\'islam est honoré — pleurer n\'est pas un signe de faiblesse', 'Le prophète Yaqub a pleuré jusqu\'à perdre la vue — et il est un modèle de patience'],
  },
  {
    id: 'peur-phobies',
    letter: 'G',
    title: 'Peur & Phobies',
    subtitle: 'Le Spectre de la Peur',
    category: 'relationnel',
    icon: '👻',
    color: '#6366f1',
    description: 'Protocole pour accompagner les phobies et les peurs irrationnelles par la méditation coranique.',
    phases: [
      {
        name: 'Fana — La Confrontation Douce',
        duration: '10 min',
        description: 'Rencontrer la peur dans un espace sécurisé.',
        verses: [{ arabic: 'لَا يَحْزُنُهُمُ الْفَزَعُ الْأَكْبَرُ', french: 'La grande frayeur ne les affligera pas.', reference: '21:103' }],
      },
      {
        name: 'Tajalli — Le Réframing',
        duration: '10 min',
        description: 'Reformuler la peur à travers le cadre coranique.',
        verses: [{ arabic: 'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا', french: 'Allah est le Protecteur de ceux qui croient.', reference: '2:257' }],
      },
      {
        name: 'Munajat — La Demande de Courage',
        duration: '10 min',
        description: 'Supplication pour que le cœur soit fortifié.',
        verses: [{ arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', french: 'Seigneur, ouvre-moi ma poitrine et facilite-moi ma mission.', reference: '20:25-26' }],
      },
      {
        name: 'Béance — La Liberté',
        duration: '5 min',
        description: 'Le silence de la peur dissipée.',
        verses: [{ arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا', french: 'Et quiconque craint Allah, Il lui donnera une issue.', reference: '65:2' }],
      },
    ],
    contraindications: ['Phobie spécifique sévère nécessitant une thérapie d\'exposition'],
    keyInsights: ['La peur coranique est la crainte révérentielle (taqwa), non la peur pathologique'],
  },
  {
    id: 'solitude',
    letter: 'H',
    title: 'Solitude & Isolement',
    subtitle: 'Le Retour à Soi',
    category: 'relationnel',
    icon: '🏝️',
    color: '#14b8a6',
    description: 'Protocole pour transformer la solitude douloureuse en une solitude épanouissante par la présence divine.',
    phases: [
      {
        name: 'Fana — La Solitude accueillie',
        duration: '10 min',
        description: 'Transformer la sensation d\'isolement en espace de rencontre.',
        verses: [{ arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', french: 'Il est avec vous où que vous soyez.', reference: '57:4' }],
      },
      {
        name: 'Tajalli — La Présence',
        duration: '15 min',
        description: 'Découvrir qu\'on n\'est jamais seul avec Allah.',
        verses: [{ arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ', french: 'Et Nous sommes plus proches de lui que sa veine jugulaire.', reference: '50:16' }],
      },
      {
        name: 'Munajat — Le Dialogue avec le Compagnon',
        duration: '10 min',
        description: 'Parler à Allah comme au plus proche des amis.',
        verses: [{ arabic: 'أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ', french: 'Les alliés d\'Allah ne connaîtront ni crainte ni chagrin.', reference: '10:62' }],
      },
      {
        name: 'Béance — La Plénitude',
        duration: '10 min',
        description: 'Le silence qui n\'est plus vide mais rempli de Présence.',
        verses: [{ arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', french: 'C\'est par le rappel d\'Allah que les cœurs se tranquillisent.', reference: '13:28' }],
      },
    ],
    contraindications: ['Isolement social sévère avec idéations suicidaires'],
    keyInsights: ['La solitude en islam a deux faces : l\'isolement douloureux et la khalwa (retraite) bénéfique'],
  },
  {
    id: 'addictions',
    letter: 'I',
    title: 'Addictions',
    subtitle: "La Soif de l'Âme",
    category: 'relationnel',
    icon: '💧',
    color: '#22c55e',
    description: 'Protocole d\'accompagnement des addictions par la méditation coranique, en complément d\'un suivi médical.',
    phases: [
      {
        name: 'Fana — La Soif Reconue',
        duration: '10 min',
        description: 'Reconnaître la soif spirituelle derrière l\'addiction.',
        verses: [{ arabic: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ', french: 'Ô âme apaisée, retourne à ton Seigneur.', reference: '89:27' }],
      },
      {
        name: 'Tajalli — La Source',
        duration: '15 min',
        description: 'Découvrir que la vraie source de satisfaction est divine.',
        verses: [{ arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', french: 'C\'est par le rappel d\'Allah que les cœurs se tranquillisent.', reference: '13:28' }],
      },
      {
        name: 'Munajat — L\'Invocation du Repentir',
        duration: '10 min',
        description: 'La supplication du repentir comme libération.',
        verses: [{ arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا', french: 'Notre Seigneur, nous avons été injustes envers nous-mêmes.', reference: '7:23' }],
      },
      {
        name: 'Béance — La Désintoxication Spirituelle',
        duration: '5-10 min',
        description: 'Le silence qui purifie.',
        verses: [{ arabic: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ', french: 'Allah aime ceux qui se repentent.', reference: '2:222' }],
      },
    ],
    contraindications: ['Sevrage physique non accompagné médicalement — TOUJOURS en complément d\'un suivi'],
    keyInsights: ['L\'addiction est comprise comme une « soif mal orientée » de l\'âme', 'Le tawbah (repentir) est un processus continu, pas un événement unique'],
  },
  {
    id: 'burnout',
    letter: 'J',
    title: 'Burnout',
    subtitle: 'Rallumer la Flamme',
    category: 'relationnel',
    icon: '🕯️',
    color: '#f97316',
    description: 'Protocole pour prévenir et guérir du burnout par la restauration de l\'équilibre intérieur.',
    phases: [
      {
        name: 'Fana — L\'Arrêt',
        duration: '10-15 min',
        description: 'Autoriser l\'arrêt total. Contre-productivité spirituelle.',
        verses: [{ arabic: 'إِنَّ رَبَّكَ يَعْلَمُ أَنَّكَ تَقُومُ أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ', french: 'Ton Seigneur sait certes que tu veilles les deux tiers de la nuit.', reference: '73:20' }],
      },
      {
        name: 'Tajalli — L\'Équilibre',
        duration: '10 min',
        description: 'Les versets qui enseignent la modération et l\'équilibre.',
        verses: [{ arabic: 'وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ', french: 'Ne lie pas ta main à ton cou.', reference: '17:29' }],
      },
      {
        name: 'Munajat — La Demande de Repos',
        duration: '10 min',
        description: 'Demander à Allah la permission de se reposer.',
        verses: [{ arabic: 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا', french: 'Et Nous avons fait de votre sommeil un repos.', reference: '78:9' }],
      },
      {
        name: 'Béance — La Renaissance',
        duration: '5-10 min',
        description: 'L\'espace où l\'énergie revient naturellement.',
        verses: [{ arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', french: 'Ton Seigneur te donnera et tu seras satisfait.', reference: '93:5' }],
      },
    ],
    contraindications: ['Burnout sévère avec signes dépressifs majeurs'],
    keyInsights: ['L\'islam valorise le repos — le Prophète ﷺ disait : « Votre corps a des droits sur vous. »'],
  },
  {
    id: 'culpabilite',
    letter: 'K',
    title: 'Culpabilité Toxique',
    subtitle: 'Le Poids du Passé',
    category: 'relationnel',
    icon: '⛓️',
    color: '#a855f7',
    description: 'Protocole pour libérer de la culpabilité toxique par la compréhension islamique du pardon et de la miséricorde divine.',
    phases: [
      {
        name: 'Fana — Le Poids Accueilli',
        duration: '10 min',
        description: 'Reconnaître le poids sans s\'y identifier.',
        verses: [{ arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ', french: 'Dis : Ô Mes serviteurs qui avez commis des excès contre vous-mêmes !', reference: '39:53' }],
      },
      {
        name: 'Tajalli — L\'Océan du Pardon',
        duration: '15 min',
        description: 'Contempler l\'immensité du pardon divin.',
        verses: [{ arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', french: 'Ne désespérez pas de la miséricorde d\'Allah.', reference: '39:53' }],
      },
      {
        name: 'Munajat — Le Retour',
        duration: '10 min',
        description: 'La supplication du repentir sincère.',
        verses: [{ arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ', french: 'Notre Seigneur, nous avons été injustes envers nous-mêmes. Et si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons au nombre des perdants.', reference: '7:23' }],
      },
      {
        name: 'Béance — La Libération',
        duration: '5-10 min',
        description: 'Le silence du cœur libéré.',
        verses: [{ arabic: 'إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ', french: 'Les bonnes œuvres effacent les mauvaises.', reference: '11:114' }],
      },
    ],
    contraindications: ['Culpabilité obsessionnelle nécessitant une TCC'],
    keyInsights: ['Le tawbah (repentir) efface tout ce qui précède — la culpabilité n\'a pas lieu d\'être après un repentir sincère', 'Allah se vante de Son pardon le jour du Jugement — comment pourrait-on désespérer ?'],
  },
  {
    id: 'attachement-abandon',
    letter: 'L',
    title: 'Attachement & Abandon',
    subtitle: 'La Blessure Primordiale',
    category: 'relationnel',
    icon: '🫂',
    color: '#ec4899',
    description:
      'Protocole pour guérir les blessures d\'attachement et les patterns d\'abandon par la restauration du lien avec le Parent Divin.',
    phases: [
      {
        name: 'Fana — Le Cocon Maternel',
        duration: '10-15 min',
        description:
          'Reconstruire un espace de sécurité primitive. Le patient visualise la rahma (miséricorde) divine comme un cocon maternel inconditionnel, réparant les carences d\'attachement originelles.',
        verses: [
          {
            arabic: 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ',
            french: 'Et Ma miséricorde embrasse toute chose.',
            reference: '7:156',
          },
          {
            arabic: 'هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ',
            french: 'C\'est Lui qui vous façonne dans les matrices comme Il veut.',
            reference: '3:6',
          },
        ],
      },
      {
        name: 'Tajalli — Le Parent Parfait',
        duration: '10-15 min',
        description:
          'Contempler les attributs parentaux divins — Al-Wadud (Le Très-Affectueux), Ar-Rahman (Le Tout-Miséricordieux) — pour réparer le schéma parental défaillant par l\'image du Parent Parfait.',
        verses: [
          {
            arabic: 'وَهُوَ الْغَفُورُ الْوَدُودُ',
            french: 'Et Il est le Pardonneur, le Très-Affectueux.',
            reference: '85:14',
          },
        ],
      },
      {
        name: 'Munajat — L\'Enfant qui Retourne',
        duration: '10 min',
        description:
          'La supplication de l\'enfant qui revient vers son Parent divin. Exprimer la douleur de l\'abandon dans un cadre où l\'on est garanti d\'être reçu.',
        verses: [
          {
            arabic: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
            french: 'Seigneur, je suis grand besoin du bien que Tu fais descendre vers moi.',
            reference: '28:24',
          },
        ],
      },
      {
        name: 'Béance — Le Repos dans les Bras',
        duration: '5-10 min',
        description:
          'Le silence du bébé qui s\'endort dans les bras du Parent. Un repos ultime où la blessure d\'abandon est tenue par une Présence qui ne quitte jamais.',
        verses: [
          {
            arabic: 'أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا بَلَىٰ',
            french: 'Ne suis-Je pas votre Seigneur ? — Ils dirent : Si !',
            reference: '7:172',
          },
        ],
      },
    ],
    contraindications: [
      'Traumatisme d\'attachement sévère en cours de thérapie EMDR ou systémique — utiliser en complément uniquement',
      'Perte récente d\'un parent (moins de 6 mois) sans travail de deuil préalable',
    ],
    keyInsights: [
      'La blessure d\'abandon est la blessure la plus profonde car elle touche à la confiance originelle en la vie',
      'Le Coran présente Allah comme le Parent ultime dont les attributs réparent les défaillances parentales humaines',
    ],
  },
  {
    id: 'relations-familiales',
    letter: 'M',
    title: 'Relations Familiales',
    subtitle: 'Le Fil Invisible',
    category: 'relationnel',
    icon: '👨‍👩‍👧‍👦',
    color: '#06b6d4',
    description:
      'Protocole pour la guérison des relations familiales par le miroir coranique et la sagesse des histoires prophétiques.',
    phases: [
      {
        name: 'Fana — Les Racines',
        duration: '10-15 min',
        description:
          'Explorer les racines familiales sans jugement. Accueillir les blessures transgénérationnelles comme des héritages dont on peut se libérer par la grâce.',
        verses: [
          {
            arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
            french: 'Seigneur, fais que de nos épouses et de nos descendance soient la joie de nos yeux.',
            reference: '25:74',
          },
        ],
      },
      {
        name: 'Tajalli — Le Miroir Prophétique',
        duration: '10-15 min',
        description:
          'Contempler les relations familiales dans le Coran — Yaqub et Yusuf, Ibrahim et Ismaïl — comme des miroirs de nos propres dynamiques familiales et de leur guérison possible.',
        verses: [
          {
            arabic: 'وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ وَخَرُّوا لَهُ سُجَّدًا',
            french: 'Et il fit asseoir ses père et mère sur le trône, et ils tombèrent prosternés devant lui.',
            reference: '12:100',
          },
        ],
      },
      {
        name: 'Munajat — La Prière pour la Famille',
        duration: '10 min',
        description:
          'Supplication pour la guérison des liens familiaux brisés. La douleur familiale offerte comme acte de purification et de reconnexion.',
        verses: [
          {
            arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي',
            french: 'Seigneur, fais que je sois persévérant dans la prière, ainsi que parmi ma descendance.',
            reference: '14:40',
          },
        ],
      },
      {
        name: 'Béance — Le Fil Rétabli',
        duration: '5-10 min',
        description:
          'Le silence où le fil invisible entre les cœurs familiaux est restauré, même si les relations extérieures restent imparfaites.',
        verses: [
          {
            arabic: 'وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ',
            french: 'Ceux qui maintiennent les liens que Dieu a ordonné de maintenir.',
            reference: '13:21',
          },
        ],
      },
    ],
    contraindications: [
      'Situation de violence familiale active — priorité à la protection physique',
      'Conflit familial impliquant des abus non révélés',
    ],
    keyInsights: [
      'Le Coran ne montre pas de famille parfaite — chaque histoire prophétique contient des conflits et leur résolution',
      'La silat al-rahim (maintien des liens de parenté) est un acte spirituel qui guérit le donneur autant que le receveur',
    ],
  },
  {
    id: 'identite-appartenance',
    letter: 'N',
    title: 'Identité & Appartenance',
    subtitle: 'Le Miroir de l\'Être',
    category: 'trauma',
    icon: '🌍',
    color: '#84cc16',
    description:
      'Protocole pour les personnes en quête d\'identité ou en situation de conflit d\'appartenance par la contemplation de la fitrah.',
    phases: [
      {
        name: 'Fana — Le Lâcher des Masques',
        duration: '10-15 min',
        description:
          'Identifier et relâcher les identités empruntées — celles imposées par la famille, la société, la culture. Un exercice de dépouillement pour retrouver ce qui subsiste quand tout le reste tombe.',
        verses: [
          {
            arabic: 'وَنَزَعْنَا مَا فِي صُدُورِهِم مِّنْ غِلٍّ',
            french: 'Et Nous aurons arraché de leurs poitrines toute rancœur.',
            reference: '7:43',
          },
        ],
      },
      {
        name: 'Tajalli — La Fitrah Révélée',
        duration: '10-15 min',
        description:
          'Contempler la fitrah — la nature originelle de chaque être — comme l\'identité véritable qui précède toute construction sociale. La fitrah comme socle inaltérable.',
        verses: [
          {
            arabic: 'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',
            french: 'Dirige ton visage vers la religion en monothéiste. Telle est la nature primordiale selon laquelle Allah a créé les hommes.',
            reference: '30:30',
          },
        ],
      },
      {
        name: 'Munajat — L\'Appel de l\'Origine',
        duration: '10 min',
        description:
          'Supplication pour se reconnecter à son identité profonde. Exprimer la souffrance du déracinement et demander à être replanté dans sa vérité.',
        verses: [
          {
            arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ',
            french: 'Seigneur, inspire-moi d\'être reconnaissant pour Tes bienfaits dont Tu m\'as comblé ainsi que mes parents.',
            reference: '27:19',
          },
        ],
      },
      {
        name: 'Béance — L\'Être Pur',
        duration: '5-10 min',
        description:
          'Le silence de l\'identité retrouvée. Un espace où l\'on n\'est plus défini par les étiquettes mais par la simple vérité de son existence devant Dieu.',
        verses: [
          {
            arabic: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
            french: 'Nous avons certes honoré les enfants d\'Adam.',
            reference: '17:70',
          },
        ],
      },
    ],
    contraindications: [
      'Crise identitaire aiguë avec dépersonnalisation — nécessite un suivi psychiatrique préalable',
      'Conflit d\'appartenance lié à un contexte de migration forcée non stabilisé',
    ],
    keyInsights: [
      'La fitrah est l\'identité la plus profonde de chaque être — elle ne dépend ni de la culture, ni de l\'époque, ni du statut social',
      'Le conflit d\'appartenance est souvent la manifestation d\'une blessure de ne pas se sentir « vu » dans sa vérité',
    ],
  },
  {
    id: 'confiance-decisions',
    letter: 'O',
    title: 'Confiance en Soi & Décisions',
    subtitle: 'La Boussole Intérieure',
    category: 'relationnel',
    icon: '🧭',
    color: '#eab308',
    description:
      'Protocole pour renforcer la confiance en soi et la capacité décisionnelle par l\'ancrage dans la guidance divine (istikharah).',
    phases: [
      {
        name: 'Fana — Le Silence qui Écoute',
        duration: '10-15 min',
        description:
          'Apprendre à faire taire les voix extérieures — l\'opinion des autres, les peurs, les conditionnements — pour entendre la voix intérieure que Dieu a placée dans chaque cœur.',
        verses: [
          {
            arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
            french: 'Et Nous sommes plus proches de lui que sa veine jugulaire.',
            reference: '50:16',
          },
        ],
      },
      {
        name: 'Tajalli — Les Signes',
        duration: '10-15 min',
        description:
          'Contempler les versets sur la guidance divine. Dieu a placé en chaque être une boussole intérieure — le firasah (intuition spirituelle) — qu\'il s\'agit de réactiver.',
        verses: [
          {
            arabic: 'وَهَدَيْنَاهُ النَّجْدَيْنِ',
            french: 'Et Nous lui avons indiqué les deux voies.',
            reference: '90:10',
          },
        ],
      },
      {
        name: 'Munajat — La Prière de Consultation',
        duration: '10 min',
        description:
          'La salat al-istikharah comme pratique de prise de décision. Non pas demander à Dieu de choisir pour soi, mais s\'aligner avec la sagesse que Dieu a déjà mise dans le cœur.',
        verses: [
          {
            arabic: 'وَيُعَلِّمُكُمُ اللَّهُ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ',
            french: 'Et Allah vous enseigne. Et Allah est Omniscient.',
            reference: '2:282',
          },
        ],
      },
      {
        name: 'Béance — La Certitude',
        duration: '5-10 min',
        description:
          'Le silence de la décision prise dans la certitude. Un espace où le doute se dissipe et où l\'on fait confiance au premier mouvement du cœur.',
        verses: [
          {
            arabic: 'وَإِذَا قَضَيْتُمْ أَمْرًا فَتَوَكَّلُوا عَلَى اللَّهِ',
            french: 'Et quand vous avez pris une décision, confiez-vous à Allah.',
            reference: '3:159',
          },
        ],
      },
    ],
    contraindications: [
      'Trouble obsessionnel compulsif (TOC) avec checking décisionnel — la consultation spirituelle peut renforcer le rituel compulsif',
      'Dépendance à autrui sévère (personnalité dépendante) sans travail d\'autonomisation préalable',
    ],
    keyInsights: [
      'La salat al-istikharah ne remplace pas l\'intelligence — elle la purifie. Dieu guide à travers le cœur, pas malgré lui',
      'L\'indécision chronique est souvent une peur de mal choisir. Le Coran enseigne que Dieu couvre même les erreurs sincères de Sa miséricorde',
    ],
  },
  {
    id: 'trouble-sommeil',
    letter: 'P',
    title: 'Trouble du Sommeil',
    subtitle: 'Le Repos de l\'Âme',
    category: 'trauma',
    icon: '😴',
    color: '#64748b',
    description:
      'Protocole pour accompagner les personnes souffrant d\'insomnie et de troubles du sommeil par la méditation coranique sur la nuit comme miséricorde et Allah comme gardien du repos.',
    phases: [
      {
        name: 'Fana — Le Crépuscule',
        duration: '10-15 min',
        description:
          'Accompagner le patient dans une transition douce entre la veille et le sommeil. Laisser derrière soi les tensions de la journée en se confiant à Celui qui veille quand toute créature dort. Un exercice de lâcher-prise progressif où chaque pensée est remise entre les mains divines.',
        verses: [
          {
            arabic: 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا وَجَعَلْنَا اللَّيْلَ لِبَاسًا',
            french: 'Et Nous avons fait de votre sommeil un repos, et Nous avons fait de la nuit un vêtement.',
            reference: '78:9-10',
          },
          {
            arabic: 'وَهُوَ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِبَاسًا وَالنَّوْمَ سُبَاتًا',
            french: 'Et c\'est Lui qui a fait de la nuit un vêtement pour vous, et du sommeil un repos.',
            reference: '25:47',
          },
        ],
      },
      {
        name: 'Tajalli — Le Gardien de la Nuit',
        duration: '10-15 min',
        description:
          'Contempler les versets qui révèlent Allah comme Celui qui ne dort jamais et qui veille sur Ses serviteurs pendant leur sommeil. Le patient apprend à se reposer dans la certitude qu\'il est gardé, même inconscient, par une Vigilance éternelle.',
        verses: [
          {
            arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
            french: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent.',
            reference: '2:255',
          },
        ],
      },
      {
        name: 'Munajat — L\'Invocation du Coucheur',
        duration: '10 min',
        description:
          'Réciter et méditer les invocations prophétiques du coucher — les dou\'as avant de dormir qui placent le sommeil sous la protection divine. La pratique transforme l\'acte de dormir en acte de worship et dissipe l\'angoisse nocturne.',
        verses: [
          {
            arabic: 'تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا',
            french: 'Ils s\'arrachent de leurs lits pour invoquer leur Seigneur, par crainte et par espoir.',
            reference: '32:16',
          },
        ],
      },
      {
        name: 'Béance — Le Sommeil Sanctifié',
        duration: '5-10 min',
        description:
          'Le silence qui précède l\'endormissement — un espace sacré entre la veille et le rêve. Le patient s\'abandonne au sommeil comme on s\'abandonne dans les bras du Très-Miséricordieux, sachant que le réveil est promis par la grâce du Créateur.',
        verses: [
          {
            arabic: 'وَمِنْ آيَاتِهِ مَنَامُكُم بِاللَّيْلِ وَالنَّهَارِ وَابْتِغَاؤُكُم مِّن فَضْلِهِ',
            french: 'Et parmi Ses signes, votre sommeil la nuit et le jour, et votre quête de Sa grâce.',
            reference: '30:23',
          },
        ],
      },
    ],
    contraindications: [
      'Insomnie sévère liée à un trouble bipolaire ou à une hypomanie — nécessite un avis psychiatrique',
      'Apnée du sommeil sévère non diagnostiquée — priorité à l\'investigation médicale',
      'Insomnie induite par des substances ou des médicaments',
    ],
    keyInsights: [
      'Le sommeil dans le Coran est une miséricorde (rahmah) et un signe divin — le considérer ainsi transforme la relation à l\'insomnie',
      'Ayat al-Kursi (2:255) est la protection prophétique recommandée avant le coucher — elle crée un cadre de sécurité intérieure',
      'L\'incapacité à dormir peut être une invitation spirituelle : la qiyam al-layl (prière nocturne) transforme l\'insomnie en rencontre',
    ],
  },
  {
    id: 'jalousie-envie',
    letter: 'Q',
    title: 'Jalousie & Envie',
    subtitle: 'Le Regard Pur',
    category: 'relationnel',
    icon: '👀',
    color: '#a3e635',
    description:
      'Protocole pour transformer la jalousie et l\'envie par la gratitude, la contentement (rida) et la purification du regard à travers la méditation coranique.',
    phases: [
      {
        name: 'Fana — Le Regard Accueilli',
        duration: '10-15 min',
        description:
          'Accueillir le sentiment de jalousie ou d\'envie sans le juger ni le réprimer. Reconnaître que ce sentiment est humain et universel, et qu\'il révèle souvent un besoin profond de reconnaissance ou de sécurité. Le patient apprend à regarder sa propre envie avec compassion.',
        verses: [
          {
            arabic: 'أَمْ يَحْسُدُونَ النَّاسَ عَلَىٰ مَا آتَاهُمُ اللَّهُ مِن فَضْلِهِ',
            french: 'Ou bien envient-ils aux gens ce qu\'Allah leur a accordé de Sa grâce ?',
            reference: '4:54',
          },
        ],
      },
      {
        name: 'Tajalli — L\'Abondance Divine',
        duration: '10-15 min',
        description:
          'Contempler les versets qui enseignent que les dons de Dieu sont infinis et personnalisés pour chacun. La jalousie naît de la croyance en la rareté ; le Coran révèle que l\'abondance divine est sans limites et que chacun reçoit ce qui lui est destiné.',
        verses: [
          {
            arabic: 'وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ',
            french: 'Ne souhaitez pas ce par quoi Allah a favorisé certains d\'entre vous plus que d\'autres.',
            reference: '4:32',
          },
          {
            arabic: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ',
            french: 'On a enjolivé aux gens l\'amour des désirs : femmes, enfants, trésors thésaurisés.',
            reference: '3:14',
          },
        ],
      },
      {
        name: 'Munajat — La Prière de la Gratitude',
        duration: '10 min',
        description:
          'Supplication pour que le cœur soit remplacé par la gratitude et la reconnaissance des propres bienfaits reçus. Le patient apprend à compter ses propres dons au lieu de compter ceux des autres, transformant le regard envieux en regard reconnaissant.',
        verses: [
          {
            arabic: 'وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا',
            french: 'Et si vous comptez les bienfaits d\'Allah, vous ne saurez pas les dénombrer.',
            reference: '14:34',
          },
        ],
      },
      {
        name: 'Béance — Le Regard Purifié',
        duration: '5-10 min',
        description:
          'Le silence où le regard se purifie naturellement. L\'envie se dissipe non pas par la force mais par la plénitude — quand le cœur est rempli de gratitude, il n\'y a plus de place pour la jalousie.',
        verses: [
          {
            arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
            french: 'Et contre le mal de l\'envieux quand il envie.',
            reference: '113:5',
          },
        ],
      },
    ],
    contraindications: [
      'Jalousie pathologique avec fantasmes de violence — nécessite un suivi psychothérapeutique spécialisé',
      'Trouble de la personnalité narcissique avec traits paranoïaques',
      'Envie obsessionnelle liée à un TOC — orienter vers le protocole TOC (R)',
    ],
    keyInsights: [
      'Le hasad (jalousie) est distingué en islam de la ghibtah (envie positive) — désirer un bien sans vouloir qu\'il soit retiré à l\'autre',
      'La gratitude (shukr) est présentée dans le Coran comme un multiplicateur de bienfaits : « Si vous êtes reconnaissants, Je multiplierai pour vous » (14:7)',
    ],
  },
  {
    id: 'trouble-obsessionnel',
    letter: 'R',
    title: 'Obsessions & TOC',
    subtitle: 'Le Lâcher-Prise Mental',
    category: 'trauma',
    icon: '🔄',
    color: '#d946ef',
    description:
      'Protocole pour accompagner les personnes souffrant de troubles obsessionnels compulsifs par le tawakkul, le dhikr et la méditation coranique pour briser les boucles mentales.',
    phases: [
      {
        name: 'Fana — La Boucle Identifiée',
        duration: '10-15 min',
        description:
          'Aider le patient à identifier la boucle obsessionnelle sans s\'y engouffrer. Observer la pensée intrusive comme un nuage qui passe, sans la combattre ni la nourrir. Le dhikr comme ancre pour ramener l\'attention au moment présent, coupant ainsi le cycle compulsif.',
        verses: [
          {
            arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
            french: 'Allah n\'impose à aucune âme une charge supérieure à sa capacité.',
            reference: '2:286',
          },
        ],
      },
      {
        name: 'Tajalli — La confiance qui Libère',
        duration: '10-15 min',
        description:
          'Contempler les versets de tawakkul (confiance en Dieu) comme antidote au contrôle mental excessif. Les obsessions sont des tentatives de maîtriser l\'immaîtrisable — le Coran enseigne que seul Dieu maîtrise toute chose, et qu\'en Lui se remettre est la véritable libération.',
        verses: [
          {
            arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا',
            french: 'En vérité, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité.',
            reference: '94:5-6',
          },
          {
            arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            french: 'N\'est-ce point par le rappel d\'Allah que les cœurs se tranquillisent ?',
            reference: '13:28',
          },
        ],
      },
      {
        name: 'Munajat — L\'Invocation de Libération',
        duration: '10 min',
        description:
          'Supplication pour demander à Allah la libération des pensées envahissantes. Le patient formule sa demande de guérison mentale, non pas comme une obligation rituelle qui nourrirait le TOC, mais comme un acte de confiance sincère en la guérison divine.',
        verses: [
          {
            arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
            french: 'Notre Seigneur, ne fais pas dévier nos cœurs après que Tu nous as guidés, et accorde-nous une miséricorde de Ta part.',
            reference: '3:8',
          },
        ],
      },
      {
        name: 'Béance — L\'Espace Entre les Pensées',
        duration: '5-10 min',
        description:
          'Le silence entre deux pensées obsessionnelles — un espace que le patient apprend à habiter plutôt qu\'à combler. Dans cet espace, la paix s\'installe naturellement et les compulsions perdent leur pouvoir d\'attraction.',
        verses: [
          {
            arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            french: 'Et quiconque place sa confiance en Allah, Il lui suffit.',
            reference: '65:3',
          },
        ],
      },
    ],
    contraindications: [
      'TOC sévère avec rituels de contrôle envahissants — nécessite une prise en charge TCC et/ou médicamenteuse en parallèle',
      'Obsessions avec contenu violent ou sexuel pouvant être réactivés par la méditation — prudence et accompagnement rapproché',
      'Le protocole ne doit jamais se substituer au traitement médical du TOC',
    ],
    keyInsights: [
      'Le dhikr répétitif peut sembler proche des compulsions — la différence fondamentale est l\'intention : le dhikr libère, la compulsion emprisonne',
      'Le Coran mentionne « Allah n\'impose à aucune âme que ce qu\'elle peut supporter » (2:286) — ce verset est une ancre centrale contre les doutes obsessionnels',
      'Le tawakkul est le lâcher-prise ultime : ne plus essayer de tout contrôler mentalement, mais faire confiance à Celui qui contrôle toute chose',
    ],
  },
  {
    id: 'deuil-perinatal',
    letter: 'S',
    title: 'Deuil Périnatal',
    subtitle: 'La Semence Éternelle',
    category: 'trauma',
    icon: '🌸',
    color: '#f472b6',
    description:
      'Protocole pour accompagner les parents en deuil périnatal à travers la compréhension islamique de l\'âme avant la naissance et la promesse de réunion dans l\'au-delà.',
    phases: [
      {
        name: 'Fana — L\'Océan de la Douleur',
        duration: '10-15 min',
        description:
          'Accueillir l\'immense douleur de la perte périnatale sans la minimiser ni la fuir. Ce deuil est particulier car il porte à la fois la perte d\'un enfant et la perte d\'un futur imaginé. Le patient est invité à honorer cette douleur comme la preuve d\'un amour qui existait avant même la naissance.',
        verses: [
          {
            arabic: 'وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
            french: 'Et annonce la bonne nouvelle aux endurants : ceux qui, lorsqu\'une épreuve les atteint, disent : « C\'est à Allah que nous appartenons et c\'est à Lui que nous retournons. »',
            reference: '2:155-156',
          },
        ],
      },
      {
        name: 'Tajalli — La Semence dans le Jardin',
        duration: '10-15 min',
        description:
          'Contempler les versets et les hadiths qui parlent du statut des enfants morts avant terme. Dans la tradition islamique, chaque enfant qui meurt avant l\'âge de la puberté est un gardien du Paradis pour ses parents, et la perte d\'un fœtus est promise une réunion dans l\'au-delà.',
        verses: [
          {
            arabic: 'وَلَا تَقْتُلُوا أَوْلَادَكُمْ خَشْيَةَ إِمْلَاقٍ ۖ نَّحْنُ نَرْزُقُهُمْ وَإِيَّاكُمْ',
            french: 'Et ne tuez pas vos enfants par crainte de la pauvreté. C\'est Nous qui leur attribuons leur subsistance, ainsi qu\'à vous.',
            reference: '6:151',
          },
          {
            arabic: 'وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ',
            french: 'Et Nous avons enjoint à l\'homme de bien traiter ses parents. Sa mère l\'a porté avec peine, et avec peine elle l\'a enfanté.',
            reference: '31:14',
          },
        ],
      },
      {
        name: 'Munajat — Le Cri d\'une Mère, l\'Appel d\'un Père',
        duration: '10 min',
        description:
          'Un espace pour la supplication personnelle du parent en deuil. Lâcher les questions « pourquoi ? » et les reproches silencieux pour se tourner vers Celui qui a perdu Lui-même des prophètes bien-aimés. La douleur offerte comme acte de amour éternel envers l\'enfant.',
        verses: [
          {
            arabic: 'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
            french: 'Seigneur, accorde-moi, venant de Toi, une excellente descendance. Tu es Celui qui entend la prière.',
            reference: '3:38',
          },
        ],
      },
      {
        name: 'Béance — La Promesse de Réunion',
        duration: '5-10 min',
        description:
          'Le silence de la promesse divine. Un espace où le parent se connecte à la certitude que la séparation n\'est que temporaire et que l\'attend sur l\'autre rive. L\'enfant perdu est une semence plantée dans le Jardin, et chaque prière du parent l\'arrose.',
        verses: [
          {
            arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
            french: 'Et ton Seigneur te donnera et tu seras satisfait.',
            reference: '93:5',
          },
        ],
      },
    ],
    contraindications: [
      'Deuil périnatal récent (moins de 6 semaines) sans accompagnement médical et psychologique — ce protocole est un complément, pas un remplacement',
      'Dépression post-partum associée avec idéations suicidaires — priorité à la prise en charge médicale urgente',
      'Traumatisme de l\'accouchement non intégré — nécessiterait un travail EMDR ou sensoriel préalable',
    ],
    keyInsights: [
      'La tradition prophétique enseigne que tout fœtus qui avorte sera son intercesseur au Paradis — la perte est transformée en lumière',
      'Le deuil périnatal est souvent invisibilisé dans la société — le Coran et la Sunnah lui donnent une dignité et un sens spirituel profonds',
      'Le concept de « semence éternelle » aide les parents à donner un sens à l\'enfant qui n\'a pas pu naître dans ce monde mais existe dans un autre',
    ],
  },
  {
    id: 'acculturation-identite',
    letter: 'T',
    title: 'Acculturation & Identité',
    subtitle: 'Le Pont entre les Mondes',
    category: 'relationnel',
    icon: '🌏',
    color: '#2dd4bf',
    description:
      'Protocole pour accompagner les personnes en conflit de valeurs et d\'identité entre cultures par la contemplation de la fitrah universelle et de la diversité comme signe divin.',
    phases: [
      {
        name: 'Fana — Le Carrefour',
        duration: '10-15 min',
        description:
          'Explorer le sentiment de déchirement entre deux cultures, deux mondes, deux systèmes de valeurs. Le patient est invité à cartographier ses appartenances multiples sans avoir à choisir, en reconnaissant que le conflit lui-même est une richesse et non une pathologie.',
        verses: [
          {
            arabic: 'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',
            french: 'Et parmi Ses signes, la création des cieux et de la terre, ainsi que la diversité de vos langues et de vos couleurs.',
            reference: '30:22',
          },
        ],
      },
      {
        name: 'Tajalli — La Diversité Sacrée',
        duration: '10-15 min',
        description:
          'Contempler les versets qui présentent la diversité culturelle comme un signe divin et non une épreuve. Le Coran enseigne que les peuples et les tribus ont été créés pour se connaître, pas pour se dominer. Le patient apprend à voir sa position entre deux cultures comme une vocation de pont plutôt qu\'une fracture.',
        verses: [
          {
            arabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
            french: 'Ô humains ! Nous vous avons créés d\'un mâle et d\'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez.',
            reference: '49:13',
          },
          {
            arabic: 'وَلِكُلٍّ وِجْهَةٌ هُوَ مُوَلِّيهَا',
            french: 'Et à chacun une direction vers laquelle il se tourne.',
            reference: '2:148',
          },
        ],
      },
      {
        name: 'Munajat — La Prière du Pont',
        duration: '10 min',
        description:
          'Supplication pour que le patient devienne un pont entre les mondes au lieu de se sentir déchiré entre eux. Demander la sagesse de naviguer entre les cultures sans se perdre soi-même, en s\'ancrant dans la fitrah qui transcende toutes les appartenances culturelles.',
        verses: [
          {
            arabic: 'وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ',
            french: 'Et Nous avons fait descendre sur toi le Livre avec la vérité, confirmant les Livres antérieurs et les présidant.',
            reference: '5:48',
          },
        ],
      },
      {
        name: 'Béance — L\'Identité Intégrée',
        duration: '5-10 min',
        description:
          'Le silence de l\'intégration. Un espace où le patient incarne sa vérité multiple sans contradiction, sachant que l\'identité profonde — la fitrah — est au-delà de toute étiquette culturelle. Être le pont est non pas une souffrance mais une bénédiction et une responsabilité.',
        verses: [
          {
            arabic: 'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',
            french: 'Dirige ton visage vers la religion en monothéiste. Telle est la nature primordiale selon laquelle Allah a créé les hommes. Pas de changement à la création d\'Allah.',
            reference: '30:30',
          },
        ],
      },
    ],
    contraindications: [
      'Crise d\'identité aiguë avec dépersonnalisation — nécessite un suivi psychiatrique préalable',
      'Contexte de migration forcée avec traumatisme non intégré — travailler d\'abord le trauma avant le conflit identitaire',
      'Discrimination active et violence subie — priorité à la sécurité physique et au soutien social',
    ],
    keyInsights: [
      'La fitrah est universelle et transculturelle — elle est le socle commun de toute humanité, au-delà des différences de culture, de langue et de tradition',
      'Le Coran ne demande pas l\'uniformité mais la connaissance mutuelle (ta\'aruf) — la diversité est une bénédiction, pas une épreuve',
      'Les personnes biculturelles ont un potentiel unique de servir de pont entre les mondes — le prophète Yousuf (Joseph) est le modèle coranique de celui qui réussit entre deux cultures',
    ],
  },
  {
    id: 'addiction-dependances',
    letter: 'U',
    title: 'Addiction & Dépendances',
    subtitle: 'La Chaîne Brisée',
    category: 'trauma',
    icon: '🔗',
    color: '#f59e0b',
    description:
      'Protocole pour accompagner les personnes souffrant d\'addictions et de dépendances à travers les 4 phases de la méditation coranique. Ce protocole aborde l\'addiction comme une souffrance de l\'âme qui cherche sa satisfaction hors de sa source légitime, en distinguant la faute de la souffrance, et en s\'appuyant sur les versets coraniques qui offrent un cadre de libération spirituelle profonde.',
    phases: [
      {
        name: 'Fana — La Chaîne Reconnue',
        duration: '10-15 min',
        description:
          'Accueillir la vérité de l\'addiction sans jugement ni honte. Le patient apprend à reconnaître la chaîne qui le lie, non comme une faute morale mais comme une souffrance de l\'âme qui a cherché sa satiété en dehors de sa source légitime. Le Coran décrit ceux qui prennent leurs passions pour divinité, et comment les intoxicants sont un piège de Satan pour semer l\'animosité et éloigner du rappel d\'Allah. Cette phase est un face-à-face honnête avec la dépendance, un acte de courage qui ouvre la porte à la guérison.',
        verses: [
          {
            arabic: 'أَفَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ وَأَضَلَّهُ اللَّهُ عَلَىٰ عِلْمٍ',
            french: 'As-tu vu celui qui prend sa propre passion pour divinité ? Et Allah l\'égare sciemment et scelle son ouïe et son cœur.',
            reference: '6:70',
          },
          {
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ',
            french: 'Ô les croyants ! Les boissons enivrantes, le jeu de hasard, les pierres dressées et les flèches de divination sont une souillure, l\'œuvre du démon. Éloignez-vous-en.',
            reference: '5:90',
          },
          {
            arabic: 'وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِ أَزْوَاجًا مِّنْهُمْ زَهْرَةَ الْحَيَاةِ الدُّنْيَا',
            french: 'Ne porte pas tes regards vers ce dont Nous avons donné jouissance à certains groupes d\'entre eux, comme parure de la vie d\'ici-bas.',
            reference: '20:131',
          },
        ],
      },
      {
        name: 'Tajalli — La Souffrance de l\'Âme',
        duration: '10-15 min',
        description:
          'Contempler les versets qui distinguent la souffrance de l\'âme de la faute volontaire. Allah ne charge aucune âme au-delà de sa capacité, et Il connaît la faiblesse inhérente à la nature humaine. Le Coran enseigne que chaque personne agit selon sa propre inclination, et que seul Allah connaît qui est bien guidé. Le patient comprend que sa dépendance est une blessure de l\'âme qui mérite la guérison et la compassion, pas la condamnation. Cette contemplation rétablit la dignité du patient en le situant dans une perspective de miséricorde divine.',
        verses: [
          {
            arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ',
            french: 'Allah n\'impose à aucune âme une charge supérieure à sa capacité. Elle sera récompensée du bien qu\'elle aura fait et punie du mal qu\'elle aura commis.',
            reference: '2:286',
          },
          {
            arabic: 'قُلْ كُلٌّ يَعْمَلُ عَلَىٰ شَاكِلَتِهِ فَرَبُّكُمْ أَعْلَمُ بِمَنْ هُوَ أَهْدَىٰ سَبِيلًا',
            french: 'Dis : chacun agit selon sa propre inclination. Votre Seigneur connaît mieux qui est bien guidé.',
            reference: '17:84',
          },
        ],
      },
      {
        name: 'Munajat — L\'Appel du Captif',
        duration: '10-15 min',
        description:
          'La supplication du captif qui implore la libération. Le patient adresse à Allah une prière sincère pour briser les chaînes de la dépendance, en s\'appuyant sur l\'invocation de ceux qui ont demandé à Allah de ne pas laisser dévier leurs cœurs après les avoir guidés. Cette phase est le cœur vibrant du protocole : le moment où l\'âme captive appelle son Créateur avec la certitude qu\'Il entend et qu\'Il répond. L\'invocation inclut la demande de fermeté sur le chemin et la demande de miséricorde, car seul Allah peut guérir ce que l\'âme ne peut guérir seule.',
        verses: [
          {
            arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
            french: 'Notre Seigneur, ne fais pas dévier nos cœurs après que Tu nous aies guidés, et accorde-nous une miséricorde venant de Toi.',
            reference: '3:8',
          },
          {
            arabic: 'رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَّا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ',
            french: 'Notre Seigneur, c\'est Toi qui rassembleras les gens pour un jour au sujet duquel il n\'y a point de doute. Allah ne manque jamais à Sa promesse.',
            reference: '3:9',
          },
          {
            arabic: 'قُلْ رَبِّي أَعْلَمُ مَن جَاءَ بِالْهُدَىٰ وَمَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ',
            french: 'Dis : Mon Seigneur connaît mieux qui vient avec la guidée et qui est dans l\'égarement manifeste.',
            reference: '25:77',
          },
        ],
      },
      {
        name: 'Béance — L\'Aube de la Liberté',
        duration: '5-10 min',
        description:
          'Le silence de la libération spirituelle. Un espace où l\'âme respire enfin sans la chaîne de la dépendance. Le Coran promet qu\'avec la difficulté vient la facilité, et cette béance est le moment où le patient goûte à la facilité promise. Jacob, après des décennies de deuil, n\'a jamais cessé d\'espérer en la miséricorde d\'Allah. Ce silence n\'est pas un vide mais une plénitude : l\'âme se découvre capable de vivre sans le substitut qui la tenait captive. La certitude s\'installe que la miséricorde d\'Allah englobe tout, y compris les âmes les plus blessées par leurs propres erreurs.',
        verses: [
          {
            arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
            french: 'En vérité, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité.',
            reference: '94:5-6',
          },
          {
            arabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ',
            french: 'Je ne me plains de mon affliction et de mon chagrin qu\'à Allah, et je sais d\'Allah ce que vous ne savez pas.',
            reference: '12:87',
          },
          {
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
            french: 'Dis : Ô Mes serviteurs qui avez commis des excès contre vous-mêmes, ne désespérez pas de la miséricorde d\'Allah.',
            reference: '39:53',
          },
        ],
      },
    ],
    contraindications: [
      'Sevrage physique non accompagné médicalement, y compris sevrage alcoolique ou aux opioïdes, ce protocole ne remplace jamais un suivi médical de désintoxication',
      'Symptômes aigus de sevrage (tremblements, hallucinations, crises convulsives, delirium tremens), hospitalisation requise en priorité absolue',
      'Instabilité psychiatrique active (psychose, épisode maniaque, idées suicidaires), ce protocole est un complément spirituel et ne constitue pas un traitement psychiatrique',
    ],
    keyInsights: [
      'L\'addiction est comprise dans le cadre du Tadaburr comme une souffrance de l\'âme qui cherche sa satisfaction dans des substituts temporaires au lieu de se tourner vers sa Source légitime. Le Coran nomme cette déviation la prise de la passion comme divinité (6:70), ce qui signifie que l\'âme a placé son désir au rang d\'une adoration. La guérison passe donc par la restauration du bon objet d\'adoration.',
      'La distinction entre faute et souffrance est fondamentale dans l\'accompagnement islamique des addictions. La faute appelle le repentir (tawbah), la souffrance appelle la guérison (shifa). Le Coran interdit les intoxicants (5:90) tout en offrant un chemin de retour à chaque âme, même après les égarements les plus profonds (39:53). Cette double posture interdit à la fois la complaisance dans le péché et le désespoir de la miséricorde.',
      'Le processus de libération de l\'addiction dans le Coran passe par trois étapes : la reconnaissance honnête du problème (Fana), la compréhension que la faiblesse est humaine et que Allah ne charge personne au-delà de sa capacité (Tajalli), puis la supplication sincère d\'un cœur qui demande à être guéri (Munajat). La Béance est la confiance que la guérison est déjà en route, car la facilité est promise après la difficulté (94:5-6).',
    ],
  },
];
