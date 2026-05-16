import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { context, type } = await request.json();

    // Generate insights based on context and type without external API
    const insights = generateInsights(context, type);

    return NextResponse.json({ insights });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate insights' }, { status: 500 });
  }
}

function generateInsights(context: string, type: string): string[] {
  const insightsMap: Record<string, string[]> = {
    technique: [
      `💡 Suggestion de technique : Essayez de varier la durée du Fana entre 5 et 20 minutes selon votre état émotionnel du jour. Les jours de grande agitation méritent un Fana plus long (15-20 min) pour stabiliser le mental.`,
      `🔬 Piste de recherche : Documentez les variations de votre expérience du Tajalli selon le moment de la journée. Le Qiyām al-Layl (veille nocturne) produit souvent des expériences plus profondes.`,
      `📊 Mesure proposée : Créez un "baromètre spirituel" quotidien de 1 à 10 pour chaque phase (Fana, Tajalli, Munajat, Béance). Suivez les tendances sur 30 jours pour identifier les patterns.`,
      `🧪 Expérimentation : Testez l'effet de la répétition d'un seul verset pendant 7 jours consécutifs. Notez comment le verset "descend" de plus en plus profondément dans le cœur.`,
      `🎯 Objectif avancé : Développez votre capacité à maintenir l'état de Béance pendant la prière (salat). Le khushu' dans la prière est la forme ultime de la présence contemplative.`,
      `📚 Étude recommandée : Relisez le chapitre "Al-Murqaba" de l'Ihya' d'Al-Ghazali. Sa description de la "veille du cœur" offre des nuances qui enrichiront votre pratique du Fana.`,
    ],
    protocole: [
      `🏥 Amélioration de protocole : Avant chaque séance de thérapie, évaluez l'état émotionnel du patient avec une échelle de 1 à 10 (pré-séance). Après la séance, réévaluez. Un delta de +2 ou plus indique une réponse positive au protocole.`,
      `📋 Nouvelle suggestion : Créez un "protocole d'urgence" de 10 minutes (Fana 3 min → Tajalli sur verset de confiance 4 min → Munajat 2 min → Béance 1 min) pour les moments de crise aiguë.`,
      `🔍 Pistes de recherche : Pour chaque protocole, identifiez les versets qui produisent le plus d'impact sur les patients. Constituez progressivement une "bibliothèque de versets thérapeutiques" classés par pathologie.`,
      `📊 Suivi longitudinal : Proposez à vos patients de tenir un journal quotidien pendant 30 jours entre les séances. Les données récoltées permettront d'ajuster les protocoles de manière empirique.`,
      `🤝 Collaboration : Envisagez de collaborer avec un thérapeute en TCC ou EMDR pour explorer les synergies entre le Tadaburr Thérapeutique et les approches occidentales validées.`,
      `📈 Évaluation : Développez un questionnaire de suivi post-protocol en 5 questions simples à administrer 1 semaine et 1 mois après la fin du protocole.`,
    ],
    avancee: [
      `🌙 Pratique nocturne : Le Qiyām al-Layl est l'accélérateur le plus puissant de la pratique. Commencez par 2 nuits par semaine (2h avant Fajr) et observez les transformations en 40 jours.`,
      `🧠 Neuro-Tadaburr : Explorez les corrélations entre les ondes cérébrales (alpha, theta, gamma) et chaque phase de la méditation. Le Dhikr du cœur pourrait synchroniser les ondes alpha-theta.`,
      `🔬 Recherche documentée : Publiez un article sur "Le Tadaburr Thérapeutique : Une approche spirituelle islamique de la guérison du trauma". Structurez-le selon les normes académiques APA.`,
      `💡 Innovation : Développez un "protocole adaptatif" qui modifie automatiquement la durée de chaque phase en fonction des signaux physiologiques du patient (fréquence cardiaque, respiration).`,
      `🏛️ Institutionnalisation : Créez un certificat de formation en "Tadaburr Thérapeutique" pour les praticiens de la santé mentale musulmans. Structurez un cursus de 3 modules.`,
      `🌐 Diffusion : Envisagez de créer des ateliers de groupe hebdomadaires où les participants pratiquent le cycle Fana-Tajalli-Munajat-Béance ensemble.`,
    ],
  };

  const key = type === 'technique' ? 'technique' : type === 'protocole' ? 'protocole' : 'avancee';
  const base = insightsMap[key] || insightsMap.technique;

  // Shuffle and pick 3
  const shuffled = [...base].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}
