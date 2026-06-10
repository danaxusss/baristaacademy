import Link from 'next/link';
import { academyConfig, type Locale } from '@/lib/config';
import { copy, formations, programme, testimonials } from '@/lib/content';
import { FinalCta } from './components/SiteChrome';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = copy[locale];
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{c.eyebrow}</span>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroText}</p>
            <div className="hero-actions">
              <Link className="cta" href={`/${locale}/inscription`}>{c.primaryCta}</Link>
              <Link className="ghost" href={`/${locale}/programme`}>{c.secondaryCta}</Link>
            </div>
            <div className="stats">{c.stats.map((s, i) => <div className="stat" key={s}><strong>0{i + 1}</strong>{s}</div>)}</div>
          </div>
          <div className="visual" aria-label="Urban Coffee Lab visual"><div className="cup"><div className="steam"><span /><span /><span /></div><h3>Urban Coffee Lab</h3><p>{academyConfig.address}</p></div></div>
        </div>
      </section>
      <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">{locale === 'fr' ? 'Pourquoi nous choisir' : 'لماذا تختارنا'}</span><h2>{locale === 'fr' ? 'Une expérience premium, pratique et orientée métier.' : 'تجربة راقية، تطبيقية وموجهة لسوق العمل.'}</h2></div><div className="grid">{c.cards.map((card) => <article className="card" key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">{locale === 'fr' ? 'Parcours' : 'المسارات'}</span><h2>{locale === 'fr' ? 'Formations modulaires.' : 'تكوينات مرنة.'}</h2></div><div className="grid">{formations[locale].map((item) => <article className="card" key={item.title}><span className="badge">{item.duration}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">{locale === 'fr' ? 'Programme' : 'البرنامج'}</span><h2>{locale === 'fr' ? 'Du grain au service.' : 'من الحبة إلى الخدمة.'}</h2></div><ul className="checklist">{programme[locale].slice(0,5).map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">{locale === 'fr' ? 'Témoignages placeholder' : 'شهادات تجريبية'}</span><h2>{locale === 'fr' ? 'À remplacer par de vrais avis.' : 'تعوض لاحقاً بآراء حقيقية.'}</h2></div><div className="grid">{testimonials[locale].map((t) => <article className="card" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section>
      <FinalCta locale={locale} />
    </main>
  );
}
