import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/config';
import { seo } from '@/lib/content';
import { Footer, Header, StickyWhatsApp } from './components/SiteChrome';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = seo[locale][''];
  return {
    title: data.title,
    description: data.description,
    alternates: { languages: { fr: '/fr', ar: '/ar' } },
    openGraph: { title: data.title, description: data.description, locale }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <div className="locale-shell" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <StickyWhatsApp locale={locale} />
    </div>
  );
}
