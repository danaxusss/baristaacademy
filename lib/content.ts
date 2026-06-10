import { academyConfig, type Locale, type PageSlug } from './config';

export const seo: Record<Locale, Record<PageSlug, { title: string; description: string }>> = {
  fr: {
    '': {
      title: 'Barista Moroccan Academy by STE Wedrinks | Formation Barista au Maroc',
      description: 'Formation barista premium au Maroc: espresso, latte art, brewing, hygiène, service coffee shop et accompagnement carrière avec Barista Moroccan Academy by STE Wedrinks.'
    },
    formations: { title: 'Formations Barista | Barista Moroccan Academy', description: 'Découvrez nos parcours barista: initiation, professionnalisation, latte art, coffee shop operations et formation entreprise.' },
    programme: { title: 'Programme de formation barista | Barista Moroccan Academy', description: 'Un programme complet et pratique pour maîtriser l’espresso, le lait, le brewing, l’organisation du bar et l’expérience client.' },
    tarifs: { title: 'Tarifs formation barista | Barista Moroccan Academy', description: 'Consultez les offres configurables, les prochaines sessions et les modalités de réservation sans pourcentage d’avance imposé.' },
    galerie: { title: 'Galerie Urban Coffee Lab | Barista Moroccan Academy', description: 'Aperçus placeholder de l’académie, des machines, des ateliers latte art, des dégustations et des remises de certificats.' },
    inscription: { title: 'Inscription formation barista | Barista Moroccan Academy', description: 'Préinscrivez-vous et générez un message WhatsApp prêt à envoyer à l’équipe Barista Moroccan Academy.' },
    faq: { title: 'FAQ formation barista | Barista Moroccan Academy', description: 'Réponses aux questions fréquentes sur le niveau requis, les horaires, le certificat, le paiement et l’accompagnement.' },
    contact: { title: 'Contact | Barista Moroccan Academy', description: 'Contactez Barista Moroccan Academy by STE Wedrinks par WhatsApp, téléphone ou email pour planifier votre formation.' },
    'conditions-generales': { title: 'Conditions générales | Barista Moroccan Academy', description: 'Conditions générales configurables: inscription, paiement, report, présence, certificat et utilisation des supports pédagogiques.' }
  },
  ar: {
    '': {
      title: 'أكاديمية الباريستا المغربية من STE Wedrinks | تكوين باريستا بالمغرب',
      description: 'تكوين باريستا احترافي بالمغرب: إسبريسو، لاتيه آرت، طرق التحضير، النظافة، خدمة المقاهي ومواكبة مهنية مع أكاديمية الباريستا المغربية.'
    },
    formations: { title: 'تكوينات الباريستا | أكاديمية الباريستا المغربية', description: 'تعرف على مسارات التكوين: البداية، الاحتراف، اللاتيه آرت، تسيير بار القهوة وتكوينات الشركات.' },
    programme: { title: 'برنامج تكوين الباريستا | أكاديمية الباريستا المغربية', description: 'برنامج تطبيقي شامل لإتقان الإسبريسو والحليب وطرق التحضير وتنظيم البار وتجربة الزبون.' },
    tarifs: { title: 'أثمنة تكوين الباريستا | أكاديمية الباريستا المغربية', description: 'اطلع على العروض القابلة للتعديل، الدورات القادمة وشروط الحجز دون تثبيت نسبة تسبيق قبل تأكيد الأكاديمية.' },
    galerie: { title: 'معرض Urban Coffee Lab | أكاديمية الباريستا المغربية', description: 'صور تجريبية للأكاديمية والآلات وورشات اللاتيه آرت والتذوق وتسليم الشهادات.' },
    inscription: { title: 'التسجيل في تكوين الباريستا | أكاديمية الباريستا المغربية', description: 'سجل اهتمامك وولد رسالة واتساب جاهزة لإرسالها إلى فريق الأكاديمية.' },
    faq: { title: 'أسئلة شائعة | أكاديمية الباريستا المغربية', description: 'إجابات حول المستوى المطلوب، المواعيد، الشهادة، الأداء والمواكبة.' },
    contact: { title: 'اتصل بنا | أكاديمية الباريستا المغربية', description: 'تواصل مع أكاديمية الباريستا المغربية عبر واتساب أو الهاتف أو البريد الإلكتروني لتخطيط تكوينك.' },
    'conditions-generales': { title: 'الشروط العامة | أكاديمية الباريستا المغربية', description: 'شروط عامة قابلة للتعديل: التسجيل، الأداء، التأجيل، الحضور، الشهادة واستعمال المواد التعليمية.' }
  }
};

