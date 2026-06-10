import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { academyConfig, dynamicPageSlugs, type DynamicPageSlug, type Locale } from '@/lib/config';
import { faqs, formations, priceLabels, programme, seo, terms } from '@/lib/content';
import { FinalCta } from '../components/SiteChrome';

type Props = { params: Promise<{ locale: Locale; slug: DynamicPageSlug }> };

const allowed: readonly DynamicPageSlug[] = dynamicPageSlugs;

export async function generateStaticParams() {
  return (['fr', 'ar'] as Locale[]).flatMap((locale) => allowed.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = seo[locale]?.[slug];
  return { title: data?.title, description: data?.description, alternates: { languages: { fr: `/fr/${slug}`, ar: `/ar/${slug}` } } };
}

function Hero({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  const data = seo[locale][slug];
  return <section className="section"><div className="container section-head"><span className="eyebrow">Barista Moroccan Academy</span><h1>{data.title}</h1><p>{data.description}</p></div></section>;
}

export default async function GenericPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!allowed.includes(slug)) notFound();
  if (slug === 'formations') return <Formations locale={locale} slug={slug} />;
  if (slug === 'programme') return <Programme locale={locale} slug={slug} />;
  if (slug === 'tarifs') return <Tarifs locale={locale} slug={slug} />;
  if (slug === 'faq') return <Faq locale={locale} slug={slug} />;
  if (slug === 'contact') return <Contact locale={locale} slug={slug} />;
  if (slug === 'conditions-generales') return <Terms locale={locale} slug={slug} />;
  notFound();
}

function Formations({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container grid">{formations[locale].map((f) => <article className="card" key={f.title}><span className="badge">{f.duration}</span><h3>{f.title}</h3><p>{f.text}</p><Link className="ghost" href={`/${locale}/inscription`}>{locale === 'fr' ? 'Choisir ce parcours' : 'اختيار هذا المسار'}</Link></article>)}</div></section><FinalCta locale={locale} /></main>;
}

function Programme({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container"><ul className="checklist">{programme[locale].map((item) => <li key={item}>{item}</li>)}</ul></div></section><FinalCta locale={locale} /></main>;
}

function Tarifs({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  const labels = priceLabels[locale];
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container pricing">{academyConfig.prices.map((p) => {
    const l = labels[p.id as keyof typeof labels] as { name: string; details: string; cta: string };
    return <article className={`price-card ${p.featured ? 'featured' : ''}`} key={p.id}><span className="badge">{p.featured ? (locale === 'fr' ? 'Populaire' : 'الأكثر طلباً') : 'Academy'}</span><h3>{l.name}</h3><p>{l.details}</p><div className="price">{p.price ? `${p.price} ${academyConfig.currency}` : (locale === 'fr' ? 'Sur devis' : 'حسب الطلب')}</div><Link className="cta" href={`/${locale}/inscription`}>{l.cta}</Link></article>;
  })}</div><div className="container" style={{marginTop: 18}}><p className="notice">{labels.depositNote}</p></div></section><Sessions locale={locale} /><FinalCta locale={locale} /></main>;
}

function Sessions({ locale }: { locale: Locale }) {
  return <section className="section"><div className="container"><div className="section-head"><h2>{locale === 'fr' ? 'Sessions configurables' : 'دورات قابلة للتعديل'}</h2></div><ul className="checklist">{academyConfig.sessionDates.map((s) => <li key={s.id}>{s[locale]}</li>)}</ul></div></section>;
}

function Faq({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container">{faqs[locale].map(([q, a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section><FinalCta locale={locale} /></main>;
}

function Contact({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  const text = encodeURIComponent(locale === 'fr' ? 'Bonjour, je souhaite parler à un conseiller formation.' : 'السلام عليكم، أريد التواصل مع مستشار التكوين.');
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container grid"><article className="card"><h3>WhatsApp</h3><p>{academyConfig.phone}</p><a className="cta" href={`https://wa.me/${academyConfig.whatsapp}?text=${text}`}>WhatsApp</a></article><article className="card"><h3>Email</h3><p>{academyConfig.email}</p></article><article className="card"><h3>{locale === 'fr' ? 'Adresse' : 'العنوان'}</h3><p>{academyConfig.address}</p></article></div></section><FinalCta locale={locale} /></main>;
}

function Terms({ locale, slug }: { locale: Locale; slug: DynamicPageSlug }) {
  return <main><Hero locale={locale} slug={slug} /><section className="section"><div className="container"><ul className="checklist">{terms[locale].map((t) => <li key={t}>{t}</li>)}</ul><div className="notice" style={{marginTop: 18}}>{locale === 'fr' ? 'Documents PDF configurables:' : 'ملفات PDF قابلة للتعديل:'} {academyConfig.downloadablePdfs.map((p) => p.label[locale]).join(' · ')}</div></div></section></main>;
}
