export interface StrategieThematique {
  id: string;
  theme: string;
  icon: string;
  color: string;
  description: string;
  livresRecommandes: string[];
  protocolesAssocies: string[];
  parcoursSuggere: string | null;
  versetClef: {
    arabe: string;
    french: string;
    reference: string;
  };
  conseilPratique: string;
}

export interface ConseilPratique {
  id: string;
  titre: string;
  description: string;
  etapes: string[];
}

export const strategiesThematiques: StrategieThematique[] = [
  {
    id: 'anxiete-stress',
    theme: 'Anxiete et Stress',
    icon: '\uD83C\uDF0A',
    color: '#0ea5e9',
    description: "L'anxiete est une des souffrances les plus repandues de notre epoque. Elle se manifeste sous forme de tension persistante, de pensees envahissantes et d'une sensation d'insécurite qui colore chaque instant. La methode du Tadabur offre un cadre unique pour aborder l'anxiete non pas comme un ennemi a vaincre, mais comme un signal de l'ame qui appelle a revenir au present. Les livres recommandes combinent la sagesse coranique sur la confiance en Allah avec des techniques concretes de gestion de l'anxiété.",
    livresRecommandes: ['tadabur-anxiete', 'tadabur-burnout'],
    protocolesAssocies: ['anxiete-panique', 'trouble-sommeil'],
    parcoursSuggere: 'parcours-tranquillite-mentale',
    versetClef: {
      arabe: '\u0641\u064E\u0625\u0650\u0646\u0651\u064E \u0645\u064E\u0639\u064E \u0627\u0644\u0652\u0639\u064F\u0633\u0652\u0631\u0650 \u064A\u064F\u0633\u0652\u0631\u064B\u0627',
      french: 'En verite, avec la difficulte vient la facilite.',
      reference: '94:5',
    },
    conseilPratique: "Commencez par la pratique du Fana en position assise, les yeux fermes, pendant cinq minutes matin et soir. Ancrez chaque expiration sur la repetition interieure du verset 94:5. Ibn al-Qayyim enseigne que l'anxiete est un exces de futur et que le Coran ramene systematiquement au present. Quand une pensee anxieuse surgit, ne la combattez pas : observez-la comme un nuage qui passe, puis ramenez doucement votre attention sur votre respiration et sur le verset. Avec le temps, cette pratique cree un espace de liberte entre vous et vos pensees, un espace ou la confiance divine peut penetrer.",
  },
  {
    id: 'relations-familles',
    theme: 'Relations et Familles',
    icon: '\uD83E\uDD1D',
    color: '#ec4899',
    description: 'Les relations familiales sont a la fois notre plus grande source de joie et notre terrain de blessures le plus profond. Qu il s agisse de conflits conjugaux, de malentendus entre parents et enfants, ou de blessures d attachement remontant a l enfance, les liens familiaux portent en eux le pouvoir de nous construire comme de nous detruire. La contemplation coranique des histoires prophetiques offre des miroirs remarquablement precis de nos propres dynamiques relationnelles et de leur guerison possible.',
    livresRecommandes: ['tadabur-couples', 'tadabur-relations', 'tadabur-attachement'],
    protocolesAssocies: ['relations-familiales', 'attachement-abandon'],
    parcoursSuggere: 'parcours-relations-famille',
    versetClef: {
      arabe: '\u0648\u064E\u0628\u064E\u064A\u0652\u0646\u064E \u0628\u064E\u064A\u0652\u0646\u0650\u0643\u064F\u0645\u0652 \u0645\u064E\u0648\u064E\u062F\u0651\u064E\u0629\u064B \u0648\u064E\u0631\u064E\u062D\u0652\u0645\u064E\u0629\u064B',
      french: "Et parmi Ses signes : Il a cree pour vous, de vous-memes, des epouses afin que vous trouviez la tranquillite aupres d'elles. Et Il a mis entre vous de l'affection et de la misericorde.",
      reference: '30:21',
    },
    conseilPratique: "Al-Ghazali enseigne que la qualite d'une relation depend de la qualite du coeur de chacun des partenaires. Avant de travailler sur la relation elle-meme, commencez par un travail de Fana sur votre propre coeur : quels ressentiments, quelles peurs, quelles attentes non dites influencent vos interactions ? Le verset 30:21 revele que la mawadda (tendresse affectueuse) et la rahma (misericorde) sont des dons divins places dans le couple, pas seulement des efforts humains. Contemplez ce verset en Tajalli pour comprendre ce qui bloque ces deux qualites dans votre relation, puis utilisez le Munajat pour demander a Allah de restaurer ce lien.",
  },
  {
    id: 'traumatismes-deuil',
    theme: 'Traumatismes et Deuil',
    icon: '\uD83C\uDF3F',
    color: '#06b6d4',
    description: 'Les traumatismes et le deuil sont parmi les epreuves les plus profondes que l ame humaine puisse traverser. Un traumatisme laisse des empreintes dans le corps, le coeur et l esprit, tandis que le deuil est un voyage solitaire a travers la perte d un etre, d une relation ou d une partie de soi. La tradition islamique ne pretend pas que la douleur n existe pas : au contraire, elle l honore. Le prophete Yaqub a pleure jusqu a perdre la vue, et il reste un modele de patience. La methode du Tadabur accompagne ce processus avec une douceur extraordinaire.',
    livresRecommandes: ['tadabur-traumatismes', 'tadabur-deuil', 'tadabur-douleur'],
    protocolesAssocies: ['trauma-ptsd', 'deuil'],
    parcoursSuggere: 'parcours-guerison-emotionnelle',
    versetClef: {
      arabe: '\u0625\u0650\u0646\u0651\u064E\u0627 \u0644\u0650\u0644\u064E\u0651\u0647\u0650 \u0648\u064E\u0625\u0650\u0646\u0651\u064E\u0627 \u0625\u0650\u0644\u064E\u064A\u0652\u0647\u0650 \u0631\u064E\u0627\u062C\u0650\u0639\u064F\u0648\u0646\u064E',
      french: "C'est a Allah que nous appartenons et c'est a Lui que nous retournons.",
      reference: '2:156',
    },
    conseilPratique: "La premiere etape dans le travail sur le traumatisme ou le deuil n est pas de chercher a guérir mais de creer un espace de securite interieure. Le protocole Fana du traumatisme vous guide dans la creation d un cocon protecteur ou la douleur peut etre accueillie sans etre submergee. Ibn al-Qayyim dit que la guerison ne vient que la ou il y a eu blessure, et que la misericorde ne se manifeste pleinement que la ou elle est le plus necessaire. Ne Precipitez rien. Le deuil a son propre rythme, et le Tadabur respecte ce rythme en vous offrant un cadre contenant et apaisant plutot qu une solution rapide.",
  },
  {
    id: 'obsessions-waswas',
    theme: 'Obsessions et Waswas',
    icon: '\uD83D\uDD2E',
    color: '#d946ef',
    description: "Les obsessions, qu elles soient d ordre religieux (waswas) ou laic, creent une prison mentale d ou il semble impossible de sortir. Les pensees intrusives tourbillonnent en boucle, creant de l angoisse, de la honte et une fatigue mentale profonde. La tradition islamique possede une comprehension remarquablement fine de ce phenomene, designe par le terme waswasa (les chuchotements). Ibn al-Qayyim et Ibn Taymiyya ont developpe une approche qui prefigure en bien des points les therapies cognitivo-comportementales modernes.",
    livresRecommandes: ['tadabur-obsessions', 'tadabur-waswas'],
    protocolesAssocies: ['obsessions-toc'],
    parcoursSuggere: 'parcours-tranquillite-mentale',
    versetClef: {
      arabe: '\u0648\u064E\u0625\u0650\u0646\u0651\u064E \u064A\u064E\u0643\u0650\u064A\u062F\u064F\u0643\u064E \u0627\u0644\u0652\u0634\u064E\u0651\u064A\u0652\u0637\u064E\u0627\u0646\u064F \u0628\u064E\u0646\u064E\u062A\u0652\u0640\u0650\u064A\u0652\u062F\u064E\u0647\u064F \u0641\u064E\u0627\u0633\u0652\u062A\u064E\u0639\u0650\u0630\u0652 \u0628\u0650\u0627\u0644\u0644\u064E\u0651\u0647\u0650',
      french: 'Et si le Diable t incite a quelque chose, cherche refuge aupres d Allah.',
      reference: '7:200',
    },
    conseilPratique: "Ibn Taymiyya enseigne que les waswas sont de trois origines : le nafs (l ego), shaytan (les chuchotements sataniques) et fikr (la reflexion naturelle). La cle est de ne pas lutter contre les pensees obsedantes, car la lutte les renforce, mais de les observer avec detachment. La technique du Fana pour les obsessions consiste a imaginer vos pensees comme des feuilles qui passent sur une riviere : vous les regardez passer sans les attraper. Couplez cette observation avec la repetition interieure du verset 7:200 a chaque pensee intrusive. Le Coran ne dit pas de combattre le diable mais de chercher refuge, ce qui est une posture fondamentalement differente.",
  },
  {
    id: 'confiance-estime',
    theme: 'Confiance et Estime',
    icon: '\uD83C\uDF31',
    color: '#22c55e',
    description: "Le manque de confiance en soi et la honte toxique sont des blessures silencieuses qui affectent tous les domaines de la vie. Elles se manifestent par une voix interieure critique, une peur constante du jugement, et une incapacite a reconnaitre sa propre valeur. Dans la tradition islamique, l estime de soi est ancree dans la fitrah, la nature originelle pure que Dieu a placee dans chaque etre humain. La contemplation coranique restaure cette connection en rappelant que votre valeur ne depend pas de vos performances ou de l opinion des autres, mais du simple fait que Dieu a insuffle en vous de Son Esprit.",
    livresRecommandes: ['tadabur-confiance', 'tadabur-identite', 'tadabur-resilience'],
    protocolesAssocies: ['estime-soi', 'confiance-decisions'],
    parcoursSuggere: 'parcours-jeunesse-croissance',
    versetClef: {
      arabe: '\u0648\u064E\u0646\u064E\u0641\u064E\u062E\u0652\u062A\u064F \u0641\u0650\u064A\u0647\u0650 \u0645\u0650\u0646 \u0631\u064F\u0651\u0648\u062D\u0650\u064A',
      french: "Et J'y ai insuffle de Mon Esprit.",
      reference: '15:29',
    },
    conseilPratique: "Al-Ghazali dit que le coeur humain est comme un miroir : quand il est propre, il reflete la lumiere divine et voit sa propre beaute. Quand il est couvert de poussiere par les critiques, les comparaisons et les echecs, il ne voit plus rien de beau en lui. La premiere pratique est de nettoyer ce miroir par le Fana : asseyez-vous en silence et laissez la voix critique se faire entendre sans la croire. Observez-la comme un visiteur temporaire. Puis en Tajalli, contemplez le verset 15:29 qui affirme que Dieu a insuffle de Son Esprit en vous. Votre valeur est divine, pas humaine. Personne ne peut vous l enlever.",
  },
  {
    id: 'adolescents-jeunes',
    theme: 'Adolescents et Jeunes',
    icon: '\uD83C\uDF38',
    color: '#a3e635',
    description: "L adolescence est une periode de bouleversement total ou le jeune cherche sa place dans le monde et sa relation avec le Divin. Les questions existentielles fusent : qui suis-je, ou vais-je, quelle est ma valeur ? Les modeles coraniques de Youssouf, Luqman et Maryam parlent directement a cette quete de sens et offrent des cadres inspirants pour les jeunes en construction. La methode du Tadabur adaptee aux adolescents utilise des exercices raccourcis, un langage direct et des metaphores issues de leur quotidien pour rendre la contemplation accessible et transformatrice.",
    livresRecommandes: ['tadabur-ados'],
    protocolesAssocies: [],
    parcoursSuggere: 'parcours-jeunesse-croissance',
    versetClef: {
      arabe: '\u0648\u064E\u0625\u0650\u0630\u0652 \u0642\u064E\u0627\u0644\u064E \u0644\u064F\u0642\u0652\u0645\u064E\u064E\u0646\u064F \u0644\u064E\u0627\u0628\u064E\u0646\u0650\u064A\u0647\u0650 \u0627\u0639\u0652\u0628\u064F\u062F\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u064E',
      french: 'Et quand Luqman dit a son fils, en l exhortant : O mon fils, ne donne pas d associe a Allah.',
      reference: '31:13',
    },
    conseilPratique: "Le parcours Jeunesse et Croissance est concu specialement pour les jeunes de 13 a 25 ans. Il peut etre suivi seul par un jeune motive ou accompagne par un parent ou un educateur. La cle du succes avec les adolescents est de ne jamais forcer la pratique mais de la proposer comme un espace de liberte. Les exercices de Fana sont raccourcis a dix minutes maximum et utilisent des images concretes. Le journaling tient une place centrale car il permet au jeune de verbaliser son monde interieur a son rythme. Les parents qui accompagnent un adolescent dans ce parcours decouvrent souvent que la contemplation coranique ameliore la qualite du dialogue familial.",
  },
  {
    id: 'colere-emotions',
    theme: 'Colere et Gestion Emotionnelle',
    icon: '\uD83D\uDD25',
    color: '#ef4444',
    description: "La colere est une emotion legitime mais souvent mal geree, particulierement quand elle est refoulee ou explosee sans controle. Elle est frequemment le masque d'une blessure plus profonde : un sentiment d injustice, une blessure d abandon, une peur non reconnue. La tradition islamique offre un enseignement remarquablement nuance sur la colere : elle ne la nie pas, ne la diabolise pas, mais enseigne a la connaitre, a la contenir et a la transformer. Le prophete Mouhammad a dit que la force n est pas de vaincre son adversaire mais de vaincre sa propre colere.",
    livresRecommandes: ['tadabur-colere', 'tadabur-emotion'],
    protocolesAssocies: [],
    parcoursSuggere: 'parcours-guerison-emotionnelle',
    versetClef: {
      arabe: '\u0648\u064E\u0627\u0644\u0652\u0643\u064E\u0627\u0638\u0650\u0645\u0650\u064A\u0646\u064E \u0627\u0644\u0652\u063A\u064E\u064A\u0652\u0638\u064E \u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0627\u0641\u0650\u064A\u0646\u064E \u0639\u064E\u0646\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650',
      french: 'Et ceux qui refoulent leur colere et pardonnent aux gens.',
      reference: '3:134',
    },
    conseilPratique: "Ibn al-Qayyim distingue trois niveaux de maitrise de la colere. Le premier est de ne pas l exprimer physiquement : c est le minimum. Le second est de ne pas la laisser transformer vos paroles : c est le niveau intermediaire. Le troisieme est de la transformer intérieurement en energie positive : c est le niveau le plus eleve. La technique du Fana pour la colere commence par un exercice d ancrage physique : quand la colere monte, asseyez-vous, posez les mains sur vos genoux, et respirez profondement trois fois avant de parler. Puis identifiez l emotion sous-jacente a la colere. Le verset 3:134 associe le refoulement de la colere au pardon, montrant que ces deux mouvements sont les deux faces d un meme processus de guerison.",
  },
  {
    id: 'sommeil-repos',
    theme: 'Sommeil et Repos',
    icon: '\uD83C\uDF19',
    color: '#64748b',
    description: "Le sommeil est un don divin que l agitation mentale, le stress et les ruminations peuvent gravement perturber. L insomnie n est pas qu un probleme physique : elle est souvent le reflet d un coeur qui n a pas su se decharger de ses preoccupations. La tradition islamique envisage le sommeil comme un acte de confiance en Dieu : s endormir, c est remettre son corps et son esprit entre les mains de Celui qui ne dort jamais. Les invocations prophetiques du coucher transforment l acte de dormir en acte de worship et dissipent l angoisse nocturne.",
    livresRecommandes: ['tadabur-sommeil', 'tadabur-burnout'],
    protocolesAssocies: ['trouble-sommeil'],
    parcoursSuggere: 'parcours-tranquillite-mentale',
    versetClef: {
      arabe: '\u0648\u064E\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627 \u0646\u064E\u0648\u0652\u0645\u064E\u0643\u064F\u0645\u0652 \u0633\u064F\u0628\u064E\u0627\u062A\u064B\u0627 \u0648\u064E\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627 \u0627\u0644\u0644\u0651\u064E\u064A\u0652\u0644\u064E \u0644\u0650\u0628\u064E\u0627\u0633\u064B\u0627',
      french: 'Et Nous avons fait de votre sommeil un repos, et Nous avons fait de la nuit un vetement.',
      reference: '78:9-10',
    },
    conseilPratique: "La routine du coucher est un moment sacre que la tradition islamique a codifie avec une precision remarquable. Commencez par une ablution légere, meme symbolique, qui marque la transition entre le jour et la nuit. Puis recitez les invocations prophétiques du coucher : la sourate Al-Mulk, les trois derniieres sourates du Coran (Al-Falaq, An-Nas, Al-Ikhlas), et la supplication du Berger qui transforme la nuit en refuge. Ibn al-Qayyim recommande de ne pas amener ses soucis au lit : ecrivez-les dans un journal avant de vous coucher, et remettez symboliquement chaque souci a Allah. Le sommeil deviendra alors non pas une fuite mais un acte de confiance en Celui qui veille quand toute creature dort.",
  },
];