const fr = {
  eyebrow: 'Urban Coffee Lab · Casablanca',
  heroTitle: 'Devenez barista professionnel dans une académie pensée comme un coffee lab urbain.',
  heroText: 'Barista Moroccan Academy by STE Wedrinks forme les futurs baristas, entrepreneurs coffee shop et équipes CHR avec une pédagogie concrète: geste, goût, service et rentabilité.',
  primaryCta: 'Je m’inscris',
  secondaryCta: 'Voir le programme',
  stats: ['90% pratique en atelier', 'Groupes limités', 'Certificat de participation', 'Suivi WhatsApp'],
  finalTitle: 'Prêt à transformer votre passion café en compétence professionnelle?',
  finalText: 'Envoyez votre demande et notre équipe vous rappelle pour confirmer la session, le niveau et les modalités de paiement.',
  cards: [
    { title: 'Espresso maîtrisé', text: 'Réglage moulin, ratio, extraction, diagnostic tasse et constance pendant le service.' },
    { title: 'Latte art & milk science', text: 'Texture lait, verse contrôlé, cœur, tulipe, rosetta et standards de présentation.' },
    { title: 'Coffee shop ready', text: 'Hygiène, workflow, relation client, menu, coûts et préparation à l’emploi.' }
  ]
};

const ar = {
  eyebrow: 'Urban Coffee Lab · الدار البيضاء',
  heroTitle: 'كن باريستا محترفاً داخل أكاديمية مصممة كمعمل قهوة حضري.',
  heroText: 'أكاديمية الباريستا المغربية من STE Wedrinks تكوّن الباريستا الجدد، أصحاب مشاريع المقاهي وفرق الفنادق والمطاعم بمنهج تطبيقي يجمع المهارة، الذوق، الخدمة والمردودية.',
  primaryCta: 'أريد التسجيل',
  secondaryCta: 'عرض البرنامج',
  stats: ['90% تطبيق داخل الورشة', 'مجموعات محدودة', 'شهادة مشاركة', 'مواكبة عبر واتساب'],
  finalTitle: 'هل أنت مستعد لتحويل شغفك بالقهوة إلى مهارة مهنية؟',
  finalText: 'أرسل طلبك وسيتواصل معك فريقنا لتأكيد الدورة، المستوى وطريقة الأداء.',
  cards: [
    { title: 'إتقان الإسبريسو', text: 'ضبط المطحنة، النسب، الاستخلاص، تشخيص الكوب والحفاظ على الجودة أثناء الخدمة.' },
    { title: 'لاتيه آرت وعلوم الحليب', text: 'قوام الحليب، التحكم في السكب، القلب، التوليب، الروزيتا ومعايير التقديم.' },
    { title: 'جاهزية للمقهى', text: 'النظافة، سير العمل، التعامل مع الزبون، القائمة، التكاليف والاستعداد للعمل.' }
  ]
};

export const copy = { fr, ar };

export const formations = {
  fr: [
    { title: 'Essential Barista', duration: '3 jours', text: 'Bases café, espresso, lait, hygiène et service pour débuter rapidement.' },
    { title: 'Professional Barista', duration: '5 jours', text: 'Parcours intensif avec workflow, latte art, brewing, dégustation et évaluation finale.' },
    { title: 'Coffee Shop Business', duration: 'Sur mesure', text: 'Accompagnement menu, équipement, coûts, recrutement et standards opérationnels.' }
  ],
  ar: [
    { title: 'باريستا أساسي', duration: '3 أيام', text: 'أساسيات القهوة، الإسبريسو، الحليب، النظافة والخدمة للانطلاق بسرعة.' },
    { title: 'باريستا محترف', duration: '5 أيام', text: 'مسار مكثف يشمل سير العمل، اللاتيه آرت، التحضير اليدوي، التذوق والتقييم النهائي.' },
    { title: 'مشروع Coffee Shop', duration: 'حسب الطلب', text: 'مواكبة القائمة، المعدات، التكاليف، التوظيف والمعايير التشغيلية.' }
  ]
};

export const programme = {
  fr: ['Culture café et chaîne de valeur', 'Calibration espresso: dose, rendement, temps', 'Steaming et latte art progressif', 'Méthodes douces: V60, batch brew, cold brew', 'Hygiène HACCP, sécurité et maintenance', 'Service, upsell, menu et coûts boissons', 'Simulation rush bar et feedback coach'],
  ar: ['ثقافة القهوة وسلسلة القيمة', 'معايرة الإسبريسو: الجرعة، العائد والوقت', 'تبخير الحليب ولاتيه آرت تدريجي', 'طرق التحضير: V60، باتش برو وكولد برو', 'النظافة، السلامة وصيانة المعدات', 'الخدمة، البيع الإضافي، القائمة وتكاليف المشروبات', 'محاكاة ضغط الخدمة وملاحظات المدرب']
};

