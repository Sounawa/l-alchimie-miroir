export interface FicheVerset {
  id: number;
  verseArabic: string;
  verseFrench: string;
  reference: string;
  theme: string;
  mirrorVersion: string;
  fanaExercise: string;
  journalingPrompt: string;
  affirmation: string;
}

export const fichesVersets: FicheVerset[] = [
  // CONFIANCE (2)
  {
    id: 1,
    verseArabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',
    verseFrench: 'Ne vous laissez pas abattre, ne vous affligez pas alors que vous êtes les supérieurs, si vous êtes de vrais croyants.',
    reference: '3:139',
    theme: 'confiance',
    mirrorVersion:
      'Ce verset me révèle que mon abattement actuel n\'est pas mon état définitif. Il me montre que je me sous-estime quand je me crois faible, alors que la foi en moi porte une force que j\'ai oubliée. La supériorité dont parle ce verset n\'est pas l\'arrogance mais la dignité intérieure que je possède déjà mais que je refuse de voir.',
    fanaExercise:
      'Asseyez-vous dans une posture confortable, le dos droit, les mains posées sur les genoux. Fermez les yeux et prenez trois respirations profondes en comptant quatre temps à l\'inspiration et six temps à l\'expiration. Imaginez maintenant que votre coeur est un espace vaste et lumineux, comme une chambre baignée de soleil. Visualisez un endroit de votre vie où vous vous sentez actuellement faible ou abattu. Voyez cette sensation de faiblesse comme un nuage gris qui flotte dans cet espace lumineux. Ne cherchez pas à le dissiper. Observez-le simplement avec bienveillance. Puis, doucement, amenez le verset à l\'intérieur de cet espace. Laissez les mots « Ne vous laissez pas abattre » résonner dans votre coeur comme une voix bienveillante qui vous parle directement. Ressentez comment cette parole vient toucher le nuage gris sans le détruire mais en le transformant progressivement en lumière. Restez dans cette contemplation pendant cinq minutes. Si des pensées distrayantes surgissent, ramenez doucement votre attention sur la sensation de lumière dans votre coeur. Puis, dans un mouvement intérieur, imaginez que vous vous levez, que vous vous tenez debout dans cette chambre lumineuse. Ressentez la solidité de vos pieds sur le sol, la droiture de votre colonne vertébrale, la dignité de votre posture. C\'est la « supériorité » spirituelle dont parle le verset : non pas la domination sur les autres mais la verticalité de votre être face aux épreuves. Restez dans cette posture intérieure quelques instants puis terminez par une expiration profonde et lente.',
    journalingPrompt:
      'Dans quel domaine de ma vie ai-je tendance à me sous-estimer ? Si je croyais vraiment que la force est déjà en moi, quelle décision prendrais-je aujourd\'hui ?',
    affirmation: 'Je possède en moi une force que les circonstances ne peuvent pas éteindre.',
  },
  {
    id: 2,
    verseArabic: 'أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
    verseFrench: 'Les alliés d\'Allah ne connaîtront ni la peur ni la tristesse.',
    reference: '10:62',
    theme: 'confiance',
    mirrorVersion:
      'Ce verset m\'interpelle sur ma relation avec la peur et la tristesse qui habitent mon quotidien. Il me révèle que mon angoisse vient peut-être d\'un sentiment d\'abandon que je ressens au plus profond de moi, alors que je suis en réalité soutenu. Le verset me montre que la proximité divine est un bouclier invisible que je ne vois pas encore mais qui est bien réel.',
    fanaExercise:
      'Installez-vous dans un endroit calme et prenez position assise, les yeux fermés. Commencez par trois respirations lentes et profondes pour calmer le corps et l\'esprit. Imaginez que vous vous tenez au bord d\'un océan immense et paisible. L\'eau est d\'un bleu profond et la surface est parfaitement calme. Chaque vague qui arrive doucement sur le sable représente une de vos peurs ou un chagrin que vous portez en ce moment. Nommez intérieurement cette peur ou ce chagrin. Puis, regardez au-delà de l\'océan, vers l\'horizon. Là-bas, une lumière dorée se lève doucement, comme un soleil qui apporte sa chaleur bienveillante sur l\'eau. Cette lumière représente la présence divine qui veille sur vous, le statut de « allié d\'Allah » que le verset mentionne. Sentez comment cette lumière vient progressivement réchauffer votre corps, dissipant le froid de la peur et de la tristesse. Laissez cette sensation de chaleur se diffuser dans votre poitrine, puis dans vos bras, puis dans tout votre être. Récitez intérieurement les mots du verset : « Pas de peur sur eux, pas de tristesse pour eux. » Laissez ces mots devenir un mantra que votre coeur répète naturellement, au rythme de votre respiration. À chaque inspiration, accueillez la confiance. À chaque expiration, relâchez une tension liée à la peur. Restez dans cet état de réception pendant au moins dix minutes. Si votre esprit s\'égare, ne vous jugez pas et ramenez simplement votre attention sur la lumière dorée au-dessus de l\'océan et sur les mots du verset. Pour clôturer l\'exercice, prenez une grande inspiration, ouvrez les yeux lentement et prenez un moment pour noter ce que vous avez ressenti.',
    journalingPrompt:
      'Quelle est la peur la plus profonde que je porte en ce moment ? Comment ma vie serait-elle différente si je savais que je suis soutenu d\'une manière que je ne vois pas encore ?',
    affirmation: 'Je suis entouré d\'une protection que je ne vois pas toujours mais qui ne me quitte jamais.',
  },

  // PATIENCE (2)
  {
    id: 3,
    verseArabic: 'وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
    verseFrench: 'Et annonce la bonne nouvelle aux patients, ceux qui, lorsqu\'une épreuve les atteint, disent : « Nous appartenons à Allah et c\'est à Lui que nous retournons. »',
    reference: '2:155-156',
    theme: 'patience',
    mirrorVersion:
      'Ce verset me montre que la patience n\'est pas une endurance passive mais une posture spirituelle active. Quand je dis « Nous appartenons à Allah », je reconnais que ma vie ne m\'appartient pas entièrement et que cela libère en moi un espace de lâcher-prise. Ce verset me révèle que je m\'accroche à ce que je crois posséder alors que tout est déjà entre des mains plus sûres que les miennes.',
    fanaExercise:
      'Asseyez-vous confortablement, le dos droit, les épaules détendues. Fermez les yeux et commencez par prendre conscience de votre respiration naturelle sans chercher à la modifier pendant une minute. Puis amenez votre attention sur une épreuve que vous traversez actuellement. Ne cherchez pas à analyser cette épreuve, contentez-vous de ressentir l\'émotion qu\'elle suscite en vous : tristesse, frustration, angoisse ou confusion. Accueillez cette émotion sans chercher à la modifier. Imaginez maintenant que vous tenez dans vos mains ouvertes tout ce qui vous préoccupe, comme si vous teniez des pierres. Regardez ces pierres avec attention : chacune représente un souci, une douleur, une incertitude. Puis, lentement et délicatement, ouvrez vos mains et laissez ces pierres tomber doucement au sol. Ce geste symbolique accompagne la parole « Nous appartenons à Allah et c\'est à Lui que nous retournons ». Répétez cette parole lentement, trois fois, en sentant à chaque répétition un poids qui se lève de vos épaules. Imaginez que vos mains vides sont maintenant disponibles pour recevoir autre chose : la paix, la sérénité, la confiance. Restez les mains ouvertes pendant quelques instants, dans cette posture de disponibilité et de confiance. Sentez la différence entre l\'état de tension où vous reteniez tout dans vos poings fermés et l\'état de détente où vos mains sont ouvertes. Laissez cette sensation d\'ouverture se diffuser dans tout votre corps. Puis prenez trois respirations profondes et terminez l\'exercice en murmurant « Alhamdulillah » avec gratitude.',
    journalingPrompt:
      'Qu\'est-ce que je m\'acharne à contrôler dans ma vie en ce moment ? Si je remettais vraiment cette situation entre les mains du Divin, comment me sentirais-je ?',
    affirmation: 'Je lâche prise sur ce qui me dépasse et je fais confiance au processus de la vie.',
  },
  {
    id: 4,
    verseArabic: 'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ',
    verseFrench: 'Ceux qui sont patients recevront leur récompense sans mesure.',
    reference: '39:10',
    theme: 'patience',
    mirrorVersion:
      'Ce verset me révèle que ma patience est vue et comptée d\'une manière que je ne peux pas imaginer. Trop souvent je pense que ma souffrance est invisible et inutile, mais ce verset me dit le contraire. Il me montre aussi que la récompense n\'est pas seulement dans l\'au-delà : elle commence dans la transformation que la patience opère déjà en moi, me rendant plus profond et plus sage que je ne l\'étais avant l\'épreuve.',
    fanaExercise:
      'Trouvez un endroit paisible et asseyez-vous en tailleur ou sur une chaise, le dos droit et les mains posées sur vos cuisses. Fermez les yeux et prenez cinq respirations lentes et profondes. Imaginez maintenant que vous êtes dans un jardin magnifique au printemps. Autour de vous, des fleurs de toutes les couleurs éclosent doucement. Chaque fleur représente un moment de patience dans votre vie. Certaines sont grandes et éclatantes, d\'autres sont petites et délicates, mais toutes sont précieuses. Marchez mentalement dans ce jardin et contemplez ces fleurs. Approchez-vous de celle qui représente l\'épreuve que vous vivez actuellement. Regardez-la avec attention : elle est peut-être encore en bouton, pas encore éclose, mais la sève qui monte en elle est bien réelle. Sentez l\'énergie de la patience comme une sève vivante qui coule dans cette fleur et dans votre propre corps. Cette sève est la promesse du verset : la récompense sans mesure. Elle n\'est pas visible encore, mais elle est en train de croître en vous. Placez votre main sur votre coeur et sentez votre propre battement, ce rythme patient et constant qui n\'a jamais cessé de vous accompagner. Chaque battement est un acte de patience. Récitez lentement le verset en vous-même et laissez chaque mot se poser dans votre coeur comme une goutte de rosée sur la fleur. Restez dans cette contemplation pendant dix à quinze minutes. Quand vous êtes prêt, remerciez intérieurement pour ce moment de connexion et ouvrez les yeux lentement.',
    journalingPrompt:
      'Quels sont les moments de ma vie où ma patience a finalement porté ses fruits ? Comment puis-je honorer ma patience actuelle comme une graine qui pousse ?',
    affirmation: 'Ma patience est une semence invisible qui porte déjà en elle le fruit de ma transformation.',
  },

  // GUERISON (2)
  {
    id: 5,
    verseArabic: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ',
    verseFrench: 'Et Nous faisons descendre du Coran ce qui est guérison et miséricorde pour les croyants.',
    reference: '17:82',
    theme: 'guerison',
    mirrorVersion:
      'Ce verset me rappelle que la guérison que je cherche à l\'extérieur se trouve déjà dans la Parole que je porte en moi. Il me révèle que ma blessure n\'est pas une impasse mais un appel à aller plus profond dans ma relation avec le Coran. Le verset me montre aussi que la guérison et la miséricorde vont ensemble : je ne peux pas guérir sans apprendre la douceur envers moi-même.',
    fanaExercise:
      'Installez-vous dans un espace calme et confortable. Asseyez-vous avec le dos droit, les yeux fermés, et commencez par respirer naturellement pendant quelques instants. Quand vous vous sentez prêt, amenez votre attention sur la partie de votre corps ou de votre coeur qui porte une blessure ou une douleur, qu\'elle soit physique ou émotionnelle. Ne cherchez pas à nommer cette douleur avec précision, contentez-vous de ressentir sa présence en vous. Imaginez maintenant que cette douleur est comme une terre sèche et craquelée qui a besoin d\'eau. Puis visualisez une source d\'eau claire et lumineuse qui jaillit doucement de votre coeur. Cette eau représente le Coran, la guérison et la miséricorde dont parle le verset. Regardez cette eau couler lentement vers la terre sèche de votre blessure. Voyez comment elle pénètre dans les fissures, comment elle humidifie la terre aride, comment elle apporte la vie là où il n\'y avait que la sécheresse. Sentez physiquement cette sensation d\'apaisement se diffuser dans la zone de votre douleur. Laissez l\'eau couler pendant plusieurs minutes. Chaque goutte est un verset, une parole de guérison qui vient toucher précisément là où vous avez besoin d\'être soigné. Récitez intérieurement « Chifa, Chifa, Chifa » (guérison, guérison, guérison) à chaque inspiration, comme un souffle de vie qui pénètre en vous. Puis, quand vous sentez que la terre est suffisamment arrosée, imaginez qu\'une petite pousse verte commence à émerger de cette terre humidifiée. C\'est le signe que la guérison est en marche, pas encore complète, mais bien réelle. Restez avec cette image de la petite pousse pendant quelques instants. Contemplez-la avec espoir et tendresse. Terminez l\'exercice en plaçant vos mains sur votre coeur et en disant silencieusement « Ô Toi qui guéris, guéris-moi par Ta miséricorde. »',
    journalingPrompt:
      'Quelle est la blessure que je porte depuis le plus longtemps ? Comment pourrais-je approcher cette blessure avec plus de douceur et de miséricorde envers moi-même ?',
    affirmation: 'La guérison coule en moi comme une source invisible qui ne s\'arrête jamais.',
  },
  {
    id: 6,
    verseArabic: 'الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ ۝ وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ ۝ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ',
    verseFrench: 'Celui qui m\'a créé, c\'est Lui qui me guide. C\'est Lui qui me nourrit et me donne à boire. Et quand je suis malade, c\'est Lui qui me guérit.',
    reference: '26:78-80',
    theme: 'guerison',
    mirrorVersion:
      'Ce verset d\'Ibrahim me révèle que la guérison ne vient pas de mes propres efforts mais d\'une Source qui m\'a créé et qui connaît chaque cellule de mon corps. Il me montre que je m\'en remets souvent à des solutions extérieures en oubliant que le Guérisseur suprême est Celui qui a façonné mon être. Quand je dis « c\'est Lui qui me guérit », je reconnais humblement que je ne suis pas l\'auteur de ma propre guérison.',
    fanaExercise:
      'Mettez-vous dans un endroit calme, assis confortablement avec le dos droit. Fermez les yeux et prenez trois respirations profondes pour installer le calme. Imaginez que vous êtes dans une pièce baignée d\'une lumière douce et chaude. Au centre de cette pièce se trouve un siège confortable, et quelqu\'un d\'invisible mais dont vous ressentez la présence bienveillante est assis à côté de vous. Cette présence est celle du Guérisseur, Celui qui vous a créé et qui vous connaît mieux que vous-même. Ressentez cette proximité sans chercher à la voir. Imaginez que cette main invisible se pose délicatement sur la partie de vous qui souffre, qu\'il s\'agisse du corps ou du coeur. Sentez la chaleur de cette main, sa douceur, sa connaissance précise de votre douleur. Elle ne presse pas, ne force pas, elle est simplement là, présente et attentive. Laissez cette sensation de soin envahir lentement tout votre être. Imaginez que cette main envoie une lumière guérisseuse qui pénètre dans les profondeurs de votre être, atteignant les endroits que personne d\'autre ne peut atteindre. Restez dans cette réception pendant au moins dix minutes. Si des pensées surgissent, accueillez-les sans vous y attacher et ramenez votre attention sur la sensation de la main bienveillante sur votre coeur. Puis répétez lentement les paroles d\'Ibrahim : « C\'est Lui qui me guérit. C\'est Lui qui me guérit. C\'est Lui qui me guérit. » Laissez ces mots résonner dans chaque fibre de votre corps. Pour terminer, ouvrez lentement les yeux en gardant cette sensation de présence et de soin avec vous.',
    journalingPrompt:
      'En qui ou en quoi ai-je placé ma confiance pour ma guérison jusqu\'à présent ? Comment pourrais-je ouvrir mon coeur à la guérison qui vient d\'une Source plus profonde ?',
    affirmation: 'Mon corps et mon coeur sont entre les mains du Meilleur des Guérisseurs.',
  },

  // PARDON (2)
  {
    id: 7,
    verseArabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
    verseFrench: 'Ceux qui dominent leur colère et qui pardonnent aux gens. Et Allah aime les bienfaisants.',
    reference: '3:134',
    theme: 'pardon',
    mirrorVersion:
      'Ce verset me révèle que le pardon est un acte de force et non de faiblesse. Le mot « dominent » me montre que la colère est naturelle mais qu\'elle peut être maîtrisée. Il me confronte aussi au fait que mon refus de pardonner ne protège pas mon coeur, il le emprisonne. Le verset m\'invite à être bienfaisant non seulement envers moi-même mais envers ceux qui m\'ont blessé, libérant ainsi un espace de paix en moi.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez cinq respirations profondes pour calmer votre système nerveux. Quand vous êtes prêt, amenez à votre esprit une personne que vous avez du mal à pardonner. Ne cherchez pas à minimiser ce qu\'elle vous a fait, mais ne vous laissez pas non plus submerger par l\'émotion. Observez simplement les sentiments qui montent en vous : colère, tristesse, injustice, amertume. Accueillez-les comme vous accueilleriez un visiteur que vous n\'avez pas invité mais que vous ne pouvez pas non plus ignorer. Imaginez maintenant que vous tenez dans votre main droite une corde nouée qui vous relie à cette personne. Chaque noeud représente une blessure, un ressentiment, une accusation. Regardez cette corde avec attention et honnêteté. Puis, lentement, avec votre main gauche, commencez à défaire les noeuds un par un. Ce n\'est pas effacer ce qui s\'est passé, c\'est libérer votre propre main de cette emprise. À chaque noeud défait, respirez profondément et relâchez une tension dans votre corps. Quand tous les noeuds sont défaits, imaginez que vous posez délicatement la corde sur le sol et que vous vous en détournez. Ce geste ne signifie pas que vous avez oublié, mais que vous choisissez de ne plus être lié. Récitez lentement le verset : « Ils pardonnent aux gens. » Ressentez la légèreté qui accompagne ce geste de libération intérieure. Restez dans cette sensation d\'allègement pendant quelques minutes. Terminez en demandant intérieurement à Allah de vous aider à maintenir ce pardon dans votre coeur au quotidien.',
    journalingPrompt:
      'Quelle offense est la plus difficile pour moi à pardonner ? Quel serait le premier pas concret pour me libérer du poids de ce ressentiment ?',
    affirmation: 'Je choisis de me libérer du fardeau du ressentiment, non pas pour l\'autre mais pour ma propre paix.',
  },
  {
    id: 8,
    verseArabic: 'وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ',
    verseFrench: 'Qu\'ils pardonnent et overlookent. N\'aimez-vous pas qu\'Allah vous pardonne ?',
    reference: '24:22',
    theme: 'pardon',
    mirrorVersion:
      'Ce verset est un miroir percutant qui me confronte à mon propre besoin de pardon. Je demande constamment à être pardonné pour mes fautes, mais je refuse souvent d\'accorder le même droit aux autres. Ce verset me révèle que ma capacité à pardonner aux autres est directement liée à ma propre expérience du pardon divin. En pardonnant, je ne fais pas un cadeau à l\'autre, je m\'aligne avec la miséricorde que je souhaite recevoir.',
    fanaExercise:
      'Asseyez-vous confortablement dans un espace calme, le dos droit et les yeux fermés. Prenez trois respirations profondes pour vous installer dans le moment présent. Commencez par contempler votre propre besoin de pardon. Pensez à un moment récent où vous avez commis une erreur, blessé quelqu\'un ou manqué à vos propres valeurs. Ressentez la vulnérabilité de ce moment, votre regret et votre désir sincère d\'être pardonné. Laissez cette sensation de regret vous remplir sans vous juger. Puis imaginez que vous vous tenez devant une porte immense et lumineuse, la porte du pardon divin. Cette porte est ouverte, pas fermée. La lumière qui en sort est chaude et accueillante. Imaginez que vous franchissez cette porte et que vous entrez dans un espace de miséricorde totale. Tout y est pardonné, tout y est effacé, tout y est transformé. Sentez le soulagement immense de ce pardon reçu. Laissez cette sensation d\'être pardonné envahir chaque cellule de votre corps. Restez dans cette gratitude profonde pendant quelques minutes. Puis, doucement, amenez à votre esprit la personne que vous avez du mal à pardonner. Demandez-vous : « Est-ce que je ne mérite pas, moi aussi, que ma porte du pardon reste ouverte pour les autres ? » Imaginez que vous ouvrez une porte semblable dans votre propre coeur, une porte de pardon envers cette personne. Vous n\'avez pas besoin de la comprendre ou d\'approuver ses actes, mais vous choisissez d\'ouvrir la porte. Sentez la libération qui accompagne ce geste. Terminez en récitant doucement : « Ô Allah, pardonne-moi comme je pardonne, et aide-moi à pardonner comme Tu me pardonnes. »',
    journalingPrompt:
      'Si je recevais le pardon que je souhaite ardemment, comment me sentirais-je ? Est-ce que je pourrais offrir cette même sensation à quelqu\'un d\'autre ?',
    affirmation: 'Je m\'ouvre au pardon divin et je laisse cette même miséricorde couler à travers moi vers les autres.',
  },

  // GRATITUDE (2)
  {
    id: 9,
    verseArabic: 'وَلَقَدْ آتَيْنَاكُم مِّن كُلِّ مَا سَأَلْتُمُوهُ ۗ وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا',
    verseFrench: 'Nous vous avons accordé de toute chose ce que vous avez demandé. Et si vous comptiez les bienfaits d\'Allah, vous ne sauriez les dénombrer.',
    reference: '14:34',
    theme: 'gratitude',
    mirrorVersion:
      'Ce verset me révèle mon aveuglement face aux bienfaits qui m\'entourent. Je passe tellement de temps à me concentrer sur ce qui manque que j\'oublie d\'ouvrir les yeux sur ce qui est déjà là. Le verset me montre que l\'abondance est ma réalité quotidienne mais que je la traverse sans la voir, comme un poisson qui ne remarque pas l\'eau dans laquelle il nage.',
    fanaExercise:
      'Installez-vous dans un endroit confortable et calme, assis avec le dos droit. Fermez les yeux et prenez trois respirations profondes pour centrer votre attention. Commencez par diriger votre conscience vers votre corps physique. Sentez votre respiration, le battement de votre coeur, la température de votre peau. Ce sont les premiers bienfaits que le verset vous invite à remarquer. Votre corps fonctionne sans que vous ayez à lui donner d\'ordre. Remerciez silencieusement pour cette machine merveilleuse. Puis élargissez votre conscience à votre environnement immédiat. Même les choses les plus simples que vous négligez chaque jour : le toit au-dessus de votre tête, la lumière qui éclaire la pièce, l\'air que vous respirez. Imaginez maintenant que chacun de ces bienfaits est une perle lumineuse qui flotte autour de vous. Plus vous en remarquez, plus les perles se multiplient. Regardez cette constellation de bienfaits qui vous entoure. Elle est si vaste que vous ne pouvez pas la compter, exactement comme le dit le verset. Restez dans cette contemplation de l\'abondance pendant au moins cinq minutes. Laissez la gratitude monter naturellement de votre coeur, sans la forcer. Si des pensées négatives surgissent concernant ce qui manque, accueillez-les brièvement puis ramenez votre attention sur les perles lumineuses des bienfaits présents. Pour terminer, placez vos deux mains sur votre coeur et dites silencieusement : « Ô Allah, je ne peux pas compter Tes bienfaits, mais je Te remercie pour ceux que Tu me permets de voir aujourd\'hui. » Ouvrez les yeux lentement en emportant avec vous cette conscience renouvelée de l\'abondance.',
    journalingPrompt:
      'Quels sont cinq bienfaits dans ma vie que je néglige de remarquer chaque jour ? Comment ma journée serait-elle différente si je commençais chaque matin par cette pratique de gratitude ?',
    affirmation: 'L\'abondance de bienfaits dans ma vie dépasse tout ce que je peux imaginer et compter.',
  },
  {
    id: 10,
    verseArabic: 'وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ',
    verseFrench: 'Nous avons accordé la sagesse à Luqman : « Sois reconnaissant envers Allah. »',
    reference: '31:12',
    theme: 'gratitude',
    mirrorVersion:
      'Ce verset me révèle que la gratitude n\'est pas simplement une politesse mais le fondement même de la sagesse. Le fait qu\'Allah ait accordé la sagesse à Luqman et que la première leçon soit la gratitude me montre que je ne peux pas être sage sans être reconnaissant. Il me confronte à ma propre ingratitude et à la manière dont elle maintient mon coeur dans un état de pauvreté spirituelle.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes pour calmer l\'esprit. Imaginez que vous êtes assis dans la présence de Luqman, le sage de la tradition coranique. Il est devant vous, un vieillard au visage lumineux et serein, et il vous regarde avec bienveillance. Imaginez qu\'il vous dit doucement : « La sagesse commence par la gratitude. » Laissez ces mots résonner dans votre coeur. Puis Luqman vous invite à un exercice : il vous demande de fermer les yeux et de parcourir votre journée depuis le réveil. Revivez chaque instant en cherchant les moments de grâce que vous avez traversés sans les remarquer. Le goût du thé ou du café du matin, le message d\'un proche, le rayon de soleil à travers la fenêtre, le fait d\'avoir pu marcher, parler, entendre. Remerciez pour chacun de ces moments comme si vous les découvriez pour la première fois. Imaginez que Luqman approuve silencieusement à chaque remerciement que vous formulez. Puis élargissez votre regard au-delà de votre journée : votre santé, votre famille, votre capacité à apprendre, les épreuves qui vous ont rendu plus fort. Chaque souvenir de gratitude est comme une brique que vous posez pour construire la maison de votre sagesse. Plus vous êtes reconnaissant, plus la maison s\'élève. Quand vous sentez que votre coeur est rempli de gratitude, imaginez que Luqman sourit et vous dit : « Voilà la sagesse. C\'est aussi simple que cela. » Restez dans cette sensation de plénitude pendant quelques minutes. Terminez l\'exercice par une expiration profonde et silencieuse.',
    journalingPrompt:
      'Quel lien puis-je faire entre mes moments de gratitude et mes moments de clarté intérieure ? La gratitude a-t-elle déjà transformé une situation difficile dans ma vie ?',
    affirmation: 'Ma gratitude est la porte d\'entrée de la sagesse et chaque remerciement élargit mon coeur.',
  },

  // PRESENCE (2)
  {
    id: 11,
    verseArabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
    verseFrench: 'Il est avec vous, où que vous soyez.',
    reference: '57:4',
    theme: 'presence',
    mirrorVersion:
      'Ce verset vient percuter ma croyance profonde que je suis seul dans mes épreuves. Il me révèle que la solitude que je ressens est une illusion créée par mon incapacité à percevoir la Présence qui m\'accompagne en permanence. Même dans mes moments les plus sombres, même quand personne d\'autre ne comprend, Il est là. Ce verset me demande de reconsidérer chaque instant de ma vie comme un moment partagé.',
    fanaExercise:
      'Asseyez-vous dans un endroit tranquille, les yeux fermés, le dos droit. Prenez cinq respirations lentes et profondes. Imaginez que vous êtes dans une forêt paisible, au crépuscule. La lumière est douce, dorée, filtrée par les arbres. Vous marchez sur un sentier de terre, et chaque pas que vous faites résonne doucement sous vos pieds. Autour de vous, le monde est calme et vous vous sentez seul. Laissez cette sensation de solitude monter en vous sans la fuir. Puis, progressivement, commencez à remarquer des signes de présence : le chant d\'un oiseau, le murmure du vent dans les feuilles, la chaleur d\'un rayon de soleil sur votre épaule. Chaque signe est un rappel que vous n\'êtes pas seul. Imaginez maintenant qu\'à chaque pas, une deuxième empreinte apparaît à côté de la vôtre sur le sentier. Vous ne voyez personne, mais les empreintes sont là, nettes et régulières, à côté des vôtres. Continuez à marcher dans cette forêt en contemplant ces empreintes parallèles. Elles sont là depuis le début, vous ne les aviez simplement pas remarquées. Sentez comment cette prise de conscience transforme votre ressenti : la forêt n\'est plus solitaire, elle est habitée par une Présence invisible mais bien réelle. Laissez cette sensation de compagnie spirituelle emplir votre poitrine. Restez sur ce sentier pendant dix minutes, marchant en conscience de cette double empreinte. Puis asseyez-vous au bord du sentier, fermez les yeux intérieurement et dites silencieusement : « Tu es avec moi, et cela me suffit. »',
    journalingPrompt:
      'Quand ai-je ressenti pour la dernière fois une véritable solitude ? Comment ma perception de ce moment changerait-elle si je savais que je n\'étais pas seul ?',
    affirmation: 'Je ne suis jamais seul car une Présence infiniment bienveillante m\'accompagne à chaque instant.',
  },
  {
    id: 12,
    verseArabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
    verseFrench: 'Nous avons certes créé l\'homme et Nous savons ce que son âme lui suggère. Et Nous sommes plus proche de lui que sa veine jugulaire.',
    reference: '50:16',
    theme: 'presence',
    mirrorVersion:
      'Ce verset me révèle une intimité que je n\'ose parfois pas concevoir. Être plus proche que la veine jugulaire signifie que mon dialogue intérieur le plus secret est entendu, que mes pensées les plus enfouies sont connues. Cette proximité n\'est pas une surveillance mais une intimité profonde, comme celle d\'un parent qui connaît le moindre frémissement de son enfant. Ce verset me demande d\'arrêter de jouer la comédie de la solidité car tout en moi est déjà connu.',
    fanaExercise:
      'Asseyez-vous confortablement, le dos droit, les yeux fermés. Commencez par porter votre attention sur votre respiration sans la modifier. Sentez l\'air entrer et sortir de vos narines, sentez votre poitrine se soulever et s\'abaisser. Puis, avec douceur, dirigez votre conscience vers l\'intérieur de votre cou, là où bat votre pouls. Posez deux doigts sur votre veine jugulaire et sentez le battement régulier de votre sang. Chaque battement est la preuve que la vie coule en vous, et avec elle, une Présence plus intime que ce battement lui-même. Fermez les yeux et imaginez que cette Présence est comme une lumière intérieure, pas devant vous ou autour de vous, mais en vous, au coeur même de chaque battement, de chaque pensée, de chaque émotion. Elle connaît vos doutes, vos peurs, vos espoirs. Elle n\'est pas choquée par ce qu\'elle trouve car elle est là depuis toujours. Récitez lentement : « Tu es plus proche de moi que ma propre veine. » Laissez cette vérité s\'installer dans votre conscience comme une eau chaude qui envahit une tasse froide. Ne cherchez pas à analyser ou à comprendre intellectuellement cette proximité. Contentez-vous de la ressentir. Restez dans cet état de réceptivité pendant au moins dix minutes. Si votre esprit s\'agite, ramenez votre attention sur le battement de votre pouls et sur la lumière intérieure qui l\'accompagne. Pour terminer, prenez une inspiration profonde, retenez-la quelques secondes, puis relâchez lentement en laissant aller tout ce que vous retenez encore.',
    journalingPrompt:
      'Quels secrets de mon coeur est-ce que je garde même pour moi-même ? Comment ma vie changerait si je vivais avec la conscience que tout en moi est déjà vu et connu avec amour ?',
    affirmation: 'Je suis connu et aimé dans mes recoins les plus intimes, et cette connaissance est un réconfort et non un jugement.',
  },

  // FORCE (2)
  {
    id: 13,
    verseArabic: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ',
    verseFrench: 'Et cherchez du secours dans la patience et la prière. Certes, la prière est une lourde obligation, sauf pour les humbles.',
    reference: '2:45',
    theme: 'force',
    mirrorVersion:
      'Ce verset me montre que la force véritable ne vient pas de ma propre volonté mais de deux piliers que je néglige souvent : la patience et la prière. Le verset reconnaît honnêtement que la prière est difficile, ce qui me conforte dans mes propres luttes. Mais il me révèle aussi que l\'humilité, la khouchou, est la clé qui transforme l\'effort en soutien divin. Ma force vient de ma vulnérabilité assumée devant mon Créateur.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes pour centrer votre esprit. Imaginez que vous vous tenez devant deux colonnes massives et anciennes, comme celles d\'un temple millénaire. La colonne de gauche porte l\'inscription « Patience » et la colonne de droite porte l\'inscription « Prière ». Ces deux colonnes soutiennent le toit de votre vie intérieure. Approchez-vous de la colonne de la Patience. Posez votre main dessus et sentez sa solidité, sa fraîcheur, sa permanence. Rappelez-vous un moment où votre patience a été testée et où vous avez tenu bon. Ressentez la force qui a émané de ce moment. Puis approchez-vous de la colonne de la Prière. Posez votre autre main dessus et sentez une vibration différente, plus subtile mais tout aussi réelle. Rappelez-vous un moment où la prière vous a soutenu dans une épreuve. Ressentez cette connexion qui vous a traversé. Maintenant, tenez-vous entre les deux colonnes et appuyez vos deux mains sur elles simultanément. Sentez comment ces deux forces se combinent en vous, créant une structure intérieure solide et flexible à la fois. C\'est là que réside votre véritable force : dans l\'équilibre entre l\'endurance patiente et la connexion spirituelle. Restez dans cette posture imaginaire pendant au moins cinq minutes, sentant l\'énergie des deux colonnes couler en vous. Puis relâchez vos mains, prenez une inspiration profonde et expirez lentement. Terminez en disant silencieusement : « Ô Allah, je cherche en Toi la force que je ne trouve pas en moi-même. »',
    journalingPrompt:
      'Quand ai-je senti pour la dernière fois que la prière me donnait une force que je n\'avais pas seule ? Comment puis-je renforcer mes deux colonnes intérieures au quotidien ?',
    affirmation: 'Ma force la plus profonde naît de l\'alliance entre ma patience et ma connexion spirituelle.',
  },
  {
    id: 14,
    verseArabic: 'فَلِذَٰلِكَ فَادْعُ وَاسْتَقِمْ كَمَا أُمِرْتَ',
    verseFrench: 'C\'est pourquoi, invoque-Le et reste droit, comme on te l\'a ordonné.',
    reference: '11:112',
    theme: 'force',
    mirrorVersion:
      'Ce verset me révèle que la droiture et la constance sont les deux faces d\'une même force intérieure. Il me montre que je perds souvent ma force non pas à cause des épreuves extérieures mais à cause de mes propres oscillations et de mon manque de constance. Le verset me rappelle que la force véritable n\'est pas un éclat momentané mais une ligne droite tracée jour après jour, dans la fidélité à mon engagement spirituel.',
    fanaExercise:
      'Asseyez-vous dans un endroit paisible, le dos parfaitement droit, les yeux fermés. Prenez cinq respirations lentes pour installer le calme. Imaginez que vous vous tenez sur un fil tendu au-dessus d\'un paysage magnifique. Ce fil représente la « droiture » dont parle le verset, la istiqama. En dessous de vous, à gauche et à droite, il y a des distractions, des tentations, des peurs, mais vous restez sur le fil. Ressentez l\'équilibre nécessaire pour tenir sur ce fil. Cet équilibre n\'est pas de la rigidité mais une attention subtile et constante. Imaginez maintenant que ce fil est en réalité un chemin de lumière qui s\'étend devant vous, aussi loin que l\'oeil puisse voir. Chaque pas que vous faites sur ce chemin de lumière renforce votre détermination et votre ancrage. Posez un pied devant l\'autre lentement, avec conscience et intention. Chaque pas est un acte de constance, de fidélité à vous-même et à votre Créateur. Récitez intérieurement : « Je reste droit. Je reste droit. Je reste droit. » à chaque pas. Sentez comment cette répétition crée un rythme intérieur qui vous stabilise. Quand les pensées distrayantes surgissent, imaginez-les comme des vents latéraux qui essaient de vous déséquilibrer, mais que votre ancrage profond vous permet de résister. Restez sur ce chemin de lumière pendant au moins dix minutes, marchant avec une confiance grandissante. Pour terminer, asseyez-vous au bord du chemin, ouvrez lentement les yeux et prenez un moment pour intégrer cette sensation de droiture et de constance.',
    journalingPrompt:
      'Dans quels domaines de ma vie ai-je tendance à osciller au lieu de rester droit ? Quel pas concret puis-je faire aujourd\'hui pour renforcer ma constance ?',
    affirmation: 'Je marche chaque jour sur le chemin de la droiture avec une constance qui est ma plus grande force.',
  },

  // GUIDANCE (2)
  {
    id: 15,
    verseArabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
    verseFrench: 'Et quand Mes serviteurs t\'interrogent à Mon sujet, alors Je suis tout proche.',
    reference: '2:186',
    theme: 'guidance',
    mirrorVersion:
      'Ce verset me révèle que la guidance que je cherche désespérément à l\'extérieur est déjà à ma portée, à l\'intérieur de ma propre prière. Il me montre que je ne suis jamais abandonné dans ma quête de direction, car Celui que je cherche est plus proche de moi que je ne le crois. Le verset transforme ma recherche anxieuse en une conversation intime avec un Interlocuteur qui m\'attend depuis longtemps.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes pour préparer votre coeur à la rencontre. Imaginez que vous êtes dans une pièce sobre et élégante, éclairée par une seule lampe posée au centre. Face à vous, un siège est vide. Ce siège représente la proximité divine dont parle le verset. Asseyez-vous en face de ce siège vide et commencez à parler, doucement, intérieurement, comme vous parleriez à un ami très proche. Dites ce qui pèse sur votre coeur, les questions qui vous tourmentent, les décisions que vous n\'arrivez pas à prendre. Soyez honnête, vulnérable, brutalement sincère. Ne formulez pas de phrases élégantes, parlez comme vous parle votre coeur quand il se sent en sécurité. Imaginez que pendant que vous parlez, une chaleur bienveillante émane du siège vide et vient vous envelopper. Vous ne voyez personne, vous n\'entendez pas de voix, mais vous sentez que quelqu\'un écoute avec une attention totale et bienveillante. Restez dans ce dialogue pendant au moins dix minutes. Si le silence s\'installe, ne le rompez pas. Ce silence n\'est pas le vide mais la présence. Parfois, dans ce silence, une pensée douce, une idée claire, une sensation de paix peut émerger. C\'est la réponse, pas toujours dans les mots que vous attendiez, mais dans la forme qui est bonne pour vous. Pour terminer, remerciez silencieusement pour cet espace de dialogue et ouvrez les yeux lentement.',
    journalingPrompt:
      'Quelle est la question la plus urgente que je porte en ce moment ? Si je croyais vraiment que la réponse est à portée de main, comment formulerais-je cette question dans ma prière ?',
    affirmation: 'La guidance que je cherche est plus proche de mon coeur que mon propre souffle.',
  },
  {
    id: 16,
    verseArabic: 'وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ',
    verseFrench: 'Et auprès de Lui se trouvent les clés de l\'Invisible. Personne ne les connaît si ce n\'est Lui.',
    reference: '6:59',
    theme: 'guidance',
    mirrorVersion:
      'Ce verset me confronte à mes propres limites avec une douceur qui me surprend. Il me révèle que je n\'ai pas besoin de tout comprendre pour avancer. Le fait que les clés de l\'invisible appartiennent uniquement à Lui me libère du fardeau de vouloir tout contrôler et tout prévoir. Ma guidance ne passe pas par la compréhension totale mais par la confiance dans Celui qui détient toutes les clés.',
    fanaExercise:
      'Asseyez-vous confortablement, le dos droit, les yeux fermés. Commencez par trois respirations profondes. Imaginez que vous vous tenez devant une immense porte ancienne, ornée de gravures et de symboles mystérieux. Cette porte représente l\'avenir, l\'inconnu, toutes les questions sans réponse de votre vie. La porte est fermée et vous n\'avez pas la clé. Regardez cette porte avec honnêteté. Ressentez la frustration, l\'anxiété ou la curiosité qui monte en vous face à ce mystère. Puis imaginez que la porte s\'entrouvre lentement, d\'elle-même, sans que vous n\'ayez rien fait. Elle ne s\'ouvre pas complètement, juste assez pour laisser passer un fin rayon de lumière. Cette lumière est la guidance : pas une carte complète de votre avenir, mais un éclairage suffisant pour le prochain pas. Regardez cette fine lumière et laissez-la vous rassurer. Vous n\'avez pas besoin de voir toute la pièce, juste le petit chemin éclairé devant vos pieds. Récitez lentement : « Les clés sont entre de bonnes mains. Les clés sont entre de bonnes mains. » Sentez comment cette répétition relâche la tension dans vos épaules et votre poitrine. Imaginez que vous avancez pas à pas dans la lumière filtrée de cette porte entrouverte. Chaque pas est un acte de confiance dans la guidance divine. Restez dans cette contemplation pendant au moins dix minutes. Terminez en remerciant pour la lumière que vous avez reçue, même si elle est modeste, et en vous engageant à avancer avec ce que vous avez.',
    journalingPrompt:
      'Quelle situation de ma vie suis-je en train de chercher à comprendre avec ma seule raison ? Comment pourrais-je avancer en confiance même sans comprendre totalement ?',
    affirmation: 'Je n\'ai pas besoin de voir tout le chemin, juste le prochain pas éclairé suffit pour avancer.',
  },

  // SAGESSE (2)
  {
    id: 17,
    verseArabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    verseFrench: 'Et dis : « Ô mon Seigneur, accrois ma connaissance. »',
    reference: '20:114',
    theme: 'sagesse',
    mirrorVersion:
      'Ce verset me révèle la modestie magnifique de Moussa, le plus grand prophète, qui demande toujours plus de savoir. Il me confronte à ma propre prétention à « savoir » et me montre que la véritable sagesse commence par la reconnaissance de mon ignorance. Plus j\'apprends, plus je découvre l\'immensité de ce que je ne sais pas. Cette supplication est la clé de toute croissance intellectuelle et spirituelle.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous êtes dans une bibliothèque immense dont les étagères montent jusqu\'au ciel. Des milliers de livres, de parchemins et de manuscrits remplissent cet espace, et chacun contient une connaissance, une sagesse, une clé de compréhension que vous n\'avez pas encore. Regardez cette immensité avec humilité et émerveillement. Vous n\'avez lu qu\'une infime fraction de ce qui est disponible. Approchez-vous d\'une étagère et prenez un livre au hasard. Ouvrez-le et imaginez qu\'il contient une sagesse qui vous est destinée en ce moment précis de votre vie. Lisez la première page intérieurement : qu\'est-ce que ce livre essaie de vous apprendre ? Peut-être est-ce une leçon de patience, de compassion, de courage ou de lâcher-prise. Recevez cette leçon comme un cadeau. Puis refermez le livre, posez-le avec respect et avancez vers une autre étagère. Chaque livre représente une dimension de la connaissance que vous n\'avez pas encore explorée. Récitez la supplication de Moussa : « Ô mon Seigneur, accrois ma connaissance. » Répétez-la avec sincérité, comme un enfant qui demande à être nourri. Sentez comment cette demande ouvre votre coeur et votre esprit à de nouvelles possibilités. Restez dans cette bibliothèque intérieure pendant au moins dix minutes. Pour terminer, remerciez pour l\'immensité de ce qui reste à apprendre et ouvrez les yeux avec la détermination d\'être un éternel apprenti.',
    journalingPrompt:
      'Quelle est la chose que je pensais savoir avec certitude mais que la vie m\'a appris à remettre en question ? Quelle connaissance ai-je le plus besoin de développer en ce moment ?',
    affirmation: 'Je suis un apprenant perpétuel et chaque jour est une occasion de grandir en sagesse.',
  },
  {
    id: 18,
    verseArabic: 'يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
    verseFrench: 'Il accorde la sagesse à qui Il veut. Et celui à qui la sagesse est accordée, c\'est certes un bien immense qui lui est accordé.',
    reference: '2:269',
    theme: 'sagesse',
    mirrorVersion:
      'Ce verset me révèle que la sagesse est un don et non une acquisition purement intellectuelle. Il me montre que je ne peux pas forcer la sagesse à venir par l\'effort seul, mais que je peux m\'ouvrir à la recevoir par la sincérité de ma quête. Le verset me rappelle aussi que la sagesse est un « bien immense », peut-être le bien le plus précieux que je puisse recevoir, plus précieux que la richesse ou le succès.',
    fanaExercise:
      'Asseyez-vous dans un endroit tranquille, le dos droit, les yeux fermés. Prenez trois respirations profondes pour installer le calme. Imaginez que vous êtes dans un jardin nocturne éclairé par la lumière de la lune. Au centre du jardin se trouve un arbre ancien et majestueux, dont les branches s\'élèvent haut dans le ciel. Cet arbre représente la sagesse. Approchez-vous de l\'arbre et asseyez-vous au pied de son tronc. Sentez l\'énergie ancienne et paisible qui émane de cet arbre millénaire. Posez votre main sur son écorce et sentez sa texture, sa solidité, sa patience. Cet arbre a traversé des siècles de tempêtes et de saisons, et il est toujours là, debout et verdoyant. C\'est la sagesse : enracinée et flexible à la fois. Imaginez maintenant qu\'un fruit lumineux tombe doucement de l\'une des branches et vient se poser dans vos mains ouvertes. Ce fruit est un don de sagesse, un éclairage sur une situation de votre vie qui vous est obscure. Regardez ce fruit avec gratitude et reconnaissance. Il n\'est pas de votre propre fabrication, il a été offert par l\'arbre de la sagesse divine. Portez ce fruit à votre coeur et laissez sa lumière se diffuser dans votre être. Sentez comment cette lumière apporte de la clarté là où il y avait de la confusion, de la paix là où il y avait de l\'agitation. Restez au pied de cet arbre pendant au moins dix minutes, recevant ce que l\'arbre a à vous offrir. Pour terminer, relevez-vous, remerciez l\'arbre et le Donateur, et ouvrez les yeux en emportant avec vous cette lumière de sagesse.',
    journalingPrompt:
      'Quel est le moment le plus récent où j\'ai reçu une sagesse inattendue, d\'une source à laquelle je ne m\'attendais pas ? Comment puis-je cultiver la réceptivité intérieure pour recevoir davantage de sagesse ?',
    affirmation: 'La sagesse est un don qui vient me trouver quand mon coeur est prêt à la recevoir.',
  },

  // DETACHMENT (2)
  {
    id: 19,
    verseArabic: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',
    verseFrench: 'Dis : « En vérité, ma prière, mes actes de dévotion, ma vie et ma mort appartiennent à Allah, Seigneur des mondes. »',
    reference: '6:162',
    theme: 'detachment',
    mirrorVersion:
      'Ce verset est un miroir radical qui me confronte à mes attachements les plus profonds. Quand je dis que ma vie et ma mort appartiennent à Allah, je lâche prise sur mon illusion de contrôle absolu. Ce verset me révèle combien je m\'accroche aux choses, aux personnes, aux résultats, comme si ma vie m\'appartenait. Il me montre que le lâcher-prise ultime n\'est pas un renoncement mais un alignement avec ma véritable nature.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez cinq respirations profondes. Commencez par imaginer que vous tenez dans vos deux mains tout ce à quoi vous tenez dans la vie : vos proches, votre travail, vos projets, vos espoirs, vos peurs, votre réputation, votre santé. Visualisez chacun de ces éléments comme un objet que vos mains serrent fermement. Sentez la tension dans vos poings, dans vos bras, dans vos épaules. C\'est le poids de l\'attachement. Restez dans cette tension pendant un moment. Puis, lentement, commencez à ouvrir vos mains, une à une. D\'abord la main droite, puis la main gauche. Ne laissez pas tomber les choses brutalement, relâchez-les doucement. Imaginez qu\'en ouvrant vos mains, vous ne perdez pas ces choses mais vous les confiez à des mains plus grandes et plus sûres que les vôtres. Vos mains ouvertes deviennent un geste d\'offrande et de confiance. Récitez lentement les mots du verset : « Ma vie et ma mort appartiennent à Allah. » À chaque répétition, sentez un peu plus de tension se relâcher dans votre corps. Vos épaules se détendent, votre mâchoire se relâche, votre ventre s\'assouplit. Lâcher prise n\'est pas perdre, c\'est offrir en confiance. Restez les mains ouvertes pendant au moins dix minutes dans cette posture de détachement serein. Si l\'envie de refermer les poings se manifeste, remarquez-la sans y céder. Pour terminer, ramenez vos mains sur votre coeur, sentez votre propre battement et remerciez pour cette libération intérieure.',
    journalingPrompt:
      'À quoi est-ce que je m\'accroche le plus fort en ce moment ? Qu\'est-ce que j\'ai peur de perdre si je lâchais prise ? Comment ma vie serait-elle différente si je me sentais libre de mes attachements ?',
    affirmation: 'Je lâche prise avec confiance, sachant que ce qui est vraiment pour moi ne me sera jamais enlevé.',
  },
  {
    id: 20,
    verseArabic: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',
    verseFrench: 'Toute âme goûtera la mort.',
    reference: '3:185',
    theme: 'detachment',
    mirrorVersion:
      'Ce verset est le rappel le plus puissant de la condition humaine. Il me révèle que ma tendance à vivre comme si j\'allais rester éternellement dans ce monde est une illusion qui me fait souffrir. En me rappelant que la mort est inévitable, le verset ne me fait pas peur mais me libère. Si tout est temporaire, alors rien ne mérite que je m\'y attache désespérément. La mort devient non pas une fin mais une perspective qui donne de la valeur à chaque instant.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme et sûr, le dos droit, les yeux fermés. Prenez trois respirations profondes. Cet exercice demande une honnêteté et un courage intérieurs. Imaginez que vous êtes au crépuscule de votre vie. Vous êtes âgé, vos cheveux sont blancs, votre corps est fatigué mais votre esprit est lucide. Regardez en arrière sur votre vie depuis cette position. Qu\'avez-vous accompli ? Qu\'avez-vous manqué ? Qu\'est-ce qui compte vraiment à la fin ? Contemplez cette rétrospective avec honnêteté mais sans culpabilité. Les choses qui semblaient si importantes au moment où vous les viviez peuvent paraître bien secondaires depuis cette position de fin de vie. Et inversement, des moments que vous avez négligés peuvent apparaître comme les plus précieux. Revenez maintenant au moment présent, dans votre corps actuel. Sentez votre jeunesse ou votre maturité, votre énergie, votre potentiel. Vous n\'êtes pas à la fin, vous êtes au milieu ou au début. La mort est certes promise, mais elle n\'est pas encore là. L\'exercice n\'est pas de mourir en pensée mais de vivre en pleine conscience de la valeur de chaque instant qui vous reste. Récitez lentement : « Toute âme goûtera la mort. » Laissez cette vérité imprégner votre conscience non pas avec angoisse mais avec urgence positive. Que vais-je faire de ce temps précieux qui m\'est accordé ? Restez dans cette contemplation pendant au moins dix minutes. Pour terminer, prenez une grande inspiration, ouvrez les yeux et engagez-vous à vivre cette journée comme si elle comptait vraiment.',
    journalingPrompt:
      'Si je devais mourir demain, quels sont les regrets que j\'aurais ? Quelle est la chose la plus importante que je puisse faire aujourd\'hui pour ne pas avoir ce regret ?',
    affirmation: 'Je vis chaque jour avec la conscience de sa valeur infiniment précieuse.',
  },

  // ESPOIR (2)
  {
    id: 21,
    verseArabic: 'وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ ۝ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَى',
    verseFrench: 'Par le jour montant ! Et par la nuit quand elle couvre tout ! Ton Seigneur ne t\'a ni abandonné, ni détesté.',
    reference: '93:1-3',
    theme: 'espoir',
    mirrorVersion:
      'Ce verset me parle directement quand je traverse des périodes de sécheresse spirituelle ou d\'obscurité émotionnelle. Il me révèle que les moments où je me sens abandonné sont précisément les moments où je suis le plus accompagné. La nuit qui couvre tout n\'est pas le signe d\'un rejet divin mais le cycle naturel qui précède l\'aube. Mon sentiment d\'abandon est une illusion que le verset vient défaire avec tendresse.',
    fanaExercise:
      'Asseyez-vous dans un endroit confortable, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous vous tenez dans une plaine immense au milieu de la nuit. Autour de vous, l\'obscurité est totale. Vous ne voyez rien, vous n\'entendez que le silence de la nuit. C\'est une nuit froide, et vous vous sentez seul. Laissez cette sensation de solitude nocturne monter en vous. C\'est la « nuit quand elle couvre tout » du verset. Restez dans cette obscurité pendant quelques instants, sans chercher à la fuir. Puis, très lentement, commencez à percevoir une lueur à l\'horizon. D\'abord infime, presque imperceptible, puis de plus en plus claire. C\'est le jour montant, la Duha. Regardez cette lumière grandir avec émerveillement, comme si vous la voyiez pour la première fois. Sentez la chaleur du soleil qui commence à réchauffer votre peau, à dissiper le froid de la nuit, à éclairer la plaine autour de vous. Les couleurs réapparaissent, les formes se dessinent, le monde reprend vie. C\'est la promesse du verset : après la nuit vient toujours le jour. Récitez lentement : « Ton Seigneur ne t\'a ni abandonné, ni détesté. » Laissez chaque mot se poser dans votre coeur comme le premier rayon de soleil sur la terre froide. Sentez l\'espoir monter en vous, non pas comme une pensée intellectuelle mais comme une sensation physique de chaleur et de lumière. Restez dans cette contemplation de l\'aube pendant au moins dix minutes. Pour terminer, ouvrez les yeux lentement en emportant avec vous cette certitude que votre nuit, quelle qu\'elle soit, finira par céder la place à la lumière.',
    journalingPrompt:
      'Quelle est la « nuit » que je traverse en ce moment ? Comment puis-je me rappeler que cette nuit est temporaire et que l\'aube arrive ?',
    affirmation: 'Après chaque nuit de mon âme, une aube de lumière et d\'espoir se lèvera inévitablement.',
  },
  {
    id: 22,
    verseArabic: 'قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ',
    verseFrench: 'Il dit : « Je ne fais que plaindre mon angoisse et mon chagrin à Allah. »',
    reference: '12:86',
    theme: 'espoir',
    mirrorVersion:
      'Ce verset de Yaacoub me révèle que se plaindre à Allah n\'est pas un manque de foi mais la plus belle expression de la foi. Yaacoub pleure, il souffre, il perd la vue de chagrin, et pourtant il se plaint uniquement à Celui qui peut véritablement le soulager. Ce verset me montre que ma douleur a une adresse et que la confier à Allah est le premier acte d\'espoir, car Celui à qui je me plains est aussi Celui qui guérit.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme et intime, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous êtes assis dans une pièce aux murs épais, un lieu de confidence absolue. Personne d\'autre que vous n\'est présent, mais vous sentez une présence invisible et bienveillante. C\'est l\'espace du Munajat, le dialogue intime avec votre Créateur. Commencez à parler. Parlez de votre douleur, de votre angoisse, de votre chagrin. Ne formulez pas de belles phrases, parlez comme vous pleureriez si personne ne vous regardait. Laissez les larmes venir si elles le souhaitent. Dites ce que vous n\'osez dire à personne d\'autre. C\'est votre espace de vulnérabilité totale. Pendant que vous parlez, imaginez que chaque mot que vous prononcez est recueilli avec une attention infinie, comme une mère qui recueille les mots de son enfant malade. Aucun mot n\'est perdu, aucune plainte n\'est jugée. Restez dans cet espace de confidence pendant au moins dix minutes. Si les mots s\'arrêtent, laissez le silence parler à votre place. Parfois, le silence est la plainte la plus profonde. Puis, quand vous avez tout dit, asseyez-vous dans le silence de l\'écoute. Restez ouvert à ce qui peut venir : une paix soudaine, une idée lumineuse, une chaleur dans la poitrine, ou simplement un calme qui n\'était pas là avant. Pour terminer, essuyez vos larmes si vous en avez versé, et dites silencieusement : « Tu m\'as entendu, et cela me suffit. »',
    journalingPrompt:
      'Quelle est la douleur que je porte en silence depuis trop longtemps ? À qui d\'autre qu\'à Allah pourrais-je la confier en toute sécurité ?',
    affirmation: 'Ma douleur a une adresse et Celui qui l\'écoute est aussi Celui qui me guérit.',
  },

  // AMOUR (2)
  {
    id: 23,
    verseArabic: 'فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ',
    verseFrench: 'Allah fera venir un peuple qu\'Il aime et qui L\'aime.',
    reference: '5:54',
    theme: 'amour',
    mirrorVersion:
      'Ce verset me révèle que l\'amour entre le Créateur et la créature n\'est pas à sens unique. Il est dit qu\'Allah nous aimera en premier, et c\'est cet amour initial qui éveille en nous la capacité de L\'aimer en retour. Ce verset me montre que mon amour pour le Divin n\'est pas un effort que je dois produire seul mais une réponse à un amour qui m\'a précédé et qui me soutient en permanence.',
    fanaExercise:
      'Asseyez-vous dans un endroit paisible, le dos droit, les yeux fermés. Prenez trois respirations profondes pour calmer le mental. Imaginez que vous vous tenez sous une pluie douce et tiède. Chaque goutte qui touche votre peau est une goutte d\'amour divin. Cette pluie ne mouille pas, elle réchauffe. Laissez cette pluie d\'amour tomber sur vous pendant quelques instants sans chercher à la retenir. Sentez chaque goutte comme un rappel que vous êtes aimé, non pas pour ce que vous faites mais pour ce que vous êtes. Imaginez maintenant que cette pluie d\'amour commence à pénétrer à l\'intérieur de vous, remplissant votre poitrine, puis votre ventre, puis vos membres. Chaque cellule de votre corps est baignée dans cet amour. Laissez cette sensation d\'être aimé envahir votre être tout entier. Puis, quand vous sentez que votre coeur est plein, imaginez que cet amour commence à déborder, comme une coupe remplie à ras bord qui se met à couler. Cet amour qui déborde de vous se dirige vers ceux qui vous entourent : vos proches, vos connaissances, et même ceux que vous ne connaissez pas. C\'est l\'amour qui répond à l\'amour, qui circule et qui se multiplie. Récitez lentement : « Il m\'aime et je L\'aime. » Laissez cette vérité résonner dans votre coeur comme une note de musique qui résonne dans une salle vide. Restez dans cet état d\'amour réciproque pendant au moins dix minutes. Pour terminer, prenez une inspiration profonde, ouvrez les yeux et portez cette sensation d\'amour dans votre journée.',
    journalingPrompt:
      'Quand ai-je ressenti pour la dernière fois que j\'étais aimé inconditionnellement ? Comment pourrais-je laisser cet amour couler à travers moi vers les autres au quotidien ?',
    affirmation: 'Je suis aimé d\'un amour qui ne dépend pas de mes performances et cet amour coule à travers moi vers le monde.',
  },
  {
    id: 24,
    verseArabic: 'وَهُوَ الْغَفُورُ الْوَدُودُ',
    verseFrench: 'Il est le Pardonneur, le Plein d\'amour.',
    reference: '85:14',
    theme: 'amour',
    mirrorVersion:
      'Ce verset associe deux Noms divins que je sépare souvent dans mon esprit : le Pardonneur et le Plein d\'amour. Il me révèle que le pardon n\'est pas un acte froid ou juridique mais l\'expression même de l\'amour. Allah me pardonne parce qu\'Il m\'aime, non pas malgré mes fautes mais avec la connaissance parfaite de qui je suis. Ce verset me montre que je peux m\'aimer moi-même avec la même indulgence et la même tendresse.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous vous tenez dans un jardin ensoleillé au printemps. Les fleurs sont en pleine éclosion et les abeilles bourdonnent doucement. Au centre de ce jardin se trouve une fontaine dont l\'eau coule en murmure. Asseyez-vous au bord de cette fontaine et regardez l\'eau claire et limpide. Imaginez que cette eau est l\'amour divin, pur et sans condition. Trempez vos mains dans cette eau et sentez sa fraîcheur et sa douceur. Puis passez cette eau sur votre visage, comme un geste de purification et de tendresse. Sentez l\'eau couler sur vos joues, votre front, votre menton. Chaque goutte est un acte de pardon et d\'amour. Récitez les deux Noms divins : « Al-Ghafour, Al-Wadoud. Le Pardonneur, le Plein d\'amour. » Répétez-les lentement, en laissant chaque Nom résonner dans votre coeur. Imaginez que le Pardonneur efface vos erreurs passées une à une, comme l\'eau de la fontaine qui lave la poussière. Et imaginez que le Plein d\'amour remplit les espaces laissés vides par le pardon avec une tendresse qui guérit. Restez au bord de cette fontaine pendant au moins dix minutes, recevant le pardon et l\'amour comme un voyageur assoiffé reçoit l\'eau au milieu du désert. Pour terminer, remerciez pour ce moment de grâce et ouvrez les yeux en gardant cette sensation de pardon et d\'amour avec vous.',
    journalingPrompt:
      'Quelle est la faute envers moi-même que j\'ai le plus de mal à pardonner ? Comment pourrais-je appliquer l\'amour divin à cette partie de moi qui souffre ?',
    affirmation: 'Je suis pardonné et aimé d\'un amour plus grand que toutes mes erreurs réunies.',
  },

  // TRANSFORMATION (2)
  {
    id: 25,
    verseArabic: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
    verseFrench: 'Allah ne change pas ce qu\'il y a dans un peuple jusqu\'à ce qu\'ils changent ce qu\'il y a en eux-mêmes.',
    reference: '13:11',
    theme: 'transformation',
    mirrorVersion:
      'Ce verset me révèle le principe le plus puissant de la transformation personnelle : le changement extérieur suit le changement intérieur. Il me montre que je passe souvent mon temps à essayer de modifier les circonstances de ma vie au lieu de travailler sur mon monde intérieur. Le verset me confronte à ma propre responsabilité : si ma situation extérieure ne change pas, c\'est peut-être qu\'il y a un travail intérieur que je n\'ai pas encore fait.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous vous tenez au bord d\'un lac immobile. La surface de l\'eau est parfaitement plate, comme un miroir. Elle reflète le ciel, les arbres autour du lac, et votre propre silhouette. C\'est votre monde intérieur tel qu\'il est actuellement : stable mais immobile. Puis prenez une pierre dans votre main et lancez-la doucement dans le lac. Observez les ondulations qui se créent à partir du point d\'impact. Elles se propagent en cercles concentriques, touchant chaque partie de la surface du lac. Chaque cercle représente un changement intérieur qui influence tout le reste de votre vie. Les cercles atteignent les bords du lac et reviennent vers le centre, créant de nouvelles ondulations. C\'est la nature du changement intérieur : un seul mouvement conscient peut transformer l\'ensemble de votre existence. Imaginez maintenant que vous êtes la pierre, et que chaque décision positive que vous prenez, chaque pensée que vous transformez, chaque habitude que vous changez est une pierre lancée dans le lac de votre vie. Le changement n\'est pas linéaire, il est ondulatoire et progressif. Récitez le verset : « Changez ce qu\'il y a en vous-mêmes. » Laissez cette injonction résonner comme un appel à l\'action intérieure. Demandez-vous : « Quel est le changement intérieur le plus urgent que je doive faire aujourd\'hui ? » Restez dans cette contemplation pendant au moins dix minutes. Pour terminer, prenez une inspiration profonde et engagez-vous à faire un pas concret de changement intérieur dans les vingt-quatre heures qui viennent.',
    journalingPrompt:
      'Quelle situation extérieure de ma vie reste bloquée malgré mes efforts ? Quel changement intérieur pourrais-je faire qui influencerait cette situation ?',
    affirmation: 'La clé de la transformation de ma vie est dans les changements que je fais à l\'intérieur de mon propre coeur.',
  },
  {
    id: 26,
    verseArabic: 'مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ',
    verseFrench: 'Nul malheur ne frappe qu\'avec la permission d\'Allah. Et quiconque croit en Allah, Il guide son coeur.',
    reference: '64:11',
    theme: 'transformation',
    mirrorVersion:
      'Ce verset me révèle que la transformation la plus profonde se produit non pas quand tout va bien mais dans les moments d\'épreuve. Le verset lie la foi en Allah à la guidance du coeur, me montrant que croire, ce n\'est pas avoir des certitudes intellectuelles mais faire confiance que mon coeur est guidé même dans la confusion. Le malheur n\'est pas la fin de l\'histoire mais le début d\'une transformation que je ne pouvais pas initier moi-même.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez cinq respirations profondes. Imaginez que vous êtes un arbre dans une forêt. Autour de vous, d\'autres arbres se dressent majestueusement. Mais vous, vous avez traversé une tempête récemment. Certaines de vos branches ont été brisées, vos feuilles sont tombées, votre tronc porte des cicatrices. Regardez cet arbre avec honnêteté mais sans jugement. C\'est vous, tel que vous êtes en ce moment, marqué par les épreuves de la vie. Puis regardez plus attentivement. Au niveau des branches brisées, de nouvelles pousses vertes commencent à émerger. Là où l\'écorce a été arrachée, une sève nouvelle circule avec vigueur. Les racines, invisibles sous terre, se sont enfoncées plus profondément dans la terre grâce à la tempête, rendant l\'arbre plus stable qu\'avant. C\'est la transformation que le verset décrit : la guidance du coeur qui opère secrètement à travers l\'épreuve. Récitez lentement : « Et quiconque croit en Allah, Il guide son coeur. » Imaginez que cette guidance coule dans l\'arbre comme la sève de la vie, atteignant chaque branche, chaque feuille, chaque racine. Laissez cette sensation de guidance intérieure emplir votre être. Restez dans cette contemplation de l\'arbre qui renaît pendant au moins dix minutes. Pour terminer, prenez une inspiration profonde, ouvrez les yeux et remerciez pour les cicatrices qui sont devenues des sources de force.',
    journalingPrompt:
      'Quelle épreuve récente a transformé quelque chose en moi d\'une manière que je n\'aurais pas choisie mais qui me rend plus fort aujourd\'hui ?',
    affirmation: 'Mes blessures deviennent mes forces et mes épreuves deviennent les véhicules de ma transformation.',
  },

  // PAIX (2)
  {
    id: 27,
    verseArabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ',
    verseFrench: 'C\'est Lui Allah. Nulle divinité autre que Lui, le Souverain, le Pur, la Paix.',
    reference: '59:23',
    theme: 'paix',
    mirrorVersion:
      'Ce verset me révèle que la paix n\'est pas d\'abord un état que je dois atteindre par mes propres efforts mais un Nom de mon Créateur. Si Allah est la Paix, alors la paix est une réalité existentielle qui m\'est accessible en me connectant à Lui. Ce verset me montre que mon agitation intérieure vient souvent de mon éloignement de cette Source de paix et que le retour à la tranquillité passe par le rappel de ce Nom divin.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous êtes dans un lieu de prière ancien et paisible. Les murs sont blancs, la lumière est douce, et un silence profond règne dans cet espace. Ce silence n\'est pas le vide mais la plénitude, la présence de la Paix divine. Installez-vous dans ce lieu intérieur et commencez à répéter doucement le Nom « As-Salam, As-Salam, As-Salam » en synchronisant chaque répétition avec votre respiration. Inspirez en disant « As » et expirez en disant « Salam ». Laissez ce Nom imprégner chaque cellule de votre corps, chaque recoin de votre esprit. Imaginez que la paix divine descend sur vous comme une pluie fine et dorée qui couvre tout votre être. Sentez la paix se déposer sur vos pensées agitées, comme de la neige qui tombe sur une eau tumultueuse et la calme progressivement. Sentez la paix se poser sur vos émotions, les enveloppant d\'une douceur qui ne nie pas la douleur mais qui la traverse. Sentez la paix envahir votre corps, relâchant chaque tension, chaque crispation, chaque nœud. Restez dans cette immersion de paix pendant au moins quinze minutes. Si des pensées perturbatrices surgissent, ne les combattez pas. Contentez-vous de revenir à la répétition du Nom « As-Salam ». La paix n\'est pas l\'absence de pensées mais la présence qui les transcende. Pour terminer, prenez une inspiration profonde, retenez-la quelques instants, puis relâchez en disant silencieusement « As-Salam » une dernière fois. Ouvrez les yeux lentement en emportant cette paix avec vous.',
    journalingPrompt:
      'Dans quels domaines de ma vie ai-je le plus besoin de paix en ce moment ? Comment puis-je faire du Nom « As-Salam » mon compagnon quotidien pour cultiver cette tranquillité intérieure ?',
    affirmation: 'La paix est mon droit le plus profond et je me connecte à sa Source chaque fois que mon coeur s\'agite.',
  },
  {
    id: 28,
    verseArabic: 'وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ',
    verseFrench: 'À Allah appartiennent l\'Orient et l\'Occident. Où que vous vous tourniez, là est la Face d\'Allah.',
    reference: '2:115',
    theme: 'paix',
    mirrorVersion:
      'Ce verset me révèle une liberté extraordinaire : je n\'ai pas besoin d\'être dans un endroit précis, dans une position précise, ou dans un état précis pour trouver la Présence divine. Où que je me tourne, Elle est là. Cette ubiquité de la Présence est une source de paix immense car elle signifie que je ne peux pas me perdre, je ne peux pas aller dans un endroit où Allah ne serait pas.',
    fanaExercise:
      'Asseyez-vous dans un endroit confortable, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous vous tenez au sommet d\'une montagne à l\'aube. Autour de vous, le paysage s\'étend dans toutes les directions : à l\'est, le soleil commence à se lever, à l\'ouest, les dernières étoiles s\'effacent, au nord et au sud, des vallées infinies se déploient. Tournez-vous lentement vers l\'est. Sentez la chaleur du soleil naissant sur votre visage. Puis tournez-vous vers l\'ouest. Sentez la fraîcheur de la nuit qui s\'achève. Puis vers le nord. Puis vers le sud. À chaque direction que vous facez, répétez intérieurement : « Là est la Face d\'Allah. » Sentez comment cette vérité transforme votre perception de l\'espace. Il n\'y a pas de direction « bonne » ou « mauvaise ». Il n\'y a pas d\'endroit où vous seriez perdu. Chaque direction est un accès à la Présence divine. Élargissez maintenant cette contemplation à votre propre vie. Parfois vous vous sentez « à l\'est » de votre vie, dans un matin de recommencement. Parfois « à l\'ouest », dans un crépuscule de fins. Parfois « au nord » dans la froideur de l\'épreuve, parfois « au sud » dans la chaleur de l\'aisance. Peu importe la direction, la Présence est là. Restez dans cette contemplation de l\'ubiquité divine pendant au moins dix minutes. Pour terminer, ouvrez les yeux et regardez autour de vous, en vous rappelant que même dans cette pièce, dans cette direction, la Présence est là.',
    journalingPrompt:
      'Y a-t-il des « directions » de ma vie dans lesquelles je me sens coupé de la Présence divine ? Comment puis-ai me rappeler qu\'Elle est partout, même là où je ne La sens pas ?',
    affirmation: 'Où que j\'aille et quelle que soit la direction de ma vie, la Présence divine m\'accompagne toujours.',
  },

  // COURAGE (2)
  {
    id: 29,
    verseArabic: 'الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا',
    verseFrench: 'Ceux auxquels les gens ont dit : « Les gens se sont rassemblés contre vous, craignez-les. » Mais cela a augmenté leur foi.',
    reference: '3:173',
    theme: 'courage',
    mirrorVersion:
      'Ce verset me révèle le visage le plus pur du courage spirituel : quand la peur extérieure devient le carburant de la foi intérieure au lieu de l\'étouffer. Il me montre que le courage n\'est pas l\'absence de peur mais la capacité de transformer la peur en élan spirituel. Quand les gens leur disent de craindre, ils répondent en croyant davantage. Ce verset me confronte à mes propres lâchetés et m\'invite à transformer mes peurs en tremplins.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez trois respirations profondes. Imaginez que vous vous tenez sur un chemin et que devant vous se dresse un obstacle immense. Cela peut être une montagne, un mur, ou toute image qui représente la peur que vous affrontez actuellement. Regardez cet obstacle avec honnêteté. Ressentez la peur, l\'intimidation, le désir de fuir. Ne combattez pas ces sentiments, accueillez-les comme des signaux naturels de votre système de protection. Puis imaginez que, à côté de la peur, une autre force monte en vous. C\'est la foi, une certitude profonde qui dit que cet obstacle n\'est pas la fin du chemin mais une épreuve qui va vous renforcer. Imaginez cette foi comme une lumière dorée qui commence à briller dans votre poitrine. Plus la peur est forte, plus la lumière de la foi grandit. C\'est exactement ce que le verset décrit : les gens ont dit « craignez-les » et cela a augmenté leur foi. Visualisez cette transformation intérieure : la peur qui recule, la lumière de la foi qui avance. Vos épaules se redressent, votre respiration se stabilise, votre regard se clarifie. Vous ne fuyez plus, vous ne tremblez plus. Vous êtes debout, ancré et confiant. Récitez lentement : « Cela a augmenté ma foi. » Laissez cette affirmation devenir votre réalité intérieure. Restez dans cette contemplation du courage spirituel pendant au moins dix minutes. Pour terminer, prenez une inspiration profonde, imaginez que vous franchissez l\'obstacle avec confiance, et ouvrez les yeux en emportant cette force avec vous.',
    journalingPrompt:
      'Quelle est la peur qui me paralyse le plus en ce moment ? Comment puis-je transformer cette peur en un carburant pour ma foi et ma détermination ?',
    affirmation: 'Chaque peur que je traverse avec foi renforce mon âme et élargit ma capacité à affronter l\'inconnu.',
  },
  {
    id: 30,
    verseArabic: 'أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم',
    verseFrench: 'Pensiez-vous entrer au Paradis sans que ne vous vienne l\'équivalent de ce que ceux qui vous ont précédés ont enduré ?',
    reference: '2:214',
    theme: 'courage',
    mirrorVersion:
      'Ce verset est un réveil salutaire qui me confronte à mon attente irréaliste d\'une vie sans difficulté. Il me révèle que les épreuves ne sont pas des punitions mais des passages obligés vers la croissance spirituelle. Ceux qui m\'ont précédé ont enduré, et moi aussi je dois traverser. Ce verset ne me décourage pas mais me donne du courage en me disant que ma souffrance a un sens et qu\'elle est partagée par tous ceux qui ont choisi le chemin de la vérité avant moi.',
    fanaExercise:
      'Asseyez-vous dans un endroit calme, le dos droit, les yeux fermés. Prenez cinq respirations profondes. Imaginez que vous êtes dans une longue file de voyageurs qui traversent une vallée enneigée. Devant vous, derrière vous, des milliers de personnes marchent dans la même direction. Ces voyageurs sont tous ceux qui vous ont précédé dans le chemin de la foi : les prophètes, les sages, les croyants de toutes les époques. Regardez-les avec attention. Certains portent des blessures visibles, d\'autres marchent avec une béquille, d\'autres encore portent des enfants sur leurs épaules. Tous avancent malgré la difficulté du terrain. Approchez-vous de l\'un de ces voyageurs, peut-être un vieillard au visage rayonnant malgré la fatigue. Demandez-lui : « Comment fais-tu pour avancer malgré tout ? » Il vous répond avec un sourire : « Ceux qui sont passés avant moi ont aussi souffert. Et ceux qui viendront après moi souffriront aussi. La souffrance n\'est pas un mur, c\'est un pont. » Continuez à marcher à côté de lui et sentez comment sa présence et sa sagesse vous donnent du courage. Vous n\'êtes pas seul dans cette vallée. Des milliers de personnes ont marché ce chemin avant vous et sont arrivées au bout. Leur exemple est votre réconfort. Récitez lentement le verset : « Ceux qui vous ont précédés ont enduré. » Laissez ces mots vous remplir de courage et de détermination. Restez dans cette contemplation de la communauté des courageux pendant au moins dix minutes. Pour terminer, remerciez pour la compagnie invisible de ceux qui ont marché avant vous et ouvrez les yeux en vous sentant plus fort et moins seul.',
    journalingPrompt:
      'Quels sont les exemples de courage dans l\'histoire ou dans mon entourage qui m\'inspirent le plus ? Comment puis-je m\'appuyer sur ces exemples quand mon propre courage fléchit ?',
    affirmation: 'Je marche sur un chemin que d\'innombrables courageux ont parcouru avant moi, et leur exemple est ma force.',
  },
];