export const conseilsPratiques: ConseilPratique[] = [
  {
    id: 'conseil-demarrage',
    titre: 'Comment commencer la pratique du Tadabur',
    description: "Le Tadabur est une methode de contemplation coranique accessible a tous, croyants ou chercheurs, debutants ou avances. Il ne necessite aucune connaissance prealable de l arabe ni une memorisation du Coran. Tout ce dont vous avez besoin, c est d un verset en francais, d un endroit calme et de cinq minutes de votre temps. La methode repose sur quatre phases successives que vous decouvrirez progressivement. L important n est pas de tout comprendre des le depart, mais de commencer. Comme le dit Ibn al-Qayyim : le voyage de mille lieues commence par un seul pas, et le pas le plus important est celui que vous faites aujourd hui. Ne attendez pas d etre pret, car la preparation vient par la pratique, pas avant.",
    etapes: [
      'Choisissez un verset qui vous touche dans la section Miroir de la plateforme. Laissez votre intuition vous guider : il n y a pas de mauvais choix.',
      'Trouvez un endroit calme ou vous ne serez pas derange pendant au moins dix minutes. Asseyez-vous confortablement, le dos droit mais non rigide. Fermez les yeux.',
      'Lisez le verset lentement, trois fois. A la premiere lecture, accueillez le sens general. A la deuxieme, observez quel mot ou quelle phrase attire votre attention. A la troisieme, laissez le verset penetrer votre coeur.',
      'Restez en silence pendant deux a trois minutes. Observez ce qui se passe en vous sans chercher a modifier quoi que ce soit. C est la phase du Fana, le premier pas de la contemplation.',
      'Terminez par une courte priere personnelle (Munajat) ou vous exprimez a Dieu ce que ce verset a eveille en vous. Pas de formule compliquee : parlez comme vous parleriez a un ami.',
    ],
  },
  {
    id: 'conseil-resistance',
    titre: 'Gerer la resistance et les obstacles',
    description: "Il est tout a fait normal de ressentir de la resistance quand on commence une pratique de contemplation. Le mental est habitue au mouvement perpetuel, a la distraction, a l agitation. Quand vous lui demandez de se taire, il se rebelle. Cette resistance peut prendre plusieurs formes : l ennui, l agitation physique, l irritation, le doute sur l utilite de la pratique, ou meme des pensees spirituelles qui sont en realite des echappatoires. Ibn al-Qayyim appelle cela les ruses du nafs (l ego), et Al-Ghazali compare le mental agite a un enfant capricieux qu il faut patiemment educer. La cle est de ne pas vous decourager quand la resistance surgit, car elle est en realite un signe que la pratique fonctionne.",
    etapes: [
      'Reconnaissez la resistance sans la juger. Dites-vous simplement : "Je ressens de la resistance en ce moment." Ce geste d observation suffit souvent a la diminuer.',
      'Ne prolongez pas les sessions quand la resistance est forte. Mieux vaut cinq minutes authentiques que trente minutes forcees. La qualite prime sur la duree.',
      'Changez de verset ou d exercice si le meme verset declenche systematiquement de l agitation. Il n y a pas de honte a adapter la pratique a votre etat du moment.',
      'Rappelez-vous que la resistance fait partie du chemin. Al-Ghazali dit que le jardinier ne se decourage pas quand il voit des mauvaises herbes : il les retire avec patience et continue de cultiver.',
      'Si la resistance persiste au-dela de plusieurs semaines, envisagez de travailler avec un praticien certifie qui pourra identifier les blocages specifiques.',
    ],
  },
  {
    id: 'conseil-regularite',
    titre: 'Maintenir la regularite dans la pratique',
    description: "La regularite est le secret de toute transformation durable. Un arrosage quotidien d un petit filet d eau est plus efficace qu un deluge mensuel. La tradition islamique insiste enormement sur la constance dans l adoration : le prophete Mouhammad disait que les oeuvres les plus agrees aupres de Dieu sont celles qui sont les plus regulieres, meme si elles sont petites. Cette wisdom s applique parfaitement au Tadabur. Cinq minutes de contemplation quotidienne transforment plus profondement qu une heure hebdomadaire. Le coeur s ouvre par la repetition, comme une porte dont les gonds se desserrent par un usage quotidien.",
    etapes: [
      'Fixez-vous un moment precis dans la journee pour votre pratique, de preference le matin au reveil ou le soir au coucher. L horaire fixe cree un ancrage dans votre routine.',
      'Commencez par un engagement minimal de cinq minutes par jour. Ne visez pas la perfection : visez la presence. Meme un jour difficile ou vous n arrivez pas a vous concentrer, asseyez-vous et respirez avec votre verset pendant cinq minutes.',
      'Utilisez un rappel sur votre telephone ou un carnet pour noter votre pratique quotidienne. Ne pas notez ce que vous avez ressenti, simplement si vous avez pratique ou non.',
      'Aprés trois semaines de pratique reguliere, vous commencerez a ressentir les premiers fruits : un calme plus profond, une meilleure gestion des emotions, une proximite spirituelle plus nette.',
      'Quand vous ratez un jour (et cela arrivera), ne vous culpabilisez pas. Reprenez simplement le lendemain. Ibn al-Qayyim dit que la main qui tombe se releve plus forte qu avant.',
    ],
  },
  {
    id: 'conseil-profondeur',
    titre: 'Approfondir la contemplation',
    description: "Apres quelques semaines de pratique reguliere, vous pourriez ressentir le desir d aller plus profond dans la contemplation. C est un signe que les premiers fruits du Tadabur se manifestent et que votre coeur s ouvre a la dimension superieure de la methode. L approfondissement ne consiste pas a faire des sessions plus longues, mais a developper une qualite d attention plus fine. Ibn al-Qayyim distingue trois niveaux de contemplation : la contemplation de surface (comprendre le sens du verset), la contemplation intermediaire (voir ce que le verset revele de vous-meme) et la contemplation profonde (exp erimenter la presence divine a travers le verset). Chaque niveau s ouvre naturellement quand le precedent est bien installe.",
    etapes: [
      'Passez a la technique des cinq regards du Tajalli : lisez un verset et posez-vous cinq questions successives. Quel est le sens litteral ? Que me dit-il de moi-meme ? Que me dit-il de Dieu ? Quelle application dans ma vie ? Et enfin, restez en silence pour la cinquieme question qui n a pas de mots.',
      'Explorez les livres therapeutiques de la bibliotheque pour travailler sur des themes specifiques. Chaque livre propose des exercices progressifs de Fana, Tajalli, Munajat et Beance.',
      'Pratiquez le journaling apres chaque session : ecrivez ce que vous avez ressenti, les pensees qui sont venues, les emotions qui ont surgi. Ce journal deviendra votre carte de la transformation.',
      'Integrez les quatre phases dans une seule session de vingt a trente minutes : Fana (ancrage), Tajalli (contemplation du verset), Munajat (priere personnelle), Beance (silence de l ouverture).',
      'Suivez un des parcours therapeutiques proposes sur la plateforme pour une progression structuree sur plusieurs semaines avec des objectifs clairs a chaque etape.',
    ],
  },
  {
    id: 'conseil-quotidien',
    titre: 'Integrer le Tadabur dans la vie quotidienne',
    description: "Le Tadabur n est pas seulement une pratique assise que l on fait dans un coin tranquille. C est une posture du coeur qui peut etre integree dans chaque moment de la vie quotidienne. La contemplation coranique peut se vivre en marchant, en cuisinant, en attendant le bus, en ecoutant un ami. L objectif est de transformer la maniere dont vous percevez le monde et les evenements, en leur appliquant le regard du Coran. Al-Ghazali dit que le vrai croyant a deux lectures du Coran : la lecture des levres (la recitation) et la lecture du coeur (la contemplation dans le monde). Quand les deux se rejoignent, la vie entiere devient un acte de meditation.",
    etapes: [
      'Choisissez un verset court que vous memorisez et repetez interieurement pendant les activites routinieres : en marchant, en faisant la vaisselle, en conduisant. Le dhikr du coeur transforme les moments ordinaires en moments de presence.',
      'Avant chaque decision importante, prenez trente secondes pour respirer et relire votre verset du jour. Cette micro-pause change la qualite de la decision en la reconnectant a votre sagesse interieure.',
      'Quand vous vivez une emotion forte (joie, tristesse, colere, peur), prenez un moment pour identifier quel verset y correspond. C est la pratique du miroir relationnel : voir votre vie a travers les versets et les versets a travers votre vie.',
      'Avant de dormir, faites un bref examen de conscience : quels moments de la journee ont etre des moments de presence et quels moments ont etre des moments d oubli ? Pas de jugement, juste une observation.',
      'Partagez vos decouvertes avec une personne de confiance. La contemplation qui reste uniquement interieure risque de se dessecher. La parole partagee est un engrais pour le coeur.',
    ],
  },
  {
    id: 'conseil-orientation',
    titre: 'Quand consulter un professionnel',
    description: "Le Tadabur est un outil therapeutique puissant, mais il a ses limites. Ce n est ni une psychotherapie, ni un traitement medical. Il existe des situations ou la contemplation coranique doit etre completee, voire remplacee, par un suivi professionnel qualifie. La tradition islamique reconnait cette distinction depuis longtemps : Ibn al-Qayyim distinguait clairement les épreuves du corps (qui relevent du medecin), les blessures du coeur spirituel (qui relevent du guide spirituel) et les blessures du coeur psychologique (qui relevent du therapeute). Savoir reconnaitre quand vous depassez les limites de l auto-accompagnement est un acte de sagesse, pas de faiblesse.",
    etapes: [
      'Consultez un professionnel si vos symptomes d angoisse, de depression ou d obsession interferent significativement avec votre vie quotidienne depuis plus de deux semaines. Le Tadabur peut accompagner le suivi mais ne peut pas le remplacer.',
      'Si vous avez des idees suicidaires ou des pensées de violence, contactez immediatement un professionnel de sante mentale ou une ligne d ecoute d urgence. La contemplation n est pas indiquee en phase aigue de crise.',
      'Si vous avez vecu un traumatisme grave (agression, accident, perte soudaine) dans les six derniers mois, privilegiez un accompagnement par un therapeute forme en EMDR ou en therapies traumatiques avant d aborder le Tadabur sur ces themes.',
      "Pour les troubles psychiatriques diagnostiques (trouble bipolaire, schizophrenie, trouble de la personnalite grave), le Tadabur ne peut etre utilise qu'en complement d'un suivi psychiatrique et avec l'accord de votre medecin traitant.",
      'Si vous sentez que la pratique du Tadabur provoque une detresse au lieu de l apaiser, arretez et consultez un praticien certifie en Tadaburr therapeutique qui pourra adapter la methode a votre situation.',
    ],
  },
];