export const priceLabels = {
  fr: {
    essential: { name: 'Essential', details: '3 jours · bases barista', cta: 'Réserver Essential' },
    pro: { name: 'Professional', details: '5 jours · parcours complet', cta: 'Réserver Professional' },
    business: { name: 'Business', details: 'Programme entreprise ou ouverture coffee shop', cta: 'Demander un devis' },
    depositNote: 'Le pourcentage d’avance reste à confirmer par l’académie. Aucun taux n’est imposé dans le site.'
  },
  ar: {
    essential: { name: 'أساسي', details: '3 أيام · أساسيات الباريستا', cta: 'حجز العرض الأساسي' },
    pro: { name: 'احترافي', details: '5 أيام · مسار كامل', cta: 'حجز العرض الاحترافي' },
    business: { name: 'أعمال', details: 'برنامج شركات أو افتتاح مقهى', cta: 'طلب عرض سعر' },
    depositNote: 'نسبة التسبيق في انتظار تأكيد الأكاديمية. لا يتم تثبيت أي نسبة داخل الموقع.'
  }
};

export const gallery = [
  { id: 1, category: 'lab', color: '#5A3825', fr: 'Atelier espresso', ar: 'ورشة الإسبريسو' },
  { id: 2, category: 'latte', color: '#C58A45', fr: 'Latte art practice', ar: 'تدريب اللاتيه آرت' },
  { id: 3, category: 'brewing', color: '#4FAE8A', fr: 'Slow coffee bar', ar: 'بار التحضير اليدوي' },
  { id: 4, category: 'students', color: '#D8BFA3', fr: 'Coaching apprenants', ar: 'مواكبة المتدربين' },
  { id: 5, category: 'lab', color: '#1C1815', fr: 'Machines & moulins', ar: 'آلات ومطاحن' },
  { id: 6, category: 'certificates', color: '#C58A45', fr: 'Certificats', ar: 'الشهادات' }
];

export const testimonials = {
  fr: [
    { name: 'Imane · future barista', text: 'Donnée placeholder: pédagogie claire, beaucoup de pratique et vraie confiance derrière la machine.' },
    { name: 'Yassine · porteur de projet', text: 'Donnée placeholder: le module coûts et workflow m’a aidé à structurer mon coffee shop.' }
  ],
  ar: [
    { name: 'إيمان · باريستا مستقبلية', text: 'بيان تجريبي: شرح واضح، تطبيق كثير وثقة حقيقية خلف الآلة.' },
    { name: 'ياسين · صاحب مشروع', text: 'بيان تجريبي: ساعدني محور التكاليف وسير العمل على تنظيم مشروع المقهى.' }
  ]
};

export const faqs = {
  fr: [
    ['Faut-il avoir une expérience?', 'Non. Les bases sont reprises depuis zéro, puis chaque apprenant avance avec des exercices guidés.'],
    ['Recevrai-je un certificat?', 'Oui, une attestation de participation est prévue après présence et évaluation pratique.'],
    ['Les dates sont-elles fixes?', 'Les dates sont configurables dans la couche contenu et confirmées par WhatsApp selon les places.'],
    ['Quel est le montant de l’avance?', `Le pourcentage d’avance n’est pas hardcodé. Il sera affiché uniquement après confirmation par ${academyConfig.brand}.`],
    ['Puis-je inscrire une équipe?', 'Oui, un format entreprise peut être adapté au niveau, au menu et aux standards de votre établissement.']
  ],
  ar: [
    ['هل أحتاج إلى تجربة سابقة؟', 'لا. نبدأ من الأساسيات ثم يتقدم كل متدرب عبر تمارين موجهة.'],
    ['هل سأحصل على شهادة؟', 'نعم، شهادة مشاركة بعد الحضور والتقييم التطبيقي.'],
    ['هل التواريخ ثابتة؟', 'التواريخ قابلة للتعديل في طبقة المحتوى ويتم تأكيدها عبر واتساب حسب المقاعد.'],
    ['ما هي نسبة التسبيق؟', `نسبة التسبيق غير مثبتة في الكود، وستظهر فقط بعد تأكيد ${academyConfig.brand}.`],
    ['هل يمكن تسجيل فريق كامل؟', 'نعم، يمكن إعداد تكوين للشركات حسب المستوى والقائمة ومعايير المؤسسة.']
  ]
};

export const terms = {
  fr: ['La préinscription ne garantit la place qu’après confirmation écrite par l’équipe.', 'Les prix, dates, supports PDF et modalités de paiement sont configurables et peuvent être mis à jour.', 'Le report d’une session dépend des disponibilités et doit être demandé avant la date prévue.', 'Le certificat est remis selon la présence, la participation et l’évaluation pratique.', 'Les supports pédagogiques restent réservés aux apprenants inscrits.'],
  ar: ['لا يضمن التسجيل الأولي المقعد إلا بعد تأكيد كتابي من الفريق.', 'الأثمنة، التواريخ، ملفات PDF وشروط الأداء قابلة للتعديل والتحديث.', 'تأجيل الدورة مرتبط بالتوفر ويجب طلبه قبل الموعد المحدد.', 'تسلم الشهادة حسب الحضور، المشاركة والتقييم التطبيقي.', 'تبقى المواد التعليمية مخصصة للمتدربين المسجلين.']
};
