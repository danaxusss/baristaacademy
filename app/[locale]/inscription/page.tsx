import type { Metadata } from 'next';
import { type Locale } from '@/lib/config';
import { seo } from '@/lib/content';
import { RegistrationForm } from './RegistrationForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo[locale].inscription;
}

export default async function Inscription({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = seo[locale].inscription;
  return <main><section className="section"><div className="container section-head"><span className="eyebrow">WhatsApp +212657116631</span><h1>{data.title}</h1><p>{data.description}</p></div></section><section className="section"><div className="container"><RegistrationForm locale={locale} /></div></section></main>;
}
