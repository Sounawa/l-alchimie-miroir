// versets-etendus.ts
// Corpus coranique etendu organise par theme therapeutique
// 20 categories - 8 versets par categorie - 160 versets au total

export interface VerseEtendu {
  id: string;
  reference: string;
  arabic: string;
  french: string;
  theme: string;
  therapeuticReflection: string;
}

export const verseCategories: string[] = [
  "patience",
  "confiance",
  "guerison",
  "pardon",
  "gratitude",
  "force",
  "espoir",
  "lacher-prise",
  "amour",
  "sagesse",
  "paix",
  "protection",
  "relation-allah",
  "colere",
  "epreuve",
  "identite",
  "couple-famille",
  "deuil",
  "anxiete",
  "transformation",
];

export const versetsParCategorie: Record<string, VerseEtendu[]> = {
  // ============================================================
  // CATEGORIE 1 : PATIENCE (8 versets)
  // ============================================================
  patience: [
    {
      id: "pat-1",
      reference: "2:153",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      french: "O vous qui croyez, recherchez l'aide dans la patience et la priere. Allah est avec ceux qui sont patients.",
      theme: "patience",
      therapeuticReflection:
        "Ce verset enseigne que la patience est un PILIER de la resilience therapeutique. La repetition rassurante qu'Allah est avec les patients offre un soutien emotionnel fondamental.",
    },
    {
      id: "pat-2",
      reference: "2:155-156",
      arabic: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
      french: "Nous vous eprouverons par quelque peur, faim, diminution de biens, de personnes et de recoltes. Annonce la bonne nouvelle aux patients qui disent: Nous appartenons a Allah et a Lui nous retournerons.",
      theme: "patience",
      therapeuticReflection:
        "Ce verset reframe les epreuves comme des TESTS normaux de la vie, pas des punitions. La formule d'acceptation offre un cadre therapeutique puissant pour faire face au trauma.",
    },
    {
      id: "pat-3",
      reference: "3:200",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      french: "O vous qui croyez, soyez patients, perseverez, tenez bon et craignez Allah afin de reussir.",
      theme: "patience",
      therapeuticReflection:
        "Ce verset propose une PROGRESSION en trois etapes: etre patient soi-meme, encourager les autres, et rester vigilant. Un modele de resilience communautaire en therapi.",
    },
    {
      id: "pat-4",
      reference: "103:1-3",
      arabic: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      french: "Par le Temps. L'homme est certes en perdition, sauf ceux qui croient, accomplissent les bonnes oeuvres, se recommandent mutuellement la verite et se recommandent mutuellement la patience.",
      theme: "patience",
      therapeuticReflection:
        "La patience est presentee ici comme l'une des QUATRE conditions de salut. Ce verset aide les patients a comprendre que le soutien mutuel est essentiel a la guerison.",
    },
    {
      id: "pat-5",
      reference: "90:4",
      arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي كَبَدٍ",
      french: "Nous avons certes cree l'homme dans une vie pleine de difficultes.",
      theme: "patience",
      therapeuticReflection:
        "Ce verset NORMALISE la souffrance humaine. En therapi, il aide a combattre le sentiment d'isolement en rappelant que la difficulte est inherente a la condition humaine.",
    },
    {
      id: "pat-6",
      reference: "70:5",
      arabic: "فَاصْبِرْ صَبْرًا جَمِيلًا",
      french: "Patiente donc d'une belle patience.",
      theme: "patience",
      therapeuticReflection:
        "La patience BELLE est celle qui est exercee sans plainte amere. Ce verset encourage une attitude therapeutique d'acceptation sereine face aux difficultes.",
    },
    {
      id: "pat-7",
      reference: "108:1-3",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ فَصَلِّ لِرَبِّكَ وَانْحَرْ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
      french: "Nous t'avons certes accorde l'Abondance. Prie donc ton Seigneur et sacrifie. Celui qui te hait sera certes coupe de toute posterite.",
      theme: "patience",
      therapeuticReflection:
        "Ce verset enseigne que la reponse aux hostilites est de se concentrer sur les BENEDICTIONS recues. Une strategie therapeutique de reorientation positive.",
    },
    {
      id: "pat-8",
      reference: "12:90",
      arabic: "قَالُوا تَاللَّهِ لَقَدْ آثَرَكَ اللَّهُ عَلَيْنَا وَإِنْ كُنَّا لَخَاطِئِينَ",
      french: "Ils dirent: Par Allah, Allah t'a prefere a nous et nous etions certes dans l'erreur.",
      theme: "patience",
      therapeuticReflection:
        "L'histoire de Joseph illustre que la patience face aux INJUSTICES finit par porter ses fruits. Ce verset offre un espoir concret aux patients traversant des situations difficiles.",
    },
  ],

  // ============================================================
  // CATEGORIE 2 : CONFIANCE (8 versets)
  // ============================================================
  confiance: [
    {
      id: "conf-1",
      reference: "3:159",
      arabic: "وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
      french: "Consulte-les dans les affaires. Puis, quand tu te decides, place ta confiance en Allah. Allah aime ceux qui s'en remettent a Lui.",
      theme: "confiance",
      therapeuticReflection:
        "Ce verset enseigne un EQUILIBRE entre l'action humaine et la confiance divine. En therapi, il aide a distinguer ce qui depend de soi et ce qui ne depend pas de soi.",
    },
    {
      id: "conf-2",
      reference: "65:2-3",
      arabic: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      french: "Quiconque s'en remet a Allah, Allah lui suffit.",
      theme: "confiance",
      therapeuticReflection:
        "Cette affirmation est REASSURANTE au plus haut point. Elle aide les patients anxieux a developper une confiance fondamentale en un soutien superieur qui ne fait jamais defaut.",
    },
    {
      id: "conf-3",
      reference: "33:3",
      arabic: "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
      french: "Place ta confiance en Allah. Allah suffit comme Protecteur.",
      theme: "confiance",
      therapeuticReflection:
        "Cette breve affirmation renforce la CONVICTION qu'on n'est jamais seul. En therapi, elle aide a combattre les pensees de vulnerabilite absolue.",
    },
    {
      id: "conf-4",
      reference: "9:51",
      arabic: "قُلْ لَنْ يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
      french: "Dis: Rien ne nous atteindra en dehors de ce qu'Allah a destine pour nous. Il est notre Protecteur. Que les croyants s'en remettent a Allah.",
      theme: "confiance",
      therapeuticReflection:
        "Ce verset aide a DEVELOPPER un sentiment de securite fondamental. Accepter que tout est mesure aide a reduire l'anxiete liee a l'incertitude du futur.",
    },
    {
      id: "conf-5",
      reference: "11:123",
      arabic: "وَلِلَّهِ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ وَإِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ فَاعْبُدْهُ وَتَوَكَّلْ عَلَيْهِ",
      french: "A Allah appartient l'Inconnaissable des cieux et de la terre, et a Lui retourne toute l'affaire. Adore-Le donc et place ta confiance en Lui.",
      theme: "confiance",
      therapeuticReflection:
        "Reconnaitre l'inconnaissable aide a ACCEPTER les mysteres de la vie. Ce verset encourage a lacher le besoin de controle total sur les evenements.",
    },
    {
      id: "conf-6",
      reference: "16:99",
      arabic: "إِنَّهُ لَيْسَ لَهُ سُلْطَانٌ عَلَى الَّذِينَ آمَنُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
      french: "Il n'a aucun pouvoir sur ceux qui croient et placent leur confiance en leur Seigneur.",
      theme: "confiance",
      therapeuticReflection:
        "Ce verset est ESSENTIEL pour les patients luttant contre des pensées obsidantes. La confiance en Allah est presentee comme un BOUCLIER protecteur.",
    },
    {
      id: "conf-7",
      reference: "2:216",
      arabic: "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ",
      french: "Il se peut que vous detestiez une chose alors qu'elle est bonne pour vous, et il se peut que vous aimiez une chose alors qu'elle est mauvaise pour vous. Allah sait et vous ne savez pas.",
      theme: "confiance",
      therapeuticReflection:
        "Ce verset cultive une CONFIANCE profonde meme quand les choses semblent contraires a nos desirs. En therapi, il aide a reframer les pertes en opportunites cachees.",
    },
    {
      id: "conf-8",
      reference: "57:23",
      arabic: "لِكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ",
      french: "Afin que vous ne vous affligiez pas de ce qui vous echappe et que vous ne vous rejouissiez pas exagerement de ce qu'Il vous donne.",
      theme: "confiance",
      therapeuticReflection:
        "Ce verset enseigne la MODERATION emotionnelle, ni desespoir ni exultation excessive. Il offre un cadre therapeutique pour la regulation emotionnelle.",
    },
  ],

  // ============================================================
  // CATEGORIE 3 : GUERISON (8 versets)
  // ============================================================
  guerison: [
    {
      id: "gue-1",
      reference: "17:82",
      arabic: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ ۗ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا",
      french: "Nous faisons descendre du Coran ce qui est guerison et misericorde pour les croyants. Cependant, cela ne fait qu'accroitre la perdition des injustes.",
      theme: "guerison",
      therapeuticReflection:
        "Le Coran est lui-meme decrit comme une GUERISON. Ce verset fonde l'utilisation therapeutique des versets comme outil de soins spirituels et psychologiques.",
    },
    {
      id: "gue-2",
      reference: "26:80",
      arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
      french: "Et quand je suis malade, c'est Lui qui me guerit.",
      theme: "guerison",
      therapeuticReflection:
        "Abraham declare sa FOI dans la guerison divine tout en mentionnant le fait de tomber malade. Ce verset enseigne que chercher la guerison est compatible avec la confiance en Allah.",
    },
    {
      id: "gue-3",
      reference: "6:17",
      arabic: "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      french: "Si Allah t'eprouve d'un mal, nul ne peut l'ecarter sauf Lui. Et s'Il te touche d'un bien, Il est Omnipotent.",
      theme: "guerison",
      therapeuticReflection:
        "Ce verset enseigne que la SOURCE de la guerison est divine. En therapi, il aide a developper une confiance dans le processus de guerison meme quand les moyens humains semblent limites.",
    },
    {
      id: "gue-4",
      reference: "41:44",
      arabic: "قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ",
      french: "Dis: Il est pour ceux qui croient un guide et une guerison.",
      theme: "guerison",
      therapeuticReflection:
        "Ce verset associe directement la FOI a la guerison. En therapi islamique, il fonde le lien entre la sante spirituelle et le bien-etre psychologique.",
    },
    {
      id: "gue-5",
      reference: "10:57",
      arabic: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِلْمُؤْمِنِينَ",
      french: "O humains, une exhortation vous est venue de votre Seigneur, une guerison de ce qui est dans les poitrines, un guide et une misericorde pour les croyants.",
      theme: "guerison",
      therapeuticReflection:
        "La guerison vise ici ce qui est dans les POITRINES, c'est-a-dire le coeur et l'esprit. Ce verset est fondamental pour l'approche therapeutique centrée sur les emotions.",
    },
    {
      id: "gue-6",
      reference: "16:69",
      arabic: "يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ",
      french: "Il sort de leurs ventres une boisson de couleurs variees dans laquelle il y a une guerison pour les gens.",
      theme: "guerison",
      therapeuticReflection:
        "Ce verset montre qu'Allah a place des REMEDES dans Sa creation. Il encourage les patients a utiliser les moyens therapeutiques disponibles avec confiance.",
    },
    {
      id: "gue-7",
      reference: "4:79",
      arabic: "مَا أَصَابَكَ مِنْ حَسَنَةٍ فَمِنَ اللَّهِ وَمَا أَصَابَكَ مِنْ سَيِّئَةٍ فَمِنْ نَفْسِكَ",
      french: "Tout bien qui t'atteint vient d'Allah, et tout mal qui t'atteint vient de toi-meme.",
      theme: "guerison",
      therapeuticReflection:
        "Ce verset encourage la PRISE DE RESPONSABILITE dans le processus de guerison. En therapi, il aide a developper un sentiment d'agentivite tout en reconnaissant la grace divine.",
    },
    {
      id: "gue-8",
      reference: "21:83-84",
      arabic: "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِنْ ضُرٍّ",
      french: "Et Job, quand il appela son Seigneur: Le mal m'a touche et Tu es le plus Misericordieux des misericordieux. Nous lui avons repondu et avons dissipe le mal qui l'affligeait.",
      theme: "guerison",
      therapeuticReflection:
        "L'histoire de Job est un MODELE de guerison par l'invocation sincere. Ce verset montre que la plainte a Allah est permise et que la guerison suit la priere.",
    },
  ],

  // ============================================================
  // CATEGORIE 4 : PARDON (8 versets)
  // ============================================================
  pardon: [
    {
      id: "par-1",
      reference: "3:134",
      arabic: "الَّذِينَ يُنْفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
      french: "Ceux qui depensent dans l'aise et l'adversite, qui dominent leur colere et pardonnent aux gens. Allah aime les bienfaisants.",
      theme: "pardon",
      therapeuticReflection:
        "Le pardon est associe ici a la MAITRISE de soi et a la bienfaisance. En therapi, ce verset aide a comprendre que pardonner est un acte de FORCE, pas de faiblesse.",
    },
    {
      id: "par-2",
      reference: "24:22",
      arabic: "وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ ۗ وَاللَّهُ غَفُورٌ رَحِيمٌ",
      french: "Qu'ils pardonnent et passent sur les fautes. N'aimez-vous pas qu'Allah vous pardonne? Allah est Pardonneur et Misericordieux.",
      theme: "pardon",
      therapeuticReflection:
        "Ce verset offre un CADRE motivateur pour le pardon: pardonner aux autres pour qu'Allah nous pardonne. Il transforme le pardon en un investissement dans ses propres relations.",
    },
    {
      id: "par-3",
      reference: "7:199",
      arabic: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
      french: "Accepte le pardon, ordonne le convenable et eloigne-toi des ignorants.",
      theme: "pardon",
      therapeuticReflection:
        "Ce verset enseigne une APPROCHE ACTIVE du pardon: l'accepter, faire le bien, et s'eloigner de la toxicite. Une strategie therapeutique en trois etapes.",
    },
    {
      id: "par-4",
      reference: "42:40",
      arabic: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ",
      french: "La recompense d'une mauvaise action est une mauvaise action semblable. Mais quiconque pardonne et se reconcile, sa recompense incombe a Allah.",
      theme: "pardon",
      therapeuticReflection:
        "Ce verset presente le pardon comme un ACTE DE RECONCILIATION, pas seulement d'oubli. Il encourage la reparation des liens, ce qui est au coeur de nombreuses therapies.",
    },
    {
      id: "par-5",
      reference: "15:85",
      arabic: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ وَإِنَّ السَّاعَةَ لَآتِيَةٌ فَاصْفَحِ الصَّفْحَ الْجَمِيلَ",
      french: "Nous n'avons cree les cieux et la terre et ce qui est entre eux qu'en verite. L'Heure viendra certainement. Pardonne donc d'un beau pardon.",
      theme: "pardon",
      therapeuticReflection:
        "Le beau pardon est celui qui est ACCORDE avec grace et dignite. Ce verset aide les patients a pardonner sans se rabaisser, en gardant leur integrite.",
    },
    {
      id: "par-6",
      reference: "6:54",
      arabic: "وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ ۖ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ",
      french: "Et lorsque viennent vers toi ceux qui croient en Nos versets, dis: Paix soit sur vous. Votre Seigneur S'est prescrit la misericorde.",
      theme: "pardon",
      therapeuticReflection:
        "La MISERICORDE est un attribut divin que Allah a prescrit pour Lui-meme. Ce verset rappelle que pardonner est conforme a la nature divine.",
    },
    {
      id: "par-7",
      reference: "2:182",
      arabic: "فَمَنْ خَافَ مِنْ مُوصٍ جَنَفًا أَوْ إِثْمًا فَأَصْلَحَ بَيْنَهُمْ فَلَا إِثْمَ عَلَيْهِ",
      french: "Celui qui craint qu'un testateur ait commis une erreur ou un peche et qui effectue une reconciliation entre les parties, ne commet aucun peche.",
      theme: "pardon",
      therapeuticReflection:
        "Ce verset valorise la MEDIATION et la reconciliation. En therapi familiale, il justifie l'intervention pour restaurer la harmonie entre les parties.",
    },
    {
      id: "par-8",
      reference: "64:14",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّ مِنْ أَزْوَاجِكُمْ وَأَوْلَادِكُمْ عَدُوًّا لَكُمْ فَاحْذَرُوهُمْ وَإِنْ تَعْفُوا وَتَصْفَحُوا وَتَغْفِرُوا فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      french: "O vous qui croyez, parmi vos epouses et vos enfants, il y a des ennemis pour vous. Prenez-y garde. Mais si vous pardonnez, passez sur les fautes et pardonnez, Allah est Pardonneur et Misericordieux.",
      theme: "pardon",
      therapeuticReflection:
        "Ce verset aborde les SITUATIONS FAMILIALES difficiles avec honnetete tout en prescrivant le pardon. Il est utile en therapi familiale pour traiter les conflits intergenerationnels.",
    },
  ],

  // ============================================================
  // CATEGORIE 5 : GRATITUDE (8 versets)
  // ============================================================
  gratitude: [
    {
      id: "gra-1",
      reference: "14:7",
      arabic: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      french: "Si vous etes reconnaissants, Je vous accorderai davantage.",
      theme: "gratitude",
      therapeuticReflection:
        "Ce verset etablit une LOI SPIRITUELLE: la gratitude attire l'abondance. En therapi positive, la pratique de la gratitude est un outil puissant pour ameliorer l'humeur.",
    },
    {
      id: "gra-2",
      reference: "31:12",
      arabic: "وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ ۚ وَمَنْ يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ",
      french: "Nous avions accorde la sagesse a Luqman: Sois reconnaissant envers Allah. Quiconque est reconnaissant ne l'est que pour lui-meme.",
      theme: "gratitude",
      therapeuticReflection:
        "La gratitude est un ACTE BENEFIQUE pour soi-meme avant tout. Ce verset aide les patients a comprendre que la gratitude n'est pas une dette mais un bienfait personnel.",
    },
    {
      id: "gra-3",
      reference: "2:152",
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      french: "Souvenez-vous de Moi, Je Me souviendrai de vous. Soyez reconnaissants envers Moi et ne Me reniez pas.",
      theme: "gratitude",
      therapeuticReflection:
        "Le souvenir mutuel entre Allah et le croyant cree une RELATION DE RECIPROCITE. Ce verset peut aider les patients a ressentir une connexion divine personnelle.",
    },
    {
      id: "gra-4",
      reference: "3:145",
      arabic: "وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ كِتَابًا مُؤَجَّلًا",
      french: "Aucune ame ne peut mourir sans la permission d'Allah, selon un terme fixe.",
      theme: "gratitude",
      therapeuticReflection:
        "Ce verset aide a APPRECIEE chaque moment de vie comme un don. En therapi, il encourage a vivre pleinement le present plutot que de craindre le futur.",
    },
    {
      id: "gra-5",
      reference: "16:18",
      arabic: "وَإِنْ تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا",
      french: "Et si vous comptez les bienfaits d'Allah, vous ne saurez pas les denombrer.",
      theme: "gratitude",
      therapeuticReflection:
        "Les bienfaits divins sont INNOMBRABLES, ce qui invite a un regard constant sur les aspects positifs de la vie. Ce verset est ideal pour les exercices de gratitude quotidienne.",
    },
    {
      id: "gra-6",
      reference: "34:13",
      arabic: "اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِنْ عِبَادِيَ الشَّكُورُ",
      french: "O famille de David, oeuvrez par gratitude. Mais peu de Mes serviteurs sont reconnaissants.",
      theme: "gratitude",
      therapeuticReflection:
        "Le travail lui-meme peut etre une EXPRESSION de gratitude. Ce verset aide les patients a voir leur activite quotidienne comme un acte d'adoration et de remerciement.",
    },
    {
      id: "gra-7",
      reference: "14:34",
      arabic: "وَآتَاكُمْ مِنْ كُلِّ مَا سَأَلْتُمُوهُ ۗ وَإِنْ تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا",
      french: "Il vous a accorde de tout ce que vous Lui avez demande. Et si vous comptiez les bienfaits d'Allah, vous ne sauriez les denombrer.",
      theme: "gratitude",
      therapeuticReflection:
        "Allah a DEJA repondu a bien des demandes meme si nous oublions. Ce verset encourage a revisiter ses priere passees pour realiser combien ont ete exaucees.",
    },
    {
      id: "gra-8",
      reference: "93:7-8",
      arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ وَوَjَدَكَ عَائِلًا فَأَغْنَىٰ",
      french: "Il t'a trouve egare et t'a guide. Il t'a trouve pauvre et t'a enrichi.",
      theme: "gratitude",
      therapeuticReflection:
        "Allah a CHANGE l'etat du Prophete de l'egarement a la guidance, de la pauvrete a la richesse. Ce verset inspire les patients a voir les transformations positives dans leur propre vie.",
    },
  ],

  // ============================================================
  // CATEGORIE 6 : FORCE (8 versets)
  // ============================================================
  force: [
    {
      id: "for-1",
      reference: "2:45",
      arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
      french: "Cherchez l'aide dans la patience et la priere. Elle est certes lourde, sauf pour ceux qui sont humbles.",
      theme: "force",
      therapeuticReflection:
        "La priere est un OUTIL de force interieure, meme si elle semble difficile. Ce verset encourage a persister dans les pratiques spirituelles comme source de resilience.",
    },
    {
      id: "for-2",
      reference: "3:139",
      arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
      french: "Ne vous laissez pas abattre et ne vous affligez pas alors que vous etes les superieurs, si vous etes croyants.",
      theme: "force",
      therapeuticReflection:
        "Ce verset est un RALLIEMENT direct contre le decouragement. En therapi, il aide a contrer les pensees d'impuissance en rappelant la valeur intrinseque du croyant.",
    },
    {
      id: "for-3",
      reference: "3:173",
      arabic: "الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      french: "Ceux auxquels les gens disaient: Les gens se sont rassembles contre vous, craignez-les. Cela accrut leur foi et ils dirent: Allah nous suffit, quel excellent Protecteur.",
      theme: "force",
      therapeuticReflection:
        "Au lieu de s'effondrer sous la MENACE, les croyants ont vu leur foi augmenter. Ce verset est un modele therapeutique de transformation de la peur en force.",
    },
    {
      id: "for-4",
      reference: "11:115",
      arabic: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
      french: "Patiente donc, car Allah ne fait pas perdre la recompense de ceux qui font le bien.",
      theme: "force",
      therapeuticReflection:
        "Ce verset PROMET que les efforts ne seront jamais perdus. En therapi, il renforce la motivation en assurant que chaque pas vers la guerison compte.",
    },
    {
      id: "for-5",
      reference: "2:214",
      arabic: "أَمْ حَسِبْتُمْ أَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُمْ مَثَلُ الَّذِينَ خَلَوْا مِنْ قَبْلِكُمْ",
      french: "Pensez-vous entrer au Paradis sans avoir subi les epreuves de ceux qui vecurent avant vous?",
      theme: "force",
      therapeuticReflection:
        "Ce verset DEMYSTIFIE l'idee d'une vie sans difficultes. Il aide les patients a comprendre que les epreuves sont une precondition normale de la croissance.",
    },
    {
      id: "for-6",
      reference: "2:249",
      arabic: "قَالَ الَّذِينَ يَظُنُّونَ أَنَّهُمْ مُلَاقُو اللَّهِ كَمْ مِنْ فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ",
      french: "Ceux qui savaient qu'ils allaient rencontrer Allah dirent: Combien de fois une petite troupe a vaincu une grande troupe par la permission d'Allah?",
      theme: "force",
      therapeuticReflection:
        "Ce verset enseigne que le NOMBRE et les ressources materielles ne determinent pas l'issue. En therapi, il aide a contrer le sentiment d'insuffisance.",
    },
    {
      id: "for-7",
      reference: "22:39-40",
      arabic: "أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا ۚ وَلَعَلَّ اللَّهَ يَنْصُرُ الْمُسْتَضْعَفِينَ",
      french: "Autorisation est donnee a ceux qui sont attaques parce qu'ils ont ete injustes. Allah est certes Capable de secourir les faibles.",
      theme: "force",
      therapeuticReflection:
        "Allah est le DEFENSEUR des faibles et des opprimes. Ce verset offre un sentiment de justice et de protection aux patients victimes d'injustice.",
    },
    {
      id: "for-8",
      reference: "8:45-46",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا وَاذْكُرُوا اللَّهَ كَثِيرًا لَعَلَّكُمْ تُفْلِحُونَ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ",
      french: "O vous qui croyez, quand vous rencontrez une troupe, tenez bon et invoquez beaucoup Allah afin de reussir. Obeyez Allah et Son Messager et ne vous disputez pas.",
      theme: "force",
      therapeuticReflection:
        "La FERMETE et le souvenir d'Allah sont les clefs de la victoire. Ce verset offre une strategie therapeutique contre la dispersion mentale et le doute.",
    },
  ],

  // ============================================================
  // CATEGORIE 7 : ESPOIR (8 versets)
  // ============================================================
  espoir: [
    {
      id: "esp-1",
      reference: "93:1-5",
      arabic: "وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
      french: "Par le jour montant et par la nuit quand elle se couvre. Ton Seigneur ne t'a ni abandonne ni deteste. L'ultime sera meilleur pour toi que le premier. Ton Seigneur te donnera et tu seras satisfait.",
      theme: "espoir",
      therapeuticReflection:
        "Ce verset est un MESSAGE D'ESPOIR SUPREME. Meme quand on se sent abandonne, Allah est present et le futur sera meilleur. Ideal pour les phases depressives.",
    },
    {
      id: "esp-2",
      reference: "94:5-6",
      arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      french: "Avec la difficulte vient la facilite. Avec la difficulte vient la facilite.",
      theme: "espoir",
      therapeuticReflection:
        "La REPETITION de cette promesse la renforce. En therapi, elle sert d'ancre quand le patient se sent submerge, rappelant que la facilite est INEVITABLE apres la difficulte.",
    },
    {
      id: "esp-3",
      reference: "12:87",
      arabic: "لَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِنْ رَوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
      french: "Ne desesperez pas de la misericorde d'Allah. Ce sont seulement les mecreants qui desesperent de la misericorde d'Allah.",
      theme: "espoir",
      therapeuticReflection:
        "Le DESespoir est catégorise comme un trait de mecreance. Ce verset est puissant en therapi pour contrer les idees suicidaires ou le sentiment de desespoir total.",
    },
    {
      id: "esp-4",
      reference: "29:69",
      arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
      french: "Quant a ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers. Allah est avec les bienfaisants.",
      theme: "espoir",
      therapeuticReflection:
        "L'EFFORT dans le chemin d'Allah est GARANTI d'etre guide. Ce verset encourage les patients a continuer leurs efforts therapeutiques avec l'assurance d'un soutien divin.",
    },
    {
      id: "esp-5",
      reference: "108:1-3",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ فَصَلِّ لِرَبِّكَ وَانْحَرْ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
      french: "Nous t'avons certes accorde l'Abondance. Prie donc ton Seigneur et sacrifie. Celui qui te hait sera certes coupe de toute posterite.",
      theme: "espoir",
      therapeuticReflection:
        "L'ABONDANCE divine depasse toute adversite humaine. Ce verset est rassurant pour les patients qui se sentent attaques ou diminues par autrui.",
    },
    {
      id: "esp-6",
      reference: "65:2-3",
      arabic: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      french: "Quiconque s'en remet a Allah, Allah lui suffit.",
      theme: "espoir",
      therapeuticReflection:
        "Cette affirmation est un PILIER d'espoir. Quand les ressources humaines sont epuisees, la confiance en Allah ouvre une dimension supplementaire d'espoir.",
    },
    {
      id: "esp-7",
      reference: "39:53",
      arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
      french: "Dis: O Mes serviteurs qui avez depasse les limites contre vous-memes, ne desesperez pas de la misericorde d'Allah.",
      theme: "espoir",
      therapeuticReflection:
        "Ce verset est le PLUS ESPOIR-FUL du Coran. Meme apres les pires erreurs, la porte du pardon reste OUVERTE. Inestimable pour les patients ronges par la culpabilite.",
    },
    {
      id: "esp-8",
      reference: "4:104",
      arabic: "وَلَا تَهِنُوا فِي ابْتِغَاءِ الْقَوْمِ ۖ إِنْ تَكُونُوا تَأْلَمُونَ فَإِنَّهُمْ يَأْلَمُونَ كَمَا تَأْلَمُونَ ۖ وَتَرْجُونَ مِنَ اللَّهِ مَا لَا يَرْجُونَ",
      french: "Ne faiblissez pas dans la recherche de vos ennemis. Si vous souffrez, eux aussi souffrent comme vous souffrez. Mais vous esperez d'Allah ce qu'ils n'esperent pas.",
      theme: "espoir",
      therapeuticReflection:
        "L'espoir du croyant a une DIMENSION UNIQUE grace a sa relation avec Allah. Ce verset aide les patients a cultiver un espoir qui depasse les circonstances presentes.",
    },
  ],

  // ============================================================
  // CATEGORIE 8 : LACHER-PRISE (8 versets)
  // ============================================================
  "lacher-prise": [
    {
      id: "lac-1",
      reference: "3:139",
      arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
      french: "Ne vous laissez pas abattre et ne vous affligez pas alors que vous etes les superieurs, si vous etes croyants.",
      theme: "lacher-prise",
      therapeuticReflection:
        "Ce verset invite a LACHER l'attachement au resultat immediat. La verite superieure est ailleurs, dans la foi, pas dans la victoire apparente.",
    },
    {
      id: "lac-2",
      reference: "57:22-23",
      arabic: "لَا مُصِيبَةً إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَنْ يُؤْمِنْ بِاللَّهِ يَهْدِ قَلْبَهُ",
      french: "Nulle affliction n'arrive sans la permission d'Allah. Et quiconque croit en Allah, Il guide son coeur.",
      theme: "lacher-prise",
      therapeuticReflection:
        "Lacher prise signifie ACCEPTER que certains evenements sont au-dela de notre controle. Ce verset enseigne que la foi guide le coeur vers la serenite.",
    },
    {
      id: "lac-3",
      reference: "18:6",
      arabic: "فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَىٰ آثَارِهِمْ إِنْ لَمْ يُؤْمِنُوا بِهَٰذَا الْحَدِيثِ أَسَفًا",
      french: "Tu risques de te consumer de chagrin parce qu'ils ne croient pas en ce recit.",
      theme: "lacher-prise",
      therapeuticReflection:
        "Ce verset met en garde contre la DEPENDANCE emotionnelle envers les reactions d'autrui. En therapi, il aide a lacher le besoin de convaincre ou de controler autrui.",
    },
    {
      id: "lac-4",
      reference: "42:48",
      arabic: "فَإِنْ أَعْرَضُوا فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا ۖ إِنْ عَلَيْكَ إِلَّا الْبَلَاغُ",
      french: "S'ils se detournent, Nous ne t'avons pas envoye comme gardien sur eux. Tu n'as pour tache que la transmission du message.",
      theme: "lacher-prise",
      therapeuticReflection:
        "La RESPONSABILITE du therapeute comme du croyant est limitee a la transmission. Ce verset libere du fardeau de devoir changer autrui.",
    },
    {
      id: "lac-5",
      reference: "64:11",
      arabic: "لَا يُصِيبُكُمْ إِلَّا مَا كَتَبَ اللَّهُ لَكُمْ",
      french: "Rien ne vous atteint si ce n'est ce qu'Allah a predestine pour vous.",
      theme: "lacher-prise",
      therapeuticReflection:
        "La PREDESTINATION, comprise comme sagesse divine, permet un lacher-prise profond. Ce verset est utilise en therapi pour acceptance radicale des evenements de vie.",
    },
    {
      id: "lac-6",
      reference: "6:162",
      arabic: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
      french: "Dis: Ma priere, mon culte, ma vie et ma mort appartiennent a Allah, Seigneur des mondes.",
      theme: "lacher-prise",
      therapeuticReflection:
        "Dedier sa VIE ENTIERE a Allah est l'ultime lacher-prise. Ce verset aide les patients a se detacher de l'ego et des attachements materielles pour trouver la paix.",
    },
    {
      id: "lac-7",
      reference: "88:21-26",
      arabic: "فَذَكِّرْ إِنَّمَا أَنْتَ مُذَكِّرٌ لَسْتَ عَلَيْهِمْ بِمُسَيْطِرٍ",
      french: "Rappelle donc. Tu n'es qu'un rappelleur. Tu n'as aucun pouvoir sur eux.",
      theme: "lacher-prise",
      therapeuticReflection:
        "Le role du rappel est IMPORTANT, mais sans controle sur autrui. Ce verset est essentiel pour les therapeutes et aidants qui doivent respecter l'autonomie de leurs patients.",
    },
    {
      id: "lac-8",
      reference: "13:28",
      arabic: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      french: "Ceux qui ont cru et dont les coeurs se tranquillisent au souvenir d'Allah. N'est-ce point par le souvenir d'Allah que se tranquillisent les coeurs?",
      theme: "lacher-prise",
      therapeuticReflection:
        "Le SOUVENIR d'Allah est la cle de la tranquillite du coeur. En therapi, il peut etre utilise comme ancre de pleine conscience pour lacher les pensees anxieuses.",
    },
  ],

  // ============================================================
  // CATEGORIE 9 : AMOUR (8 versets)
  // ============================================================
  amour: [
    {
      id: "amo-1",
      reference: "5:54",
      arabic: "يُحِبُّهُمْ وَيُحِبُّونَهُ أَذِلَّةٍ عَلَى الْمُؤْمِنِينَ أَعِزَّةٍ عَلَى الْكَافِرِينَ",
      french: "Il les aime et ils L'aiment, humbles envers les croyants, fiers envers les mecreants.",
      theme: "amour",
      therapeuticReflection:
        "L'amour MUTUEL entre Allah et le croyant est au coeur de la sante emotionnelle. Ce verset decrit un equilibre entre humilite et dignite qui est essentiel en therapi des relations.",
    },
    {
      id: "amo-2",
      reference: "21:107",
      arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
      french: "Nous ne t'avons envoye que comme misericorde pour les mondes.",
      theme: "amour",
      therapeuticReflection:
        "Le Prophete est une MISERICORDE universelle. Ce verset inspire les patients a developper une compassion vaste qui inclut soi-meme et les autres.",
    },
    {
      id: "amo-3",
      reference: "85:14",
      arabic: "وَهُوَ الْغَفُورُ الْوَدُودُ",
      french: "Et Il est le Pardonneur, le Plein d'amour.",
      theme: "amour",
      therapeuticReflection:
        "Allah est LUI-MEME decrit comme le Plein d'amour. Ce verset aide les patients ayant des blessures d'attachement a se reconnecter a une image d'amour inconditionnel.",
    },
    {
      id: "amo-4",
      reference: "30:21",
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
      french: "Et parmi Ses signes: Il a cree pour vous, a partir de vous-memes, des epouses pour que vous trouviez la tranquillite aupres d'elles, et Il a etabli entre vous affection et misericorde.",
      theme: "amour",
      therapeuticReflection:
        "L'amour conjugal est un SIGNE divin fonde sur la tranquillite, l'affection et la misericorde. Ce verset est utilise en therapi de couple comme modele relationnel.",
    },
    {
      id: "amo-5",
      reference: "7:199",
      arabic: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
      french: "Accepte le pardon, ordonne le convenable et eloigne-toi des ignorants.",
      theme: "amour",
      therapeuticReflection:
        "L'amour VRAI implique de savoir pardonner et s'eloigner de l'ignorance. Ce verset offre une reponse therapeutique aux relations toxiques.",
    },
    {
      id: "amo-6",
      reference: "9:71",
      arabic: "وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ يَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ",
      french: "Les croyants et les croyantes sont allies les uns des autres. Ils ordonnent le convenable, interdisent le blamable.",
      theme: "amour",
      therapeuticReflection:
        "L'ALLIANCE entre croyants est une forme d'amour communautaire. Ce verset encourage la creation de reseaux de soutien mutuel, essentiels en therapi.",
    },
    {
      id: "amo-7",
      reference: "59:9",
      arabic: "وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
      french: "Ils prefèrent les autres a eux-memes, meme s'il y a penurie parmi eux.",
      theme: "amour",
      therapeuticReflection:
        "Ce verset illustre l'altruisme SUPREME. En therapi, il aide a cultiver la generosite emotionnelle et a combattre l'egoisme destructeur.",
    },
    {
      id: "amo-8",
      reference: "24:22",
      arabic: "وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ",
      french: "Qu'ils pardonnent et passent sur les fautes. N'aimez-vous pas qu'Allah vous pardonne?",
      theme: "amour",
      therapeuticReflection:
        "Le pardon est un ACTE D'AMOUR envers soi-meme autant que vers les autres. Ce verset lie directement l'amour de soi au pardon accorde aux autres.",
    },
  ],

  // ============================================================
  // CATEGORIE 10 : SAGESSE (8 versets)
  // ============================================================
  sagesse: [
    {
      id: "sag-1",
      reference: "20:114",
      arabic: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
      french: "Et dis: O mon Seigneur, augmente mes connaissances.",
      theme: "sagesse",
      therapeuticReflection:
        "L'appel a accroitre le savoir est la PRIERE du croyant le plus instruit. Ce verset encourage une attitude d'apprentissage permanent, vitale en therapi.",
    },
    {
      id: "sag-2",
      reference: "2:269",
      arabic: "يُؤْتِي الْحِكْمَةَ مَنْ يَشَاءُ ۚ وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
      french: "Il accorde la sagesse a qui Il veut. Et quiconque recoit la sagesse a recu un bien immense.",
      theme: "sagesse",
      therapeuticReflection:
        "La sagesse est un BIEN IMMERSE aux yeux d'Allah. Ce verset valorise l'intelligence emotionnelle et spirituelle, des composantes cles de la therapi.",
    },
    {
      id: "sag-3",
      reference: "18:66",
      arabic: "قَالَ لَهُ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰ أَنْ تُعَلِّمَنِي مِمَّا عُلِّمْتَ رُشْدًا",
      french: "Moise lui dit: Puis-je te suivre pour que tu m'enseignes de ce qu'on t'a enseigne de bien dirige?",
      theme: "sagesse",
      therapeuticReflection:
        "L'HUMILITE de Moise, le plus grand prophete, cherchant a apprendre d'un serviteur est un MODELE therapeutique. La sagesse necessite de reconnaitre ses propres limites.",
    },
    {
      id: "sag-4",
      reference: "31:12-19",
      arabic: "وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ",
      french: "Nous avions accorde la sagesse a Luqman: Sois reconnaissant envers Allah.",
      theme: "sagesse",
      therapeuticReflection:
        "Luqman est le SYMBOLE de la sagesse pratique. Ses conseils a son fils constituent un guide therapeutique complet sur les relations, l'humilite et la perseverance.",
    },
    {
      id: "sag-5",
      reference: "28:14",
      arabic: "وَلَمَّا بَلَغَ أَشُدَّهُ وَاسْتَوَىٰ آتَيْنَاهُ حُكْمًا وَعِلْمًا",
      french: "Lorsqu'il atteignit sa maturite et qu'il fut plein de vigueur, Nous lui donnames la sagesse et la science.",
      theme: "sagesse",
      therapeuticReflection:
        "La sagesse vient avec la MATURITE et l'experience. Ce verset est encourageant pour les patients qui se sentent immatures ou insuffisants intellectuellement.",
    },
    {
      id: "sag-6",
      reference: "38:29",
      arabic: "كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ",
      french: "Un Livre beni que Nous avons fait descendre vers toi, afin qu'ils meditent sur ses versets et que les doues d'intelligence s'y souviennent.",
      theme: "sagesse",
      therapeuticReflection:
        "La MEDITATION sur les versets est la voie vers la sagesse. Ce verset fonde la tadabbur comme pratique therapeutique de reflexion profonde.",
    },
    {
      id: "sag-7",
      reference: "6:155",
      arabic: "وَهَٰذَا كِتَابٌ أَنْزَلْنَاهُ مُبَارَكٌ فَاتَّبِعُوهُ وَاتَّقُوا لَعَلَّكُمْ تُرْحَمُونَ",
      french: "Et voici un Livre beni que Nous avons fait descendre. Suivez-le et craignez Allah afin que vous obteniez la misericorde.",
      theme: "sagesse",
      therapeuticReflection:
        "Le Coran est un GUIDE PRATIQUE pour la vie quotidienne. Ce verset encourage a suivre ses enseignements comme source de sagesse concrete et applicable.",
    },
    {
      id: "sag-8",
      reference: "96:1-5",
      arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ الَّذِي عَلَّمَ بِالْقَلَمِ عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
      french: "Lis au nom de ton Seigneur qui a cree. Qui a cree l'homme d'une adherence. Lis, et ton Seigneur est le Plus Noble. Qui a enseigne par la plume. A enseigne a l'homme ce qu'il ne savait pas.",
      theme: "sagesse",
      therapeuticReflection:
        "Le PREMIER verset revele est un appel a lire et apprendre. Ce verset fonde l'importance du savoir et de l'education comme outils de transformation humaine.",
    },
  ],

  // ============================================================
  // CATEGORIE 11 : PAIX (8 versets)
  // ============================================================
  paix: [
    {
      id: "pai-1",
      reference: "59:23",
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
      french: "C'est Lui Allah. Point de divinite a part Lui, le Souverain, le Pur, la Paix.",
      theme: "paix",
      therapeuticReflection:
        "Allah LUI-MEME est appele la Paix. Ce verset enseigne que la paix ULTIME se trouve dans la connexion divine, un concept central en therapi islamique.",
    },
    {
      id: "pai-2",
      reference: "20:114",
      arabic: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ",
      french: "Exalte soit Allah, le Vrai Souverain.",
      theme: "paix",
      therapeuticReflection:
        "Reconnaitre la SOUVERAINETE divine apporte une paix interieure profonde. Ce verset aide les patients a accepter l'ordre divin des choses.",
    },
    {
      id: "pai-3",
      reference: "48:4",
      arabic: "هُوَ الَّذِي أَنْزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَعَ إِيمَانِهِمْ",
      french: "C'est Lui qui a fait descendre la tranquillite dans les coeurs des croyants afin qu'ils accroissent leur foi.",
      theme: "paix",
      therapeuticReflection:
        "La SAKINA (tranquillite divine) est un don qui remplit les coeurs. Ce verset est utilise en therapi comme visualisation de la paix divine envahissant le coeur agite.",
    },
    {
      id: "pai-4",
      reference: "89:27-30",
      arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً فَادْخُلِي فِي عِبَادِي وَادْخُلِي جَنَّتِي",
      french: "O ame apaisee, retourne a ton Seigneur, satisfaite et agreee. Entre parmi Mes serviteurs. Et entre dans Mon Paradis.",
      theme: "paix",
      therapeuticReflection:
        "L'AME APaisee est le but ultime de la vie spirituelle. Ce verset offre un objectif therapeutique concret: atteindre la tranquillite interieure par la foi.",
    },
    {
      id: "pai-5",
      reference: "39:22",
      arabic: "أَفَمَنْ شَرَحَ اللَّهُ صَدْرَهُ لِلْإِسْلَامِ فَهُوَ عَلَىٰ نُورٍ مِنْ رَبِّهِ",
      french: "Est-ce que celui dont Allah a ouvert la poitrine a l'Islam et qui a ainsi une lumiere venant de son Seigneur...",
      theme: "paix",
      therapeuticReflection:
        "L'ouverture du coeur a la foi produit une LUMIERE interieure. Ce verset est une metaphore therapeutique puissante pour l'expansion de la conscience et la paix.",
    },
    {
      id: "pai-6",
      reference: "50:16",
      arabic: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
      french: "Nous avons cree l'homme et Nous savons ce que son ame lui suggere. Nous sommes plus pres de lui que sa veine jugulaire.",
      theme: "paix",
      therapeuticReflection:
        "La PROXIMITE divine est plus intime que nos propres veines. Ce verset aide les patients a ressentir une presence rassurante qui combat la solitude interieure.",
    },
    {
      id: "pai-7",
      reference: "13:28",
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      french: "N'est-ce point par le souvenir d'Allah que se tranquillisent les coeurs?",
      theme: "paix",
      therapeuticReflection:
        "Le dhikr est un OUTIL de regulation emotionnelle directement enseigne par le Coran. Ce verset fonde la pratique therapeutique du rappel comme antidote a l'agitation.",
    },
    {
      id: "pai-8",
      reference: "6:127",
      arabic: "لَهُمْ دَارُ السَّلَامِ عِنْدَ رَبِّهِمْ",
      french: "Ils auront la Demeure de la Paix aupres de leur Seigneur.",
      theme: "paix",
      therapeuticReflection:
        "La paix ETERNELLE attend les croyants. Ce verset offre une perspective a long terme qui aide a relativiser les troubles temporaires de la vie.",
    },
  ],

  // ============================================================
  // CATEGORIE 12 : PROTECTION (8 versets)
  // ============================================================
  protection: [
    {
      id: "pro-1",
      reference: "113:1-5",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      french: "Dis: Je cherche refuge aupres du Seigneur de l'aube contre le mal de ce qu'Il a cree, contre le mal de l'obscurite quand elle s'etend, contre le mal de celles qui soufflent sur les noeuds, contre le mal de l'envieux quand il envie.",
      theme: "protection",
      therapeuticReflection:
        "La sourate Al-Falaq offre une PROTECTION COMPLETE contre les differentes formes de mal. En therapi, elle est utilisee comme outil de grounding face aux angoisses diffuses.",
    },
    {
      id: "pro-2",
      reference: "114:1-6",
      arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ",
      french: "Dis: Je cherche refuge aupres du Seigneur des hommes, du Souverain des hommes, de la Divinite des hommes contre le mal du chuchoteur retrograde qui chuchote dans les poitrines des hommes, parmi les djinns et les hommes.",
      theme: "protection",
      therapeuticReflection:
        "La sourate An-Nas protege specifiquement contre les PENSEES INTRUSIVES. Ce verset est FONDAMENTAL en therapi pour les patients souffrant d'obsessions ou de waswas.",
    },
    {
      id: "pro-3",
      reference: "23:97-98",
      arabic: "وَقُلْ رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
      french: "Et dis: O mon Seigneur, je cherche refuge aupres de Toi contre les incitations des demons. Et je cherche refuge aupres de Toi, mon Seigneur, contre leur presence pres de moi.",
      theme: "protection",
      therapeuticReflection:
        "Cette invocation est une PRIERE DIRECTE de protection contre les influences negatives. Elle offre un cadre therapeutique pour les patients qui se sentent SPIRITUELLEMENT attaques.",
    },
    {
      id: "pro-4",
      reference: "7:196",
      arabic: "إِنَّ وَلِيِّيَ اللَّهُ الَّذِي نَزَّلَ الْكِتَابَ وَهُوَ يَتَوَلَّى الصَّالِحِينَ",
      french: "Mon Protecteur est Allah qui a fait descendre le Livre. C'est Lui qui protege les vertueux.",
      theme: "protection",
      therapeuticReflection:
        "Allah est le PROTECTEUR ULTIME. Ce verset aide les patients a deplacer leur confiance des protections humaines imparfaites vers le soutien divin parfait.",
    },
    {
      id: "pro-5",
      reference: "40:7-8",
      arabic: "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيُؤْمِنُونَ بِهِ وَيَسْتَغْفِرُونَ لِلَّذِينَ آمَنُوا",
      french: "Ceux qui portent le Trone et ceux qui l'entourent celebrent les louanges de leur Seigneur, croient en Lui et implorent le pardon pour ceux qui croient.",
      theme: "protection",
      therapeuticReflection:
        "Meme les anges CHERCHENT le pardon pour les croyants. Ce verset offre une perspective cosmique de protection et de soutien spirituel invisible.",
    },
    {
      id: "pro-6",
      reference: "3:173",
      arabic: "قَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      french: "Ils dirent: Allah nous suffit, quel excellent Protecteur.",
      theme: "protection",
      therapeuticReflection:
        "Cette DECLARATION de confiance est un bouclier spirituel. En therapi, elle sert d'affirmation positive pour renforcer le sentiment de securite.",
    },
    {
      id: "pro-7",
      reference: "17:80",
      arabic: "وَقُلْ رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا",
      french: "Et dis: O mon Seigneur, fais-moi entrer par une entree de verite et fais-moi sortir par une sortie de verite. Et accorde-moi de Ta part une autorite secourable.",
      theme: "protection",
      therapeuticReflection:
        "Cette priere demande une PROTECTION ACTIVE dans toutes les etapes de la vie. En therapi, elle aide les patients confrontes a des transitions difficiles.",
    },
    {
      id: "pro-8",
      reference: "21:69",
      arabic: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",
      french: "Nous dimes: O feu, sois froid et paix pour Abraham.",
      theme: "protection",
      therapeuticReflection:
        "Allah peut transformer la DESTRUCTION en protection. Ce verset est extremement puissant pour les patients qui se sentent en danger, leur rappelant que rien n'est impossible a Allah.",
    },
  ],

  // ============================================================
  // CATEGORIE 13 : RELATION-ALLAH (8 versets)
  // ============================================================
  "relation-allah": [
    {
      id: "rel-1",
      reference: "2:186",
      arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
      french: "Et lorsque Mes serviteurs t'interrogent sur Moi, Je suis certes proche. Je reponds a l'appel de celui qui M'invoque quand il M'invoque.",
      theme: "relation-allah",
      therapeuticReflection:
        "Allah DECLARE Sa proximite et Son ecoute. Ce verset est le fondement de la relation therapeutique avec le Divin, offrant un acces DIRECT et personnel.",
    },
    {
      id: "rel-2",
      reference: "50:16",
      arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
      french: "Nous sommes plus pres de lui que sa veine jugulaire.",
      theme: "relation-allah",
      therapeuticReflection:
        "La proximite divine est PLUS INTIME que notre propre corps. Ce verset cree un sentiment de connexion profonde qui combat l'isolement existentiel.",
    },
    {
      id: "rel-3",
      reference: "57:4",
      arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
      french: "Et Il est avec vous la ou que vous soyez. Et Allah observe parfaitement ce que vous faites.",
      theme: "relation-allah",
      therapeuticReflection:
        "La presence divine est OMNIPRESENTE, pas limitee a la mosque. Ce verset aide les patients a vivre leur spiritualite dans chaque aspect de leur vie quotidienne.",
    },
    {
      id: "rel-4",
      reference: "2:152",
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
      french: "Souvenez-vous de Moi, Je Me souviendrai de vous.",
      theme: "relation-allah",
      therapeuticReflection:
        "Cette RECIPROCITE entre Allah et le croyant est profondement therapeutique. Le simple fait de penser a Allah declenche une reponse divine, creant une boucle de soin mutuel.",
    },
    {
      id: "rel-5",
      reference: "40:60",
      arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
      french: "Et votre Seigneur a dit: Invoquez-Moi, Je vous repondrai.",
      theme: "relation-allah",
      therapeuticReflection:
        "C'est Allah LUI-MEME qui invite a l'invocation. Ce verset transforme la priere d'une obligation en une OPPORTUNITE de dialogue direct avec le Createur.",
    },
    {
      id: "rel-6",
      reference: "40:44",
      arabic: "فَعَلَيْكُمْ نَفْسِي لَا تَشْتَكُونِي إِلَىٰ أَحَدٍ وَإِلَيْهِ تُرْجَعُ الْأُمُورُ",
      french: "Je me confie a moi-meme quant a moi-meme. Ne me confondez avec personne. C'est a Allah que les affaires sont renvoyees.",
      theme: "relation-allah",
      therapeuticReflection:
        "Le croyant confie son destin a Allah avec SINGULARITE. Ce verset modele le depassement de la dependance aux humains au profit d'une confiance en Allah.",
    },
    {
      id: "rel-7",
      reference: "7:55-56",
      arabic: "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً",
      french: "Invoquez votre Seigneur avec humilite et dans le secret.",
      theme: "relation-allah",
      therapeuticReflection:
        "L'invocation dans le SECRET et l'humilite est une pratique therapeutique intime. Elle differencie la relation spirituelle authentique de la performance religieuse ostentatoire.",
    },
    {
      id: "rel-8",
      reference: "30:31",
      arabic: "مُنِيبِينَ إِلَيْهِ وَاتَّقُوهُ وَأَقِيمُوا الصَّلَاةَ وَلَا تَكُونُوا مِنَ الْمُشْرِكِينَ",
      french: "Revenant vers Lui, craignez-Le, accomplissez la priere et ne soyez pas parmi les associateurs.",
      theme: "relation-allah",
      therapeuticReflection:
        "Le RETOUR vers Allah est un mouvement constant du croyant. Ce verset aide les patients qui se sentent eloignes de la spiritualite a entamer un processus de reconnexion.",
    },
  ],

  // ============================================================
  // CATEGORIE 14 : COLERE (8 versets)
  // ============================================================
  colere: [
    {
      id: "col-1",
      reference: "3:134",
      arabic: "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
      french: "Ceux qui dominent leur colere et pardonnent aux gens.",
      theme: "colere",
      therapeuticReflection:
        "DOMINER sa colere est decrit comme une vertu SUPERIEURE. Ce verset est utilise en therapi de la colere comme objectif de regulation emotionnelle.",
    },
    {
      id: "col-2",
      reference: "41:34",
      arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ",
      french: "Le bien et le mal ne sont pas egaux. Repousse le mal par ce qui est meilleur. Celui qui etait ton ennemi devient alors un ami intime.",
      theme: "colere",
      therapeuticReflection:
        "Repondre au mal par le BIEN transforme les ennemis en amis. Ce verset propose une technique therapeutique avancee de desamorçage des conflits.",
    },
    {
      id: "col-3",
      reference: "42:37",
      arabic: "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
      french: "Et ceux qui evitent les peches capitaux et les turpitudes, et qui, lorsqu'ils sont en colere, pardonnent.",
      theme: "colere",
      therapeuticReflection:
        "Le pardon comme REPONSE immediate a la colere est une marque d'elevation spirituelle. Ce verset offre un modele de gestion de la colere en temps reel.",
    },
    {
      id: "col-4",
      reference: "16:126",
      arabic: "وَإِنْ عَاقَبْتُمْ فَعَاقِبُوا بِمِثْلِ مَا عُوقِبْتُمْ بِهِ ۖ وَلَئِنْ صَبَرْتُمْ لَهُوَ خَيْرٌ لِلصَّابِرِينَ",
      french: "Et si vous punissez, punissez comme vous avez ete punis. Mais si vous etes patients, c'est mieux pour les patients.",
      theme: "colere",
      therapeuticReflection:
        "Ce verset RECONNAIT le droit a la justice mais eleve la patience au-dessus de la vengeance. Il aide les patients a choisir la reponse la plus constructive face a l'injustice.",
    },
    {
      id: "col-5",
      reference: "25:63",
      arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
      french: "Les serviteurs du Tout-Misericordieux sont ceux qui marchent humblemement sur terre et qui, quand les ignorants s'adressent a eux, disent: Paix.",
      theme: "colere",
      therapeuticReflection:
        "Repondre a l'AGRESSION verbale par la paix est la marque du croyant modele. Ce verset est une technique therapeutique de desescalade emotionnelle.",
    },
    {
      id: "col-6",
      reference: "20:44",
      arabic: "فَقُولَا لَهُ قَوْلًا لَيِّنًا لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ",
      french: "Parlez-lui donc avec douceur. Peut-etre se souviendra-t-il ou craindra-t-il.",
      theme: "colere",
      therapeuticReflection:
        "Allah conseille la DOUCEUR meme face a un tyran. Ce verset enseigne que la communication non violente est plus efficace que l'agressivite.",
    },
    {
      id: "col-7",
      reference: "7:199",
      arabic: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
      french: "Accepte le pardon, ordonne le convenable et eloigne-toi des ignorants.",
      theme: "colere",
      therapeuticReflection:
        "S'ELOIGNER des personnes toxiques est une strategie validee par le Coran. Ce verset aide les patients a etablir des limites saines dans leurs relations.",
    },
    {
      id: "col-8",
      reference: "4:149",
      arabic: "إِنْ تُبْدُوا خَيْرًا أَوْ تُخْفُوهُ أَوْ تَعْفُوا عَنْ سُوءٍ فَإِنَّ اللَّهَ كَانَ عَفُوًّا قَدِيرًا",
      french: "Que vous montriez du bien ou que vous le cachiez, ou que vous pardonniez un mal, Allah est Absoluteur et Omnipotent.",
      theme: "colere",
      therapeuticReflection:
        "Allah est LUI-MEME Absoluteur, ce qui rend le pardon humain possible. Ce verset aide les patients a imiter les attributs divins pour matriser leur colere.",
    },
  ],

  // ============================================================
  // CATEGORIE 15 : EPREUVE (8 versets)
  // ============================================================
  epreuve: [
    {
      id: "epr-1",
      reference: "2:155-156",
      arabic: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ",
      french: "Nous vous eprouverons par quelque peur, faim, diminution de biens, de personnes et de recoltes.",
      theme: "epreuve",
      therapeuticReflection:
        "Les epreuves sont PRESENTESES comme inévitables et variees. Ce verset aide les patients a normaliser leurs difficultes et a les voir comme partie du plan divin.",
    },
    {
      id: "epr-2",
      reference: "90:4",
      arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي كَبَدٍ",
      french: "Nous avons certes cree l'homme dans une vie pleine de difficultes.",
      theme: "epreuve",
      therapeuticReflection:
        "La difficulte est INHERENTE a la condition humaine. Ce verset est fondamental en therapie existentielle pour normaliser la souffrance et reduire le sentiment d'injustice.",
    },
    {
      id: "epr-3",
      reference: "67:2",
      arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
      french: "Celui qui a cree la mort et la vie afin de vous eprouver pour savoir lequel de vous est le meilleur en oeuvre.",
      theme: "epreuve",
      therapeuticReflection:
        "La vie est un TEST dont le critere est la qualite des actions. Ce verset reframe les epreuves comme des OPPORTUNITES de prouver sa valeur, pas comme des punitions.",
    },
    {
      id: "epr-4",
      reference: "29:2",
      arabic: "أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يُقَالُوا آمَنُوا وَهُمْ لَا يُفْتَنُونَ",
      french: "Les gens pensent-ils qu'on les laissera dire: Nous croyons, sans qu'ils soient eprouves?",
      theme: "epreuve",
      therapeuticReflection:
        "La foi NON TESTEE est incomplete. Ce verset aide les patients en crise a voir leurs epreuves comme une VALIDATION de leur foi.",
    },
    {
      id: "epr-5",
      reference: "21:35",
      arabic: "نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ عَلَىٰ أَنْ نُبَدِّلَ أَمْثَالَكُمْ وَنُنْشِئَكُمْ فِي مَا لَا تَعْلَمُونَ",
      french: "Nous avons decree la mort parmi vous. Nous ne serons point empêches de remplacer vos semblables et de vous creer dans des formes que vous ne connaissez pas.",
      theme: "epreuve",
      therapeuticReflection:
        "Ce verset aborde la mortalite et le CHANGEMENT avec honnetete. Il aide les patients anxieux face aux pertes a accepter le cycle naturel de la vie.",
    },
    {
      id: "epr-6",
      reference: "12:7",
      arabic: "لَقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ آيَاتٌ لِلسَّائِلِينَ",
      french: "Il y a certes en Joseph et ses freres des signes pour ceux qui interrogent.",
      theme: "epreuve",
      therapeuticReflection:
        "L'histoire de Joseph est un MODELE d'epreuve suivie de triomphe. Ce verset encourage les patients a etudier les histoires coraniques comme sources d'inspiration therapeutique.",
    },
    {
      id: "epr-7",
      reference: "2:216",
      arabic: "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ",
      french: "Il se peut que vous detestiez une chose alors qu'elle est bonne pour vous.",
      theme: "epreuve",
      therapeuticReflection:
        "Ce verset INVITE a faire confiance a la sagesse divine derriere les epreuves. En therapi, il aide a developper une tolerance a l'incertitude et a la frustration.",
    },
    {
      id: "epr-8",
      reference: "103:1-3",
      arabic: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
      french: "Par le Temps. L'homme est certes en perdition.",
      theme: "epreuve",
      therapeuticReflection:
        "Le TEMPS lui-meme est temoin de la difficulte humaine. Ce verset cree une URGENCE therapeutique: il faut agir maintenant pour ne pas perdre sa vie.",
    },
  ],

  // ============================================================
  // CATEGORIE 16 : IDENTITE (8 versets)
  // ============================================================
  identite: [
    {
      id: "ide-1",
      reference: "30:30",
      arabic: "فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا لَا تَبْدِيلَ لِخَلْقِ اللَّهِ",
      french: "Oriente ton visage vers la religion de purete. Telle est la nature selon laquelle Allah a cree les humains. Pas de changement a la creation d'Allah.",
      theme: "identite",
      therapeuticReflection:
        "Chaque etre humain possede une NATURE ORIGINELLE pure. Ce verset est fondamental en therapi pour aider les patients a se reconnecter a leur essence authentique.",
    },
    {
      id: "ide-2",
      reference: "49:13",
      arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
      french: "O humains, Nous vous avons crees d'un male et d'une femelle, et avons fait de vous des nations et tribus pour que vous vous connaissiez.",
      theme: "identite",
      therapeuticReflection:
        "La DIVERSITE humaine est voulue par Allah pour la connaissance mutuelle. Ce verset combat le racisme et aide a construire une identite basee sur la dignite, pas sur l'apparence.",
    },
    {
      id: "ide-3",
      reference: "4:1",
      arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرِينَ وَنِسَاءً",
      french: "O humains, craignez votre Seigneur qui vous a crees d'une seule ame, qui a cree son epouse a partir d'elle, et qui a fait naitre de ces deux un grand nombre d'hommes et de femmes.",
      theme: "identite",
      therapeuticReflection:
        "Tous les humains partagent une ORIGINE COMMUNE. Ce verset fonde l'unite de la famille humaine et aide a combattre les sentiments de superiorite ou d'inferiorite.",
    },
    {
      id: "ide-4",
      reference: "15:26",
      arabic: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ مِنْ صَلْصَالٍ مِنْ حَمَإٍ مَسْنُونٍ",
      french: "Nous avons certes cree l'homme d'argile tiree d'une boue moulable.",
      theme: "identite",
      therapeuticReflection:
        "L'origine HUMBLE de l'homme combat l'orgueil. En therapi, ce verset aide les patients trop arrogants comme ceux trop complexes a trouver un equilibre.",
    },
    {
      id: "ide-5",
      reference: "33:35",
      arabic: "إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
      french: "Les musulmans et les musulmanes, les croyants et les croyantes...",
      theme: "identite",
      therapeuticReflection:
        "Les HOMMES ET LES FEMMES sont egaux dans la foi et la recompense divine. Ce verset est essentiel pour la construction d'une identite spirituelle EGALITAIRE.",
    },
    {
      id: "ide-6",
      reference: "95:4-6",
      arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
      french: "Nous avons certes cree l'homme dans la plus belle forme. Puis Nous l'avons ramene au plus bas niveau.",
      theme: "identite",
      therapeuticReflection:
        "Le POTENTIEL humain est immense mais la decheance est possible. Ce verset motive les patients a lutter pour atteindre leur MEILLEURE VERSION d'eux-memes.",
    },
    {
      id: "ide-7",
      reference: "17:70",
      arabic: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ وَرَزَقْنَاهُمْ مِنَ الطَّيِّبَاتِ وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِمَّنْ خَلَقْنَا تَفْضِيلًا",
      french: "Nous avons certes honore les enfants d'Adam. Nous les avons transportes sur terre et sur mer. Nous leur avons fourni de bonnes choses. Et Nous les avons preferes a beaucoup de ceux que Nous avons crees.",
      theme: "identite",
      therapeuticReflection:
        "La DIGNITE humaine est un DON divin inalienable. Ce verset est le fondement de l'estime de soi islamique et aide les patients a se revaloriser.",
    },
    {
      id: "ide-8",
      reference: "91:7-10",
      arabic: "وَنَفْسٍ وَمَا سَوَّاهَا فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا قَدْ أَفْلَحَ مَنْ زَكَّاهَا وَقَدْ خَابَ مَنْ دَسَّاهَا",
      french: "Par l'ame et Celui qui l'a equilibree. Lui a inspire son libertinage et sa piete. A reussi celui qui la purifie. A echoue celui qui la corrompt.",
      theme: "identite",
      therapeuticReflection:
        "L'ame possede une CAPACITE INTERNE de discernement entre le bien et le mal. Ce verset responsabilise le patient tout en lui donnant les cles de sa propre transformation.",
    },
  ],

  // ============================================================
  // CATEGORIE 17 : COUPLE-FAMILLE (8 versets)
  // ============================================================
  "couple-famille": [
    {
      id: "cou-1",
      reference: "30:21",
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنَوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
      french: "Et parmi Ses signes: Il a cree pour vous des epouses pour que vous trouviez la tranquillite aupres d'elles, et Il a etabli entre vous affection et misericorde.",
      theme: "couple-famille",
      therapeuticReflection:
        "Le couple est un SIGNE DIVIN fonde sur trois piliers: la tranquillite, l'affection et la misericorde. Ce verset est le cadre therapeutique de reference pour les therapies de couple.",
    },
    {
      id: "cou-2",
      reference: "2:187",
      arabic: "هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ لِبَاسٌ لَهُنَّ",
      french: "Elles sont un vetement pour vous et vous etes un vetement pour elles.",
      theme: "couple-famille",
      therapeuticReflection:
        "La metaphore du VETEMENT implique protection, intimité et chaleur. Ce verset est utilise en therapi de couple pour definir les attentes mutuelles dans le mariage.",
    },
    {
      id: "cou-3",
      reference: "25:74",
      arabic: "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      french: "Et ceux qui disent: O notre Seigneur, donne-nous de nos epouses et de nos descendants la joie des yeux.",
      theme: "couple-famille",
      therapeuticReflection:
        "La famille est une SOURCE DE JOIE quand elle est nourrie spirituellement. Ce verset encourage les couples a prier ensemble pour la harmonie familiale.",
    },
    {
      id: "cou-4",
      reference: "7:189",
      arabic: "هُوَ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَجَعَلَ مِنْهَا زَوْجَهَا لِيَسْكُنَ إِلَيْهَا",
      french: "C'est Lui qui vous a crees d'une seule ame et qui a fait de son epouse une compagne pour qu'il trouve la tranquillite aupres d'elle.",
      theme: "couple-famille",
      therapeuticReflection:
        "La COMPAGNONIE est le but du couple selon le Coran. Ce verset aide les couples en difficulte a revenir a l'essentiel: le besoin de tranquillite mutuelle.",
    },
    {
      id: "cou-5",
      reference: "4:1",
      arabic: "اتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ",
      french: "Craignez Allah au nom duquel vous vous implorez mutuellement, et craignez de rompre les liens de parente.",
      theme: "couple-famille",
      therapeuticReflection:
        "Les LIENS DE PARENTE sont sacres dans l'Islam. Ce verset est utilise en therapi familiale pour encourager la reconciliation et le respect des liens de sang.",
    },
    {
      id: "cou-6",
      reference: "31:13-14",
      arabic: "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ",
      french: "Et lorsque Luqman dit a son fils tout en l'exhortant: O mon fils, n'associe rien a Allah.",
      theme: "couple-famille",
      therapeuticReflection:
        "L'EDUCATION des enfants est une responsabilite parentale primordiale. Ce verset offre un modele de communication parentale basee sur la douceur et la sagesse.",
    },
    {
      id: "cou-7",
      reference: "12:93",
      arabic: "اذْهَبُوا بِقَمِيصِي هَٰذَا فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِي يَأْتِ بَصِيرًا",
      french: "Allez avec ma chemise et jetez-la sur le visage de mon pere, il recouvrera la vue.",
      theme: "couple-famille",
      therapeuticReflection:
        "L'histoire de Joseph montre que la RECONCILIATION familiale est toujours possible. Ce verset est utilise en therapi familiale pour les patients eloignes de leurs proches.",
    },
    {
      id: "cou-8",
      reference: "33:21",
      arabic: "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ",
      french: "Vous avez dans le Messager d'Allah un excellent modele pour quiconque espere en Allah et au Jour Dernier.",
      theme: "couple-famille",
      therapeuticReflection:
        "Le Prophete est le MODELE ABSOLU pour la vie familiale. Ce verset encourage les couples a etudier ses hadiths sur le marriage pour ameliorer leurs relations.",
    },
  ],

  // ============================================================
  // CATEGORIE 18 : DEUIL (8 versets)
  // ============================================================
  deuil: [
    {
      id: "deu-1",
      reference: "2:155-156",
      arabic: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
      french: "Nous vous eprouverons par quelque peur, faim, diminution de biens, de personnes et de recoltes. Annonce la bonne nouvelle aux patients.",
      theme: "deuil",
      therapeuticReflection:
        "La perte de proches est incluse dans les EPREUVES NORMALES de la vie. Ce verset aide les endeuilles a comprendre que leur souffrance est validee par le Coran.",
    },
    {
      id: "deu-2",
      reference: "12:86",
      arabic: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
      french: "Je ne plaints ma tristesse et mon chagrin qu'a Allah.",
      theme: "deuil",
      therapeuticReflection:
        "Jacob exprime sa douleur DEVANT ALLAH, pas devant les humains. Ce verset montre que se plaindre a Allah est permis et meme recommande dans le deuil.",
    },
    {
      id: "deu-3",
      reference: "28:9",
      arabic: "وَقَالَتِ امْرَأَتُ فِرْعَوْنَ قُرَّتُ عَيْنٍ لِي وَلَكَ لَا تَقْتُلُوهُ",
      french: "Et la femme de Pharaon dit: Il sera la joie de mon oeil et du tien. Ne le tuez pas.",
      theme: "deuil",
      therapeuticReflection:
        "Ce verset montre comment un ENFANT peut etre source de guerison emotionnelle. En therapi du deuil, il rappelle que la vie continue et apporte de nouvelles joies.",
    },
    {
      id: "deu-4",
      reference: "12:93",
      arabic: "اذْهَبُوا بِقَمِيصِي هَٰذَا فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِي يَأْتِ بَصِيرًا",
      french: "Allez avec ma chemise et jetez-la sur le visage de mon pere, il recouvrera la vue.",
      theme: "deuil",
      therapeuticReflection:
        "Le RETROUVAILLE familial apres des annees de separation est une image de guerison du deuil. Ce verset offre un espoir concret de reconnection apres la perte.",
    },
    {
      id: "deu-5",
      reference: "2:156-157",
      arabic: "الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِنْ رَبِّهِمْ وَرَحْمَةٌ",
      french: "Ceux qui disent quand une affliction les touche: Nous appartenons a Allah et a Lui nous retournons. Ceux-la ont des benedictions de leur Seigneur ainsi que la misericorde.",
      theme: "deuil",
      therapeuticReflection:
        "La phrase ISTIRJA est le premier outil de deuil en Islam. Elle offre un cadre SPIRITUEL pour transformer la douleur en acceptation et esperance.",
    },
    {
      id: "deu-6",
      reference: "57:22-23",
      arabic: "لَا مُصِيبَةً إِلَّا بِإِذْنِ اللَّهِ",
      french: "Nulle affliction n'arrive sans la permission d'Allah.",
      theme: "deuil",
      therapeuticReflection:
        "Chaque perte a une PERMISSION divine. Ce verset ne minimise pas la douleur mais lui donne un SENS dans le cadre de la sagesse divine.",
    },
    {
      id: "deu-7",
      reference: "103:1-3",
      arabic: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      french: "Par le Temps. L'homme est en perdition, sauf ceux qui croient, font le bien et se recommandent la patience.",
      theme: "deuil",
      therapeuticReflection:
        "Le TEMPS et la patience sont les remedes a la perte. Ce verset aide les endeuilles a comprendre que la guerison est un PROCESSUS qui necessite du temps.",
    },
    {
      id: "deu-8",
      reference: "35:34",
      arabic: "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ",
      french: "Et ils diront: Louange a Allah qui a eloigne de nous la tristesse.",
      theme: "deuil",
      therapeuticReflection:
        "Un jour, la TRISTESSE sera completement eloignee. Ce verset offre l'esperance ULTIME pour les patients en deuil, une promesse divine de soulagement futur.",
    },
  ],

  // ============================================================
  // CATEGORIE 19 : ANXIETE (8 versets)
  // ============================================================
  anxiete: [
    {
      id: "anx-1",
      reference: "40:44",
      arabic: "فَعَلَيْكُمْ نَفْسِي لَا تَشْتَكُونِي إِلَىٰ أَحَدٍ وَإِلَيْهِ تُرْجَعُ الْأُمُورُ",
      french: "Je me confie a moi-meme. Ne me plaignez pas aupres de quiconque. C'est a Allah que les affaires sont renvoyees.",
      theme: "anxiete",
      therapeuticReflection:
        "Confier ses affaires a Allah est un ANTIDOTE a l'anxiete. Ce verset modele le transfert de l'anxiete de l'esprit humain vers la confiance divine.",
    },
    {
      id: "anx-2",
      reference: "3:139",
      arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
      french: "Ne vous laissez pas abattre et ne vous affligez pas alors que vous etes les superieurs.",
      theme: "anxiete",
      therapeuticReflection:
        "Ce verset est un DIRECTIVE contre la demoralisation. En therapi de l'anxiete, il aide a contrer les pensees catastrophiques par une perspective plus juste.",
    },
    {
      id: "anx-3",
      reference: "94:5-6",
      arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      french: "Avec la difficulte vient la facilite. Avec la difficulte vient la facilite.",
      theme: "anxiete",
      therapeuticReflection:
        "La facilite est MENTIONNEE DEUX FOIS pour une raison. Ce verset est l'ancre la plus puissante contre l'anxiete, affirmant que le soulagement est inevitable.",
    },
    {
      id: "anx-4",
      reference: "10:62-64",
      arabic: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      french: "Les allies d'Allah n'ont ni crainte ni tristesse.",
      theme: "anxiete",
      therapeuticReflection:
        "L'alliance avec Allah ELIMINE la peur et la tristesse. Ce verset est une promesse therapeutique que la proximite divine est le remede a l'anxiete.",
    },
    {
      id: "anx-5",
      reference: "29:69",
      arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
      french: "Quant a ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers.",
      theme: "anxiete",
      therapeuticReflection:
        "L'EFFORT spirituel est garanti d'etre guide. Ce verset aide les patients anxieux a transformer leur inquietude en action concrete vers Allah.",
    },
    {
      id: "anx-6",
      reference: "13:28",
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      french: "N'est-ce point par le souvenir d'Allah que se tranquillisent les coeurs?",
      theme: "anxiete",
      therapeuticReflection:
        "Le dhikr est un ANTIDOTE DIRECT a l'anxiete enseigne par le Coran. Ce verset fonde la pratique du rappel comme technique de regulation du systeme nerveux.",
    },
    {
      id: "anx-7",
      reference: "48:4",
      arabic: "هُوَ الَّذِي أَنْزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ",
      french: "C'est Lui qui a fait descendre la tranquillite dans les coeurs des croyants.",
      theme: "anxiete",
      therapeuticReflection:
        "La SAKINA est une grace divine qui AGIT directement sur les coeurs. Ce verset assure les patients anxieux qu'ils peuvent recevoir une paix qui depasse l'entendement humain.",
    },
    {
      id: "anx-8",
      reference: "16:106",
      arabic: "مَنْ كَفَرَ بِاللَّهِ مِنْ بَعْدِ إِيمَانِهِ إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ",
      french: "Quiconque a renie Allah apres avoir cru, sauf celui qui y a ete contraint et dont le coeur est resté paisible dans la foi.",
      theme: "anxiete",
      therapeuticReflection:
        "La PAIX interieure du coeur est la mesure de la foi authentique, meme sous pression. Ce verset aide les patients dont la foi est ebranlee par l'anxiete a se rassurer.",
    },
  ],

  // ============================================================
  // CATEGORIE 20 : TRANSFORMATION (8 versets)
  // ============================================================
  transformation: [
    {
      id: "tra-1",
      reference: "13:11",
      arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
      french: "Allah ne change pas l'etat d'un peuple tant qu'ils ne changent pas ce qu'il y a en eux-memes.",
      theme: "transformation",
      therapeuticReflection:
        "Ce verset est la LOI FONDAMENTALE du changement en Islam. Il responsabilise le patient en affirmant que la transformation commence toujours par un changement INTERNE.",
    },
    {
      id: "tra-2",
      reference: "8:53",
      arabic: "ذَٰلِكَ بِأَنَّ اللَّهَ لَمْ يَكُ مُغَيِّرًا نِعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
      french: "C'est parce qu'Allah ne change pas un bienfait dont Il a comble un peuple tant qu'ils ne changent pas ce qu'il y a en eux-memes.",
      theme: "transformation",
      therapeuticReflection:
        "Le CHANGEMENT NEGATIF aussi resulte d'un choix interne. Ce verset aide les patients a comprendre que la regression est aussi un processus qu'ils peuvent inverser.",
    },
    {
      id: "tra-3",
      reference: "66:8",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا عَسَىٰ رَبُّكُمْ أَنْ يُكَفِّرَ عَنْكُمْ سَيِّئَاتِكُمْ",
      french: "O vous qui croyez, repentez-vous a Allah d'un repentir sincere. Il se peut que votre Seigneur efface vos mauvaises actions.",
      theme: "transformation",
      therapeuticReflection:
        "Le repentir SINCERE est le moteur de la transformation spirituelle. Ce verset offre un espoir concret de changement meme apres les pires erreurs.",
    },
    {
      id: "tra-4",
      reference: "35:16",
      arabic: "إِنْ يُرِدْكُمْ بِخَيْرٍ فَلَا مَرَدَّ لِفَضْلِهِ",
      french: "S'Il vous veut du bien, personne ne peut repousser Sa grace.",
      theme: "transformation",
      therapeuticReflection:
        "La GRACE divine est irresistible quand Allah decide le bien. Ce verset encourage les patients a croire que la transformation positive est possible meme quand tout semble bloque.",
    },
    {
      id: "tra-5",
      reference: "57:16",
      arabic: "أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ",
      french: "Le moment n'est-il pas venu pour ceux qui ont cru de laisser leurs coeurs s'humilier au souvenir d'Allah?",
      theme: "transformation",
      therapeuticReflection:
        "Ce verset est un REVEIL spirituel pour ceux qui sont devenus insensibles. En therapi, il aide les patients a prendre conscience du besoin de changement.",
    },
    {
      id: "tra-6",
      reference: "39:22",
      arabic: "أَفَمَنْ شَرَحَ اللَّهُ صَدْرَهُ لِلْإِسْلَامِ فَهُوَ عَلَىٰ نُورٍ مِنْ رَبِّهِ",
      french: "Celui dont Allah a ouvert la poitrine a l'Islam et qui a ainsi une lumiere venant de son Seigneur.",
      theme: "transformation",
      therapeuticReflection:
        "L'OUVERTURE du coeur est un don divin qui suit la recherche sincere. Ce verset encourage les patients a demander cette grace dans leurs prieres.",
    },
    {
      id: "tra-7",
      reference: "59:18-19",
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ",
      french: "O vous qui croyez, craignez Allah. Que chaque ame regarde ce qu'elle a avance pour demain.",
      theme: "transformation",
      therapeuticReflection:
        "L'AUTO-EVALUATION est le premier pas de la transformation. Ce verset encourage un examen de conscience regulier, pratique cle en therapi cognitive.",
    },
    {
      id: "tra-8",
      reference: "24:55",
      arabic: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ",
      french: "Allah a promis a ceux d'entre vous qui croient et font de bonnes oeuvres qu'Il leur donnera la succession sur terre.",
      theme: "transformation",
      therapeuticReflection:
        "La PROMESSE divine de succession est liee a la foi ET l'action. Ce verset motive les patients a combiner la spiritualite avec l'action concrete pour transformer leur vie.",
    },
  ],
};

// Exporter tous les versets sous forme de tableau plat
export const tousLesVersets: VerseEtendu[] = Object.values(
  versetsParCategorie
).flat();
