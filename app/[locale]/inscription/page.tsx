import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/config';
import { seo } from '@/lib/content';
import { RegistrationForm } from './RegistrationForm';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return seo[locale].inscription;
}

export default async function Inscription({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = seo[locale].inscription;
  return <main><section className="section"><div className="container section-head"><span className="eyebrow">WhatsApp +212657116631</span><h1>{data.title}</h1><p>{data.description}</p></div></section><section className="section"><div className="container"><RegistrationForm locale={locale} /></div></section></main>;
}
