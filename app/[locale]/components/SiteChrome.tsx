import Link from 'next/link';
import { academyConfig, navItems, type Locale } from '@/lib/config';
import { copy } from '@/lib/content';

export function Header({ locale }: { locale: Locale }) {
  const other = locale === 'fr' ? 'ar' : 'fr';
  return (
    <header className="header">
      <div className="container navbar">
        <Link className="logo" href={`/${locale}`}>
          <span>Barista Moroccan Academy</span>
          <small>by {academyConfig.company}</small>
        </Link>
        <nav className="navlinks" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.key} href={`/${locale}/${item.href}`}>{item[locale]}</Link>)}
        </nav>
        <div className="actions">
          <Link className="pill" href={`/${other}`}>{other.toUpperCase()}</Link>
          <Link className="cta" href={`/${locale}/inscription`}>{locale === 'fr' ? 'Inscription' : 'التسجيل'}</Link>
        </div>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Barista Moroccan Academy</h3>
          <p>{copy[locale].finalText}</p>
        </div>
        <div>
          <h3>{locale === 'fr' ? 'Contact' : 'التواصل'}</h3>
          <p>{academyConfig.phone}<br />{academyConfig.email}<br />{academyConfig.city}</p>
        </div>
        <div>
          <h3>{locale === 'fr' ? 'Liens' : 'روابط'}</h3>
          <p><Link href={`/${locale}/conditions-generales`}>{locale === 'fr' ? 'Conditions générales' : 'الشروط العامة'}</Link><br /><Link href={`/${locale}/inscription`}>{locale === 'fr' ? 'Inscription' : 'التسجيل'}</Link></p>
        </div>
      </div>
    </footer>
  );
}

export function StickyWhatsApp({ locale }: { locale: Locale }) {
  const text = encodeURIComponent(locale === 'fr' ? 'Bonjour Barista Moroccan Academy, je souhaite des informations sur la formation.' : 'السلام عليكم، أريد معلومات حول تكوين الباريستا.');
  return <a className="whatsapp" href={`https://wa.me/${academyConfig.whatsapp}?text=${text}`} aria-label="WhatsApp">☎</a>;
}

export function FinalCta({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container card">
        <span className="eyebrow">{locale === 'fr' ? 'Dernier appel' : 'الدعوة الأخيرة'}</span>
        <h2>{copy[locale].finalTitle}</h2>
        <p>{copy[locale].finalText}</p>
        <Link className="cta" href={`/${locale}/inscription`}>{copy[locale].primaryCta}</Link>
      </div>
    </section>
  );
}
