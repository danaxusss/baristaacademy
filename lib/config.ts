export type Locale = 'fr' | 'ar';

export const locales: Locale[] = ['fr', 'ar'];

export const academyConfig = {
  brand: 'Barista Moroccan Academy',
  company: 'STE Wedrinks',
  phone: '+212657116631',
  whatsapp: '212657116631',
  email: 'contact@wedrinks.ma',
  city: 'Casablanca, Maroc',
  address: 'Urban Coffee Lab, Casablanca',
  currency: 'MAD',
  depositPercentage: null as number | null,
  downloadablePdfs: [
    { label: { fr: 'Brochure formation barista', ar: 'كتيب تكوين الباريستا' }, url: '/downloads/brochure-placeholder.pdf' },
    { label: { fr: 'Programme détaillé', ar: 'البرنامج التفصيلي' }, url: '/downloads/programme-placeholder.pdf' }
  ],
  leadStatuses: [
    'New',
    'Contacted',
    'Confirmed',
    'Paid advance',
    'Fully paid',
    'Attended',
    'Certified',
    'Cancelled'
  ],
  sessionDates: [
    { id: 's1', fr: 'Session semaine · prochaines dates à confirmer', ar: 'دورة أيام الأسبوع · التواريخ القادمة قيد التأكيد' },
    { id: 's2', fr: 'Session week-end · prochaines dates à confirmer', ar: 'دورة نهاية الأسبوع · التواريخ القادمة قيد التأكيد' },
    { id: 's3', fr: 'Session privée entreprise · sur demande', ar: 'دورة خاصة للشركات · عند الطلب' }
  ],
  prices: [
    { id: 'essential', price: 2900, featured: false },
    { id: 'pro', price: 4900, featured: true },
    { id: 'business', price: null, featured: false }
  ]
};

export const navItems = [
  { key: 'home', href: '', fr: 'Accueil', ar: 'الرئيسية' },
  { key: 'formations', href: 'formations', fr: 'Formations', ar: 'التكوينات' },
  { key: 'programme', href: 'programme', fr: 'Programme', ar: 'البرنامج' },
  { key: 'tarifs', href: 'tarifs', fr: 'Tarifs', ar: 'الأثمنة' },
  { key: 'galerie', href: 'galerie', fr: 'Galerie', ar: 'المعرض' },
  { key: 'faq', href: 'faq', fr: 'FAQ', ar: 'الأسئلة' },
  { key: 'contact', href: 'contact', fr: 'Contact', ar: 'اتصل بنا' }
];

export const pageSlugs = ['', 'formations', 'programme', 'tarifs', 'galerie', 'inscription', 'faq', 'contact', 'conditions-generales'] as const;
export type PageSlug = (typeof pageSlugs)[number];

export const dynamicPageSlugs = ['formations', 'programme', 'tarifs', 'faq', 'contact', 'conditions-generales'] as const;
export type DynamicPageSlug = (typeof dynamicPageSlugs)[number];
